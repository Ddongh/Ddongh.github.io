---
title: "자릿수 더하기_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_013.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

#### 제한사항 <br>

- 0 ≤ n ≤ 1,000,000

#### 입출력 예 <br>
  
n|result
---|---
1234|10
930211|16

#### 입출력 예 설명 <br>

입출력 예 #1
- 1 + 2 + 3 + 4 = 10을 return합니다.

입출력 예 #2
- 9 + 3 + 0 + 2 + 1 + 1 = 16을 return합니다.

### 접근방법 <br>

1. 정수를 문자열 변환 후 각 자릿수를 더한다.

### 작성 코드 <br>

```python
def solution(n):
    answer = 0
    s = str(n) # 문자열 변환
    for i in s:
        answer += int(i) # 각 자릿수를 정수 변화 후 더한다.
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_013.png)



