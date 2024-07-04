def solution(number):
  answer = 0

  l = len(number)
  for i in range(l-2):
   for j in range(i+1, l-1):
     for k in range(j+1, l):
        # print(i,j,k)
        if number[i] + number[j] + number[k] == 0:
          answer += 1

  return answer

# print(solution([-2, 3, 0, 2, -5]))
# print(solution([-3, -2, -1, 0, 1, 2, 3]))
print(solution( [-1, 1, -1, 1]))

# [-2, 3, 0, 2, -5]	2
# [-3, -2, -1, 0, 1, 2, 3]	5
# [-1, 1, -1, 1]	0
