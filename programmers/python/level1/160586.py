def solution(keymap, targets):
  answer = []
  for target in targets:
    # print('target', target)
    idx_list = []

    for tStr in target:
      # print('tStr',tStr)
      cnt = 100
      for key in keymap:
        # print('key', key)
        if tStr in key:
          # print('key.index(tStr)+1',key.index(tStr)+1)
          cnt = min(cnt, key.index(tStr)+1)
          # print('cnt', cnt)

      if cnt == 100:
        idx_list.append(-1)
      else:
        idx_list.append(cnt)
      # print('idx_list', idx_list)

    answer.append(sum(idx_list))
  return answer

# print(solution(["ABACD", "BCEFD"],	["ABCD","AABB"]	))
# print(solution(["AA"],	["B"]	))
print(solution(["AGZ", "BSSS"],	["ASA","BGZ"]	))
# ["ABACD", "BCEFD"]	["ABCD","AABB"]	[9, 4]
# ["AA"]	["B"]	[-1]
# ["AGZ", "BSSS"]	["ASA","BGZ"]	[4, 6]
