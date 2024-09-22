from itertools import product
def solution(numbers, target):
  numbers=[1,2,3,4]
  num_pair=[(num,-num) for num in numbers]
  product_pair=product(*num_pair)
  # list(product_pair)
  # list(product_pair) 를 하고 나면 sum_res이 빈배열이 되어버리는 이유는?
  # 파이썬 코드에서 product_pair는 itertools.product 객체로, 이 객체는 한 번만 순회 가능한 이터레이터입니다.
  # 그래서 list(product_pair)를 호출하면 이터레이터가 모두 순회되어 소비되고, 다시 사용하려고 할 때는 빈 이터레이터가 됩니다.
  # 따라서 그 이후 map(sum, product_pair)를 실행하면 이미 이터레이터가 소진되어 아무 값도 없고, 빈 배열이 나옵니다.
  # print(product_pair)
  sum_res=list(map(sum,product_pair))
  print(sum_res)
  return sum_res.count(target)

# print(solution([1, 1, 1, 1, 1],	3))
print(solution([4, 1, 2, 1],	4))
# [1, 1, 1, 1, 1]	3	5
# [4, 1, 2, 1]	4	2
