---
title: "주식 분석 및 게시판 포트폴리오"
permalink: stockAnalizing.html
folder: /portfolio
summary: ES6 이상의 자바스크립트, 업무에서 접하지 못하는 리액트, 그리고 백엔드를 공부하고 이전에 학습했던 파이썬을 복습하고자 이 포트폴리오를 제작하게 되었습니다.
---


안녕하십니까 저는 통계학과를 복수전공하면서 데이터분석 툴로서 Python, R 등의 코딩을 접하게 되었고 이를 조금더 깊게 배우고자 부트캠프를 통해 학습을 진행했습니다. 이때 웹개발을 위한 코딩을 접하게 되었고, 교육 중 웹개발에 조금 더 흥미를 느껴 인턴을 거쳐 현직장에 재직 중이며, 도전과 경험을 통해 다양한 기술 스택을 쌓아 적재적소에 알맞은 기술을 적용할 수 있는 개발자가 되고자 끊임없이 노력 중입니다. 
<br><br><br><br><br>

# Ubout Me
---
- 이&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;름 : 박동혁
- 생년월일 : 1996.02.26
- 주&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;소 : 서울시 구로구 오류동
- 메&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;일 : qwer5383@naver.com(개인)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;qwer5383@cordial.co.kr(회사)
- 최종학력 : 부경대학교(신문방송학과, 통계학과)
- Git&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : [https://github.com/Ddongh](https://github.com/Ddongh)
<br><br><br><br><br>

# Career
---
 - 2022.09 ~ 재직중 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;코디얼&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;서비스개발팀 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;사원
 - 2022.05 ~ 2022.06 &nbsp;&nbsp;&nbsp;&nbsp;농심NDS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;기술1팀 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;인턴
<br><br><br><br><br>

# Skills
---
 - HTML5, CSS3, Javascript, jQuery를 현재 업무 중 사용하고있습니다.
 - React, Node.js, MongoDB를 개인적으로 학습 중이며 이를 사용하여 포트폴리오를 제작하였습니다.
 - Java, Tibero를 인턴 기간동안 사용했습니다.
 - Python, R 등을 통계학과 복수 전공 중 학습했으며 부트캠프 교육 중 Python을 사용하여 Django프로젝트를 진행하기도 했습니다. 이를 바탕으로 현재 포트폴리오에 사용하였습니다.
<br><br><br><br><br>

# Let's Start Stock Analyzing App
---

## 1. 사용기술 
- React - 프론트엔드
	- Antd
	- Local Storage
	- Axios
- Node.js - 백엔드
	- child_process
- Python
	- RNN 
	- sklearn
	- tensorflow
	- yfinance
	- FinanceDataReader
- MongoDB

## 2. 전체 컴포넌트 구성

![전체 컴포넌트 구성](\images\Commponent_structure.jpg)

- Stock Analyzing App은 크게 주식 분석 및 질문글 작성, 등록 기능이 있는 StockAnalyzePage와 질문목록 및 조회, 댓글 기능이 있는 LandingPage로 구분되어있습니다.

- StockAnalyzePage는 종목 및 분석방법, 기간 등을 설정하는 AnalyzeForm과 분석 결과를 보여주는 AnalyzeResult로 이루어져 있으며 AnalyzeForm에서 post 요청으로 분석결과를 받아오면 AnalyResult가 렌더링 되는 방식입니다.

- LandingPage는 질문 목록을 표시하는 QuestionList와 목록에서 특정 게시글을 클릭시 렌더링되는 QuestionDetail로 구성되어있으며, QuestionDetail은 데이터 시각화를 담당하는 CandleStickChart와 댓글 기능을 담당하는 Comment로 구성되어있습니다. 이때 Comment의 자식컴포넌트인 ReplyCommet에는 또 다시 ReplyComment가 포함되면서 대댓글 기능이 구현되어있습니다.



## 3. Commponent Details
### 3-1. StockAnalyzePage

```javascript
... 생략 ...
  return (
    <div className={state.data === "" ? "app" : "app_l"}>
      {state.data === "" ? ( // 서버로 받은 data가 없으면 AnalyzeForm, 있으면 AnalyzeResult 컴포넌트 렌더링
        <AnalyzeForm state={state} updateState={updateState} />
      ) : (
        <AnalyzeResult state={state} />
      )}
    </div>
  )
};

export default StockAnalyzePage
```
StockAnalyzePage 컴포넌트에서는 jsx문법을 사용하여 state.data === "" 이면 AnalyzeForm이 렌더링 되고, AnalyzeForm에서 post요청으로 node 서버로 받아온 데이터로 data의 state가 변경되면 AnalyzeResult가 렌더링 되도록 했습니다.

<details>
<summary>StockAnalyzePage 전체코드 보기</summary>

```javascript
import React, { useState } from "react";
import AnalyzeForm from "./AnalyzeForm";
import AnalyzeResult from "./AnalyzeResult";

function StockAnalyzePage(props) {

  const [state, setState] = useState({ // state 생성
    stock: '',                    // 종목코드
    stockName: '',                // 종목명
    method: '',                   // 분석방법
    start: '',                    // 분석 시작일
    end: '',                      // 분석종료일
    data: '',                     // 크롤링 및 예측 주가 데이터
    ai_answer: "....Loading....", // 해당 종목의 한달간 동향(openAI)
    question: '',                 // 사용자가 작성한 질문
  });
  
  const updateState = (key, value, callback) => { // state 업데이트 함수
    setState(prevState => {                       // state 업데이트 후 동기적으로 callback함수를 처리
      const newState = { ...prevState, [key]: value };
      if (callback) {
        callback(newState);
      }
      return newState;
    });
  };

  return (
    <div className={state.data === "" ? "app" : "app_l"}>
      {state.data === "" ? ( // 서버로 받은 data가 없으면 AnalyzeForm, 있으면 AnalyzeResult 컴포넌트 렌더링
        <AnalyzeForm state={state} updateState={updateState} />
      ) : (
        <AnalyzeResult state={state} />
      )}
    </div>
  )
};

export default StockAnalyzePage
```
</details>





















