const crawling = n => {
    let strHTML = "";
    strHTML += "--- \n";
    strHTML += "title: \"" + document.querySelector(".algorithm-nav-link").innerHTML.replaceAll("\n", "").trim() + "_programmers_Lv1\" \n";
    strHTML += "tags: CodingTest\n";
    strHTML += "search: include\n";
    strHTML += "permalink: programmers_Lv01_0" + n + ".html\n";
    strHTML += "sidebar: mydoc_sidebar\n";
    strHTML += "folder: /codingTest/python/lv1\n";
    strHTML += "---\n"

    strHTML += "\n\n";
    strHTML += "#### 문제 설명 <br>\n";
    strHTML += "\n";
    strHTML += document.querySelectorAll("p")[0].innerText;
    strHTML += "\n";

    stHTML += "#### 제한사항 <br>\n";
    strHTML += "\n";
    copy(strHTML);
    return strHTML
}




