def solution(order):
  o_len=len(order)
  stack=[]

  o_idx, box_num = 0,1
  while box_num<o_len+1:
    print('-'*50)
    print('box_num',box_num)
    stack.append(box_num)
    while stack[-1] == order[o_idx]:
      o_idx+=1
      stack.pop()
      print('stack',stack)

      if len(stack) == 0:
        break

    box_num+=1

  return o_idx

print(solution([4, 3, 1, 2, 5]))
# print(solution([5, 4, 3, 2, 1]))
# [4, 3, 1, 2, 5]	2
# [5, 4, 3, 2, 1]	5
