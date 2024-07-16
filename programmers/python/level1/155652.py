from string import ascii_lowercase
def solution(s, skip, index):
  answer = ''
  a_to_z = set(ascii_lowercase)
  print(a_to_z)
  a_to_z -= set(skip)
  a_to_z = sorted(a_to_z)
  l = len(a_to_z)
  alpha_dict = {alpha:idx for idx, alpha in enumerate(a_to_z)}
  print(alpha_dict)

  for ch in s:
    answer += a_to_z[(alpha_dict[ch] + index) % l]

  return answer

print(solution("aukks",	"wbqd",	5	))
# "aukks"	"wbqd"	5	"happy"
