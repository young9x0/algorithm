def solution(n):
  dp=[0,1,2,3]

  if n > 3:
    for idx in range(4,n+1):
      dp.append(dp[idx-2] + dp[idx-1])

  return dp[n] % 1_000_000_007

# print(solution(4))
print(solution(5))
print(solution(6))
print(solution(7))

