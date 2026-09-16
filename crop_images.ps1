Add-Type -AssemblyName System.Drawing

function Crop-Image($sourcePath, $destPath, $x, $y, $w, $h) {
    $src = [System.Drawing.Image]::FromFile($sourcePath)
    $rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
    $bmp = New-Object System.Drawing.Bitmap($w, $h)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.DrawImage($src, 0, 0, $rect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    $bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $bmp.Dispose()
    $src.Dispose()
    Write-Host "Cropped ${destPath} ${w}x${h}"
}

# Avatar from Page 1 (The framed portrait of Thu Huong)
# Page 1: 2880 x 1620
# Photo frame is roughly from x=1940 to 2720, y=170 to 1250
# Actual photo inside frame: x=2020, y=225, w=640, h=780
Crop-Image "D:\ptit\thuhuong\assets\images\pdf_pages\page_1.png" "D:\ptit\thuhuong\assets\images\avatar.jpg" 2020 220 640 780

# Profile photo from Page 2 (Street in Hanoi)
# Page 2: x=150, y=730 to around x=1370, y=1460
Crop-Image "D:\ptit\thuhuong\assets\images\pdf_pages\page_2.png" "D:\ptit\thuhuong\assets\images\profile_street.jpg" 150 730 1220 730

# Certificates from Page 3
# Aptis certificate
Crop-Image "D:\ptit\thuhuong\assets\images\pdf_pages\page_3.png" "D:\ptit\thuhuong\assets\images\cert_aptis.jpg" 100 460 620 740
# HSK certificate
Crop-Image "D:\ptit\thuhuong\assets\images\pdf_pages\page_3.png" "D:\ptit\thuhuong\assets\images\cert_hsk.jpg" 2240 220 520 880

# Page 7: Marketing Big Day badges
Crop-Image "D:\ptit\thuhuong\assets\images\pdf_pages\page_7.png" "D:\ptit\thuhuong\assets\images\event_marketing_mix.jpg" 2280 0 600 860
Crop-Image "D:\ptit\thuhuong\assets\images\pdf_pages\page_7.png" "D:\ptit\thuhuong\assets\images\event_marketing_bigday.jpg" 2260 860 620 760

# Page 8: Japanwave
Crop-Image "D:\ptit\thuhuong\assets\images\pdf_pages\page_8.png" "D:\ptit\thuhuong\assets\images\event_japanwave.jpg" 1500 810 1340 790

# Page 9: Takecare MC & Stage
Crop-Image "D:\ptit\thuhuong\assets\images\pdf_pages\page_9.png" "D:\ptit\thuhuong\assets\images\event_mc_takecare.jpg" 820 810 600 740
Crop-Image "D:\ptit\thuhuong\assets\images\pdf_pages\page_9.png" "D:\ptit\thuhuong\assets\images\event_hall.jpg" 2180 810 700 740

# Page 10: Event Experience / Festivals
Crop-Image "D:\ptit\thuhuong\assets\images\pdf_pages\page_10.png" "D:\ptit\thuhuong\assets\images\event_yfest.jpg" 1240 50 750 970
Crop-Image "D:\ptit\thuhuong\assets\images\pdf_pages\page_10.png" "D:\ptit\thuhuong\assets\images\event_beer_hanoi.jpg" 2020 50 760 970
Crop-Image "D:\ptit\thuhuong\assets\images\pdf_pages\page_10.png" "D:\ptit\thuhuong\assets\images\event_attendee.jpg" 430 50 720 950
