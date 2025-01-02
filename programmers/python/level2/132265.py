from collections import Counter

def solution(topping):
  answer=0
  dic=Counter(topping)
  print(topping,'dic',dic)
  set_dic=set()

  for type in topping:
    dic[type]-=1
    set_dic.add(type)

    print('dic',dic)
    print('set_dic',set_dic)
    if dic[type] == 0:
      dic.pop(type)

    if len(dic) == len(set_dic):
      print('same!')
      answer+=1

  return answer

# print(solution([2, 2, 2, 2, 1, 1, 2, 3, 2]))
# print(solution([1, 2, 3, 3, 2, 2, 2, 2, 2, 1]))
# print(solution([1, 2, 1, 3, 1, 4, 1, 2]))
# print(solution([1, 2, 3, 1, 4]))
# print(solution([1, 2, 1, 1, 4]))
# print(solution([1,1,1,1,1]))
# print(solution([7,1,8,1,8,7]))
# print(solution([2,4,3,2,4,3,2,8]))
print(solution([3,2,2,1,1,2,2,3,2,1]))
# print(solution([2,1,1,3,1,3,1,1,1,2,1]))
# print(solution([1,1,4,7,7,5]))
# 2
# 1
# 2
# 0
# 2
# 4
# 1
# 1
# 4
# 2
# 1
