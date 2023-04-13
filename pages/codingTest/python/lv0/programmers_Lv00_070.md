---
title: "배열 자르기_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_070.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.

#### 제한사항 <br>

- 2 ≤ numbers의 길이 ≤ 30
- 0 ≤ numbers의 원소 ≤ 1,000
- 0 ≤num1 < num2 < numbers의 길이

#### 입출력 예 <br>
  
numbers|	num1|	num2|	result
---|---|---|---
[1, 2, 3, 4, 5]|	1|	3|	[2, 3, 4]
[1, 3, 5]|	1|	2|	[3, 5]

#### 입출력 예 설명 <br>

입출력 예 #1
- [1, 2, 3, 4, 5]의 1번째 인덱스 2부터 3번째 인덱스 4 까지 자른 [2, 3, 4]를 return 합니다.

입출력 예 #2
- [1, 3, 5]의 1번째 인덱스 3부터 2번째 인덱스 5까지 자른 [3, 5]를 return 합니다.

### 접근방법 <br>

1. numbers의 num1부터 num2까지 자른 리스트를 리턴한다.

### 작성 코드 <br>

```python
def solution(numbers, num1, num2):
    return numbers[num1:num2+1]
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_070.png)





