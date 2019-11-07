//输入账号密码

var username = "这里输入账号";
var password = "这里输入密码";


//get token & uid

url = "http://a.zmzapi.com/index.php?g=api/public&m=v2&accesskey=519f9cab85c8059d17544947k361a827&client=2&a=login&account=" +username +"&password=" + password;
res = http.get(url);
dataj1 = res.body.json();
var token1 = dataj1.data;
token = token1.token;uid = token1.uid;


//get SSet-Cookie

url2 = "http://h5.rrhuodong.com/index.php?g=api/mission&m=index&a=login&uid="+uid+"&token="+token;
res2 = http.post(url2,{});
var cookie = res2.headers["Set-Cookie"];


//签到

url4= "http://h5.rrhuodong.com/index.php?g=api/mission&m=clock&a=store&id=2";
res4 = http.post(url4,{},{headers:{"cookie":cookie}});
data4 = res4.body.json();
log(data4.info);



//get info

url3 = "http://h5.rrhuodong.com/index.php?g=api/mission&m=index&a=user_info";
res3 = http.post(url3,{},{ headers:{"cookie":cookie}});
dataj3 = res3.body.json();
data3 = dataj3.data;
log("nickname  :   "+ data3.nickname  +  data3.common_group_name  +"  point :  "+data3.point);
