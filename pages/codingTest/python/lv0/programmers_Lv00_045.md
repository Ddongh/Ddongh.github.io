---
title: "다항식 더하기_programmers_Lv0"
tagName: CodingTest
search: include
permalink: programmers_Lv00_045.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 다항식을 계산할 때는 동류항끼리 계산해 정리합니다. 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 같은 식이라면 가장 짧은 수식을 return 합니다.

#### 제한사항 <br>

- 0 < polynomial에 있는 수 < 100
- polynomial에 변수는 'x'만 존재합니다.
- polynomial은 0부터 9까지의 정수, 공백, ‘x’, ‘+'로 이루어져 있습니다.
- 항과 연산기호 사이에는 항상 공백이 존재합니다.
- 공백은 연속되지 않으며 시작이나 끝에는 공백이 없습니다.
- 하나의 항에서 변수가 숫자 앞에 오는 경우는 없습니다.
- " + 3xx + + x7 + "와 같은 잘못된 입력은 주어지지 않습니다.
- "012x + 001"처럼 0을 제외하고는 0으로 시작하는 수는 없습니다.
- 문자와 숫자 사이의 곱하기는 생략합니다.
- polynomial에는 일차 항과 상수항만 존재합니다.
- 계수 1은 생략합니다.
- 결괏값에 상수항은 마지막에 둡니다.
- 0 < polynomial의 길이 < 50

#### 입출력 예 <br>
  
polynomial|	result
---|---
"3x + 7 + x"|	"4x + 7"
"x + x + x"|	"3x"

#### 입출력 예 설명 <br>

입출력 예 #1
- "3x + 7 + x"에서 동류항끼리 더하면 "4x + 7"입니다.

입출력 예 #2
- "x + x + x"에서 동류항끼리 더하면 "3x"입니다.


### 접근방법 <br>

1. 문자열을 "+"를 기준으로 split
2. 1차항의 계수와 상수항을 각각 더한 값으 구한다.
3. 형식에 맞춰서 return

### 작성 코드 <br>

```python
def solution(p):
    answer = ''
    p = p.replace(" ", "") # 공백 제거
    _p = p.split("+") # "+"를 기준으로 split(리스트변환)
    
    _int = 0 # 상수항
    _x = 0 # 1차항의 계수
    
    for i in _p:
        if(i.isdigit()): # i가 숫자면(상수항이면)
            _int += int(i) # 상수항에 더해준다.
        elif(i[-1].isalpha()): # 1차항이면
            if(len(i)>1): # 계수가 1이 아니면(계수가 1일 경우 생략하므로 len(i)는 1이 된다.)
                _x += int(i[:-1]) # 계수를 더한다.
            else: # 1차항이면
                _x += 1 # 1을 더한다.

    if(_int == 0 and _x == 0): # 계수와 상수가 모두 0이면 
        return "0"
    if(_x > 0): # 계수가 0이 아니면
        if(_x == 1): # 계수가 1이면
            answer += "x" # 계수가 1이면 생략하므로
        else: # 계수가 1이 아니면
            answer += str(_x) + "x"
    if(_int>0): # 상수가 0이 아니면
        if(_x>0): # 계수가 0이 아니면
            answer += " + " + str(_int)
        else: # 계수가 0이면 상수만 리턴
            answer += str(_int)
    
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_045.png)



