---
title: "369게임_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_026.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

머쓱이는 친구들과 369게임을 하고 있습니다. 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 숫자 대신 3, 6, 9의 개수만큼 박수를 치는 게임입니다. 머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 머쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요.

#### 제한사항 <br>

- 1 ≤ order ≤ 1,000,000


#### 입출력 예 <br>
  
order|	result
---|---
3|	1
29423|	2

#### 입출력 예 설명 <br>

입출력 예 #1
- 3은 3이 1개 있으므로 1을 출력합니다.

입출력 예 #2
- 29423은 3이 1개, 9가 1개 있으므로 2를 출력합니다.

### 접근방법 <br>

1. 문자열의 3, 6, 9의 개수의 합을 return한다.

### 작성 코드 <br>

```python
def solution(order):
    answer = 0
    ord_ = list(str(order)) # 숫자를 문자열로 변환후 리스트 변환한다.
    clp = [3, 6, 9] # 개수 counting을 위한 3, 6, 9 리스트 생성
    
    for j in clp:
        answer += ord_.count(str(j)) # 3, 6, 9의 개수를 answer에 더하기
        
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_026.png)



