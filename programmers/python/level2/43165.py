def solution(numbers, target):
  answer = 0
  n_len=len(numbers)
  hist={idx:{'-':False,'+':False} for idx in range(n_len)}

  def dfs(node_idx, temp, is_reverse):
    nonlocal answer
    print('-'*50)
    print('node_idx',node_idx)
    print('temp',temp)
    print('answer',answer)
    print('hist',hist)
    print('is_reverse',is_reverse)

    if is_reverse:
      if node_idx == 0 and hist[node_idx]['-']==True and hist[node_idx]['+']==True:
        print('visited all and finally arrive root', answer)
        return answer

      if hist[node_idx]['+']==True:
        print('go to prev')
        hist[node_idx]['-']=False
        hist[node_idx]['+']=False
        temp-=(numbers[node_idx])
        dfs(node_idx-1, temp,True)
      else:
        print('go to plus path')
        temp+=((numbers[node_idx])*2)
        hist[node_idx]['+']=True
        dfs(node_idx+1, temp,False)

    else:
      next_idx=node_idx+1
      if hist[node_idx]['-'] == False:
        minus_path_value=temp + (-numbers[node_idx]) + sum(numbers[node_idx+1:])
        hist[node_idx]['-'] = True
        print('minus_path_value',minus_path_value,'+temp',temp, '-cur',(numbers[node_idx]), '+rest',sum(numbers[node_idx+1:]))
        if minus_path_value>target and node_idx<n_len-1:
          print('need check next')
          temp-=(numbers[node_idx])
          dfs(next_idx, temp, False)
          return
        else:
          if minus_path_value==target:
            print('minus path is target path!')
            answer+=1

      print("cur node minus path checked, go to plus path")
      temp+=numbers[node_idx]
      hist[node_idx]['+']=True
      if node_idx == n_len-1:
        print('leaf node')
        if temp==target:
          print('plus path is target path!')
          answer+=1
        print("return to prev")
        hist[node_idx]['-']=False
        hist[node_idx]['+']=False
        temp-=numbers[node_idx]
        dfs(node_idx-1,temp, True)
        return

      dfs(next_idx,temp, False)

  dfs(0, 0, False)
  # node_idx: 확인해 볼 cur idx 담아서 보내기
  # temp: cur 아직 더하지 않은 값, cur 전까지 값
  # is_reverse: go to prev node
  return answer

#runtime error case
print(solution([1,2,3,4,5,6,7,8,9,10],	10))

# print(solution([1, 1, 1, 1, 1],	3))
# print(solution([4, 1, 2, 1],	4))
# [1, 1, 1, 1, 1]	3	5
# [4, 1, 2, 1]	4	2
