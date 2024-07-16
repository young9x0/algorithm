def solution(keymap, targets):
  answer = []
  hs = {}

  for key in keymap:
    for idx, ch in enumerate(key):
      hs[ch] = min(idx+1, hs[ch]) if ch in hs else idx+1

  print('hs',hs)

  for target in (targets):
    cnt = 0
    for ch in target:
      if ch not in hs:
        cnt = -1
        break
      cnt += hs[ch]
    answer.append(cnt)

  return answer

print(solution(["ABACD", "BCEFD"],	["ABCD","AABB"]	))
# print(solution(["AA"],	["B"]	))
# print(solution(["AGZ", "BSSS"],	["ASA","BGZ"]	))
# ["ABACD", "BCEFD"]	["ABCD","AABB"]	[9, 4]
# ["AA"]	["B"]	[-1]
# ["AGZ", "BSSS"]	["ASA","BGZ"]	[4, 6]
