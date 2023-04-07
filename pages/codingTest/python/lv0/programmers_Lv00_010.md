---
title: "제곱수 판별하기_programmers_Lv0"
tagName: CodingTest
search: include
permalink: programmers_Lv00_010.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.

#### 제한사항 <br>

- 1 ≤ n ≤ 1,000,000

#### 입출력 예 <br>
  
n|result
---|---
144|1
976|2

#### 입출력 예 설명 <br>

입출력 예 #1
- 144는 12의 제곱이므로 제곱수입니다. 따라서 1을 return합니다.

입출력 예 #2
- 976은 제곱수가 아닙니다. 따라서 2를 return합니다.

### 접근방법 <br>

1. 제곱근을 구하여 자연수인지 유리수인지 판별한다.

### 작성 코드 <br>

```python
def solution(n):
    answer = 2
    if((n ** (1/2)) % 1 == 0): # 제곱근을 구한 후 1로 나눈 나머지가 0 이면 제곱근이 자연수이다, 즉 제곱수이다.
        answer = 1
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_010.png)



