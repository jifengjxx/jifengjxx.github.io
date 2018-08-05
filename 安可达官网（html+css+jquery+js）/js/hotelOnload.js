(function () {
   var id = 0,
       str= "",
       hotelName = "";
      str = window.location.search;
      // console.log(str);
       id =  str.slice(1,str.indexOf("&"));
       hotelName =decodeURI(str.slice(str.indexOf("&")+1));
       $("#hotel_id").html(id);
       $("#hotel_name").html(hotelName);

       if(sessionStorage.username ){
        var userName = sessionGetItem("username");
        $("#username").html(userName);
    }

      if(sessionStorage.hotelName) {
           var hotelInformation = sessionGetItem("hotelName");
          $("#time_in").html(hotelInformation[2]);
          $("#time_out").html(hotelInformation[3]);
          $("#adult").html(hotelInformation[4]);
          $("#child").html(hotelInformation[5]);
          $("#room").html(hotelInformation[6]);
       }




    // function formatterDateTime() {
    //     var date=new Date()
    //     var month=date.getMonth() + 1
    //     var datetime = date.getFullYear()
    //         + ""// "年"
    //         + (month >= 10 ? month : "0"+ month)
    //         + ""// "月"
    //         + (date.getDate() < 10 ? "0" + date.getDate() : date
    //             .getDate())
    //         + ""
    //         + (date.getHours() < 10 ? "0" + date.getHours() : date
    //             .getHours())
    //         + ""
    //         + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
    //             .getMinutes())
    //         + ""
    //         + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
    //             .getSeconds());
    //     return datetime;
    // }
    // $.ajax({
    //     type: 'post',
    //     url: 'http://route.showapi.com/1450-3',
    //     dataType: 'json',
    //     data: {
    //         "showapi_timestamp": formatterDateTime(),
    //         "showapi_appid": '66350', //这里需要改成自己的appid
    //         "showapi_sign": '9661208b76b94dcba31459a865ec1ea7',  //这里需要改成自己的应用的密钥secret
    //         "hotalId":id
    //
    //     },
    //
    //     error: function(XmlHttpRequest, textStatus, errorThrown) {
    //         alert("网络故障，页面加载失败!");
    //     },
    //     success: function(result) {
    //         console.log(result) //console变量在ie低版本下不能用
    //
    //         var hotel_box_list = document.getElementById("hotel_box_menu"),
    //         htmlStr = "";
    //        var data =  result.showapi_res_body.imgList;
    //         for(var i = 0, len = data.length; i < len; i++){
    //             htmlStr += `
    //                <li class="hotel_box_list">
    //                <!--<div>-->
    //                       <img src="${data[i].imgUrl}" alt="">
    //                <!--</div>-->
    //                        <p>${data[i].imgDescription}</p>
    //
    //                   </li>
    //             `;
    //         }
    //         hotel_box_list.innerHTML = htmlStr;
    //     }
    // });
    networking({
        url: "./json/jsonA.json",
        success: function (response) {
            var hotel_box_list = document.getElementById("hotel_box_menu"),
                htmlStr = "";
            var data = response;
            // console.log(response);
            for (var i = 0, len = data.length; i < len; i++) {
                htmlStr += `
                   <li class="hotel_box_list">
                   <!--<div>-->
                          <img src="${data[i].hotelpic}" alt=""> 
                   <!--</div>--> 
                    
                      </li>
                `;
            }
            // <p>${data[i].imgDescription}</p>
            hotel_box_list.innerHTML = htmlStr;

        }
    });



})();