def boundaryFill(x, y, fColor, bColor):
    if(getpiexel(x,y) != bColor && getpixel(x,y) != fColor):
        putpixel(x,y,fColor)
        boundaryFill(x+1,y,fColor,bColor)
        boundaryFill(x,y+1,fColor,bColor)
        boundaryFill(x-1,y,fColor,bColor)
        boundaryFill(x,y-1,fColor,bColor)

boundaryFill(10,15,4,15)