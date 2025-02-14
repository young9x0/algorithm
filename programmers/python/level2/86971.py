def dfs(v, graph, visited):
  visited[v] = True
  print('-'*50)
  print('v', v)
  print('graph', graph)
  print('visited', visited)
  return sum([1] + [dfs(u,graph,visited) for u in graph[v] if not visited[u]])

def solution(n,wires):
  graph = [[] for _ in range(n+1)]
  for v,u in wires:
    graph[v].append(u)
    graph[u].append(v)

  print('graph', graph)
  ans=100
  for i in range(n-1):
    visited=[False for _ in range(n+1)]
    v1,v2 =wires[i]
    print('v1,v2', v1, v2)
    visited[v2]=True
    tmp= abs(dfs(v1,graph,visited) - dfs(v2,graph,visited))
    ans=min(tmp, ans)
  return ans

# print(solution(9,	[[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]]))
print(solution(4,	[[1,2],[2,3],[3,4]]))
# print(solution(7,	[[1,2],[2,7],[3,7],[3,4],[4,5],[6,7]]))
# print(solution(12,	[[1,4],[2,4],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12]]))

# 9	[[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]]	3
# 4	[[1,2],[2,3],[3,4]]	0
# 7	[[1,2],[2,7],[3,7],[3,4],[4,5],[6,7]]	1