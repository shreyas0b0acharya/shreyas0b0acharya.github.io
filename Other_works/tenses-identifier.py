while(True):
    full_sentence = input("Enter the sentence: ")
    if full_sentence.strip() == "":
        break

    sentence_upper = full_sentence.upper()
    sentence_list = sentence_upper.split(".")

    for sentence in sentence_list:
        words_list = sentence.split(" ")
        print(sentence)
        for i, word in enumerate(words_list):
            if word == "ARE" or word == "AM" or word == "IS":
                print(f"{word}: Present tense")
            elif word == "HAS" or word == "HAVE" or word == "HAD":
                if (word == "HAS" or word == "HAVE") and i+1 < len(words_list) and words_list[i+1] == "BEEN":
                    print(f"{word} BEEN: Present Perfect Continuous")
                elif word == "HAD" and i+1 < len(words_list) and words_list[i+1] == "BEEN":
                    print(f"{word} BEEN: Past Perfect Continuous")
                elif word == "HAS" or word == "HAVE":
                    print(f"{word}: Present Perfect Tense")
                elif word == "HAD": 
                    print(f"{word}: Past Perfect Tense")
            elif word == "WAS" or word == "WERE":
                if (word == "WAS" or word == "WERE") and i+1 < len(words_list) and words_list[i+1] == "BEING":
                    print(f"{word} BEING: Past Continuous")
                else:
                    print(f"{word}: Past Simple")
            elif word == "WILL":
                if word == "WILL" and i+1 < len(words_list) and words_list[i+1] == "BE":
                    print(f"{word} BE: Future Continuous")
                else:
                    print(f"{word}: Future Simple")
