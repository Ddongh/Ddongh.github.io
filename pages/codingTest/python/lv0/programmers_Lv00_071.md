---
title: "짝수의 합_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_071.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

#### 제한사항 <br>

- 0 < n ≤ 1000

#### 입출력 예 <br>
  
n|	result
---|---
10|	30
4|	6

#### 입출력 예 설명 <br>

입출력 예 #1
- n이 10이므로 2 + 4 + 6 + 8 + 10 = 30을 return 합니다.

입출력 예 #2
- n이 4이므로 2 + 4 = 6을 return 합니다.

### 접근방법 <br>

1. n이하의 짝수를 answer에 더한다.

### 작성 코드 <br>

```python
def solution(n):
    answer = 0
    
    for i in range(n+1):
        if(i % 2 == 0): # 짝수면
            answer += i # 더한다.
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_071.png)





