
//输入账号密码
var username = "";
var username = "";
//get token & uid

url = "http://a.zmzapi.com/index.php?g=api/public&m=v2&accesskey=519f9cab85c8059d17544947k361a827&client=2&a=login&account=" +username +"&password=" + password;
res = http.get(url);
dataj1 = res.body.json();
var token1 = dataj.data;
token = token1.token;uid = token1.uid;



//get Set-Cookie

url2 = "http://h5.rrhuodong.com/index.php?g=api/mission&m=index&a=login&uid="+uid+"&token="+token;
res2 = http.post(url2,{});
var cookie = res.headers["Set-Cookie"];


//get info

url3 = "http://h5.rrhuodong.com/index.php?g=api/mission&m=index&a=user_info";
res3 = http.post(url3,{},{ headers:{"cookie":cookie}});
dataj3 = res.body.json();
data3 = dataj.data;
log("nickname  :   "+ data3.nickname +"  point :  "+data3.point);



//签到


url4= "http://h5.rrhuodong.com/index.php?g=api/mission&m=clock&a=store&id=2";
res4 = http.post(url4,{},{headers:{"cookie":cookie}});
data4 = res4.body.json();
log(data4.info);


