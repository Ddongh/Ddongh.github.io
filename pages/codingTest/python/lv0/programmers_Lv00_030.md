---
title: "k의 개수_programmers_Lv0"
tagName: CodingTest
search: include
permalink: programmers_Lv00_030.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.

#### 제한사항 <br>

- 1 ≤ i < j ≤ 100,000
- 0 ≤ k ≤ 9

#### 입출력 예 <br>
  
i|	j|	k|	result
---|---|---|---
1|	13|	1|	6
10|	50|	5|	5
3|	10|	2|	0 

#### 입출력 예 설명 <br>

입출력 예 #1
- 본문과 동일합니다.

입출력 예 #2
- 10부터 50까지 5는 15, 25, 35, 45, 50 총 5번 등장합니다. 따라서 5를 return 합니다.

입출력 예 #3
- 3부터 10까지 2는 한 번도 등장하지 않으므로 0을 return 합니다.

### 접근방법 <br>

1. i부터 j까지 숫자를 문자열 변환 후 k가 몇개 있는지 체크한다.

### 작성 코드 <br>

```python
def solution(i, j, k):
    answer = 0
    for i in range(i, j+1):
        answer += str(i).count(str(k)) # 문자열 변환 후 k의 개수를 answer에 더해준다.
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_030.png)



