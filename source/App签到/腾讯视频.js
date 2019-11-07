var cookie = " " //cookie浏览器登录腾讯视频进入签到页面如下浏览器地址栏输入javascript:alert(document.cookie)当然fd或者f12都可.只不过这个电脑手机都可以 即可获得所需cookie
var url = "https://vip.video.qq.com/fcgi-bin/comm_cgi?name=hierarchical_task_system&cmd=2"; //签到地址
res = http.post(url,{},{headers:{"cookie":cookie}});
log(res.body.string());
