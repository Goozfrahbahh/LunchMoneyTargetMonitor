// target/bootstrap.js
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

console.log("================================");
console.log("  Lunch Money Target Monitor");
console.log("================================\n");

const internalsDir = path.join(__dirname, "internals");
process.chdir(internalsDir);

console.log("Current folder:", process.cwd());
console.log();

// First-time install
if (fs.existsSync("package.json")) {
  const hasNodeModules = fs.existsSync("node_modules");

  if (!hasNodeModules) {
    console.log("📦 First-time setup: running npm install...\n");
    try {
      execSync("npm install", { stdio: "inherit" });
      console.log("\n✅ Dependencies installed.\n");
    } catch (err) {
      console.log("\n⚠ npm install failed (continuing anyway)");
      console.log("Message:", err.message, "\n");
    }
  } else {
    console.log("✅ Packages already installed.\n");
  }
} else {
  console.log("⚠ No package.json found, skipping npm install.\n");
}

// Run monitor
console.log("▶ Starting monitor: node monitor-ui.js\n");
try {
  execSync("node monitor-ui.js", { stdio: "inherit" });
  console.log("\n✅ Monitor finished.\n");
} catch (err) {
  console.log("\n❌ Monitor crashed.");
  console.log("Message:", err.message, "\n");
}

console.log("Press any key in the window to close it.");