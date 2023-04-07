---
title: "OX퀴즈_programmers_Lv0"
tagName: CodingTest
search: include
permalink: programmers_Lv00_012.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 quiz가 매개변수로 주어집니다. 수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열을 return하도록 solution 함수를 완성해주세요.

#### 제한사항 <br>

- 연산 기호와 숫자 사이는 항상 하나의 공백이 존재합니다. 단 음수를 표시하는 마이너스 기호와 숫자 사이에는 공백이 존재하지 않습니다.
- 1 ≤ quiz의 길이 ≤ 10
- X, Y, Z는 각각 0부터 9까지 숫자로 이루어진 정수를 의미하며, 각 숫자의 맨 앞에 마이너스 기호가 하나 있을 수 있고 이는 음수를 의미합니다.
- X, Y, Z는 0을 제외하고는 0으로 시작하지 않습니다.
- -10,000 ≤ X, Y ≤ 10,000
- -20,000 ≤ Z ≤ 20,000
- [연산자]는 + 와 - 중 하나입니다.

#### 입출력 예 <br>
  
quiz|result
---|---
["3 - 4 = -3", "5 + 6 = 11"]|["X", "O"]
["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"]|["O", "O", "X", "O"]

#### 입출력 예 설명 <br>

입출력 예 #1
- 3 - 4 = -3 은 틀린 수식이므로 "X", 5 + 6 = 11 은 옳은 수식이므로 "O" 입니다. 따라서 ["X", "O"]를 return합니다.

입출력 예 #2
- 19 - 6 = 13 은 옳은 수식이므로 "O", 5 + 66 = 71 은 옳은 수식이므로 "O", 5 - 15 = 63 은 틀린 수식이므로 "X", 3 - 1 = 2는 옳은 수식이므로 "O" 따라서 ["O", "O", "X", "O"]를 return합니다.

### 접근방법 <br>

1. "="을 "=="으로 replace한다.
2. eval() 을 사용하여 문자열로 된 코드를 실행하여 True/False 값을 얻은 조건에 맞에 "O"/"X"를 answer에 append한다.

### 작성 코드 <br>

```python
def solution(quiz):
    answer = []
    
    for i in quiz:
        i = i.replace("=", "==") # 문자열의 "="을 "=="으로 바꾼다.
        if(eval(i)): # 수정된 문자열을 실행하여 True/False 값을 얻는다.
            answer.append("O") # 옮은 수식이면 "O"을 append
        else:
            answer.append("X") # 틀린 수식이면 "X"을 append
    
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_012.png)



