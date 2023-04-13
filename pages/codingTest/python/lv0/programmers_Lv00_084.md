---
title: "피자 나눠 먹기 (3)_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_084.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

머쓱이네 피자가게는 피자를 두 조각에서 열 조각까지 원하는 조각 수로 잘라줍니다. 피자 조각 수 slice와 피자를 먹는 사람의 수 n이 매개변수로 주어질 때, n명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇 판의 피자를 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.

#### 제한사항 <br>

- 2 ≤ slice ≤ 10
- 1 ≤ n ≤ 100

#### 입출력 예 <br>
  
slice|	n|	result
---|---|---
7|	10|	2
4|	12|	3

#### 입출력 예 설명 <br>

입출력 예 #1
- 10명이 7조각으로 자른 피자를 한 조각 이상씩 먹으려면 최소 2판을 시켜야 합니다.

입출력 예 #2
- 12명이 4조각으로 자른 피자를 한 조각 이상씩 먹으려면 최소 3판을 시켜야 합니다.

### 접근방법 <br>

1. n을 slice로 나눈 나머지를 몫을 구한다.
2. n을 slice로 나눈 값을 올림하기 위해 나머지가 0이 아니면 1을 더한다.

### 작성 코드 <br>

```python
def solution(slice, n):
    answer = n // slice # 몫을 구한다.
    if(n % slice != 0): # 나머지가 0이 아니면
        answer += 1 # 1을 더한다(올림)
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_084.png)





