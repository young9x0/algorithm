def solution(order):
  answer = 0
  o_len=len(order)
  stack=[]
  box_list=[i+1 for i in range(o_len)]
  # print(box_list)

  o_idx, b_idx = 0,0
  while o_idx<o_len and b_idx<o_len+1:
    # print('-'*50)
    # print('order idx',o_idx, order[o_idx])
    # if b_idx<o_len:
      # print('box idx',b_idx, box_list[b_idx])

    while stack and stack[-1] == order[o_idx]:
      answer+=1
      stack.pop()
      o_idx+=1
      # print('box==stack[-1] answer', answer)
      # print('stack pop',stack)

    if b_idx==o_len:
      break

    if box_list[b_idx] == order[o_idx]:
      answer+=1
      o_idx+=1
      # print('box_list[b_idx]==order answer', answer)
    else:
      stack.append(box_list[b_idx])
      # print('stack append',stack)

    if  b_idx<o_len:
      b_idx+=1

  return answer

# print(solution([4, 3, 1, 2, 5]))
print(solution([5, 4, 3, 2, 1]))
# [4, 3, 1, 2, 5]	2
# [5, 4, 3, 2, 1]	5
