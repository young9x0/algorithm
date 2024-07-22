def solution(numbers, hand):
  cur = ['*','#']
  dict = {
  1:'L',
  4:'L',
  7:'L',
  3:'R',
  6:'R',
  9:'R',
  }
  middle = [0,2,5,8]
  keypad = [
   [1,2,3],
   [4,5,6],
   [7,8,9],
   ['*',0,'#']
  ]
  answer = ''
  def check_pos(num):
    if num == 0:
      return [3,1]
    elif num == '*':
      return [3,0]
    elif num == '#':
      return [3,2]

    elif num%3 == 0:
      return [(num //3) -1 , 2]
    else:
      return [num //3, (num%3)-1]


  for num in numbers:
    # print('---num', num)
    # print('cur', cur)
    if num in middle:
      target = check_pos(num)
      l_pos = check_pos(cur[0])
      r_pos = check_pos(cur[1])
      # print('target',target)
      # print('l_pos',l_pos)
      # print('r_pos',r_pos)
      l_len = abs(target[0]-l_pos[0]) + abs(target[1]-l_pos[1])
      r_len = abs(target[0]-r_pos[0]) + abs(target[1]-r_pos[1])
      if l_len < r_len:
        answer += 'L'
        cur[0] = num
      elif l_len > r_len:
        answer += 'R'
        cur[1] = num
      else:
        if hand == 'left':
          answer += 'L'
          cur[0] = num
        else:
          answer += 'R'
          cur[1] = num

    else:
      answer += dict[num]
      if dict[num] == 'L':
        cur[0] = num
      else:
        cur[1] = num

  return answer

# print(solution([1, 3,  4, 5, 8,  2, 1, 4, 5, 9, 5],	"right"))
# print(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2],	"left"))
print(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0],	"right"))
# [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]	"right"

# [7, 0, 8,  2, 8, 3,  1, 5, 7,  6, 2]	"left"
# "LRL LRR LLL RR"
# "LRL LRR LLL RR"
# [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]	"right"
# "LLR LLR LLRL"
# "LLR LLR LLRL"

