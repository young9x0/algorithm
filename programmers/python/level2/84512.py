def solution(word):
  word_type="AEIOU"
  answer=0
  length= len(word_type)
  for i,n in enumerate(word):
    answer += (length**(length-i) -1)/(length-1) * word_type.index(n) + 1
  return answer

# print(solution("AAAAE"))
# print(solution("AAAE"))
# print(solution("AAE"))
# print(solution("I"))
print(solution("EIO"))
# "AAAAE"	6
# "AAAE"	10
# "I"	1563
# "EIO"	1189
