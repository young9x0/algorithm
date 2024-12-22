def solution(word):
  word_type="AEIOU"
  hist=[]
  sort_dict=[]

  def hist_log(prev_list):
    # print('prev', prev_list)

    tmp=[]
    for p_type in prev_list:
      for type in word_type:
        n_word=p_type+type

        # print('n_word', n_word)
        tmp.append(n_word)

    # print('tmp',tmp)
    hist.append(tmp)
    # print('hist',hist)
    if len(hist) < len(word_type):
      hist_log(hist[-1])

  tmp=[]
  for type in word_type:
    # print('-'*50)
    # print('type',type)

    tmp.append(type)
  hist.append(tmp)
  hist_log(hist[-1])

  # print(hist)
  for list in hist:
    for el in list:
      sort_dict.append(el)

  sort_dict.sort()
  # print(sort_dict)
  return sort_dict.index(word)+1

# print(solution("CCC"))
# print(solution("AAAAE"))
# print(solution("AAAE"))
# print(solution("AAE"))
# print(solution("I"))
print(solution("EIO"))
# "AAAAE"	6
# "AAAE"	10
# "I"	1563
# "EIO"	1189
