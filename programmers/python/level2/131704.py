def solution(order):
  stack=[]
  answer=0

  for idx, num in enumerate(order):
    print('order', num)

    stack.append(idx+1)
    print('stack',stack)
    while stack and stack[-1] == order[answer]:
      stack.pop()
      answer+=1
      print('answer',answer)

  return answer

# print(solution([4, 3, 1, 2, 5]))
print(solution([5, 4, 3, 2, 1]))
# [4, 3, 1, 2, 5]	2
# [5, 4, 3, 2, 1]	5
