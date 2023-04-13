---
title: "직각삼각형 출력하기_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_077.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

"*"의 높이와 너비를 1이라고 했을 때, "*"을 이용해 직각 이등변 삼각형을 그리려고합니다. 정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력하도록 코드를 작성해보세요.

#### 제한사항 <br>

- 1 ≤ n ≤ 10

#### 입출력 예 <br>
  
입력 #1

> 3

출력 #1

> \* <br>
> ** <br>
> *** <br>

#### 입출력 예 설명 <br>

입출력 예 #1
- n이 3이므로 첫째 줄에 * 1개, 둘째 줄에 * 2개, 셋째 줄에 * 3개를 출력합니다.

### 접근방법 <br>

1. *를 1, 2, 3, ...n개 출력한다.

### 작성 코드 <br>

```python
n = int(input())

for i in range(1, n+1):
    print(i * "*")
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_077.png)





