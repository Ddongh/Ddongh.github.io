---
title: "연속된 수의 합_programmers_Lv0"
tagName: CodingTest
search: exclude
permalink: programmers_Lv00_003.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.

#### 제한사항 <br>

- 1 ≤ num ≤ 100
- 0 ≤ total ≤ 1000
- num개의 연속된 수를 더하여 total이 될 수 없는 테스트 케이스는 없습니다.

#### 입출력 예 <br>
  
num|total|result
---|---|---
3|12|[3, 4, 5]
5|15|[1, 2, 3, 4, 5]
4|14|[2, 3, 4, 5]
5|5|[-1, 0, 1, 2, 3]

#### 입출력 예 설명 <br>

입출력 예 #1
- num = 3, total = 12인 경우 [3, 4, 5]를 return합니다.

입출력 예 #2
- num = 5, total = 15인 경우 [1, 2, 3, 4, 5]를 return합니다.

입출력 예 #3
- 4개의 연속된 수를 더해 14가 되는 경우는 2, 3, 4, 5입니다.

입출력 예 #4
- 설명 생략


#### 접근방법 <br>

1. 0을 기준으로 음/양의 방향으로 한 칸씩 이동하며 num의 길이만큼 연속된 정수 배열 생성(오름차순)
2. 생성된 배열의 합이 total과 같으면 생성된 배열을 return

### 작성 코드 <br>

```python
def solution(num, total):
    answer = []

    i = -1
    while(True):
        i += 1
        ls_0 = list(range(i, i+num))   # 한칸씩 양의 방향으로 이동 후 num의 길이만큼 연속된 정수배열 생성
        ls_1 = list(range(-i, -i+num)) # 한칸씩 음의 방향으로 이동 후 num의 길이만큼 연속된 정수배열 생성
        if(sum(ls_0) == total): # 합계가 total과 같으면 생성된 리스트 return
            return ls_0
        elif(sum(ls_1) == total):
            return ls_1
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_003.png)



