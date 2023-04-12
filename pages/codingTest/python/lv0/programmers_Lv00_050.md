---
title: "컨트롤 제트_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_050.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어집니다. 문자열에 있는 숫자를 차례대로 더하려고 합니다. 이 때 "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다. 숫자와 "Z"로 이루어진 문자열 s가 주어질 때, 머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요.

#### 제한사항 <br>

- 1 ≤ s의 길이 ≤ 200
- -1,000 < s의 원소 중 숫자 < 1,000
- s는 숫자, "Z", 공백으로 이루어져 있습니다.
- s에 있는 숫자와 "Z"는 서로 공백으로 구분됩니다.
- 연속된 공백은 주어지지 않습니다.
- 0을 제외하고는 0으로 시작하는 숫자는 없습니다.
- s는 "Z"로 시작하지 않습니다.
- s의 시작과 끝에는 공백이 없습니다.
- "Z"가 연속해서 나오는 경우는 없습니다.

#### 입출력 예 <br>
  
s|	result
---|-----------------
"1 2 Z 3"|	4
"10 20 30 40"|	100
"10 Z 20 Z 1"|	1
"10 Z 20 Z"|	0
"-1 -2 -3 Z"|	-3

#### 입출력 예 설명 <br>

입출력 예 #1
- 본문과 동일합니다.

입출력 예 #2
- 10 + 20 + 30 + 40 = 100을 return 합니다.

입출력 예 #3 
- "10 Z 20 Z 1"에서 10 다음 Z, 20 다음 Z로 10, 20이 지워지고 1만 더하여 1을 return 합니다.

입출력 예 #4, #5

- 설명 생략


### 접근방법 <br>

1. Z 를 앞에 나온 정수 * -1 로 교체한 후 합계를 구한다.

### 작성 코드 <br>

```python
def solution(s):
    answer = 0
    s = s.split(" ")
    
    for i in range(len(s)):
        if(s[i] == "Z"): # Z를
            s[i] = int(s[i-1] * (-1)) # 바로 앞에 나온 정수 * -1 로 교체
        else:
            s[i] = int(s[i]) # 정수 변환
    answer = sum(s) # 합계
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_050.png)



