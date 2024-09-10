def solution(priorities, location):
  queue=[(i,p) for i,p in enumerate(priorities)]
  answer=0
  while True:
    cur = queue.pop(0)
    print('cur',cur)
    print('queue',queue)
    if any(cur[1] < q[1] for q in queue):
      queue.append(cur)
    else:
      answer+=1
      print('answer',answer)
      if cur[0] == location:
        return answer

# print(solution([2, 1, 3, 2],	2))
print(solution([1, 1, 9, 1, 1, 1],	0	))
# [2, 1, 3, 2]	2	1
# [1, 1, 9, 1, 1, 1]	0	5
