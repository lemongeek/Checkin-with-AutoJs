var username = "账号";
var password = "密码";
var cookie =登录();
签到();
      
      
      
    
      
//登录       
function 登录(){
var username = "lu66666";
var password = "mmling123";
var url="https://www.cunhua.pro/member.php?mod=logging&action=login&loginsubmit=yes&handlekey=login&loginhash=LL3xR&inajax=1";
res = http.post(url,{
     // "formhash":"a2bd39b0",
      "referer":"https%3A%2F%2Fwww.cunhua.pro",
      "loginfield":"username",
      "username":username,
      "password":password,
      "questionid":"0",
      "answer":""
    });
setck =res.headers["set-cookie"];
var patt =/[a-zA-Z\d=_@%.]+[^a-z\dA-Z]/g;
var cookie ="";var i=0;
while(i<13)
{
ck =setck[i].match(patt);
cookie=ck[0]+cookie;i++;
   } 
return(cookie);
}


function refresh(){
    var url3 ="https://www.cunhua.pro";
    res3 = http.post(url3,{},{headers:{"cookie":cookie}});
    re3=res3.body.string();
    var formhasha = re3.match(/formhash=(.*?)[A-Za-z\d]{8}/g)[0];
    formhash =formhasha.split("=")[1];
    log(re3.match(/showcredit(.+)/g));
    return(formhash);
    }
    
function 签到(){
    
    var formhash = refresh();
    var url ="https://www.cunhua.pro/plugin.php?id=dc_signin:sign&inajax=1";
    res = http.post(url,{
    "formhash":formhash,
     "signsubmit":"yes",
     "handlekey":"signin",
     "emotid":"1",
      "referer":"https%3A%2F%2Fwww.cunhua.pro",
      "content":"%E8%AE%B0%E4%B8%8A%E4%B8%80%E7%AC%94%EF%BC%8Chold%E4%BD%8F%E6%88%91%E7%9A%84%E5%BF%AB%E4%B9%90%EF%BC%81"
    },{headers:{"cookie":cookie}});
    log(res.body.string());
    }
