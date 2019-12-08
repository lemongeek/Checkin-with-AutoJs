var User = "这里是你的账号";
var PassWord = "这里是你的密码";


      
签到();      
      
      
      
      
      
      
    
      
//登录       
function 登录(){
var i=2;
var m=1;
var ckm ="";
var patt =/[a-zA-Z\d=_@%.]+[^a-z\dA-Z]/g;
var data ={
      "email":User,
      "passwd":PassWord
      }
res = http.post('https://ji-bp.pw/signin',data);
//获取setcookie
setck=res.headers["set-cookie"];

while(i<7) {
   ck =setck[i].match(patt);
   ckm=ck[0]+ckm;
   i++;
   m++;
    }
return(ckm);
}
    
    
//签到
function 签到(){
log("开始签到");
ckm = 登录();
var url = "https://ji-bp.pw/user/checkin";
res = http.post(url,{},{headers:{"cookie":ckm}});
datajson = res.body.json();
log(datajson.msg + datajson.traffic);

}


