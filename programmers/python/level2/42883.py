def solution(number, k):
  stack = [number[0]]
  for num in number[1:]:
    while stack and stack[-1]<num and k>0:
      k-=1
      stack.pop()
    stack.append(num)
  if k>0:
    stack=stack[:-k]

  return "".join(stack)

# print(solution("1924",	2))
# print(solution("1231234",	3))
# print(solution("4177252841",	4))
# print(solution("11111",	4))
# print(solution("1080201",	4))
# print(solution("1120074",	3))
# print(solution("1010100",	5))
# print(solution("8761639",	3))
print(solution("1769481",	4))

# "1924"	2	"94"
# "1231234"	3	"3234"
# "4177252841"	4	"775841"
# "2635473892"	4	"673892"
# "11111"	4	"1"
# "1080201"	4	"8201"
