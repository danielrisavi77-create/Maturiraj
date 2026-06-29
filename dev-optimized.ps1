#!/bin/bash
# Memory-optimized dev server startup script for Windows (PowerShell)
# Usage: Run in PowerShell or use npm run dev:optimized

# Set Node memory limit (4GB - adjust if needed)
$env:NODE_OPTIONS = "--max-old-space-size=4096"

# Run Next.js dev server
pnpm dev
