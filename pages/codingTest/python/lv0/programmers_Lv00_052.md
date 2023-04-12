---
title: "숨어있는 숫자의 덧셈 (1)_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_052.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

#### 제한사항 <br>

- 1 ≤ my_string의 길이 ≤ 1,000
- my_string은 소문자, 대문자 그리고 한자리 자연수로만 구성되어있습니다.

#### 입출력 예 <br>
  
my_string|	result
---|---
"aAb1B2cC34oOp"|	10
"1a2b3c4d123"|	16

#### 입출력 예 설명 <br>

입출력 예 #1
- "aAb1B2cC34oOp"안의 한자리 자연수는 1, 2, 3, 4 입니다. 따라서 1 + 2 + 3 + 4 = 10 을 return합니다.

입출력 예 #2
- "1a2b3c4d123Z"안의 한자리 자연수는 1, 2, 3, 4, 1, 2, 3 입니다. 따라서 1 + 2 + 3 + 4 + 1 + 2 + 3 = 16 을 return합니다.

### 접근방법 <br>

1. 문자가 숫자면 정수변환하여 더한다.

### 작성 코드 <br>

```python
def solution(my):
    answer = 0
    for i in my:
        if(i.isdigit()): # 숫자면
            answer += int(i) # 정수 변환하여 더해준다.
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_052.png)



