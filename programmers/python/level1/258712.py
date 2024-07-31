def solution(friends, gifts):
  friends_idx = {name:idx for idx,name in enumerate(friends)}
  history=[[0]*len(friends) for idx in friends]

  # print(history)
  for gift in gifts:
    giver, taker = gift.split()
    history[friends_idx[giver]][friends_idx[taker]] += 1

  # print(history)
  gift_index_list=[]
  next_month_list=[0]*len(friends)
  for row in friends:
   give_total_cnt = sum(history[friends_idx[row]])
   take_total_cnt =0
   for col in friends:
     take_total_cnt += history[friends_idx[col]][friends_idx[row]]
   gift_index_list.append(give_total_cnt - take_total_cnt)

  # print(gift_index_list)
  for row in friends:
    # print('_'*50)
    # print(next_month_list)
    # print('row',row)
    row_idx=friends_idx[row]
    for col in friends:
      # print('col',col)

      col_idx=friends_idx[col]
      if row_idx == col_idx:
        continue

      # print('history[row_idx][col_idx]',history[row_idx][col_idx], )
      # print('history[col_idx][row_idx]',history[col_idx][row_idx], )
      if history[row_idx][col_idx] == history[col_idx][row_idx]:
        # print('gift_index_list[row_idx]',gift_index_list[row_idx])
        # print('gift_index_list[col_idx]',gift_index_list[col_idx])
        if gift_index_list[row_idx] > gift_index_list[col_idx]:
          next_month_list[row_idx] += 1

      elif history[row_idx][col_idx] > history[col_idx][row_idx]:
        next_month_list[row_idx] += 1

    # print(next_month_list)
  return max(next_month_list)

# print(solution(["muzi", "ryan", "frodo", "neo"],	["muzi frodo", "muzi frodo", "ryan muzi", "ryan muzi", "ryan muzi", "frodo muzi", "frodo ryan", "neo muzi"]))
# print(solution(["joy", "brad", "alessandro", "conan", "david"],	["alessandro brad", "alessandro joy", "alessandro conan", "david alessandro", "alessandro david"]))
# print(solution(["a", "b", "c"],	["a b", "b a", "c a", "a c", "a c", "c a"]))
# ["muzi", "ryan", "frodo", "neo"]	["muzi frodo", "muzi frodo", "ryan muzi", "ryan muzi", "ryan muzi", "frodo muzi", "frodo ryan", "neo muzi"]	2
# ["joy", "brad", "alessandro", "conan", "david"]	["alessandro brad", "alessandro joy", "alessandro conan", "david alessandro", "alessandro david"]	4
# ["a", "b", "c"]	["a b", "b a", "c a", "a c", "a c", "c a"]	0
