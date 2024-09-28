DIGITS = list('0123456789ABCDEF')
def n2base(n,base):
  if n==0:
    return DIGITS[0]
  digits=[]
  while n>0:
    digits.append(DIGITS[n%base])
    n //= base

  return ''.join(digits[::-1])

def solution(n, t, m, p):
  #진법 n, 미리 구할 숫자의 갯수 t, 게임에 참가하는 인원 m, 튜브의 순서 p
  answer = []
  num=0
  while len(answer)<t*m:
    answer+=list(n2base(num, n))
    num+=1

  return ''.join(answer[p-1::m][:t])

# print(solution(2,	4,	2,	1))
print(solution( 16,	16,	2,	1))
# print(solution(  16,	16,	2,	2	))
# 2	4	2	1	"0111"
# 16	16	2	1	"02468ACE11111111"
# 16	16	2	2	"13579BDF01234567"
