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

  def make_prime_list(num):
    result=[n for n in range(4,num+1)]
    for i in range(2,math.floor(math.sqrt(num))):
      for idx, target in enumerate(result):
        if target!=i and target%i==0:
          result.pop(idx)

    return result

  target=to_k_notation(n,'')
  # print('=target',target)
  sorted_target= sorted(target.split('0'), key= lambda x : len(x), reverse=True)
  # print('sorted_target',sorted_target)
  filtered_target=(filter(lambda x:len(x)>0, sorted_target))
  # print('filter',(filtered_target))
  target_to_decimal= list(map(int, filtered_target))
  # print('target_to_decimal',target_to_decimal)
  prime_list= [2,3]+make_prime_list(target_to_decimal[0])
  # print('prime_list', prime_list)
  for num in target_to_decimal:
    if num in prime_list:
      answer+=1

  return answer

# print(solution(4,	2))
print(solution(437674,	3))
print(solution(110011,	10))
# 437674	3	3
# 110011	10	2
