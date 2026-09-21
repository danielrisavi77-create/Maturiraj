param(
    [string]$StateRoot = "$env:LOCALAPPDATA\MaturirajOrchestrator",
    [string]$TaskName = 'Maturiraj Agent Orchestrator',
    [switch]$Uninstall
)
$ErrorActionPreference = 'Stop'
if ($Uninstall) {
    Unregister-ScheduledTask -TaskName $TaskName -Confirm:$false
    return
}
$nodeExecutable = (Get-Command node.exe).Source
$cliPath = Join-Path $PSScriptRoot 'cli.mjs'
$runnerPath = Join-Path $PSScriptRoot 'run-hidden.ps1'
if (-not (Test-Path -LiteralPath (Join-Path $StateRoot 'config.json'))) { throw 'Run cli.mjs init first.' }
foreach ($candidate in @($nodeExecutable, $cliPath, $runnerPath, $StateRoot)) {
    if ($candidate.Contains('"') -or $candidate.Contains("`n")) { throw 'Invalid path in scheduled task arguments.' }
}
$arguments = '-NoProfile -NonInteractive -WindowStyle Hidden -File "{0}" -NodePath "{1}" -CliPath "{2}" -StateRoot "{3}"' -f $runnerPath, $nodeExecutable, $cliPath, $StateRoot
$powershellExecutable = Join-Path $env:SystemRoot 'System32/WindowsPowerShell/v1.0/powershell.exe'
$action = New-ScheduledTaskAction -Execute $powershellExecutable -Argument $arguments -WorkingDirectory (Resolve-Path (Join-Path $PSScriptRoot '../..')).Path
$trigger = New-ScheduledTaskTrigger -AtLogOn -User ([System.Security.Principal.WindowsIdentity]::GetCurrent().Name)
$settings = New-ScheduledTaskSettingsSet -MultipleInstances IgnoreNew -RestartCount 3 -RestartInterval (New-TimeSpan -Minutes 1) -ExecutionTimeLimit ([TimeSpan]::Zero) -StartWhenAvailable -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries
$principal = New-ScheduledTaskPrincipal -UserId ([System.Security.Principal.WindowsIdentity]::GetCurrent().Name) -LogonType Interactive -RunLevel Limited
Register-ScheduledTask -TaskName $TaskName -Action $action -Trigger $trigger -Settings $settings -Principal $principal -Description 'Subscription-only Maturiraj task controller. No goal means no model calls.' -Force | Select-Object TaskName,State
