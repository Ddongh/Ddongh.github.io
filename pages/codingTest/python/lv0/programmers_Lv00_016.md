---
title: "배열의 유사도_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_016.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.

#### 제한사항 <br>

- 1 ≤ s1, s2의 길이 ≤ 100
- 1 ≤ s1, s2의 원소의 길이 ≤ 10
- s1과 s2의 원소는 알파벳 소문자로만 이루어져 있습니다
- s1과 s2는 각각 중복된 원소를 갖지 않습니다.

#### 입출력 예 <br>
  
s1|	s2|	result
---|---|---
["a", "b", "c"]|	["com", "b", "d", "p", "c"]|	2
["n", "omg"]|	["m", "dot"]|	0

#### 입출력 예 설명 <br>

입출력 예 #1
- "b"와 "c"가 같으므로 2를 return합니다.

입출력 예 #2
- 같은 원소가 없으므로 0을 return합니다.

### 접근방법 <br>

1. s1의 원소 중 s2에 포함된 개수 count

### 작성 코드 <br>

```python
def solution(s1, s2):
    answer = 0
    s1 = sorted(s1) # 오름차순 정리
    s2 = sorted(s2) # 오름차순 정리
    
    for i in s1:
        if(i in s2): # s1의 각 원소가 s2에 포함되어 있으면
            answer+=1 # 개수 +1
    
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_016.png)



