def solution(k, dungeons):
  idx_list = [idx for idx in range(len(dungeons))]
  def shuffle_idx(temp):
    # print('temp',temp)
    if len(temp) == len(dungeons):
      result.append(temp)
      return

    for idx in idx_list:
      if idx not in temp:
        new = [i for i in temp]
        new.append(idx)
        # print('new',new)
        shuffle_idx(new)

  result=[]
  for idx in idx_list:
    # print('-'*50)
    # print('idx',idx)
    shuffle_idx([idx])
    # print('result',result)


  max_cnt = 0
  for temp in result:
    answer = 0
    user_degree=k
    # print('temp',temp)
    for idx in temp:
      # print('dungeon',dungeons[idx])
      min_degree, minus_degree = dungeons[idx]
      # print('user_degree',user_degree)
      if user_degree >= min_degree:
        user_degree -= minus_degree
        answer += 1
      else:
        break

    if answer > max_cnt:
      max_cnt = answer
      # print('max',max_cnt)

  return max_cnt

print(solution(80,	[[80,20],[50,40],[30,10]]))
# 3
