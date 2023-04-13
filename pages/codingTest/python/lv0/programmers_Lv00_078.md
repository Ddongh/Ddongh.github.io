---
title: "문자열 뒤집기_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_078.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

#### 제한사항 <br>

- 1 ≤ n ≤ 10

#### 입출력 예 <br>
  
num_list|	result
---|---
[1, 2, 3, 4, 5]|	[5, 4, 3, 2, 1]
[1, 1, 1, 1, 1, 2]|	[2, 1, 1, 1, 1, 1]
[1, 0, 1, 1, 1, 3, 5]|	[5, 3, 1, 1, 1, 0, 1]

#### 입출력 예 설명 <br>

입출력 예 #1
- num_list가 [1, 2, 3, 4, 5]이므로 순서를 거꾸로 뒤집은 배열 [5, 4, 3, 2, 1]을 return합니다.

입출력 예 #2
- num_list가 [1, 1, 1, 1, 1, 2]이므로 순서를 거꾸로 뒤집은 배열 [2, 1, 1, 1, 1, 1]을 return합니다.

입출력 예 #3 
- num_list가 [1, 0, 1, 1, 1, 3, 5]이므로 순서를 거꾸로 뒤집은 배열 [5, 3, 1, 1, 1, 0, 1]을 return합니다.

### 접근방법 <br>

1. 문자열을 reverse 한다.(문자열 인덱싱에서 음수 사용)

### 작성 코드 <br>

```python
def solution(num_list):
    answer = num_list[::-1]
    
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_079.png)





