from collections import defaultdict

def solution(numbers):
  num_dict=defaultdict(list)
  for num in numbers:
    n_str=str(num)
    num_dict[n_str[0]].append(n_str)

  # print('num_dict',num_dict)

  def check_permutation(tmp):
    max=int("".join(tmp))
    def make_permutation(temp, rest, limit):
      nonlocal max
      # print('-'*50)
      # print('temp',temp)
      if len(temp) == limit:
        # print('f temp',temp)
        res= int("".join(temp))
        if res>max:
          max=res
          # print('change max',max)
        return

      # print('rest',rest)
      r_len=len(rest)
      for idx in range(r_len):
        t_copy = [t for t in temp]
        r_copy = [t for t in rest]
        r_copy.pop(idx)
        t_copy.append(rest[idx])
        make_permutation(t_copy, r_copy, limit)

    t_len= len(tmp)
    for i in range(t_len):
      copy = [t for t in tmp]
      # print('tmp[i]',tmp[i])
      # print('='*50)
      copy.pop(i)
      make_permutation([tmp[i]], copy, t_len)

    # print('max',max)
    return max

  # print(check_permutation(['36','3','30','31']))
  s_keys=sorted(num_dict.keys(), reverse=True)

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

# [6, 10, 2]	"6210"
# [3, 30, 34, 5, 9]	"9534330"
