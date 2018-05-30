


function invokSkver(visible, notVisb1, notVisb2, notVisb3){



  document.getElementById(visible).style.display = 'block';
  document.getElementById(notVisb1).style.display = 'none';
  document.getElementById(notVisb2).style.display = 'none';
  document.getElementById(notVisb3).style.display = 'none';
 
}









fetch('https://api.foursquare.com/v2/venues/search?ll=44.8099375,20.4494431&categoryId=4d4b7105d754a06374d81259&&limit=50&client_id=SYQLZ1DXBSZYMCXG3QUGBBHDRM23YDDLO5SAZCALXMFUR3VS&client_secret=HHFBNGSRMFOUAFYQCTVMR1FK4HR4GZL5LO0T0BYGQVFUHSW0&v=20180130')
.then( xVenAll => {
  return xVenAll.json();
})
.then( venueY => {
    var allVenueX  = venueY.response.venues;
    var eachVenId;
    for(let i = 0; i < 50; i++){
    var storeImageFSQ = allVenueX[i].categories[0].icon.prefix + 64 +allVenueX[i].categories[0].icon.suffix;
    var defImgS       = localStorage.getItem('eto3');
    var storeCateg    = allVenueX[i].categories[0].name;
    var storeUrl      = allVenueX[i].url  != undefined ?  allVenueX[i].url  : 'No link info';
    var prtUrl        = storeUrl.slice(0,30);
    var storeAddress  = allVenueX[i].location.address != undefined ?   allVenueX[i].location.address    : ''+'No street info';
    var strCross      = allVenueX[i].location.crossStreet != undefined ? allVenueX[i].location.crossStreet : ''+'No intersection info';
    var storeAddr1    = allVenueX[i].location.formattedAddress[1] != undefined ? `${allVenueX[i].location.formattedAddress[1]},`  : 'Belgrade,';
    var storeAddr2    = allVenueX[i].location.formattedAddress[2] != undefined ?  `&nbsp; ${allVenueX[i].location.formattedAddress[2]}` : '&nbsp;  Serbia';
    var  number       = allVenueX[i].contact.formattedPhone != undefined ?  ''+`${allVenueX[i].contact.formattedPhone}` : `<span id ='ifNoNumId'>No number info</span>`;
    var takeLatLon    =  'https://www.google.com/maps/search/?api=1&query=' + allVenueX[i].location.lat + ',' + allVenueX[i].location.lng
    document.getElementsByClassName('item4')[i].children[0].innerHTML =   ` <h3 title = ${allVenueX[i].categories[0].name} id = 'titleFSQ1'> ${allVenueX[i].name} &nbsp;&nbsp;&nbsp; <img id = 'imgFSQ1' src =${storeImageFSQ} /> <img id='defImg1' src=${defImgS}></h3>  <div id ='fsqTextDiv'> <p id ='adress4sq'> <i title='Location of place' class="fa fa-map-signs"></i> <a id='latLonForSq' href=${takeLatLon} target=_blank title='Click to get there'>&nbsp;&nbsp;&nbsp;&nbsp;${storeAddress}</a> <br> <span title='Explanation, nearby streets' id='crossId'>&nbsp;&#9580; </span> &nbsp;&nbsp;&nbsp; ${strCross} <br> <i title='In which city?'  class="fa fa-address-card-o styleFaCard"></i> &nbsp;&nbsp; ${storeAddr1} ${storeAddr2}<br> <span id ='boldNumId'><span title='Phone number' id ='phone4SqId'>&#9742;</span> &nbsp;&nbsp;&nbsp; ${number}</span></p><img title='Internet adress' id ='style4ImgUrl' src ='https://image.flaticon.com/icons/svg/109/109476.svg' style="width:26px;height:28px;"/><p>&nbsp;<a id = 'sq4UrlTxt' href = ${storeUrl} target = "_blank">${prtUrl}...</a></p><p id='showOnSm'>Visit Site<p></div><p id ='categ4sqId'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Categories: <span id='sq4StoreCat'>${storeCateg}</span></p>`;
    }
})
.catch( error => {
  console.log('sakriven err:', error);
})
.then(() =>{
  $.ajax({
      url: 'http://api.eventful.com/json/events/search?app_key=RWcbt5k294VSHHmJ&l=Belgrade&date=Future&image_sizes=block100,medium,dropshadow250&page_size=50&within=30',
      accepts:{accepts: "application/json"},
      dataType: 'jsonp',  
      success: eventJson => {  
      var takeEvent = eventJson.events.event;
       let weekday =  localStorage.getItem('dayW').split(","); 
       let month   =  localStorage.getItem('monthS').split(",");
        for(let l = 0; l < takeEvent.length; l++){
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
        var dayName   =  weekday[namD.getDay()];
        var opnTime   = strTime.slice(10, 13) < 12 && strTime.slice(10,13) > 00   ? strTime.slice(10,16) + " AM" : strTime.slice(10,16) + ' PM'
        var evnLoc    = takeEvent[l].olson_path.slice(7);
        var takeDesc  =  takeEvent[l].description != undefined ? takeEvent[l].description.slice(0, 38) : 'No description'
        var takeLL    =  takeEvent[l].latitude.slice(takeEvent[l].latitude.length -2) != 86 ?  'https://www.google.com/maps/search/?api=1&query=' + takeEvent[l].latitude + ',' + takeEvent[l].longitude : '';
        var firstT = document.getElementsByClassName('item1');
        firstT[l].children[1].innerHTML = `<p id='evTitl1'>${evTitle}</p>&nbsp;&nbsp; <p id=styleHr1></p><br><p id=monEvF> <img title='Date and time' src="images/calendar-with-a-clock-time-tools.png"/> &nbsp;  <span id='monDayId'>${monIs} ${dayIs}</span>, &nbsp;${yrIs} &nbsp; <span id =dashIdEvn>&minus;</span>&nbsp;  ${dayName}&nbsp;&nbsp;&nbsp;&nbsp; <i class="fa fa-long-arrow-right faIcn1"></i>  &nbsp;<span id=opnTmEvn>${opnTime}  &nbsp;&nbsp; </p>  <p id=dNameEvn> <img title='City' src="images/skyline.png"/> &nbsp;<span id=evnLocF>${evnLoc},  ${countName}</span></span></p> <p id='locEvnIc'><img title='Venue location'  src ="images/placeholderNewLoc.png"/> &nbsp;<a id='venUrlId' title='More info about venue' href= ${venUrl} target="_blank">  <span id='venNmEvn'>${venName}</span> </a></p> <p id='addrIcnEnv'><img  title='Where is it?' src="images/signalStreet.png"/> &nbsp;  <a id ='latLonHrefEv' href=${takeLL} target='_blank' title='See this place on the map'>${venAdrr}</a></p> <p id='linkEnvId'><img title= 'Event url' src="images/http.png"/> &nbsp; <a id='venEvnUrl'  title='Visit eventfull.com for more info'  href= ${evUrl} target = "_blank">${eveUrlPrt}...</a> </p><p id="descIdEv"><i title='Venue name' id ='icnPDesc' class="fa fa-paragraph"></i> &nbsp;&nbsp;&nbsp;&nbsp;<a id='descPrtId' href =${evUrl} target=_blank>${takeDesc}...</a></p>`
        };
    }
 }) 
})
.then(() => {
 fetch("https://api.foursquare.com/v2/venues/search?ll=44.8099375,20.4494431&categoryId=4bf58dd8d48988d1fa931735&&limit=50&client_id=SYQLZ1DXBSZYMCXG3QUGBBHDRM23YDDLO5SAZCALXMFUR3VS&client_secret=HHFBNGSRMFOUAFYQCTVMR1FK4HR4GZL5LO0T0BYGQVFUHSW0&v=20180130")
 .then(resHotel => {
    return resHotel.json();
 })
 .then(hotelS => {
  let allVenueX = hotelS.response.venues;
  for(let i = 0; i < 50; i++){
    var storeImageFSQ = allVenueX[i].categories[0].icon.prefix + 64 + allVenueX[i].categories[0].icon.suffix;
    var defImgS       = localStorage.getItem('eto1');
    var storeCateg    = allVenueX[i].categories[0].name;
    var storeUrl      = allVenueX[i].url  != undefined ?  allVenueX[i].url  : 'No link info';
    var prtUrl        = storeUrl.slice(0,30);
    var storeAddress  = allVenueX[i].location.address != undefined ?   allVenueX[i].location.address    : ''+'No street info';
    var strCross      = allVenueX[i].location.crossStreet != undefined ? allVenueX[i].location.crossStreet : ''+'No intersection info';
    var storeAddr1    = allVenueX[i].location.formattedAddress[1] != undefined ? `${allVenueX[i].location.formattedAddress[1]},`  : 'Belgrade,';
    var storeAddr2    = allVenueX[i].location.formattedAddress[2] != undefined ?  `&nbsp; ${allVenueX[i].location.formattedAddress[2]}` : '&nbsp;  Serbia';
    var  number       = allVenueX[i].contact.formattedPhone != undefined ?  ''+`${allVenueX[i].contact.formattedPhone}` : `<span id ='ifNoNumId'>No number info</span>`;
    var takeLatLon    =  'https://www.google.com/maps/search/?api=1&query=' + allVenueX[i].location.lat + ',' + allVenueX[i].location.lng

    document.getElementsByClassName('item item2')[i].children[0].innerHTML =   ` <h3 title = ${allVenueX[i].categories[0].name} id = 'titleFSQ1'> ${allVenueX[i].name} &nbsp;&nbsp;&nbsp; <img id = 'imgFSQ1' src =${storeImageFSQ} /> <img id='defImg2' src=${defImgS}></h3>  <div id ='fsqTextDiv'> <p id ='adress4sq'> <i title='Location of place' class="fa fa-map-signs"></i> <a id='latLonForSq' href=${takeLatLon} target=_blank title='Click to get there'>&nbsp;&nbsp;&nbsp;&nbsp;${storeAddress}</a> <br> <span title='Explanation, nearby streets' id='crossId'>&nbsp;&#9580; </span> &nbsp;&nbsp;&nbsp; ${strCross} <br> <i title='In which city?'  class="fa fa-address-card-o styleFaCard"></i> &nbsp;&nbsp; ${storeAddr1} ${storeAddr2}<br> <span id ='boldNumId'><span title='Phone number' id ='phone4SqId'>&#9742;</span> &nbsp;&nbsp;&nbsp; ${number}</span></p><img title='Internet adress' id ='style4ImgUrl' src ='https://image.flaticon.com/icons/svg/109/109476.svg' style="width:26px;height:28px;"/><p>&nbsp;<a id = 'sq4UrlTxt' href = ${storeUrl} target = "_blank">${prtUrl}...</a></p><p id='showOnSm'>Visit Site<p></div><p id ='categ4sqId'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Categories: <span id='sq4StoreCat'>${storeCateg}</span></p>`;
    }
 })
 fetch('https://api.foursquare.com/v2/venues/search?ll=44.8099375,20.4494431&categoryId=4d4b7105d754a06378d81259&&limit=50&client_id=SYQLZ1DXBSZYMCXG3QUGBBHDRM23YDDLO5SAZCALXMFUR3VS&client_secret=HHFBNGSRMFOUAFYQCTVMR1FK4HR4GZL5LO0T0BYGQVFUHSW0&v=20180130')
 .then(shopS => {
  return shopS.json()
})
 .then(storeShops => {
  let allVenueX  = storeShops.response.venues;
  for(let i = 0; i < 50; i++){
    var storeImageFSQ = allVenueX[i].categories[0].icon.prefix + 64 + allVenueX[i].categories[0].icon.suffix;
    var defImgS       = localStorage.getItem('eto2');
    var storeCateg    = allVenueX[i].categories[0].name;
    var storeUrl      = allVenueX[i].url  != undefined ?  allVenueX[i].url  : 'No link info';
    var prtUrl        = storeUrl.slice(0,30);
    var storeAddress  = allVenueX[i].location.address != undefined ?   allVenueX[i].location.address    : ''+'No street info';
    var strCross      = allVenueX[i].location.crossStreet != undefined ? allVenueX[i].location.crossStreet : ''+'No intersection info';
    var storeAddr1    = allVenueX[i].location.formattedAddress[1] != undefined ? `${allVenueX[i].location.formattedAddress[1]},`  : 'Belgrade,';
    var storeAddr2    = allVenueX[i].location.formattedAddress[2] != undefined ?  `&nbsp; ${allVenueX[i].location.formattedAddress[2]}` : '&nbsp;  Serbia';
    var  number       = allVenueX[i].contact.formattedPhone != undefined ?  ''+`${allVenueX[i].contact.formattedPhone}` : `<span id ='ifNoNumId'>No number info</span>`;
    var takeLatLon    =  'https://www.google.com/maps/search/?api=1&query=' + allVenueX[i].location.lat + ',' + allVenueX[i].location.lng
    document.getElementsByClassName('item item44')[i].children[0].innerHTML =   ` <h3 title = ${allVenueX[i].categories[0].name} id = 'titleFSQ1'> ${allVenueX[i].name} &nbsp;&nbsp;&nbsp; <img id = 'imgFSQ1' src =${storeImageFSQ} /> <img id='defImg3' src=${defImgS}>  </h3>   <div id ='fsqTextDiv'> <p id ='adress4sq1'> <i title='Location of place' class="fa fa-map-signs"></i> <a id='latLonForSq' href=${takeLatLon} target=_blank title='Click to get there'>&nbsp;&nbsp;&nbsp;&nbsp;${storeAddress}</a> <br> <span title='Explanation, nearby streets' id='crossId'>&nbsp;&#9580; </span> &nbsp;&nbsp;&nbsp; ${strCross} <br> <i title='In which city?'  class="fa fa-address-card-o styleFaCard"></i> &nbsp;&nbsp; ${storeAddr1} ${storeAddr2}<br> <span id ='boldNumId'><span title='Phone number' id ='phone4SqId'>&#9742;</span> &nbsp;&nbsp;&nbsp; ${number}</span></p><img title='Internet adress' id ='style4ImgUrl' src ='https://image.flaticon.com/icons/svg/109/109476.svg' style="width:26px;height:28px;"/><p>&nbsp;<a id = 'sq4UrlTxt' href = ${storeUrl} target = "_blank">${prtUrl}...</a></p><p id='showOnSm'>Visit Site<p></div><p id ='categ4sqId'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Categories: <span id='sq4StoreCat'>${storeCateg}</span></p>`;
    }
 })
}) //last then promise.


