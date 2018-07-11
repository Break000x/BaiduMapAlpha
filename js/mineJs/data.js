$(function () {
    // alert("footcontrol");
    var footmenu = '{"project":[{"project_id":"1","project_name":"项目一","project_num":"5","project_img":"../images/probudget.png"},{"project_id":"2","project_name":"项目二","project_num":"10","project_img":"../images/prodemand.png"},{"project_id":"3","project_name":"项目三","project_num":"20","project_img":"../images/prodesc.png"},{"project_id":"4","project_name":"项目四","project_num":"30","project_img":"../images/promanage.png"}]}';
    var footmenu_data=eval("("+footmenu+")");
     for (var i=0;i<footmenu_data.project.length;i++) {
        $(".footcontrol").append("<a href='#'><div class='footcontrol_div'><img alt='"+footmenu_data.project[i].project_id+"' id=\"imgs\" class=\"col-xs-4 footcontrol_img\" src='"+footmenu_data.project[i].project_img+"'><div class='footcontrol_div_project'>"+footmenu_data.project[i].project_name+"</div><div class='footcontrol_div_project'>"+footmenu_data.project[i].project_num+"</div></div></a>")

     }


    function addMarker(point){
        var marker = new BMap.Marker(point);
        map.addOverlay(marker);
    }
    
    
    
});