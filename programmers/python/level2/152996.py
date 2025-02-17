from collections import defaultdict

def solution(weights):
  answer = 0
  dist_dict=defaultdict(int)
  w_dict=defaultdict(int)

  for weight in weights:
    print('weight',weight)
    tmp = dist_dict[weight*2] + dist_dict[weight*3] + dist_dict[weight*4]
    print('tmp',tmp)
    if tmp > 0 and weight in w_dict:
      tmp -= 2*w_dict[weight]

    for dist in range(2,5):
      dist_dict[weight*dist] += 1

    w_dict[weight]+=1
    answer+=tmp
    print('w_dict:',w_dict)
    print('dist_dict:',dist_dict)

  return answer

# print(solution([100,180,360,100,270]))
# print(solution([350,700,111,255,111,222,355,255]))
# print(solution([1000,250,500,1000,1000,1000,300,400]))
print(solution([100,100,200,200,100]))


# [100,180,360,100,270]	4
# 5