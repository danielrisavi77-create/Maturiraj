$dataFile = "c:\Users\Daniel\Desktop\maturiraj\app\discere\hrvatski\simulator\hrvatskiSimulatorData.js"
$jsxFile = "c:\Users\Daniel\Desktop\maturiraj\app\discere\hrvatski\simulator\HrvatskiSimulator.jsx"

$dataContent = Get-Content $dataFile -Raw -Encoding UTF8
$jsxContent = Get-Content $jsxFile -Raw -Encoding UTF8

# 1. Check QS_ refs in data file
$qsRefs = [regex]::Matches($dataContent, 'qs:(QS_\w+)') | ForEach-Object { $_.Groups[1].Value } | Sort-Object -Unique
$qsDefs = [regex]::Matches($dataContent, 'const\s+(QS_\w+)\s*=') | ForEach-Object { $_.Groups[1].Value } | Sort-Object -Unique
$missingQs = $qsRefs | Where-Object { $_ -notin $qsDefs }
Write-Host "=== QS_ in data EXAMS but not defined ==="
if ($missingQs) { $missingQs } else { Write-Host "  (none)" }

# 2. Check T_ refs in data file
$tRefs = [regex]::Matches($dataContent, '\bctx:(T\d+_\w+)') | ForEach-Object { $_.Groups[1].Value } | Sort-Object -Unique
$tDefs = [regex]::Matches($dataContent, 'const\s+(T\d+_\w+)\s*=') | ForEach-Object { $_.Groups[1].Value } | Sort-Object -Unique
$missingT = $tRefs | Where-Object { $_ -notin $tDefs }
Write-Host "=== T_ referenced in data but not defined ==="
if ($missingT) { $missingT } else { Write-Host "  (none)" }

# 3. Check T_ refs in JSX file (shouldn't reference any T_ since they're in data file)
$jsxTRefs = [regex]::Matches($jsxContent, '\bctx:(T\d+_\w+)') | ForEach-Object { $_.Groups[1].Value } | Sort-Object -Unique
Write-Host "=== T_ referenced in JSX (should be 0) ==="
if ($jsxTRefs) { $jsxTRefs } else { Write-Host "  (none - good)" }

# 4. Check QS_ refs in JSX file (shouldn't have any)
$jsxQsRefs = [regex]::Matches($jsxContent, '\bQS_\w+') | ForEach-Object { $_.Value } | Sort-Object -Unique
Write-Host "=== QS_ referenced in JSX (should be 0) ==="
if ($jsxQsRefs) { $jsxQsRefs } else { Write-Host "  (none - good)" }

# 5. Check any remaining 'const QS_' or 'const T[0-9]' in JSX
$jsxDataDefs = [regex]::Matches($jsxContent, 'const\s+(QS_\w+|T\d+_\w+)\s*=') | ForEach-Object { $_.Groups[1].Value }
Write-Host "=== Stale data defs in JSX (should be 0) ==="
if ($jsxDataDefs) { $jsxDataDefs } else { Write-Host "  (none - good)" }

# 6. Check SSR-unsafe patterns
$ssrIssues = @()
$jsxLines = Get-Content $jsxFile -Encoding UTF8
for ($i = 0; $i -lt $jsxLines.Count; $i++) {
    $line = $jsxLines[$i]
    # Skip lines inside useEffect or event handlers
    if ($line -match 'useState\(\(\)\s*=>\s*document\.' -and $line -notmatch 'typeof document') {
        $ssrIssues += "Line $($i+1): document in useState without guard"
    }
    if ($line -match 'useState\(\(\)\s*=>\s*localStorage\.' -and $line -notmatch 'typeof localStorage') {
        $ssrIssues += "Line $($i+1): localStorage in useState without guard"
    }
    if ($line -match 'useState\(!navigator\.' -and $line -notmatch 'typeof navigator') {
        $ssrIssues += "Line $($i+1): navigator in useState without guard"
    }
    if ($line -match '^\s+window\.\w+\s*=' -and $line -notmatch 'typeof window' -and $line -notmatch 'useEffect') {
        # Check if it's inside a useEffect by looking at surrounding context
        $inEffect = $false
        for ($j = [Math]::Max(0, $i-5); $j -lt $i; $j++) {
            if ($jsxLines[$j] -match 'useEffect') { $inEffect = $true; break }
        }
        if (-not $inEffect) {
            $ssrIssues += "Line $($i+1): window assignment outside useEffect: $($line.Trim().Substring(0, [Math]::Min(60, $line.Trim().Length)))"
        }
    }
}
Write-Host "=== SSR issues ==="
if ($ssrIssues) { $ssrIssues } else { Write-Host "  (none)" }

Write-Host "`n=== SUMMARY ==="
Write-Host "Data file: $((Get-Content $dataFile -Encoding UTF8).Count) lines"
Write-Host "JSX file: $($jsxLines.Count) lines"
Write-Host "EXAMS count: $($qsRefs.Count)"
Write-Host "T_ text vars: $($tDefs.Count)"
Write-Host "QS_ arrays: $($qsDefs.Count)"
