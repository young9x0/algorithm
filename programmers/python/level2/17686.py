import re

def solution(files):
  a= sorted(files, key=lambda file: int(re.findall('\d+', file)[0]))
  print('a',a)
  b= sorted(a, key=lambda file: re.split('\d+', file.lower())[0])
  for file in files:
    print("re.split('\d+', file.lower())",re.split('\d+', file.lower()))
  print('b',b)

  return b

print(solution([ "img1.png", "IMG01.GIF", "imd2.JPG"]))
# print(solution(["img12.png", "img10.png", "img02.png", "img1.png","img01.gif", "IMG01.GIF", "img2.JPG"]))
# print(solution(["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]))
# print(solution(["F-5 Freedom F11ighter", "B-50 Super12fortress", "A-10 Thunder13bolt II", "F-14 Tom14cat"]))
# print(solution(["F-5 Freedom F11ighter", "A-10 Super12fortress", "A-10 Super13bolt II", "F-1 Tom14cat"]))
# print(solution(["b-001  5Freedom8", "b-10 Super26fortress", "B-009 Super13bolt II", "B-015Areedom"]))

# 입력: ["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]
# 출력: ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]

#['img1.png', 'img01.gif', 'IMG01.GIF', 'img02.png', 'img2.JPG', 'img10.png', 'img12.png']

# 입력: ["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]
# 출력: ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"]

# ['A-10 Super12fortress', 'A-10 Super13bolt II', 'F-1 Tom14cat', 'F-5 Freedom F11ighter']


# ["img12.png", "img10.png", "img02.png", "img1.png","img01.gif", "IMG01.GIF", "img2.JPG"]
# [ "img1.png","img01.gif", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]

