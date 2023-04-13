---
title: "가위 바위 보_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_064.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

가위는 2 바위는 0 보는 5로 표현합니다. 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때, rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.

#### 제한사항 <br>

- 0 < rsp의 길이 ≤ 100
- rsp와 길이가 같은 문자열을 return 합니다.
- rsp는 숫자 0, 2, 5로 이루어져 있습니다.

#### 입출력 예 <br>
  
rsp|	result
---|---
"2"|	"0"
"205"|	"052"

#### 입출력 예 설명 <br>

입출력 예 #1
- "2"는 가위이므로 바위를 나타내는 "0"을 return 합니다.

입출력 예 #2
- "205"는 순서대로 가위, 바위, 보이고 이를 모두 이기려면 바위, 보, 가위를 순서대로 내야하므로 “052”를 return합니다.

### 접근방법 <br>

1. rsp의 원소가 2이면 0, 0이면 5, 5이면 2를 append

### 작성 코드 <br>

```python
def solution(rsp):
    answer = ''
    
    for i in rsp:
        if(i == "2"): # 가위면 
            answer+="0" # 바위
        elif(i == "0"): # 바위면 
            answer+="5" # 보
        else: # 보면
            answer+="2" # 가위
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_064.png)





