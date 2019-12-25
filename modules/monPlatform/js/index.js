
let gis3d=new GIS3D();
let perceptionCars = new PerceptionCars();
let perceptionWebsocket = {};
let perWebsocket = null;
let firstUpDateCam = true;
/** 调用 **/
$(function() {
    initMap3D();

    addEvent();
  

});

function initMap3D(){
    gis3d.initload("cesiumContainer",false);
    perceptionCars.viewer=gis3d.cesium.viewer; 
    //初始化地图--道路数据
    GisData.initRoadDate(gis3d.cesium.viewer);
    //初始化地图服务--上帝视角时使用
    GisData.initServer(gis3d.cesium.viewer);
    //初始化模型数据--树
    GisData.initThreeData(gis3d.cesium.viewer);
}


function addEvent(){

    addEventListener('message', e => {
        // e.data为父页面发送的数据
       let eventData = e.data
        if(eventData.type == "updateCam"){
          let {x, y, z, radius, pitch, yaw} = eventData.data;
          if(firstUpDateCam){
            gis3d.updateCameraPosition(x, y, z, radius, pitch, yaw);
            firstUpDateCam = false;
          }else{
            gis3d.updateCameraPosition(x, y, z, radius, pitch, yaw,5);
          }
         
        }
        if(eventData.type == "position"){
          initPerSocket(eventData)
        }
        if(eventData.type == "addModel"){    
          gis3d.addModeCar({
            longitude:eventData.data.longitude,
            latitude:eventData.data.latitude,
            heading:eventData.data.heading,
            vehicleId:eventData.data.vehicleId,
          },
          eventData.data.name,
          eventData.data.glbName,
          );
        }
    })

}

function initPerSocket(e) {
  let perception = {
    action:"road_real_data_per",
    data:{
        type:1,
        polygon:e.data.currentExtent
    }
  }
 
 
  if(perWebsocket){
    perWebsocket.webSocket.close();
    perWebsocket = null;
  }
  // else{
    perWebsocket = new WebSocketObj(window.config.socketUrl, perception, onPerMessage);
  // }
 

}


function onPerMessage(event) {
  let data = JSON.parse(event.data)
  let maxGpsTime = 0;
  let fiterData;
  if(data.result.perList.length){
    data.result.perList.map(item=>{
      if(item.gpsTime > maxGpsTime){
        maxGpsTime = item.gpsTime;
        fiterData = item;
      }
    })        
  }  
  perceptionCars.addPerceptionData(fiterData.data,0);     
}



