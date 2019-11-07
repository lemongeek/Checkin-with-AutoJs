log("jiji开始签到");

var url = "https://ji-c.pw/user/checkin";
var cookie = cookie1;
var headers = {
"User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.87 Safari/537.36";
"cookie":cookie
};

res = http.post(url,{},headers);
datajson = res.body.json();
log(datajson.msg + datajson.traffic);
