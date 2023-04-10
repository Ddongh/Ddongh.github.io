---
title: "편지_programmers_Lv0"
tagName: CodingTest
search: include
permalink: programmers_Lv00_019.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

머쓱이는 할머니께 생신 축하 편지를 쓰려고 합니다. 할머니가 보시기 편하도록 글자 한 자 한 자를 가로 2cm 크기로 적으려고 하며, 편지를 가로로만 적을 때, 축하 문구 message를 적기 위해 필요한 편지지의 최소 가로길이를 return 하도록 solution 함수를 완성해주세요.

#### 제한사항 <br>

- 공백도 하나의 문자로 취급합니다.
- 1 ≤ message의 길이 ≤ 50
- 편지지의 여백은 생각하지 않습니다.
- message는 영문 알파벳 대소문자, ‘!’, ‘~’ 또는 공백으로만 이루어져 있습니다.

#### 입출력 예 <br>
  
message|	result
---|---
"happy birthday!"|	30
"I love you~"|	22

#### 입출력 예 설명 <br>

입출력 예 #1
- message의 글자 수가 15개로 최소 가로 30cm의 편지지가 필요합니다.

입출력 예 #2
- message의 글자 수가 11개로 최소 가로 22cm의 편지지가 필요합니다.

### 접근방법 <br>

1. 문자열의 길이 * 2를 리턴한다.

### 작성 코드 <br>

```python
def solution(message):
    answer = len(message) * 2
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_019.png)



