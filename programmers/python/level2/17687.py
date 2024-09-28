big=["A","B","C","D","E","F"]
def solution(n, t, m, p):
  #진법 n, 미리 구할 숫자의 갯수 t, 게임에 참가하는 인원 m, 튜브의 순서 p
  answer = ''
  a="0"
  i=0
  while True:
    print('-'*50)
    print('a',a)
    if len(a)>=t*m:
      break
    b=""
    j=i
    print('j',j)
    while (j):
      print('in while: j',j)
      if j%n>9:
        b=big[j%n-10]+b
      else:
       b=str(j%n)+b
      j=j//n
    print('b',b)
    a+=b
    i+=1

  print('a[p-1::m]',a[p-1::m])
  answer=a[p-1::m][:t]
  return answer

# print(solution(2,	4,	2,	1))
print(solution( 16,	16,	2,	1))
# print(solution(  16,	16,	2,	2	))
# 2	4	2	1	"0111"
# 16	16	2	1	"02468ACE11111111"
# 16	16	2	2	"13579BDF01234567"
