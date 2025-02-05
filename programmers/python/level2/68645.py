def solution(n):
  temp = []
  for l_idx in range(1,n+1):
    box=[]
    idx=l_idx
    for e_idx in range(l_idx):
      box.append(idx)
      idx+=1
    temp.append(box)
  # print('temp',temp)

  cnt_idx, arr_idx=n-1,1
  direction="up"
  prev_level= cnt_idx
  while cnt_idx>1:
    # print('-'*50)
    # print('cnt_idx',cnt_idx)
    # print('arr_idx',arr_idx)
    # print('direction',direction)
    # print('prev_level',prev_level)
    for f_idx in range(1,cnt_idx):
      # print('f_idx',f_idx)
      if direction == 'up':
        prev_level-=1
        temp[prev_level][-arr_idx] = temp[prev_level+1][-arr_idx] + 1
      elif direction == 'down':
        temp[prev_level+1][arr_idx] = temp[prev_level][arr_idx] + 1
        prev_level+=1
      else:
        temp[prev_level][arr_idx+f_idx] = temp[prev_level][arr_idx+f_idx-1] + 1

    cnt_idx-=1
    if direction == 'down':
      direction = 'next'
    elif direction == 'up':
      direction='down'
    else:
      direction = 'up'
      arr_idx+=1
    # print('temp',temp)

  answer=[]
  for arr in temp:
    for num in arr:
      answer.append(num)

  return answer

# print(solution(4))
# print(solution(5))
# print(solution(6))
print(solution(7))

# 4	[1,2,9,3,10,8,4,5,6,7]
# 5	[1,2,12,3,13,11,4,14,15,10,5,6,7,8,9]
# 6	[1,2,15,3,16,14,4,17,21,13,5,18,19,20,12,6,7,8,9,10,11]
