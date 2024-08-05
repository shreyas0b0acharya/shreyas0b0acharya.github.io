def check_seq(seq, subseq):
    index = 0
    count = 0
    for letter in subseq:
        for i in range(index, len(seq)):
            if letter == seq[i]:
                count += 1
                index = i + 1
                break
    return count == len(subseq)

print(check_seq('apple', 'alp'))


def is_subsequence(s, t):
    s_pointer, t_pointer = 0, 0
    
    while s_pointer < len(s) and t_pointer < len(t):
        if s[s_pointer] == t[t_pointer]:
            s_pointer += 1
        t_pointer += 1
    
    return s_pointer == len(s)

s1 = "abc"
t1 = "ahbgdc"
print(is_subsequence(s1, t1))  # Output: true

s2 = "axc"
t2 = "ahbgdc"
print(is_subsequence(s2, t2))  # Output: false
