def solution(bandage, health, attacks):
  max_health = health
  attack_time = [0] * (attacks[-1][0]+1)

  for attack in attacks:
    time, power = attack
    attack_time[time]=power
  # print(attack_time)

  t,x,y=bandage
  bandage_cnt=0
  for time in range(1, attacks[-1][0]+1):
    # print('-'*50)
    # print('time', time)
    if attack_time[time] > 0:
      # print('attack')
      health -= attack_time[time]
      bandage_cnt = 0
    else:
      bandage_cnt += 1
      # print('bandage_cnt', bandage_cnt)
      if bandage_cnt == t:
        # print('bandage', health, x+y)
        health += x+y
        bandage_cnt = 0
      else:
        health += x

    if health <= 0:
      return -1

    if health > max_health:
      health = max_health
    # print('health', health)
  return health

# print(solution([5, 1, 5],	30,	[[2, 10], [9, 15], [10, 5], [11, 5]]))
print(solution([3, 2, 7],	20,	[[1, 15], [5, 16], [8, 6]]))
# print(solution([4, 2, 7],	20,	[[1, 15], [5, 16], [8, 6]]))
# print(solution([1, 1, 1],	5,	[[1, 2], [3, 2]]))
# print(solution([1, 1, 1],	5,	[[1, 6], [3, 2]]))
# [5, 1, 5]	30	[[2, 10], [9, 15], [10, 5], [11, 5]]	5
# [3, 2, 7]	20	[[1, 15], [5, 16], [8, 6]]	-1
# [4, 2, 7]	20	[[1, 15], [5, 16], [8, 6]]	-1
# [1, 1, 1]	5	[[1, 2], [3, 2]]	3
