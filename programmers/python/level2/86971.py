from collections import defaultdict

def solution(n,wires):
  w_dict = defaultdict(list)

  for f,s in wires:
    w_dict[f].append(s)
    w_dict[s].append(f)

  # print(w_dict)
  w_sorted = sorted(w_dict.items(), key=lambda x: len(x[1]), reverse=True)
  # print('w_sorted',w_sorted)

  w_tree={item[0]:[] for item in w_sorted}
  visited={item[0]:False for item in w_sorted}

  for node, link in w_sorted:
    # print('node',node, link)
    if visited[node] == False:
      visited[node] = True

    for child in link:
      if visited[child] == False:
        visited[child] = True
        w_tree[node].append(child)

  def child_cnt(key, node):
    # print('-'*50)
    # print('cnt:',c_dp[key])
    # print('node:',node)
    if len(w_tree[node]) == 0:
      return
    else:
      for child in w_tree[node]:
        c_dp[key] += 1
        child_cnt(key, child)

  # print('w_tree',w_tree)
  max=0
  node, child_list = w_sorted[0]
  # print('child_list',child_list)
  c_dp={key:1 for key in child_list}
  for child in child_list:
    child_cnt(child, child)
    # print('c_dp',c_dp)
    if c_dp[child] > max:
      max = c_dp[child]

  # print('max',max)

  return n-(max*2)

# print(solution(9,	[[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]]))
# print(solution(4,	[[1,2],[2,3],[3,4]]))
print(solution(7,	[[1,2],[2,7],[3,7],[3,4],[4,5],[6,7]]))

# 9	[[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]]	3
# 4	[[1,2],[2,3],[3,4]]	0
# 7	[[1,2],[2,7],[3,7],[3,4],[4,5],[6,7]]	1