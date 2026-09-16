Add-Type -AssemblyName System.Runtime.WindowsRuntime
$asTaskGeneric = [System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object { 
    $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation`1' 
}
$asTaskAction = [System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object { 
    $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncAction' 
}

function Await-Op($op, $type) {
    $method = $asTaskGeneric.MakeGenericMethod($type)
    $t = $method.Invoke($null, @($op))
    $t.Wait(-1) | Out-Null
    return $t.Result
}

function Await-Action($action) {
    $t = $asTaskAction.Invoke($null, @($action))
    $t.Wait(-1) | Out-Null
}

[Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime] | Out-Null
[Windows.Data.Pdf.PdfDocument, Windows.Data.Pdf, ContentType = WindowsRuntime] | Out-Null
[Windows.Storage.Streams.InMemoryRandomAccessStream, Windows.Storage.Streams, ContentType = WindowsRuntime] | Out-Null

$storageFile = Await-Op ([Windows.Storage.StorageFile]::GetFileFromPathAsync("C:\Users\admin\Downloads\CV - NGUYỄN THẾ THU HƯỜNG FV.pdf")) ([Windows.Storage.StorageFile])
$pdfDoc = Await-Op ([Windows.Data.Pdf.PdfDocument]::LoadFromFileAsync($storageFile)) ([Windows.Data.Pdf.PdfDocument])

$outDir = "D:\ptit\thuhuong\assets\images\pdf_pages"
if (!(Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir -Force | Out-Null }

Write-Host "Total Pages: $($pdfDoc.PageCount)"

for ($idx = 0; $idx -lt $pdfDoc.PageCount; $idx++) {
    $page = $pdfDoc.GetPage($idx)
    $stream = New-Object Windows.Storage.Streams.InMemoryRandomAccessStream
    Await-Action ($page.RenderToStreamAsync($stream))
    
    $netStream = [System.IO.WindowsRuntimeStreamExtensions]::AsStreamForRead($stream)
    $bytes = New-Object byte[] $netStream.Length
    $netStream.Read($bytes, 0, $bytes.Length) | Out-Null
    
    $num = $idx + 1
    $dest = Join-Path $outDir "page_$num.png"
    [System.IO.File]::WriteAllBytes($dest, $bytes)
    $stream.Dispose()
    $page.Dispose()
    Write-Host "Saved page_$num.png ($($bytes.Length) bytes)"
}
