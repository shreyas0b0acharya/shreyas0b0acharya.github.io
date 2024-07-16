def check_palindrome(inp):
    if inp == "":
        return True
    else:
        wording = ""
        for i in inp:
            if i.isalpha():
                wording += i.lower()
        print(wording)
        rev = wording[::-1]
        pali = True
        x = 0
        while x < len(wording):
            if wording[x] != rev[x]:
                pali = False
                break
            x += 1
        return pali

print(check_palindrome("ig is siig"))