function getDay(year,month){
	var days = [31,28,31,30,31,30,31,31,30,31,30,31];
	if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)days[1]++;
	return days[month-1];
}

function check_search(){
	if(document.getElementById("search_input").value == "")return false;
	return true;
}

function check_list(){
	if(document.getElementById("addList_input").value == "")return false;
	return true;
}

function check_form(){
	var title = document.getElementById("title").value;
	var message = document.getElementById("message").value;
	var year = document.getElementById("year").value;
	var month = document.getElementById("month").value;
	var day = document.getElementById("day").value;
	var nowDate=new Date();
	var nowYear=nowDate.getFullYear()
	var nowMonth=nowDate.getMonth()+1;
	var today=nowDate.getDate();
	if(title == "")return false;
	if(message == "")return false;
	if(year != "" && !isNaN(year) && year > nowYear)return true;
	else if(year != "" && !isNaN(year) && year == nowYear)
	{if(month != "" && !isNaN(month) && month < 1 && month > 12 && month > nowMonth)return true;
			else if(month != "" && !isNaN(month) && month < 1 && month > 12 && month == nowMonth)
					{if(day != "" && !isNaN(day) && day < 1 && day > getDay(year,month) && day >= today)return true;}
						else return false;
	}
	else return false;
	
}
