---
title: "나머지가 1이 되는 수 찾기_programmers_Lv1"
tags: CodingTest
search: include
permalink: programmers_Lv01_019.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv1
---


#### 문제 설명 <br>

자연수 n이 매개변수로 주어집니다. n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.

#### 제한사항 <br>

- 3 ≤ n ≤ 1,000,000

#### 입출력 예 <br>
  
n|	result
---|---
10|	3
12|	11

#### 입출력 예 설명 <br>

입출력 예 #1
- 10을 3으로 나눈 나머지가 1이고, 3보다 작은 자연수 중에서 문제의 조건을 만족하는 수가 없으므로, 3을 return 해야 합니다.

입출력 예 #2
- 12를 11로 나눈 나머지가 1이고, 11보다 작은 자연수 중에서 문제의 조건을 만족하는 수가 없으므로, 11을 return 해야 합니다.

### 접근방법 <br>

1. 1부터 오름차순으로 n을 나누었을때 나머지가 1이 되는 숫자를 찾는다.

### 작성 코드 <br>

```python
def solution(n):
    answer = 0
    for i in range(1, 1000000):
        if n % i == 1: # 나머지가 1이면
            answer = i
            break
        
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv01_019.png)





