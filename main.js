
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
    callNow();
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

let markLat= [44.816459,44.831891,44.822882,44.818986,44.814906,44.797246,44.799846,44.790364,44.802545,44.810918,44.828376,44.801346,44.8083,44.741856,44.864379]
let markLon = [20.460835,20.435944,20.449848, 20.294838,20.448732,20.42573,20.436177, 20.409937,20.440793,20.44767,20.491916,20.439154, 20.488526,20.319353,20.381114]
let urlW = ['Republic_Square_(Belgrade)','Great_War_Island','Belgrade_Fortress','Belgrade_Nikola_Tesla_Airport','Branko%27s_Bridge','Ada_Bridge','New_Railway_Bridge','Ada_Ciganlija','Gazela_Bridge','Old_Sava_Bridge','Pan%C4%8Devo_Bridge','Old_Railway_Bridge','Belgrade_New_Cemetery','Ostru%C5%BEnica_Bridge','Pupin_Bridge']; 
for(let r=0; r < markLat.length; r++){
L.marker([markLat[r], markLon[r]]).addTo(mymap).bindPopup(`<br><b><a href='https://en.wikipedia.org/wiki/${urlW[r]}' target='_blank'>${decodeURI(urlW[r].split('_').join(' '))}</a></b>`)
}

var circle = L.circle([44.7950478,20.4394765,17.71],{
    color: '#8CB240',
    fillColor: '#8CB240',
    fillOpacity: 0.3,
    radius: 8500
}).addTo(mymap);
    fetch('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20in%20(%27http%3A%2F%2Fwww.beograd.rs%2Flat%2Frss%2F%27)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
    .then((beogradNewsRS)=> {
      return beogradNewsRS.json()  
    })
    .then(beogradRS=>{
      console.log('BG RSS feed:',beogradRS);
        for(var i = 0; i < beogradRS.query.count; i++){ 
                 var dataR = beogradRS.query.results.item[i];
                 var storeTitle = dataR.title;
                 var storeLink = dataR.link;
                 var storeText = dataR.description;
                 var storeDate = dataR.pubDate;
                 var momDate = storeDate.split('.').reverse();
                 var myDays = 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday';
                 localStorage.setItem('dayW',myDays);
                 takeWeek = localStorage.getItem('dayW').split(',');
                 var dow = takeWeek[moment(momDate.join('-').slice(1)).day()]
                 var storeImageUse = storeText.match(/"http[^\s]+ /);
                 var myImage = storeImageUse[0];
                 var myFinImage = myImage.charAt(myImage.length -4).toLowerCase() != 'p' ? 'images/images.png' :  myImage;
                 var storeTextPart = '&#x2014;' +  '&nbsp;' + storeText.slice(200, storeText.length - 8);
                 var storeHref = String(storeLink);
                $('#carousel-example-generic').carousel({
                interval: 10000
                });
                document.getElementsByClassName('itembeg')[i].children[0].innerHTML = `<h4 id =titleId1> <span title='Belgrade news from beograd.rs'><i  id='titleIcnId1' class="fa fa-newspaper-o"></i></span>
                <a id='titleId1' href=${storeHref} target = '_blank'> ${storeTitle}  </h4> </a>` + `<img title = "${storeTitle}" src = ${myFinImage}  id =imgId1>` 
                +  "<p id = partTxt>"  +  `<span id =dateId1>  ${dow}, ${storeDate} </span>` +  storeTextPart +  `<a id =aHrefId1 href =${storeHref} target = blank>&nbsp;...&nbsp;Detailed<a/>`     +  "</p>"               
                document.getElementById('hitPlease1').style.display = 'block';
       }
    })
    fetch('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20in%20(%27https%3A%2F%2Fwww.blic.rs%2Frss%2FVesti%2FBeograd%27)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')        
        .then((blicFeed) => {
            return blicFeed.json();
        })
        .then((blicRSS)=> {
            for(let i = 0; i <= 41; i++){
                let d =  blicRSS.query.results.item[i];
                var storeTitle1   =  d.title;
                var storeLink1    =  d.link;
                var storeText1    = `&#x2014; &nbsp;d.description`;
                var storeDate1    =  d.pubDate;
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
  
      

      





