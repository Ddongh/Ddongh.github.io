---
title: "종이 자르기_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_004.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

머쓱이는 큰 종이를 1 x 1 크기로 자르려고 합니다. 예를 들어 2 x 2 크기의 종이를 1 x 1 크기로 자르려면 최소 가위질 세 번이 필요합니다. <br>
![문제설명](\images\programmers_Lv00_004_0.png)

#### 제한사항 <br>

- 0 < M, N < 100
- 종이를 겹쳐서 자를 수 없습니다.

#### 입출력 예 <br>
  
M|N|result
---|---|---
2|2|3
2|5|9
1|1|0
  
#### 입출력 예 설명 <br>

입출력 예 #1
- 본문과 동일합니다.

입출력 예 #2
- 가로 2 세로 5인 종이는 가로로 1번 세로로 8번 총 가위질 9번이 필요합니다.

입출력 예 #2
 - 이미 1 * 1 크기이므로 0을 return 합니다.

### 접근방법 <br>

1. 가로를 기준으로 1 크기로 자른 후 세로를 1 크기로 자른다.

### 작성 코드 <br>

```python
def solution(M, N):
    answer = 0
    answer = (N-1) + (M-1) * N # (N-1) : 가로를 기준으로 크기 1로 자르기 위한 횟수
                               # (M-1) * N : 세로를 크기 1로 자르기 위해 이미 잘린 N의 조각만큼 반복
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_004_1.png)



