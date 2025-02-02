---
title: "주식 분석 및 게시판 프로젝트"
tags: javascript
search: include
permalink: stockAnalyzing.html
sidebar: mydoc_sidebar
folder: /portfolio
summary: ES6 이상의 자바스크립트, 업무에서 접하지 못하는 리액트, 그리고 백엔드를 공부하고 이전에 학습했던 파이썬을 복습하고자 이 프로젝트를 제작하게 되었습니다.
---
<br><br>
안녕하십니까. 끊임없이 노력하고 배우는 개발자 박동혁입니다. 저는 통계학과를 복수전공하면서 데이터분석 툴로서 Python, R 등의 코딩을 접하게 되었고 이를 조금더 깊게 배우고자 부트캠프를 통해 학습을 진행했습니다. 이때 웹개발을 위한 코딩을 접하게 되었고, 교육 중 웹개발에 조금 더 흥미를 느껴 인턴을 거쳐 현직장에 재직 중이며, 도전과 경험을 통해 다양한 기술 스택을 쌓아 적재적소에 알맞은 기술을 적용할 수 있는 개발자가 되고자 끊임없이 노력 중입니다. 
<br><br><br><br><br>

## Ubout Me
---
- 이&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;름 : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;박동혁
- 생년월일 : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1996.02.26
- 주&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;소 : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;서울시 구로구 오류동
- 메&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;일 : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;qwer5383@naver.com(개인)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;qwer5383@cordial.co.kr(회사)
- 최종학력 : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;부경대학교(신문방송학과, 통계학과)
- Git&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[https://github.com/Ddongh](https://github.com/Ddongh)
<br><br><br><br><br>

## Career
---
 - 2022.09 ~ 재직중 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;코디얼&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;서비스개발팀 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;사원
 - 2022.05 ~ 2022.06 &nbsp;&nbsp;&nbsp;&nbsp;농심NDS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;기술1팀 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;인턴
<br><br><br><br><br>

## Skills
---
 - HTML5, CSS3, Javascript, jQuery를 현재 업무 중 사용하고있습니다.
 - React, Node.js, MongoDB를 개인적으로 학습 중이며 이를 사용하여 프로젝트를 제작하였습니다.
 - Java, Tibero를 인턴 기간동안 사용했습니다.
 - Python, R 등을 통계학과 복수 전공 중 학습했으며 부트캠프 교육 중 Python을 사용하여 Django프로젝트를 진행하기도 했습니다. 이를 바탕으로 현재 프로젝트에 Python을 사용하였습니다.
<br><br><br><br><br>

## Let's Start Stock Analyzing App
---

### 1. 사용기술 
- React - 프론트엔드
	- Antd
	- Local Storage
	- Axios
	- JSX
	- HightChart
	- useSelector
	- useHistory
	- ReactHtmlParser
- Node.js - 백엔드
	- spawn
	- iconv
- Python
	- RNN 
	- sklearn
	- tensorflow
	- yfinance
	- FinanceDataReader
	- openAI API
- MongoDB

### 2. 전체 컴포넌트 구성

![전체 컴포넌트 구성](\images\Commponent_structure.jpg)

- Stock Analyzing App은 크게 주식 분석 및 질문글 작성, 등록 기능이 있는 StockAnalyzePage와 질문목록 및 조회, 댓글 기능이 있는 LandingPage로 구분되어있습니다.

- StockAnalyzePage는 종목 및 분석방법, 기간 등을 설정하는 AnalyzeForm과 분석 결과를 보여주는 AnalyzeResult로 이루어져 있으며 AnalyzeForm에서 post 요청으로 분석결과를 받아오면 AnalyResult가 렌더링 되는 방식입니다.

- LandingPage는 질문 목록을 표시하는 QuestionList와 목록에서 특정 게시글을 클릭시 렌더링되는 QuestionDetail로 구성되어있으며, QuestionDetail은 데이터 시각화를 담당하는 CandleStickChart와 댓글 기능을 담당하는 Comment로 구성되어있습니다. 이때 Comment의 자식컴포넌트인 ReplyCommet에는 또 다시 ReplyComment가 포함되면서 대댓글 기능이 구현되어있습니다.



### 3. Commponent Details
#### 3-1. StockAnalyzePage

- StockAnalyzePage 컴포넌트에서는 jsx문법을 사용하여 크롤링 및 예측 데이터가 없으면 AnalyzeForm이 렌더링 되고, AnalyzeForm에서 post요청으로 서버로 받아온 데이터로 data의 state가 변경되면 AnalyzeResult가 렌더링 되도록 했습니다.

```jsx
<div className={state.data === "" ? "app" : "app_l"}>
	{state.data === "" ? ( // 서버로 받은 data가 없으면 AnalyzeForm, 있으면 AnalyzeResult 컴포넌트 렌더링
		<AnalyzeForm state={state} updateState={updateState} />
	) : (
		<AnalyzeResult state={state} />
	)}
</div>
```
<details>
<summary>>>> 전체코드 보기/숨기기</summary>

<script src="https://gist.github.com/Ddongh/233b984039e0722cf4493da059ec7033.js"></script>
</details>

#### 3-2. AnalyzeForm

![AnalyzeForm](\images\AnalyzeForm_select.png)

- AnalyzeForm에서는 종목 Select 옵션을 렌더링하기 위한 데이터가 필요한데 이때 서버로 요청받는 비용 및 요청시간을 줄이고자 로컬스토리지에 저장했습니다. 이후 페이지 접근시에는 로컬스토리지를 확인 후 데이터가 존재하면 이를 사용하도록 했습니다. 이때 주식이 상장 및 폐지될 경우가 있을 수 있으므로 만료일을 지정하고 이를 체크하도록 했습니다.

```jsx
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
```

- handleSubmit function에서는 선택한 종목, 분석방법, 기간등을 이용하여 서버로부터 크롤링 및 예측결과를 받아오도록 했고, 선택한 종목에 대한 한달간 동향 또한 서버로부터 받아오도록 했습니다. 이때 한달간 동향은 openAI API를 사용했습니다. 라우터에 대한 부분은 4. Router Details에서 다루도록 하겠습니다.

```jsx
const variable = {  // 분석에 필요한 데이터
	code : stock,   // 종목코드
	start : start,  // 시작일
	end : end,      // 종료일
}

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

let tmp = "최근 한달간 " + stockName + "의 동향을 분석해서 요약해줘. ";
tmp += "줄바꿈 및 문단구분을 위해 적절히 <br> 태그를 넣어줘";

Axios.post('/api/chatgpt', { question:tmp }) // 선택한 종목에 대한 한달간 동향 파악 라우터실행(openAI)
	.then(response => {
		const answer = response.data.answer; 
		updateState("ai_answer", answer); // answer state update
	})
	.catch(error => { // 에러 처리 로직 추가
		console.error('An error occurred:', error);
	});
```
- 종목 선택 SELECT BOX옵션은 jsx문법을 사용하여 렌더링했습니다.
- 이때 종목이 너무 많아(약 2700개) 스크롤으로 탐색하는 시간을 줄이고자 검색기능을 추가했습니다.

```jsx
<Select
	showSearch
	placeholder="Select a stock"
	optionFilterProp="children"
	onChange={onStockChange}
	filterOption={(input, option) => { // SELECT BOX 필터링(검색기능)
		const nameB = (option?.props.label ?? '').toLowerCase().includes(input.toLowerCase()); 
		// option의 label(주식명)에 input 데이터가 포함되는지 체크
		const codeB = (option?.props.value ?? '').toLowerCase().includes(input.toLowerCase()); 
		// option의 value(주식코드)에 input 데이터가 포함되는지 체크
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
```

<details>
<summary>>>> 전체코드 보기/숨기기</summary>

<script src="https://gist.github.com/Ddongh/a362417f903375ee0f50a3a55d221eeb.js"></script>
</details>

#### 3-3. AnalyzeResult

![AnalyzeResult](\images\AnalyzeResult.png)

- AnalyzeResult에서는 CandleStick차트를 이용하여 크롤링 및 예측 데이터를 시각화 했습니다.

<details>
<summary>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>>> CandleStick 전체 코드 보기/숨기기</summary>

<script src="https://gist.github.com/Ddongh/408fc615687a0f6d0944b1460e3d9c6b.js"></script>
</details>

- 질문하기 버튼을 클릭하면 테이블의 제목작성 input과 text editor가 보여지도록 했습니다.

```jsx
const writeQuestion = () => { //질문하기 버튼 이벤트
	setTitleTrState("");                // 제목작성 tr 보이기
	setEditorDisplayState("block");     // 텍스트 에디터 보이기
	setSaveButtonState("block");        // 저장하기 버튼 보이기
	setChartDisplayState("none");       // 차트 숨기기    
	setChartButtonState("차트 보기");    // 차트 display 버튼 text 변경
	setQuestionButtonDisplay("none");   // 질문하기 버튼 숨기기
}
```

- 제목과 본문을 작성 후 저장하기 버튼을 클릭하면 조회화면에 필요한 데이터를 MongoDB에 저장하도록 했습니다.

```jsx
const variable = {
	writer   : user.userData._id,       // 작성자
	title    : title,                   // 제목
	stock    : stock,                   // 주식코드
	stockName: stockName,               // 주식이름
	method   : method,                  // 분석방법
	start    : start,                   // 분석 시작일
	end      : end,                     // 분석 종료일
	data     : data,                    // 크롤링 및 예측 데이터
	ai_answer   : ai_answer,            // 한달간 동향(openai 답변)
	question : text,                    // 작성한 질문
}

Axios.post('/api/stock/stockAnalyze/question', variable)
	.then(response => {
		if(response.data.success) {
			message.success('성공적으로 게시했습니다.')
			setTimeout(() => { // 3초뒤
				history.push('/'); // 메인화면으로 이동
			}, 3000)
		} else {
			alert('게시에 실패했습니다.')
		}
	})
```

<details>
<summary>>>> 전체코드 보기/숨기기</summary>

<script src="https://gist.github.com/Ddongh/9df42efc14529017da6087c338935fd0.js"></script>
</details>

#### 3-4. LandingPage

- LandingPage는 선택(클릭)한 게시글이 존재하지 않으면 목록을 렌더링하고, 존재하면 게시글 조회화면은 렌더링하도록 했습니다.

```jsx
<div className={selectedQuestion.length == 0 ? "" : "app_l"}>
	{selectedQuestion.length == 0 ? ( 
		<QuestionList setSelectedQuestion={setSelectedQuestion} />  // 선택한 질문이 없으면 목록표시
	) : (
		<QuestionDetail selectedQuestion={selectedQuestion} />      // 선택한 질문이 있으면 목록표시
	)}    
</div>   
```

<details>
<summary>>>> 전체코드 보기/숨기기</summary>

<script src="https://gist.github.com/Ddongh/b9302f88dd837d07391ea07c68f2a6d3.js"></script>
</details>

#### 3-5. QuestionList

![QuestionList](\images\QuestionList.png)

- QuestionList는 페이지 인덱스 클릭시 currentPage를 변경하고 이때 서버로부터 현재 페이지에 해당하는 문서정보를 받아오도록 했습니다.

```jsx
useEffect(() => { // 페이지 변경시 해당하는 문서 가져오기
	const variable = { 
		page: currentPage,             // 현재 페이지 번호
		perPage: questionsPerPage,     // 페이지당 표시될 질문 개수
	};

	Axios.get('/api/landing', { params: variable }) // 해당문서 가져오기
		.then(response => {
			// let questions = response.data.questions;
			setQuestions(response.data.questions); // 질문목록 state update
		})
		.catch(error => {
			console.error('Error : ', error);
		});
}, [currentPage]);
```

- 이후, 받은 데이터를 각 컬럼에 맞게 변한 후 antd의 Table과 Pagination을 사용하여 목록 및 페이징 처리를 했습니다.

{% raw %}
```jsx
const columns = [
	{
		title: '제목',
		dataIndex: 'title',
		key: 'title',
	},
	{
		title: '주식명',
		dataIndex: 'stockName',
		key: 'stockName',
	},
	{
		title: '분석방법',
		dataIndex: 'method',
		key: 'method',
	},
	{
		title: '작성자',
		dataIndex: 'writer',
		key: 'writer',
		render: (writer) => { // 작성자 정보 중 이름 렌더링
			return (
				writer.name
			);
		}
	},
	{
		title: '작성일',
		dataIndex: 'createdAt',
		key: 'createdAt',
		render: (createdAt) => { // 날짜 데이터 변환(년월일)
			if (!createdAt) return null; // createdAt 값이 없을 경우 null 반환
				const ymd = createdAt.split("T")[0];
				const hms = createdAt.split("T")[1].split(".")[0];
				const timeData = ymd + " " + hms;
				return (
					timeData
			);
		}
	},
	];

return (
	<div className="app">
		<h2>질문 목록</h2>
		<Table 
		style={{width:"50%"}} 
		dataSource={questions} 
		columns={columns} 
		pagination={false}
		rowClassName={() => 'custom-row-style'}
		onRow={(record, rowIndex) => {
			return {
				onClick: () => onRowSelect(record, rowIndex), // 각 행을 클릭했을 때 이벤트 처리
			};
		}}
		/>
		<div style={{marginTop:"20px"}}>
			<Pagination defaultCurrent={1} current={currentPage} total={totalCount} onChange={onPageChange} />
		</div>
		
	</div>
);
```
{% endraw %}

<details>
<summary>>>> 전체코드 보기/숨기기</summary>

<script src="https://gist.github.com/Ddongh/3ceb0b33ffff3417a409f42860e3dce1.js"></script>
</details>

#### 3-4. QuestionDetail

![QuestionDetail](\images\QuestionDetail.png)

- QuestionDetail은 AnalyzeResult와 비슷한 구조이며, QuestionList에서 선택한 문서 정보를 props로 받아서 렌더링 했습니다.

<details>
<summary>>>> 전체코드 보기/숨기기</summary>

<script src="https://gist.github.com/Ddongh/f8844451db3915e85de35f494b940aac.js"></script>
</details>

#### 3-5. Comment

![Comment](\images\Comment.png)

- Comment는 SingleComment와 ReplayComment를 포함하고 있으며, ReplyComment에 SingleComment와 ReplyComment를 포함시킴으로써 대댓글 기능을 구현했습니다. 대댓글 구현을 위한 컴포넌트 구조는 아래와 같습니다.

![Comment](\images\Comment_structure.jpg)

- 상위 댓글에 대한 대댓글을 렌더링하기 위해 부모컴포넌트의 댓글 id와 댓글들의 responseTo(대댓글의 대상이 되는 댓글 id)를 이용하여 필터링했습니다.

{% raw %}
```jsx
return (commentList.map((comment, index) => {
            return(
                <React.Fragment>
                    {   
                        comment.responseTo === parentCommentId && 
						// comment의 상위 댓글 id와 부모컴포넌트의 댓글 id가 일치하면
                        <div style={{ width:'80%', marginLeft: '40px'}} >
                            <SingleComment refreshComment={refreshComment} comment={comment} selectedQuestion={selectedQuestion} />
                            <ReplyComment refreshComment={refreshComment} commentList={commentList} selectedQuestion={selectedQuestion} parentCommentId={comment._id} />
                        </div>
                    }
                </React.Fragment>    
            )
        }))
```
{% endraw %}

<details>
<summary>>>> Comment 전체코드 보기/숨기기</summary>

<script src="https://gist.github.com/Ddongh/3d4c44dff201f41455ae5b789430d748.js"></script>
</details>

<details>
<summary>>>> SingleComment 전체코드 보기/숨기기</summary>

<script src="https://gist.github.com/Ddongh/bb46eec2ee3d98ccc3ab3c17f9524661.js"></script>
</details>

<details>
<summary>>>> ReplyComment 전체코드 보기/숨기기</summary>

<script src="https://gist.github.com/Ddongh/fe13342bc0ced7b56fccb5587d92f2b7.js"></script>
</details>

### 4. Router Details
#### 4-1. 종목 코드/이름 크롤링

- AnalyzeForm에서 select박스 렌더링에 필요한 데이터를 크롤링 및 클라이언트에 전달하는 라우터입니다.
- 파이썬에서 종목 정보를 크롤링하는 라이브러리를 사용하기 위해 파이썬 파일을 실행 후 데이터를 받아서 가공 후 클라이언트해 전달했습니다.

```javascript
router.get('/stockCodeName', (req, res) => { // 종목 코드/이름 리스트 크롤링 라우터
  
	console.log("##### 주식 코드/이름 크롤링 라우터 START #####");
	const platform = os.platform();

	console.log("##### 주식 코드/이름 크롤링 파이썬 파일 실행 START #####");
	const pythonProcess = spawn('python3', ['server/pythons/stockCodeName.py']); // 크롤링 파이썬 파일 실행

	let output = '';
	
	pythonProcess.stdout.on('data', (data) => { // 파이썬 파일 실행결과 변환
		
		if (platform === 'win32') {         // 윈도우 환경이면
			output += iconv.decode(data, 'euc-kr'); // 윈도우 환경에서 한글깨짐(디코딩)
			console.log("platform >>>> ", platform);
		} else if (platform === 'darwin') { // 맥 환경이면
			output += data;
			console.log("platform >>>> ", platform);
		} else {                            // 기타환경이면
			console.log('현재 환경은 기타 운영체제입니다.');
		}
  });

  pythonProcess.on('close', (code) => { // 파이썬 파일 종료 시 
    	res.json(JSON.parse(output));       // 크롤링 데이터 클라이언트에 전달
  });
});
```

<details>
<summary>>>>  stockCodeName.py 보기/숨기기</summary>

<script src="https://gist.github.com/Ddongh/56fd9c927a88235b1caf9df040deb541.js"></script>
</details>

#### 4-2. RNN(순환신경망) 분석 및 예측 라우터

- 클라이언트로부터 분석에 필요한 데이터를 받아온 후 파이썬 파일에 parameter로 전달했습니다. 이후 파이썬 파일로부터 크롤링 및 예측 데이터를 받은 후 가공하여 클라이언트에 전달했습니다.

```javascript
router.post('/stockAnalyze/rnn', (req, res) => { // 순환신경망 분석 및 예측 라우터
	console.log("##### 순환신경망 라우터 START #####");

	const code = req.body.code;     // 종목코드
	const method = req.body.method; // 분석방법
	const start = req.body.start;   // 분석 시작일
	const end = req.body.end;       // 분석 종료일

	console.log("##### 순환신경망 분석 파이썬 파일 실행 START #####");
	const pythonProcess = spawn('python3', ['server/pythons/rnn.py', code, method, start, end]); // 파이썬파일에 parameter 전달 및 실행

	let output = '';
	let tmp = "";

	pythonProcess.stdout.on('data', (data) => { // 파이썬 파일 실행결과 변환
		output += data.toString();
	});

	pythonProcess.on('close', (code) => { // 파이썬 파일 실행 종료 시 예외 처리 및 변환 후 클라이언트에 전달
		if(output.indexOf("Failed download") > -1) { // 에러처리(해당기간동안 주가 데이터가 존재하지 않을때)
			res.status(500).json({ error: output });
		return
		}
		tmp = output.split("^")[1]; // 필요 데이터 추출(파이썬파일에서 미리 구분자로 구분해둠)
		tmp = JSON.parse(tmp)       // json으로 변환
		res.json(tmp); // JSON 데이터를 클라이언트에 전달
	});
});
```

<details>
<summary>>>>  rnn.py 보기/숨기기</summary>

<script src="https://gist.github.com/Ddongh/31c8a4745c3b572f34cf3252cec6bb75.js"></script>
</details>

#### 4-3. 한달간 동향 생성 라우터

- openAI API를 사용하여 분석을 실행한 종목의 한달간 동향을 생성하기 위한 라우터 입니다. 클라이언트로 받아온 종목 이름을 사용하여 질문을 생성하고 이에 대한 답변을 생성 후 클라이언트에 전달했습니다.

```javascript
const express = require('express');
const router = express.Router();
const { spawn } = require('child_process');
const config = require("../config/key");

const OPENAI_API_KEY = config.OPENAI_API_KEY; // OpenAi API 키

router.use(express.json());

router.post('/', (req, res) => {
	console.log("Chat 라우터 시작");
	console.log("#### req.body #### ");
	console.log(req.body);

	const question = req.body.question; // 클라이언트에서 받은 질문
	console.log("question >>> " + question)
	console.log("ChatGPT 파이썬 파일 실행 시작");
	const pythonProcess = spawn('python3', ['server/pythons/chatgpt.py', question, OPENAI_API_KEY]);

	let output = '';

	pythonProcess.stdout.on('data', (data) => {
		output += data.toString();
	});

	pythonProcess.on('close', (code) => {
		console.log("ChatGPT 파이썬 파일 실행 종료");
		console.log("Exit code: " + code);
		console.log("####################################");
		console.log(output);
		console.log("####################################");

		let answer;
		try { // JSON 형식으로 파싱하여 답변 가져오기
			answer = JSON.parse(output).answer;
		} catch (error) { // 에러처리
			answer = 'OpenAI로부터 답변 받기에 실패했습니다.';
		}

		res.send({ answer }); // 답변 또는 에러을 클라이언트에 전달
	});
});

module.exports = router;
```

<details>
<summary>>>>  chatgpt.py 보기/숨기기</summary>

<script src="https://gist.github.com/Ddongh/a920ee5eba49dcb8c17bac8948b2b2ad.js"></script>
</details>

#### 4-3. 질문 저장 라우터

- 클라이언트로부터 받아온 주식 정보 및 사용자가 작성한 제목 및 질문을 저장하는 라우터입니다.

```javascript
router.post('/stockAnalyze/question', (req, res) => { // 질문 저장 라우터
	console.log("##### 질문 등록 라우터 START ##### ");
	const stock = new Stock(req.body); // 클라이언트로부터 받아온 데이터를 Stock Model에 담기

	stock.save((err, doc) => { // MongoDB에 저장
		if(err) { // 에러처리
		console.log(err);
		return res.json({success : false, err});
		}
		return res.status(200).json({success : true}) // 성공시 클라이언트에 200코드와 success true 전달
	})
})
```

#### 4-4. 전체 질문글 개수 라우터

- 질문 목록 페이징처리에 필요한 전체 질문글 개수를 클라이언트에 전달하는 라우터입니다.

```javascript
router.get('/total', (req, res) => {
    Stock.countDocuments({}, (err, totalCount) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({ totalCount });
    });
});
```

#### 4.5 질문글 데이터 조회 라우터

- 목록 테이블 및 조회화면에 사용될 질문글 데이터를 조회, 클라이언트에 전달하는 라우터 입니다.
- pageNumber와 perPage(페이지당 출력될 문서 개수)를 사용하여 특정 페이지에 출력될 문서만 클라이언트에 전달했습니다.
- 목록을 최신순으로 sorting하기위해 작성일을 기준으로 내림차순 정렬했습니다.

```javascript
router.get('/', (req, res) => {
    const page  = parseInt(req.query.page); // pageNumber 
    const perPage = parseInt(req.query.perPage); // 페이지당 출력된 문서 개수
    console.log("Landing Page Router Start!!!!!");
    console.log(req.query.page); // 클라이언트에서 보낸 page 값 출력
    console.log(req.query.perPage); // 클라이언트에서 보낸 perPage 값 출력

    // 페이지네이션 처리를 위해 skip 값과 limit 값 계산
    const skip = (page - 1) * perPage;
    const limit = perPage;

    Stock.find()
        .sort({ createdAt: -1 }) // 작성일 기준으로 내림차순 정렬
        .skip(skip)
        .limit(limit)
        .populate('writer') // Stock 문서의 writer 필드에 해당하는 User 문서 연결
        .exec((err, questions) => {
            if(err) return res.status(400).send(err);
            res.status(200).json({ success: true, questions});
        })
});
```
## The End 

- 현재 프로젝트의 version1이 완성된 상태이며 전체 코드는 [version1.0](https://github.com/Ddongh/portfolio/tree/V1.0)에서 확인하실 수 있습니다. 프로젝트를 진행하면서 리액트로 업무를 하는 타 부서의 선배에게 여러가지 질문을 했는데 함께 version2를 만들어보자는 제안으로 추가 작업을 하고있씁니다. 추가 및 수정사항은 [version2.0](hhttps://github.com/Ddongh/portfolio/tree/version2)에서 확인하실 수 있습니다. 부족한 작업물을 끝까지 봐주셔서 감사합니다.






