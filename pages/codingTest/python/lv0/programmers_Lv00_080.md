---
title: "나이 출력_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_080.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

머쓱이는 40살인 선생님이 몇 년도에 태어났는지 궁금해졌습니다. 나이 age가 주어질 때, 2022년을 기준 출생 연도를 return 하는 solution 함수를 완성해주세요.

#### 제한사항 <br>

- 0 < age ≤ 120
- 나이는 태어난 연도에 1살이며 1년마다 1씩 증가합니다.

#### 입출력 예 <br>
  
age|	result
---|---
40|	1983
23|	2000

#### 입출력 예 설명 <br>

입출력 예 #1
- 2022년 기준 40살이므로 1983년생입니다.

입출력 예 #2
- 2022년 기준 23살이므로 2000년생입니다.

### 접근방법 <br>

1. 2022년도 기준으로 나이가 age살이 사람의 출생년도는 2022-age+1이다

### 작성 코드 <br>

```python
def solution(age):
    answer = 2022-age + 1
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_080.png)





