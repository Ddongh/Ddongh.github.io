---
title: "성격 유형 검사하기_programmers_Lv1"
tags: CodingTest
search: include
permalink: programmers_Lv01_017.html
sidebar: mydoc_sidebar
folder: /codingTest/python/lv1
---


#### 문제 설명 <br>

나만의 카카오 성격 유형 검사지를 만들려고 합니다.
성격 유형 검사는 다음과 같은 4개 지표로 성격 유형을 구분합니다. 성격은 각 지표에서 두 유형 중 하나로 결정됩니다.

지표 번호|	성격 유형
---|---
1번 지표|	라이언형(R), 튜브형(T)
2번 지표|	콘형(C), 프로도형(F)
3번 지표|	제이지형(J), 무지형(M)
4번 지표|	어피치형(A), 네오형(N)

4개의 지표가 있으므로 성격 유형은 총 16(=2 x 2 x 2 x 2)가지가 나올 수 있습니다. 예를 들어, "RFMN"이나 "TCMA"와 같은 성격 유형이 있습니다.

검사지에는 총 n개의 질문이 있고, 각 질문에는 아래와 같은 7개의 선택지가 있습니다.

- 매우 비동의
- 비동의
- 약간 비동의
- 모르겠음
- 약간 동의
- 동의
- 매우 동의

각 질문은 1가지 지표로 성격 유형 점수를 판단합니다.

예를 들어, 어떤 한 질문에서 4번 지표로 아래 표처럼 점수를 매길 수 있습니다.

선택지|	성격 유형 점수
---|---
매우 비동의|	네오형 3점
비동의|	네오형 2점
약간 비동의|	네오형 1점
모르겠음|	어떤 성격 유형도 점수를 얻지 않습니다
약간 동의|	어피치형 1점
동의|	어피치형 2점
매우 동의|	어피치형 3점

이때 검사자가 질문에서 약간 동의 선택지를 선택할 경우 어피치형(A) 성격 유형 1점을 받게 됩니다. 만약 검사자가 매우 비동의 선택지를 선택할 경우 네오형(N) 성격 유형 3점을 받게 됩니다.

위 예시처럼 네오형이 비동의, 어피치형이 동의인 경우만 주어지지 않고, 질문에 따라 네오형이 동의, 어피치형이 비동의인 경우도 주어질 수 있습니다.
하지만 각 선택지는 고정적인 크기의 점수를 가지고 있습니다.

- 매우 동의나 매우 비동의 선택지를 선택하면 3점을 얻습니다.
- 동의나 비동의 선택지를 선택하면 2점을 얻습니다.
- 약간 동의나 약간 비동의 선택지를 선택하면 1점을 얻습니다.
- 모르겠음 선택지를 선택하면 점수를 얻지 않습니다.

검사 결과는 모든 질문의 성격 유형 점수를 더하여 각 지표에서 더 높은 점수를 받은 성격 유형이 검사자의 성격 유형이라고 판단합니다. 단, 하나의 지표에서 각 성격 유형 점수가 같으면, 두 성격 유형 중 사전 순으로 빠른 성격 유형을 검사자의 성격 유형이라고 판단합니다.

질문마다 판단하는 지표를 담은 1차원 문자열 배열 survey와 검사자가 각 질문마다 선택한 선택지를 담은 1차원 정수 배열 choices가 매개변수로 주어집니다. 이때, 검사자의 성격 유형 검사 결과를 지표 번호 순서대로 return 하도록 solution 함수를 완성해주세요.

#### 제한사항 <br>

- 1 ≤ survey의 길이 ( = n) ≤ 1,000
    - survey의 원소는 "RT", "TR", "FC", "CF", "MJ", "JM", "AN", "NA" 중 하나입니다.
    - survey[i]의 첫 번째 캐릭터는 i+1번 질문의 비동의 관련 선택지를 선택하면 받는 성격 유형을 의미합니다.
    - survey[i]의 두 번째 캐릭터는 i+1번 질문의 동의 관련 선택지를 선택하면 받는 성격 유형을 의미합니다.

- choices의 길이 = survey의 길이
    - choices[i]는 검사자가 선택한 i+1번째 질문의 선택지를 의미합니다.
    - 1 ≤ choices의 원소 ≤ 7

choices|	뜻
---|---
1|	매우 비동의
2|	비동의
3|	약간 비동의
4|	모르겠음
5|	약간 동의
6|	동의
7|	매우 동의

#### 입출력 예 <br>
  
survey|	choices|	result
---|---|---
["AN", "CF", "MJ", "RT", "NA"]|	[5, 3, 2, 7, 5]|	"TCMA"
["TR", "RT", "TR"]|	[7, 1, 3]|	"RCJA"

#### 입출력 예 설명 <br>

입출력 예 #1

1번 질문의 점수 배치는 아래 표와 같습니다.

선택지|	성격 유형 점수
---|---
매우 비동의|	어피치형 3점
비동의|	어피치형 2점
약간 비동의|	어피치형 1점
모르겠음|	어떤 성격 유형도 점수를 얻지 않습니다
약간 동의|	네오형 1점
동의|	네오형 2점
매우 동의|	네오형 3점

1번 질문에서는 지문의 예시와 다르게 비동의 관련 선택지를 선택하면 어피치형(A) 성격 유형의 점수를 얻고, 동의 관련 선택지를 선택하면 네오형(N) 성격 유형의 점수를 얻습니다.
1번 질문에서 검사자는 약간 동의 선택지를 선택했으므로 네오형(N) 성격 유형 점수 1점을 얻게 됩니다.

2번 질문의 점수 배치는 아래 표와 같습니다.

선택지|	성격 유형 점수
---|---
매우 비동의|	콘형 3점
비동의|	콘형 2점
약간 비동의|	콘형 1점
모르겠음|	어떤 성격 유형도 점수를 얻지 않습니다
약간 동의|	프로도형 1점
동의|	프로도형 2점
매우 동의|	프로도형 3점

2번 질문에서 검사자는 약간 비동의 선택지를 선택했으므로 콘형(C) 성격 유형 점수 1점을 얻게 됩니다.

3번 질문의 점수 배치는 아래 표와 같습니다.

선택지|	성격 유형 점수
---|---
매우 비동의|	무지형 3점
비동의|	무지형 2점
약간 비동의|	무지형 1점
모르겠음|	어떤 성격 유형도 점수를 얻지 않습니다
약간 동의|	제이지형 1점
동의|	제이지형 2점
매우 동의|	제이지형 3점

3번 질문에서 검사자는 비동의 선택지를 선택했으므로 무지형(M) 성격 유형 점수 2점을 얻게 됩니다.

4번 질문의 점수 배치는 아래 표와 같습니다.

선택지|	성격 유형 점수
---|---
매우 비동의|	라이언형 3점
비동의|	라이언형 2점
약간 비동의|	라이언형 1점
모르겠음|	어떤 성격 유형도 점수를 얻지 않습니다
약간 동의|	튜브형 1점
동의|	튜브형 2점
매우 동의|	튜브형 3점

4번 질문에서 검사자는 매우 동의 선택지를 선택했으므로 튜브형(T) 성격 유형 점수 3점을 얻게 됩니다.

5번 질문의 점수 배치는 아래 표와 같습니다.

선택지|	성격 유형 점수
---|---
매우 비동의|	네오형 3점
비동의|	네오형 2점
약간 비동의|	네오형 1점
모르겠음|	어떤 성격 유형도 점수를 얻지 않습니다
약간 동의|	어피치형 1점
동의|	어피치형 2점
매우 동의|	어피치형 3점

5번 질문에서 검사자는 약간 동의 선택지를 선택했으므로 어피치형(A) 성격 유형 점수 1점을 얻게 됩니다.

1번부터 5번까지 질문의 성격 유형 점수를 합치면 아래 표와 같습니다.

지표 번호|	성격 유형|	점수|	성격 유형|	점수
---|---|---|---|---
1번 지표|	라이언형(R)|	0|	튜브형(T)|	3
2번 지표|	콘형(C)|	1|	프로도형(F)|	0
3번 지표|	제이지형(J)|	0|	무지형(M)|	2
4번 지표|	어피치형(A)|	1|	네오형(N)|	1

각 지표에서 더 점수가 높은 T,C,M이 성격 유형입니다.
하지만, 4번 지표는 1점으로 동일한 점수입니다. 따라서, 4번 지표의 성격 유형은 사전순으로 빠른 A입니다.

따라서 "TCMA"를 return 해야 합니다.

입출력 예 #2

1번부터 3번까지 질문의 성격 유형 점수를 합치면 아래 표와 같습니다.

지표 번호|	성격 유형|	점수|	성격 유형|	점수
---|---|---|---|---
1번 지표|	라이언형(R)|	6|	튜브형(T)|	1
2번 지표|	콘형(C)|	0|	프로도형(F)|	0
3번 지표|	제이지형(J)|	0|	무지형(M)|	0
4번 지표|	어피치형(A)|	0|	네오형(N)|	0

1번 지표는 튜브형(T)보다 라이언형(R)의 점수가 더 높습니다. 따라서 첫 번째 지표의 성격 유형은 R입니다.
하지만, 2, 3, 4번 지표는 모두 0점으로 동일한 점수입니다. 따라서 2, 3, 4번 지표의 성격 유형은 사전순으로 빠른 C, J, A입니다.

따라서 "RCJA"를 return 해야 합니다.

### 접근방법 <br>

1. 설문지 응답을 통해 각 유형에 점수를 부여한다.
2. 점수가 높은 유형 또는 점수가 같을 경우 사전순으로 앞선 유형을 선택한다.

### 작성 코드 <br>

```python
def solution(sur, ch):
    answer = ''
    t = ["R", "T", "C", "F", "J", "M", "A", "N"] # 유형종류
    res = {} # 유형점수를 저장할 딕셔너리
    
    for i in t: # 딕셔너리 초기화
        res[i] = 0
    
    for i in range(len(ch)): # ch에 따라 각 유형에 점수 부여
        if(ch[i] < 4): # 설문에 대한 답변이 1~3이면
            res[sur[i][0]] += 4 - ch[i] # 선택한 답변에 따른 점수 부여
        elif(ch[i] > 4): # 설문에 대한 답변이 5~7이면
            res[sur[i][1]] += ch[i] - 4 # 선택한 답변에 따른 점수 부여
    
    for i in range(0, len(t), 2):
        if(res[t[i]] > res[t[i+1]]): # 각 지표에서 점수가 높은 유형을 선택
            answer += t[i]
        elif(res[t[i]] < res[t[i+1]]):
            answer += t[i+1]
        else:
            answer += chr(min(ord(t[i]), ord(t[i+1]))) # 점수가 똑같으면 사전 순으로 높은 유형 선택
      
    return answer
```

#### 제출 결과

![제출 결과](\images\programmers_Lv01_017.png)





