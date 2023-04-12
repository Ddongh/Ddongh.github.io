---
title: "팩토리얼_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_055.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.
- i! ≤ n

#### 제한사항 <br>

- 0 < n ≤ 3,628,800

#### 입출력 예 <br>
  
n|	result
---|---
3628800|	10
7|	3

#### 입출력 예 설명 <br>

입출력 예 #1
- 10! = 3,628,800입니다. n이 3628800이므로 최대 팩토리얼인 10을 return 합니다.

입출력 예 #2
- 3! = 6, 4! = 24입니다. n이 7이므로, 7 이하의 최대 팩토리얼인 3을 return 합니다.

### 접근방법 <br>

1. answer!이 n보다 작으면 answer에 1씩 계속 더한다.
2. answer!이 n보다 작거나 같아야하므로 answer-1을 return한다.

### 작성 코드 <br>

```python
def solution(n):
    answer = 0
    i = 1
    
    while(i <= n):
        answer += 1 # answer! 의 값이 n보다 작으면 answer에 1을 더한다.
        i = i * answer # answer!의 값
    
    return answer-1
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_055.png)



