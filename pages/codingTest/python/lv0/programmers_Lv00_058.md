---
title: "주사위의 개수_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_058.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

머쓱이는 직육면체 모양의 상자를 하나 가지고 있는데 이 상자에 정육면체 모양의 주사위를 최대한 많이 채우고 싶습니다. 상자의 가로, 세로, 높이가 저장되어있는 배열 box와 주사위 모서리의 길이 정수 n이 매개변수로 주어졌을 때, 상자에 들어갈 수 있는 주사위의 최대 개수를 return 하도록 solution 함수를 완성해주세요.

#### 제한사항 <br>

- box의 길이는 3입니다.
- box[0] = 상자의 가로 길이
- box[1] = 상자의 세로 길이
- box[2] = 상자의 높이 길이
- 1 ≤ box의 원소 ≤ 100
- 1 ≤ n ≤ 50
- n ≤ box의 원소
- 주사위는 상자와 평행하게 넣습니다.

#### 입출력 예 <br>
  
box|	n|	result
---|---|---
[1, 1, 1]|	1	1
[10, 8, 6]|	3	12

#### 입출력 예 설명 <br>

입출력 예 #1
- 상자의 크기가 가로 1, 세로 1, 높이 1이므로 모서리의 길이가 1인 주사위는 1개 들어갈 수 있습니다.

입출력 예 #2
- 상자의 크기가 가로 10, 세로 8, 높이 6이므로 모서리의 길이가 3인 주사위는 12개 들어갈 수 있습니다.

### 접근방법 <br>

1. 모서리 길이가 n인 주사위가 들어갈 수 있는 box의 크기를 구하고 그 부피를 구한다.
2. 위에서 부한 부피를 모서리가 n인 주사위의 부피로 나눈다.

### 작성 코드 <br>

```python
def solution(box, n):
    answer = 0
    
    for i in range(len(box)):
        box[i] = (box[i] // n) * n # 모서리가 n인 주사위를 채우고 남는 부분을 제거한 길이를 구한다.
    
    answer = box[0] * box[1] * box[2] / n**3 # 주사위가 들어갈 수 있는 box의 부피를 주사위의 부피로 나눈다.
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_058.png)



