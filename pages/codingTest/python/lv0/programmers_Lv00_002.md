---
title: "다음에 올 숫자_programmers_Lv0"
tagName: CodingTest
search: exclude
permalink: programmers_Lv00_002.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.

#### 제한사항 <br>

- 2 < common의 길이 < 1,000
- -1,000 < common의 원소 < 2,000
    - common의 원소는 모두 정수입니다.
- 등차수열 혹은 등비수열이 아닌 경우는 없습니다.
- 등비수열인 경우 공비는 0이 아닌 정수입니다.

#### 입출력 예 <br>
  
common|result
:---|:---:
[1, 2, 3, 4]|5
[2, 4, 8]|16
  
#### 입출력 예 설명 <br>

입출력 예 #1
- [1, 2, 3, 4]는 공차가 1인 등차수열이므로 다음에 올 수는 5이다.

입출력 예 #2
- [2, 4, 8]은 공비가 2인 등비수열이므로 다음에 올 수는 16이다.

#### 접근방법 <br>

1. common[-1] - common[-2] 과 common[-2] - common[-3] 이 같다면 등차수열 <br>
    다르다면 등비수열이다.
2. 각각의 경우에 따라 등차/등비를 구하여 다음에 올 숫자를 구한다.

### 작성 코드 <br>

```python
def solution(com):
    answer = 0
    if(com[-1] - com[-2] == com[-2] - com[-3]): # 등차수열 
        answer = com[-1] + com[-1] - com[-2] # 리스트의 마지막 원소에 등차를 더해 다음에 올 숫자를 구한다.
    else: # 등비수열
        answer = com[-1] * com[-1] / com[-2] # 리스트의 마지막 원소에 등비를 곱하여 다음에 올 숫자를 구한다.
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_002.png)



