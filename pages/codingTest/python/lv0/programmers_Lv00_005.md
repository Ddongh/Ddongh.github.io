---
title: "문자열 밀기_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_005.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

문자열 "hello"에서 각 문자를 오른쪽으로 한 칸씩 밀고 마지막 문자는 맨 앞으로 이동시키면 "ohell"이 됩니다. 이것을 문자열을 민다고 정의한다면 문자열 A와 B가 매개변수로 주어질 때, A를 밀어서 B가 될 수 있다면 밀어야 하는 최소 횟수를 return하고 밀어서 B가 될 수 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

#### 제한사항 <br>

- 0 < A의 길이 = B의 길이 < 100
- A, B는 알파벳 소문자로 이루어져 있습니다.

#### 입출력 예 <br>
  
A|B|result
---|---|---
"hello"|"ohell"|1
"apple"|"elppa"|-1
"atat"|"tata"|1
"abc"|"abc"|0  

#### 입출력 예 설명 <br>

입출력 예 #1
- "hello"를 오른쪽으로 한 칸 밀면 "ohell"가 됩니다.

입출력 예 #2
- "apple"은 몇 번을 밀어도 "elppa"가 될 수 없습니다.

입출력 예 #3
- "atat"는 오른쪽으로 한 칸, 세 칸을 밀면 "tata"가 되므로 최소 횟수인 1을 반환합니다.

입출력 예 #4
- "abc"는 밀지 않아도 "abc"이므로 0을 반환합니다.

### 접근방법 <br>

1. A의 가장 마지막 문자를 문자 가장 앞으로 이동하는 것을 반복
2. A와 B를 비교하며 동일하다면 반복 횟수를 이용하여 return 
3. 반복문이 끝나고 동일한 경우가 없다면 -1을 return 

### 작성 코드 <br>

```python
def solution(A, B):
    answer = -1
    
    if(A == B): # 이동하기 전 두 문자열이 같다면 이동횟수가 0이므로 return 0
        return 0
    
    for i in range(len(B)): # B의 길이만큼 반복
        A = A[-1] + A[:-1] # A의 마지막 문자를 가장 앞으로 이동
        if(A == B): # 두 문자열이 같다면
            answer = i+1 # answer을 이동횟수로 업데이트
            break # 조건에 해당하므로 break
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_005.png)



