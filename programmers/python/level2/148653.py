def solution(storey):
  answer=0
  s_list = sorted(map(int,str(storey)),reverse=True)
  print(s_list)

  s_len = len(s_list)
  for floor in range(s_len):
    if s_list[floor] < 5:
      answer+=s_list[floor]
    elif s_list[floor] == 5:
      answer+=5
      if floor+1<s_len and s_list[floor+1] > 4:
        s_list[floor+1] += 1
    else:
      answer += 10 - s_list[floor]
      if floor+1<s_len:
        s_list[floor+1] += 1
      else:
        answer+=1

  return answer

# print(solution(16))
# print(solution(2554))
# print(solution(1))
# print(solution(10105))
print(solution(555))

# 16	6
# 2554	16
# 1
# 7
