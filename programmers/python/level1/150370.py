def solution(today, terms, privacies):
  answer = []
  term_dic={term[0]:int(term[2:]) for term in terms}
  privacy_dic={int(idx+1):list(map(int,privacy[:-2].split('.'))) for idx, privacy in enumerate(privacies)}

  today_arr = list(map(int,today.split('.')))
  # print(term_dic)
  # print(privacy_dic)

  for idx in privacy_dic.keys():
    if privacy_dic[idx][2] == 1:
      privacy_dic[idx][1] -= 1
      privacy_dic[idx][2] = 28
    else:
      privacy_dic[idx][2] -= 1

    plus_month= term_dic[privacies[idx-1][-1]]
    if privacy_dic[idx][1] + plus_month >12:
      privacy_dic[idx][0] += (privacy_dic[idx][1] + plus_month) // 12
      privacy_dic[idx][1]=  (privacy_dic[idx][1] + plus_month) % 12
    else:
      privacy_dic[idx][1] += plus_month

  t_year, t_month, t_day = today_arr
  print('t:',t_year,t_month,t_day)
  for idx, date in privacy_dic.items():
    year, month, day = date
    # print('p:',year,month,day)
    # print('t_year > year:',t_year > year)
    if t_year < year:
      continue
    elif t_year> year:
      answer.append(idx)
      continue
    # print('t_month > month:',t_month > month)
    if t_month < month:
      continue
    elif t_month > month:
      answer.append(idx)
      continue
    # print('t_day > day:',t_day > day)
    if t_day > day:
      answer.append(idx)

  return answer

print(solution( "2022.05.19",	["A 6", "B 12", "C 3"],	["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]	))
# print(solution( "2020.01.01",	["Z 3", "D 5"],	["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]))
# "2022.05.19"	["A 6", "B 12", "C 3"]	["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]	[1, 3]
# "2020.01.01"	["Z 3", "D 5"]	["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]	[1, 4, 5]
