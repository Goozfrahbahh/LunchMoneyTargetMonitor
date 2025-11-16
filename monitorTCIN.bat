@echo off
title Lunch Money Target Monitor
cd /d "%~dp0"

echo Starting Lunch Money Target Monitor...
echo.

node target\bootstrap.js

echo.
echo (Script finished. Press any key to close.)
pause >nul







