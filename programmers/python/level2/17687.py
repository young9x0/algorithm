from collections import deque
def solution(n, t, m, p):
  #진법 n, 미리 구할 숫자의 갯수 t, 게임에 참가하는 인원 m, 튜브의 순서 p
  answer = ''
  # print(chr(10+55))
  # #A
  # print(chr(15+55))
  # #F

  def  conversion_representation(target,to,result):
    # print('-'*50)
    # print('target',target)
    # print('to',to)
    # print('result',result)
    if target//to == 0:
      result.appendleft(target%to)
      return result
    else:
      result.appendleft(target%to)
      return  conversion_representation(target//to,to,result)

  # print( conversion_representation(100,8,deque()))
  num_list_len=t*m
  temp=[]
  for num in range(num_list_len):
    temp+=conversion_representation(num,n,deque())

  # print('temp',temp)
  for idx in range(p-1,num_list_len,m):
    if temp[idx] > 9 and temp[idx] < 16:
      answer += chr(55+temp[idx])
    else:
      answer+=str(temp[idx])

  return answer

# print(solution(2,	4,	2,	1))
# print(solution( 16,	16,	2,	1))
print(solution(  16,	16,	2,	2	))
# 2	4	2	1	"0111"
# 16	16	2	1	"02468ACE11111111"
# 16	16	2	2	"13579BDF01234567"
