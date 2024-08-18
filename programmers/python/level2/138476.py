def solution(k, tangerine):
  cnt_dict={tang:0 for tang in set(tangerine)}
  for tang in tangerine:
    cnt_dict[tang] +=1
  # print(cnt_dict)

  sorted_dict=sorted(cnt_dict.items(),key=lambda x:x[1], reverse=True)
  # print(sorted_dict)
  answer = 0
  total_cnt=0
  for (key,cnt) in sorted_dict:
    if total_cnt < k:
      total_cnt += cnt
      answer+=1
  return answer

# print(solution(6,	[1, 3, 2, 5, 4, 5, 2, 3]))
# print(solution(4,	[1, 3, 2, 5, 4, 5, 2, 3]))
print(solution(2,	[1, 1, 1, 1, 2, 2, 2, 3]))
# 6	[1, 3, 2, 5, 4, 5, 2, 3]	3
# 4	[1, 3, 2, 5, 4, 5, 2, 3]	2
# 2	[1, 1, 1, 1, 2, 2, 2, 3]	1
