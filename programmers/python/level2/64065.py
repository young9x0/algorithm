def solution(s):
  delete_brace=s[2:-2].split('},{')
  # print(delete_brace)
  arr_list=list(sorted(map(lambda x: x.split(','),delete_brace) , key=lambda a: len(a)))
  # print(arr_list)
  answer = [int(arr_list[0][0])]
  # print(answer)
  for idx in range(1,len(arr_list)):
    for str in arr_list[idx]:
      # print('str',str)
      if int(str) not in answer:
        answer.append(int(str))
        # print('answer',answer)
        break
  return answer

print(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"))
print(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"))
print(solution("{{20,111},{111}}"))
print(solution("{{123}}"))
print(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}"))
# "{{2},{2,1},{2,1,3},{2,1,3,4}}"	[2, 1, 3, 4]
# "{{1,2,3},{2,1},{1,2,4,3},{2}}"	[2, 1, 3, 4]
# "{{20,111},{111}}"	[111, 20]
# "{{123}}"	[123]
# "{{4,2,3},{3},{2,3,4,1},{2,3}}"	[3, 2, 4, 1]
