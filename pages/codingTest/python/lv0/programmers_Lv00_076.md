---
title: "짝수 홀수 개수_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_076.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

#### 제한사항 <br>

- 1 ≤ num_list의 길이 ≤ 100
- 0 ≤ num_list의 원소 ≤ 1,000

#### 입출력 예 <br>
  
num_list|	result
---|---
[1, 2, 3, 4, 5]|	[2, 3]
[1, 3, 5, 7]|	[0, 4]

#### 입출력 예 설명 <br>

입출력 예 #1
- [1, 2, 3, 4, 5]에는 짝수가 2, 4로 두 개, 홀수가 1, 3, 5로 세 개 있습니다.

입출력 예 #2
- [1, 3, 5, 7]에는 짝수가 없고 홀수가 네 개 있습니다.

### 접근방법 <br>

1. num_list의 원소 중 짝수/홀수의 개수를 카운트한다.

### 작성 코드 <br>

```python
def solution(num_list):
    answer = [0, 0]
    
    for i in num_list:
        if(i % 2 == 0): # 짝수면
            answer[0] += 1
        else: # 홀수면
            answer[1] += 1
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_076.png)





