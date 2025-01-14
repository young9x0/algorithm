import re

def solution(files):
  regex=re.compile("[0-9]+")
  temp=[]

  for file in files:
    splited=regex.search(file)
    # print(splited.span())
    start,end=splited.span()
    # print(start,end)
    temp.append((file[:start],file[start:end],file[end:]))

  # print("temp",temp)
  t_len=len(temp)
  i=0
  j=i+1

  def change_idx(prev,next):
    tmp=temp[prev]
    temp[prev]=temp[next]
    temp[next]=tmp


  while i < t_len:
    # print('-'*50)
    # print('i',i)
    # print('j',j)

    if j == t_len:
      # print('j == t_len', j)
      i+=1
      j=i+1
      continue

    h_i, n_i, t_i =temp[i]
    h_j, n_j, t_j =temp[j]
    h_i = h_i.lower()
    h_j = h_j.lower()
    # print('h_i, n_i, t_i',h_i, n_i, t_i)
    # print('h_j, n_j, t_j',h_j, n_j, t_j)

    if h_i+n_i == h_j+n_j:
      # print("h_i+n_i == h_j+n_j")
      j+=1
      continue

    elif h_i == h_j:
      if int(n_i) <= int(n_j):
        # print("n_i < n_j")
        j+=1
        continue
      else:
        # print("change!!")
        change_idx(i,j)
        j+=1
        continue

    elif h_i < h_j:
      j+=1
      continue
    else:
      change_idx(i,j)
      j+=1

  # print(temp)

  return ["".join(w_tuple) for w_tuple in temp]

print(solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]))
print(solution(["img12.png", "img10.png", "img02.png", "img1.png","img01.gif", "IMG01.GIF", "img2.JPG"]))
print(solution(["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]))
print(solution(["F-5 Freedom F11ighter", "B-50 Super12fortress", "A-10 Thunder13bolt II", "F-14 Tom14cat"]))
# print(solution(["F-5 Freedom F11ighter", "A-10 Super12fortress", "A-10 Super13bolt II", "F-1 Tom14cat"]))

# 입력: ["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]
# 출력: ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]

#['img1.png', 'img01.gif', 'IMG01.GIF', 'img02.png', 'img2.JPG', 'img10.png', 'img12.png']

# 입력: ["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]
# 출력: ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"]

# ['A-10 Super12fortress', 'A-10 Super13bolt II', 'F-1 Tom14cat', 'F-5 Freedom F11ighter']


# ["img12.png", "img10.png", "img02.png", "img1.png","img01.gif", "IMG01.GIF", "img2.JPG"]
# [ "img1.png","img01.gif", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]

