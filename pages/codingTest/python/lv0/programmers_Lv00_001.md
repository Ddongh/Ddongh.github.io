---
title: "옹알이(1)_programmers_Lv00"
tagName: CodingTest
search: exclude
permalink: programmers_Lv00_001.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv0
---


#### 문제 설명 <br>

머쓱이는 태어난 지 6개월 된 조카를 돌보고 있습니다. 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다. 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.

#### 제한사항 <br>

- 1 ≤ babbling의 길이 ≤ 100
- 1 ≤ babbling[i]의 길이 ≤ 15
- babbling의 각 문자열에서 "aya", "ye", "woo", "ma"는 각각 최대 한 번씩만 등장합니다.
  - 즉, 각 문자열의 가능한 모든 부분 문자열 중에서 "aya", "ye", "woo", "ma"가 한 번씩만 등장합니다.
- 문자열은 알파벳 소문자로만 이루어져 있습니다.

#### 입출력 예 <br>
  
babbling|result
:---|:---:
["aya", "yee", "u", "maa", "wyeoo"]|1
["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]|3
  
#### 입출력 예 설명 <br>

입출력 예 #1
- ["aya", "yee", "u", "maa", "wyeoo"]에서 발음할 수 있는 것은 "aya"뿐입니다. 따라서 1을 return합니다.

입출력 예 #2
- ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]에서 발음할 수 있는 것은 "aya" + "ye" = "ayaye", "ye", "ye" + "ma" + "woo" = "yemawoo"로 3개입니다. 따라서 3을 return합니다.

#### 제한사항 <br>

 - 네 가지를 붙여 만들 수 있는 발음 이외에는 어떤 발음도 할 수 없는 것으로 규정합니다. 예를 들어 "woowo"는 "woo"는 발음할 수 있지만 "wo"를 발음할 수 없기 때문에 할 수 없는 발음입니다.

#### 접근방법 <br>

1. 주어진 문열 리스트 bab과 머쓱이가 발음가능한 문자열 리스트를 이용하여 이중 반복문을 통해 주어진 문자열 리스트 중 머쓱이가 발음가능한 문자열을 replace한다. (발음 가능한 문자열 -> 0)
2. try - except 문을 이용하여 
 - 정수 변환이 가능하다면 발음이 가능하므로 answer += 1
 - 정수 변환 시 에러가 발생한다면 발음이 불가능하므로 pass

### 작성 코드 <br>

```python
def solution(bab):
    answer = 0
    _bab = ["aya", "ye", "woo", "ma"] # 머쓱이가 발음 가능한 문자열 리스트
    
    for i in range(len(bab)): # 주어진 문자열 리스트
        for j in range(len(_bab)): # 발음 가능한 문자열 리스트
            bab[i] = bab[i].replace(_bab[j], "0") # 주어진 문자열을 발음 가능한 문자열과 비교하여 replace
        try:
            int(bab[i]) # replace된 문자열을 정수변환(발음이 가능하다면 0 반환)
            answer+=1 # 발음가능하므로 +1
        except:
            pass # 정수 변환시 문자열이 포함되어 있으면 에러가 발생하므로 pass
   
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv00_001.png)



