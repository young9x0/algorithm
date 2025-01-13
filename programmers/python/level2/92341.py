import math

def solution(fees, records):
  answer = []
  default_time, default_fee, plus_time, plus_fee=fees
  parking_dict={}
  total_time_dict={}

  def cal_fee(parking_time):
    # print('='*50)
    total= default_fee

    if parking_time > default_time:
      # print('math.ceil(park_time/plus_time)',math.ceil((parking_time-default_time)/plus_time))
      total+=math.ceil((parking_time-default_time)/plus_time) * plus_fee

    return total

  for record in records:
    splited=record.split()
    # print('-'*50)
    # print('splited',splited)
    time, car_num, status= splited
    hours, minutes= time.split(':')
    # print(hours, minutes)
    start_min=int(hours)*60+ int(minutes)

    if status == 'IN':
      parking_dict[car_num] = start_min
      if car_num not in total_time_dict:
        total_time_dict[car_num] = 0
      # print('parking_dict[car_num]',parking_dict[car_num])
    else:
      park_time= start_min-parking_dict[car_num]
      # print('park_time',park_time)

      total_time_dict[car_num] += park_time
      # print('total_time_dict[car_num]',total_time_dict[car_num])
      parking_dict[car_num] = -1

  # print('parking_dict',parking_dict)
  if sum(parking_dict.values()) > -1*len(parking_dict.keys()):
    for key, val in parking_dict.items():
      if val>-1:
        park_time= 23*60+59-val
        # print('park_time',park_time)

        total_time_dict[key] += park_time
        # print('total_time_dict[key]',total_time_dict[key])

  total_tuple_list = sorted(total_time_dict.items(), key= lambda x: x[0])
  # print('total_tuple_list', total_tuple_list)
  for (key, val) in total_tuple_list:
    answer.append(cal_fee(val))

  return answer

print(solution([180, 5000, 10, 600],	["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"]))
print(solution([120, 0, 60, 591],	["16:00 3961 IN","16:00 0202 IN","18:00 3961 OUT","18:00 0202 OUT","23:58 3961 IN"]))
print(solution([1, 461, 1, 10],	["00:00 1234 IN"]))
# [180, 5000, 10, 600]	["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"]	[14600, 34400, 5000]
# [120, 0, 60, 591]	["16:00 3961 IN","16:00 0202 IN","18:00 3961 OUT","18:00 0202 OUT","23:58 3961 IN"]	[0, 591]
# [1, 461, 1, 10]	["00:00 1234 IN"]	[14841]
