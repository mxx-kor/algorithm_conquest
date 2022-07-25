def solution(lottos, win_nums):
    match = len(set(lottos) & set(win_nums))
    zero = lottos.count(0)
    return [7 - max(match + zero, 1), 7 - max(match, 1)]