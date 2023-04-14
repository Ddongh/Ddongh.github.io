---
title: "카드 뭉치_programmers_Lv1"
tags: CodingTest
search: include
permalink: programmers_Lv01_002.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv1
---


#### 문제 설명 <br>

코니는 영어 단어가 적힌 카드 뭉치 두 개를 선물로 받았습니다. 코니는 다음과 같은 규칙으로 카드에 적힌 단어들을 사용해 원하는 순서의 단어 배열을 만들 수 있는지 알고 싶습니다.

- 원하는 카드 뭉치에서 카드를 순서대로 한 장씩 사용합니다.
- 한 번 사용한 카드는 다시 사용할 수 없습니다.
- 카드를 사용하지 않고 다음 카드로 넘어갈 수 없습니다.
- 기존에 주어진 카드 뭉치의 단어 순서는 바꿀 수 없습니다.

예를 들어 첫 번째 카드 뭉치에 순서대로 ["i", "drink", "water"], 두 번째 카드 뭉치에 순서대로 ["want", "to"]가 적혀있을 때 ["i", "want", "to", "drink", "water"] 순서의 단어 배열을 만들려고 한다면 첫 번째 카드 뭉치에서 "i"를 사용한 후 두 번째 카드 뭉치에서 "want"와 "to"를 사용하고 첫 번째 카드뭉치에 "drink"와 "water"를 차례대로 사용하면 원하는 순서의 단어 배열을 만들 수 있습니다.

문자열로 이루어진 배열 cards1, cards2와 원하는 단어 배열 goal이 매개변수로 주어질 때, cards1과 cards2에 적힌 단어들로 goal를 만들 있다면 "Yes"를, 만들 수 없다면 "No"를 return하는 solution 함수를 완성해주세요.

#### 제한사항 <br>

- 1 ≤ cards1의 길이, cards2의 길이 ≤ 10
    - 1 ≤ cards1[i]의 길이, cards2[i]의 길이 ≤ 10
    - cards1과 cards2에는 서로 다른 단어만 존재합니다.
- 2 ≤ goal의 길이 ≤ cards1의 길이 + cards2의 길이
    - 1 ≤ goal[i]의 길이 ≤ 10
    - goal의 원소는 cards1과 cards2의 원소들로만 이루어져 있습니다.
- cards1, cards2, goal의 문자열들은 모두 알파벳 소문자로만 이루어져 있습니다.


#### 입출력 예 <br>
  
cards1|	cards2|	goal|	result
---|---|---|---
["i", "drink", "water"]|	["want", "to"]|	["i", "want", "to", "drink", "water"]|	"Yes"
["i", "water", "drink"]|	["want", "to"]|	["i", "want", "to", "drink", "water"]|	"No"

#### 입출력 예 설명 <br>

입출력 예 #1
- 본문과 같습니다.

입출력 예 #2
- "B"의 경우, 'B'가 어디에도 존재하지 않기 때문에 -1을 첫 번째 인덱스에 저장합니다.
- 결과적으로 [-1]을 return 합니다.

입출력 예 #3
- cards1에서 "i"를 사용하고 cards2에서 "want"와 "to"를 사용하여 "i want to"까지는 만들 수 있지만 "water"가 "drink"보다 먼저 사용되어야 하기 때문에 해당 문장을 완성시킬 수 없습니다. 따라서 "No"를 반환합니다.

### 접근방법 <br>

1. card1, card2, goal을 reverse한다.(pop()을 쓰기위해)
2. card1, card2의 가장 마지막 원소 중 goal의 마지막 원소와 일치하는 원소가 있으면 해당 원소를 제거한다.(해당 카드뭉치와 goal)
3. 해당하는 원소가 없으면(goal을 만들 수 없으면) "No"리턴 

### 작성 코드 <br>

```python
def solution(c1, c2, goal):
    answer = "Yes"
    c1.reverse() # 배열 뒤집기
    c2.reverse() # 배열 뒤집기
    goal.reverse() # 배열 뒤집기

    while(len(goal)>0):
        if(len(c1) > 0 and c1[-1] == goal[-1]): # c1의 마지막 원소와 goal의 마지막 원소가 동일하면
            c1.pop() # 해당 c1 원소 삭제
            goal.pop() # 해당 goal 원소 삭제
        elif(len(c2) > 0 and c2[-1] == goal[-1]): # c2의 마지막 원소와 goal의 마지막 원소가 동일하면
            c2.pop() # 해당 c1 원소 삭제
            goal.pop() # 해당 goal 원소 삭제
        else: # 대치되는 원소가 없으면 
            return "No" 
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv01_002.png)





