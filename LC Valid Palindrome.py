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

def check_pali(inp):
    pf = 0
    pb = -1

    word = "".join(letter.lower() for letter in inp if letter.isalpha())

    while pf < len(word):
        if word[pf] != word[pb]:
            return False
        pf += 1
        pb -= 1

    return True

print(check_pali("a.b3b r fb f-r';bba"))
