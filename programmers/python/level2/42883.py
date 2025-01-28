def solution(number, k):
  num_set= set([num for num in number])
  sorted_set=sorted(num_set,reverse=True)
  # print('sorted_set',sorted_set)
  set_idx_dict= {num:idx+1 for idx,num in enumerate(sorted_set)}

  del_idx_list=[]
  for idx, num in enumerate(number):
    del_idx= (len(number)-idx)* set_idx_dict[num]
    del_idx_list.append((del_idx,idx))

  # print('del_idx_list',del_idx_list)
  sorted_del_list = sorted(del_idx_list,key=lambda x:x[0],reverse=True)
  k_del_list =[idx for val, idx in sorted_del_list[:k]]
  # print('k_del_list',k_del_list)

  answer = ""
  for idx,num in enumerate(number):
    if idx not in k_del_list:
      answer+=number[idx]

  return answer

# print(solution("1924",	2))
# print(solution("1231234",	3))
print(solution("4177252841",	4))

# "1924"	2	"94"
# "1231234"	3	"3234"
# "4177252841"	4	"775841"
