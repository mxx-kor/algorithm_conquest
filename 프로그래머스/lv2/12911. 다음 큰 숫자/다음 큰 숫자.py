def solution(n):
    one = format(n, 'b').count('1')
    while True:
        n += 1
        if (format(n, 'b').count('1') == one):
            return n