def to_jade_case(string):
    return " ".join([x.capitalize() for x in string.split(" ")])

print(to_jade_case("o vitor e gostoso opoha"))