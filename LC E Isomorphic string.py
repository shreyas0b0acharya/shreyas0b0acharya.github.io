def check_isomorphic(s, t):
    if len(s) != len(t):
        return False
    
    s_dict = {}
    t_dict = {}
    
    for i, j in zip(s, t):
        if i in s_dict:
            if s_dict[i] != j:
                return False
        else:
            s_dict[i] = j
        
        if j in t_dict:
            if t_dict[j] != i:
                return False
        else:
            t_dict[j] = i
            
    return True

print(check_isomorphic("foo", "bar"))  # Output: False