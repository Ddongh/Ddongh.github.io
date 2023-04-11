---
title: "숨어있는 숫자의 덧셈 (2)_programmers_Lv0"
tagName: CodingTest
search: include
permalink: programmers_Lv00_044.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

#### 제한사항 <br>

- 1 ≤ my_string의 길이 ≤ 1,000
- 1 ≤ my_string 안의 자연수 ≤ 1000
- 연속된 수는 하나의 숫자로 간주합니다.
- 000123과 같이 0이 선행하는 경우는 없습니다.
- 문자열에 자연수가 없는 경우 0을 return 해주세요.

#### 입출력 예 <br>
  
my_string|	result
---|---
"aAb1B2cC34oOp"|	37
"1a2b3c4d123Z"|	133

#### 입출력 예 설명 <br>

입출력 예 #1
- "aAb1B2cC34oOp"안의 자연수는 1, 2, 34 입니다. 따라서 1 + 2 + 34 = 37 을 return합니다.

입출력 예 #2
- "1a2b3c4d123Z"안의 자연수는 1, 2, 3, 4, 123 입니다. 따라서 1 + 2 + 3 + 4 + 123 = 133 을 return합니다.


### 접근방법 <br>

1. my_string의 원소에 대해 
    - 알파벳이면 "0"을 res에 append
        - 숫자가 연속되지 않을 경우 구분하기 위함
    - 숫자면 res의 마지막 원소에 합쳐주기(문자열)
        - 숫자가 연속될 경우 한 자리수를 여러번 더하는 것이 아닌 하나의 숫자로 만들기 위함

### 작성 코드 <br>

```python
def solution(m):
    answer = 0
    res = ["0"]
    
    for i in range(len(m)):
        if(m[i].isalpha()): # 알파벳이면
            res.append("0") # 각 숫자를 구분하기 위해 "0"을 append
        else: # 숫자면
            res[-1] = res[-1] + m[i] # res의 마지막 원소에 합쳐준다.
        
    for i in res:
        answer += int(i) # 정수로 변환 후 더해주기
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_044.png)



