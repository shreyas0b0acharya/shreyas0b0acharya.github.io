def check_valid_anagram(s, t):
    def uni_value(a):
        sumof = sum([ord(i) for i in a])
        return sumof
    
    return uni_value(s) == uni_value(t)

print(check_valid_anagram("anagram", "nagaram"))


def check_valid_anagram(s, t):
    return sorted(s) == sorted(t)

# Example usage:
print(check_valid_anagram("anagram", "nagaram"))  # Output: True
print(check_valid_anagram("rat", "car"))          # Output: False
