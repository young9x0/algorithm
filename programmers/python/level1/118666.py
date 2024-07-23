def solution(survey, choices):
  choice_dict = {
    1:3,
    2:2,
    3:1,
    4:0,
    5:1,
    6:2,
    7:3
  }
  survey_score={
    'R':0,
    'T':0,
    'C':0,
    'F':0,
    'J':0,
    'M':0,
    'A':0,
    'N':0,
  }


  for idx,type in enumerate(survey):
    if choices[idx] > 4:
      survey_score[type[1]] += choice_dict[choices[idx]]
    elif choices[idx] < 4:
      survey_score[type[0]] += choice_dict[choices[idx]]

  # print(survey_score)
  def check_score(val1,val2):
    if val1>val2:
      return 0
    elif val1<val2:
      return 1
    else:
      return 0


  def add_type(type1, type2):
    if check_score(survey_score[type1], survey_score[type2]) == 0:
      return type1
    else:
      return type2

  types = ["RT", "CF", "JM","AN"]
  answer = ''
  for type in types:
      answer += add_type(type[0],type[1])

  return answer

# print(solution(["AN", "CF", "MJ", "RT", "NA"],	[5, 3, 2, 7, 5]	))
print(solution( ["TR", "RT", "TR"],	[7, 1, 3]	))
# ["AN", "CF", "MJ", "RT", "NA"]	[5, 3, 2, 7, 5]	"TCMA"
# ["TR", "RT", "TR"]	[7, 1, 3]	"RCJA"
