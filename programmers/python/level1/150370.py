def to_days(date):
  year, month, day = map(int, date.split('.'))
  return year*28*12+month*28+day
def solution(today, terms, privacies):
  plus_month={term[0]: int(term[2:]) *28 for term in terms}
  today = to_days(today)
  expire_list = [
    idx+1 for idx, privacy in enumerate(privacies)
    if to_days(privacies[:12]) + plus_month[privacy[-1]] <= today
  ]

  return expire_list

print(solution( "2022.05.19",	["A 6", "B 12", "C 3"],	["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]	))
# print(solution( "2020.01.01",	["Z 3", "D 5"],	["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]))
# "2022.05.19"	["A 6", "B 12", "C 3"]	["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]	[1, 3]
# "2020.01.01"	["Z 3", "D 5"]	["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]	[1, 4, 5]
