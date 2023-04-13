---
title: "배열 두배 만들기_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_091.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.

#### 제한사항 <br>

- -10,000 ≤ numbers의 원소 ≤ 10,000
- 1 ≤ numbers의 길이 ≤ 1,000

#### 입출력 예 <br>
  
numbers|	result
---|---
[1, 2, 3, 4, 5]|	[2, 4, 6, 8, 10]
[1, 2, 100, -99, 1, 2, 3]|	[2, 4, 200, -198, 2, 4, 6]

#### 입출력 예 설명 <br>

입출력 예 #1
- [1, 2, 3, 4, 5]의 각 원소에 두배를 한 배열 [2, 4, 6, 8, 10]을 return합니다.

입출력 예 #2
- [1, 2, 100, -99, 1, 2, 3]의 각 원소에 두배를 한 배열 [2, 4, 200, -198, 2, 4, 6]을 return합니다.

### 접근방법 <br>

1. 배열의 각 원소를 두배로 만든다.

### 작성 코드 <br>

```python
def solution(n):
    for i in range(len(n)): 
        n[i] *= 2 # 배열의 각 원소를 두배로 만든다.
    return n
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_091.png)





