
  let mymap3, mymap4, insDivAr = ['3','33','02','CET2','PET2'],  sitNam = document.getElementById('siteName'), counter = []
 

  function callNow(){
  mymap3 != undefined ? mymap3.remove() : undefined;
  mymap3 = L.map('mapid3').setView([44.787197, 20.457271], 11);
  L.tileLayer(tileLay, {attribution:  attrLnk, maxZoom: 17,id: 'mapbox.dark',accessToken: tknMap}).addTo(mymap3);
  L.circle([44.7950478, 20.4394765, 17.71],{color: '#8CB240',fillOpacity: 0.3,radius: 8500}).addTo(mymap3);
  setTimeout(()=> { mymap3.invalidateSize()}, 1000);
};
callNow();

function callNowWithDiff(lat1, lon1){
  mymap4 != undefined ? mymap4.remove() : undefined;
  document.getElementById('mapid3').style.display = 'none';
  document.getElementById('mapid4').style.display = 'block'
  mymap4 = L.map('mapid4').setView([lat1, lon1], 11);
  L.tileLayer(tileLay, { attribution:  attrLnk, maxZoom: 17,id: 'mapbox.dark', accessToken: tknMap}).addTo(mymap4);
  L.circle([lat1, lon1], {color: '#8CB240',fillOpacity: 0.3,radius: 8500}).addTo(mymap4);
  setTimeout(() => { mymap4.invalidateSize()}, 1000);
};

(()=> {
let blinkDiv = document.getElementsByClassName('blink_me');
  blinkDiv["0"].style.backgroundColor = '#ff9999';
  blinkDiv["0"].style.borderColor = '#ff9999';
function blinker(){
  blinkDiv["0"].style.backgroundColor = 'red';
  blinkDiv["0"].style.borderColor = 'red';
  blinkDiv["0"].style.boxShadow = "1px 5px 77px 30px red";
  $('.blink_me').fadeToggle(1300);
};
setInterval(blinker, 1300) 
})();

(function(){ mainF() })();

function mainF(){
  fetch('http://api.openweathermap.org/data/2.5/weather?q=Belgrade&units=imperial&APPID=69190f2d7f60d5551b77187e81d50575')
    .then(eks =>  eks.json())
    .then(data=> {
      setInterval(()=> {var dateD = new Date().toLocaleString("en-US", {timeZone: 'Europe/Belgrade'})
      updateTime(dateD)
      }, 1000); 
      function updateTime(dateExp){
        var timeDiv = document.getElementById("date1"), putSliced = dateExp.slice(10, dateExp.length - 2);
        var putSliced1 = dateExp.slice(dateExp.length - 2) == "PM" ? 'PM' : "AM";
        var finalTm = putSliced + " " + putSliced1, dt = moment(String(finalTm), "h:mm:ss A").format("HH:mm:ss");

        var dt1 = moment(String(finalTm), 'h:mm:ss A').format('MMMM Do YYYY'), dt2 = moment(String(finalTm), "h:mm:ss A").format('dddd');
        timeDiv.innerHTML = dt1 + " " + `<p class='newClassNow'>${dt}</p>` + " " + `<p id='stDay2'>${dt2}</p>`;
      };
      fetch('https://api.sunrise-sunset.org/json?lat=' + data.coord.lat + '&lng=' + data.coord.lon)
        .then(riseSet1=> riseSet1.json())
        .then(dataSun=> {
          var dtR = dataSun.results, takeRise =  dtR.sunrise, takeSet = dtR.sunset, takeDayU = dtR.day_length;
          $('#sunSetRise').html(`Sunrise:&nbsp; <span class='sunId'>${takeRise}</span>`);
          $('#sunSetRise').append(`&nbsp;&nbsp;<span class='redLineC'>|</span>`);
          $('#sunSetRise').append(`&nbsp;&nbsp; Sunset:&nbsp; <span class='sunId'>${takeSet}</span>`);
          $('#dayLastUv').html(`Day length:&nbsp; <span class='dayUv'>${takeDayU}</span>`);
          $('#dayLastUv').append(`&nbsp;&nbsp;<span class='redLineC'>|</span>`);
          $('#shortInfo').html("Belgrade (/ˈbɛlɡreɪd/ BEL-grayd; Serbian: Beograd / Београд, meaning 'White city', Serbian pronunciation: [beǒɡrad] names in other languages) is the capital and largest city of Serbia. It is located at the confluence of the Sava and Danube rivers, where the Pannonian Plain meets the Balkans. The urban area of the City of Belgrade has a population of 1.23 million, while nearly 1.7 million people live within its administrative limits<a class='showInfoHref' title='Click to continue reading' href=https://en.wikipedia.org/wiki/Belgrade target=_blank> &nbsp;<i  class='fa fa-external-link'></i></>")
          fetch("http://api.openweathermap.org/data/2.5/uvi?appid=69190f2d7f60d5551b77187e81d50575&lat=44.787197&lon=20.457273")
          .then(uvInd1=>  uvInd1.json())
         .then(holdVal=> {$('#dayLastUv').append(`&nbsp;&nbsp; UVindex:&nbsp; <span id ='raceIt'>${holdVal.value}</span>`) })
         })
      var storeJson = data, tempSwap = false;
      $('#countryFlag').html(`<img class='flagIdImg' src="http://www.countryflags.io/${storeJson.sys.country.toLowerCase()}/flat/64.png">`)
      var icon = storeJson.weather[0].icon, iconSrc = "http://openweathermap.org/img/w/" + icon + ".png";
      var storeIcon = `<img id ='iconIcon' src=${iconSrc}>`
      $("#locId").html(`${storeJson.name}, ${storeJson.sys.country}`);
      $("#storeDes").html(`${storeJson.weather[0].main} (<span id ='bracketsDes'> ${storeJson.weather[0].description} </span>) <span id='iconDesId'> ${storeIcon} </span>`);
      $("#storeTemp").html(`Temperature is: <span id ='tempValId'> &nbsp; ${storeJson.main.temp.toFixed(1)} &#x2109; &nbsp;</span>`);
      var storeWindRes = storeJson.wind.speed * 0.44704, windData = storeJson.wind.deg;
      $("#storeWind").html(`Wind Blow:&nbsp; <span id ='windVal'> ${storeWindRes.toFixed(2)}&nbsp;m/s </span>`);
      $('#storeWind').append(`&nbsp;&nbsp;<span class='redLineC'>|</span>`);
      $('#storeWind').append(`&nbsp;&nbsp; Wind direction:&nbsp <span id ='windDirVal'> ${windDirect(windData)} </span>`);
      var humidData1 = storeJson.main.humidity, pressData1 = storeJson.main.pressure;
      var takeClouds1 = storeJson.clouds.all;
      var takeVisibl1 = (storeJson.visibility != undefined) ? storeJson.visibility : 'No visibility info!'
      $('#humid').html(`Humidity:&nbsp <span id ='windDirVal'>${humidData1}&#37 </span>`);
      $('#humid').append(`&nbsp;&nbsp;<span class='redLineC'>|</span>`);
      $('#humid').append(`&nbsp;&nbsp; Pressure:&nbsp <span id='windDirVal'>${pressData1} mb</span>`)
      $('#maxMin').html(`Cloudiness:&nbsp; <span class='cloudS'>${takeClouds1}&#37</span>`)
      $('#maxMin').append(`&nbsp;&nbsp;<span class='redLineC'>|</span>`);
      $('#maxMin').append(`&nbsp;&nbsp; Visibility:&nbsp; <span class='cloudS'>${takeVisibl1}m</span>`)

      function windDirect(degree){
        if (degree > 337.5) return 'Northerly';//n nw, w, sw, s, se, e, ne
        if (degree > 292.5) return 'North Westerly';
        if (degree > 247.5) return 'Westerly';
        if (degree > 202.5) return 'South Westerly';
        if (degree > 157.5) return 'Southerly';
        if (degree > 122.5) return 'South Easterly';
        if (degree > 67.5) return 'Easterly';
        if (degree > 22.5){ return 'North Easterly' }
        return 'Northerly';
      };

      var tempRoot = (storeJson.main.temp).toFixed(1);
      btn1.addEventListener("click",()=>{
        if (tempSwap === false){
          $("#storeTemp").html(storeFunc(tempRoot));
          tempSwap = true;
        }else {
          $("#storeTemp").html(`Temperature is:&nbsp; <span class ='tempValId'> &nbsp; ${tempRoot} &#x2109; &nbsp;</span>`); 
          document.getElementById("btn1").value = "Switch F/C";
          tempSwap = false;
        };
      });
      glyId.addEventListener("click", ()=>{
        if (tempSwap === false) {
          $("#storeTemp").html(storeFunc(tempRoot));
          tempSwap = true;
        }else {
          $("#storeTemp").html(`Temperature is:&nbsp;<span class ='tempValId'> &nbsp; ${tempRoot} &#x2109; &nbsp;</span>`); 
          document.getElementById("btn1").value = "Switch F/C";
          tempSwap = false;
        };
      });
      var storeFunc = function f2c(f){
        var num = ((f - 32) * (5 / 9))
        document.getElementById("btn1").value = "Switch C/F";
        return `Temperature is:&nbsp;<span class ='tempValId'> &nbsp; ${num.toFixed(1)} &#8451 &nbsp;</span>`; 
      }
    }).then(() => {
      fetch('http://api.openweathermap.org/data/2.5/forecast?q=Belgrade,RS&units=imperial&APPID=69190f2d7f60d5551b77187e81d50575')
        .then(ajax=> ajax.json())
        .then(data1=> {
          var storeFunc = function f2c(f){
          var num = ((f - 32) * (5 / 9));
          return num.toFixed(1);
          };

          var storeTempK = data1.list[3].main.temp;
          var storeCalled = (storeFunc(storeTempK).charAt(0) == '-') ? storeFunc(storeTempK) : '&nbsp;' + storeFunc(storeTempK) 
          var storeTempK1 = data1.list[6].main.temp;
          var storeCalled1 = storeFunc(storeTempK1).charAt(0) == '-' ? storeFunc(storeTempK1) : '&nbsp;' + storeFunc(storeTempK1)
          $('#insideDiv1').html("<br> " + data1.list[3].dt_txt + `<span class='arrowSymb'>&nbsp;  &#x2771;&#x2771;&#x2771; </span>` + "&nbsp;&nbsp;" + `<span class ='styleVal5'> ${storeCalled} °C </span>` + " &nbsp;&nbsp; - " + data1.list[3].weather[0].description + " - Wind: " + `<span id ='windValAll'> ${data1.list[3].wind.speed}&nbsp;m/s</span>` + '<br> ' + "" + data1.list[6].dt_txt + `<span class ='arrowSymb'>&nbsp;  &#x2771;&#x2771;&#x2771; </span>` + "&nbsp;&nbsp;" + `<span class ='styleVal5'> ${storeCalled1} °C </span>` + " &nbsp;&nbsp; - " + data1.list[6].weather[0].description + "      - Wind: " + `<span id ='windValAll'> ${data1.list[6].wind.speed}&nbsp;m/s</span>`);
          var icon1 = data1.list[3].weather[0].icon, icon2 = data1.list[6].weather[0].icon;
          var iconSrc = "http://openweathermap.org/img/w/" + icon1 + ".png", iconSrc2 = "http://openweathermap.org/img/w/" + icon2 + ".png";
          $("#insideDiv3").prepend('<img src=' + iconSrc + '>' + "  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  " + " <img src =" + iconSrc2 + ">");


          var storeTempK11 = data1.list[11].main.temp;
          var storeCalledALOBRE = storeFunc(storeTempK11).charAt(0) == '-' ? storeFunc(storeTempK11) : '&nbsp;' + storeFunc(storeTempK11) 
          var storeTempK111 = data1.list[14].main.temp;
          var storeCalledALO = storeFunc(storeTempK111).charAt(0) == '-' ? storeFunc(storeTempK111) : '&nbsp;' + storeFunc(storeTempK111)
          $('#insideDiv11').html(" <br> " + data1.list[11].dt_txt + `<span class ='arrowSymb'>&nbsp;  &#x2771;&#x2771;&#x2771; </span>` + "&nbsp;&nbsp;" + `<span class ='styleVal5'> ${storeCalledALOBRE} °C </span>` + " &nbsp;&nbsp;  -  " + data1.list[11].weather[0].description + " - Wind:  " + `<span id ='windValAll'> ${data1.list[11].wind.speed}&nbsp;m/s</span>` + " <br> " + data1.list[14].dt_txt + `<span class='arrowSymb'>&nbsp;  &#x2771;&#x2771;&#x2771; </span>` + "&nbsp;&nbsp;" + `<span class='styleVal5'> ${storeCalledALO} °C </span>` + " &nbsp;&nbsp; - " + data1.list[14].weather[0].description + "      - Wind: " + `<span id ='windValAll'> ${data1.list[14].wind.speed}&nbsp;m/s</span>`)
          var icon11 = data1.list[11].weather[0].icon, icon22 = data1.list[14].weather[0].icon;
          var iconSrc11 = "http://openweathermap.org/img/w/" + icon11 + ".png", iconSrc22 = "http://openweathermap.org/img/w/" + icon22 + ".png";
          $("#insideDiv33").prepend('<img src=' + iconSrc11 + '>' + "  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  " + " <img src =" + iconSrc22 + ">");


          var storeTempK0 = data1.list[19].main.temp;
          var storeCalled0 = storeFunc(storeTempK0).charAt(0) == '-' ? storeFunc(storeTempK0) : '&nbsp;' + storeFunc(storeTempK0)
          var storeTempK00 = data1.list[22].main.temp;
          var storeCalled00 = storeFunc(storeTempK00).charAt(0) == '-' ? storeFunc(storeTempK00) : '&nbsp;' + storeFunc(storeTempK00)
          $('#insideDiv0').html(" <br> " + data1.list[19].dt_txt + `<span class ='arrowSymb'>&nbsp;  &#x2771;&#x2771;&#x2771; </span>` + "&nbsp;&nbsp;" + `<span class ='styleVal5'> ${storeCalled0} °C </span>` + " &nbsp;&nbsp; -  " + data1.list[19].weather[0].description + " - Wind:  " + `<span id ='windValAll'> ${data1.list[19].wind.speed}&nbsp;m/s</span>` + " <br> " + data1.list[22].dt_txt + `<span class ='arrowSymb'>&nbsp;  &#x2771;&#x2771;&#x2771; </span>` + "&nbsp;&nbsp;" + `<span class ='styleVal5'> ${storeCalled00} °C </span>` + " &nbsp;&nbsp; - " + data1.list[22].weather[0].description + "    - Wind: " + `<span id ='windValAll'> ${data1.list[22].wind.speed}&nbsp;m/s</span>`);
          var icon0 = data1.list[19].weather[0].icon, icon01 = data1.list[22].weather[0].icon;
          var iconSrc01 = "http://openweathermap.org/img/w/" + icon0 + ".png", iconSrc02 = "http://openweathermap.org/img/w/" + icon01 + ".png";
          $("#insideDiv02").prepend('<img src=' + iconSrc01 + '>' + "  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  " + " <img src =" + iconSrc02 + ">");


          var storeTempCETVRTI = data1.list[27].main.temp;
          var storeCalledCET = storeFunc(storeTempCETVRTI).charAt(0) == '-' ? storeFunc(storeTempCETVRTI) : '&nbsp;' + storeFunc(storeTempCETVRTI);
          var storeTempCETVRTI1 = data1.list[30].main.temp;
          var storeCalledCET1 = storeFunc(storeTempCETVRTI1).charAt(0) == '-' ? storeFunc(storeTempCETVRTI1) : '&nbsp;' + storeFunc(storeTempCETVRTI1);
          $('#insideDivCET').html(" <br> " + data1.list[27].dt_txt + `<span class ='arrowSymb'>&nbsp;  &#x2771;&#x2771;&#x2771; </span>` + "&nbsp;&nbsp;" + `<span class ='styleVal5'> ${storeCalledCET}°C  </span>` + " &nbsp;&nbsp; -  " + data1.list[27].weather[0].description + " - Wind:  " + `<span id ='windValAll'> ${data1.list[27].wind.speed}&nbsp;m/s</span>` + " <br> " + data1.list[30].dt_txt + `<span class ='arrowSymb'>&nbsp;  &#x2771;&#x2771;&#x2771; </span>` + "&nbsp;&nbsp;" + `<span class ='styleVal5'> ${storeCalledCET1} °C </span>` + " &nbsp;&nbsp; - " + data1.list[30].weather[0].description + "    - Wind: " + `<span id ='windValAll'> ${data1.list[30].wind.speed}&nbsp;m/s</span>`);
          var iconCET1 = data1.list[27].weather[0].icon, iconCET2 = data1.list[30].weather[0].icon;
          var iconSrcCET = "http://openweathermap.org/img/w/" + iconCET1 + ".png", iconSrcCET011 = "http://openweathermap.org/img/w/" + iconCET2 + ".png";
          $("#insideDivCET2").prepend('<img src=' + iconSrcCET + '>' + "  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  " + " <img src =" + iconSrcCET011 + ">");


          var storeTempPETI = data1.list[35].main.temp;
          var storeCalledPET = storeFunc(storeTempPETI).charAt(0) == '-' ? storeFunc(storeTempPETI) : '&nbsp;' + storeFunc(storeTempPETI);
          var storeTempPETI1 = data1.list[37].main.temp;
          var storeCalledPET1 = storeFunc(storeTempPETI1).charAt(0) == '-' ? storeFunc(storeTempPETI1) : '&nbsp;' + storeFunc(storeTempPETI1);
          $('#insideDivPET').html(" <br> " + data1.list[35].dt_txt + `<span class ='arrowSymb'>&nbsp;  &#x2771;&#x2771;&#x2771; </span>` + "&nbsp;&nbsp;" + `<span class ='styleVal5'> ${storeCalledPET}°C  </span>` + " &nbsp;&nbsp; -  " + data1.list[35].weather[0].description + " - Wind:  " + `<span id ='windValAll'> ${data1.list[35].wind.speed}&nbsp;m/s</span>` + " <br> " + data1.list[37].dt_txt + `<span class='arrowSymb'>&nbsp;  &#x2771;&#x2771;&#x2771; </span>` + "&nbsp;&nbsp;" + `<span class ='styleVal5'> ${storeCalledPET1} °C </span>` + " &nbsp;&nbsp; - " + data1.list[37].weather[0].description + "    - Wind: " + `<span id ='windValAll'> ${data1.list[37].wind.speed}&nbsp;m/s</span>`);
          var iconPET1 = data1.list[35].weather[0].icon;
          var iconPET2 = data1.list[37].weather[0].icon;
          var iconSrcPET = "http://openweathermap.org/img/w/" + iconPET1 + ".png";
          var iconSrcPET011 = "http://openweathermap.org/img/w/" + iconPET2 + ".png";
          $("#insideDivPET2").prepend('<img src=' + iconSrcPET + '>' + "  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + " <img src =" + iconSrcPET011 + ">");
        })
    });
  return false
}//mainF end

function showDiv(){
  document.getElementById('siteName').style.display = 'block';
  document.getElementById('locId').style.display = 'none';
  addPlace = sitNam.value;
};
sitNam.addEventListener('keydown', function (e) {
  if(e.keyCode == 13){
    counter.push(e.isTrusted);
    addPlace = this.value;
    let cityNameIt = document.getElementsByClassName('fixH3');
    cityNameIt[0].innerHTML = addPlace;
    if(cityNameIt[0].innerHTML.length >= 16) {
      cityNameIt[0].style.fontSize = '40px'
    }else {
      cityNameIt[0].style.fontSize = '50px'
    }
    cityNameIt[0].title = `Currently, info for ${addPlace} is shown`;
    showF();
  }
});

/*Start of showF function down*/
function showF(){
  fetch('http://api.openweathermap.org/data/2.5/weather?q=' + addPlace + '&units=imperial&APPID=69190f2d7f60d5551b77187e81d50575')
    .then(eks=> eks.json())
      .then(data=> {
      document.getElementById('siteName').style.display = 'none';
      document.getElementById('locId').style.display = 'block';
      if (data.cod == 404){
        alert('Please, only enter place names on eglish language.');
      } else if (data.name.length > 10){
        document.getElementById('locId').style.fontSize = '35px';
      };
      if (data.name.length <= 10) {document.getElementById('locId').style.fontSize = '50px'}
      var cityLat1 = data.coord.lat, cityLong1 = data.coord.lon;
      fetch("https://maps.googleapis.com/maps/api/timezone/json?location=" + cityLat1 + "," + cityLong1 + "&timestamp=1331161200&key=AIzaSyDQYoYpB-CyL4Leg5IWW1pT0afaVD9z4J0")
      .then(timeZon =>  timeZon.json())
      .then(tmZon=> {
          updateTime();
          function updateTime(){
          var timeDiv = document.getElementById("date2"), sitNam = document.getElementById('siteName'), myInt = null;
          timeDiv.innerHTML = '';
          document.getElementById("date1").style.display = 'none';
          document.getElementById("date2").style.display = 'block';
          timeDiv.innerHTML = "Loading data... <img src='images/Spinner-1.4s-76px.gif'/>";
          myInt = setInterval(() => { 
          var date = new Date().toLocaleString("en-US", {timeZone: tmZon.timeZoneId}),  dateExp = date;
          let dateDay = new Date().toLocaleString("en-US", {timeZone: tmZon.timeZoneId, weekday: 'long'});
          var putSliced0 = dateExp.slice(10, dateExp.length - 2), putSliced1 = dateExp.slice(dateExp.length - 2) == "PM" ? 'PM' : "AM";
          var finalTm = putSliced0 + putSliced1
          var dt0 = moment(String(finalTm), "h:mm:ss A").format("HH:mm:ss"), dt11 = moment(String(finalTm), 'h:mm:ss A').format('MMMM Do YYYY');
          timeDiv.innerHTML = dt11 + " " + `<p class='newClassNow'>${dt0}</p>` + " " + `<p id='stDay2'>${dateDay}</p>`
          document.getElementById("date2").style.display = 'block';
          document.getElementById("date1").style.display = 'none';
          document.getElementById("date3").style.display = 'none';
          }, 1000);
         sitNam.addEventListener('keydown', e => {
          if(e.keyCode == 13){
             window.clearInterval(myInt);
            insDivAr.forEach(el => document.getElementById('insideDiv' + el + 'Ent').innerHTML = '' );
          }
         });
          }
        })
      var storeJson = data,  tempSwap = false,  icon = storeJson.weather[0].icon
      $('#countryFlag').html(`<img class='flagIdImg' src="http://www.countryflags.io/${storeJson.sys.country.toLowerCase()}/shiny/64.png">`)
      var iconSrc = "http://openweathermap.org/img/w/" + icon + ".png", storeIcon = `<img id ='iconIcon' src=${iconSrc}>`
      $("#locId").html(`${storeJson.name},   ${storeJson.sys.country}`);
      $("#storeDes").html(`${storeJson.weather[0].main} (<span id ='bracketsDes'> ${storeJson.weather[0].description} </span>) <span id='iconDesId'> ${storeIcon}</span>`);
      $("#storeTemp").html(`Temperature is: <span class='tempValId'> &nbsp; ${storeJson.main.temp.toFixed(1)} &#x2109; &nbsp;</span>`);
      var storeWindRes = storeJson.wind.speed * 0.44704, windData = storeJson.wind.deg;
      $("#storeWind").html(`Wind Blow:&nbsp;<span id ='windVal'> ${storeWindRes.toFixed(2)}&nbsp;m/s </span> `);
      $('#storeWind').append(`&nbsp;&nbsp;<span class='redLineC'>|</span>`);
      $('#storeWind').append(`&nbsp;&nbsp; Wind direction:&nbsp <span id ='windDirVal'> ${windDirect(windData)} </span>`);
      var humidData1 = storeJson.main.humidity, pressData1 = storeJson.main.pressure, takeClouds = storeJson.clouds.all;
      var takeVisibl = storeJson.visibility != undefined ? storeJson.visibility + "m" : `<img src="images/no-waiting.png"/>`
      $('#humid').html(`Humidity:&nbsp <span id ='windDirVal'>${humidData1}&#37 </span>`);
      $('#humid').append(`&nbsp;&nbsp;<span class='redLineC'>|</span>`);
      $('#humid').append(`&nbsp;&nbsp; Pressure:&nbsp <span id='windDirVal'>${pressData1} mb</span>`)
      $('#maxMin').html(`Cloudiness:&nbsp; <span class='cloudS'>${takeClouds}&#37</span>`)
      $('#maxMin').append(`&nbsp;&nbsp;<span class='redLineC'>|</span>`);
      $('#maxMin').append(`&nbsp;&nbsp; Visibility:&nbsp; <span class='cloudS'>${takeVisibl}</span>`)

      function windDirect(degree){
        if (degree > 337.5) return 'Northerly';
        if (degree > 292.5) return 'North Westerly';
        if (degree > 247.5) return 'Westerly';
        if (degree > 202.5) return 'South Westerly';
        if (degree > 157.5) return 'Southerly';
        if (degree > 122.5) return 'South Easterly';
        if (degree > 67.5) return 'Easterly';
        if (degree > 22.5) { return 'North Easterly'}
        return 'Northerly';
      };
      var tempRoot = (storeJson.main.temp).toFixed(1);
      btn1.addEventListener("click", () => {
        if (tempSwap === false) {
          $("#storeTemp").html(storeFunc(tempRoot));
          tempSwap = true;
        } else {
          $("#storeTemp").html(`Temperature is:&nbsp; <span class ='tempValId'> &nbsp; ${tempRoot} &#x2109; &nbsp;</span>`);
          document.getElementById("btn1").value = "Switch F/C";
          tempSwap = false;
        };
      });
      glyId.addEventListener("click", () => {
        if(tempSwap === false) {
          $("#storeTemp").html(storeFunc(tempRoot));
          tempSwap = true;
        }else {
          $("#storeTemp").html(`Temperature is:&nbsp;<span class='tempValId'>&nbsp; ${tempRoot} &#x2109; &nbsp;</span>`);
          document.getElementById("btn1").value = "Switch F/C";
          tempSwap = false;
        };
      });
      var storeFunc = function f2c(f) {
        var num = ((f - 32) * (5 / 9))
        document.getElementById("btn1").value = "Switch C/F";
        return `Temperature is:&nbsp;<span class ='tempValId'> &nbsp; ${num.toFixed(1)} &#8451 &nbsp;</span>`;
      }
    }).then(()=> {
      fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + addPlace + '&units=imperial&APPID=69190f2d7f60d5551b77187e81d50575')
        .then(function (ajax){return ajax.json()})
        .then(data1 => {
          var cityLat = String(data1.city.coord.lat), cityLong = String(data1.city.coord.lon);
          fetch('http://api.geonames.org/wikipediaSearchJSON?q=' + data1.city.name + '&maxRows=10&username=vladan992')
            .then(geoGeo =>  geoGeo.json())
            .then(geoRes => {
              var takeIt = geoRes.geonames, sLat = cityLat.slice(0, 5), sLon = cityLong.slice(0, 5)
              for (var e = 0; e < 10; e++) {
                if (String(takeIt[e].lat).slice(0, 5) == sLat || String(takeIt[e].lng).slice(0, 5) == sLon) {
                  console.log('eee', takeIt[0].summary)
                  document.getElementById('shortInfo').innerHTML = takeIt[0].summary.slice(0, takeIt[e].summary.length - 5) +
                  `<a class='showInfoHref' href=https://${takeIt[0].wikipediaUrl} target=_blank>&nbsp; <i class='fa fa-external-link'></i></a>`;
                }
              }
            })

          fetch('https://api.sunrise-sunset.org/json?lat=' + cityLat + '&lng=' +  cityLong)
            .then(SunriseSunSet =>  SunriseSunSet.json())
            .then(aboutSun=> {
              var snRs = aboutSun.results, takeRise1 = snRs.sunrise, takeSet1 = snRs.sunset, takeDayU1 = snRs.day_length
              insDivAr.forEach(el => document.querySelector("#insideDiv" + el).style.display ='none')

              $('#sunSetRise').html(`Sunrise:&nbsp; <span class='sunIdNew'>${takeRise1}</span>`);
              $('#sunSetRise').append(`&nbsp;&nbsp;<span class='redLineC'>|</span>`);
              $('#sunSetRise').append(`&nbsp;&nbsp; Sunset:&nbsp; <span class ='sunIdNew'>${takeSet1}</span>`);
              $('#dayLastUv').html(`Day length:&nbsp; <span class='dayUv'>${takeDayU1}</span>`);
              $('#dayLastUv').append(`&nbsp;&nbsp;<span class='redLineC'>|</span>`);
              fetch("http://api.openweathermap.org/data/2.5/uvi?appid=69190f2d7f60d5551b77187e81d50575&lat=" + cityLat + "&lon=" + cityLong)
                .then(uvInd1=> {
                uvInd1.json()
                .then(holdVal => $('#dayLastUv').append(`&nbsp;&nbsp; UVindex:&nbsp; <span id ='raceIt'>${holdVal.value}</span>`) )
                })
              var storeLocId = document.getElementById('locId'),  hipLn = "http://openweathermap.org/img/w/", spn6 = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp"
              storeLocId.title = `LAT: ${cityLat}   LON: ${cityLong}`;
              var storeFunc = function f2c(f){
              var num = ((f - 32) * (5 / 9));
              return num.toFixed(1);
              };


              var storeTempK = data1.list[3].main.temp, storeTempK1 = data1.list[6].main.temp;
              var storeCalled = (storeFunc(storeTempK).charAt(0) == '-') ? storeFunc(storeTempK) : '&nbsp;' + storeFunc(storeTempK)
              var storeCalled1 = storeFunc(storeTempK1).charAt(0) == '-' ? storeFunc(storeTempK1) : '&nbsp;' + storeFunc(storeTempK1)
              $('#insideDiv1').html(" <br> " + data1.list[3].dt_txt + `<span class ='arrowSymb'>&nbsp;  &#x2771;&#x2771;&#x2771; </span>` + "&nbsp;&nbsp;" + `<span class='styleVal5'> ${storeCalled} °C </span>` + " &nbsp;&nbsp; - " + data1.list[3].weather[0].description + " - Wind: " + `<span> ${data1.list[3].wind.speed}&nbsp;m/s</span>` + '<br> ' + "" + data1.list[6].dt_txt + `<span class ='arrowSymb'>&nbsp;  &#x2771;&#x2771;&#x2771; </span>` + "&nbsp;&nbsp;" + `<span class ='styleVal5'> ${storeCalled1} °C </span>` + " &nbsp;&nbsp; - " + data1.list[6].weather[0].description + "      - Wind: " + `<span> ${data1.list[6].wind.speed}&nbsp;m/s</span>`);
              var icon1 = data1.list[3].weather[0].icon, icon2 = data1.list[6].weather[0].icon;
              var iconSrc = hipLn + icon1 + ".png", iconSrc2 = hipLn + icon2 + ".png";
              $("#insideDiv3Ent").prepend('<img src=' + iconSrc + '>' + spn6 + " <img src =" + iconSrc2 + ">");

              var storeTempK11 = data1.list[11].main.temp, storeTempK111 = data1.list[14].main.temp;
              var storeCalledALOBRE = storeFunc(storeTempK11).charAt(0) == '-' ? storeFunc(storeTempK11) : '&nbsp;' + storeFunc(storeTempK11)
              var storeCalledALO = storeFunc(storeTempK111).charAt(0) == '-' ? storeFunc(storeTempK111) : '&nbsp;' + storeFunc(storeTempK111)
              $('#insideDiv11').html(" <br> " + data1.list[11].dt_txt + `<span class ='arrowSymb'>&nbsp;  &#x2771;&#x2771;&#x2771; </span>` + "&nbsp;&nbsp;" + `<span class='styleVal5'> ${storeCalledALOBRE} °C </span>` + " &nbsp;&nbsp;  -  " + data1.list[11].weather[0].description + " - Wind:  " + `<span> ${data1.list[11].wind.speed}&nbsp;m/s</span>` + " <br> " + data1.list[14].dt_txt + `<span class ='arrowSymb'>&nbsp;  &#x2771;&#x2771;&#x2771; </span>` + "&nbsp;&nbsp;" + `<span class ='styleVal5'> ${storeCalledALO} °C </span>` + " &nbsp;&nbsp; - " + data1.list[14].weather[0].description + "      - Wind: " + `<span> ${data1.list[14].wind.speed}&nbsp;m/s</span>`)
              var icon11 = data1.list[11].weather[0].icon, icon22 = data1.list[14].weather[0].icon;
              var iconSrc11 = hipLn + icon11 + ".png", iconSrc22 = hipLn + icon22 + ".png";
              $("#insideDiv33Ent").prepend('<img src=' + iconSrc11 + '>' + spn6 + " <img src =" + iconSrc22 + ">");
              
              var storeTempK0 = data1.list[19].main.temp;
              var storeCalled0 = storeFunc(storeTempK0).charAt(0) == '-' ? storeFunc(storeTempK0) : '&nbsp;' + storeFunc(storeTempK0)
              var storeTempK00 = data1.list[22].main.temp;
              var storeCalled00 = storeFunc(storeTempK00).charAt(0) == '-' ? storeFunc(storeTempK00) : '&nbsp;' + storeFunc(storeTempK00)
              $('#insideDiv0').html("<br>" + data1.list[19].dt_txt + `<span class ='arrowSymb'>&nbsp;  &#x2771;&#x2771;&#x2771; </span>` + "&nbsp;&nbsp;" + `<span class ='styleVal5'> ${storeCalled0} °C </span>` + " &nbsp;&nbsp; -  " + data1.list[19].weather[0].description + " - Wind:  " + `<span id> ${data1.list[19].wind.speed}&nbsp;m/s</span>` + " <br> " + data1.list[22].dt_txt + `<span class='arrowSymb'>&nbsp;  &#x2771;&#x2771;&#x2771; </span>` + "&nbsp;&nbsp;" + `<span class ='styleVal5'> ${storeCalled00} °C </span>` + " &nbsp;&nbsp; - " + data1.list[22].weather[0].description + "    - Wind: " + `<span> ${data1.list[22].wind.speed}&nbsp;m/s</span>`);
              var icon0 = data1.list[19].weather[0].icon, icon01 = data1.list[22].weather[0].icon;
              var iconSrc01 = hipLn + icon0 + ".png", iconSrc02 =hipLn + icon01 + ".png";          
              $("#insideDiv02Ent").prepend('<img src=' + iconSrc01 + '>' + spn6 + " <img src =" + iconSrc02 + ">");
              
              //
              var storeTempCETVRTI = data1.list[27].main.temp;
              var storeCalledCET = storeFunc(storeTempCETVRTI).charAt(0) == '-' ? storeFunc(storeTempCETVRTI) : '&nbsp;' + storeFunc(storeTempCETVRTI);
              var storeTempCETVRTI1 = data1.list[30].main.temp;
              var storeCalledCET1 = storeFunc(storeTempCETVRTI1).charAt(0) == '-' ? storeFunc(storeTempCETVRTI1) : '&nbsp;' + storeFunc(storeTempCETVRTI1);
              $('#insideDivCET').html("<br>" + data1.list[27].dt_txt + `<span class ='arrowSymb'>&nbsp;  &#x2771;&#x2771;&#x2771; </span>` + "&nbsp;&nbsp;" + `<span class='styleVal5'> ${storeCalledCET}°C  </span>` + " &nbsp;&nbsp; -  " + data1.list[27].weather[0].description + " - Wind:  " + `<span> ${data1.list[27].wind.speed}&nbsp;m/s</span>` + " <br> " + data1.list[30].dt_txt + `<span class ='arrowSymb'>&nbsp;  &#x2771;&#x2771;&#x2771; </span>` + "&nbsp;&nbsp;" + `<span class ='styleVal5'> ${storeCalledCET1} °C </span>` + " &nbsp;&nbsp; - " + data1.list[30].weather[0].description + "    - Wind: " + `<span> ${data1.list[30].wind.speed}&nbsp;m/s</span>`);
              var iconCET1 = data1.list[27].weather[0].icon, iconCET2 = data1.list[30].weather[0].icon;
              var iconSrcCET = hipLn + iconCET1 + ".png", iconSrcCET011 = hipLn + iconCET2 + ".png";
              $("#insideDivCET2Ent").prepend('<img src=' + iconSrcCET + '>' + spn6 + " <img src =" + iconSrcCET011 + ">");

              var storeTempPETI = data1.list[35].main.temp, storeTempPETI1 = data1.list[37].main.temp;
              var storeCalledPET = storeFunc(storeTempPETI).charAt(0) == '-' ? storeFunc(storeTempPETI) : '&nbsp;' + storeFunc(storeTempPETI);
              var storeCalledPET1 = storeFunc(storeTempPETI1).charAt(0) == '-' ? storeFunc(storeTempPETI1) : '&nbsp;' + storeFunc(storeTempPETI1);
              $('#insideDivPET').html("<br>" + data1.list[35].dt_txt + `<span class='arrowSymb'>&nbsp;  &#x2771;&#x2771;&#x2771; </span>` + "&nbsp;&nbsp;" + `<span class ='styleVal5'> ${storeCalledPET}°C  </span>` + " &nbsp;&nbsp; -  " + data1.list[35].weather[0].description + " - Wind:  " + `<span> ${data1.list[35].wind.speed}&nbsp;m/s</span>` + " <br> " + data1.list[37].dt_txt + `<span class ='arrowSymb'>&nbsp;  &#x2771;&#x2771;&#x2771; </span>` + "&nbsp;&nbsp;" + `<span class ='styleVal5'> ${storeCalledPET1} °C </span>` + " &nbsp;&nbsp; - " + data1.list[37].weather[0].description + "    - Wind: " + `<span> ${data1.list[37].wind.speed}&nbsp;m/s</span>`);
              var iconPET1 = data1.list[35].weather[0].icon, iconPET2 = data1.list[37].weather[0].icon;
              var iconSrcPET = hipLn + iconPET1 + ".png", iconSrcPET011 = hipLn + iconPET2 + ".png";
              $("#insideDivPET2Ent").prepend('<img src=' + iconSrcPET + '>' + spn6 + " <img src =" + iconSrcPET011 + ">");

              return [cityLat, cityLong]
            }).then(oneArr => {
              document.getElementById('mapid3').style.display = 'block';
              document.getElementById('storeMap').children[0].src = "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d90588.96404060595!2d" + oneArr[1] + "!3d" + oneArr[0] + "!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ssr!2srs!4v1497371916951";
              callNowWithDiff(oneArr[0], oneArr[1])
            })
        })
    }) //then
}