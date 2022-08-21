import sys
input = sys.stdin.readline

s = set()
for _ in range(int(input())):
    cmd = list(input().split())
    if len(cmd) == 1:
        if cmd[0] == "all":
            s = set([i for i in range(1, 21)])
        else:
            s = set()
    else:
        a, x = cmd[0], int(cmd[1])
        if a == "add":
            s.add(x)
        elif a == "remove":
            s.discard(x)
        elif a == "check":
            if x in s:
                print(1)
            else:
                print(0)
        else:
            if x in s:
                s.discard(x)
            else:
                s.add(x)