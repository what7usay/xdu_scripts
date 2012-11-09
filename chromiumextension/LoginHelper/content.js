try{
	//A dirty hack to call the webpage function;
	body = document.getElementsByTagName("body")[0];
	body.innerHTML += '<input id="whtthefck" type="button" onclick="return window.change();" display-style:none>';

	form = document.getElementsByName("form1")[0];
	uid = document.getElementsByName("uid")[0];
	psw = document.getElementsByName("password")[0];

	//Let's fill the form...
	uid.value = "01093033";
	psw.value = "19900724";


	document.getElementById("whtthefck").onclick();
//	console.log(psw.value);

	//post to the server
	var xhr = new  XMLHttpRequest();
	xhr.open("POST",form.action);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.onload = function() {
		//where do you want to go after login
		dest=1;
		//1.学习主页
		//2.理论课成绩
		//3.公共任选课
		//4.网上选课
		//5.毕设选题
		var url="http://125.76.215.232/xdjwWeb/";
//		var url="../";
		switch(dest){
			case 1:
				url+="main_study.jsp";
				break;
			case 2:
				url+="studentStatus/queryScore/query_person_score.jsp";
				break;
			case 3:
				url+="studentStatus/arbAmin/select_arb_course_top.jsp";
				break;
			case 4:
				url+="Servlet/CourseScoreControl?command=test_st_indexShowTeachPlan";
				break;
			case 5:
				url+="practiceAdmin/graduationDesign/studentChooseTitle/show_choose_title.jsp";
				break;
		}
		window.location.href=url;
	}

	//now we have the encrypted value
	uidval = uid.value;
	pswval = psw.value;
//	alert(psw.value);
	formdata = "uid=" + uidval + "&password=" + pswval + "&command=studentLogin" ;

	xhr.send(formdata);
}catch(e){
	alert(e);
}
