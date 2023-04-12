---
title: "소인수분해_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_051.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

소인수분해란 어떤 수를 소수들의 곱으로 표현하는 것입니다. 예를 들어 12를 소인수 분해하면 2 * 2 * 3 으로 나타낼 수 있습니다. 따라서 12의 소인수는 2와 3입니다. 자연수 n이 매개변수로 주어질 때 n의 소인수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.

#### 제한사항 <br>

- 2 ≤ n ≤ 10,000

#### 입출력 예 <br>
  
n|	result
---|---
12|	[2, 3]
17|	[17]
420|	[2, 3, 5, 7]

#### 입출력 예 설명 <br>

입출력 예 #1
- 12를 소인수분해하면 2 * 2 * 3 입니다. 따라서 [2, 3]을 return합니다.

입출력 예 #2
- 17은 소수입니다. 따라서 [17]을 return 해야 합니다.

입출력 예 #3 
- 420을 소인수분해하면 2 * 2 * 3 * 5 * 7 입니다. 따라서 [2, 3, 5, 7]을 return합니다.

### 접근방법 <br>

1. 소인수 분해한다.
2. 중복값을 제거한다.
3. 오름차순 정렬한다.

### 작성 코드 <br>

```python
def solution(n):
    answer = []
    
    i = 2
    
    while(i <= n): # 소인수 분해 알고리즘
        if(n % i == 0):
            answer.append(i)
            n /= i
        else:
            i += 1
    answer = list(set(answer)) # 중복제거
    answer.sort() # 오름차순 정렬
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_051.png)



