---
title: "명예의 전당 (1)_programmers_Lv1"
tags: CodingTest
search: include
permalink: programmers_Lv01_008.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv1
---


#### 문제 설명 <br>

"명예의 전당"이라는 TV 프로그램에서는 매일 1명의 가수가 노래를 부르고, 시청자들의 문자 투표수로 가수에게 점수를 부여합니다. 매일 출연한 가수의 점수가 지금까지 출연 가수들의 점수 중 상위 k번째 이내이면 해당 가수의 점수를 명예의 전당이라는 목록에 올려 기념합니다. 즉 프로그램 시작 이후 초기에 k일까지는 모든 출연 가수의 점수가 명예의 전당에 오르게 됩니다. k일 다음부터는 출연 가수의 점수가 기존의 명예의 전당 목록의 k번째 순위의 가수 점수보다 더 높으면, 출연 가수의 점수가 명예의 전당에 오르게 되고 기존의 k번째 순위의 점수는 명예의 전당에서 내려오게 됩니다.

이 프로그램에서는 매일 "명예의 전당"의 최하위 점수를 발표합니다. 예를 들어, k = 3이고, 7일 동안 진행된 가수의 점수가 [10, 100, 20, 150, 1, 100, 200]이라면, 명예의 전당에서 발표된 점수는 아래의 그림과 같이 [10, 10, 10, 20, 20, 100, 100]입니다.

![제출 결과](\images\programmers_Lv01_008_0.png)
<br>

명예의 전당 목록의 점수의 개수 k, 1일부터 마지막 날까지 출연한 가수들의 점수인 score가 주어졌을 때, 매일 발표된 명예의 전당의 최하위 점수를 return하는 solution 함수를 완성해주세요.

#### 제한사항 <br>

- 3 ≤ k ≤ 100
- 7 ≤ score의 길이 ≤ 1,000
    - 0 ≤ score[i] ≤ 2,000


#### 입출력 예 <br>
  
k|	score|	result
---|---|---
3|	[10, 100, 20, 150, 1, 100, 200]|	[10, 10, 10, 20, 20, 100, 100]
4|	[0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]|	[0, 0, 0, 0, 20, 40, 70, 70, 150, 300]

#### 입출력 예 설명 <br>

입출력 예 #1
- 문제의 예시와 같습니다.

입출력 예 #2
- 아래와 같이, [0, 0, 0, 0, 20, 40, 70, 70, 150, 300]을 return합니다.
![제출 결과](\images\programmers_Lv01_008_1.png)

### 접근방법 <br>

1. score원소를 순서대로 넣는다.
2. 내림차순 정렬한다.
3. k번째를 넘어가는 원소를 삭제한다.
4. 마지막 원소를 result에 넣는다.
5. 위의 과정을 반복한다.

### 작성 코드 <br>

```python
def solution(k, score):
    answer = []
    ret = []
    
    for i in score:
        ret.append(i) # score의 원소를 순서대로 넣는다.
        ret.sort(reverse=True) # 내림차순 정렬
        if(len(ret)>k): # ret의 원소가 k보다 크면
            ret = ret[:k] # k번째까지 자른다.
        answer.append(ret[-1]) # 마지막 원소(최하위점수)를 answer에 append
        
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv01_008_2.png)





