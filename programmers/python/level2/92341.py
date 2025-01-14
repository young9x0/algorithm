from math import ceil
from collections import defaultdict

def to_min(time_str):
  return int(time_str[:2])*60+int(time_str[3:])
class Parking:
  def __init__(self, fees):
    self.fees=fees
    self.in_flag=False
    self.in_time=0
    self.total=0

  def update(self, t, inout):
    self.in_flag = True if inout=='IN' else False
    if self.in_flag:
      self.in_time = to_min(t)
    else:
      self.total+=(to_min(t)-self.in_time)

  def calc_fee(self):
    if self.in_flag:
      self.update('23:59','out')
    default_t,default_f,add_t,add_f= self.fees
    over_time=self.total-default_t
    return default_f + ceil(over_time/add_t) * add_f if add_t >=0 else default_f
def solution(fees, records):
  records_dict=defaultdict(lambda:Parking(fees))
  # print((records_dict))

  for rcd in records:
    t,car,inout = rcd.split()
    records_dict[car].update(t,inout)

  test=Parking(["05:34 5961 IN", "06:00 0000 IN"])
  print(test.in_flag)
  return [v.calc_fee() for k,v in sorted(records_dict.items())]


print(solution([180, 5000, 10, 600],	["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"]))
# print(solution([120, 0, 60, 591],	["16:00 3961 IN","16:00 0202 IN","18:00 3961 OUT","18:00 0202 OUT","23:58 3961 IN"]))
# print(solution([1, 461, 1, 10],	["00:00 1234 IN"]))
# [180, 5000, 10, 600]	["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"]	[14600, 34400, 5000]
# [120, 0, 60, 591]	["16:00 3961 IN","16:00 0202 IN","18:00 3961 OUT","18:00 0202 OUT","23:58 3961 IN"]	[0, 591]
# [1, 461, 1, 10]	["00:00 1234 IN"]	[14841]
