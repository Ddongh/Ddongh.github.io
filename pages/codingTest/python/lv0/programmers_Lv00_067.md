---
title: "순서쌍의 개수_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_067.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기합니다. 자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록 solution 함수를 완성해주세요.

#### 제한사항 <br>

- 1 ≤ n ≤ 1,000,000

#### 입출력 예 <br>
  
n|	result
---|---
20|	6
100|	9

#### 입출력 예 설명 <br>

입출력 예 #1
- n이 20 이므로 곱이 20인 순서쌍은 (1, 20), (2, 10), (4, 5), (5, 4), (10, 2), (20, 1) 이므로 6을 return합니다.

입출력 예 #2
- n이 100 이므로 곱이 100인 순서쌍은 (1, 100), (2, 50), (4, 25), (5, 20), (10, 10), (20, 5), (25, 4), (50, 2), (100, 1) 이므로 9를 return합니다.

### 접근방법 <br>

1. a, b를 곱했을 때 n이 되어야 하므로 약수의 개수를 구한다.

### 작성 코드 <br>

```python
def solution(n):
    answer = 0
    
    for i in range(1, int(n ** (1/2))+1):
        if(n % i == 0):
            if((n // i) != i): # a != b일 경우 
                answer += 2 # (a, b), (b, a) 이므로 2개
            else: # a == b일 경우 
                answer += 1  # (a, b)와 (b, a)가 같으므로 1개
            
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_067.png)





