---
title: "이진수 더하기_programmers_Lv0"
tagName: CodingTest
search: include
permalink: programmers_Lv00_032.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

이진수를 의미하는 두 개의 문자열 bin1과 bin2가 매개변수로 주어질 때, 두 이진수의 합을 return하도록 solution 함수를 완성해주세요.

#### 제한사항 <br>

- return 값은 이진수를 의미하는 문자열입니다.
- 1 ≤ bin1, bin2의 길이 ≤ 10
- bin1과 bin2는 0과 1로만 이루어져 있습니다.
- bin1과 bin2는 "0"을 제외하고 0으로 시작하지 않습니다.

#### 입출력 예 <br>
  
bin1|	bin2|	result
---|---|---
"10"|	"11"|	"101"
"1001"|	"1111"|	"11000"

#### 입출력 예 설명 <br>

입출력 예 #1
- 10 + 11 = 101 이므로 "101" 을 return합니다.

입출력 예 #2
- 1001 + 1111 = 11000 이므로 "11000"을 return합니다.

### 접근방법 <br>

1. 2진수를 10진수로 변환 후 더한다.
2. 10진수를 2진수로 변환한다.

### 작성 코드 <br>

```python
def solution(bin1, bin2):
    answer = ''
    int1 = int(bin1, 2) # 2진수 ->> 10진수 변환
    int2 = int(bin2, 2) # 2진수 ->> 10진수 변환
    answer = bin(int1 + int2)[2:] # 변환 후 가장 앞의 0b를 삭제하기 위해 2번째 인덱스부터 지정
            
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_032.png)



