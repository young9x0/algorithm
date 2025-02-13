from collections import defaultdict

def solution(n,wires):
  w_dict = defaultdict(list)

  for f,s in wires:
    w_dict[f].append(s)
    w_dict[s].append(f)

  # print(w_dict)

  def child_cnt(root,node, visited):
    # print('-'*50)
    # print('node:',node)
    # print('visited:',visited)
    if visited[node] == False:
      visited[node] = True

      for child in w_dict[node]:
        # print('child_cnt child:',child)
        if visited[child] == False:
          c_dp[root] += 1
          child_cnt(root,child,visited)

  result=[]
  for node, val in w_dict.items():
    # print('='*50)
    # print('root', node)
    # print('val', val)
    if len(val)>1:
      max=0
      c_dp={key:1 for key in val}
      visited={key:False for key in range(1,n+1)}
      visited[node] = True
      for child in val:
        # print('= child', child)
        child_cnt(child, child, visited)
        # print('c_dp',c_dp)
        if c_dp[child] > max:
          max = c_dp[child]
        # print('max',max)
      result.append((n-max, max))

  # print('result',result)
  min=n
  for a,b in result:
    if min > abs(a-b):
      min = abs(a-b)
  return min

print(solution(9,	[[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]]))
print(solution(4,	[[1,2],[2,3],[3,4]]))
print(solution(7,	[[1,2],[2,7],[3,7],[3,4],[4,5],[6,7]]))
print(solution(12,	[[1,4],[2,4],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12]]))

# 9	[[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]]	3
# 4	[[1,2],[2,3],[3,4]]	0
# 7	[[1,2],[2,7],[3,7],[3,4],[4,5],[6,7]]	1