---
title: "중복된 문자 제거_programmers_Lv0"
tagName: CodingTest
search: include
permalink: programmers_Lv00_029.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

문자열 my_string이 매개변수로 주어집니다. my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.

#### 제한사항 <br>

- 1 ≤ my_string ≤ 110
- my_string은 대문자, 소문자, 공백으로 구성되어 있습니다.
- 대문자와 소문자를 구분합니다.
- 공백(" ")도 하나의 문자로 구분합니다.
- 중복된 문자 중 가장 앞에 있는 문자를 남깁니다.

#### 입출력 예 <br>
  
my_string|	result
---|---
"people"|	"peol"
"We are the world"|	"We arthwold"

#### 입출력 예 설명 <br>

입출력 예 #1
- "people"에서 중복된 문자 "p"와 "e"을 제거한 "peol"을 return합니다.

입출력 예 #2
- "We are the world"에서 중복된 문자 "e", " ", "r" 들을 제거한 "We arthwold"을 return합니다.

### 접근방법 <br>

1. 반복문을 돌면서 s의 특정 문자를 answer에 담고, s에 있는 answer에 넣은 특정문자를 특수문잘로 replace해준다.

### 작성 코드 <br>

```python
def solution(s):
    answer = ''
    
    for i in range(len(s)):
        if(s[i] != "-"): # 특수문자(-)가 아니면
            answer += s[i] # answer에 넣는다.
            s = s.replace(s[i], "-") # 중복제거를 위해 answer에 넣은 문자를 특수문자로 replace한다.
    
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_029.png)



