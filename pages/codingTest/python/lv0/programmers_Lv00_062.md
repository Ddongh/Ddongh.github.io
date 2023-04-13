---
title: "점의 위치 구하기_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_062.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분입니다. 사분면은 아래와 같이 1부터 4까지 번호를매깁니다.
<br>
![제출 결과](\images\programmers_Lv00_062_0.png)
<br>
- x 좌표와 y 좌표가 모두 양수이면 제1사분면에 속합니다.
- x 좌표가 음수, y 좌표가 양수이면 제2사분면에 속합니다.
- x 좌표와 y 좌표가 모두 음수이면 제3사분면에 속합니다.
- x 좌표가 양수, y 좌표가 음수이면 제4사분면에 속합니다.

x 좌표 (x, y)를 차례대로 담은 정수 배열 dot이 매개변수로 주어집니다. 좌표 dot이 사분면 중 어디에 속하는지 1, 2, 3, 4 중 하나를 return 하도록 solution 함수를 완성해주세요.

#### 제한사항 <br>

- dot의 길이 = 2
- dot[0]은 x좌표를, dot[1]은 y좌표를 나타냅니다
- -500 ≤ dot의 원소 ≤ 500
- dot의 원소는 0이 아닙니다.

#### 입출력 예 <br>
  
dot|	result
---|---
[2, 4]|	1
[-7, 9]|	2

#### 입출력 예 설명 <br>

입출력 예 #1
- dot이 [2, 4]로 x 좌표와 y 좌표 모두 양수이므로 제 1 사분면에 속합니다. 따라서 1을 return 합니다.

입출력 예 #2
- dot이 [-7, 9]로 x 좌표가 음수, y 좌표가 양수이므로 제 2 사분면에 속합니다. 따라서 2를 return 합니다.

### 접근방법 <br>

1. x, y좌표가 음/양 인지에 따라 사분면 중 어디에 속하는 지 판단한다.

### 작성 코드 <br>

```python
def solution(dot):
    answer = 0
    if(dot[0] > 0): # x좌표가 양의 정수이면
        if(dot[1] > 0): # y좌표가 양의 정수이면
            return 1
        else: # y좌표가 음의 정수이면
            return 4
    else: # x좌표가 음의 정수이면
        if(dot[1] > 0): # y좌표가 양의 정수이면
            return 2
        else: # y좌표가 음의 정수이면
            return 3
            
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_062_1.png)




