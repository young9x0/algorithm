def solution(numer1, denom1, numer2, denom2):
  lcm = findLCM(denom2, denom1)
  lcm2=1
  nVal = 1
  dVal=1

  if lcm == 1:
    nVal = numer1*denom2 + numer2*denom1
    dVal = denom1*denom2
    lcm2 = findLCM(nVal, dVal)
  else:
    multi1 = denom1 // lcm
    multi2 = denom2 // lcm
    nVal = numer1 * multi2+numer2*multi1
    dVal = multi2 * multi1 * lcm
    lcm2 = findLCM(nVal, dVal)

  return [nVal//lcm2, dVal//lcm2]

# least common multiple
def findLCM(a,b):
  if a % b == 0:
    return b
  elif a % b == 1:
    return a%b
  else:
    return findLCM(b, a%b )

# print(solution(1,	2,	3,	4))
print(solution(9,	2,	1,	3))

# 1	2	3	4	[5, 4]
# 9	2	1	3	[29, 6]
