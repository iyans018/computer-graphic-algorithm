def inputVertex(vertex):
    lengthVertex = int(input("Masukan jumlah vertex: "))

    for i in range(lengthVertex):
        x = int(input("input x: "))
        y = int(input("input y: "))
        vertex.append([x, y])
    
    return vertex

def findMax(vertex, i):
    if(vertex[i][1] > vertex[i+1][1]):
        return vertex[i][1]
    else :
        return vertex[i+1][1]

def Main():
    vertex = []
    edgesTable = []
    activeTable = []
    slop = []

    inputVertex(vertex)
    

if __name__ == "__main__":
    Main()