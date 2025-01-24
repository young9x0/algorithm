def solution(numbers):
  i, j = 0, 1
  tmp = [n for n in numbers]
  n_len=len(numbers)
  def change(i,j):
    # print('change')
    # tmp[i] < tmp[j]
    temp = tmp[i]
    tmp[i] = tmp[j]
    tmp[j] = temp

  def add_self(num, limit):
    new = str(num)
    while len(new) < limit:
      new += str(num)

    # print('add_self', new)
    return int(new)

  while i < n_len-1:
    # print('-'*50)
    # print('tmp[i],tmp[j],',tmp[i],tmp[j])
    i_len= len(str(tmp[i]))
    j_len= len(str(tmp[j]))
    # print('i_len,j_len',i_len,j_len)
    if i_len == j_len:
      if tmp[i] < tmp[j]:
        change(i,j)
    else:

      if i_len > j_len:
        new_num = add_self(tmp[j], i_len)
        if tmp[i] < new_num:
          change(i, j)
      else:
        new_num = add_self(tmp[i], j_len)
        if new_num < tmp[j]:
          change(i, j)

    # print('tmp',tmp)
    j+=1
    if j == n_len:
      i+=1
      j = i+1

  # print('tmp',tmp)
  return "".join(map(str, tmp))

# print(solution([6, 10, 2]))
print(solution([3, 30, 34, 5, 9]))

# [6, 10, 2]	"6210"
# [3, 30, 34, 5, 9]	"9534330"
