
function show(shown, hidden, hidden1, hidden2, hidden3){ 
  document.getElementById(shown).style.display  = 'block';
  if(shown == 'Page1'){
  document.querySelector('#navA5').style.backgroundColor = "#dcdccb"
  document.querySelector('#navA3').style.backgroundColor = '';
  document.querySelector('#navA1').style.backgroundColor = '';
  document.querySelector('#navA4').style.backgroundColor = '';
  document.querySelector('#navA2').style.backgroundColor = '';
  document.querySelector('#navA5').style.borderBottom = '3px solid #8CB240'
  document.querySelector('#navA3').style.borderBottom = ''
  document.querySelector('#navA1').style.borderBottom = ''   
  document.querySelector('#navA4').style.borderBottom = ''
  document.querySelector('#navA2').style.borderBottom = '';
}else if(shown == 'Page2'){
  document.querySelector('#navA5').style.backgroundColor = ""
  document.querySelector('#navA3').style.backgroundColor = '#dcdccb';
  document.querySelector('#navA1').style.backgroundColor = '';
  document.querySelector('#navA4').style.backgroundColor = '';
  document.querySelector('#navA2').style.backgroundColor = '';
  document.querySelector('#navA3').style.borderBottom = '3px solid #8CB240'
  document.querySelector('#navA4').style.borderBottom = ''
  document.querySelector('#navA1').style.borderBottom = ''   
  document.querySelector('#navA5').style.borderBottom = ''
  document.querySelector('#navA2').style.borderBottom = '';
}else if(shown == 'Page3'){
    document.querySelector('#navA3').style.backgroundColor = '';
    document.querySelector('#navA5').style.backgroundColor = '';
    document.querySelector('#navA4').style.backgroundColor = '#dcdccb';
    document.querySelector('#navA1').style.backgroundColor = '';
    document.querySelector('#navA2').style.backgroundColor = '';
    document.querySelector('#navA4').style.borderBottom = '3px solid #8CB240'
    document.querySelector('#navA3').style.borderBottom = ''
    document.querySelector('#navA1').style.borderBottom = ''   
    document.querySelector('#navA5').style.borderBottom = '' 
    document.querySelector('#navA2').style.borderBottom = '';
}else if(shown == 'Page4'){
    document.querySelector('#navA4').style.backgroundColor = '';
    document.querySelector('#navA3').style.backgroundColor = '';
    document.querySelector('#navA5').style.backgroundColor = '';
    document.querySelector('#navA1').style.backgroundColor = '#dcdccb'
    document.querySelector('#navA2').style.backgroundColor = '';
    document.querySelector('#navA1').style.borderBottom = '3px solid #8CB240'
    document.querySelector('#navA3').style.borderBottom = ''
    document.querySelector('#navA5').style.borderBottom = ''   
    document.querySelector('#navA4').style.borderBottom = '' 
    document.querySelector('#navA2').style.borderBottom = '';
}else if(shown == 'Page5'){
    document.querySelector('#navA4').style.backgroundColor = '';
    document.querySelector('#navA3').style.backgroundColor = '';
    document.querySelector('#navA5').style.backgroundColor = '';
    document.querySelector('#navA1').style.backgroundColor = ''
    document.querySelector('#navA2').style.backgroundColor = '#dcdccb';
    document.querySelector('#navA1').style.borderBottom = ''
    document.querySelector('#navA3').style.borderBottom = ''
    document.querySelector('#navA5').style.borderBottom = ''   
    document.querySelector('#navA4').style.borderBottom = '' 
    document.querySelector('#navA2').style.borderBottom = '3px solid #8CB240';
}
  document.getElementById(hidden).style.display   ='none';
  document.getElementById(hidden1).style.display  ='none';
  document.getElementById(hidden2).style.display  ='none';
  document.getElementById(hidden3).style.display  ='none';
  return false;
}

function myFunction(){
    var x = document.getElementById("myTopnav");
       x.className = "topnav";
        var xx = document.getElementsByClassName('glyphicon-triangle-bottom')
    xx.className = ''
    xx.className = 'glyphicon-triangle-top'

     if (x.className === "topnav") {
        x.className += " responsive topnav myTopnav";
    }
}

 var mymap = L.map('mapid').setView([44.787197, 20.457273], 11);
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZG92bGExOTkyIiwiYSI6ImNqZnM0aG9nMzAwYWMycXA5OHlra2dnc2YifQ.0jZcVmYULoRh9DZewROQOA', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com" target="_blank">Mapbox</a>',
    maxZoom: 18,
    id:  'mapbox.light',
    accessToken: 'pk.eyJ1IjoiZG92bGExOTkyIiwiYSI6ImNqZnM0aG9nMzAwYWMycXA5OHlra2dnc2YifQ.0jZcVmYULoRh9DZewROQOA'
}).addTo(mymap);


function onMapClick(e){
    console.log("You clicked the map at " + e.latlng);
};
mymap.on('click', onMapClick);
var marker   = L.marker([44.816459, 20.460835]).addTo(mymap);
var marker1  = L.marker([44.831891, 20.435944]).addTo(mymap)
var marker2  = L.marker([44.822882, 20.449848]).addTo(mymap)
var marker3  = L.marker([44.818986, 20.294838]).addTo(mymap)
var marker4  = L.marker([44.814906, 20.448732]).addTo(mymap)
var marker5  = L.marker([44.797246, 20.42573]).addTo(mymap)
var marker6  = L.marker([44.799846, 20.436177]).addTo(mymap)
var marker7  = L.marker([44.790364, 20.409937]).addTo(mymap)
var marker8  = L.marker([44.802545, 20.440793]).addTo(mymap)
var marker9  = L.marker([44.810918, 20.44767]).addTo(mymap)
var marker10 = L.marker([44.828376, 20.491916]).addTo(mymap)
var marker11 = L.marker([44.801346, 20.439154]).addTo(mymap)
var marker12 = L.marker([44.8083, 20.488526]).addTo(mymap)
var marker13 = L.marker([44.741856, 20.319353]).addTo(mymap)
var marker14 = L.marker([44.864379, 20.381114]).addTo(mymap)
var circle   = L.circle([44.7950478,20.4394765,17.71], {
    color: '#8CB240',
    fillColor: '#8CB240',
    fillOpacity: 0.3,
    radius: 8500
}).addTo(mymap);
marker.bindPopup("<br><b><a href='https://en.wikipedia.org/wiki/Republic_Square_(Belgrade)' target='_blank'>Republic Square</a></b>")
marker1.bindPopup('<b><a href="https://en.wikipedia.org/wiki/Great_War_Island" target="_blank">Great War Island</a></b>')
marker2.bindPopup("<b><a href='https://en.wikipedia.org/wiki/Belgrade_Fortress' target='_blank'>Belgrade Fortress</a></b>")
marker3.bindPopup("<b><a href='https://en.wikipedia.org/wiki/Belgrade_Nikola_Tesla_Airport' target='_blank'>Belgrade Nikola Tesla Airport</a></b>")
marker4.bindPopup("<b><a href='https://en.wikipedia.org/wiki/Branko%27s_Bridge' target='_blank'>Branko's bridge</a></b>")
marker5.bindPopup("<b><a href='https://en.wikipedia.org/wiki/Ada_Bridge' target='_blank'>Ada Bridge</a></b>")
marker6.bindPopup("<b><a href='https://en.wikipedia.org/wiki/New_Railway_Bridge' target='_blank'>New Railway Bridge</a></b>")
marker7.bindPopup("<b><a href='https://en.wikipedia.org/wiki/Ada_Ciganlija' target='_blank'>Ada Ciganlija</a></b>")
marker8.bindPopup("<b><a href='https://en.wikipedia.org/wiki/Gazela_Bridge' target='_blank'>Gazela Bridge</a></b>")
marker9.bindPopup("<b><a href='https://en.wikipedia.org/wiki/Old_Sava_Bridge' target='_blank'>Old Sava Bridge</a></b>")
marker10.bindPopup("<b><a href='https://en.wikipedia.org/wiki/Pan%C4%8Devo_Bridge' target='_blank'>Pančevo Bridge</a></b>")
marker11.bindPopup("<b><a href='https://en.wikipedia.org/wiki/Old_Railway_Bridge' target='_blank'>Old Railway Bridge</a></b>")
marker12.bindPopup("<b><a href='https://en.wikipedia.org/wiki/Belgrade_New_Cemetery' target='_blank'>Belgrade New Cemetery</a></b>")
marker13.bindPopup("<b><a href='https://en.wikipedia.org/wiki/Ostru%C5%BEnica_Bridge' target='_blank'>Ostružnica Bridge</a></b>")
marker14.bindPopup("<b><a href='https://en.wikipedia.org/wiki/Pupin_Bridge' target='_blank'>Pupin Bridge</a></b>")

    var myHeaders = new Headers();
    var myInit = { 
                  method: 'GET',
                  headers: myHeaders,
                  mode: 'cors',
                  cache: 'default' 
                 };
    var myRequest = new Request('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20in%20(%27http%3A%2F%2Fwww.beograd.rs%2Flat%2Frss%2F%27)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys');
    fetch(myRequest, myInit)
    .then((beogradNewsRS) => {
      return beogradNewsRS.json()  
    })
    .then(beogradRS => {
      console.log('BG sajt RSS feed:',beogradRS);
        for(var i = 0; i < beogradRS.query.count; i++){ 
                 var dataR = beogradRS;
                 var storeTitle = dataR.query.results.item[i].title;
                 var storeLink = dataR.query.results.item[i].link;
                 var storeText = dataR.query.results.item[i].description;
                 var storeDate = dataR.query.results.item[i].pubDate;
                 var momDate = storeDate.split('.').reverse();

                 var myDays = 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday';
                 localStorage.setItem('dayW',myDays );
                 takeWeek = localStorage.getItem('dayW').split(',');
                /*if(!takeWeek){
                    takeWeekIE = myDays.split(',')
                    var dow = takeWeekIE[moment(momDate.join('-').slice(1)).day()]
        };*/

                 var dow = takeWeek[moment(momDate.join('-').slice(1)).day()]  /*moment fine code*/
                 var storeImageUse = storeText.match(/"http[^\s]+ /);
                 var myImage = storeImageUse[0];
                 var myFinImage = myImage.charAt(myImage.length -4).toLowerCase() != 'p' ? 'images/images.png' :  myImage;
                 var storeTextPart = '&#x2014;' +  '&nbsp;' + storeText.slice(200, storeText.length - 8);
                 var firstCh = storeText.slice(200,201);
                 var storeHref = String(storeLink);
                $('#carousel-example-generic').carousel({
                interval: 10000
                });
                 document.getElementsByClassName('itembeg')[i].children[0].innerHTML = ` <h4 id =titleId1> <span title='Belgrade news from beograd.rs'><i  id='titleIcnId1' class="fa fa-newspaper-o"></i></span>
                  <a id='titleId1' href=${storeHref} target = '_blank'> ${storeTitle}  </h4> </a>` + `<img title = "${storeTitle}" src = ${myFinImage}  id =imgId1>` 
                   +  "<p id = partTxt>"  +  `<span id =dateId1>  ${dow}, ${storeDate} </span>` +  storeTextPart +  `<a id =aHrefId1 href =${storeHref} target = blank>&nbsp;...&nbsp;Detailed<a/>`     +  "</p>"               
                   document.getElementById('hitPlease1').style.display = 'block';
       }
    })
    fetch('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20in%20(%27https%3A%2F%2Fwww.blic.rs%2Frss%2FVesti%2FBeograd%27)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')        
        .then((blicFeed) => {
            return blicFeed.json();
        })
        .then((blicRSS) => {
            console.log("BLIC FEED:", blicRSS);
            for(let i = 0; i <= 41; i++){
                var storeTitle1   =  blicRSS.query.results.item[i].title;
                var storeLink1    =  blicRSS.query.results.item[i].link;
                var storeText1    =   '&#x2014;' +  '&nbsp;' + blicRSS.query.results.item[i].description;
                var storeDate1    =  blicRSS.query.results.item[i].pubDate;
                var storeDatePart1 =  storeDate1.slice(0, storeDate1.length - 23);
                var storeDatePart2 =  storeDate1.slice(storeDate1.length - 23, storeDate1.length - storeDate1.length - 15);
                var storeHref1    =  String(storeLink1);
               $('#myCarousel').carousel({
                interval: 5000
                })  
              document.getElementsByClassName('itemId2')[i].children[0].innerHTML = `&nbsp;&nbsp;<h4 id =titleId1><span><i title='Belgrade news from blic.rs' id='titleIcnId2' class="fas fa-newspaper"></i></span>
             <a id ='titleId1' href = ${storeHref1} target = '_blank'>
            ${storeTitle1} &nbsp;</a></h4><br>
               &nbsp;&nbsp;&nbsp;&nbsp; <p id = 'partTxt1'>  <span id =dateId1> ${storeDatePart1}   </span> <span id='dateIdSl2'>&nbsp; ${storeDatePart2}  </span>${storeText1}<a id ='titleId1' href = ${storeHref1} target = '_blank'>
               <i id ='glyId2' class="fa fa-external-link"></i></a></p> ` 
              document.getElementById('fourSquareId').style.display = 'block';
            }
        })
  
      

      





