
def solution(numbers):
  numbers=list(map(str,numbers))
  numbers=sorted(numbers,key=lambda x: x*3, reverse=True)
  return "0" if set(numbers) == 0 else "".join(numbers)

# print(solution([6, 10, 2]))
# print(solution([3, 30, 34, 5, 9]))
# print(solution([11,1,1111,2001,199181,2010,2080,3,18,199]))
# print(solution([3,209,88,411,15,600,4,0,48,41]))
print(solution([1,0,10,100,1000,11,121,112,10009,123,102]))
# print(solution([0,0,0]))

# [6, 10, 2]	"6210"
# [3, 30, 34, 5, 9]	"9534330"
