---
title: "피자 나눠 먹기 (1)_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_086.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.

#### 제한사항 <br>

- 1 ≤ n ≤ 100

#### 입출력 예 <br>
  
n|	result
---|---
7|	1
1|	1
15|	3

#### 입출력 예 설명 <br>

입출력 예 #1
- 7명이 최소 한 조각씩 먹기 위해서 최소 1판이 필요합니다.

입출력 예 #2
- 1명은 최소 한 조각을 먹기 위해 1판이 필요합니다.

입출력 예 #3
- 15명이 최소 한 조각씩 먹기 위해서 최소 3판이 필요합니다.

### 접근방법 <br>

1. 7*n을 answer로 나눴을때 몫이 1이 되는 n의 최소값을 구한다.
2. n을 7로 나눈 후 올림한다. 

### 작성 코드 <br>

```python
def solution(n):
    answer = n // 7 # n을 7로 나눈 몫
    if(n%7 > 0): # 나머지가 0이 아니면
        answer += 1 # 1을 더한다(올림)
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_086.png)





