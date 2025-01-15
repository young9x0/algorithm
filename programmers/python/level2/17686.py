def head_compare(data):
  print('-'*50)
  print('data',data)
  route=0
  answer=['','']

  for i, v in enumerate(data):
    if (route==0):
      print('route=0')
      if(v.isnumeric() == True):
        answer[0] = data[:i].lower()
        route=1
        answer[1] += v
        print('isnumeric answer',answer)
    elif route==1:
      print('route=1')
      if(v.isnumeric() == True):
        print('numeric')
        answer[1]+=v
      else:
        print('str')
        break

  answer[1] = int(answer[1])
  print('answer',answer)
  return answer

def solution(files):
  files.sort(key=lambda x:head_compare(x))

  return files

# print(solution([ "img1.png", "IMG01.GIF", "imd2.JPG"]))
# print(solution(["img12.png", "img10.png", "img02.png", "img1.png","img01.gif", "IMG01.GIF", "img2.JPG"]))
# print(solution(["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]))
# print(solution(["F-5 Freedom F11ighter", "B-50 Super12fortress", "A-10 Thunder13bolt II", "F-14 Tom14cat"]))
# print(solution(["F-5 Freedom F11ighter", "A-10 Super12fortress", "A-10 Super13bolt II", "F-1 Tom14cat"]))
print(solution(["b-001  5Freedom8", "b-10 Super26fortress", "B-009 Super13bolt II", "B-015Areedom"]))

# 입력: ["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]
# 출력: ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]

#['img1.png', 'img01.gif', 'IMG01.GIF', 'img02.png', 'img2.JPG', 'img10.png', 'img12.png']

# 입력: ["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]
# 출력: ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"]

# ['A-10 Super12fortress', 'A-10 Super13bolt II', 'F-1 Tom14cat', 'F-5 Freedom F11ighter']


# ["img12.png", "img10.png", "img02.png", "img1.png","img01.gif", "IMG01.GIF", "img2.JPG"]
# [ "img1.png","img01.gif", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]

