def solution(numer1, denom1, numer2, denom2):
  gcd = findGCD(denom2, denom1)
  gcd2=1
  nVal = 1
  dVal=1

  if gcd == 1:
    nVal = numer1*denom2 + numer2*denom1
    dVal = denom1*denom2
    gcd2 = findGCD(nVal, dVal)
  else:
    multi1 = denom1 // gcd
    multi2 = denom2 // gcd
    nVal = numer1 * multi2+numer2*multi1
    dVal = multi2 * multi1 * gcd
    gcd2 = findGCD(nVal, dVal)

  return [nVal//gcd2, dVal//gcd2]

# greatest common divisor
def findGCD(a,b):
  if a % b == 0:
    return b
  elif a % b == 1:
    return a%b
  else:
    return findGCD(b, a%b )

# print(solution(1,	2,	3,	4))
print(solution(9,	2,	1,	3))

# 1	2	3	4	[5, 4]
# 9	2	1	3	[29, 6]
