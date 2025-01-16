from collections import defaultdict
def solution(record):
  answer = []
  noti_type={
    'Enter':"님이 들어왔습니다.",
    'Leave':"님이 나갔습니다."
  }
  noti_list=[]
  user_dict=defaultdict()
  for rcd in record:
    status, id, *nickname = rcd.split(" ")
    # print('status, id, nickname', status, id, nickname)
    if id not in user_dict.keys() or status != 'Leave':
      user_dict[id] = nickname[0]

    if status != 'Change':
      noti_list.append((id, noti_type[status]))

  # print('noti_list',noti_list)
  # print('user_dict',user_dict)
  for noti in noti_list:
    id, noti_str= noti
    answer.append(user_dict[id] + noti_str)

  return answer

print(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]))
# ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]	["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
