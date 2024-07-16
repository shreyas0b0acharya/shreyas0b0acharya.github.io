def ransom_note(ran_note, magazine):
    note_ptr = 0
    mag_ptr = 0
    
    while mag_ptr < len(magazine):
        if ran_note[note_ptr] == magazine[mag_ptr]:
            note_ptr += 1
            if note_ptr == len(ran_note):
                return True
        else:
            note_ptr = 0
        mag_ptr += 1
    
    return False
  
print(ransom_note("ab", "dfabcd"))