def solution(prices):
  p_len=len(prices)
  answer = [idx for idx in range(p_len-1,-1,-1)]
  # print('answer',answer)
  stack=[]

  for idx in range(p_len):
    # print('-'*50)
    # print('idx',idx,prices[idx])
    # print('stack',stack)

    if idx == p_len-1:
      while stack:
        tmp=stack.pop()
        answer[tmp[0]]=idx-tmp[0]
      break
    else:
      while stack and stack[-1][1] > prices[idx]:
        # print('stack[-1], prices[idx]', stack[-1], prices[idx])
        tmp=stack.pop()
        answer[tmp[0]]=idx-tmp[0]

    stack.append((idx,prices[idx]))

  return answer

print(solution([1, 2, 3, 2, 3]))
# print(solution([9,4,7,6,5,2,3,8]))
# [1, 2, 3, 2, 3]	[4, 3, 1, 1, 0]
