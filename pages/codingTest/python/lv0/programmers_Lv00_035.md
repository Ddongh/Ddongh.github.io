---
title: "등수 매기기_programmers_Lv0"
tagName: CodingTest
search: include
permalink: programmers_Lv00_035.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다. 영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때, 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.

#### 제한사항 <br>

- 0 ≤ score[0], score[1] ≤ 100
- 1 ≤ score의 길이 ≤ 10
- score의 원소 길이는 2입니다.
- score는 중복된 원소를 갖지 않습니다.

#### 입출력 예 <br>
  
score|	result
---|---
[[80, 70], [90, 50], [40, 70], [50, 80]]|	[1, 2, 4, 3]
[[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]]|	[4, 4, 6, 2, 2, 1, 7]

#### 입출력 예 설명 <br>

입출력 예 #1
- 평균은 각각 75, 70, 55, 65 이므로 등수를 매겨 [1, 2, 4, 3]을 return합니다.

입출력 예 #2
- 평균은 각각 75, 75, 40, 95, 95, 100, 20 이므로 [4, 4, 6, 2, 2, 1, 7] 을 return합니다.
- 공동 2등이 두 명, 공동 4등이 2명 이므로 3등과 5등은 없습니다.

### 접근방법 <br>

1. score의 평균을 담은 리스트 생성(avr)
2. 등수 확인을 위한 내림차순 정렬(avr_s)
3. avr의 점수에 해당하는 등수를 담은 배열 return

### 작성 코드 <br>

```python
def solution(score):
    answer = []
    avr = [sum(i) / 2 for i in score] # score의 평균점수를 담은 배열
    avr_s = avr.copy() # 복사
    avr_s.sort(reverse=True) # 내림차순 정렬
    
    for i in range(len(avr)):
        answer.append(avr_s.index(avr[i]) + 1) # avr의 각 원소의 등수를 answer에 append
   
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_035.png)



