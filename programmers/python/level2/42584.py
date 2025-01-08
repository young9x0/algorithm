def solution(prices):
  answer = [0] * len(prices)

  for i in range(len(prices)):
    print('i',i,prices[i])
    for j in range(i+1, len(prices)):
      print('j',j,prices[j])
      if prices[i] <= prices[j]:
        print("next is bigger")
        answer[i] += 1
      else:
        print("prev is bigger")
        answer[i] += 1
        break
  return answer

print(solution([1, 2, 3, 2, 3]))
# print(solution([9,4,7,6,5,2,3,8]))
# [1, 2, 3, 2, 3]	[4, 3, 1, 1, 0]
