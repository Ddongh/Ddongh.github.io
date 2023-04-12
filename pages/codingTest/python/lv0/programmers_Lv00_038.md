---
title: "겹치는 선분의 길이_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_038.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

선분 3개가 평행하게 놓여 있습니다. 세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때, 두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요.<br><br>

lines가 [[0, 2], [-3, -1], [-2, 1]]일 때 그림으로 나타내면 다음과 같습니다. <br>
![제출 결과](\images\programmers_Lv00_038_0.png)
<br>
선분이 두 개 이상 겹친 곳은 [-2, -1], [0, 1]로 길이 2만큼 겹쳐있습니다.

#### 제한사항 <br>

- lines의 길이 = 3
- lines의 원소의 길이 = 2
- 모든 선분은 길이가 1 이상입니다.
- lines의 원소는 [a, b] 형태이며, a, b는 각각 선분의 양 끝점 입니다.
    - -100 ≤ a < b ≤ 100

#### 입출력 예 <br>
  
lines|	result
---|---
[[0, 1], [2, 5], [3, 9]]|	2
[[-1, 1], [1, 3], [3, 9]]|	0
[[0, 5], [3, 9], [1, 10]]|	8

#### 입출력 예 설명 <br>

입출력 예 #1
- 두 번째, 세 번째 선분 [2, 5], [3, 9]가 [3, 5] 구간에 겹쳐있으므로 2를 return 합니다.

입출력 예 #2
- 겹친 선분이 없으므로 0을 return 합니다.

입출력 예 #3
- 첫 번째와 두 번째 선분이 [3, 5] 구간에서 겹칩니다.
- 첫 번째와 세 번째 선분 [1, 5] 구간에서 겹칩니다.
- 두 번째와 세 번째 선분 [3, 9] 구간에서 겹칩니다.
- 따라서 [1, 9] 구간에 두 개 이상의 선분이 겹쳐있으므로, 8을 return 합니다.

### 접근방법 <br>

1. 선분의 중복되는 값을 찾기위해 선분에 해당하는 점을 리스트 a에 담는다. ex) [1,4] 이면 1, 2, 3을 담는다.
2. 중복되는 점을 찾기 위한 기준을 잡기위해 점을 담은 리스트 a의 중복을 제거한 리스트 _a를 생성한다.
3. _a의 원소 중 a에 중복되는(2개 이상 존재하는) 원소의 개수를 카운트한다.

### 작성 코드 <br>

```python
def solution(lin):
    a = []
    answer = 0
    
    for i in lin:
        for j in range(i[0], i[1]): # 각 선분에 해당하는 점을 담는다.
            a.append(j)
    a.sort()
    
    _a = list(set(a)) # 중복체크를 위한 중복이 제거된 리스트를 생성한다.
    _a.sort()
    
    for i in _a:
        if(a.count(i) > 1): # 개수가 2 이상인지 체크
            answer += 1 # 2개 이상이면 중복이 되는 선분위치이므로 answer += 1
    
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_038_1.png)



