(function () {
    var oHeader    = document.getElementById("oheader"),
         offset     = 0,
        lastOffset =1000;

    //自动下拉标，监听
    window.onscroll = function(e) {
        // 更新偏移量
        offset = document.documentElement.scrollTop || document.body.scrollTop;
        // 往上拉/显示菜单
        if( offset > lastOffset) {
            oHeader.style.top = "0px";
        }else {
            oHeader.style.top = "-60px";
        }
    }

    //微信手机二维码 hover效果
    $("#img_1").hover(function(){
        $("#codephone").removeClass("hidden");
    },function(){
        $("#codephone").addClass("hidden");
    });
    $("#img_2").hover(function(){
        $("#codewechat").removeClass("hidden");
    },function(){
        $("#codewechat").addClass("hidden");
    });

//进入登录、注册页面，事件绑定
    $("#loginNav_page").on("click", function (e) {

        $("#login_page").removeClass("hidden");
        clearError();
    });

    $("#registerNav_page").on("click",function(e){
        $("#register_page").removeClass("hidden");
        clearError();
    });



    //登录、注册页面相互跳转页面，事件绑定
    $("#jump_login").on("click", function (e) {

        $("#login_page").addClass("hidden");
        $("#register_page").removeClass("hidden");
        // clearError();
    });
    $("#jump_register").on("click", function (e) {

        $("#login_page").removeClass("hidden");
        $("#register_page").addClass("hidden");
        // clearError();
    });

    //退出登录注册页面
    $("#exit_login").click(function(){
        $("#login_page").addClass("hidden");
        clearError();
    });
    $("#exit_register").click(function(){
        $("#register_page").addClass("hidden");
        clearError();
    });
   //登录页面 手机登录与邮箱登录页面切换
    $("#email_login").on("click", function (e) {
        $("#login_email").removeClass("hidden");
        $("#login_phone").addClass("hidden");
        clearError();
    });

    $("#phone_login").on("click", function (e) {

        $("#login_phone").removeClass("hidden");
        $("#login_email").addClass("hidden");
        clearError();
    });

//点击注册事件
    $("#login_register").on("click",function(e){
        clearError();
        var emailReg = $("#register_email").val(),
            phoneReg = $("#register_phone").val(),
            passwordReg = $("#register_password").val(),
            register_pass = false;

        testForm("email", emailReg, $("#register_email"));
        testForm("tel", phoneReg, $("#register_phone"));
        testForm("password", passwordReg, $("#register_password"));

        testError(function (flag) {
            register_pass = flag;
        });
        if(register_pass){
            register(emailReg, phoneReg, passwordReg);
            $("#register_email").val("");
            $("#register_phone").val("");
            $("#register_password").val("");
            $("#register_page").addClass("hidden");
        }

    });

//点击登录事件，通过手机号码登录
    $("#login_btn_P").click(function(){
        clearError();
        var phoneP_log = $("#phoneP").val(),
            passwordP_log = $("#passwordP").val(),
            login_pass = false;

        testForm("tel", phoneP_log, $("#phoneP"));
        testForm("password", passwordP_log, $("#passwordP"));
        testError(function (flag) {
            login_pass = flag;
        });
        if(login_pass){
            login(phoneP_log, passwordP_log);
              $("#phoneP").val("");
              $("#passwordP").val("");
            $("#login_page").addClass("hidden");
        }

    });

    //登录点击事件，通过邮件登录
    $("#login_btn_E").click(function(){
        clearError();
        var emailE_log = $("#emailE").val(),
            passwordE_log = $("#passwordE").val(),
            login_pass = false;
        // console.log(emailE_log,passwordE_log,phoneP_log,passwordP_log);
        testForm("email", emailE_log, $("#emailE"));
        testForm("password", passwordE_log, $("#passwordE"));
        testError(function (flag) {
            login_pass = flag;
        });
        if(login_pass){
            login(emailE_log, passwordE_log);
             $("#emailE").val("");
             $("#passwordE").val("");
            $("#login_page").addClass("hidden");
        }
    });

      //为指定元素绑定日历插件
      var alender  =  laydate.render({
            elem: "#banner_dateIn" //指定元素
        });
       var blender = laydate.render({
            elem: "#banner_dateOut" //指定元素
        });


//订购房间数，下拉列表显示
    $("#icon_box_chooseDiv").click(function () {
        $("#banner_person_choose").removeClass("hidden");
    });



    $("#adult_add").click(function () {
        var adult_num = document.getElementById("adult_num"),
           adult_num1 = Number(adult_num.innerHTML);
        bannerAdd(adult_num1,function (num) {
            $("#adult_num").html(num);
        });
    });

    $("#adult_reduce").click(function () {
        var adult_num = document.getElementById("adult_num"),
           adult_num1 = Number(adult_num.innerHTML);
        bannerReduce(adult_num1,function (num) {
            $("#adult_num").html(num);
        });
    });


    $("#child_add").click(function () {
        var child_num = document.getElementById("child_num"),
           child_num1 = Number(child_num.innerHTML);
        bannerAdd(child_num1,function (num) {
            $("#child_num").html(num);
        });
    });

    $("#child_reduce").click(function () {
        var child_num = document.getElementById("child_num"),
         child_num1 = Number(child_num.innerHTML);
        bannerReduce(child_num1,function (num) {
            $("#child_num").html(num);
        });
    });


    $("#room_add").click(function () {
        var room_num = document.getElementById("room_num"),
           room_num1 = Number(room_num.innerHTML);
        bannerAdd(room_num1,function (num) {
            $("#room_num").html(num);
        });
    });

    $("#room_reduce").click(function () {
        var room_num = document.getElementById("room_num");
        var  room_num1 = Number(room_num.innerHTML);
        bannerReduce(room_num1,function (num) {
            $("#room_num").html(num);
        });
    });
    $("#banner_choose_personBtn").click(function () {
        var child_num = document.getElementById("child_num"),
            adult_num = document.getElementById("adult_num"),
            room_num = document.getElementById("room_num"),
            adult_num1 = Number(adult_num.innerHTML),
            room_num1 = Number(room_num.innerHTML),
            child_num1 = Number(child_num.innerHTML);
        $("#child").html(child_num1);
        $("#adult").html(adult_num1);
        $("#room").html( room_num1);
        $("#banner_person_choose").addClass("hidden");
    });

    $("#icon_menu_chooseDiv").click(function () {
        $("#menuBtn").removeClass("hidden");
    });
    $("#menuClose").click(function () {
        $("#menuBtn").addClass("hidden");
    });

    $("#box_search_btn").on("click", function (e) {

       var arr = [];
       arr.push( $("#icon_hotel_id").html());
        arr.push( $("#icon_box_input").val());

        arr.push( $("#banner_dateIn").val());
        arr.push( $("#banner_dateOut").val());
        arr.push( $("#adult").html());
        arr.push( $("#child").html());
        arr.push( $("#room").html());
        storage(arr,"hotelName");

        window.location.href="placehotel.html" + "?" + $("#icon_hotel_id").html() + "&" +  $("#icon_box_input").val();

    });



    $("#icon_box_input").blur(function (e) {
         var name  = document.getElementById("icon_box_input").value;
        networking({
            url: "./json/jsonA.json",
            success: function (response) {
                var menulist =  document.getElementById("menuBtn"),
                    strHtml  = "";
                 var result = [];
                for(var i = 0, len = response.length; i < len; i++){
                    if(response[i].city== name){
                        result.push(response[i]);
                    }
                }
                var  data = result;
                        for (var i = 0; i < 5; i++){
                            strHtml += `<li class="search_icon_list" >
                               <div class="search_list_sub">
                                 <div> ${data[i].city} </div>
                                 <div>${data[i].hotelname}</div>
                               </div>
                                   <div class="hidden">${data[i].hotelid }</div>
                                  </li>`;

                        }
                menulist.innerHTML = strHtml;
                        for (var i = 0; i < 5; i++){
                            (function (a) {
                                menulist.children[i].onclick = function () {
                                    $("#icon_box_input").val(this.children[0].children[1].textContent);
                                  var id =   this.children[1].textContent;
                                    $("#icon_hotel_id").html(id);
                                    $("#menuBtn").addClass("hidden");
                                }
                            })(i);
                        }
                    }
        });

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
        // $.ajax({
        //     type: 'post',
        //     url: 'http://route.showapi.com/1450-1',
        //     dataType: 'json',
        //     data: {
        //         "showapi_timestamp": formatterDateTime(),
        //         "showapi_appid": '66350', //这里需要改成自己的appid
        //         "showapi_sign": '9661208b76b94dcba31459a865ec1ea7',  //这里需要改成自己的应用的密钥secret
        //         "page":"3",
        //         "hotalId":"",
        //         "cityName":name,
        //         "proName":"",
        //         "hotalName":""
        //     },
        //
        //     error: function(XmlHttpRequest, textStatus, errorThrown) {
        //         alert("操作失败!");
        //     },
        //     success: function(result) {
        //         var menulist =  document.getElementById("menuBtn"),
        //         strHtml  = "";
        //         console.log(name);
        //         console.log(result);
        //    var  data = result.showapi_res_body.contentlist;
        //    console.log(data);
        //         for (var i = 0; i < 6; i++){
        //             strHtml += `<li class="search_icon_list" >
        //                <div class="search_list_sub">
        //                  <div> ${data[i].cityName} </div>
        //                  <div>${data[i].hotalName}</div>
        //                </div>
        //                    <div class="hidden">${data[i].hotalId }</div>
        //                   </li>`;
        //
        //         }
        //
        //         menulist.innerHTML = strHtml;
        //         console.log(menulist.children);
        //         for (var i = 0; i < 6; i++){
        //             (function (a) {
        //                 menulist.children[i].onclick = function () {
        //                     $("#icon_box_input").val(this.children[0].children[1].textContent);
        //
        //                   var id =   this.children[1].textContent;
        //                     $("#icon_hotel_id").html(id);
        //                     $("#menuBtn").css("display","none");
        //                 }
        //             })(i);
        //         }
        //     }
        // });
    });


    $("#agod_target_tab_first").click(function () {

        $("#agod_target_tab_first").removeClass("target_tab_line");
        $("#agod_target_tab_second").removeClass("target_tab_line");
        $("#agod_target_tab_first").addClass("target_tab_line");

        $("#agod_img_first").removeClass("hidden");
        $("#agod_img_second").addClass("hidden");


    });
    $("#agod_target_tab_second").click(function () {

        $("#agod_target_tab_first").removeClass("target_tab_line");
        $("#agod_target_tab_second").removeClass("target_tab_line");
        $("#agod_target_tab_second").addClass("target_tab_line");

        $("#agod_img_first").addClass("hidden");
        $("#agod_img_second").removeClass("hidden");
    });

//deals界面动画效果
    var hotel_code =  document.querySelectorAll(".deals_box_code");
    for(var i = 0, len = hotel_code.length; i < len; i++){
                hotel_code[i].onclick = function ( ) {
                this.parentNode.style.opacity = "0";
                this.parentNode.style.transform = "rotateY(90deg)";
                this.parentNode.nextElementSibling.style.opacity = "1";
                this.parentNode.nextElementSibling.style.transform = " rotateY(0deg)";
            }
    }
    var deal_box_second =  document.querySelectorAll(".deal_container_box_second");
    for(var i = 0, len = deal_box_second.length; i < len; i++){
        deal_box_second[i].onclick = function ( ) {
            this.style.opacity = "0";
            this.style.transform = "rotateY(-90deg)";
            this.previousElementSibling.style.opacity = "1";
            this.previousElementSibling.style.transform = " rotateY(0deg)";
        }
    }
})();



function bannerAdd(number,callback) {
    number =  number + 1;
    callback&&callback(number)
}
function bannerReduce(number,callback) {
    if(number>0){
        number =  number - 1;
    }
    callback&&callback(number)
}
function testForm(type, str, element) {
    var res = null,
        flag = 0;
    // console.log(element);
    if(!str){
        element.next().next().html(type + "不能为空，请重新输入!");
    }else{
        switch (type) {
            case "username": {
                // 1. 用户名正则，4到16位（字母，数字，下划线，减号）
                res = /^[A-Za-z0-9_-]{4,16}$/.test(str);
                if(!res){
                    element.next().next().html("格式错误，请重新输入!");
                }
            }
                break;
            case "password": {
                res = /^[A-Za-z0-9]{6,20}$/.test(str);
                // console.log(str,res);
                if(!res){
                    element.next().next().html("格式错误，请重新输入!");
                }
            }
                break;
            case "email": {
                // 3. 邮箱
                res = /^([A-Za-z0-9_.])+@([A-Za-z0-9_.])+.([A-Za-z]{2,4})$/.test(str);
                if(!res){
                    element.next().next().html("格式错误，请重新输入!");
                }
            }
                break;
            case "tel": {
                // 4. 手机
                res = /^[1][3,4,5,7,8][0-9]{9}$/.test(str);

                if(!res){
                    element.next().next().html("格式错误，请重新输入!");
                }
            }
                break;
        }

    }

}
                          
                          
                          
                          
                          
                          

                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                
