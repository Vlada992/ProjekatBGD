


  var clickObj = {};
 function myBFun(){
  var x = document.getElementsByTagName('div');
 }
 
function show(shown, hidden, hidden1, hidden2) {   //for now, 4 ative pages
  document.getElementById(shown).style.display    ='block';
  if(shown == 'Page1'){
  document.querySelector('#navA5').style.backgroundColor = "#dcdccb"
  document.querySelector('#navA3').style.backgroundColor = '';
  document.querySelector('#navA1').style.backgroundColor = '';
  document.querySelector('#navA4').style.backgroundColor = '';

  document.querySelector('#navA5').style.borderBottom = '3px solid #8CB240'
  document.querySelector('#navA3').style.borderBottom = ''
  document.querySelector('#navA1').style.borderBottom = ''   
  document.querySelector('#navA4').style.borderBottom = ''   


} else if(shown == 'Page2'){
  document.querySelector('#navA5').style.backgroundColor = ""
  document.querySelector('#navA3').style.backgroundColor = '#dcdccb';
  document.querySelector('#navA1').style.backgroundColor = '';
  document.querySelector('#navA4').style.backgroundColor = '';

  document.querySelector('#navA3').style.borderBottom = '3px solid #8CB240'
   document.querySelector('#navA4').style.borderBottom = ''
  document.querySelector('#navA1').style.borderBottom = ''   
  document.querySelector('#navA5').style.borderBottom = '' 


} else if(shown == 'Page3'){
    document.querySelector('#navA3').style.backgroundColor = '';
    document.querySelector('#navA5').style.backgroundColor = '';
    document.querySelector('#navA4').style.backgroundColor = '#dcdccb';
    document.querySelector('#navA1').style.backgroundColor = '';

    document.querySelector('#navA4').style.borderBottom = '3px solid #8CB240'
    document.querySelector('#navA3').style.borderBottom = ''
    document.querySelector('#navA1').style.borderBottom = ''   
    document.querySelector('#navA5').style.borderBottom = '' 

} else if(shown == 'Page4'){
    document.querySelector('#navA4').style.backgroundColor = '';
    document.querySelector('#navA3').style.backgroundColor = '';
    document.querySelector('#navA5').style.backgroundColor = '';
    document.querySelector('#navA1').style.backgroundColor = '#dcdccb'

    document.querySelector('#navA1').style.borderBottom = '3px solid #8CB240'
    document.querySelector('#navA3').style.borderBottom = ''
    document.querySelector('#navA5').style.borderBottom = ''   
    document.querySelector('#navA4').style.borderBottom = '' 

}
  document.getElementById(hidden).style.display   ='none';
  document.getElementById(hidden1).style.display  ='none';
  document.getElementById(hidden2).style.display  ='none';
  return false;
}


function myFunction() {
    var x = document.getElementById("myTopnav");
     console.log(document.querySelector('.glyphicon-triangle-bottom'))
       x.className = "topnav";
        var xx = document.getElementsByClassName('glyphicon-triangle-bottom')
    xx.className = ''
    xx.className = 'glyphicon-triangle-top'

     if (x.className === "topnav") {
        x.className += " responsive topnav myTopnav";
      
    } else {
       
    }
}
/*for responsive nav, func*/
    var userFeed = new Instafeed({                     
        get: 'user',
        userId: '514128423',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '1967032900.ba4c844.c1ecb30e79504ac792c51cb8826aaef6',
        sortBy: 'most-recent',
        template: '<div class="row gallery instaimg  col-md-12 img-size"><a href="{{image}}" title="{{caption1}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });
    userFeed.run();
 
    var myHeaders = new Headers();
    var myInit = { 
                  method: 'GET',
                  headers: myHeaders,
                  mode: 'cors',
                  cache: 'default' 
                 };
    var myRequest = new Request('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20in%20(%27http%3A%2F%2Fwww.beograd.rs%2Flat%2Frss%2F%27)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys');
    fetch(myRequest, myInit)
    .then(function(dataRSS){
      return dataRSS.json()
    })
    .then(function(dataR){
      console.log('BG sajt RSS feed:',dataR);
        for(var i = 0; i < dataR.query.count; i++){ 
                 var storeTitle = dataR.query.results.item[i].title;
                 var storeLink = dataR.query.results.item[i].link;
                 var storeText = dataR.query.results.item[i].description;                
                 var storeDate = dataR.query.results.item[i].pubDate;
                 var storeImageUse = storeText.match(/"http[^\s]+ /);
                 var myImage = storeImageUse[0];
                 var myFinImage = myImage.charAt(myImage.length -4).toLowerCase() != 'p' ? 'images/images.png' :  myImage;
                 var storeTextPart = '&#x2014;' +  '&nbsp;' + storeText.slice(200, storeText.length - 8);
                 var firstCh = storeText.slice(200,201);
                 var storeHref = String(storeLink);
                $('#carousel-example-generic').carousel({
                interval: 10000
                });
                 document.getElementsByClassName('item')[i].children[0].innerHTML = `<h4 id =titleId1> <a id='titleId1' href=${storeHref} target = '_blank'> ${storeTitle}  </h4> </a>` + `<img title = "${storeTitle}" src = ${myFinImage}  id =imgId1>`   +  "<p id = partTxt>"  +  `<span id =dateId1>  ${storeDate} </span>` +  storeTextPart +  `<a id =aHrefId1 href =${storeHref} target = blank>&nbsp;...&nbsp;Detailed<a/>`     +  "</p>"               
       }
    })
    .catch(function(error) {
         console.log(error);
    })
    fetch('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20in%20(%27https%3A%2F%2Fwww.blic.rs%2Frss%2FVesti%2FBeograd%27)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')        
        .then(function(blicFeed){
            return blicFeed.json();
        })
        .then(function(blicRSS){
            console.log("BLIC FEED:", blicRSS);

            for(let i = 0; i < 20; i++){
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
               document.getElementsByClassName('itemId2')[i].children[0].innerHTML = `&nbsp;&nbsp;<h4 id =titleId1> <a id ='titleId1' href = ${storeHref1} target = '_blank'> ${storeTitle1} &nbsp;</a></h4><br> &nbsp;&nbsp;&nbsp;&nbsp; <p id = 'partTxt1'>  <span id =dateId1> ${storeDatePart1}   </span> <span id='dateIdSl2'>&nbsp; ${storeDatePart2}  </span>${storeText1}<a id ='titleId1' href = ${storeHref1} target = '_blank'><i id ='glyId2' class="fa fa-external-link"></i></a></p> ` 
            }
        })
        .catch(function(error){
            console.log('<h2>Here is catched error:', error);
        })

        /*fetch('https://api.foursquare.com/v2/venues/search?ll=44.8099375,20.4494431&oauth_token=G55NI2XQXX55ZYHFLQBQC10QA4HCBEBAMMPLEVWHONUZOQ4H&v=20180130') //sve u Beogradu
        .then(function(venueX){
            return venueX.json();
        }).then(function(venuesAll){
            console.log('ALL VENUES:', venuesAll);
            
            fetch('https://api.foursquare.com/v2/venues/search?ll=44.8099375,20.4494431&categoryId=4d4b7105d754a06374d81259&&limit=50&client_id=SYQLZ1DXBSZYMCXG3QUGBBHDRM23YDDLO5SAZCALXMFUR3VS&client_secret=HHFBNGSRMFOUAFYQCTVMR1FK4HR4GZL5LO0T0BYGQVFUHSW0&v=20180130')   //restorani/hrana
            .then(foodX => {   
                return foodX.json()
            }).then(foodPlaces => {
                console.log('FOOD ONLY:',foodPlaces);
            })
            fetch('https://api.foursquare.com/v2/venues/search?ll=44.8099375,20.4494431&categoryId=4d4b7104d754a06370d81259&limit=50&client_id=SYQLZ1DXBSZYMCXG3QUGBBHDRM23YDDLO5SAZCALXMFUR3VS&client_secret=HHFBNGSRMFOUAFYQCTVMR1FK4HR4GZL5LO0T0BYGQVFUHSW0&v=20180130')
            .then(funPlc => {
                return funPlc.json();
            }).then(funPlaces =>{
                console.log('ART & ENTERTAINM:', funPlaces);
                //take this also: http://api.eventful.com/
            })
        })
        */
        

        /*fetch('https://www.blic.rs/rss/Vesti/Beograd')
        .then(function(dataXML){
        return dataXML.text()
        })
        .then(function(xmlStr){
        return $.parseXML(xmlStr)   //parse to XMl doc with jqueery method
        })
        .then(function(dataV){
        console.log("XML doc:", dataV)
        
        var $xml = $(dataV);
        for(var i = 0; i < 16; i++){    
            var storeLink  =  $xml.find('item')[i].children[2].textContent;
            var stringLink =  String(storeLink);
            var xmlTitle   =  $xml.find('item')[i].children[0].textContent;
            var xmlDesc    =  '&#x2014;' +  '&nbsp;' + $xml.find('item')[i].children[1].textContent;
            var xmlDate    =  $xml.find('item')[i].children[4].textContent;
            var xmlDatePt1 =  xmlDate.slice(0, xmlDate.length - 23);
            var xmlDatePt2 =  xmlDate.slice(xmlDate.length - 23, xmlDate.length - xmlDate.length - 15);
             $('#myCarousel').carousel({
                interval: 5000
             });
            document.getElementsByClassName('itemId2')[i].children[0].innerHTML = `&nbsp;&nbsp;<h4 id =titleId1> <a id ='titleId1' href = ${stringLink} target = '_blank'> ${xmlTitle} &nbsp;</a></h4><br> &nbsp;&nbsp;&nbsp;&nbsp; <p id = 'partTxt1'>  <span id =dateId1> ${xmlDatePt1}  <span id='dateIdSl2'>&nbsp; ${xmlDatePt2}  </span> </span>  ${xmlDesc}<a id ='titleId1' href = ${stringLink} target = '_blank'><span id ='glyId2' class="glyphicon glyphicon-arrow-right"></span></a></p>`;
        } //big loop
      })*/






