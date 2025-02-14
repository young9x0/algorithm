def solution_test(n,wires):
  ans = n
  # list comprehension으로 generator expression을 만들기: https://wikidocs.net/134909
  # generator expression 을 쓰는 이유: 모든 함수를 한꺼번에 실행하는 것이 아니라 필요할 때만 실행하는 방식으로 바뀌게 된다. 이러한 방식을 '느긋한 계산법(lazy evaluation)'이라 부른다.
  test= (wires[i+1:] + wires[:i] for i in range(len(wires)))
  print('test',list(test))

  gen=(x**2 for x in range(3))
  for val in gen:
    print('1',val)

  for val in gen:
    print('2',val)

  # for sub in [[[3, 4], [4, 5], [4, 6], [4, 7], [7, 8], [7, 9]] + [[2, 3]]]:
  #   print('sub =', sub)

  for i in range(len(wires)):
    for sub in [wires[i + 1:] + wires[:i]]:
      s = set(sub[0])
      # print('wires[i + 1:]',wires[i + 1:])
      # print('wires[:i]',wires[:i])
      # print('sub',sub)
      # print('sub[0]',sub[0])
      # print('s',s)
      for v in sub:
        for _ in sub:
          if set(v) & s:
            # print('v',v)
            # print('s',s)
            s.update(v)

      # print('= s', s)

      ans = min(ans, abs(2 * len(s) - n))
  return ans

def solution(n, wires):
    ans = n

    for sub in (wires[i+1:] + wires[:i] for i in range(len(wires))):
        s = set(sub[0])
        # print('sub', sub)
        # print('sub[0]', sub[0])
        # print('s', s)
        [s.update(v) for _ in sub for v in sub if set(v) & s]
        ans = min(ans, abs(2 * len(s) - n))
    return ans

print(solution_test(9,	[[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]]))
# print(solution(4,	[[1,2],[2,3],[3,4]]))
# print(solution(7,	[[1,2],[2,7],[3,7],[3,4],[4,5],[6,7]]))
# print(solution(12,	[[1,4],[2,4],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12]]))

# 9	[[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]]	3
# 4	[[1,2],[2,3],[3,4]]	0
# 7	[[1,2],[2,7],[3,7],[3,4],[4,5],[6,7]]	1