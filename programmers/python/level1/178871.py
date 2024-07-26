def solution(players, callings):
  player_dic = {key:idx for idx, key in enumerate(players)}

  for name in callings:
    idx = player_dic[name]
    player_dic[name] -= 1
    player_dic[players[idx-1]] += 1
    players[idx-1], players[idx] = players[idx], players[idx-1]

  return players

print(solution( ["mumu", "soe", "poe", "kai", "mine"],	["kai", "kai", "mine", "mine"]))
# ["mumu", "soe", "poe", "kai", "mine"]	["kai", "kai", "mine", "mine"]	["mumu", "kai", "mine", "soe", "poe"]
