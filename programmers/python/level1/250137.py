def solution(bandage, health, attacks):
  hp = health
  start = 1
  t,x,y = bandage

  for time, power in attacks:
    print('time',time,'start',start,(time - start) // t * y, (time-start) * x)
    print('1 hp',hp)
    hp += ((time - start) // t * y + (time-start) * x)
    print('2 hp',hp)
    start = time +1

    if hp >= health:
      hp= health

    hp -= power
    print('3 hp',hp)
    if hp <= 0:
      return -1
  return hp

# print(solution([5, 1, 5],	30,	[[2, 10], [9, 15], [10, 5], [11, 5]]))
# print(solution([3, 2, 7],	20,	[[1, 15], [5, 16], [8, 6]]))
# print(solution([4, 2, 7],	20,	[[1, 15], [5, 16], [8, 6]]))
print(solution([1, 1, 1],	5,	[[1, 2], [3, 2]]))
# print(solution([1, 1, 1],	5,	[[1, 6], [3, 2]]))
# [5, 1, 5]	30	[[2, 10], [9, 15], [10, 5], [11, 5]]	5
# [3, 2, 7]	20	[[1, 15], [5, 16], [8, 6]]	-1
# [4, 2, 7]	20	[[1, 15], [5, 16], [8, 6]]	-1
# [1, 1, 1]	5	[[1, 2], [3, 2]]	3
