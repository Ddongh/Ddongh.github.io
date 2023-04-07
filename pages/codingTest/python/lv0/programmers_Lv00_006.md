---
title: "잘라서 배열로 저장하기_programmers_Lv0"
tagName: CodingTest
search: include
permalink: programmers_Lv00_006.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

#### 제한사항 <br>

- 1 ≤ my_str의 길이 ≤ 100
- 1 ≤ n ≤ my_str의 길이
- my_str은 알파벳 소문자, 대문자, 숫자로 이루어져 있습니다.

#### 입출력 예 <br>
  
my_str|n|result
---|---|---
"abc1Addfggg4556b"|6|["abc1Ad", "dfggg4", "556b"]
"abcdef123"|3|["abc", "def", "123"]

#### 입출력 예 설명 <br>

입출력 예 #1
- "abc1Addfggg4556b" 를 길이 6씩 잘라 배열에 저장한 ["abc1Ad", "dfggg4", "556b"]를 return해야 합니다.

입출력 예 #2
- "abcdef123" 를 길이 3씩 잘라 배열에 저장한 ["abc", "def", "123"]를 return해야 합니다.

#### 유의사항 <br>

입출력 예 #1의 경우 "abc1Addfggg4556b"를 길이 6씩 자르면 "abc1Ad", "dfggg4" 두개와 마지막 "556b"가 남습니다. 이런 경우 남은 문자열을 그대로 배열에 저장합니다.

#### 접근방법 <br>

1. my_str의 길이만큼 for문을 돌릴때 간격을 n만큼으로 지정하여 문자열을 자른 후 answer에 추가한다.

### 작성 코드 <br>

```python
def solution(my_str, n):
    answer = []
    for i in range(0, len(my_str), n): # 0부터 my_str의 길이만큼 n 간격으로 반복문을 돌린다.
        answer.append(my_str[i: i+n]) # n만큼 배열을 잘라 answer에 append한다.
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_006.png)



