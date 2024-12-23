from itertools import product

def solution(word):
  word_type="AEIOU"
  total =[]

  for r_idx in range(len(word_type)+1):
    for w_tuple in product([type for type in word_type], repeat=r_idx):
      # print(w_tuple)
      total.append("".join(list(w_tuple)))

  total.sort()
  # print(total[:10])
  return total.index(word)

print(solution("AAAAE"))
# print(solution("AAAE"))
# print(solution("AAE"))
# print(solution("I"))
# print(solution("EIO"))
# "AAAAE"	6
# "AAAE"	10
# "I"	1563
# "EIO"	1189
