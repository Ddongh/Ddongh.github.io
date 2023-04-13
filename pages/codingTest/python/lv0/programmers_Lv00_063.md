---
title: "구슬을 나누는 경우의 수_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_063.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다. 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때, balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.

#### 제한사항 <br>

- 1 ≤ balls ≤ 30
- 1 ≤ share ≤ 30
- 구슬을 고르는 순서는 고려하지 않습니다.
- share ≤ balls

#### 입출력 예 <br>
  
balls|	share|	result
---|---|---
3|	2|	3
5|	3|	10

#### 입출력 예 설명 <br>

입출력 예 #1
- 서로 다른 구슬 3개 중 2개를 고르는 경우의 수는 3입니다.
<br>
![제출 결과](\images\programmers_Lv00_063_0.png)

입출력 예 #2
- 서로 다른 구슬 5개 중 3개를 고르는 경우의 수는 10입니다.

#### Hint <br>

- 서로 다른 n개 중 m개를 뽑는 경우의 수 공식은 다음과 같습니다. ![제출 결과](\images\programmers_Lv00_063_1.png)

### 접근방법 <br>

1. 조합을 구하는 공식을 이용한다.

### 작성 코드 <br>

```python
ddef solution(balls, share):
    def fac(n): # 팩토리얼 함수
        ret = 1
        for i in range(2, n+1):
            ret *= i
        return ret
    
    answer = fac(balls) / fac(balls-share) / fac(share) # 조합 공식 : nCm = n! / (n-m)! / m!
    
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_063_2.png)
![제출 결과](\images\programmers_Lv00_063_3.png)




