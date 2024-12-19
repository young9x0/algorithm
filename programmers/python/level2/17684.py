def solution(msg):
  answer = []
  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  init={k:v for (k,v) in zip(alphabet, range(1,27))}

  while True:
    if msg in init:
      answer.append(init[msg])
      break
    for i in range(1,len(msg)+1):
      if msg[0:i] not in init:
        answer.append(init[msg[0:i-1]])
        init[msg[0:i]] = len(init)+1
        msg = msg[i-1:]
        break

  return answer


# print(solution("KAKAO"))
# print(solution("TOBEORNOTTOBEORTOBEORNOT"))
print(solution("ABABABABABABABAB"))
# KAKAO	[11, 1, 27, 15]
# TOBEORNOTTOBEORTOBEORNOT	[20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34]
# ABABABABABABABAB	[1, 2, 27, 29, 28, 31, 30]
