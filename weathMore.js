
  
  
  mainF() //mainF se znaci prva zove automatski i prikazuje sve. Druga FUNKCIJA POSLE OVE, dole showF() se zove u DOMu na click na 585 liniji u index.html
function mainF(){  
fetch('http://api.openweathermap.org/data/2.5/weather?q=Belgrade&units=imperial&APPID=69190f2d7f60d5551b77187e81d50575')
  .then(eks => {
    return  eks.json();     
  }).then(data =>{
      console.log(data)
      setInterval(function(){
      var date = new Date().toLocaleString("en-US", {timeZone: 'Europe/Belgrade'})
      updateTime(date);
  }, 1000);
 function updateTime(dateExp){  
  var timeDiv = document.getElementById("date1");
  timeDiv.innerHTML = dateExp //time;

  
  };
  fetch('https://api.sunrise-sunset.org/json?lat=' + data.coord.lat +  '&lng=' +  data.coord.lon)
  .then((riseSet1)=>{
    return riseSet1.json();
  })
  .then((dataSun)=>{
    console.log('26 nam treba pocetak za sunrise:', dataSun);
    var takeRise = dataSun.results.sunrise;
    var takeSet  = dataSun.results.sunset;
    $('#sunSetRise').html(`Sunrise:&nbsp; <span id='sunId'>${takeRise}</span>`);
    $('#sunSetRise').append(`&nbsp;&nbsp; Sunset:&nbsp; <span id ='sunId1'>${takeSet}</span>`);
  })




    var storeJson = data;   //data
    var tempSwap = false;
    var icon = storeJson.weather[0].icon;  
    var iconSrc = "http://openweathermap.org/img/w/" + icon + ".png";
    var storeIcon =  `<img id ='iconIcon' src=   ${iconSrc} >`
   $("#locId").html(`${storeJson.name},   ${storeJson.sys.country}`);
   $("#storeDes").html(`${storeJson.weather[0].main} (<span id ='bracketsDes'> ${storeJson.weather[0].description} </span>) <span id='iconDesId'> ${storeIcon} </span>`);
   $("#storeTemp").html(`Temperature is: <span id ='tempValId'> &nbsp; ${storeJson.main.temp.toFixed(1)} &#x2109; </span>`);
   var storeWindRes = storeJson.wind.speed * 0.44704;
   $("#storeWind").html(`Wind Blow:&nbsp; <span id ='windVal'> ${storeWindRes.toFixed(2)}&nbsp;m/s </span>`);
   var windData = storeJson.wind.deg;
   $('#storeWind').append(`&nbsp;&nbsp; Wind direction:&nbsp <span id ='windDirVal'> ${windDirect(windData)} </span>`);
   var humidData1 = storeJson.main.humidity;
   var pressData1 = storeJson.main.pressure;
   $('#humid').html(`Humidity:&nbsp <span id ='windDirVal'>${humidData1}&#37 </span>`);
   $('#humid').append(`&nbsp;&nbsp; Pressure:&nbsp <span id='windDirVal'>${pressData1} mb</span>`) 
  function  windDirect(degree){
    if (degree>337.5) return 'Northerly';
    if (degree>292.5) return 'North Westerly';
    if(degree>247.5) return 'Westerly';
    if(degree>202.5) return 'South Westerly';
    if(degree>157.5) return 'Southerly';
    if(degree>122.5) return 'South Easterly';
    if(degree>67.5) return 'Easterly';
    if(degree>22.5){return 'North Easterly';}
    return 'Northerly';
  }
   var tempRoot = (storeJson.main.temp).toFixed(1);  // Farenhajtima(F)
   btn1.addEventListener("click", function() {
     if(tempSwap === false){
        $("#storeTemp").html(storeFunc(tempRoot));
       tempSwap = true;
     } else {
            $("#storeTemp").html("Temperature is:" +`<span id ='tempValId'> &nbsp; ${tempRoot}</span>` + " " + `<span id ='tempValId'>&#x2109;</span>` );
            document.getElementById("btn1").value = "Switch F/C";
            tempSwap = false; //to return
       };
  }); 
  glyId.addEventListener("click", function(){
     if(tempSwap === false) {
        $("#storeTemp").html(storeFunc(tempRoot));
       tempSwap = true;
     } else {
            $("#storeTemp").html("Temperature is:" +`<span id ='tempValId'> &nbsp; ${tempRoot}</span>` + " " + `<span id ='tempValId'>&#x2109;</span>` );
            document.getElementById("btn1").value = "Switch F/C";
            tempSwap = false; //to return
       };
  });
  var storeFunc = function f2c(f) {
  var num = ((f-32) * (5/9)) 
  document.getElementById("btn1").value = "Switch C/F";
  return "Temperature is:" +`<span id ='tempValId'> &nbsp; ${num.toFixed(1)}</span>`  + " " +  `<span id ='tempValId'>&#8451</span>`;
  }
}).then(function(){
  fetch('http://api.openweathermap.org/data/2.5/forecast?q=Belgrade,RS&units=imperial&APPID=69190f2d7f60d5551b77187e81d50575')
.then(function(ajax){
    return ajax.json();
})
.then(function(data1){
  var storeFunc = function f2c(f) {
  var num = ((f-32) * (5/9));
  return  num.toFixed(1);  //Pravimo u celzijuse ovde.
};
  var storeTempK = data1.list[3].main.temp;
  var storeCalled =  (storeFunc(storeTempK).charAt(0) == '-') ?  storeFunc(storeTempK) : '&nbsp;' + storeFunc(storeTempK)                                //ternary
  var storeTempK1 = data1.list[6].main.temp;
  var storeCalled1 = storeFunc(storeTempK1).charAt(0) == '-' ?  storeFunc(storeTempK1) : '&nbsp;' + storeFunc(storeTempK1)                  
//////////////////////////////////////////////////////////////////////////////////////////////
     var storeItAll = data1;
     $('#insideDiv1').html( " <br> " + data1.list[3].dt_txt +  `<span id ='arrowSymb'>&nbsp;  &#x2771;&#x2771;&#x2771; </span>` + "&nbsp;&nbsp;" + `<span id ='styleVal5'> ${storeCalled} °C </span>`  + " &nbsp;&nbsp; - " + data1.list[3].weather[0].description + " - Wind: " + `<span id ='windValAll'> ${data1.list[3].wind.speed}</span>` + '<br> ' + "" + data1.list[6].dt_txt + `<span id ='arrowSymb'>&nbsp;  &#x2771;&#x2771;&#x2771; </span>` + "&nbsp;&nbsp;" + `<span id ='styleVal5'> ${storeCalled1} °C </span>` +  " &nbsp;&nbsp; - " +  data1.list[6].weather[0].description + "      - Wind: " + `<span id ='windValAll'> ${data1.list[6].wind.speed}</span>`);
      var icon1 = data1.list[3].weather[0].icon;
      var icon2 = data1.list[6].weather[0].icon;
      var iconSrc =  "http://openweathermap.org/img/w/"+ icon1 + ".png";
      var iconSrc2= "http://openweathermap.org/img/w/"+ icon2 + ".png";
      $("#insideDiv3").prepend('<img src=' +  iconSrc +  '>' + "  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  " + " <img src =" + iconSrc2 + ">");
///////////////////////////////////////////////////////////////////////////////////////////////
var storeFunc = function f2c(f) {
  var num = ((f-32) * (5/9));
  return  num.toFixed(1);
};
  var storeTempK11 = data1.list[11].main.temp;
  var storeCalledALOBRE = storeFunc(storeTempK11).charAt(0) == '-' ?  storeFunc(storeTempK11) : '&nbsp;' + storeFunc(storeTempK11)                 //ternary
  var storeTempK111 = data1.list[14].main.temp;
  var storeCalledALO = storeFunc(storeTempK111).charAt(0) == '-' ?  storeFunc(storeTempK111) : '&nbsp;' + storeFunc(storeTempK111)
//////////////////////////////////////////////////////////
  $('#insideDiv11').html(" <br> " + data1.list[11].dt_txt + `<span id ='arrowSymb'>&nbsp;  &#x2771;&#x2771;&#x2771; </span>` + "&nbsp;&nbsp;" + `<span id ='styleVal5'> ${storeCalledALOBRE} °C </span>` + " &nbsp;&nbsp;  -  " + data1.list[11].weather[0].description + " - Wind:  " + `<span id ='windValAll'> ${data1.list[11].wind.speed}</span>` + " <br> " + data1.list[14].dt_txt + `<span id ='arrowSymb'>&nbsp;  &#x2771;&#x2771;&#x2771; </span>` + "&nbsp;&nbsp;" + `<span id ='styleVal5'> ${storeCalledALO} °C </span>` + " &nbsp;&nbsp; - " +  data1.list[14].weather[0].description + "      - Wind: " + `<span id ='windValAll'> ${data1.list[14].wind.speed}</span>`)
  
      var icon11 = data1.list[11].weather[0].icon;
      var icon22 = data1.list[14].weather[0].icon;
      var iconSrc11 =  "http://openweathermap.org/img/w/"+ icon11 + ".png";
      var iconSrc22 = "http://openweathermap.org/img/w/"+ icon22 + ".png";
      $("#insideDiv33").prepend('<img src=' +  iconSrc11 +  '>' + "  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  " + " <img src =" + iconSrc22 + ">");
///////////////////////////////////////////////////////////////////////////////////////////////
    var storeFunc = function f2c(f) {
  var num = ((f-32) * (5/9))
  return  num.toFixed(1);  //Pravimo u celzijuse ovde.
};
  var storeTempK0 = data1.list[19].main.temp;
  var storeCalled0 = storeFunc(storeTempK0).charAt(0) == '-' ?  storeFunc(storeTempK0) : '&nbsp;' + storeFunc(storeTempK0)
  var storeTempK00 = data1.list[22].main.temp;
  var storeCalled00 = storeFunc(storeTempK00).charAt(0) == '-' ?  storeFunc(storeTempK00) : '&nbsp;' + storeFunc(storeTempK00)
  //|||||||||||||||||||||||||||||||||||||||||||||//
     $('#insideDiv0').html( " <br> " + data1.list[19].dt_txt + `<span id ='arrowSymb'>&nbsp;  &#x2771;&#x2771;&#x2771; </span>` + "&nbsp;&nbsp;" + `<span id ='styleVal5'> ${storeCalled0} °C </span>` +  " &nbsp;&nbsp; -  " + data1.list[19].weather[0].description + " - Wind:  " + `<span id ='windValAll'> ${data1.list[19].wind.speed}</span>` + " <br> " + data1.list[22].dt_txt + `<span id ='arrowSymb'>&nbsp;  &#x2771;&#x2771;&#x2771; </span>` + "&nbsp;&nbsp;" + `<span id ='styleVal5'> ${storeCalled00} °C </span>` + " &nbsp;&nbsp; - " +  data1.list[22].weather[0].description + "    - Wind: " + `<span id ='windValAll'> ${data1.list[22].wind.speed}</span>` );
      var icon0 = data1.list[19].weather[0].icon;
      var icon01 = data1.list[22].weather[0].icon;
      var iconSrc01 =  "http://openweathermap.org/img/w/"+ icon0 + ".png";
      var iconSrc02 = "http://openweathermap.org/img/w/"+ icon01 + ".png";
     
      $("#insideDiv02").prepend('<img src=' +  iconSrc01 +  '>' + "  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  " + " <img src =" + iconSrc02 + ">");
/*|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
  var storeFunc = function f2c(f) {
  var num = ((f-32) * (5/9))
    return  num.toFixed(1);
  };
  var storeTempCETVRTI = data1.list[27].main.temp;
  var storeCalledCET = storeFunc(storeTempCETVRTI).charAt(0) == '-' ?  storeFunc(storeTempCETVRTI) : '&nbsp;' + storeFunc(storeTempCETVRTI);
  var storeTempCETVRTI1 = data1.list[30].main.temp;
  var storeCalledCET1 = storeFunc(storeTempCETVRTI1).charAt(0) == '-' ?  storeFunc(storeTempCETVRTI1) : '&nbsp;' + storeFunc(storeTempCETVRTI1);
    
     $('#insideDivCET').html(  " <br> " + data1.list[27].dt_txt + `<span id ='arrowSymb'>&nbsp;  &#x2771;&#x2771;&#x2771; </span>` + "&nbsp;&nbsp;" +  `<span id ='styleVal5'> ${storeCalledCET}°C  </span>` +  " &nbsp;&nbsp; -  " + data1.list[27].weather[0].description + " - Wind:  " + `<span id ='windValAll'> ${data1.list[27].wind.speed}</span>` + " <br> " + data1.list[30].dt_txt + `<span id ='arrowSymb'>&nbsp;  &#x2771;&#x2771;&#x2771; </span>` + "&nbsp;&nbsp;" + `<span id ='styleVal5'> ${storeCalledCET1} °C </span>` + " &nbsp;&nbsp; - " +  data1.list[30].weather[0].description + "    - Wind: " + `<span id ='windValAll'> ${data1.list[30].wind.speed}</span>` );
      var iconCET1 = data1.list[27].weather[0].icon;
      var iconCET2 = data1.list[30].weather[0].icon;
      var iconSrcCET =  "http://openweathermap.org/img/w/"+ iconCET1 + ".png";
      var iconSrcCET011 = "http://openweathermap.org/img/w/"+ iconCET2 + ".png";

      $("#insideDivCET2").prepend('<img src=' +  iconSrcCET +  '>' + "  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  " + " <img src =" + iconSrcCET011 + ">");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      var storeTempPETI = data1.list[35].main.temp;
      var storeCalledPET = storeFunc(storeTempPETI).charAt(0) == '-' ?  storeFunc(storeTempPETI) : '&nbsp;' + storeFunc(storeTempPETI);
      console.log('radi li dataLIST temp:', data1);
      var storeTempPETI1 = data1.list[37].main.temp;
      var storeCalledPET1 = storeFunc(storeTempPETI1).charAt(0) == '-' ?  storeFunc(storeTempPETI1) : '&nbsp;' + storeFunc(storeTempPETI1);
    
     $('#insideDivPET').html(  " <br> " + data1.list[35].dt_txt + `<span id ='arrowSymb'>&nbsp;  &#x2771;&#x2771;&#x2771; </span>`  + "&nbsp;&nbsp;" + `<span id ='styleVal5'> ${storeCalledPET}°C  </span>` +  " &nbsp;&nbsp; -  " + data1.list[35].weather[0].description + " - Wind:  " + `<span id ='windValAll'> ${data1.list[35].wind.speed}</span>` + " <br> " + data1.list[37].dt_txt + `<span id ='arrowSymb'>&nbsp;  &#x2771;&#x2771;&#x2771; </span>` + "&nbsp;&nbsp;" +  `<span id ='styleVal5'> ${storeCalledPET1} °C </span>`  + " &nbsp;&nbsp; - " +  data1.list[37].weather[0].description + "    - Wind: " +  `<span id ='windValAll'> ${data1.list[37].wind.speed}</span>`);
      var iconPET1 = data1.list[35].weather[0].icon;
      var iconPET2 = data1.list[37].weather[0].icon;
      var iconSrcPET =  "http://openweathermap.org/img/w/"+ iconPET1 + ".png";
      var iconSrcPET011 = "http://openweathermap.org/img/w/"+ iconPET2 + ".png";
     
      $("#insideDivPET2").prepend('<img src=' +  iconSrcPET +  '>' + "  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  " + " <img src =" + iconSrcPET011 + ">");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var storeFunc = function f2c(f) {
  var num = ((f-32) * (5/9))
    return  num.toFixed(1);
  };
    }).then(function(){
      fetch("http://api.openweathermap.org/data/2.5/uvi?appid=69190f2d7f60d5551b77187e81d50575&lat=44.787197&lon=20.457273")
      .then(function(uvInd1){
        uvInd1.json()
        .then(function(holdVal){
          var storeIt = document.getElementById('holdUVindex');
          storeIt.innerHTML = "UV index: " +  `  <p id ='raceIt'> ${holdVal.value}  </p>`;
          return false
        })
      })
    })
});
return false
}
/*/////////////////////////////////////////////////////////////////////////////////////////////////////////*/
  var sitNam = document.getElementById('siteName');
 function showDiv(){
  document.getElementById('siteName').style.display  ='block';
  document.getElementById('locId').style.display     = 'none';
  addPlace = sitNam.value;
 };
var counter = [];
sitNam.addEventListener('keydown', function(e){
    if (e.keyCode == 13){
    counter.push(e.isTrusted);
    var store = this.value;
    addPlace = this.value;
    showF();
  }
});


/*Start of showF function down*/
function showF(){ 
var tempSwapTM = false;
fetch('http://api.openweathermap.org/data/2.5/weather?q=' + addPlace  + '&units=imperial&APPID=69190f2d7f60d5551b77187e81d50575')
  .then(eks => {
    return  eks.json();     
  }).then(data => {
     console.log('Podaci za drugu funckiju vreme:', data)
      document.getElementById('siteName').style.display  = 'none';
      document.getElementById('locId').style.display     = 'block' //vracamo ime i drzavu.
      console.log('na 28 idemo:', data)
      if(data.cod == 404){
        alert('Please, only enter place names and only on eglish language.');
      }
         var cityLat1 = data.coord.lat;
         var cityLong1 = data.coord.lon;
         fetch("https://maps.googleapis.com/maps/api/timezone/json?location=" + cityLat1 + "," + cityLong1 + "&timestamp=1331161200&key=AIzaSyDQYoYpB-CyL4Leg5IWW1pT0afaVD9z4J0")
         .then(function(timeZon){
          return timeZon.json()
         }).then((tmZon)=> {
          console.log('i konacno:', tmZon);
        
  updateTime()
 function updateTime(){   
 var timeDiv = document.getElementById("date2");
 var timeDiv1 = document.getElementById("date1");
 var timeDiv3 = document.getElementById("date3");
  timeDiv.innerHTML = '';
 document.getElementById("date1").style.display = 'none';
 document.getElementById("date2").style.display = 'block';
 var myInt;
 var tempSwapTM = counter.length; 
 var sitNam = document.getElementById('siteName');
 var myInt = null;
 timeDiv.innerHTML = "Loading data... <img src='images/Spinner-1.4s-76px.gif'/>";

  myInt = setInterval(function(){
          var date = new Date().toLocaleString("en-US", {timeZone: tmZon.timeZoneId});
          timeDiv.innerHTML  = date;
          document.getElementById("date2").style.display = 'block';

          document.getElementById("date1").style.display = 'none';
          document.getElementById("date3").style.display = 'none';
          }, 1000)
  sitNam.addEventListener('keydown', function(e){
    if(e.keyCode == 13){
      window.clearInterval(myInt)
    }
  });
  };
  })    
  //funcMonth();  
  //funcDay(); 
  //funcYear();
  /*
  function funcMonth() {
    var d = new Date();
    var month = [];
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10]= "November";
    month[11]= "December";
    var n = month[d.getMonth()]; 
    var monthD = d.getDate();
    document.getElementById("demo").innerHTML = monthD + " " +  n + ",";
  };*/
  function funcDay() {
    var day = new Date();
    var weekday = [];
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var newDay = weekday[day.getDay()];
    document.getElementById("dayId").innerHTML = newDay;
  };
    var storeJson = data; 
    var tempSwap = false; //setting to false
    var icon = storeJson.weather[0].icon;  
    var iconSrc = "http://openweathermap.org/img/w/" + icon + ".png";
    var storeIcon =  `<img id ='iconIcon' src=   ${iconSrc} >`

   $("#locId").html(`${storeJson.name},   ${storeJson.sys.country}`);
   $("#storeDes").html(`${storeJson.weather[0].main} (<span id ='bracketsDes'> ${storeJson.weather[0].description} </span>) <span id='iconDesId'> ${storeIcon} </span>`);
   $("#storeTemp").html(`Temperature is: <span id ='tempValId'> &nbsp; ${storeJson.main.temp.toFixed(1)} &#x2109; </span>`);
   var storeWindRes = storeJson.wind.speed * 0.44704;
   $("#storeWind").html(`Wind Blow:&nbsp; <span id ='windVal'> ${storeWindRes.toFixed(2)}&nbsp;m/s </span>`);
   var windData = storeJson.wind.deg;
   $('#storeWind').append(`&nbsp;&nbsp; Wind direction:&nbsp <span id ='windDirVal'> ${windDirect(windData)} </span>`);
   var humidData1 = storeJson.main.humidity;
   var pressData1 = storeJson.main.pressure;
   $('#humid').html(`Humidity:&nbsp <span id ='windDirVal'>${humidData1}&#37 </span>`);
   $('#humid').append(`&nbsp;&nbsp; Pressure:&nbsp <span id='windDirVal'>${pressData1} mb</span>`) 

  function  windDirect(degree){
    if (degree>337.5) return 'Northerly';
    if (degree>292.5) return 'North Westerly';
    if(degree>247.5) return 'Westerly';
    if(degree>202.5) return 'South Westerly';
    if(degree>157.5) return 'Southerly';
    if(degree>122.5) return 'South Easterly';
    if(degree>67.5) return 'Easterly';
    if(degree>22.5){return 'North Easterly';}
    return 'Northerly';
  }
   var tempRoot = (storeJson.main.temp).toFixed(1);  // Farenhajtima(F)
   btn1.addEventListener("click", function() {
     if(tempSwap === false) {
        $("#storeTemp").html(storeFunc(tempRoot));
       tempSwap = true;
     } else {
            $("#storeTemp").html("Temperature is:" +`<span id ='tempValId'> &nbsp; ${tempRoot}</span>` + " " + `<span id ='tempValId'>&#x2109;</span>` );
            document.getElementById("btn1").value = "Switch F/C";
            tempSwap = false; 
       };
  });
  glyId.addEventListener("click", function(){
     if(tempSwap === false) {
        $("#storeTemp").html(storeFunc(tempRoot));
       tempSwap = true;
     } else {
            $("#storeTemp").html("Temperature is:" +`<span id ='tempValId'> &nbsp; ${tempRoot}</span>` + " " + `<span id ='tempValId'>&#x2109;</span>` );
            document.getElementById("btn1").value = "Switch F/C";
            tempSwap = false;
       };
  }); 
  var storeFunc = function f2c(f) {
  var num = ((f-32) * (5/9)) 
  document.getElementById("btn1").value = "Switch C/F";
  return "Temperature is:" +`<span id ='tempValId'> &nbsp; ${num.toFixed(1)}</span>`  + " " +  `<span id ='tempValId'>&#8451</span>`;
  }
}).then(function(){
  fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + addPlace + '&units=imperial&APPID=69190f2d7f60d5551b77187e81d50575')
.then(function(ajax){
    return ajax.json();
})
.then(function(data1){
  var cityLat = data1.city.coord.lat; 
  var cityLong = data1.city.coord.lon;
  fetch('https://api.sunrise-sunset.org/json?lat=' + data1.city.coord.lat +  '&lng=' +  data1.city.coord.lon)
  .then((riseSet)=>{
    return riseSet.json();
  })
  .then((aboutSun)=>{
    console.log(aboutSun);
    var takeRise1 = aboutSun.results.sunrise;
    var takeSet1  = aboutSun.results.sunset;
    console.log(takeRise1, takeSet1)
    $('#sunSetRise').html(`Sunrise:&nbsp; <span id='sunIdNew'>${takeRise1}</span>`);
    $('#sunSetRise').append(`&nbsp;&nbsp; Sunset:&nbsp; <span id ='sunIdNew1'>${takeSet1}</span>`);



  })

  var storeLocId = document.getElementById('locId');
  storeLocId.title =  `LAT: ${cityLat}        LON: ${cityLong}`           /*'Long: ' + " "  + cityLong +  '&nbsp;&nbsp;' + ' Lat:' + "  " +  cityLat;*/
  var storeFunc = function f2c(f) {
  var num = ((f-32) * (5/9));
  return  num.toFixed(1);  //Pravimo u celzijuse ovde.
  };
  var storeTempK = data1.list[3].main.temp;
  var storeCalled =  (storeFunc(storeTempK).charAt(0) == '-') ?  storeFunc(storeTempK) : '&nbsp;' + storeFunc(storeTempK)                                //ternary
  var storeTempK1 = data1.list[6].main.temp;
  var storeCalled1 = storeFunc(storeTempK1).charAt(0) == '-' ?  storeFunc(storeTempK1) : '&nbsp;' + storeFunc(storeTempK1)                  
///////////////////////////////////
     var storeItAll = data1;
     $('#insideDiv1').html( " <br> " + data1.list[3].dt_txt + `<span id ='arrowSymb'>&nbsp;  &#x2771;&#x2771;&#x2771; </span>` + "&nbsp;&nbsp;" + `<span id ='styleVal5'> ${storeCalled} °C </span>`  + " &nbsp;&nbsp; - " + data1.list[3].weather[0].description + " - Wind: " + `<span id ='windValAll'> ${data1.list[3].wind.speed}</span>` + '<br> ' + "" + data1.list[6].dt_txt + `<span id ='arrowSymb'>&nbsp;  &#x2771;&#x2771;&#x2771; </span>` + "&nbsp;&nbsp;" + `<span id ='styleVal5'> ${storeCalled1} °C </span>` +  " &nbsp;&nbsp; - " +  data1.list[6].weather[0].description + "      - Wind: " + `<span id ='windValAll'> ${data1.list[6].wind.speed}</span>`);
      var icon1 = data1.list[3].weather[0].icon;
      var icon2 = data1.list[6].weather[0].icon;
      var iconSrc =  "http://openweathermap.org/img/w/"+ icon1 + ".png";
      var iconSrc2= "http://openweathermap.org/img/w/"+ icon2 + ".png";
      $("#insideDiv3").prepend('<img src=' +  iconSrc +  '>' + "  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  " + " <img src =" + iconSrc2 + ">");
//////////////////////////////////////////
var storeFunc = function f2c(f) {
  var num = ((f-32) * (5/9));
  return  num.toFixed(1);
};
  var storeTempK11 = data1.list[11].main.temp;
  var storeCalledALOBRE = storeFunc(storeTempK11).charAt(0) == '-' ?  storeFunc(storeTempK11) : '&nbsp;' + storeFunc(storeTempK11)                 //ternary
  var storeTempK111 = data1.list[14].main.temp;
  var storeCalledALO = storeFunc(storeTempK111).charAt(0) == '-' ?  storeFunc(storeTempK111) : '&nbsp;' + storeFunc(storeTempK111)
///////////////////////////////////////////////
  $('#insideDiv11').html(" <br> " + data1.list[11].dt_txt + `<span id ='arrowSymb'>&nbsp;  &#x2771;&#x2771;&#x2771; </span>` + "&nbsp;&nbsp;" + `<span id ='styleVal5'> ${storeCalledALOBRE} °C </span>` + " &nbsp;&nbsp;  -  " + data1.list[11].weather[0].description + " - Wind:  " + `<span id ='windValAll'> ${data1.list[11].wind.speed}</span>` + " <br> " + data1.list[14].dt_txt + `<span id ='arrowSymb'>&nbsp;  &#x2771;&#x2771;&#x2771; </span>` + "&nbsp;&nbsp;" + `<span id ='styleVal5'> ${storeCalledALO} °C </span>` + " &nbsp;&nbsp; - " +  data1.list[14].weather[0].description + "      - Wind: " + `<span id ='windValAll'> ${data1.list[14].wind.speed}</span>`)
  
      var icon11 = data1.list[11].weather[0].icon;
      var icon22 = data1.list[14].weather[0].icon;
      var iconSrc11 =  "http://openweathermap.org/img/w/"+ icon11 + ".png";
      var iconSrc22 = "http://openweathermap.org/img/w/"+ icon22 + ".png";
      $("#insideDiv33").prepend('<img src=' +  iconSrc11 +  '>' + "  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  " + " <img src =" + iconSrc22 + ">");
///////////////////////////////////////////////////
    var storeFunc = function f2c(f) {
  var num = ((f-32) * (5/9))
  return  num.toFixed(1); 
};
  var storeTempK0 = data1.list[19].main.temp;
  var storeCalled0 = storeFunc(storeTempK0).charAt(0) == '-' ?  storeFunc(storeTempK0) : '&nbsp;' + storeFunc(storeTempK0)
  var storeTempK00 = data1.list[22].main.temp;
  var storeCalled00 = storeFunc(storeTempK00).charAt(0) == '-' ?  storeFunc(storeTempK00) : '&nbsp;' + storeFunc(storeTempK00)
  //|||||||||||||||||||||||||||||||||||||||||||||//
     $('#insideDiv0').html( " <br> " + data1.list[19].dt_txt + `<span id ='arrowSymb'>&nbsp;  &#x2771;&#x2771;&#x2771; </span>` + "&nbsp;&nbsp;" + `<span id ='styleVal5'> ${storeCalled0} °C </span>` +  " &nbsp;&nbsp; -  " + data1.list[19].weather[0].description + " - Wind:  " + `<span id ='windValAll'> ${data1.list[19].wind.speed}</span>` + " <br> " + data1.list[22].dt_txt + `<span id ='arrowSymb'>&nbsp;  &#x2771;&#x2771;&#x2771; </span>` + "&nbsp;&nbsp;" + `<span id ='styleVal5'> ${storeCalled00} °C </span>` + " &nbsp;&nbsp; - " +  data1.list[22].weather[0].description + "    - Wind: " + `<span id ='windValAll'> ${data1.list[22].wind.speed}</span>` );
      var icon0 = data1.list[19].weather[0].icon;
      var icon01 = data1.list[22].weather[0].icon;
      var iconSrc01 =  "http://openweathermap.org/img/w/"+ icon0 + ".png";
      var iconSrc02 = "http://openweathermap.org/img/w/"+ icon01 + ".png";
     
      $("#insideDiv02").prepend('<img src=' +  iconSrc01 +  '>' + "  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  " + " <img src =" + iconSrc02 + ">");
/*|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
  var storeFunc = function f2c(f) {
  var num = ((f-32) * (5/9))
    return  num.toFixed(1); 
  };

  var storeTempCETVRTI = data1.list[27].main.temp;
  var storeCalledCET = storeFunc(storeTempCETVRTI).charAt(0) == '-' ?  storeFunc(storeTempCETVRTI) : '&nbsp;' + storeFunc(storeTempCETVRTI);
  var storeTempCETVRTI1 = data1.list[30].main.temp;
  var storeCalledCET1 = storeFunc(storeTempCETVRTI1).charAt(0) == '-' ?  storeFunc(storeTempCETVRTI1) : '&nbsp;' + storeFunc(storeTempCETVRTI1);
    
     $('#insideDivCET').html(  " <br> " + data1.list[27].dt_txt + `<span id ='arrowSymb'>&nbsp;  &#x2771;&#x2771;&#x2771; </span>` + "&nbsp;&nbsp;" +  `<span id ='styleVal5'> ${storeCalledCET}°C  </span>` +  " &nbsp;&nbsp; -  " + data1.list[27].weather[0].description + " - Wind:  " + `<span id ='windValAll'> ${data1.list[27].wind.speed}</span>` + " <br> " + data1.list[30].dt_txt + `<span id ='arrowSymb'>&nbsp;  &#x2771;&#x2771;&#x2771; </span>` + "&nbsp;&nbsp;" + `<span id ='styleVal5'> ${storeCalledCET1} °C </span>` + " &nbsp;&nbsp; - " +  data1.list[30].weather[0].description + "    - Wind: " + `<span id ='windValAll'> ${data1.list[30].wind.speed}</span>` );
      var iconCET1 = data1.list[27].weather[0].icon;
      var iconCET2 = data1.list[30].weather[0].icon;
      var iconSrcCET =  "http://openweathermap.org/img/w/"+ iconCET1 + ".png";
      var iconSrcCET011 = "http://openweathermap.org/img/w/"+ iconCET2 + ".png";

      $("#insideDivCET2").prepend('<img src=' +  iconSrcCET +  '>' + "  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  " + " <img src =" + iconSrcCET011 + ">");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      var storeTempPETI = data1.list[35].main.temp;
      var storeCalledPET = storeFunc(storeTempPETI).charAt(0) == '-' ?  storeFunc(storeTempPETI) : '&nbsp;' + storeFunc(storeTempPETI);
      console.log('radi li dataLIST temp:', data1);
      var storeTempPETI1 = data1.list[37].main.temp;
      var storeCalledPET1 = storeFunc(storeTempPETI1).charAt(0) == '-' ?  storeFunc(storeTempPETI1) : '&nbsp;' + storeFunc(storeTempPETI1);
    
     $('#insideDivPET').html(  " <br> " + data1.list[35].dt_txt + `<span id ='arrowSymb'>&nbsp;  &#x2771;&#x2771;&#x2771; </span>`  + "&nbsp;&nbsp;" + `<span id ='styleVal5'> ${storeCalledPET}°C  </span>` +  " &nbsp;&nbsp; -  " + data1.list[35].weather[0].description + " - Wind:  " + `<span id ='windValAll'> ${data1.list[35].wind.speed}</span>` + " <br> " + data1.list[37].dt_txt + `<span id ='arrowSymb'>&nbsp;  &#x2771;&#x2771;&#x2771; </span>` + "&nbsp;&nbsp;" +  `<span id ='styleVal5'> ${storeCalledPET1} °C </span>`  + " &nbsp;&nbsp; - " +  data1.list[37].weather[0].description + "    - Wind: " +  `<span id ='windValAll'> ${data1.list[37].wind.speed}</span>`);
      var iconPET1 = data1.list[35].weather[0].icon;
      var iconPET2 = data1.list[37].weather[0].icon;
      var iconSrcPET =  "http://openweathermap.org/img/w/"+ iconPET1 + ".png";
      var iconSrcPET011 = "http://openweathermap.org/img/w/"+ iconPET2 + ".png";
     
      $("#insideDivPET2").prepend('<img src=' +  iconSrcPET +  '>' + "  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  " + " <img src =" + iconSrcPET011 + ">");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var storeFunc = function f2c(f) {
  var num = ((f-32) * (5/9))
    return  num.toFixed(1); 
  };
      return [cityLat, cityLong]
    }).then(function(oneArr){
       var mapSrc = document.getElementById('storeMap').children[0].src = "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d90588.96404060595!2d" + oneArr[1]  + "!3d" + oneArr[0] + "!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ssr!2srs!4v1497371916951"
      fetch("http://api.openweathermap.org/data/2.5/uvi?appid=69190f2d7f60d5551b77187e81d50575&lat=" + oneArr[0] + "&lon=" + oneArr[1])
      .then(function(uvInd1){
        uvInd1.json()
        .then(function(holdVal){
          var storeIt = document.getElementById('holdUVindex');
          storeIt.innerHTML = "UV index: " +  `  <p id ='raceIt'> ${holdVal.value}  </p>`;
        })
      })
      return oneArr;
    })
    .then(function(takeOneA){
      return takeOneA;
    }) 
}) //then
 }
