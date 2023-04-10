---
title: "영어가 싫어요_programmers_Lv0"
tagName: CodingTest
search: include
permalink: programmers_Lv00_023.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.

#### 제한사항 <br>

- numbers는 소문자로만 구성되어 있습니다.
- numbers는 "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" 들이 공백 없이 조합되어 있습니다.
- 1 ≤ numbers의 길이 ≤ 50
- "zero"는 numbers의 맨 앞에 올 수 없습니다.

#### 입출력 예 <br>
  
numbers|	result
---|---
"onetwothreefourfivesixseveneightnine"|	123456789
"onefourzerosixseven"|	14067

#### 입출력 예 설명 <br>

입출력 예 #1
- "onetwothreefourfivesixseveneightnine"를 숫자로 바꾼 123456789를 return합니다.

입출력 예 #2
- "onefourzerosixseven"를 숫자로 바꾼 14067를 return합니다.

### 접근방법 <br>

1. 영어를 숫자로 교체하기 위해 영문으로 이루어진 배열을 생성
2. 각각의 영문에 해당하는 숫자로 교체(인덱스 사용) 

### 작성 코드 <br>

```python
def solution(numbers):
    answer = 0
    s = "zero, one, two, three, four, five, six, seven, eight, nine" # 영문 배열
    s = s.split(", ") # 리스트 변환
    
    for i in s:
        numbers = numbers.replace(i, str(s.index(i))) # 각각의 숫자를 의미하는 영문배열을 해당하는 인덱스로 교체
    answer = int(numbers) # 정수변환
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_023.png)



