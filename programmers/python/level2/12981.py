import math
def solution(n, words):
 for idx in range(1, len(words)):
   if words[idx][0] != words[idx-1][-1] or words[idx] in words[:idx]:
     return [idx%n+1, idx//n+1]
   else:
     return [0,0]

# print(solution(3,	["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]))
# print(solution(5,	["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]))
print(solution(2,	["hello", "one", "even", "never", "now", "world", "draw"]))
# 3	["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]	[3,3]
# 5	["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]	[0,0]
# 2	["hello", "one", "even", "never", "now", "world", "draw"]	[1,3]
