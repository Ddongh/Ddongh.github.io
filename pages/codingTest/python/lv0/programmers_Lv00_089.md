---
title: "중앙값 구하기_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_089.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다. 예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다. 정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.

#### 제한사항 <br>

- array의 길이는 홀수입니다.
- 0 < array의 길이 < 100
- -1,000 < array의 원소 < 1,000

#### 입출력 예 <br>
  
array|	result
---|---
[1, 2, 7, 10, 11]|	7
[9, -1, 0]|	0

#### 입출력 예 설명 <br>

입출력 예 #1
- 본문과 동일합니다.

입출력 예 #2
- 9, -1, 0을 오름차순 정렬하면 -1, 0, 9이고 가장 중앙에 위치하는 값은 0입니다.

### 접근방법 <br>

1. 오름차순을 정렬 한 후 중앙에 있는 값을 구한다.

### 작성 코드 <br>

```python
def solution(arr):
    answer = 0
    
    arr.sort() # 오름자순 정렬
    
    if(len(arr) % 2 == 1): # 원소의 개수가 홀수면
        return arr[len(arr)//2] # 중앙에 있는 원소
    
    idx = arr[len(arr) // 2] # 중앙에 위치한 2개의 원소 중 뒤에 있는 원소의 index
    answer = (arr[idx] + arr[idx-1]) / 2 # 원소의 개수가 짝수일 경우 중아에 위치한 두 원소의 평균이 중앙값
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_089.png)





