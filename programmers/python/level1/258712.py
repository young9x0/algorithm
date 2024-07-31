def solution(friends, gifts):
  friends_idx = {name:idx for idx,name in enumerate(friends)}
  friends_len = len(friends)
  history=[[0]*friends_len for idx in friends]

  # print(history)
  for gift in gifts:
    giver, taker = gift.split()
    history[friends_idx[giver]][friends_idx[taker]] += 1

  print(history)
  gift_index_list=[0]*friends_len
  for row in range(friends_len):
    # test = [h_row[row] for h_row in history]
    # print(test)
    gift_index_list[row] = sum(history[row]) - sum(h_row[row] for h_row in history)

  answer = [0]*friends_len
  for row in range(friends_len):
    for col in range(friends_len):
      if history[row][col] > history[col][row]:
        answer[row] += 1
      elif history[row][col] == history[col][row]:
        if gift_index_list[row]>gift_index_list[col]:
          answer[row] += 1
  return max(answer)

print(solution(["muzi", "ryan", "frodo", "neo"],	["muzi frodo", "muzi frodo", "ryan muzi", "ryan muzi", "ryan muzi", "frodo muzi", "frodo ryan", "neo muzi"]))
# print(solution(["joy", "brad", "alessandro", "conan", "david"],	["alessandro brad", "alessandro joy", "alessandro conan", "david alessandro", "alessandro david"]))
# print(solution(["a", "b", "c"],	["a b", "b a", "c a", "a c", "a c", "c a"]))
# ["muzi", "ryan", "frodo", "neo"]	["muzi frodo", "muzi frodo", "ryan muzi", "ryan muzi", "ryan muzi", "frodo muzi", "frodo ryan", "neo muzi"]	2
# ["joy", "brad", "alessandro", "conan", "david"]	["alessandro brad", "alessandro joy", "alessandro conan", "david alessandro", "alessandro david"]	4
# ["a", "b", "c"]	["a b", "b a", "c a", "a c", "a c", "c a"]	0
