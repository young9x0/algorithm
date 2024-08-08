def solution(A,B):
  answer = 0
  cnt = 0
  used_a = [a for a in A]
  used_b = [b for b in B]
  limit = len(A)
  while limit > cnt:
    # print('-'*50)
    # print('cnt',cnt)
    # print('used_a',used_a)
    # print('used_b',used_b)
    cnt += 1
    max_a=[0,0]
    min_b=[0,max(B)]
    for a_idx, a_val in enumerate(A):
        # print('a_val',a_val)
        if used_a[a_idx] > 0 and max_a[1] < a_val:
          max_a = [a_idx,a_val]
    for b_idx, b_val in enumerate(B):
        if used_b[b_idx] > 0 and min_b[1] > b_val:
          min_b = [b_idx,b_val]

    # print('max_a',max_a)
    # print('min_b',min_b)
    answer += max_a[1] * min_b[1]
    used_a[max_a[0]] = 0
    used_b[min_b[0]] = 0
    # print('answer',answer)
  return answer

# print(solution([1, 4, 2],	[5, 4, 3]))
# print(solution([1, 4, 2],	[5, 4, 4]))
print(solution([1,2],	[3,4]))
# print(solution([2],	[3]))
# [1, 4, 2]	[5, 4, 4]	29
# [1,2]	[3,4]	10
