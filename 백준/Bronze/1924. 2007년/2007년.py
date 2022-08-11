days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
dates = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

a, b = map(int, input().split())
total = 0
if a != 1:
    total += sum(dates[:a-1])
total += b

print(days[(total % 7)-1])