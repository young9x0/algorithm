def solution(number):
  answer = 0
  for i, num in enumerate(number):
    j = i +1
    while j < len(number):
      k = j +1
      while k < len(number):
        # print('i,j,k', i,j,k)
        # print('number[i] + number[j] + number[k]',num ,number[j] , number[k])
        if num + number[j] + number[k] == 0:
          answer += 1
        k += 1
      j+=1

  return answer

# print(solution([-2, 3, 0, 2, -5]))
# print(solution([-3, -2, -1, 0, 1, 2, 3]))
print(solution( [-1, 1, -1, 1]))

# [-2, 3, 0, 2, -5]	2
# [-3, -2, -1, 0, 1, 2, 3]	5
# [-1, 1, -1, 1]	0
