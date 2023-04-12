---
title: "최댓값 만들기 (1)_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_056.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

#### 제한사항 <br>

- 0 ≤ numbers의 원소 ≤ 10,000
- 2 ≤ numbers의 길이 ≤ 100

#### 입출력 예 <br>
  
numbers|	result
---|---
[1, 2, 3, 4, 5]|	20
[0, 31, 24, 10, 1, 9]|	744

#### 입출력 예 설명 <br>

입출력 예 #1
- 두 수의 곱중 최댓값은 4 * 5 = 20 입니다.

입출력 예 #2
- 두 수의 곱중 최댓값은 31 * 24 = 744 입니다.

### 접근방법 <br>

1. 가장 큰 값과 두번째로 큰 값의 곱을 구한다.

### 작성 코드 <br>

```python
def solution(num):
    answer = 0
    num.sort() # 오름차순 정렬
    answer= num[-1] * num[-2] # 가장 큰 값과 두번째로 큰 값의 곱
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_056.png)



