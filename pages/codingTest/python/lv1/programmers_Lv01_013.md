---
title: "옹알이 (2)_programmers_Lv1"
tags: CodingTest
search: include
permalink: programmers_Lv01_013.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv1
---


#### 문제 설명 <br>

머쓱이는 태어난 지 11개월 된 조카를 돌보고 있습니다. 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음과 네 가지 발음을 조합해서 만들 수 있는 발음밖에 하지 못하고 연속해서 같은 발음을 하는 것을 어려워합니다. 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.

#### 제한사항 <br>

- 1 ≤ ingredient의 길이 ≤ 1,000,000
- ingredient의 원소는 1, 2, 3 중 하나의 값이며, 순서대로 빵, 야채, 고기를 의미합니다.

#### 입출력 예 <br>
  
babbling|	result
---|---
["aya", "yee", "u", "maa"]|	1
["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]|	2

#### 입출력 예 설명 <br>

입출력 예 #1
- ["aya", "yee", "u", "maa"]에서 발음할 수 있는 것은 "aya"뿐입니다. 따라서 1을 return합니다.

입출력 예 #2
- ["ayaye", "uuuma", "yeye", "yemawoo", "ayaayaa"]에서 발음할 수 있는 것은 "aya" + "ye" = "ayaye", "ye" + "ma" + "woo" = "yemawoo"로 2개입니다. "yeye"는 같은 발음이 연속되므로 발음할 수 없습니다. 따라서 2를 return합니다.

유의사항
- 네 가지를 붙여 만들 수 있는 발음 이외에는 어떤 발음도 할 수 없는 것으로 규정합니다. 예를 들어 "woowo"는 "woo"는 발음할 수 있지만 "wo"를 발음할 수 없기 때문에 할 수 없는 발음입니다.

### 접근방법 <br>

1. 각 문자열에 대해
 - 조카가 발음할 수 있는 문자열을 2번 반복한 것을 "X"로 replace
 - 조카가 발음 할 수 있는 문자열을 정수로 변환
2. 각 문자열을 정수로 변환했을때 에러가 발생하지 않으면(정수로만 이루어져 있으면) 조카가 발음할 수 있는 문자열이다.

### 작성 코드 <br>

```python
def solution(bab):
    answer = 0
    _bab = ["aya", "ye", "woo", "ma"] # 조카가 발음할 수 있는 문자열
    for i in range(len(bab)):
        for j in range(len(_bab)):
            bab[i] = bab[i].replace(_bab[j]*2, "X") # 발음할수 있는 문자열이 연속 되어있으면 "X"로 replace
            bab[i] = bab[i].replace(_bab[j], str(j)) # 발음할 수 있는 문자열은 정수변환
        try:
            int(bab[i]) # replace후 정수 변환
            answer+=1 # 에러가 발생하지 않으면(문자열이 모두 정수로 replace 되었으면) 조카가 발음할 수 있는 문자열
        except:
            pass # 예외처리

    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv01_013.png)





