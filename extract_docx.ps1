Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead('HLADIK MASTER RESUME.docx')
$entry = $zip.Entries | Where-Object { $_.FullName -eq 'word/document.xml' }
$stream = $entry.Open()
$reader = New-Object System.IO.StreamReader($stream)
$xmlText = $reader.ReadToEnd()
$reader.Close()
$stream.Close()
$zip.Dispose()

$xml = [xml]$xmlText
$nodes = $xml.SelectNodes("//*[local-name()='p']")
$lines = foreach ($node in $nodes) {
    $text = $node.InnerText.Trim()
    if ($text) {
        $text
    }
}
$lines | Out-File -FilePath "extracted_resume.txt" -Encoding utf8
