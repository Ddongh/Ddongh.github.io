---
title: "삼각형의 완성조건 (1)_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_028.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
    - 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.

#### 제한사항 <br>

- sides의 원소는 자연수입니다.
- sides의 길이는 3입니다.
- 1 ≤ sides의 원소 ≤ 1,000


#### 입출력 예 <br>
  
sides|	result
---|---
[1, 2, 3]|	2
[3, 6, 2]|	2
[199, 72, 222]|	1

#### 입출력 예 설명 <br>

입출력 예 #1
- 가장 큰 변인 3이 나머지 두 변의 합 3과 같으므로 삼각형을 완성할 수 없습니다. 따라서 2를 return합니다.

입출력 예 #2
- 가장 큰 변인 6이 나머지 두 변의 합 5보다 크므로 삼각형을 완성할 수 없습니다. 따라서 2를 return합니다.

입출력 예 #3
- 가장 큰 변인 222가 나머지 두 변의 합 271보다 작으므로 삼각형을 완성할 수 있습니다. 따라서 1을 return합니다.

### 접근방법 <br>

1. 가장 긴 변의 길이와 나머지 변의 길이의 합을 비교한다.

### 작성 코드 <br>

```python
def solution(sides):
    answer = 2
    sides.sort() # 최댓값을 찾기위해 오름차순 정렬
    if(sum(sides[:2]) > sides[-1]): # 가장 긴 변의 길이가 나머지 두 변의 길이의 합 보다 작으면
        return 1 # 삼각형을 만들 수 있으므로 1 return
    return answer # 삼각형을 만들지 못하므로 2 return
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_028.png)



