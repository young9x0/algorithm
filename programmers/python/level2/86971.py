uf=[]
def find(a):
  global uf
  print('find')
  print('a',a)
  print('uf[a]',uf[a])
  uf.append(a)
  if uf[a] < 0: return a
  uf[a] = find(uf[a])
  return uf[a]

def merge(a,b):
  global uf
  pa=find(a)
  pb=find(b)
  print('-'*50)
  print('merge')
  print('pa',pa)
  print('pb',pb)
  print('before uf',uf)

  if pa == pb: return
  uf[pa]+=uf[pb]
  uf[pb] =pa
  print('after uf',uf)

def solution(n,wires):
  global uf
  ans=int(1e9)
  # 1000000000
  print('ans',ans)

  k=len(wires)

  for i in range(k):
    print('='*50)
    uf=[-1 for _ in range(n+1)]
    tmp=[wires[x] for x in range(k) if x != i]
    print('1 uf',uf)
    print('tmp',tmp)

    for a,b in tmp: merge(a,b)
    print('2 uf', uf)
    v=[x for x in uf[1:] if x < 0]
    print('v',v)
    ans=min(ans, abs(v[0]-v[1]))

  return ans

print(solution(9,	[[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]]))
# print(solution(4,	[[1,2],[2,3],[3,4]]))
# print(solution(7,	[[1,2],[2,7],[3,7],[3,4],[4,5],[6,7]]))
# print(solution(12,	[[1,4],[2,4],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12]]))

# 9	[[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]]	3
# 4	[[1,2],[2,3],[3,4]]	0
# 7	[[1,2],[2,7],[3,7],[3,4],[4,5],[6,7]]	1