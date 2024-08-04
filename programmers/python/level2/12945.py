def solution(n):
  fibonacci_number = [0,1]
  def add_fibonacci(num,list):
    list.append(fibonacci_number[num-1] + fibonacci_number[num-2])

  for num in range(2,n+1):
    add_fibonacci(num, fibonacci_number)

  # print(fibonacci_number)

  return fibonacci_number[n] % 1234567

# print(solution(3))
print(solution(5))
# 3	2
# 5	5
