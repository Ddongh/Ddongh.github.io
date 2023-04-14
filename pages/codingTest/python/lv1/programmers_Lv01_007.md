---
title: "문자열 나누기_programmers_Lv1"
tags: CodingTest
search: include
permalink: programmers_Lv01_007.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv1
---


#### 문제 설명 <br>

문자열 s가 입력되었을 때 다음 규칙을 따라서 이 문자열을 여러 문자열로 분해하려고 합니다.

- 먼저 첫 글자를 읽습니다. 이 글자를 x라고 합시다.
- 이제 이 문자열을 왼쪽에서 오른쪽으로 읽어나가면서, x와 x가 아닌 다른 글자들이 나온 횟수를 각각 셉니다. 처음으로 두 횟수가 같아지는 순간 멈추고, 지금까지 읽은 문자열을 분리합니다.
- s에서 분리한 문자열을 빼고 남은 부분에 대해서 이 과정을 반복합니다. 남은 부분이 없다면 종료합니다.
-  만약 두 횟수가 다른 상태에서 더 이상 읽을 글자가 없다면, 역시 지금까지 읽은 문자열을 분리하고, 종료합니다.

문자열 s가 매개변수로 주어질 때, 위 과정과 같이 문자열들로 분해하고, 분해한 문자열의 개수를 return 하는 함수 solution을 완성하세요.

#### 제한사항 <br>

- 11 ≤ s의 길이 ≤ 10,000
- s는 영어 소문자로만 이루어져 있습니다.


#### 입출력 예 <br>
  
s|	result
---|---
"banana"|	3
"abracadabra"|	6
"aaabbaccccabba"|	3

#### 입출력 예 설명 <br>

입출력 예 #1
- s="banana"인 경우 ba - na - na와 같이 분해됩니다.

입출력 예 #2
- s="abracadabra"인 경우 ab - ra - ca - da - br - a와 같이 분해됩니다.

입출력 예 #3
- s="aaabbaccccabba"인 경우 aaabbacc - ccab - ba와 같이 분해됩니다.

### 접근방법 <br>

1. 문제 설명에 따라 문자열을 분리한다.

### 작성 코드 <br>

```python
def solution(s):
    
    answer = 0
    x = s[0] # 첫번째 글자
    cnt1 = 0 # x와 같은 문자의 개수
    cnt2 = 0 # x와 다른 문자의 개수

    for i in range(len(s)-1):
        if(s[i] == x): # x와 같으면
            cnt1+=1
        else: # x와 다르면
            cnt2+=1
        if(cnt1 == cnt2): # x와 같은 문자의 개수와 x와 다른 문자의 개수가 동일하면
            x = s[i+1] # 지금까지의 문자열을 분리 후 남은 문자열의 첫번째 문자
            answer+=1 # 분리 횟수
        
    answer+=1 # 분해한 문자열의 개수
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv01_007.png)





