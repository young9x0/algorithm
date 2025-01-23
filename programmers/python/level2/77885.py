def solution(numbers):
  answer = []

  def to_bit(target, obj, diff_cnt, make_bit):
    if target % 2 != obj %2:
      diff_cnt+=1

    make_bit.append((target % 2, obj %2))

    if target == 1:
      target=0

    if obj == 1:
      return (diff_cnt, make_bit)
    else:
      return to_bit(target//2, obj//2, diff_cnt, make_bit)

  def converted(gap, t_bit):
    res=0

    for idx, bit_tuple in enumerate(t_bit):
      # print('idx',idx)
      if gap ==2:
        return res

      tgt, obj = bit_tuple
      if tgt == obj:
        continue
      elif obj == 0:
        # print('obj',obj)
        res+= (2**idx)
        gap-=1
      # print('=gap',gap)

    return res

  for num in numbers:
    min= 0
    idx = 1

    gap, m_bit = to_bit(num, num+idx,0, [])
    # print('gap,m_bit', gap, m_bit)
    if gap < 3:
      min = num+idx
    else:
      min = converted(gap, m_bit) + num+idx
      # print('c min',min)

    answer.append(min)

  return answer

# print(solution([2,7]))
# print(solution([7]))
# print(solution([11]))
# print(solution([15]))
# print(solution([16]))
# print(solution([17]))
print(solution([19]))
# [3,11]
