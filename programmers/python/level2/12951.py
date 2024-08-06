def solution(s):
  answer = []
  splited = s.split(" ")
  for ch in splited:
    # print('ch', ch)
    if len(ch)>0:
      if ch[0].islower():
        answer.append(ch[0].upper() + ch[1:].lower())
      else:
        answer.append(ch.lower())

    else:
      answer.append(ch)
  return " ".join(answer)

# print(solution("3people unFollowed me"))
# print(solution("3People unFollowed me"))
# print(solution("for the last week"))
print(solution("for    the last week"))
# "3people unFollowed me"	"3people Unfollowed Me"
# "for the last week"	"For The Last Week"
