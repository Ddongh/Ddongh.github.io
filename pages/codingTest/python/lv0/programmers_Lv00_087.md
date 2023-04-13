---
title: "짝수는 싫어요_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_087.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.

#### 제한사항 <br>

- 1 ≤ n ≤ 100

#### 입출력 예 <br>
  
n|	result
---|---
10|	[1, 3, 5, 7, 9]
15|	[1, 3, 5, 7, 9, 11, 13, 15]

#### 입출력 예 설명 <br>

입출력 예 #1
- 10 이하의 홀수가 담긴 배열 [1, 3, 5, 7, 9]를 return합니다.

입출력 예 #2
- 15 이하의 홀수가 담긴 배열 [1, 3, 5, 7, 9, 11, 13, 15]를 return합니다.

### 접근방법 <br>

1. n 이하의 홀수를 순서대로 담은 리스트 생성

### 작성 코드 <br>

```python
def solution(n):
    
    answer = list(range(1, n+1, 2))
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_087.png)





