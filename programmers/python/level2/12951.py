def solution(s):
  answer = ""
  splited = s.lower().split(" ")
  # print(splited)
  for ch in splited:
    # print('ch', ch)
    if len(ch)>0:
      if ch[0].islower():
        answer += ch[0].upper() + ch[1:]
      else:
        answer += ch
      if ch != splited[-1]:
        answer += " "
    else:
      answer += " "
  return answer

# print(solution("3people unFollowed me"))
# print(solution("3People unFollowed me"))
print(solution("3People unFollowed me     1aA      2a"))
# print(solution("for the last week"))
# print(solution("for    the last week"))
# "3people unFollowed me"	"3people Unfollowed Me"
# "for the last week"	"For The Last Week"
