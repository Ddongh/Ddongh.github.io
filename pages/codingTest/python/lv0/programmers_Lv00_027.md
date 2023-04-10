---
title: "가까운 수_programmers_Lv0"
tagName: CodingTest
search: include
permalink: programmers_Lv00_027.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

#### 제한사항 <br>

- 1 ≤ array의 길이 ≤ 100
- 1 ≤ array의 원소 ≤ 100
- 1 ≤ n ≤ 100
- 가장 가까운 수가 여러 개일 경우 더 작은 수를 return 합니다.


#### 입출력 예 <br>
  
array|	n|	result
---|---|---
[3, 10, 28]|	20|	28
[10, 11, 12]|	13|	12

#### 입출력 예 설명 <br>

입출력 예 #1
- 3, 10, 28 중 20과 가장 가까운 수는 28입니다.

입출력 예 #2
- 10, 11, 12 중 13과 가장 가까운 수는 12입니다.

### 접근방법 <br>

1. array와 n의 차이에 대한 절대값을 담은 리스트를 생성 
2. 리스트의 최소값에 해당하는 index를 구하기
3. index에 해당하는 array의 원소 return

### 작성 코드 <br>

```python
def solution(arr, n):
    answer = 0
    arr.sort()
    
    arr_ = [abs(i-n) for i in arr] # array의 원소 - n의 절대값을 담은 리스트 생성
    idx = arr_.index(min(arr_)) # arr_의 최소값의 index구하기
    answer = arr[idx] # 해당 index에 해당하는 arr의 원소
    
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_027.png)



