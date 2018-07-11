/**
 * 创建控件
 */
function getTool() {
    // 定义一个控件类,即function
    function ZoomControl(){
        // 默认停靠位置和偏移量
        this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
        this.defaultOffset = new BMap.Size(10, 10);
    }

    function ZoomContro2(){
        // 默认停靠位置和偏移量
        this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
        this.defaultOffset = new BMap.Size(10, 40);
    }

    // 通过JavaScript的prototype属性继承于BMap.Control
    ZoomControl.prototype = new BMap.Control();
    ZoomContro2.prototype = new BMap.Control();

    // 自定义控件必须实现自己的initialize方法,并且将控件的DOM元素返回
    // 在本方法中创建个div元素作为控件的容器,并将其添加到地图容器中
    ZoomControl.prototype.initialize = function(map){
        // 创建一个DOM元素
        var div_add = document.createElement("div");
        // 设置样式
        div_add.style.cursor = "pointer";
        div_add.style.width = "48px"
        div_add.style.height = "48px"
        div_add.style.backgroundImage = "url(../images/add.png)"
        div_add.id="add"
        // 绑定事件,点击一次放大两级
        div_add.onclick = function(e){
            map.setZoom(map.getZoom() + 1);
        }
        // 添加DOM元素到地图中
        map.getContainer().appendChild(div_add);
        // 将DOM元素返回
        return div_add;
    }

    ZoomContro2.prototype.initialize = function(map){
        // 创建一个DOM元素
        var div_add1 = document.createElement("div");
        // 设置样式
        div_add1.style.cursor = "pointer";
        div_add1.style.marginTop = "20px"
        div_add1.style.width = "48px"
        div_add1.style.height = "48px"
        div_add1.style.backgroundImage = "url(../images/minus.png)"
        div_add1.id="add"
        // 绑定事件,点击一次放大两级
        div_add1.onclick = function(e){
            map.setZoom(map.getZoom() - 1);
        }
        // 添加DOM元素到地图中
        map.getContainer().appendChild(div_add1);
        // 将DOM元素返回
        return div_add1;
    }

    // 创建控件
    var myZoomCtrl = new ZoomControl();
    var myZoomCtr2 = new ZoomContro2();
    // 添加到地图当中
    map.addControl(myZoomCtrl);
    map.addControl(myZoomCtr2);
}

/**
 *创建行政区域边框
 * @param isAll
 */
function getBoundary(isAll) {
    var bdary = new BMap.Boundary();
    bdary.get("定西市临洮县临洮县", function (rs) {       //获取行政区域
        map.clearOverlays();        //清除地图覆盖物
        getTag(isAll)
        var count = rs.boundaries.length; //行政区域的点有多少个
        if (count === 0) {
            alert('未能获取当前输入行政区域');
            return;
        }
        var pointArray = [];
        for (var i = 0; i < count; i++) {
            var ply = new BMap.Polygon(rs.boundaries[i], {strokeWeight: 5, strokeColor: "#5eb319"}); //建立多边形覆盖物
            map.addOverlay(ply);  //添加覆盖物
            pointArray = pointArray.concat(ply.getPath());
        }
        // map.setViewport(pointArray);    //调整视野
    });
}

/**
 *
 * 创建地图标注
 * @param isAll
 */
function getTag(isAll) {
    //初始化TAG
    // alert(isAll)
    if (isAll===true) {
        var point = '{"project":[{"project_latitude":"103.9618130000","project_Longitude":"35.3626230000","project_img":"../images/probudget.png"},{"project_latitude":"103.9341450000","project_Longitude":"35.3216380000","project_img":"../images/prodemand.png"},{"project_latitude":"103.9403260000","project_Longitude":"35.3044370000","project_img":"../images/prodemand.png"},{"project_latitude":"103.9907740000","project_Longitude":"35.3740430000","project_img":"../images/prodesc.png"},{"project_latitude":"103.9870370000","project_Longitude":"35.4087650000","project_img":"../images/prodemand.png"},{"project_latitude":"104.0100340000","project_Longitude":"35.3812240000","project_img":"../images/prodesc.png"},{"project_latitude":"104.0297250000","project_Longitude":"35.3436640000","project_img":"../images/promanage.png"},{"project_latitude":"104.0103220000","project_Longitude":"35.3151580000","project_img":"../images/prodemand.png"},{"project_latitude":"103.9844500000","project_Longitude":"35.3090320000","project_img":"../images/prodesc.png"},{"project_latitude":"103.9197000000","project_Longitude":"35.3066170000","project_img":"../images/prodemand.png"},{"project_latitude":"103.9656940000","project_Longitude":"35.2835200000","project_img":"../images/prodesc.png"},{"project_latitude":"103.9334980000","project_Longitude":"35.4370610000","project_img":"../images/prodemand.png"},{"project_latitude":"103.9599450000","project_Longitude":"35.3899930000","project_img":"../images/prodemand.png"},{"project_latitude":"104.0387080000","project_Longitude":"35.3377160000","project_img":"../images/prodemand.png"},{"project_latitude":"104.0553810000","project_Longitude":"35.3118010000","project_img":"../images/promanage.png"},{"project_latitude":"104.0875760000","project_Longitude":"35.6564960000","project_img":"../images/prodemand.png"},{"project_latitude":"103.9961640000","project_Longitude":"35.5790350000","project_img":"../images/prodemand.png"},]}'
    }else if(isAll==1) {
        // alert('ent')
        var point = '{"project":[{"project_latitude":"103.9907740000","project_Longitude":"35.3740430000","project_img":"../images/prodesc.png"},{"project_latitude":"104.0100340000","project_Longitude":"35.3812240000","project_img":"../images/prodesc.png"},{"project_latitude":"103.9844500000","project_Longitude":"35.3090320000","project_img":"../images/prodesc.png"},{"project_latitude":"103.9656940000","project_Longitude":"35.2835200000","project_img":"../images/prodesc.png"}]}'
    }else if (isAll==2){
        var point = '{"project":[{"project_latitude":"103.9341450000","project_Longitude":"35.3216380000","project_img":"../images/prodemand.png"},{"project_latitude":"103.9403260000","project_Longitude":"35.3044370000","project_img":"../images/prodemand.png"},{"project_latitude":"103.9870370000","project_Longitude":"35.4087650000","project_img":"../images/prodemand.png"},{"project_latitude":"104.0103220000","project_Longitude":"35.3151580000","project_img":"../images/prodemand.png"},{"project_latitude":"103.9197000000","project_Longitude":"35.3066170000","project_img":"../images/prodemand.png"},{"project_latitude":"103.9334980000","project_Longitude":"35.4370610000","project_img":"../images/prodemand.png"},{"project_latitude":"103.9599450000","project_Longitude":"35.3899930000","project_img":"../images/prodemand.png"},{"project_latitude":"104.0387080000","project_Longitude":"35.3377160000","project_img":"../images/prodemand.png"},{"project_latitude":"104.0875760000","project_Longitude":"35.6564960000","project_img":"../images/prodemand.png"},{"project_latitude":"103.9961640000","project_Longitude":"35.5790350000","project_img":"../images/prodemand.png"},]}'
    }else if (isAll==3){
        var point = '{"project":[{"project_latitude":"103.9907740000","project_Longitude":"35.3740430000","project_img":"../images/prodesc.png"},{"project_latitude":"104.0100340000","project_Longitude":"35.3812240000","project_img":"../images/prodesc.png"},{"project_latitude":"103.9844500000","project_Longitude":"35.3090320000","project_img":"../images/prodesc.png"},{"project_latitude":"103.9656940000","project_Longitude":"35.2835200000","project_img":"../images/prodesc.png"}]}'
    }else if (isAll==4){
        var point = '{"project":[{"project_latitude":"104.0297250000","project_Longitude":"35.3436640000","project_img":"../images/promanage.png"},{"project_latitude":"104.0553810000","project_Longitude":"35.3118010000","project_img":"../images/promanage.png"}]}'
    }
    var point_data=eval("("+point+")");

    // 向地图标注
    var bounds = map.getBounds();
    for (var i = 0; i < point_data.project.length; i ++) {
        var point = new BMap.Point(point_data.project[i].project_latitude, point_data.project[i].project_Longitude);
        addMarker(point,point_data.project[i].project_img);
    }
}

// 编写自定义函数,创建标注
function addMarker(point,imgurl){
    var myIcon = new BMap.Icon(imgurl, new BMap.Size(20,20));
    var marker = new BMap.Marker(point,{icon:myIcon});
    marker.setTitle(point.lng)
//注册点击事件
    marker.addEventListener("click",getInfo);
    map.addOverlay(marker);

}

//得到标注的文本框内容
function getInfo() {
    var fourOpts = {
        width:200,
        height:100
    }
    getListInfo()
    // alert(this.getPosition().lng)
    // alert("title"+this.getTitle())
    var context = "<div>此项目与2018年开展的扶贫新项目...............................<a href='#' onclick='openDocument()'>查看详情</a></div>"
    var infoWindow = new BMap.InfoWindow(context,fourOpts);
    //注册消息窗口被关闭事件
    infoWindow.addEventListener("close",function () {
        getClose()
    })

    map.openInfoWindow(infoWindow,this.point);
    if(!$('#sidecontrol1').is(':hidden')){
        getListInfo()

    }
}

//关闭文本事件
function getClose() {
    $('#sidecontrol').hide()
    $('#sidecontrol1').show()
}


