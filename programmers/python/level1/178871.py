def solution(players, callings):
  for call in callings:
    rank = players.index(call)
    players[rank] = players[rank-1]
    players[rank-1] = call
    # print('players',players)
  return players

print(solution( ["mumu", "soe", "poe", "kai", "mine"],	["kai", "kai", "mine", "mine"]))
# ["mumu", "soe", "poe", "kai", "mine"]	["kai", "kai", "mine", "mine"]	["mumu", "kai", "mine", "soe", "poe"]
