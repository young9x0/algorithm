def solution(id_list, report, k):
  answer = []
  informer_info_list={id:[] for id in id_list}
  need_mail_list = {id:0 for id in id_list}

  for info in report:
   informer, id  =info.split()
   if informer not in informer_info_list[id]:
    informer_info_list[id].append(informer)

  # print(informer_info_list)
  for id in id_list:
    if len(informer_info_list[id]) >= k:
      for informer in informer_info_list[id]:
        need_mail_list[informer] += 1

  # print(need_mail_list)

  for id in id_list:
    answer.append(need_mail_list[id])

  return answer

# print(solution(["muzi", "frodo", "apeach", "neo"],	["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"],	2))
print(solution(["con", "ryan"],	["ryan con", "ryan con", "ryan con", "ryan con"],	3))
# ["muzi", "frodo", "apeach", "neo"]	["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]	2	[2,1,1,0]
# ["con", "ryan"]	["ryan con", "ryan con", "ryan con", "ryan con"]	3	[0,0]
