class Complex:
    def __init__(self, real=0, imag=0):
        self.real = real
        self.imag = imag


    def readComplex(self):
        self.real = int(input("Enter the real part: "))
        self.imag = int(input("Enter the imaginary part: "))


    def showComplex(self):
        print(f"({self.real}) + i({self.imag})")


    def add2Complex(self, b):
        c = Complex()
        c.real = self.real + b.real
        c.imag = self.imag + b.imag
        return c


def main():
    compList = []
    num = int(input("\nEnter the value for N: "))
    for i in range(num):
        print('Object', i + 1)
        obj = Complex()
        obj.readComplex()
        compList.append(obj)


    print("\nEntered Complex numbers are:")
    for obj in compList:
        obj.showComplex()


    sumObj = Complex()
    for obj in compList:
        sumObj = sumObj.add2Complex(obj)


    print("Sum of N complex numbers is:")
    sumObj.showComplex()


main()
