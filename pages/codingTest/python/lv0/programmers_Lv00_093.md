---
title: "숫자 비교하기_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_093.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.

#### 제한사항 <br>

- 0 ≤ num1 ≤ 10,000
- 0 ≤ num2 ≤ 10,000

#### 입출력 예 <br>
  
num1|	num2|	result
---|---|---
2|	3|	-1
11|	11|	1
7|	99|	-1

#### 입출력 예 설명 <br>

입출력 예 #1
- num1이 2이고 num2가 3이므로 다릅니다. 따라서 -1을 return합니다.

입출력 예 #2
- num1이 11이고 num2가 11이므로 같습니다. 따라서 1을 return합니다.

입출력 예 #3
- num1이 7이고 num2가 99이므로 다릅니다. 따라서 -1을 return합니다.

### 접근방법 <br>

1. num1과 num2의 동일성을 확인한다.

### 작성 코드 <br>

```python
def solution(num1, num2):
    answer = 1
    if(num1 != num2):
        return -1
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_093.png)





