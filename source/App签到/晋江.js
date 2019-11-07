//晋江app签到 app里不能退出 所以好像没啥用
var url = "http://android.jjwxc.net/androidapi/signin";
var data = {
   "sign": "3anMTMwrCKmMEwUN7OgznRb6uAoa2T4ScUx4kAyeTYSJtDAzqnx9EyqHmG6QXALMoRNURuLYlHQ",
    "versionCode":"121"
    };
 
res = http.post(url,data);
data = res.body.json();
log(data.message);
