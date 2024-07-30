def solution(id_list, report, k):
  answer = [0]*len(id_list)
  report_cnt={id:0 for id in id_list}

  for info in set(report):
    report_cnt[info.split()[1]] += 1

  for info in set(report):
    id, reported = info.split()
    if report_cnt[reported] >= k:
      answer[id_list.index(id)] += 1

  return answer

print(solution(["muzi", "frodo", "apeach", "neo"],	["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"],	2))
print(solution(["con", "ryan"],	["ryan con", "ryan con", "ryan con", "ryan con"],	3))
# ["muzi", "frodo", "apeach", "neo"]	["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]	2	[2,1,1,0]
# ["con", "ryan"]	["ryan con", "ryan con", "ryan con", "ryan con"]	3	[0,0]
