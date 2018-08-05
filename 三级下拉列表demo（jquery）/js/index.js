$(function(){

     function objInit(obj){
            return $(obj).html("<option>请选择</option>");
     }

     var arrData = {
        商店1:{手机品牌1_1:"手机型号1_1_1, 手机型号1_1_2",
                手机品牌1_2:"手机型号1_2_1, 手机型号1_2_2"},
        商店2:{手机品牌2_1:"手机型号2_1_1, 手机型号2_1_2",
                手机品牌2_2:"手机型号2_2_1, 手机型号2_2_2"},
        商店3:{手机品牌3_1:"手机型号3_1_1, 手机型号3_1_2",
                手机品牌3_2:"手机型号3_2_1, 手机型号3_2_2"}
     };
     $.each(arrData,function(pF){
         $("#selF").append("<option>"+ pF +"</option>");
     });
     $("#selF").change(function(){
        objInit("#selT");
        objInit("#selC");
        $.each(arrData,function(pF,pS){
            if($("#selF option:selected").text()==pF){
                $.each(pS,function(pT,pC){
                    $("#selT").append("<option>"+pT+"</option>");
                });
                $("#selT").change(function(){
                    objInit("#selC");
                    $.each(pS, function(pT, pC){
                       if($("#selT option:selected").text() == pT){
                           console.log(pC);
                            $.each(pC.split(","),function(){
                                $("#selC").append("<option>"+ this+"</option>")
                            });
                       }
                    });
                })
            }
        });
     });
});

$("#Button1").click(function(){
  var strValue = "你选择的商店：";
  strValue += $("#selF option:selected").text();
  strValue += "&nbsp;你选择的手机品牌：";
  strValue += $("#selT option:selected").text();
  strValue += "&nbsp;你选择的手机型号：";
  strValue += $("#selC option:selected").text();
   $("#divTip").html(strValue);


});