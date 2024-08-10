def solution(s):
  splited = list(map(int,s.split(' ')))

  return f"{min(splited)} {max(splited)}"

# print(solution("1 2 3 4"))
print(solution("-1 -2 -3 -4"))
print(solution("-1 -1"))
# "1 2 3 4"	"1 4"
# "-1 -2 -3 -4"	"-4 -1"
# "-1 -1"	"-1 -1"
