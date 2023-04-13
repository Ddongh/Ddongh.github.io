---
title: "각도기_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_073.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

각에서 0도 초과 90도 미만은 예각, 90도는 직각, 90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다. 각 angle이 매개변수로 주어질 때 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요.

- 예각 : 0 < angle < 90
- 직각 : angle = 90
- 둔각 : 90 < angle < 180
- 평각 : angle = 180

#### 제한사항 <br>

- 0 < angle ≤ 180
- angle은 정수입니다.

#### 입출력 예 <br>
  
angle|	result
---|---
70|	1
91|	3
180|	4

#### 입출력 예 설명 <br>

입출력 예 #1
- angle이 70이므로 예각입니다. 따라서 1을 return합니다.

입출력 예 #2
- angle이 91이므로 둔각입니다. 따라서 3을 return합니다.

입출력 예 #3
- angle이 180이므로 평각입니다. 따라서 4를 return합니다.

### 접근방법 <br>

1. angle에 따라 예각, 직각, 둔각, 평각에 해당하는 1, 2, 3, 4를 리턴한다.

### 작성 코드 <br>

```python
def solution(angle):
    if(angle // 90 == 2): # 평각이면
        return 4
    elif(angle // 90 == 1): # 각이 angle이 90보다 같거나 크고 180보다 작으면
        if(angle % 90 > 0): # 직각이면
            return 3
        else: # 둔각이면
            return 2
    else: # 예각이면
        return 1
            
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_073.png)





