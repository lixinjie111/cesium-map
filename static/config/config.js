window.config = {

    //望京 内网 
    // url: 'http://172.17.1.16:9093/monPlatApp/', //监控平台
    // operateUrl: 'http://172.17.1.16:9090/operateApp/',	//运营平台
    // websocketUrl:'ws://172.17.1.16:9982/mon',  //监控
    // socketUrl:'ws://172.17.1.16:9999/ws',  //影子系统
    // dlWmsUrl: 'http://10.0.1.22:8080/', //迪路
 
    //望京 外网
    // url: 'http://120.133.21.14:9093/monPlatApp/', //监控平台
    // operateUrl: 'http://120.133.21.14:9090/operateApp/',    //运营平台
    // websocketUrl:'ws://120.133.21.14:49982/mon',  //监控
    // socketUrl:'ws://120.133.21.14:49999/ws',  //影子系统
    // dlWmsUrl: 'http://117.114.144.227:8080/', //迪路

    //上海正式环境  外网 
    url: 'http://116.236.72.206:49093/monPlatApp/', //监控平台
    operateUrl: 'http://116.236.72.204:49090/operateApp/', //运营平台
    websocketUrl:'ws://116.236.72.206:49982/mon',  //监控
    socketUrl:'ws://116.236.72.205:49999/ws',  //影子系统
    dlWmsUrl: 'http://116.236.72.204:48080/', //迪路

    version: 1.0,       // 版本号
}

//高德地图额外配置项添加
window.mapOption = {
    key: "8bf04484a44d846096c9ab84730e88b8",    //高德地图key
    center: [121.17265957261286,31.284096076877844],    //上海-高德地图坐标点  感知右下角
    mapStyleEmpty: "amap://styles/bc5a63d154ee0a5221a1ee7197607a00", // 纯灰色背景地图
};
//高德地图
window.defaultMapOption = {
    center: window.mapOption.center, //上海
    zoom: 11,       // 默认：比例尺显示100m:zoom=17
    resizeEnable: true, //是否监控地图容器尺寸变化
    rotateEnable: true,
    mapStyle: "amap://styles/3312a5b0f7d3e828edc4b2f523ba76d8"
}
//3d地图默认参数
window.defaultMapParam = {
    x: 121.1703343194661,
    y: 31.28428377276655,
    z: 16.421176839179324,
    radius: 78.0534223809687,
    pitch: -0.28445655573236484,
    yaw: 0.003034199561255946
};

window.mapUrl=window.config.dlWmsUrl+"geoserver/gwc/service/wmts/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=shanghai_qcc:dl_shcsq_wgs84_zc_0709&STYLE=&FORMAT=image/png&TILEMATRIXSET=EPSG:900913&TileMatrix=EPSG:900913:{TileMatrix}&TileCol={TileCol}&TileRow={TileRow}"
window.defualtZ=0.1;
