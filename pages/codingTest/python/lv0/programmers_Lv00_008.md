---
title: "문자열 정렬하기 (2)_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_008.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

영어 대소문자로 이루어진 문자열 my_string이 매개변수로 주어질 때, my_string을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.

#### 제한사항 <br>

- 0 < my_string 길이 < 100

#### 입출력 예 <br>
  
my_string|result
---|---
"Bcad"|"abcd"
"heLLo"|"ehllo"
"Python"|"hnopty"

#### 입출력 예 설명 <br>

입출력 예 #1
- "Bcad"를 모두 소문자로 바꾸면 "bcad"이고 이를 알파벳 순으로 정렬하면 "abcd"입니다.

입출력 예 #2
- "heLLo"를 모두 소문자로 바꾸면 "hello"이고 이를 알파벳 순으로 정렬하면 "ehllo"입니다.

입출력 예 #3
- "Python"를 모두 소문자로 바꾸면 "python"이고 이를 알파벳 순으로 정렬하면 "hnopty"입니다.

### 접근방법 <br>

1. 소문자 변환
2. 알파벳 순으로 정렬

### 작성 코드 <br>

```python
def solution(st):
    answer = ''
    st = st.lower() # 소문자 변환
    st = list(st) # 리스트 변환
    st = sorted(st) # 알파벳 순으로 정렬
    answer = "".join(st) # 문자열 변환
    
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_008.png)



