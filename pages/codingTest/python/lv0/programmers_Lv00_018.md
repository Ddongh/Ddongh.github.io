---
title: "가장 큰 수 찾기_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_018.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

#### 제한사항 <br>

- 1 ≤ array의 길이 ≤ 100
- 0 ≤ array 원소 ≤ 1,000
- array에 중복된 숫자는 없습니다.

#### 입출력 예 <br>
  
array|	result
---|---
[1, 8, 3]|	[8, 1]
[9, 10, 11, 8]|	[11, 2]

#### 입출력 예 설명 <br>

입출력 예 #1
- 1, 8, 3 중 가장 큰 수는 8이고 인덱스 1에 있습니다.

입출력 예 #2
- 9, 10, 11, 8 중 가장 큰 수는 11이고 인덱스 2에 있습니다.

### 접근방법 <br>

1. 최대값과 최대값의 인덱스를 배열에 담아 리턴한다.

### 작성 코드 <br>

```python
def solution(array):
    return [max(array), array.index(max(array))]
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_018.png)



