let pgid = []
function invokSkver(visible, notVisb1, notVisb2, notVisb3, notVisb4, e){
  let eachId = e.path["0"].id;
  let thisPg1 = document.getElementById('eventFa').id
  let thisPg2 =  document.getElementById('bedFa').id
  let thisPg3 =  document.getElementById('shopFa').id
  let thisPg4 =  document.getElementById('foodFa').id
  let thisPg5 =  document.getElementById('sitesFa').id
  pgid = [thisPg1, thisPg2, thisPg3, thisPg4, thisPg5];
  document.getElementById(eachId).style.borderBottom = '4px solid #8CB240';
  document.getElementById(eachId).style.color = '#8CB240';

  for(let i = 0; i <pgid.length; i++){
  if( document.getElementById(pgid[i]).style.borderBottom != ''){
   document.getElementById(pgid[i]).style.borderBottom = '';
   document.getElementById(pgid[i]).style.color = '';
   document.getElementById(eachId).style.borderBottom = '4px solid  #8CB240';
   document.getElementById(eachId).style.color = '#8CB240';
  }
}
  document.getElementById(visible).style.display  = 'block';
  document.getElementById(notVisb1).style.display = 'none';
  document.getElementById(notVisb2).style.display = 'none';
  document.getElementById(notVisb3).style.display = 'none';
  document.getElementById(notVisb4).style.display = 'none';
};

fetch('https://api.foursquare.com/v2/venues/search?ll=44.8099375,20.4494431&categoryId=4d4b7105d754a06374d81259&&limit=50&client_id=SYQLZ1DXBSZYMCXG3QUGBBHDRM23YDDLO5SAZCALXMFUR3VS&client_secret=HHFBNGSRMFOUAFYQCTVMR1FK4HR4GZL5LO0T0BYGQVFUHSW0&v=20180130')
  .then(xVenAll=> {
    return xVenAll.json();
  })
  .then(foodY=> {
    var allVenueX = foodY.response.venues;
    document.getElementById('foodFa').style.borderBottom = '4px solid #8CB240';
    document.getElementById('foodFa').style.color = '#8CB240';

    for (let i = 0; i <= 41; i++){
      var storeImageFSQ = allVenueX[i].categories[0].icon.prefix + 64 + allVenueX[i].categories[0].icon.suffix;
      localStorage.setItem('eto3', 'images/imageeditNEW3.png');
      var defImgS = localStorage.getItem('eto3');
      var storeCateg = allVenueX[i].categories[0].name;
      var storeUrl = allVenueX[i].url != undefined ? allVenueX[i].url : 'No link info';
      var prtUrl = storeUrl.slice(0, 30);
      var storeAddress = allVenueX[i].location.address != undefined ? allVenueX[i].location.address : '' + 'No street info';
      var strCross = allVenueX[i].location.crossStreet != undefined ? allVenueX[i].location.crossStreet : '' + 'No intersection info';
      var storeAddr1 = allVenueX[i].location.formattedAddress[1] != undefined ? `${allVenueX[i].location.formattedAddress[1]},` : 'Belgrade,';
      var storeAddr2 = allVenueX[i].location.formattedAddress[2] != undefined ? `&nbsp; ${allVenueX[i].location.formattedAddress[2]}` : '&nbsp;  Serbia';
      var number = allVenueX[i].contact.formattedPhone != undefined ? '' + `${allVenueX[i].contact.formattedPhone}` : `<span id ='ifNoNumId'>No number info</span>`;
      var takeLatLon = 'https://www.google.com/maps/search/?api=1&query=' + allVenueX[i].location.lat + ',' + allVenueX[i].location.lng

      document.getElementsByClassName('item4')[i].children[0].innerHTML = `<h3 title = ${allVenueX[i].categories[0].name} id = 'titleFSQ1'> ${allVenueX[i].name} &nbsp;&nbsp;&nbsp; 
    <img id = 'imgFSQ1' src =${storeImageFSQ} /> <img title='restaurants/caffes/fast food' id='defImg1' src=${defImgS}></h3>  <div id ='fsqTextDiv'> <p id ='adress4sq'> <i title='Location of place' class="fa fa-map-signs"></i>
    <a id='latLonForSq' href=${takeLatLon} target=_blank title='Click to get there'>
    &nbsp;&nbsp;&nbsp;&nbsp;${storeAddress}</a> <br> <span title='Explanation, nearby streets' id='crossId'>&nbsp;&#9580; </span> &nbsp;&nbsp;&nbsp; ${strCross} <br> 
    <i title='In which city?'  class="fa fa-address-card-o styleFaCard"></i> &nbsp;&nbsp; ${storeAddr1} ${storeAddr2}<br> <span id ='boldNumId'><span title='Phone number' id ='phone4SqId'>&#9742;</span>
     &nbsp;&nbsp;&nbsp; ${number}</span></p><img title='Internet adress' id ='style4ImgUrl' src ='https://image.flaticon.com/icons/svg/109/109476.svg' style="width:26px;height:28px;"/><p>&nbsp;
     <a id = 'sq4UrlTxt' href = ${storeUrl} target = "_blank">${prtUrl}...</a></p><p id='showOnSm'>Visit Site<p></div><p id ='categ4sqId'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     Categories: <span id='sq4StoreCat'>${storeCateg}</span></p>`;
    }
  })
  .then(()=> {
    $.ajax({
      url: 'http://api.eventful.com/json/events/search?app_key=RWcbt5k294VSHHmJ&l=Belgrade&date=Future&image_sizes=block100,medium,dropshadow250&page_size=50&within=30',
      accepts: {
        accepts: "application/json  charset=utf-8"
      },
      dataType: 'jsonp',
      success: eventJson=> {
        var takeEvent = eventJson.events.event;
        var myDays = 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday';
        myMont = 'January, February, March, April, May, June, July, August, September, October, November, December';
        localStorage.setItem('dayW', myDays);
        localStorage.setItem('monthS', myMont);
        let weekday = localStorage.getItem('dayW').split(",");
        let month = localStorage.getItem('monthS').split(",");
        console.log('eventfull API:', eventJson)
        var imageArr = [];
        var iterArr = [];
        for (let l = 0; l <= 20; l++) {
          var takeImg = takeEvent[l].image != null ? String(takeEvent[l].image.medium.url) : 'no image'
          if (takeEvent[l].image != null && takeEvent[l].image.medium.url.startsWith('h')) {
            imageArr.push(takeEvent[l].image.medium.url);
            iterArr.push(l);
          } else if (takeEvent[l].image != null && takeEvent[l].image.medium.url.startsWith('/')) {
            imageArr.push('http:' + takeEvent[l].image.medium.url)
            iterArr.push(l)
          }
          var countName = takeEvent[l].country_name;
          var strTime = takeEvent[l].start_time;
          var evTitle = takeEvent[l].title;
          var evUrl = takeEvent[l].url;
          var eveUrlPrt = evUrl.slice(0, 28);
          var venAdrr = takeEvent[l].venue_address != undefined ? takeEvent[l].venue_address : '&nbsp; No address' + ` &nbsp; <img src="images/no-waiting.png"/>`
          var venName = takeEvent[l].venue_name;
          var venUrl = takeEvent[l].venue_url != undefined ? takeEvent[l].venue_url : ' No link ' + ` &nbsp; <img src="images/no-waiting.png"/>`
          var monthPrt = strTime.slice(5, 7).charAt(0) != 0 ? strTime.slice(5, 7) : strTime.slice(6, 7);
          var monIs = month[monthPrt - 1];
          var dayIs = strTime.slice(8, 10).charAt(0) != 0 ? strTime.slice(8, 10) : strTime.slice(9, 10);
          var yrIs = strTime.slice(0, 4);
          var toStr = strTime.slice(0, 10) + "";
          var dSplit = toStr.split("-");
          var namD = new Date(dSplit[0], dSplit[1], dSplit[2]);
          var dayName = weekday[namD.getDay()];
          var opnTime = strTime.slice(10, 13) < 12 && strTime.slice(10, 13) > 00 ? strTime.slice(10, 16) + " AM" : strTime.slice(10, 16) + ' PM'
          var evnLoc = takeEvent[l].olson_path.slice(7);
          var takeDesc = takeEvent[l].description != undefined ? takeEvent[l].description.slice(0, 38) : 'No description'
          var takeLL = takeEvent[l].latitude.slice(takeEvent[l].latitude.length - 2) != 86 ? 'https://www.google.com/maps/search/?api=1&query=' + takeEvent[l].latitude + ',' + takeEvent[l].longitude : '';


         document.getElementsByClassName('item1')[l].children[1].innerHTML = ` <p id='evTitl1'>${evTitle}</p>&nbsp;&nbsp; <p id=styleHr1></p><br>  <div class='divEvnAll' class='container'> <p id=monEvF>
         <img title='Date and time' src="images/calendar-with-a-clock-time-tools.png"/> &nbsp;  <span id='monDayId'>${monIs} ${dayIs}</span>, &nbsp;${yrIs} &nbsp; <span id =dashIdEvn>&minus;</span>&nbsp;  
        ${dayName}&nbsp;&nbsp;&nbsp;&nbsp; <i class="fa fa-long-arrow-right faIcn1"></i>  &nbsp;<span id=opnTmEvn>${opnTime}  &nbsp;&nbsp; </p>  <p id=dNameEvn> <img title='City' src="images/skyline.png"/>
         &nbsp;<span id=evnLocF>${evnLoc},  ${countName} &nbsp; <img src='images/favicon-32x32.png'/></span></span></p> <p id='locEvnIc'><img title='Venue location'  src ="images/placeholderNewLoc.png"/>
         &nbsp;<a id='venUrlId' title='More info about venue' href= ${venUrl} target="_blank">  <span id='venNmEvn'>${venName}</span> </a></p> <p id='addrIcnEnv'>
         <img  title='Where is it?' src="images/signalStreet.png"/> &nbsp;  <a id ='latLonHrefEv' href=${takeLL} target='_blank' title='See this place on the map'>${venAdrr}</a></p>
          <p id='linkEnvId'><img title= 'Event url' src="images/http.png"/> &nbsp; <a id='venEvnUrl'  title='Visit eventfull.com for more info'  href= ${evUrl} target = "_blank">${eveUrlPrt}...</a>
         </p><p id="descIdEv"><i title='Venue name' id ='icnPDesc' class="fa fa-paragraph"></i> &nbsp;&nbsp;&nbsp;&nbsp;<a id='descPrtId' href =${evUrl} target=_blank>${takeDesc}...</a></p>   <img id='imgDrop250  src= ${takeImg}/> </div>`
        }
        for(let xx = 0; xx < imageArr.length; xx++){
          document.getElementsByClassName('item1')[iterArr[xx]].children[1].innerHTML += `<img id='picForEvent' src =${imageArr[xx]}/>`
        }
      }
    })
  })
  .then(() => {
    fetch("https://api.foursquare.com/v2/venues/search?ll=44.8099375,20.4494431&categoryId=4bf58dd8d48988d1fa931735&&limit=50&client_id=SYQLZ1DXBSZYMCXG3QUGBBHDRM23YDDLO5SAZCALXMFUR3VS&client_secret=HHFBNGSRMFOUAFYQCTVMR1FK4HR4GZL5LO0T0BYGQVFUHSW0&v=20180130")
      .then(resHotel => {
        return resHotel.json();
      })
      .then(hotelS=> {
        let allVenueX = hotelS.response.venues;
        for (let i = 0; i <= 40; i++) {
          var storeImageFSQ = allVenueX[i].categories[0].icon.prefix + 64 + allVenueX[i].categories[0].icon.suffix;

          localStorage.setItem('eto1', 'images/imageeditNEW1.png')
          var defImgS = localStorage.getItem('eto1');
          var storeCateg = allVenueX[i].categories[0].name;
          var storeUrl = allVenueX[i].url != undefined ? allVenueX[i].url : 'No link info';
          var prtUrl = storeUrl.slice(0, 30);
          var storeAddress = allVenueX[i].location.address != undefined ? allVenueX[i].location.address : '' + 'No street info';
          var strCross = allVenueX[i].location.crossStreet != undefined ? allVenueX[i].location.crossStreet : '' + 'No intersection info';
          var storeAddr1 = allVenueX[i].location.formattedAddress[1] != undefined ? `${allVenueX[i].location.formattedAddress[1]},` : 'Belgrade,';
          var storeAddr2 = allVenueX[i].location.formattedAddress[2] != undefined ? `&nbsp; ${allVenueX[i].location.formattedAddress[2]}` : '&nbsp;  Serbia';
          var number = allVenueX[i].contact.formattedPhone != undefined ? '' + `${allVenueX[i].contact.formattedPhone}` : `<span id ='ifNoNumId'>No number info</span>`;
          var takeLatLon = 'https://www.google.com/maps/search/?api=1&query=' + allVenueX[i].location.lat + ',' + allVenueX[i].location.lng;

          document.getElementsByClassName('item2')[i].children[0].innerHTML = ` <h3 title = ${allVenueX[i].categories[0].name} id = 'titleFSQ1'> ${allVenueX[i].name} &nbsp;&nbsp;&nbsp; <img id = 'imgFSQ1' src =${storeImageFSQ} /> 
          <img title='hotel/hostel/apartments' id='defImg2' src=${defImgS}></h3>  <div id ='fsqTextDiv'> <p id ='adress4sq'> <i title='Location of place' class="fa fa-map-signs"></i> 
          <a id='latLonForSq' href=${takeLatLon} target=_blank title='Click to get there'>&nbsp;&nbsp;&nbsp;&nbsp;${storeAddress}</a> <br> <span title='Explanation, nearby streets' id='crossId'>&nbsp;&#9580; </span>
          &nbsp;&nbsp;&nbsp; ${strCross} <br> <i title='In which city?'  class="fa fa-address-card-o styleFaCard"></i> &nbsp;&nbsp; ${storeAddr1} ${storeAddr2}<br> 
          <span id ='boldNumId'><span title='Phone number' id ='phone4SqId'>&#9742;</span> &nbsp;&nbsp;&nbsp; ${number}</span></p>
          <img title='Internet adress' id ='style4ImgUrl' src ='https://image.flaticon.com/icons/svg/109/109476.svg' style="width:26px;height:28px;"/><p>&nbsp;<a id = 'sq4UrlTxt' href = ${storeUrl} target = "_blank">${prtUrl}...</a></p> 
          <p id='showOnSm'>Visit Site<p></div><p id ='categ4sqId'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Categories: <span id='sq4StoreCat'>${storeCateg}</span></p>`;
        }
      })
    fetch('https://api.foursquare.com/v2/venues/search?ll=44.8099375,20.4494431&categoryId=4d4b7105d754a06378d81259&&limit=50&client_id=KVMJZ1HNLYIFF1LFGHK2151NCNXXOOP3JTKNB1RGZNVBG4CU&client_secret=ISR0GKYPL22ETHND0VCOSIULQ2VZIH1IH2IUB3TWLLWIL3SC&v=20180130')
      .then(shopS => {
        return shopS.json();
      })
      .then(storeShops=> {
        console.log('shops API:', storeShops)
        let allVenueX = storeShops.response.venues;
        let eachVenId = [];
        let fours_id = ['SYQLZ1DXBSZYMCXG3QUGBBHDRM23YDDLO5SAZCALXMFUR3VS', 'KVMJZ1HNLYIFF1LFGHK2151NCNXXOOP3JTKNB1RGZNVBG4CU', 'LDSKATKF4V3TPCAOFYA1PQCXRETIDJOPHP32Z3KNMLEQ4TN2', 'MDCIAE2JRGE10XWT4KLWI4XGOFP4YB4EESP5BP0IYDKQTOSK'];
        let fours_secret = ['HHFBNGSRMFOUAFYQCTVMR1FK4HR4GZL5LO0T0BYGQVFUHSW0', 'ISR0GKYPL22ETHND0VCOSIULQ2VZIH1IH2IUB3TWLLWIL3SC', '44RRTC54ZUYV3XECLBVW45FSQZJRFPLXTCMXPHBS1SANQUO4', '0PXGSOEYP5R00BLFGMLK3P1MVPXSLTSF5RZU0MGZHTRFYWPF']

        for (let i = 0; i <= 40; i++) {
          eachVenId.push(allVenueX[i].id);
          /*
            fetch('https://api.foursquare.com/v2/venues/' + eachVenId[i]  + '?&client_id=SYQLZ1DXBSZYMCXG3QUGBBHDRM23YDDLO5SAZCALXMFUR3VS&client_secret=HHFBNGSRMFOUAFYQCTVMR1FK4HR4GZL5LO0T0BYGQVFUHSW0&v=20180130')
            .then((detailedShops)=> {
              return detailedShops.json();
            })
            .then((eachShop)=> {
              console.log('Detaljno o svakoj prodavn:', eachShop);
              //var d1 = document.getElementById('one');
              //d1.insertAdjacentHTML('afterend', '<div id="two">two</div>');
              let forNumber = eachShop.response.venue.contact.formattedPhone;
              let forLink   = eachShop.response.venue.url;
              return [forNumber, forLink]
            })*/
          // .then((takeArr)=>{
          localStorage.setItem('shopIds4', allVenueX[i].id);
          var storeImageFSQ = allVenueX[i].categories[0].icon.prefix + 64 + allVenueX[i].categories[0].icon.suffix;
          localStorage.setItem('eto2', 'images/imageeditNEW2.jpg')
          var defImgS = localStorage.getItem('eto2');
          var storeCateg = allVenueX[i].categories[0].name;
          var storeUrl = allVenueX[i].url != undefined ? allVenueX[i].url : 'No link info'; /* takeArr[1] != undefined ?  takeArr[1]  : 'No link info';*/
          var prtUrl = storeUrl.slice(0, 30);
          var storeAddress = allVenueX[i].location.address != undefined ? allVenueX[i].location.address : '' + 'No street info';
          var strCross = allVenueX[i].location.crossStreet != undefined ? allVenueX[i].location.crossStreet : '' + 'No intersection info';
          var storeAddr1 = allVenueX[i].location.formattedAddress[1] != undefined ? `${allVenueX[i].location.formattedAddress[1]},` : 'Belgrade,';
          var storeAddr2 = allVenueX[i].location.formattedAddress[2] != undefined ? `&nbsp; ${allVenueX[i].location.formattedAddress[2]}` : '&nbsp;  Serbia';
          var number = allVenueX[i].contact.formattedPhone != undefined ? '' + `${allVenueX[i].contact.formattedPhone}` : `<span id ='ifNoNumId'>No number info</span>`;
          var takeLatLon = 'https://www.google.com/maps/search/?api=1&query=' + allVenueX[i].location.lat + ',' + allVenueX[i].location.lng
          document.getElementsByClassName('item44')[i].children[0].innerHTML=`<h3 title = ${allVenueX[i].categories[0].name} id = 'titleFSQ1'> ${allVenueX[i].name} &nbsp;&nbsp; <img id = 'imgFSQ1' src =${storeImageFSQ} /> <img title='Shopping/stores' id='defImg3' src=${defImgS}></h3>
            <div id ='fsqTextDiv'> <p id ='adress4sq1'> <i title='Location of place' class="fa fa-map-signs"></i> <a id='latLonForSq' href=${takeLatLon} target=_blank title='Click to get there'>&nbsp;&nbsp;&nbsp;&nbsp;${storeAddress}</a> <br>
            <span title='Explanation, nearby streets' id='crossId'>&nbsp;&#9580; </span> &nbsp;&nbsp;&nbsp; ${strCross} <br> <i title='In which city?'  class="fa fa-address-card-o styleFaCard"></i> &nbsp;&nbsp; ${storeAddr1} ${storeAddr2}<br>
            <span id ='boldNumId'><span title='Phone number' id ='phone4SqId'>&#9742;</span> &nbsp;&nbsp;&nbsp; ${number}</span></p><img title='Internet adress' id ='style4ImgUrl' src ='https://image.flaticon.com/icons/svg/109/109476.svg' style="width:26px;height:28px;"/> 
            <p>&nbsp;<a id = 'sq4UrlTxt' href = ${storeUrl} target = "_blank">${prtUrl}...</a></p><p id='showOnSm'>Visit Site<p></div><p id ='categ4sqId'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Categories: <span id='sq4StoreCat'>${storeCateg}</span></p>`;
          // }) //then inner
        }
      })
  })
  .then(()=> {
    fetch('https://api.foursquare.com/v2/venues/search?ll=44.8099375,20.4494431&categoryId=4deefb944765f83613cdba6e&&limit=50&client_id=KVMJZ1HNLYIFF1LFGHK2151NCNXXOOP3JTKNB1RGZNVBG4CU&client_secret=ISR0GKYPL22ETHND0VCOSIULQ2VZIH1IH2IUB3TWLLWIL3SC&v=20180130')
      .then(historicSites=> {
        return historicSites.json();
      })
      .then((famSite)=> {
        console.log(' Historic sites in Bg:', famSite);
        let allVenueX = famSite.response.venues;
        localStorage.setItem('eto5', 'images/102753-200.png');
        for (let i = 0; i <= 40; i++){
          var storeImageFSQ = allVenueX[i].categories[0].icon.prefix + 64 + allVenueX[i].categories[0].icon.suffix;
          var defImgS = localStorage.getItem('eto5');
          var storeCateg = allVenueX[i].categories[0].name;
          var storeUrl = allVenueX[i].url != undefined ? allVenueX[i].url : 'No link info'; /*takeArr[1] != undefined ?  takeArr[1]  : 'No link info';*/
          var prtUrl = storeUrl.slice(0, 30);
          var storeAddress = allVenueX[i].location.address != undefined ? allVenueX[i].location.address : '' + 'No street info';
          var strCross = allVenueX[i].location.crossStreet != undefined ? allVenueX[i].location.crossStreet : '' + 'No intersection info';
          var storeAddr1 = allVenueX[i].location.formattedAddress[1] != undefined ? `${allVenueX[i].location.formattedAddress[1]},` : 'Belgrade,';
          var storeAddr2 = allVenueX[i].location.formattedAddress[2] != undefined ? `&nbsp; ${allVenueX[i].location.formattedAddress[2]}` : '&nbsp;  Serbia';
          var number = allVenueX[i].contact.formattedPhone != undefined ? '' + `${allVenueX[i].contact.formattedPhone}` : `<span id ='ifNoNumId'>No number info</span>`;
          var takeLatLon = 'https://www.google.com/maps/search/?api=1&query=' + allVenueX[i].location.lat + ',' + allVenueX[i].location.lng
          
           document.getElementsByClassName('item55')[i].children[0].innerHTML = `<h3 title = ${allVenueX[i].categories[0].name} id = 'titleFSQ1'> ${allVenueX[i].name} &nbsp;&nbsp;&nbsp;<img id= 'imgFSQ1' src =${storeImageFSQ} />
             <img title='sites/attractions' id='defImg3' src=${defImgS}></h3>
             <div id ='fsqTextDiv'> <p id ='adress4sq1'> <i title='Location of place' class="fa fa-map-signs"></i> <a id='latLonForSq' href=${takeLatLon} target=_blank title='Click to get there'>&nbsp;&nbsp;&nbsp;&nbsp;${storeAddress}</a><br>
             <span title='Explanation, nearby streets' id='crossId'>&nbsp;&#9580; </span> &nbsp;&nbsp;&nbsp; ${strCross} <br> <i title='In which city?'  class="fa fa-address-card-o styleFaCard"></i> &nbsp;&nbsp; ${storeAddr1} ${storeAddr2}<br>
             <span id ='boldNumId'><span title='Phone number' id ='phone4SqId'>&#9742;</span> &nbsp;&nbsp;&nbsp; ${number}</span></p>
             <img title='Internet adress' id ='style4ImgUrl' src='https://image.flaticon.com/icons/svg/109/109476.svg' style="width:26px;height:28px;"/>
             <p>&nbsp;<a id = 'sq4UrlTxt' href = ${storeUrl} target = "_blank">${prtUrl}...</a></p><p id='showOnSm'>Visit Site<p></div><p id ='categ4sqId'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Categories: <span id='sq4StoreCat'>${storeCateg}</span></p>`;
        };
      })
  }) //last then
