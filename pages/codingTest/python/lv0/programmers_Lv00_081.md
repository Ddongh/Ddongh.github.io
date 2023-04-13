---
title: "아이스 아메리카노_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_081.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

머쓱이는 추운 날에도 아이스 아메리카노만 마십니다. 아이스 아메리카노는 한잔에 5,500원입니다. 머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

#### 제한사항 <br>

- 0 < money ≤ 1,000,000

#### 입출력 예 <br>
  
money|	result
---|---
5,500|	[1, 0]
15,000|	[2, 4000]

#### 입출력 예 설명 <br>

입출력 예 #1
- 5,500원은 아이스 아메리카노 한 잔을 살 수 있고 잔돈은 0원입니다.

입출력 예 #2
- 15,000원은 아이스 아메리카노 두 잔을 살 수 있고 잔돈은 4,000원입니다.

### 접근방법 <br>

1. money를 5500으로 나눈 몫과 나머지를 담은 리스트를 리턴한다.

### 작성 코드 <br>

```python
def solution(money):
    answer = []
    answer.append(money // 5500) # 몫(잔수)
    answer.append(money % 5500) # 나머지(잔돈)
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_081.png)





