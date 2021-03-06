 
 let mymap, mymap1, allNav = ['navA5', 'navA3', 'navA4', 'navA1', 'navA2'], bG = 'Belgrade'
 let tileLay = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZG92bGExOTkyIiwiYSI6ImNqZnM0aG9nMzAwYWMycXA5OHlra2dnc2YifQ.0jZcVmYULoRh9DZewROQOA', tknMap = 'pk.eyJ1IjoiZG92bGExOTkyIiwiYSI6ImNqZnM0aG9nMzAwYWMycXA5OHlra2dnc2YifQ.0jZcVmYULoRh9DZewROQOA'
 let attrLnk = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com" target="_blank">Mapbox</a>'
 let markLat = [816459, 831891, 822882, 818986, 814906, 797246, 799846, 790364, 802545, 810918, 828376, 801346, 8083, 741856, 864379],  markLon = [460835, 435944, 449848, 294838, 448732, 42573, 436177, 409937, 440793, 44767, 491916, 439154, 488526, 319353, 381114]
 let urlW = [`Republic_Square_${bG}`, 'Great_War_Island', `${bG}_Fortress`, `${bG}_Nikola_Tesla_Airport`, 'Branko%27s_B', 'Ada_B', 'New_Railway_B', 'Ada_Ciganlija', 'Gazela_B', 'Old_Sava_B', 'Pan%C4%8Devo_B', 'Old_Railway_B', `${bG}_New_Cemetery`, 'Ostru%C5%BEnica_B', 'Pupin_B'];
 let myDays = 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday',  myMont = 'January, February, March, April, May, June, July, August, September, October, November, December';



 function whatPg(){
     if (localStorage.getItem('visbPg') != null) {
         document.getElementById('Page1').style.display = 'none';
         document.getElementById(localStorage.getItem('visbPg')).style.display = 'block';
         document.getElementById(localStorage.getItem('thisNav')).style.backgroundColor = '#dcdccb';
         document.getElementById(localStorage.getItem('thisNav')).style.borderBottom = '3px solid #8CB240';
     }
 };
 whatPg();
 callMapboxDiff();



 function show(thisNav, shown) {
     document.getElementById(shown).style.display = 'block';
     localStorage.setItem('visbPg', shown);
     if (shown == 'Page1') {
         callMapbox();
         callMapboxDiff();
         allNav.forEach(nav=> {
             document.getElementById(nav).style.backgroundColor = '';
             document.getElementById(nav).style.borderBottom = '';
         })
         document.getElementById(thisNav).style.backgroundColor = "#dcdccb"
         document.getElementById(thisNav).style.borderBottom = '3px solid #8CB240'
     } else if (shown == 'Page2') {
         allNav.forEach(nav => {
             document.getElementById(nav).style.backgroundColor = '';
             document.getElementById(nav).style.borderBottom = '';
         })
         document.getElementById(thisNav).style.backgroundColor = "#dcdccb"
         document.getElementById(thisNav).style.borderBottom = '3px solid #8CB240'
     } else if (shown == 'Page3') {
         allNav.forEach(nav => {
             document.getElementById(nav).style.backgroundColor = '';
             document.getElementById(nav).style.borderBottom = '';
         })
         document.getElementById(thisNav).style.backgroundColor = "#dcdccb"
         document.getElementById(thisNav).style.borderBottom = '3px solid #8CB240'
     } else if (shown == 'Page4') {
         callNow();
         allNav.forEach(nav => {
             document.getElementById(nav).style.backgroundColor = '';
             document.getElementById(nav).style.borderBottom = '';
         })
         document.getElementById(thisNav).style.backgroundColor = "#dcdccb"
         document.getElementById(thisNav).style.borderBottom = '3px solid #8CB240'
     } else if (shown == 'Page5') {
         allNav.forEach(nav => {
             document.getElementById(nav).style.backgroundColor = '';
             document.getElementById(nav).style.borderBottom = '';
         })
         document.getElementById(thisNav).style.backgroundColor = "#dcdccb"
         document.getElementById(thisNav).style.borderBottom = '3px solid #8CB240'
     }
     Array.from(arguments).slice(2).forEach(arg => document.getElementById(arg).style.display = 'none')
     localStorage.setItem('thisNav', thisNav)
 };



 function myFunc1(){
     var x = document.getElementById("myTopnav"), xx = document.getElementsByClassName('glyphicon-triangle-bottom')
     x.className = "topnav";
     xx.className = ''
     xx.className = 'glyphicon-triangle-top'
     if (x.className === "topnav") {
         x.className += " responsive topnav myTopnav";
     }
 };

 function callMapbox(){
     mymap != undefined ? mymap.remove() : undefined;
     mymap = L.map('mapid').setView([44.787197, 20.457273], 11);
     L.tileLayer(tileLay, { attribution:  attrLnk, maxZoom: 18, id: 'mapbox.light', accessToken: tknMap}).addTo(mymap);
     let lenMark = markLat.length;
     for (let r = 0; r < lenMark; r++) {
        L.marker(['44.' + markLat[r], '20.' + markLon[r]]).addTo(mymap1).bindPopup(`<br><b><a href='https://en.wikipedia.org/wiki/${ String(urlW[r]).slice(-1) == 'B' ? urlW[r] + 'ridge' : urlW[r] } 'target='_blank'>${decodeURI(urlW[r].split('_').join(' '))}</a></b>`)
    }
     L.circle([44.7950478, 20.4394765, 17.71], { color: '#8CB240', fillColor: '#8CB240', fillOpacity: 0.3, radius: 8500}).addTo(mymap);
 };

 function callMapboxDiff(){
     mymap1 != undefined ? mymap1.remove() : undefined;
     document.getElementById('mapid').style.display = 'none';
     document.getElementById('mapid1').style.display = 'block'
     mymap1 = L.map('mapid1').setView([44.787197, 20.457273], 11);
     L.tileLayer(tileLay, {attribution: attrLnk,maxZoom: 18, id: 'mapbox.light', accessToken: tknMap }).addTo(mymap1);
     let lenMark = markLat.length;
     for (let r = 0; r < lenMark; r++){
     L.marker(['44.' + markLat[r], '20.' + markLon[r]]).addTo(mymap1).bindPopup(`<br><b><a href='https://en.wikipedia.org/wiki/${ String(urlW[r]).slice(-1) == 'B' ? urlW[r] + 'ridge' : urlW[r] } 'target='_blank'>${decodeURI(urlW[r].split('_').join(' '))}</a></b>`)
    }
    L.circle([44.7950478, 20.4394765, 17.71], { color: '#8CB240', fillColor: '#8CB240', fillOpacity: 0.3, radius: 8500}).addTo(mymap1);
};

 fetch('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20in%20(%27http%3A%2F%2Fwww.beograd.rs%2Flat%2Frss%2F%27)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
     .then(beogradNewsRS => {
         return beogradNewsRS.json()
     })
     .then(bgdRS => {
         for (var i = 0, len1 = bgdRS.query.count; i < len1; i++) {
             dataR = bgdRS.query.results.item[i], storeTitle = dataR.title, storeLink = dataR.link
             var   storeText = dataR.description, storeDate = dataR.pubDate, momDate = storeDate.split('.').reverse();
             localStorage.setItem('dayW', myDays);
             var takeWeek = localStorage.getItem('dayW').split(','), dow = takeWeek[moment(momDate.join('-').slice(1)).day()]
             var storeImageUse = storeText.match(/"http[^\s]+ /), myImage = storeImageUse[0];
             var myFinImage = myImage.charAt(myImage.length - 4).toLowerCase() != 'p' ? 'images/images.png' : myImage;
             var storeTextPart = '&#x2014;' + '&nbsp;' + storeText.slice(200, storeText.length - 8);
             $('#carousel-example-generic').carousel({interval: 10000})
             document.getElementsByClassName('itembeg')[i].children[0].innerHTML = `<h4 id =titleId1> <span title='Belgrade news from beograd.rs'><i  id='titleIcnId1' class="fa fa-newspaper-o"></i></span>
             <a id='titleId1' href=${storeLink} target = '_blank'> ${storeTitle}  </h4> </a>` + `<img title = "${storeTitle}" src = ${myFinImage}  id =imgId1>` +
             "<p id = partTxt>" + `<span id =dateId1>  ${dow}, ${storeDate} </span>` + storeTextPart + `<a id =aHrefId1 href =${storeLink} target = blank>&nbsp;...&nbsp;Detailed<a/>` + "</p>"
             document.getElementById('hitPlease1').style.display = 'block';
         }
     })
 fetch('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20in%20(%27https%3A%2F%2Fwww.blic.rs%2Frss%2FVesti%2FBeograd%27)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
     .then(blicFeed => {
         return blicFeed.json()
     })
     .then(blicRSS=> {
         for (let i = 0; i <= 41; i++){
             let d = blicRSS.query.results.item[i], titl1 = d.title, lnk = d.link
             var hRef = lnk, txt1 = `&#x2014;` + d.description, dT1 = d.pubDate, len = dT1.length;
             var datP1 = dT1.slice(0, len - 23), datP2 = dT1.slice(len - 23, len - len - 15);
             $('#myCarousel').carousel({interval: 5000});
             document.getElementsByClassName('itemId2')[i].children[0].innerHTML = `&nbsp;&nbsp;<h4 id=titleId1><span><i title='Belgrade news from blic.rs' id='titleIcnId2' class="fas fa-newspaper"></i></span>
             <a id='titleId1' href= ${hRef} target = '_blank'>${titl1} &nbsp;</a></h4><br> &nbsp;&nbsp;&nbsp;&nbsp; <p id= 'partTxt1'>  <span id =dateId1> ${datP1}</span> 
             <span id='dateIdSl2'>&nbsp; ${datP2}  </span>${txt1}<a id='titleId1' href= ${hRef} target= '_blank'><i id='glyId2' class="fa fa-external-link"></i></a></p>`
             document.getElementById('fourSquareId').style.display = 'block';
         }
     })