---
title: "안전지대_programmers_Lv0"
tagName: CodingTest
search: include
permalink: programmers_Lv00_043.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

다음 그림과 같이 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다.<br>
![제출 결과](\images\programmers_Lv00_043_0.png)
<br>
지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.

#### 제한사항 <br>

- board는 n * n 배열입니다.
- 1 ≤ n ≤ 100
- 지뢰는 1로 표시되어 있습니다.
- board에는 지뢰가 있는 지역 1과 지뢰가 없는 지역 0만 존재합니다.

#### 입출력 예 <br>
  
board|	result
---|---
[[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]|	16
[[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 1, 0], [0, 0, 0, 0, 0]]|	13
[[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]]|	0

#### 입출력 예 설명 <br>

입출력 예 #1
- (3, 2)에 지뢰가 있으므로 지뢰가 있는 지역과 지뢰와 인접한 위, 아래, 좌, 우, 대각선 총 8칸은 위험지역입니다. 따라서 16을 return합니다.

입출력 예 #2
- (3, 2), (3, 3)에 지뢰가 있으므로 지뢰가 있는 지역과 지뢰와 인접한 위, 아래, 좌, 우, 대각선은 위험지역입니다. 따라서 위험지역을 제외한 칸 수 13을 return합니다.

입출력 예 #3
- 모든 지역에 지뢰가 있으므로 안전지역은 없습니다. 따라서 0을 return합니다.

### 접근방법 <br>

1. 지뢰의 위치가 표시된 배열이 있을때 지뢰의 위치, 지뢰와 인접한 위, 아래, 좌, 우, 대각선을 1로 표시한 배열을 생성한다.
2. 배열 중 0의 개수를  return 한다.

### 작성 코드 <br>

```python
def solution(board):
    import copy
    answer = 0
    _board = copy.deepcopy(board) # 안전하지 않은 지역을 표시하기 위해 깊은 복사를 한다.

    for i in range(len(board)):
        for j in range(len(board)):
            if(board[i][j] == 1): # 지뢰가 있으면
                    _board[max(i-1, 0)][min(j-1, len(board)-1)] = 1             # 좌측 대각선 위를 1로 변경 # 범위를 벗어나지 않도록 min, max를 적절히 사용
                    _board[max(i-1, 0)][j] = 1                                  # 윗칸을 1로 변경
                    _board[max(i-1, 0)][min(j+1, len(board)-1)] = 1             # 우측 대가선 위를 1로 변경
                    _board[i][min(j+1, len(board)-1)] = 1                       # 우측 칸을 1로 1변경 
                    _board[i][max(j-1, 0)] = 1                                  # 좌측 칸을 1로 변경
                    _board[min(i+1, len(board)-1)][max(j-1, 0)] = 1             # 좌측 대각선 아래를 1로 변경
                    _board[min(i+1, len(board)-1)][j] = 1                       # 아랫칸을 1로 변경
                    _board[min(i+1, len(board)-1)][min(j+1, len(board)-1)] = 1  # 우측 대각선 아래를 1로 변경               
    
    for i in range(len(_board)): # 안전지대의 개수 카운팅
        for j in range(len(_board)):
            if(_board[i][j] == 0):
                answer += 1
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_043_1.png)



