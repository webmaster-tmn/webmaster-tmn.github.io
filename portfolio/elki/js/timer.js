function get_timer_267(string_was_267,string_sec_267) {
	var date_new_was_267 = new Date(string_was_267);
	var date_new_sec_267 = string_sec_267;
	var date_267 = new Date();
	var razn_267,left_267,left_n_267,vraz_267,ost_267;
	razn_267 = date_267 - date_new_was_267;
	left_267 = date_new_sec_267 - razn_267;
	if(left_267>0){
		left_n_267 = left_267;
	} else {
		if(Math.abs(left_267)>date_new_sec_267){
			vraz_267 = (Math.abs(left_267))/date_new_sec_267;
			vraz_267 = vraz_267.toString().split(".");
			left_n_267 = Math.abs(left_267) - (vraz_267[0])*date_new_sec_267;
			left_n_267 = date_new_sec_267 - left_n_267;
		} else {
			left_n_267 = date_new_sec_267 - Math.abs(left_267);
		}
	}
	ost_267 = left_n_267;
	var day_267 = parseInt(ost_267/(60*60*1000*24));
	if(day_267 < 10) {
		day_267 = "0" + day_267;
	}
	day_267 = day_267.toString();
	var hour_267 = parseInt(ost_267/(60*60*1000))%24;
	if(hour_267 < 10) {
		hour_267 = "0" + hour_267;
	}
	hour_267 = hour_267.toString();
	var min_267 = parseInt(ost_267/(1000*60))%60;
	if(min_267 < 10) {
		min_267 = "0" + min_267;
	}
	min_267 = min_267.toString();
	var sec_267 = parseInt(ost_267/1000)%60;
	if(sec_267 < 10) {
		sec_267 = "0" + sec_267;
	}
	sec_267 = sec_267.toString();
	timethis_267 = day_267 + " : " + hour_267 + " : " + min_267 + " : " + sec_267;
	$(".timer_267 p.result .result-day").text(day_267);
	$(".timer_267 p.result .result-hour").text(hour_267);
	$(".timer_267 p.result .result-minute").text(min_267);
	$(".timer_267 p.result .result-second").text(sec_267);
	}
	function getfrominputs_267(){
		string_was_267 = "Mon Nov 24 2014 13:43:53 GMT+0300 (RTZ 2 (зима))";
		string_sec_267 = "11996999"; get_timer_267(string_was_267,string_sec_267);
		setInterval(function(){
			get_timer_267(string_was_267,string_sec_267);
		},1000);
	}
	$(document).ready(function(){ 
		getfrominputs_267();
	});