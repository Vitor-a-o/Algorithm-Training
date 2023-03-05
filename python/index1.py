
def duplicate_encode(word):
    word = word.lower()
    if word.count("(") > 1 and word.count(")") == 1:
        pos = word.find(")")
        word = word.replace("(", ")")
        word = list(word)
        word[pos] = "("
        word = "".join(word)
    else:
        if word.count("(") > 1:
            word = word.replace("(", ")")
        if word.count(")") == 1:
            word = word.replace(")", "(")
    for i in word:
        if not i == ")" and not i == "(":
            if word.count(i) > 1:
                word = word.replace(i, ")")
            else:
                word = word.replace(i, "(")

    return word


print(duplicate_encode("((js)"))