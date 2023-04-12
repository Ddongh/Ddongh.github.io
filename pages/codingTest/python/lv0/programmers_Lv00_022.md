---
title: "인덱스 바꾸기_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_022.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.

#### 제한사항 <br>

- 1 < my_string의 길이 < 100
- 0 ≤ num1, num2 < my_string의 길이
- my_string은 소문자로 이루어져 있습니다.
- num1 ≠ num2

#### 입출력 예 <br>
  
my_string|	num1|	num2|	result
---|---|---|---
"hello"|	1|	2|	"hlelo"
"I love you"|	3|	6|	"I l veoyou"

#### 입출력 예 설명 <br>

입출력 예 #1
- "hello"의 1번째 인덱스인 "e"와 2번째 인덱스인 "l"을 바꾸면 "hlelo"입니다.

입출력 예 #2
- "I love you"의 3번째 인덱스 "o"와 " "(공백)을 바꾸면 "I l veoyou"입니다.

### 접근방법 <br>

1. num1의 인덱스에 해당하는 문자를 tmp에 저장한다.
2. num1의 인덱스에 해당하는 문자를 num2의 인덱스에 해당하는 문자로 바꾼다.
3. num2의 인덱스에 해당하는 문자를 tmp로 바꾼다.

### 작성 코드 <br>

```python
def solution(m, num1, num2):
    answer = ''
    m = list(m) # 리스트 변환
    tmp = m[num1] # num1 인데스에 해당하는 문자를 tmp에 저장
    
    m[num1] = m[num2] # num1 인덱스에 해당하는 문자를 num2에 해당하는 문자로 교체
    m[num2] = tmp # num2 인덱스에 해당하는 문자를 tmp로 교체
    answer = "".join(m) # 리스트를 문자열로 변환
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_022.png)



