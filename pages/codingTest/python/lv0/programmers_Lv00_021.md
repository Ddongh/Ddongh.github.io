---
title: "한 번만 등장한 문자_programmers_Lv0"
tagName: CodingTest
search: include
permalink: programmers_Lv00_021.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.

#### 제한사항 <br>

- 0 < s의 길이 < 1,000
- s는 소문자로만 이루어져 있습니다.

#### 입출력 예 <br>
  
s	|	result
---|---
"abcabcadc"|	"d"
"abdc"|	"abcd"
"hello"|	"eho"

#### 입출력 예 설명 <br>

입출력 예 #1
- "abcabcadc"에서 하나만 등장하는 문자는 "d"입니다.

입출력 예 #2
- "abdc"에서 모든 문자가 한 번씩 등장하므로 사전 순으로 정렬한 "abcd"를 return 합니다.

입출력 예 #3
- "hello"에서 한 번씩 등장한 문자는 "heo"이고 이를 사전 순으로 정렬한 "eho"를 return 합니다.

### 접근방법 <br>

1. 1번만 등장하는 문자열들을 찾는다.
2. 사전 순으로 정렬한다.

### 작성 코드 <br>

```python
def solution(s):
    answer = ''
    
    for i in s:
        if(s.count(i) == 1): # 1번만 등장하면 answer에 추가.
            answer+=i
    answer = sorted(answer) # 사잔순으로 정렬(배열)
    answer = "".join(answer) # 문자열로 합치기
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_021.png)



