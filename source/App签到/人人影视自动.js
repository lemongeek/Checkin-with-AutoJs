//输入账号密码

var username = "这里是账号";
var password = "这里是密码";



var token = gettoken();
var uid = gettoken();
var cookie = getcookie();
Signin();//签到
info();//查询信息










//get token & uid
function gettoken(){
url = "http://a.zmzapi.com/index.php?g=api/public&m=v2&accesskey=519f9cab85c8059d17544947k361a827&client=2&a=login&account=" +username +"&password=" + password;
dataj1 =(res = http.get(url)).body.json();
var token1 = dataj1.data;
token = token1.token;uid = token1.uid;
return(token,uid);
}



//get Set-Cookie

function getcookie(){
url2 = "http://h5.rrhuodong.com/index.php?g=api/mission&m=index&a=login&uid="+uid+"&token="+token;
res2 = http.post(url2,{});
var cookie = res2.headers["Set-Cookie"];
return(cookie);
}


//签到

function Signin(){
url4= "http://h5.rrhuodong.com/index.php?g=api/mission&m=clock&a=store&id=2";
res4 = http.post(url4,{},{headers:{"cookie":cookie}});
data4 = res4.body.json();
log(data4.info);
}
