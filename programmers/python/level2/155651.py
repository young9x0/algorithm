def solution(book_time):
  book_time = sorted(book_time)
  # print('book_time', book_time)
  b_len = len(book_time)
  splited_list = []
  for idx in range(b_len):
    new_start, new_finish = book_time[idx]
    new_s = new_start.split(":")
    new_f = new_finish.split(":")
    splited_list.append([int(num) for num in new_s]+[int(num) for num in new_f])

  rooms=[splited_list[0][2:]]
  room_cnt=1

  def is_possible(prev, new):
    # print('prev, new',prev, new)
    if new == prev:
      return False

    prev_f_hour, prev_f_min = prev
    new_s_hour, new_s_min = new
    if (
        (prev_f_hour+1 < new_s_hour
        or (prev_f_hour+1 == new_s_hour and (new_s_min>=10 or (new_s_min < 10 and (60+new_s_min) - prev_f_min >= 10))))
        or (prev_f_hour == new_s_hour and prev_f_min + 10 <= new_s_min)
    ):
      return True
    else:
      return False

  for idx in range(1, b_len):
    r_len = len(rooms)
    is_booked = False
    new_start_time = splited_list[idx][:2]
    new_finish_time = splited_list[idx][2:]
    # print('-'*50)
    # print(idx, 'new_start_time', new_start_time)
    for r_idx in range(r_len):
      if is_booked:
        break

      if is_possible(rooms[r_idx], new_start_time):
        rooms[r_idx]= new_finish_time
        is_booked = True

    if is_booked == False:
      rooms.append(new_finish_time)
      room_cnt+=1

    # print('rooms', rooms)

  return room_cnt

print(solution([["00:00", "07:00"], ["01:40", "03:20"], ["03:20", "05:20"], ["00:10", "03:10"], ["05:20", "07:20"]]))
print(solution([["15:00", "17:00"], ["16:40", "18:20"], ["14:20", "15:20"], ["14:10", "19:20"], ["18:20", "21:20"]]))
print(solution([["09:10", "10:10"], ["10:20", "12:20"]]))
print(solution([["10:20", "12:30"], ["10:20", "12:30"], ["10:20", "12:30"]]))

# [["15:00", "17:00"], ["16:40", "18:20"], ["14:20", "15:20"], ["14:10", "19:20"], ["18:20", "21:20"]]	3
# [["09:10", "10:10"], ["10:20", "12:20"]]	1
# [["10:20", "12:30"], ["10:20", "12:30"], ["10:20", "12:30"]]	3