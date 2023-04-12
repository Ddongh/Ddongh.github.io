---
title: "합성수 찾기_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_057.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.

#### 제한사항 <br>

- 1 ≤ n ≤ 100

#### 입출력 예 <br>
  
n|	result
---|---
10|	5
15|	8

#### 입출력 예 설명 <br>

입출력 예 #1
- 10 이하 합성수는 4, 6, 8, 9, 10 로 5개입니다. 따라서 5를 return합니다.

입출력 예 #2
- 15 이하 합성수는 4, 6, 8, 9, 10, 12, 14, 15 로 8개입니다. 따라서 8을 return합니다.

### 접근방법 <br>

1. n이하의 정수에 대해 약수의 개수를 구한다.
2. 약수의 개수가 3개 이상이면 카운팅한다.(1과 자기 자신을 제외한 약수가 있으면 약수는 3개 이상)

### 작성 코드 <br>

```python
def solution(n):
    answer = 0
    for i in range(1, n+1): # n이하 자연수
        for j in range(2, i-1): # 1과 자기 자신을 제외한 약수를 찾는다.
            if(i % j == 0): # 1과 자기자신을 제외한 약수가 존재하면 약수가 3개 이상이므로 합성수이다.
                answer+=1
                break
            
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_057.png)



