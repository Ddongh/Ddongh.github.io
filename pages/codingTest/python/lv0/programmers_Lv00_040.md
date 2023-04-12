---
title: "저주의 숫자 3_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_040.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다. 3x 마을 사람들의 숫자는 다음과 같습니다.

10진법|	3x 마을에서 쓰는 숫자|	10진법|	3x 마을에서 쓰는 숫자
---|---|---|---
1|	1|	6|	8
2|	2|	7|	10
3|	4|	8|	11
4|	5|	9|	14
5|	7|	10|	16

정수 n이 매개변수로 주어질 때, n을 3x 마을에서 사용하는 숫자로 바꿔 return하도록 solution 함수를 완성해주세요.

#### 제한사항 <br>

- 1 ≤ n ≤ 100

#### 입출력 예 <br>
  
n|	result
---|---
15|	25
40|	76

#### 입출력 예 설명 <br>

입출력 예 #1
- 15를 3x 마을의 숫자로 변환하면 25입니다.

입출력 예 #2
- 40을 3x 마을의 숫자로 변환하면 76입니다.

### 접근방법 <br>

1. 숫자 n만큼 카운팅할때 3의 배수이거나 숫자 3이 포함되어 있으면 다음 숫자로 건너뛴다.

### 작성 코드 <br>

```python
def solution(n):
    answer = 0
    
    for i in range(n): # n만큼 카운팅 할때
        answer += 1 # 카운팅을 1 하고
        while(True): 
            if(answer % 3 == 0 or "3" in str(answer)): # 3의 배수이거나 3이 포함되어있으면 다음 숫자로 건너뛴다.
                answer += 1
                continue
            break
       
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_040.png)



