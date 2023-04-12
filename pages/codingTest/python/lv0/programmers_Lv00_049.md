---
title: "배열 원소의 길이_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_049.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.

#### 제한사항 <br>

- 1 ≤ strlist 원소의 길이 ≤ 100
- strlist는 알파벳 소문자, 대문자, 특수문자로 구성되어 있습니다.

#### 입출력 예 <br>
  
strlist|	result
---|---
["We", "are", "the", "world!"]|	[2, 3, 3, 6]
["I", "Love", "Programmers."]|	[1, 4, 12]

#### 입출력 예 설명 <br>

입출력 예 #1
- ["We", "are", "the", "world!"]의 각 원소의 길이인 [2, 3, 3, 6]을 return합니다.

입출력 예 #2
- ["I", "Love", "Programmers."]의 각 원소의 길이인 [1, 4, 12]을 return합니다.


### 접근방법 <br>

1. strlist의 각 원소의 길이를 담은 배열 result를 return한다.

### 작성 코드 <br>

```python
def solution(strlist):
    answer = []
    for i in strlist:
        answer.append(len(i)) # 각 원소의 길이 append
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_049.png)



