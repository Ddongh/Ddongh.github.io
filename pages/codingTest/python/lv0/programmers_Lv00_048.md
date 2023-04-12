---
title: "직사각형 넓이 구하기_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_048.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다. 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때, 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.

#### 제한사항 <br>

- dots의 길이 = 4
- dots의 원소의 길이 = 2
- -256 < dots[i]의 원소 < 256
- 잘못된 입력은 주어지지 않습니다.

#### 입출력 예 <br>
  
dots|	result
---|---
[[1, 1], [2, 1], [2, 2], [1, 2]]|	1
[[-1, -1], [1, 1], [1, -1], [-1, 1]]|	4

#### 입출력 예 설명 <br>

입출력 예 #1
- 좌표 [[1, 1], [2, 1], [2, 2], [1, 2]] 를 꼭짓점으로 갖는 직사각형의 가로, 세로 길이는 각각 1, 1이므로 직사각형의 넓이는 1 x 1 = 1입니다.

입출력 예 #2
- 좌표 [[-1, -1], [1, 1], [1, -1], [-1, 1]]를 꼭짓점으로 갖는 직사각형의 가로, 세로 길이는 각각 2, 2이므로 직사각형의 넓이는 2 x 2 = 4입니다.


### 접근방법 <br>

1. 직사각형의 가로, 세로 길이를 구하여 넓이를 구한다.

### 작성 코드 <br>

```python
def solution(dots):
    answer = 0
    dots.sort(key=lambda x:(x[0], x[1])) # x축 또는 y축에 평행한 선을 이루는 두 점을 찾기 위해 sort
    print(dots)
    answer = (dots[2][0] - dots[0][0]) * (dots[3][1] - dots[2][1]) # 가로길이 * 세로 길이
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_048.png)



