---
title: "문자 반복 출력하기_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_075.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.

#### 제한사항 <br>

- 2 ≤ my_string 길이 ≤ 5
- 2 ≤ n ≤ 10
- "my_string"은 영어 대소문자로 이루어져 있습니다.

#### 입출력 예 <br>
  
my_string|	n|	result
---|---|---
"hello"|	3|	"hhheeellllllooo"

#### 입출력 예 설명 <br>

입출력 예 #1
- "hello"의 각 문자를 세 번씩 반복한 "hhheeellllllooo"를 return 합니다.

### 접근방법 <br>

1. my_string의 각 문자를 n번씩 answer에 더한다.

### 작성 코드 <br>

```python
def solution(my_string, n):
    answer = ''
    
    for i in my_string: # 각 문자열을
        for j in range(n): # n 번씩
            answer += i # 더한다.
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_075.png)





