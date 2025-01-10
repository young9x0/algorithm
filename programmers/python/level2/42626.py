# https://wikidocs.net/194566
def heappush(heap, data):
  heap.append(data)
  cur_idx=len(heap)-1

  while cur_idx>0:
    print('cur_idx',cur_idx)
    par_idx=(cur_idx-1)//2
    print('heap[par_idx], heap[cur_idx]',heap[par_idx], heap[cur_idx])
    if heap[par_idx] > heap[cur_idx]:
      heap[par_idx],heap[cur_idx]= heap[cur_idx],heap[par_idx]
      cur_idx=par_idx
    else:
      break

# test=[3,4,6,8,5,7]
# heappush(test,2)
# print('test',test)

def heappop(heap):
  if not heap:
    return 'empty heap!'
  elif len(heap) == 1:
    return heap.pop()

  pop_data, heap[0]=heap[0],heap.pop()
  cur_idx, child_idx=0,1
  while child_idx<len(heap):
    sibling_idx=child_idx+1
    if sibling_idx<len(heap) and heap[child_idx] > heap[sibling_idx]:
      child_idx=sibling_idx
    if heap[cur_idx]>heap[child_idx]:
      heap[cur_idx],heap[child_idx]=heap[child_idx],heap[cur_idx]
      cur_idx=child_idx
      child_idx=cur_idx*2+1
    else:
      break

  return pop_data

# test=[3,4,6,8,5,7]
# result=heappop(test)
# print(result,'test',test)

def heapify(list):
  last_parent=len(list)//2-1

  for current in range(last_parent, -1, -1):
    print('-'*50)
    print('current',current)
    print('last_parent',last_parent)
    while current <= last_parent:
      child=current*2+1
      sibling=child+1
      if sibling < len(list) and list[child]>list[sibling]:
        child=sibling
      if list[current]>list[child]:
        list[current], list[child] = list[child], list[current]
        current=child
      else:
        break

test=[6,2,5,1,3,4]
heapify(test)
print('test',test)

def solution(scoville, K):
  def mix_food(a,b):
    return a + b*2

  answer = 0
  heapify(scoville)
  # print('scoville',scoville)

  while True:
    # print('-'*50)
    # print(scoville[0],'scoville',scoville)
    f=heappop(scoville)
    if f>=K:
      break
    if len(scoville)==0:
      return -1

    s=heappop(scoville)
    # print('a,b',a,b)
    mixed=mix_food(f,s)
    answer+=1
    # print('mixed',mixed)
    heappush(scoville,mixed)

  if scoville[0] >= K:
    return answer
  else:

    return -1


# print(solution([1, 2, 3, 9, 10, 12],	7))
# print(solution([6,7,8,1,2,3,5],	118))
# print(solution([10,2,7,12,30,14,3,9],	100))
# [1, 2, 3, 9, 10, 12]	7	2
