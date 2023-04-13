---
title: "배열 뒤집기_programmers_Lv0"
tags: CodingTest
search: include
permalink: programmers_Lv00_079.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.

#### 제한사항 <br>

- 1 ≤ num_list의 길이 ≤ 1,000
- 0 ≤ num_list의 원소 ≤ 1,000

#### 입출력 예 <br>
  
my_string|	return
---|---
"jaron"|	"noraj"
"bread"|	"daerb"

#### 입출력 예 설명 <br>

입출력 예 #1
- my_string이 "jaron"이므로 거꾸로 뒤집은 "noraj"를 return합니다.

입출력 예 #2
- my_string이 "bread"이므로 거꾸로 뒤집은 "daerb"를 return합니다.

### 접근방법 <br>

1. 문자열 슬라싱에서 음수를 사용하여 역순 출력한다.

### 작성 코드 <br>

```python
def solution(my):
    answer = my[::-1]
    
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_079.png)





