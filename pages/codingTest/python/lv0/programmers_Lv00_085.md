---
title: "피자 나눠 먹기 (2)_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_085.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때, n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.

#### 제한사항 <br>

- 1 ≤ n ≤ 100

#### 입출력 예 <br>
  
n|	result
---|---
6|	1
10|	5
4|	2

#### 입출력 예 설명 <br>

입출력 예 #1
- 6명이 모두 같은 양을 먹기 위해 한 판을 시켜야 피자가 6조각으로 모두 한 조각씩 먹을 수 있습니다.

입출력 예 #2
- 10명이 모두 같은 양을 먹기 위해 최소 5판을 시켜야 피자가 30조각으로 모두 세 조각씩 먹을 수 있습니다.

입출력 예 #3
- 4명이 모두 같은 양을 먹기 위해 최소 2판을 시키면 피자가 12조각으로 모두 세 조각씩 먹을 수 있습니다.

### 접근방법 <br>

1. 6과 n의 최소공배수를 구한다.

### 작성 코드 <br>

```python
def solution(n):
    answer = 0
    
    for i in range(max(6, n), 6*n+1):
        if(i%6 == 0 and i%n == 0): # i가 6의 배수면서 n의 배수(최소공배수)
            answer = i
            break
    answer = answer // 6 # 조각수를 판 수로 변경
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_085.png)





