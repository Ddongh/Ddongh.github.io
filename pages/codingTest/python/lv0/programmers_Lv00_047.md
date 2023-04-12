---
title: "캐릭터의 좌표_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_047.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

머쓱이는 RPG게임을 하고 있습니다. 게임에는 up, down, left, right 방향키가 있으며 각 키를 누르면 위, 아래, 왼쪽, 오른쪽으로 한 칸씩 이동합니다. 예를 들어 [0,0]에서 up을 누른다면 캐릭터의 좌표는 [0, 1], down을 누른다면 [0, -1], left를 누른다면 [-1, 0], right를 누른다면 [1, 0]입니다. 머쓱이가 입력한 방향키의 배열 keyinput와 맵의 크기 board이 매개변수로 주어집니다. 캐릭터는 항상 [0,0]에서 시작할 때 키 입력이 모두 끝난 뒤에 캐릭터의 좌표 [x, y]를 return하도록 solution 함수를 완성해주세요.

- [0, 0]은 board의 정 중앙에 위치합니다. 예를 들어 board의 가로 크기가 9라면 캐릭터는 왼쪽으로 최대 [-4, 0]까지 오른쪽으로 최대 [4, 0]까지 이동할 수 있습니다.

#### 제한사항 <br>

- board은 [가로 크기, 세로 크기] 형태로 주어집니다.
- board의 가로 크기와 세로 크기는 홀수입니다.
- board의 크기를 벗어난 방향키 입력은 무시합니다.
- 0 ≤ keyinput의 길이 ≤ 50
- 1 ≤ board[0] ≤ 99
- 1 ≤ board[1] ≤ 99
- keyinput은 항상 up, down, left, right만 주어집니다.


#### 입출력 예 <br>
  
keyinput|	board|	result
---|---|---
["left", "right", "up", "right", "right"]|	[11, 11]|	[2, 1]
["down", "down", "down", "down", "down"]|	[7, 9]|	[0, -4]

#### 입출력 예 설명 <br>

입출력 예 #1
- [0, 0]에서 왼쪽으로 한 칸 오른쪽으로 한 칸 위로 한 칸 오른쪽으로 두 칸 이동한 좌표는 [2, 1]입니다.

입출력 예 #2
- [0, 0]에서 아래로 다섯 칸 이동한 좌표는 [0, -5]이지만 맵의 세로 크기가 9이므로 아래로는 네 칸을 넘어서 이동할 수 없습니다. 따라서 [0, -4]를 return합니다.


### 접근방법 <br>

1. keyinput에 따라 좌표를 이동한다
2. board에 따라 좌표의 최대값과 최솟값을 지정하고 벗어나지 않도록 한다.

### 작성 코드 <br>

```python
def solution(k, b):
    answer = [0, 0]
    
    for i in k:
        if(i == "left"):
            answer[0] = max(-(b[0]//2), answer[0]-1) # 왼쪽으로 이동(좌표를 벗어나지 않도록 이동가능한 x축의 최소값을 지정)
        elif(i == "right"):
            answer[0] = min(b[0]//2, answer[0]+1) # 오른쪽으로 이동(좌표를 벗어나지 않도록 이동가능한 x축의 최대값을 지정)
        elif(i == "up"):
            answer[1] = min(b[1]//2, answer[1] + 1) # 위쪽으로 이동(좌표를 벗어나지 않도록 이동가능한 y축의 최대값을 지정)
        elif(i == "down"):
            answer[1] = max(-(b[1]//2), answer[1]-1) # 아래쪽으로 이동(좌표를 벗어나지 않도록 이동가능한 y축의 최소값을 지정)
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_047.png)



