$(document).ready(function(){
    $(".footcontrol img").bind("click",function () {
        // alert("图像")
    })
    
    $("#search").click(function () {
        // alert("搜索")
    })

    $(".close").click(function () {
        $("#myModal").attr("class","modal fade");
        $("#myModal").css("display","none")
    })

    $(".modal-footer button").click(function () {
        $("#myModal").attr("class","modal fade");
        $("#myModal").css("display","none")
    })

    $(".footcontrol").on("click", "#imgs", function() {
        // alert('val'+this.alt)
        // alert('这里是动态元素添加的事件');
        getBoundary(this.alt);
    });

    $('#allmap').click(function () {
        // alert("123456")
        // alert("hidden"+$('#sidecontrol1').is(':hidden'))
        // alert("show"+$('#sidecontrol1').is(':show'))
        if ($('#sidecontrol1').is(':hidden')){
            // alert("entry")
            $('#sidecontrol').hide()
            // document.getElementById('#sidecontrol1').style.visibility="show";
            $('#sidecontrol1').show()
        }
    })

});


function getTagInfo() {
    // alert("来自坑比的点击")
}


function changeSide() {
    alert($('#sidecontrol1').is(':hidden'))
    if ($('#sidecontrol1').is(':hidden')){
        // alert("entry")
        $('#sidecontrol').hide()
        // document.getElementById('#sidecontrol1').style.visibility="show";
        $('#sidecontrol1').show()
        // event.stopPropagation()
    }
}


function openDocument() {
    $("#myModal").attr("class","modal fade in");
    $("#myModal").css("display","block")
    getTable();
}


function getTable() {
    // alert("table")
    var table = '{"tables":[{"td_name":"项目名称：","td_value":"白杨林公路工程","long_type":"0"},{"td_name":"批准文号：","td_value":"陇交发〔2017〕161 号","long_type":"1"},{"td_name":"乡镇：","td_value":"红旗乡","long_type":"0"},{"td_name":"主管部门：","td_value":"临洮县政府","long_type":"0"},{"td_name":"建设性质：","td_value":"改建","long_type":"0"},{"td_name":"是否竣工：","td_value":"是","long_type":"0"},{"td_name":"开工时间：","td_value":"2018-01-01","long_type":"0"},{"td_name":"总投资：","td_value":"¥1,916,702.00","long_type":"0"},{"td_name":"基本建设内容：","td_value":"白杨林公路的整体维护工作","long_type":"1"},{"td_name":"招投标情况：","td_value":"公开招标","long_type":"0"}]}';
    var table_data=eval("("+table+")")
    $("table").empty()
    $("table").append("<h4>项目基本情况</h4>")
    for (var i=0;i<table_data.tables.length;) {
        if (table_data.tables[i].long_type=='0') {
            $("table").append("<tr><td class=\"th_td\">" + table_data.tables[i].td_name + "</td><td >"+table_data.tables[i].td_value+"</td><td class=\"th_td\">"+table_data.tables[i+1].td_name+"</td><td>"+table_data.tables[i+1].td_value+"</td></tr>")
            i=i+2
        }else{
            $("table").append("<tr><td class=\"th_td\">" + table_data.tables[i].td_name + "</td><td class='th_td_long' colspan='3'>"+table_data.tables[i].td_value+"</td></tr>")
            i=i+1
        }
    }
}

function getListInfo(){
    // alert("list")
    var list = '{"tables":[{"td_name":"项目名称：","td_value":"白杨林公路工程","long_type":"0"},{"td_name":"批准文号：","td_value":"陇交发〔2017〕161 号","long_type":"1"},{"td_name":"乡镇：","td_value":"红旗乡","long_type":"0"},{"td_name":"主管部门：","td_value":"临洮县政府","long_type":"0"},{"td_name":"建设性质：","td_value":"改建","long_type":"0"},{"td_name":"是否竣工：","td_value":"是","long_type":"0"},{"td_name":"开工时间：","td_value":"2018-01-01","long_type":"0"},{"td_name":"总投资：","td_value":"¥1,916,702.00","long_type":"0"},{"td_name":"基本建设内容：","td_value":"白杨林公路的整体维护工作","long_type":"1"},{"td_name":"招投标情况：","td_value":"公开招标","long_type":"0"}]}';
    var list_info=eval("("+list+")")
    $("#sidecontrol1").hide()
    $("#sidecontrol").empty()
    $("#sidecontrol").append('<div class="col-md-12" style="margin-top: 15px">')
    for (var i=0;i<list_info.tables.length;i++) {
        $("#sidecontrol").append("<div style=\"padding-top: 10px\"><span>"+list_info.tables[i].td_name+":"+list_info.tables[i].td_value+"</span></div>")
    }
    $("#sidecontrol").append('</div>')
    $('#sidecontrol').show()
    event.stopPropagation()

}


function hideSide() {
    // alert($('.allcontrol').is(':hidden'))
    if ($('.allcontrol').is(':hidden')){
        $('.allcontrol').show()
        $("#hide").css("transform","rotate("+270+"deg"+")");
    }else{
        $('.allcontrol').hide()
        $("#hide").css("transform","rotate("+90+"deg"+")");
    }

}



