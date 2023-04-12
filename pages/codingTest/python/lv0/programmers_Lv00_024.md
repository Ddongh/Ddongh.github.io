---
title: "대문자와 소문자_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_024.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

#### 제한사항 <br>

- 1 ≤ my_string의 길이 ≤ 1,000
- my_string은 영어 대문자와 소문자로만 구성되어 있습니다.

#### 입출력 예 <br>
  
my_string|	result
---|---
"cccCCC"|	"CCCccc"
"abCdEfghIJ"|	"ABcDeFGHij"

#### 입출력 예 설명 <br>

입출력 예 #1
- 소문자는 대문자로 대문자는 소문자로 바꾼 "CCCccc"를 return합니다.

입출력 예 #2
- 소문자는 대문자로 대문자는 소문자로 바꾼 "ABcDeFGHij"를 return합니다.

### 접근방법 <br>

1. 대문자면 소문자로 소문자면 대문자로 변경한다.

### 작성 코드 <br>

```python
def solution(my_str):
    answer = ''
    my_str = list(my_str) # 리스트 변환
    
    for i in range(len(my_str)):
        if(my_str[i].isupper()): # 대문자면
            my_str[i] = my_str[i].lower() # 소문자로 변경
        else: # 소문자면
            my_str[i] = my_str[i].upper() # 대문자로 변경
    answer = "".join(my_str) # 문자열 변환
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_024.png)



