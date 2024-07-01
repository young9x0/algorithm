def solution(numer1, denom1, numer2, denom2):
  numer = 0
  denom=0
  if denom2 % denom1 == 0:
    denom = denom2
    numer = numer1 * (denom2//denom1) + numer2
  else:
    denom = denom2 * denom1
    numer = denom2 * numer1 + denom1 * numer2

  return [numer, denom]

print(solution(1,	2,	3,	4))
print(solution(9,	2,	1,	3))

# 1	2	3	4	[5, 4]
# 9	2	1	3	[29, 6]
