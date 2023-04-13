---
title: "중복된 숫자 개수_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_100.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.

#### 제한사항 <br>

- 1 ≤ array의 길이 ≤ 100
- 0 ≤ array의 원소 ≤ 1,000
- 0 ≤ n ≤ 1,000


#### 입출력 예 <br>
  
array|	n|	result
---|---|---
[1, 1, 2, 3, 4, 5]|	1|	2
[0, 2, 3, 4]|	1|	0

#### 입출력 예 설명 <br>

입출력 예 #1
- [1, 1, 2, 3, 4, 5] 에는 1이 2개 있습니다.

입출력 예 #2
- [0, 2, 3, 4] 에는 1이 0개 있습니다.

### 접근방법 <br>

1. array중 n의 개수를 카운트한다.

### 작성 코드 <br>

```python
def solution(array, n):
    return array.count(n)
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_100.png)





