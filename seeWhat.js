
fetch('https://api.foursquare.com/v2/venues/search?ll=44.8099375,20.4494431&categoryId=4d4b7105d754a06374d81259&&limit=50&client_id=SYQLZ1DXBSZYMCXG3QUGBBHDRM23YDDLO5SAZCALXMFUR3VS&client_secret=HHFBNGSRMFOUAFYQCTVMR1FK4HR4GZL5LO0T0BYGQVFUHSW0&v=20180130')
.then(xVenAll => {
  console.log('POCETAK i prvi FETCH:',xVenAll);
  return xVenAll.json();
})
.then(venueY =>{
    //console.log('JASNIJE VENUES:', venueY.response.venues);
    var allVenueX  = venueY.response.venues;
    var eachVenId;
    for(var i = 0; i < 50; i++){
    var storeImageFSQ = allVenueX[i].categories[0].icon.prefix + 64 +allVenueX[i].categories[0].icon.suffix;
    var storeCateg    = allVenueX[i].categories[0].name;
    var storeUrl      = allVenueX[i].url  != undefined ?  allVenueX[i].url  : 'No link info';
    var storeAddress  = allVenueX[i].location.address != undefined ?   allVenueX[i].location.address    : ''+'No street info';
    var strCross      = allVenueX[i].location.crossStreet != undefined ? allVenueX[i].location.crossStreet : ''+'No intersection info';
    var storeAddr1    = allVenueX[i].location.formattedAddress[1] != undefined ? `${allVenueX[i].location.formattedAddress[1]},`  : 'Belgrade,';
    var storeAddr2    = allVenueX[i].location.formattedAddress[2] != undefined ?  `&nbsp; ${allVenueX[i].location.formattedAddress[2]}` : '&nbsp;  Serbia';
    var  number       = allVenueX[i].contact.formattedPhone != undefined ?  ''+`${allVenueX[i].contact.formattedPhone}` : `<span id ='ifNoNumId'>No number info</span>`;
    var takeLatLon    =  'https://www.google.com/maps/search/?api=1&query=' + allVenueX[i].location.lat + ',' + allVenueX[i].location.lng
    document.getElementsByClassName('item4')[i].children[0].innerHTML =   ` <h3 title = ${allVenueX[i].categories[0].name} id = 'titleFSQ1'> ${allVenueX[i].name} &nbsp;&nbsp;&nbsp; <img id = 'imgFSQ1' src =${storeImageFSQ} /></h3>  <div id ='fsqTextDiv'> <p id ='adress4sq'> <i class="fa fa-map-signs"></i> <a id='latLonForSq' href=${takeLatLon} target=_blank title='Click to get there'>&nbsp;&nbsp;&nbsp;&nbsp;${storeAddress}</a> <br> <span id='crossId'>&nbsp;&#9580; </span> &nbsp;&nbsp;&nbsp; ${strCross} <br> <i class="fa fa-address-card-o styleFaCard"></i> &nbsp;&nbsp; ${storeAddr1} ${storeAddr2}<br> <span id ='boldNumId'><span id ='phone4SqId'>&#9742;</span> &nbsp;&nbsp;&nbsp; ${number}</span></p><img id ='style4ImgUrl' src ='https://image.flaticon.com/icons/svg/109/109476.svg' style="width:26px;height:28px;"/><p>&nbsp;<a id = 'sq4UrlTxt' href = ${storeUrl} target = "_blank">${storeUrl}</a></p><p id='showOnSm'>Visit Site<p></div><p id ='categ4sqId'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Categories: <span id='sq4StoreCat'>${storeCateg}</span></p>`;
    eachVenId =  allVenueX[i].id;
    eachVenId1 = allVenueX[i];

    /*
    fetch('https://api.foursquare.com/v2/venues/' + allVenueX[i].id + '?&client_id=SYQLZ1DXBSZYMCXG3QUGBBHDRM23YDDLO5SAZCALXMFUR3VS&client_secret=HHFBNGSRMFOUAFYQCTVMR1FK4HR4GZL5LO0T0BYGQVFUHSW0&v=20180130')
        .then(eachVenue =>{
          return eachVenue.json()
        })
        .then(eachVen =>{
        console.log('response glavni je', eachVen);
        var eachVenHit    = eachVen.response.venue;
        var allVenueX     = eachVenHit; 
        var storeImageFSQ = allVenueX.categories[0].icon.prefix + 64 + allVenueX.categories[0].icon.suffix;
        var storeImageFSQ1 = allVenueX.categories.length > 1 ?   allVenueX.categories[1].icon.prefix + 64 +allVenueX.categories[1].icon.suffix : ''
        var storeCateg    = allVenueX.categories[0].name;
        var storeCateg1   =  allVenueX.categories.length > 1 ? ',' + allVenueX.categories[1].name : '';
        var storeUrl      = allVenueX.url  != undefined ?  allVenueX.url  : 'No link info'
        var storeAddress  = allVenueX.location.address != undefined ?   allVenueX.location.address    : ''+'No street info';
        var strCross      = allVenueX.location.crossStreet != undefined ? allVenueX.location.crossStreet : ''+'No intersection info';
        var storeAddr1    = allVenueX.location.formattedAddress[1] != undefined ? `${allVenueX.location.formattedAddress[1]},`  : 'Belgrade,';
        var storeAddr2    = allVenueX.location.formattedAddress[2] != undefined ?  `&nbsp; ${allVenueX.location.formattedAddress[2]}` : '&nbsp;  Serbia';
        var  number       = allVenueX.contact.formattedPhone != undefined ?  ''+`${allVenueX.contact.formattedPhone}` : `<span id ='ifNoNumId'>No number info</span>`;
        document.getElementsByClassName('.item4')[xI].innerHTML = `<h3 title = ${allVenueX.categories[0].name} &nbsp; ${storeCateg1} id = 'titleFSQ1'> ${allVenueX.name} &nbsp;&nbsp;&nbsp; <img id = 'imgFSQ1' src =${storeImageFSQ} ${storeImageFSQ1} /></h3>  <div id ='fsqTextDiv'> <p id ='adress4sq'> <i class="fa fa-map-signs"></i> &nbsp;&nbsp;&nbsp;&nbsp;${storeAddress}<br> <span id='crossId'>&nbsp;&#9580; </span> &nbsp;&nbsp;&nbsp; ${strCross} <br><br><i class="fa fa-address-card-o"></i> &nbsp;&nbsp; ${storeAddr1} ${storeAddr2}<br> <span id ='boldNumId'><span id ='phone4SqId'>&#9742;</span> &nbsp;&nbsp;&nbsp; ${number}</span></p><img id ='style4ImgUrl' src ='https://image.flaticon.com/icons/svg/109/109476.svg' style="width:26px;height:28px;"/> <p>&nbsp;<a id = 'sq4UrlTxt' href = ${storeUrl} target = "_blank">&nbsp;${storeUrl}</a></p></div> <p id ='categ4sqId'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Categories: <span id='sq4StoreCat'>${storeCateg} ${storeCateg1}</span></p>`
         })
         .catch(function(error){
          console.log(error); 
        })
*/
      }//loop


      })
      .then(function(){
       /*fetch('https://api.foursquare.com/v2/venues/' + takeEachId + '?&client_id=SYQLZ1DXBSZYMCXG3QUGBBHDRM23YDDLO5SAZCALXMFUR3VS&client_secret=HHFBNGSRMFOUAFYQCTVMR1FK4HR4GZL5LO0T0BYGQVFUHSW0&v=20180130')
        .then( eachVenue =>{
          return eachVenue.json();
        })
        .then(eachVen =>{
          console.log('A svaki je:', eachVen);
         })*/

          /*var eachVenHit = takeVenE.response.venue;
          var allVenueX  = eachVenHit
    var storeImageFSQ = allVenueX[i].categories[0].icon.prefix + 64 +allVenueX[i].categories[0].icon.suffix;
    var storeImageFSQ1 = allVenueX.categories.length > 1 ?   allVenueX.categories[1].icon.prefix + 64 +allVenueX.categories[1].icon.suffix : ''
    var storeCateg    = allVenueX.categories[0].name;
    var storeCateg1   =  allVenueX.categories.length > 1 ? ',' + allVenueX.categories[1].name : '';
    var storeUrl      = allVenueX.url  != undefined ?  allVenueX.url  : 'No link info'
    var storeAddress  = allVenueX.location.address != undefined ?   allVenueX.location.address    : ''+'No street info';
    var strCross      = allVenueX.location.crossStreet != undefined ? allVenueX.location.crossStreet : ''+'No intersection info';
    var storeAddr1    = allVenueX.location.formattedAddress[1] != undefined ? `${allVenueX.location.formattedAddress[1]},`  : 'Belgrade,';
    var storeAddr2    = allVenueX.location.formattedAddress[2] != undefined ?  `&nbsp; ${allVenueX.location.formattedAddress[2]}` : '&nbsp;  Serbia';
    var  number       = allVenueX.contact.formattedPhone != undefined ?  ''+`${allVenueX.contact.formattedPhone}` : `<span id ='ifNoNumId'>No number info</span>`;
    document.getElementsByClassName('item4')[i].children[0].innerHTML =` <h3 title = ${allVenueX.categories[0].name} &nbsp; ${storeCateg1} id = 'titleFSQ1'> ${allVenueX.name} &nbsp;&nbsp;&nbsp; <img id = 'imgFSQ1' src =${storeImageFSQ} ${storeImageFSQ1} /></h3>  <div id ='fsqTextDiv'> <p id ='adress4sq'> <i class="fa fa-map-signs"></i> &nbsp;&nbsp;&nbsp;&nbsp;${storeAddress}<br> <span id='crossId'>&nbsp;&#9580; </span> &nbsp;&nbsp;&nbsp; ${strCross} <br><br><i class="fa fa-address-card-o"></i> &nbsp;&nbsp; ${storeAddr1} ${storeAddr2}<br> <span id ='boldNumId'><span id ='phone4SqId'>&#9742;</span> &nbsp;&nbsp;&nbsp; ${number}</span></p><img id ='style4ImgUrl' src ='https://image.flaticon.com/icons/svg/109/109476.svg' style="width:26px;height:28px;"/> <p>&nbsp;<a id = 'sq4UrlTxt' href = ${storeUrl} target = "_blank">&nbsp;${storeUrl}</a></p></div> <p id ='categ4sqId'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Categories: <span id='sq4StoreCat'>${storeCateg} ${storeCateg1}</span></p>`
  */           
}) //then od ovog naseg unutrasnjeg
.catch(function(error){
  console.log('ERROR SAKRIVEN GLEDAJ STA JE NE PROPUSTI:', error);
})
.then(() =>{
  $.ajax({
      url: 'http://api.eventful.com/json/events/search?app_key=RWcbt5k294VSHHmJ&location=Belgrade&date=Future&page_size=50',
      accepts:{accepts: "application/json"},
      dataType: 'jsonp',
      success: function(eventJson){
        console.log(eventJson.events.event)
      }
    }) 
/*
  .then(function(eventFullX){
    return eventFullX.json()
  })
  .then(function(eventF){
  })
 */
})
.then(() => {
  $.ajax({
      url: 'http://api.eventful.com/json/events/search?app_key=RWcbt5k294VSHHmJ&l=Belgrade&date=Future&image_sizes=block100,medium,dropshadow250&page_size=50&within=30',
      accepts:{accepts: "application/json"},
      dataType: 'jsonp',  
      success: function(eventJson){  
      var takeEvent = eventJson.events.event;
      console.log('EVENTS ARE:', takeEvent);
      var month = [];
      month[0]  = "January";
      month[1]  = "February";
      month[2]  = "March";
      month[3]  = "April";
      month[4]  = "May";
      month[5]  = "June";
      month[6]  = "July";
      month[7]  = "August";
      month[8]  = "September";
      month[9]  = "October";
      month[10] = "November";
      month[11] = "December";

      var weekday = [];
      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";
             
        for(var l = 0; l < takeEvent.length; l++){
        var cityName  = takeEvent[l].city_name;
        var countName = takeEvent[l].country_name;
        var strTime   = takeEvent[l].start_time;
        var evTitle   = takeEvent[l].title;
        var evUrl     = takeEvent[l].url;
        var eveUrlPrt = evUrl.slice(0,28);
        var venAdrr   = takeEvent[l].venue_address != undefined ?  takeEvent[l].venue_address : '&nbsp; No address' + ` &nbsp; <img src="images/no-waiting.png"/>`
        var venName   = takeEvent[l].venue_name;
        var venUrl    = takeEvent[l].venue_url != undefined ? takeEvent[l].venue_url :  ' No link ' + ` &nbsp; <img src="images/no-waiting.png"/>`
        var urlPart   = venUrl.slice(0,28);
        var monthPrt  = strTime.slice(5,7).charAt(0) != 0 ? strTime.slice(5,7) : strTime.slice(6,7); 
        var monIs     =  month[monthPrt - 1];
        var dayIs     =  strTime.slice(8,10).charAt(0) != 0 ? strTime.slice(8,10) : strTime.slice(9,10);
        var yrIs      =  strTime.slice(0,4);
        var toStr     = strTime.slice(0,10) + "";
        var dSplit    = toStr.split("-");
        var namD      = new Date(dSplit[0], dSplit[1], dSplit[2]);
        var dayName   = weekday[namD.getDay()];
        var opnTime   = strTime.slice(10, 13) < 12 && strTime.slice(10,13) > 00   ? strTime.slice(10,16) + " AM" : strTime.slice(10,16) + ' PM'
        var evnLoc    = takeEvent[l].olson_path.slice(7);
        var takeDesc  =  takeEvent[l].description != undefined ? takeEvent[l].description.slice(0, 38) : 'No description'
        var takeLL    =  takeEvent[l].latitude.slice(takeEvent[l].latitude.length -2) != 86 ?  'https://www.google.com/maps/search/?api=1&query=' + takeEvent[l].latitude + ',' + takeEvent[l].longitude : '';
        var firstT = document.getElementsByClassName('item1');
         
        firstT[l].children[1].innerHTML = `<p id='evTitl1'>${evTitle}</p>&nbsp;&nbsp; <p id=styleHr1></p><br><p id=monEvF> <img title='Date and time' src="images/calendar-with-a-clock-time-tools.png"/> &nbsp;  <span id='monDayId'>${monIs} ${dayIs}</span>, &nbsp;${yrIs} &nbsp; <span id =dashIdEvn>&minus;</span>&nbsp;  ${dayName}&nbsp;&nbsp;&nbsp;&nbsp; <i class="fa fa-long-arrow-right faIcn1"></i>  &nbsp;<span id=opnTmEvn>${opnTime}  &nbsp;&nbsp; </p>  <p id=dNameEvn> <img title='City' src="images/skyline.png"/> &nbsp;<span id=evnLocF>${evnLoc},  ${countName}</span></span></p> <p id='locEvnIc'><img title='Venue location'  src ="images/placeholderNewLoc.png"/> &nbsp;<a id='venUrlId' title='More info about venue' href= ${venUrl} target="_blank">  <span id='venNmEvn'>${venName}</span> </a></p> <p id='addrIcnEnv'><img src="images/signalStreet.png"/> &nbsp;  <a id ='latLonHrefEv' href=${takeLL} target='_blank' title='See this place on the map'>${venAdrr}</a></p> <p id='linkEnvId'><img title= 'Event url' src="images/http.png"/> &nbsp; <a id='venEvnUrl'  title='Visit eventfull.com for more info'  href= ${evUrl} target = "_blank">${eveUrlPrt}...</a> </p><p id="descIdEv"><i id ='icnPDesc' class="fa fa-paragraph"></i> &nbsp;&nbsp;&nbsp;&nbsp;<a id='descPrtId' href =${evUrl} target=_blank>${takeDesc}...</a></p>`
        } 


    },
    error: function (xhr, ajaxOptions, thrownError){
        alert(xhr.status);
        alert(thrownError);
        console.log(thrownError)
      }
 })
})
.catch(function(error1){
  console.log('Error in eventfull is:', error1);
});


