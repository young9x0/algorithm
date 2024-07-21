def solution(data, ext, val_ext, sort_by):
  header = ['code', 'date', 'maximum', 'remain']
  # print(header.index(sort_by))
  filtered = list(filter(lambda x: x[header.index(ext)] < val_ext, data))
  return sorted(filtered, key= lambda x: x[header.index(sort_by)])

print(solution([[1, 20300104, 100, 80], [2, 20300804, 847, 37], [3, 20300401, 10, 8]],	"date",	20300501,	"remain"))
# [[3,20300401,10,8],[1,20300104,100,80]]
