---
title: "약수 구하기_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_020.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

정수 n이 매개변수로 주어질 때, n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.

#### 제한사항 <br>

- 1 ≤ n ≤ 10,000

#### 입출력 예 <br>
  
n	|	result
---|---
24|	[1, 2, 3, 4, 6, 8, 12, 24]
29|	[1, 29]

#### 입출력 예 설명 <br>

입출력 예 #1
- 24의 약수를 오름차순으로 담은 배열 [1, 2, 3, 4, 6, 8, 12, 24]를 return합니다.

입출력 예 #2
- 29의 약수를 오름차순으로 담은 배열 [1, 29]를 return합니다.

### 접근방법 <br>

1. 약수를 구한다.
2. 오름차순 정렬한다.

### 작성 코드 <br>

```python
def solution(n):
    answer = []
    if(n > 0):
        for i in range(1, int(n**(1/2)+1)):
            if(n % i == 0):
                answer.append(i) # 약수에 해당하면 append
                if(i != n//i): # 중복에 생기지 않도록 제곱수일 경우 한번만 append하도록 처리
                    answer.append(n//i)
        answer.sort()
    
        
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_020.png)



