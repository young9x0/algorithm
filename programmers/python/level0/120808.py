def solution(numer1, denom1, numer2, denom2):
  lcm = findLCM(denom2, denom1)

  if lcm == 1:
    return [numer1*denom2 + numer2*denom1, denom1*denom2]
  else:
    multi1 = denom1 // lcm
    multi2 = denom2 // lcm
    return [numer1 * multi2+numer2*multi1, multi2 * multi1 * lcm ]




# least common multiple
def findLCM(a,b):
  if a % b == 0:
    return b
  elif a % b == 1:
    return 1
  else:
    findLCM(b, a%b )

print(solution(1,	2,	3,	4))
print(solution(9,	2,	1,	3))

# 1	2	3	4	[5, 4]
# 9	2	1	3	[29, 6]
