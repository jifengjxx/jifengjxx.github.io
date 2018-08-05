(function() {

    // 获取DOM元素
    var username   = getEl("#username"),
        password   = getEl("#password"),
        checkbox   = getEl("#checkbox"),
        goRegister = getEl("#go-register"),
        goLogin    = getEl("#go-login"),
        btn        = getEl("#btn"),
        title      = getEl("#title"),
        remenber   = getEl("#remenber");

    var isLogin= true;

    // 判断用户上一次是否保存了信息
    // 如果保存了，那么我们就直接把用户保存的
    // 账号密码显示在输入框中
    if(localStorage.localUser) {
        user = JSON.parse(localStorage.localUser);
        username.value = user.username;
        password.value = user.password;
        checkbox.checked = true;
    }

    goRegister.onclick = function() {
        // 隐藏“前往注册”
        // this 指向的是当前交互的元素
        this.style.display = "none";
        remenber.style.display = "none";
        // 显示“前往登陆”
        goLogin.style.display = "inline-block";
        // 修改标题
        title.textContent = "Resgiter";
        // 修改按钮标题
        btn.textContent = "注册";
        // 修改文档标题
        document.title = "PROJ - 注册";
        isLogin = false;
    }
    goLogin.onclick = function() {
        this.style.display = "none";
        remenber.style.display = "inline-block";
        goRegister.style.display = "inline-block";
        title.textContent = "LOGIN";
        btn.textContent = "登陆";
        document.title = "PROJ - 登陆";
        isLogin = true;
    }
    btn.onclick = function (){
        var user = {
            username: username.value,
            password: password.value
        };
        // 登陆/注册
        if(isLogin) {
            login(user, function() {
                alert("登陆成功！");
                // 判断用户是否需要保存账号密码
                if(checkbox.checked) {
                    saveUserInfo(user);
                }else {
                    removeUserInfo();
                }
                // 临时记录登陆用户
                sessionStorage.loginUser = JSON.stringify(user);
                location.href = "./index.html";
            });
        }else {
            register(user, function() {
                alert("注册成功！");
                // 临时记录登陆用户
                sessionStorage.loginUser = JSON.stringify(user);
                location.href = "./index.html";
            });
        }
    }






})();