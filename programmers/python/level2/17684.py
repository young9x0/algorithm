def solution(msg):
  answer = []
  init={chr(idx+64):idx for idx in range(1,27)}
  # print(chr(65), ord('A'))
  idx=0
  while idx-1 < len(msg):
    # print('---idx',idx)
    # print('---w',msg[idx])
    if idx+1 == len(msg):
      # print("last letter")
      answer.append(init[msg[idx]])
      break

    gap=1
    # print('while msg[idx:next]', msg[idx:idx+gap+1])
    # update gap
    # idx+gap+1: default is 2
    # check w exist in init
    while msg[idx:idx+gap+1] in init.keys():
      if idx+gap+1 == len(msg)+1:
        # print("last letter with gap")
        break
      # print('add to gap!')
      gap+=1

    # print('gap', gap)
    next = idx+gap+1
    if next == len(msg)+1:
      answer.append(init[msg[idx:next]])
      break

    # add w's int
    answer.append(init[msg[idx:next-1]])
    # print('answer', answer)
    # print('next msg[idx:next-1]', msg[idx:next])
    # add new key at init
    if msg[idx:next] not in init.keys():
      init[str(msg[idx:next])] = len(init)+1
    # print('init',init)
    idx+=gap

  return answer


# print(solution("KAKAO"))
# print(solution("TOBEORNOTTOBEORTOBEORNOT"))
print(solution("ABABABABABABABAB"))
# KAKAO	[11, 1, 27, 15]
# TOBEORNOTTOBEORTOBEORNOT	[20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34]
# ABABABABABABABAB	[1, 2, 27, 29, 28, 31, 30]
