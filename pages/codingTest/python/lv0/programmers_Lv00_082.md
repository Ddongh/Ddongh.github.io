---
title: "옷가게 할인 받기_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_082.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.

#### 제한사항 <br>

- 10 ≤ price ≤ 1,000,000
    - price는 10원 단위로(1의 자리가 0) 주어집니다.
- 소수점 이하를 버린 정수를 return합니다.

#### 입출력 예 <br>
  
price|	result
---|---
150,000|	142,500
580,000|	464,000

#### 입출력 예 설명 <br>

입출력 예 #1
- 150,000원에서 5%를 할인한 142,500원을 return 합니다.

입출력 예 #2
- 580,000원에서 20%를 할인한 464,000원을 return 합니다.

### 접근방법 <br>

1. price 별로 해당하는 할인율을 적용한 가격을 리턴한다.

### 작성 코드 <br>

```python
def solution(p):
    answer = p
    if(p >= 100000): # 10만원 이상이면
        if(p >= 300000): # 30만원 이상이면
            if(p >= 500000): # 50만원 이상이면
                return int(p * 0.8)# 20% 할인
            return int(p * 0.9) # 10% 할인
        return int(p * 0.95) # 5% 할인
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_082.png)





