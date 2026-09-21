param([Parameter(Mandatory=$true)][string]$NodePath, [Parameter(Mandatory=$true)][string]$CliPath, [Parameter(Mandatory=$true)][string]$StateRoot)
$ErrorActionPreference = 'Stop'
$logPath = Join-Path $StateRoot 'controller.log'
& $NodePath $CliPath start --state $StateRoot >> $logPath 2>&1
exit $LASTEXITCODE
