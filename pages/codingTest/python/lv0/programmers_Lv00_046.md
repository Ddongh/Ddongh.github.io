---
title: "최댓값 만들기 (2)_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_046.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

#### 제한사항 <br>

- -10,000 ≤ numbers의 원소 ≤ 10,000
- 2 ≤ numbers 의 길이 ≤ 100


#### 입출력 예 <br>
  
numbers|	result
---|---
[1, 2, -3, 4, -5]|	15
[0, -31, 24, 10, 1, 9]|	240
[10, 20, 30, 5, 5, 20, 5]|	600

#### 입출력 예 설명 <br>

입출력 예 #1
- 두 수의 곱중 최댓값은 -3 * -5 = 15 입니다.

입출력 예 #2
- 두 수의 곱중 최댓값은 10 * 24 = 240 입니다.


### 접근방법 <br>

1. 절대값이 첫번째, 두번째로 큰 음의정수의 곱과 양의 정수의 곱을 비교한다.

### 작성 코드 <br>

```python
def solution(num):
    answer = 0
    num.sort() # 오름차순 정렬
    answer = max(num[0]*num[1], num[-2]*num[-1]) # 음의 정수의 곱으로 만들 수 있는 최댓값과 양의 정수의 곱으로 만들 수 있는 최댓값을 비교
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_046.png)



