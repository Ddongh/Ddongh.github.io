---
title: "A로 B 만들기_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_031.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.

#### 제한사항 <br>

- 0 < before의 길이 == after의 길이 < 1,000
- before와 after는 모두 소문자로 이루어져 있습니다.

#### 입출력 예 <br>
  
before|	after|	result
---|---|---
"olleh"|	"hello"|	1
"allpe"|	"apple"|	0

#### 입출력 예 설명 <br>

입출력 예 #1
- "olleh"의 순서를 바꾸면 "hello"를 만들 수 있습니다.

입출력 예 #2
- "allpe"의 순서를 바꿔도 "apple"을 만들 수 없습니다.

### 접근방법 <br>

1. 문자열을 정렬 후 동일한지 확인한다.

### 작성 코드 <br>

```python
def solution(before, after):
    answer = 0
    bef = sorted(before) # 오름차순 정렬
    aft = sorted(after)  # 오름차순 정렬
    if(bef == aft): # 동일하면
        answer += 1 # answer을 1로 만듬
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_031.png)



