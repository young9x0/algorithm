import math
def solution(n, words):
  history=[words[0]]
  for index,word in enumerate(words):
    if index == 0:
      continue
    # print('--word', word)
    # print('history', history)
    # print('history[-1][-1]', history[-1][-1])
    # print('word[0]', word[0])
    if history[-1][-1] == word[0] and word not in history:
      history.append(word)
    else:
      # print('break')
      cur= (len(history)+1)
      print('cur',cur)
      print('math.ceil(cur//n)',math.ceil(cur//n))
      idx = cur% n
      return [n if idx == 0 else idx, math.ceil(cur/n)]

  return [0,0]

# print(solution(3,	["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]))
# print(solution(5,	["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]))
print(solution(2,	["hello", "one", "even", "never", "now", "world", "draw"]))
# 3	["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]	[3,3]
# 5	["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]	[0,0]
# 2	["hello", "one", "even", "never", "now", "world", "draw"]	[1,3]
