
function getEl(id) {
    if(!id){
        throw "getEl: 缺乏必要的id参数";
    }
    return document.getElementById(id.slice(1));
}
function addEvent(element, type, callBack) {
    // 兼容IE10.0以下
    if(element.attachEvent) {
        element.attachEvent('on' + type, callBack);
    }else {
        element.addEventListener(type, callBack, false);
    }
}
function buttonClick() {
    //this    事件对象
    console.log(this);
    //  this.style.color = "orange";
}

function handleSureBtnClick( oInput) {
    console.log(this);
    var idCard = oInput.value;
    if(/^[0-9]{17}[0-9xX]$/.test(idCard)){
        alert("身份证不合法，请重新输入");
    }else{
        var year = idCard.slice(6, 10),
            month = idCard.slice(10, 12),
            day = idCard.slice(12, 14);
        // console.log(`出生年月:${year}年${month}月${day}日`);
    }
}

function goTop(button) {
    var goBtn  = document.querySelector(button);
    var offset = 0;
    window.onscroll = function () {
        offset = document.body.scrollTop || document.documentElement.scrollTop;
        console.log(offset);
    }
    goBtn.onclick = function () {
        var duration = 1000,//持续时间
            interval = 15,//每一帧持续时间
            frames = duration/interval,//帧数
            speed = Math.ceil(offset / frames);//每一帧位移距离
        var t = setInterval(function () {
            if(offset > 0){
                document.body.scrollTop = document.documentElement.scrollTop = offset - speed;
            }else{
                clearInterval(t);
                document.body.scrollTop = document.documentElement.scrollTop = 0;
            }
        },interval);

    }

}

function networking(options) {
    if(!options.url) {
        throw "networking: 缺乏url参数.";
    }
    // 默认设置
    options.method = options.method || "GET";
    options.parameter = options.parameter || {};
    // 创建请求对象
    var xhr = new XMLHttpRequest();
    // 配置请求对象
    xhr.open(options.method, options.url, true);
    xhr.timeout = 10;
    xhr.responseType = "json";
    // 发送请求
    xhr.send(options.parameter);
    // 添加事件监听
    xhr.onload = function() {
        if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
            options.success &&  options.success(xhr.response);
            // console.log(xhr.responseText);
        }

    }
}
function clearError() {

    var errors = document.getElementsByClassName("error");
    // arr3 = Array.from(errors);
    for( var y = 0, j = errors.length; y < j; y++){
        // console.log(errors.item(y));
        errors.item(y).innerHTML = "";
    }
}

function testError(callback) {
    var errors = document.getElementsByClassName("error"),
        errosStr = "",
        arrErr = [],
        flag = false;

    for( var i = 0, len = errors.length; i < len; i++){
        arrErr.push(errors.item(i).innerText);
    }

    for (var i = 0, len = arrErr.length; i < len ; i++){
        errosStr += arrErr[i];
    }
    // console.log(errosStr);
   if (!errosStr.length){
        flag = true;
   }else{
        flag = false;
   }
   callback&&callback(flag);
}

function register(email, phone, password){
    var  alertMsg = "";

    location.hash = "login";
    // 注册BMOB服务s
    Bmob.initialize("9e82bd8b89098646d87f57a0feb7f64c", "ad98aeb898044faad482f8ebf4c90453");
    // 注册用户
    // 创建用户
    var user = new Bmob.User();
    // 设置用户属性
    user.set("username", phone);
    user.set("password", password);
    user.set("email", email);
    // 执行注册
    user.signUp(null, {
        success: function (user) {
            alert("注册成功");
        },
        error: function(user, error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });
}
//本地存储
function storage(arrSes,sessionName) {
      var  rootArr = [];
    rootArr.push(arrSes);
    // 将根数组转换为JSON 对象
    var jsonObj = JSON.stringify(rootArr);
    // 更新本地数据
    sessionStorage.setItem(sessionName,jsonObj);
}
function sessionGetItem(sessionName) {
        var arr0 = JSON.parse(sessionStorage.getItem(sessionName));
        return arr0[0];
}


function login(myname,mypass) {
    var  alertMsg = "";
    location.hash = "login";
    // 注册BMOB服务s
    Bmob.initialize("9e82bd8b89098646d87f57a0feb7f64c", "ad98aeb898044faad482f8ebf4c90453");
    Bmob.User.logIn(myname, mypass, {
        success: function(user) {
            alert("登录成功");
            storage(myname,"username");
        },
        error: function(user, error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });

}
function loadingHtml(parent , data) {
    var htmlStr =  "";
    for (var i = 0, len = data.length; i < len; i++) {


    }

}

function formatterDateTime() {
    var date=new Date()
    var month=date.getMonth() + 1
    var datetime = date.getFullYear()
        + ""// "年"
        + (month >= 10 ? month : "0"+ month)
        + ""// "月"
        + (date.getDate() < 10 ? "0" + date.getDate() : date
            .getDate())
        + ""
        + (date.getHours() < 10 ? "0" + date.getHours() : date
            .getHours())
        + ""
        + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
            .getMinutes())
        + ""
        + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
            .getSeconds());
    return datetime;
}



