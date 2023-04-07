---
title: "7의 개수_programmers_Lv0"
tagName: CodingTest
search: include
permalink: programmers_Lv00_007.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.

#### 제한사항 <br>

- 1 ≤ array의 길이 ≤ 100
- 0 ≤ array의 원소 ≤ 100,000

#### 입출력 예 <br>
  
array|result
---|---
[7, 77, 17]|4
[10, 29]|0

#### 입출력 예 설명 <br>

입출력 예 #1
- [7, 77, 17]에는 7이 4개 있으므로 4를 return 합니다.

입출력 예 #2
- [10, 29]에는 7이 없으므로 0을 return 합니다.

### 접근방법 <br>

1. 이중 반복문을 이용하여 array의 원소를 문자열로 변환 후 7인지 체크하여 개수를 센다

### 작성 코드 <br>

```python
def solution(array):
    answer = 0
    
    for i in range(len(array)):
        tmp = str(array[i]) # array의 i번째 원소를 문자열로 변환
        for j in range(len(tmp)):
            if(tmp[j] == str(7)): # 변환한 문자열의 각 문자가 7인치 체크
                answer += 1 # 7이면 answer += 1
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_007.png)



