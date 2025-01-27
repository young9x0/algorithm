
from functools import cmp_to_key
# cmp_to_key: 비교 함수를 키 함수로 변환합니다
# https://docs.python.org/ko/3/library/functools.html
# https://wikidocs.net/109303

def comparator(a,b):
  t1=a+b
  t2=b+a
  # print('(int(t1) > int(t2))',(int(t1) > int(t2)))
  return (int(t1) > int(t2)) - (int(t1) < int(t2))

def solution(numbers):
  str_num = [str(num) for num in numbers]
  sorted_num = sorted(str_num,key=cmp_to_key(comparator), reverse=True)
  answer='0' if set(numbers) == 0 else "".join(sorted_num)
  return answer

# print(solution([6, 10, 2]))
# print(solution([3, 30, 34, 5, 9]))
# print(solution([11,1,1111,2001,199181,2010,2080,3,18,199]))
# print(solution([3,209,88,411,15,600,4,0,48,41]))
print(solution([1,0,10,100,1000,11,121,112,10009,123,102]))
# print(solution([0,0,0]))

# [6, 10, 2]	"6210"
# [3, 30, 34, 5, 9]	"9534330"
