---
title: "배열 회전시키기_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_059.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.

#### 제한사항 <br>

- 3 ≤ numbers의 길이 ≤ 20
- direction은 "left" 와 "right" 둘 중 하나입니다.

#### 입출력 예 <br>
  
numbers|	direction|	result
---|---|---
[1, 2, 3]|	"right"|	[3, 1, 2]
[4, 455, 6, 4, -1, 45, 6]|	"left"|	[455, 6, 4, -1, 45, 6, 4]

#### 입출력 예 설명 <br>

입출력 예 #1
- numbers 가 [1, 2, 3]이고 direction이 "right" 이므로 오른쪽으로 한 칸씩 회전시킨 [3, 1, 2]를 return합니다.

입출력 예 #2
- numbers 가 [4, 455, 6, 4, -1, 45, 6]이고 direction이 "left" 이므로 왼쪽으로 한 칸씩 회전시킨 [455, 6, 4, -1, 45, 6, 4]를 return합니다.

### 접근방법 <br>

1. direction이 "right" 면 numbers의 마지막 원소를 가장 앞으로 옮긴다.
2. direction이 "left" 면 numbers의 첫번째 원소를 가장 마지막으로 옮긴다.

### 작성 코드 <br>

```python
def solution(num, d):
    answer = []
    
    if(d == "right"): # 오른쪽으로 회전
        num = num[-1:] + num[:-1] # 마지막 원소를 가장 앞으로 가져온다.
    elif(d == "left"): # 왼쪽으로 회전
        num = num[1:] + num[:1] # 첫번재 원소를 가장 마지막으로 옮긴다.
    return num
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_059.png)



