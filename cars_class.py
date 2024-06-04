class Calculator:

    def __init__(self,num1:int,num2:int):
        self.num1=num1
        self.num2=num2
    
    def add(self) -> int:
        return self.num1+self.num2
    
    def mul(self) -> int:
        return self.num1*self.num2
    
    def div(self) -> int:
        return self.num1/self.num2
    
    def sub(self) -> int:
        return self.num1-self.num2
    

calc =Calculator(5,4)
ad=calc.add()
mul=calc.mul()
div=calc.div()
sub=calc.sub()
print(ad,mul,div,sub)
        
            