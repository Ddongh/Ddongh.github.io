---
title: "진료 순서 정하기_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_068.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.

#### 제한사항 <br>

- 중복된 원소는 없습니다.
- 1 ≤ emergency의 길이 ≤ 10
- 1 ≤ emergency의 원소 ≤ 100

#### 입출력 예 <br>
  
emergency|	result
---|---
[3, 76, 24]|	[3, 1, 2]
[1, 2, 3, 4, 5, 6, 7]|	[7, 6, 5, 4, 3, 2, 1]
[30, 10, 23, 6, 100]|	[2, 4, 3, 5, 1]

#### 입출력 예 설명 <br>

입출력 예 #1
- emergency가 [3, 76, 24]이므로 응급도의 크기 순서대로 번호를 매긴 [3, 1, 2]를 return합니다.

입출력 예 #2
- emergency가 [1, 2, 3, 4, 5, 6, 7]이므로 응급도의 크기 순서대로 번호를 매긴 [7, 6, 5, 4, 3, 2, 1]를 return합니다.

입출력 예 #3 
- emergency가 [30, 10, 23, 6, 100]이므로 응급도의 크기 순서대로 번호를 매긴 [2, 4, 3, 5, 1]를 return합니다.

### 접근방법 <br>

1. emergency를 복사(깊은 복사)한 후 내림차순 정렬
2. 각 원소를 key, 순서를 value로 하는 딕셔너리 생성
3. emergency의 각 원소의 순서를 담은 리스트 생성

### 작성 코드 <br>

```python
def solution(em):
    import copy
    
    _em = copy.deepcopy(em) # 깊은 복사
    answer = []
    dic = {}
    
    _em.sort(reverse=True) # 내림차순 정렬
    
    for i in range(len(_em)): # 각 원소를 key, 순서를 value로 하는 딕셔너리 생성
        dic[_em[i]] = i + 1
    
    for i in range(len(em)): # em의 각 원소의 순서를 answer에 append
        answer.append(dic[em[i]])
    
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_068.png)





