---
title: "배열의 평균값_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_083.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

#### 제한사항 <br>

- 0 ≤ numbers의 원소 ≤ 1,000
- 1 ≤ numbers의 길이 ≤ 100
- 정답의 소수 부분이 .0 또는 .5인 경우만 입력으로 주어집니다.

#### 입출력 예 <br>
  
numbers|	result
---|---
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]|	5.5
[89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]|	94.0

#### 입출력 예 설명 <br>

입출력 예 #1
- numbers의 원소들의 평균 값은 5.5입니다.

입출력 예 #2
- numbers의 원소들의 평균 값은 94.0입니다.

### 접근방법 <br>

1. 배열의 합을 배열의 길이로 나눈다.

### 작성 코드 <br>

```python
def solution(n):
    return sum(n) / len(n)
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_083.png)





