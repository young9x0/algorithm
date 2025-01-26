from collections import defaultdict

def solution(numbers):
  num_dict=defaultdict(list)
  is_all_zero=True

  for num in numbers:
    if is_all_zero and num > 0:
      is_all_zero=False
    n_str=str(num)
    num_dict[n_str[0]].append(n_str)

  # print('num_dict',num_dict)
  if is_all_zero:
    return '0'
  def check_permutation(tmp):
    s_tmp=sorted(tmp, reverse=True)
    # print('= s_tmp',s_tmp)
    s_len=len(s_tmp)

    i,j = 0,1
    while i < s_len-1:
        i_j = s_tmp[i]+s_tmp[j]
        j_i = s_tmp[j]+s_tmp[i]
        if i_j < j_i:
          temp = s_tmp[i]
          s_tmp[i] = s_tmp[j]
          s_tmp[j] = temp
        if j < s_len-1:
          j+=1
        else:
          i+=1
          j=i+1

    # print('s_tmp',s_tmp)
    return "".join(s_tmp)

  # print(check_permutation(['19','1097','19918','1998','189','1','109']))
  d_keys= num_dict.keys()

  s_keys=sorted(d_keys, reverse=True)
  answer=''
  for key in s_keys:
    if len(num_dict[key]) == 1:
      answer+=num_dict[key][0]
    else:
      # print('='*50)
      s_int=check_permutation(num_dict[key])
      # print('s_int',s_int)
      answer+=str(s_int)

  return answer

# print(solution([6, 10, 2]))
# print(solution([3, 30, 34, 5, 9]))
print(solution([11,1,1111,2001,199181,2010,2080,3,18,199]))
# print(solution([0,0,0]))

# [6, 10, 2]	"6210"
# [3, 30, 34, 5, 9]	"9534330"
