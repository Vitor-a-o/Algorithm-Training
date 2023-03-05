def descending_order(num):
    num = list(map(int, str(num)))
    num.sort(reverse=True)
    num = "".join(str(x) for x in num)
    return num

print(descending_order(36349875))