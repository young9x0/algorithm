def solution(queue1, queue2):
  indicator2=sum(queue1)-int(sum(queue1+queue2)/2)
  answer=0
  sub_list=(queue1+queue2)[::-1]
  add_list=(queue2+queue1)[::-1]
  print(add_list)
  while indicator2!=0:
    try:
      if indicator2>0:
        indicator2-=sub_list.pop()
      else:
        indicator2+=add_list.pop()
    except:
      return -1
    answer+=1
  return answer

print(solution([3, 2, 7, 2],	[4, 6, 5, 1]))
# print(solution([1, 2, 1, 2],	[1, 10, 1, 2]))
# print(solution([1, 1],	[1, 5]))
# print(solution([1,1,9,8],	[1,5,1]))
# print(solution([1,2,1,6],	[1,1,1,15]))

# [3, 2, 7, 2]	[4, 6, 5, 1]	2
# [1, 2, 1, 2]	[1, 10, 1, 2]	7
# [1, 1]	[1, 5]	-1
#2
#-1
