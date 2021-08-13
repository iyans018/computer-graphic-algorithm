print("Masukan koordinat viewport atau area gambar")
xMin = int(input("Masukan nilai XMin : "))
yMin = int(input("Masukan nilai YMin : "))
xMax = int(input("Masukan nilai Xmax : "))
yMax = int(input("Masukan nilai Ymax : "))
print(f"Area clipping : ({xMin},{yMin},{xMax},{yMax})")

print("\nMasukan 2 koordinat titik yang membentuk garis P dan Q")
x1 = int(input("Masukan nilai Px : "))
y1 = int(input("Masukan nilai Py : "))
x2 = int(input("Masukan nilai Qx : "))
y2 = int(input("Masukan nilai Qy : "))
print(f"Titik P : ({x1},{y1})")
print(f"Titik Q : ({x2},{y2})")

def findTBRL(x, y):
    if (x < xMin):
        L = 1
    else:
        L = 0
    
    if (x > xMax):
        R = 1
    else:
        R = 0

    if (y < yMin):
        B = 1
    else:
        B = 0
    
    if (y > yMax):
        T = 1
    else:
        T = 0
    
    return {
        "Top" : T,
        "Bottom" : B,
        "Right" : R,
        "Left" : L
    }

regionCodeP = findTBRL(x1, y1)
regionCodeQ = findTBRL(x2, y2)

print("\nRegion Coode titik P : ", regionCodeP)
print("Region Code titik Q : ", regionCodeQ)

m = (y2 - y1) / (x2 - x1)

def clippingLine(x, y, m, regionCode, xMin, yMin, xMax, yMax):
    if (regionCode["Top"] == 0 and regionCode["Bottom"] == 0 and regionCode["Right"] == 0 and regionCode["Left"] == 0):
        print("Region Code 0000, artinya tidak ada garis yang perlu dipotong")
    for key in regionCode:
        if (key == "Left" and regionCode[key] == 1):
            yP1 = y + m*(xMin-x)
            print(f"({xMin}, {yP1})")
        elif (key == "Right" and regionCode[key] == 1):
            yP2 = y + m*(xMax-x)
            print(f"({xMax}, {yP2})")
        elif (key == "Bottom" and regionCode[key] == 1):
            xP1 = x + (yMin - y)/m
            print(f"({xP1}, {yMin})")
        elif (key == "Top" and regionCode[key] == 1):
            xP2 = x + (yMax - y)/m
            print(f"({xP2}, {yMax})")

print("\nGaris potong pada titik P : ")
clippingLine(x1, y1, m, regionCodeP, xMin, yMin, xMax, yMax)
print("\nGaris potong pada titik Q : ")
clippingLine(x2, y2, m, regionCodeQ, xMin, yMin, xMax, yMax)
