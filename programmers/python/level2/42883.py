def solution(number, k):
  i=0
  while i < len(number)-1 and k>0:
    print('i',i,number[i])
    if number[i]<number[i+1]:
      number=number[:i]+number[i+1:]
      if i>0:
        i-=1
      k-=1
    else:
      i+=1
  if k>0:
    return number[:-k]

  return number

# print(solution("1924",	2))
# print(solution("1231234",	3))
# print(solution("4177252841",	4))
# print(solution("11111",	4))
# print(solution("1080210",	4))


# "1924"	2	"94"
# "1231234"	3	"3234"
# "4177252841"	4	"775841"
# "2635473892"	4	"673892"
# "11111"	4	"1"
# "1080201"	4	"8201"
