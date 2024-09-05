from collections import deque
def solution(cacheSize, cities):
  answer = 0
  cache=deque()
  for city in cities:
    # print('-'*50)
    # print('city',city)
    # print('cache',cache)
    # print('answer',answer)
    city = city.lower()
    if city in cache:
      answer += 1
      cache.remove(city)
      cache.appendleft(city)
    else:
      answer += 5
      cache.append(city)
      if len(cache) > cacheSize:
        cache.popleft()
  return answer

# print(solution(3,	["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]))
# print(solution(3,	["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]))
# print(solution(2,	["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]	))
# print(solution(5,	["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]	))
print(solution(2,	["Jeju", "Pangyo", "NewYork", "newyork"]	))
# print(solution(0,	["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]))
# 3	["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]	50
# 3	["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]	21
# 2	["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]	60
# 5	["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]	52
# 2	["Jeju", "Pangyo", "NewYork", "newyork"]	16
# 0	["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]	25
