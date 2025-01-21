
def solution(numbers):
  answer = []
  def to_bit_idx(idx, target, result):
    # print('target%2',target, target%2)
    if target%2 == 1:
      result.append((idx, 1))
    else:
      result.append((idx, 0))

    if target <2:
      return [idx+1, set(result)]
    else:
      return to_bit_idx(idx+1, target//2, result)

  for num in numbers:
    [t_idx, target_bit]= to_bit_idx(0,num,[])
    min= num+(2**(len(target_bit) + 1))
    idx=1
    # print('min',min)
    # print(t_idx, 'target_bit',target_bit)
    while num+idx < min+1:
      [n_idx,next_bit]=to_bit_idx(0,num+idx,[])
      same=next_bit&target_bit
      diff_cnt= n_idx-len(same)

      # print(n_idx,'next_bit',next_bit, num+idx)
      # print('same',same)
      # print('diff_cnt',diff_cnt)

      if 0<diff_cnt< 3 and min > num+idx:
        min = num+idx
        # print('min',min)

      idx+=1

    answer.append(min)
  return answer

# print(solution([2,7]))
print(solution([7]))
# [3,11]
