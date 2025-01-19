
def solution(x,y,n):
  answer = 0
  tmp_set=set()
  tmp_set.add(x)

  while tmp_set:
    if y in tmp_set:
      return answer

    next=set()
    for tmp in tmp_set:
      if tmp+n <= y:
        next.add(tmp+n)
      if tmp*2 <= y:
        next.add(tmp*2)
      if tmp*3 <= y:
        next.add(tmp*3)

    tmp_set=next
    answer+=1

  return -1

print(solution(10,	40,	5))
print(solution(10,	40,	30))
print(solution(2,	5,	4))
print(solution(1,1,1))
print(solution(2,	14,	5))
print(solution(2,	14,	1))
print(solution(4,	20,	1))
print(solution(4,	23,	1))
print(solution(7,	23,	12))
print(solution(7,	31,	5))

# 2
# 1
# -1
# 0
# 2
# 3
