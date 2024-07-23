def solution(survey, choices):

  survey_dict = {'RT':0,'CF':0, 'JM':0, 'AN':0}
  for key, val in zip(survey, choices):
    print('key', key)
    print('val', val-4)
    if key not in survey_dict.keys():
      key = key[::-1]
      print('c key', key)
      survey_dict[key] -= val-4
    else:
      survey_dict[key] += val-4

    print('survey_dict',survey_dict)

  answer = ''
  for key, val in survey_dict.items():
    if val > 0:
      answer += key[1]
    elif val < 0:
      answer += key[0]
    else:
      answer += key[0]

  return answer

print(solution(["AN", "CF", "MJ", "RT", "NA"],	[5, 3, 2, 7, 5]	))
# print(solution( ["TR", "RT", "TR"]s,	[7, 1, 3]	))
# ["AN", "CF", "MJ", "RT", "NA"]	[5, 3, 2, 7, 5]	"TCMA"
# ["TR", "RT", "TR"]	[7, 1, 3]	"RCJA"
