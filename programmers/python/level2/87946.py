from itertools import permutations

def solution(k, dungeons):
  visited=0
  for dungeon_p in permutations(dungeons):
    print(dungeon_p)
    have, cnt=k,0
    for need, cost in dungeon_p:
      print(need,cost)
      if have>=need:
        have-=cost
        cnt+=1
      else:
        break
    visited = max(visited,cnt)

  return visited

print(solution(80,	[[80,20],[50,40],[30,10]]))
# 3
