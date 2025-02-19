def solution(book_time):
    def change_min(str_time: str):
        return int(str_time[0:2]) * 60 + int(str_time[3:])

    book_times = [[change_min(i[0]), change_min(i[1]) + 10] for i in book_time]
    book_times.sort()

    rooms = []
    for book_time in book_times:
      print('book_time',book_time)
      print('rooms',rooms)
      if not rooms:
          rooms.append(book_time)
          continue
      for index, room in enumerate(rooms):
          if book_time[0] >= room[-1]:
              rooms[index] = room + book_time
              break
      else:
          rooms.append(book_time)

    return len(rooms)

# print(solution([["00:00", "07:00"], ["01:40", "03:20"], ["03:20", "05:20"], ["00:10", "03:10"], ["05:20", "07:20"]]))
print(solution([["15:00", "17:00"], ["16:40", "18:20"], ["14:20", "15:20"], ["14:10", "19:20"], ["18:20", "21:20"]]))
# print(solution([["09:10", "10:10"], ["10:20", "12:20"]]))
# print(solution([["10:20", "12:30"], ["10:20", "12:30"], ["10:20", "12:30"]]))

# [["15:00", "17:00"], ["16:40", "18:20"], ["14:20", "15:20"], ["14:10", "19:20"], ["18:20", "21:20"]]	3
# [["09:10", "10:10"], ["10:20", "12:20"]]	1
# [["10:20", "12:30"], ["10:20", "12:30"], ["10:20", "12:30"]]	3