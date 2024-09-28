

def solution(n, t, m, p):
  DIGITS = list('0123456789ABCDEF')
  #진법 n, 미리 구할 숫자의 갯수 t, 게임에 참가하는 인원 m, 튜브의 순서 p
  def _rep(num, base):
    print('-'*50)
    print('num',num)
    share,rest=divmod(num,base)
    str=DIGITS[rest]
    print('share',share)
    print('rest',rest)
    print('str',str)
    return ('' if share==0 else _rep(share,base)) + str

  numbers=''
  for idx in range(0,t*m):
    numbers+=_rep(idx,n)
    if len(numbers)>=t*m:
      break

  answer = ''
  for idx in range(p-1,t*m,m):
    answer+=numbers[idx]

  return answer

# print(solution(2,	4,	2,	1))
print(solution( 16,	16,	2,	1))
# print(solution(  16,	16,	2,	2	))
# 2	4	2	1	"0111"
# 16	16	2	1	"02468ACE11111111"
# 16	16	2	2	"13579BDF01234567"
