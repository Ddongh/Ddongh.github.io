---
title: "세균 증식_programmers_Lv0"
tagName: CodingTest
search: include
permalink: programmers_Lv00_009.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

어떤 세균은 1시간에 두배만큼 증식한다고 합니다. 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.

#### 제한사항 <br>

- 1 ≤ n ≤ 10
- 1 ≤ t ≤ 15

#### 입출력 예 <br>
  
n|t|result
---|---
2|10|2048
7|15|229,376

#### 입출력 예 설명 <br>

입출력 예 #1
- 처음엔 2마리, 1시간 후엔 4마리, 2시간 후엔 8마리, ..., 10시간 후엔 2048마리가 됩니다. 따라서 2048을 return합니다.

입출력 예 #2
- 처음엔 7마리, 1시간 후엔 14마리, 2시간 후엔 28마리, ..., 15시간 후엔 229376마리가 됩니다. 따라서 229,376을 return합니다.

#### 접근방법 <br>

1. 처음 n마리에 시간당 증가량 2**t를 곱해준다.

### 작성 코드 <br>

```python
def solution(n, t):
    answer = n * (2**t) # 초기값 n에 시간당 증가량 2**t를 곱한다.
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_009.png)



