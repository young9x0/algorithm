from collections import deque
def solution(bridge_length, weight, truck_weights):
  answer = 0
  ing_arr =deque([])
  t_len=len(truck_weights)
  t_idx=0
  while t_idx < t_len:
    # print('-'*50)
    # print('1 t_idx',t_idx)
    # print('ing_arr',ing_arr)
    # print('len(ing_arr)',len(ing_arr))

    while len(ing_arr) < bridge_length:
      answer+=1
      # print('answer',answer)
      # print('1 t_idx',t_idx)
      if t_idx < t_len and sum(ing_arr) + truck_weights[t_idx] <= weight:
        ing_arr.append(truck_weights[t_idx])
        t_idx+=1
      else:
        ing_arr.append(0)
      # print('ing_arr',ing_arr)

    if t_idx < t_len:
      out= ing_arr.popleft()
      # print('while out',out)

  # print('f ing_arr',ing_arr)
  while sum(ing_arr) > 0:
    out= ing_arr.popleft()
    # print('f out',out)
    answer+=1

  return answer

print(solution(2,	10,	[7,4,5,6]))
# print(solution(100,	100,	[10]))
# print(solution(100,	100,	[10,10,10,10,10, 10,10,10,10,10]))
# print(solution(100,	100,	[1,2,3,4,5,6,7,8,9,10]))

# 2	10	[7,4,5,6]	8
# 100	100	[10]	101
# 100	100	[10,10,10,10,10,10,10,10,10,10]	110
