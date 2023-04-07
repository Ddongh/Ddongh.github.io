---
title: "n의 배수 고르기_programmers_Lv0"
tagName: CodingTest
search: include
permalink: programmers_Lv00_014.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

정수 n과 정수 배열 numlist가 매개변수로 주어질 때, numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.

#### 제한사항 <br>

- 1 ≤ n ≤ 10,000
- 1 ≤ numlist의 크기 ≤ 100
- 1 ≤ numlist의 원소 ≤ 100,000

#### 입출력 예 <br>
  
n|	numlist|	result
---|---|---
3|	[4, 5, 6, 7, 8, 9, 10, 11, 12]|	[6, 9, 12]
5|	[1, 9, 3, 10, 13, 5]|	[10, 5]
12|	[2, 100, 120, 600, 12, 12]|	[120, 600, 12, 12]

#### 입출력 예 설명 <br>

입출력 예 #1
- numlist에서 3의 배수만을 남긴 [6, 9, 12]를 return합니다.

입출력 예 #2
- numlist에서 5의 배수만을 남긴 [10, 5]를 return합니다.

입출력 예 #3
- numlist에서 12의 배수만을 남긴 [120, 600, 12, 12]를 return합니다.

### 접근방법 <br>

1. numlist 중 n의 배수만 append한 배열을 return한다.

### 작성 코드 <br>

```python
def solution(n, numlist):
    answer = []
    
    for i in numlist:
        if(i % n == 0): # n의 배수이면(n으로 나눈 나머지가 0이면)
            answer.append(i) # answer에 append
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_014.png)



