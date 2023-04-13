---
title: "최빈값 구하기_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_088.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.

#### 제한사항 <br>

- 0 < array의 길이 < 100
- 0 ≤ array의 원소 < 1000

#### 입출력 예 <br>
  
array|	result
---|---
[1, 2, 3, 3, 3, 4]|	3
[1, 1, 2, 2]|	-1
[1]|	1

#### 입출력 예 설명 <br>

입출력 예 #1
- [1, 2, 3, 3, 3, 4]에서 1은 1개 2는 1개 3은 3개 4는 1개로 최빈값은 3입니다.

입출력 예 #2
- [1, 1, 2, 2]에서 1은 2개 2는 2개로 최빈값이 1, 2입니다. 최빈값이 여러 개이므로 -1을 return 합니다.

입출력 예 #3
- [1]에는 1만 있으므로 최빈값은 1입니다.

### 접근방법 <br>

1. 각 원소의 개수를 카운트 한 후 최대값을 가지는 원소를 찾는다.

### 작성 코드 <br>

```python
def solution(arr):
    answer = 0
    cnt = []
    _arr = list(set(arr)) # 중복제거
    for i in _arr:
        cnt.append(arr.count(i)) # 개수 count
    
    if(cnt.count(max(cnt)) > 1): # 최빈값이 여러개면
        return -1
    
    idx = cnt.index(max(cnt)) # 최빈값의 index
    answer = _arr[idx] # 최빈값

    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_088.png)





