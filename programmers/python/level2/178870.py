def solution(sequence, k):
  answer=[]
  start,end=0,0
  sum=sequence[0]
  while end < len(sequence)-1:
    if sum < k:
      end+=1
      sum+=sequence[end]
    elif sum>k:
      sum-=sequence[start]
      start+=1
    elif sum == k:
      answer.append([start,end])
      sum-=sequence[start]
      start+=1

  answer.sort(key=lambda x: (x[1]-x[0],x[0]))

  return answer[0]

print(solution([1, 2, 3, 4, 5],	7))
print(solution([1, 1, 1, 2, 3, 4, 5],	5))
print(solution([2, 2, 2, 2, 2],	6))
print(solution([1,2, 2, 2, 2, 2,3],	6))
print(solution([1,2,2,3,4,5,5],	11))

# [1, 2, 3, 4, 5]	7	[2, 3]
# [1, 1, 1, 2, 3, 4, 5]	5	[6, 6]
# [2, 2, 2, 2, 2]	6	[0, 2]
