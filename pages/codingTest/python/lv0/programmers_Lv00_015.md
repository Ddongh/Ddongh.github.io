---
title: "숫자 찾기_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_015.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

정수 num과 k가 매개변수로 주어질 때, num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return하고 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

#### 제한사항 <br>

- 0 < num < 1,000,000
- 0 ≤ k < 10
- num에 k가 여러 개 있으면 가장 처음 나타나는 자리를 return 합니다.

#### 입출력 예 <br>
  
num|	k|	result
---|---|---
29183|	1|	3
232443|	4|	4
123456|	7|	-1

#### 입출력 예 설명 <br>

입출력 예 #1
- 29183에서 1은 3번째에 있습니다.

입출력 예 #2
- 232443에서 4는 4번째에 처음 등장합니다.

입출력 예 #3
- 123456에 7은 없으므로 -1을 return 합니다.

### 접근방법 <br>

1. num을 문자열 변환 후 리스트로 변환한다.
2. try-except문을 사용하여 answer을 num에서 k의 index+1로 초기화한다.
3. k가 없으면 에러가 발생하므로 예외처리를 해준다. 

### 작성 코드 <br>

```python
def solution(num, k):
    answer = -1
    try:
        answer = list(str(num)).index(str(k)) + 1 # num을 문자열 변환 -> 리스트변환 후 k의 인덱스를 찾는다.
                                                  # 인덱스는 0부터 시작하고 n번째는 1부터 시작하므로 1을 더해준다.
    except: # k가 없으면 인덱스를 찾을 수 없으므로 에러가 발생하므로 예외처리한다.
        pass
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_015.png)



