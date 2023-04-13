---
title: "분수의 덧셈_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_092.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

#### 제한사항 <br>

- 0 <numer1, denom1, numer2, denom2 < 1,000

#### 입출력 예 <br>
  
numer1|	denom1|	numer2|	denom2|	result
---|---|---|---|---
1|	2|	3|	4|	[5, 4]
9|	2|	1|	3|	[29, 6]

#### 입출력 예 설명 <br>

입출력 예 #1
- 1 / 2 + 3 / 4 = 5 / 4입니다. 따라서 [5, 4]를 return 합니다.

입출력 예 #2
- 9 / 2 + 1 / 3 = 29 / 6입니다. 따라서 [29, 6]을 return 합니다.

### 접근방법 <br>

1. 배열의 각 원소를 두배로 만든다.

### 작성 코드 <br>

```python
def solution(n1, d1, n2, d2):
    answer = []
    for i in range(max(d1, d2), d1*d2+1): # 분모 d1, c2의 최소공배수를 구한다.
        if(i % d1 == 0 and i % d2 == 0):
            n1 *= i//d1 # 통분한다.
            n2 *= i//d2
            d1 = i
            d2 = i
            
    answer.append(n1+n2)
    answer.append(d1)      
    
    a = answer[1] # 분모
    b = []
    
    i = 2
    while(i <= a): # 소인수 분해
        if(a % i ==0):
            b.append(i)
            a /= i
        else:
            i += 1
    
    for i in b: # 약분한다.
        if(answer[0] % i == 0 and answer[1] % i == 0):
            answer[0] /= i
            answer[1] /= i
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_092.png)





