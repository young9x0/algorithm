def solution(s):
  sort_s = sorted(map(int,s.split(' ')))

  return f"{sort_s[0]} {sort_s[-1]}"

print(solution("1 2 3 4"))
print(solution("-1 -2 -3 -4"))
print(solution("-1 -1"))
# "1 2 3 4"	"1 4"
# "-1 -2 -3 -4"	"-4 -1"
# "-1 -1"	"-1 -1"
