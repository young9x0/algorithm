def solution(s):
  answer=[]
  s1=s.lstrip('{').rstrip('}').split('},{')
  print(s1)
  new_s=[]
  for i in s1:
    new_s.append(i.split(','))
  print(new_s)
  new_s.sort(key=len)

  for i in new_s:
    for j in range(len(i)):
      if int(i[j]) not in answer:
        answer.append(int(i[j]))

  return answer


# print(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"))
print(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"))
# print(solution("{{20,111},{111}}"))
# print(solution("{{123}}"))
# print(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}"))
# "{{2},{2,1},{2,1,3},{2,1,3,4}}"	[2, 1, 3, 4]
# "{{1,2,3},{2,1},{1,2,4,3},{2}}"	[2, 1, 3, 4]
# "{{20,111},{111}}"	[111, 20]
# "{{123}}"	[123]
# "{{4,2,3},{3},{2,3,4,1},{2,3}}"	[3, 2, 4, 1]
