def solution(numer1, denom1, numer2, denom2):
  # denominator 분모
  # numerator 분자

  denom = denom1* denom2
  numer =  numer1 * denom2 + numer2 * denom1

  gcd = findGCD(numer, denom)
  return [numer//gcd, denom//gcd]

# greatest common divisor
def findGCD(a,b):
  if a % b == 0:
    return b
  elif a % b == 1:
    return a%b
  else:
    return findGCD(b, a%b)

# print(solution(1,	2,	3,	4))
print(solution(9,	2,	1,	3))

# 1	2	3	4	[5, 4]
# 9	2	1	3	[29, 6]
