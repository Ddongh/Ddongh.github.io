---
title: "주식 분석 및 게시판 포트폴리오"
tags: javascript
search: include
permalink: stockAnalyzing.html
sidebar: mydoc_sidebar
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
- StockAnalyzePage 컴포넌트에서는 jsx문법을 사용하여 state.data === "" 이면 AnalyzeForm이 렌더링 되고, AnalyzeForm에서 post요청으로 node 서버로 받아온 데이터로 data의 state가 변경되면 AnalyzeResult가 렌더링 되도록 했습니다.

<details>
<summary>>>> 전체코드 보기/숨기기</summary>

<script src="https://gist.github.com/Ddongh/233b984039e0722cf4493da059ec7033.js"></script>
</details>

### 3-2. AnalyzeForm

![AnalyzeForm](\images\AnalyzeForm_select.png)

```javascript
function AnalyzeForm(props) {
	... 생략 ...
	useEffect(() => {
		const localCodeNameList = JSON.parse(localStorage.getItem("codeNameList")); 
		// 로컬 스토리지에 저장된 주식 코드/이름 리스트 가져오기
		
		if(localCodeNameList == null || localCodeNameList.expire < Date.now()) { 
		// 로컬스토리지에 저장여부 확인 및 만료일자 체크
		const s = performance.now(); 
		Axios.get('/api/stock/stockCodeName') 
		.then(response => {
			setCodeName(response.data) // state update
			localStorage.removeItem("codeNameList") // 로컬스토리지 데이터 삭제
			response.data["expire"] = Date.now() + 60 * 60 * 24 * 1000; 
			// 만료일자 지정(초*분*시*1000)
			localStorage.setItem("codeNameList", JSON.stringify(response.data)); 
			// 로컬스토리지에 저장
			const e = performance.now();
			console.log("서버요청 소요 시간(ms) : ", e-s);
		})
		.catch(error => {
			console.error(error);
		});
		} else { // 로컬스토리지에 데이터가 있고 만료일이 지나지 않으면 그대로 사용
		const s = performance.now();
		setCodeName(localCodeNameList); // state update
		const e = performance.now()
		console.log("세션 스토리지 사용 소요시간(ms) : ", e-s);
		}
	}, [])
	
	... 생략 ...

	const handleSubmit = () => { // 분석하기 버튼 이벤트

		... 생략 ...

		Axios.post('/api/stock/stockAnalyze/'+method, variable) // method에 해당하는 라우터 실행
		.then(response => {
			console.log(response.data);
			updateState("data", response.data.data); // 크롤링 및 예측 데이터로 data state update
		})
		.catch(err => { // 에러처리
			console.log(err.response.data);
			message.error({
			content: stockName + "의 " + start + " ~ " + end + "기간에 대한 주가 수집에 실패했습니다.",
			top: 2000, 
			duration: 5,
			});
		});
		
		let tmp = "최근 한달간 " + stockName + "의 동향을 분석해서 요약해줘.";
		
		Axios.post('/api/chatgpt', { question:tmp }) 
		// 선택한 종목에 대한 한달간 동향 파악 라우터실행(openAI)
		.then(response => {
		const answer = response.data.answer; 
		updateState("ai_answer", answer); // answer state update
		})
		.catch(error => { // 에러 처리 로직 추가
		console.error('An error occurred:', error);
		});
	}
	
	... 생략 ... 

	return (
		<>
		<h2>종목 및 옵션 선택</h2>
		<Form style={{ minWidth: '375px', textAlign: 'center' }} {...formItemLayout} onSubmit={handleSubmit} >
			<Form.Item required label="종목">
			<Select
				showSearch
				placeholder="Select a stock"
				optionFilterProp="children"
				onChange={onStockChange}
				filterOption={(input, option) => { // SELECT BOX 필터링(검색기능)
				const nameB = (option?.props.label ?? '').toLowerCase().includes(input.toLowerCase()); // option의 label(주식명)에 input 데이터가 포함되는지 체크
				const codeB = (option?.props.value ?? '').toLowerCase().includes(input.toLowerCase()); // option의 value(주식코드)에 input 데이터가 포함되는지 체크
				if(nameB) return nameB;
				return codeB;
				}}
			>
				{Object.keys(codeName).map((key, index) => ( // 주식 code,name 데이터로 select option 생성
				<Option key={index} value={codeName[key].code} label={codeName[key].name}>
					{codeName[key].name} ({codeName[key].code})
				</Option>
				))}
			</Select>
			</Form.Item>

			... 생략 ...
		</Form>
		</>
	);
}

export default AnalyzeForm;
```

- AnalyzeForm에서는 종목 Select 옵션을 렌더링하기 위한 데이터가 필요한데 이때 서버로 요청받는 비용 및 요청시간을 줄이고자 로컬스토리지에 저장했습니다. 이후 페이지 접근시에는 로컬스토리지를 확인 후 데이터가 존재하면 이를 사용하도록 했습니다. 이때 주식이 상장 및 폐지될 경우가 있을 수 있으므로 만료일을 지정하고 이를 체크하도록 했습니다.

- handleSubmit function에서는 선택한 종목, 분석방법, 기간등을 이용하여 서버로부터 크롤링 및 예측결과를 받아오도록 했고, 선택한 종목에 대한 한달간 동향 또한 서버로부터 받아오도록 했습니다. 이때 한달간 동향은 openAI API를 사용했습니다. 라우터에 대한 부분은 4. Router Details에서 다루도록 하겠습니다.

- 종목 선택 SELECT BOX에서는 종목이 너무 많아 스크롤으로 탐색하는 시간을 줄이고자 검색기능을 추가했습니다.

<details>
<summary>>>> 전체코드 보기/숨기기</summary>

<script src="https://gist.github.com/Ddongh/a362417f903375ee0f50a3a55d221eeb.js"></script>
</details>


















