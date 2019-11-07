var cookie = " " //cookie浏览器登录腾讯视频 进入签到页面 如下 浏览器地址栏输入javascript:alert(document.cookie) 即可获得所需cookie
var url = "https://vip.video.qq.com/fcgi-bin/comm_cgi?name=hierarchical_task_system&cmd=2"; //签到地址
res = http.post(url,{},{headers:{"cookie":cookie}});
log(res.body.string());
