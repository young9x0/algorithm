import math
def solution(n, k):
  answer = 0

  def to_k_notation(num,result):
    # print('-'*50)
    # print('num',num)
    # print('result',result)
    if num==0:
      return result

    rest=num%k
    # print('rest',rest)
    result=str(rest)+result
    return to_k_notation(num//k,result)

  def is_prime(num):
    for i in range(2, math.floor(math.sqrt(num))+1):
      # print('i',i, target%i)
      if target!=i and target%i==0:
        return False
    return True

  target=to_k_notation(n,'')
  # print('=target',target)
  filtered_target=(filter(lambda x:len(x)>0, target.split('0')))
  # print('filter',filtered_target)
  handle_as_decimal= list(map(int, filtered_target))
  # print('handle_as_decimal',handle_as_decimal)
  for target in handle_as_decimal:
    if target>1 and is_prime(target):
      # print('prime target',target)
      answer+=1

  return answer


# print(solution(437674,	3))
# print(solution(110011,	10))
# print(solution(7777,	9))
print(solution(11131,	10))
# 437674	3	3
# 110011	10	2
