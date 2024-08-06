def solution(s):
  answer = ""
  # print(len(s))
  splited = s.lower().split(" ")
  # print(splited)

  for idx, ch in enumerate(splited):
    # print('idx', idx)
    # print('==ch', ch)
    if ch != "":
      if ch[0].islower():
        answer += ch[0].upper() + ch[1:]
      else:
        answer += ch
      if ch != splited[-1]:
        # print('no fin')
        answer += " "
    else:
      if idx != len(splited)-1:
        # print('---fin')
        answer += " "

  # print(len(answer))
  return answer

# print(solution("3people unFollowed me"))
# print(solution("3People unFollowed me"))
# print(solution("3People unFollowed me     1aA      2a"))
print(solution("  for the what 1what  "))
# print(solution("for the last week"))
# print(solution("for    the last week"))
# "3people unFollowed me"	"3people Unfollowed Me"
# "for the last week"	"For The Last Week"
