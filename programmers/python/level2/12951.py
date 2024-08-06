def solution(s):
  answer = ''

  for ch in s.lower().split(' '):
    print("ch",ch.capitalize() == '')
    if answer == '':
      answer += ch.capitalize()
    else:
      answer += ' '+ ch.capitalize()

  return answer

# print(solution("3people unFollowed me"))
# print(solution("3People unFollowed me"))
# print(solution("3People unFollowed me     1aA      2a"))
print(solution("  for the what 1what  "))
# print(solution("for the last week"))
# print(solution("for    the last week"))
# "3people unFollowed me"	"3people Unfollowed Me"
# "for the last week"	"For The Last Week"
