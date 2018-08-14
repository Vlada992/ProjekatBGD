let pgid = [], togleR = true, brushPlt = document.getElementById('paletBrush')

function invokSkver(e, visible){
  let eachId = e.path["0"].id
  Array.from($('.icnSkver')).forEach(ii => pgid.push(ii.id));
  document.getElementById(eachId).style.borderBottom = '4px solid #8CB240';
  document.getElementById(eachId).style.color = '#8CB240';    
  pgid.forEach(each => { 
  if(document.getElementById(each).style.borderBottom)
        document.getElementById(each).style.borderBottom = '';
        document.getElementById(each).style.color = '';
        document.getElementById(eachId).style.borderBottom = '4px solid  #8CB240';
        //localStorage.setItemm('borBot', )
        document.getElementById(eachId).style.color = '#8CB240';     
  });
  document.getElementById(visible).style.display  = 'block';
  Array.from(arguments).slice(2).forEach(arg =>  document.getElementById(arg).style.display = 'none')
};


(()=>{
$('#stylePalet').hover(
  () =>{
    let imgSrc = document.getElementById('stylePalet').src,  len1 = imgSrc.length;
    let imgP = imgSrc.slice(len1 - 5, len1 - 4);
    imgP == 'y' ? brushPlt.src = 'images/smallBrush.png' : brushPlt.src = 'images/brushNo.png';
  },() => brushPlt.src = '' )
})();

function changeColor(paletImg){
 let clrA= ['thirdCol','fourthCol','divFourSQ','secondCol', 'fifthCol'], pagesArr = Array.from(arguments).slice(1)
 document.getElementById('paletBrush').src = '';
 if(togleR){
 clrA.forEach((color, ind)=> {
  document.getElementById(pagesArr[ind]).classList.remove(color);
  document.getElementById(pagesArr[ind]).classList.add( color + '1');
  document.getElementById(paletImg).src = 'images/paletGreen.png';
 });
 togleR = false;
 }else {
  clrA.forEach((color, ind) => {
  document.getElementById(pagesArr[ind]).classList.remove(color + '1');
  document.getElementById(pagesArr[ind]).classList.add(color);
  document.getElementById(paletImg).src = 'images/paletEmpty.png';
  });
  togleR = true;
};
};

fetch('https://api.foursquare.com/v2/venues/search?ll=44.8099375,20.4494431&categoryId=4d4b7105d754a06374d81259&&limit=50&client_id=SYQLZ1DXBSZYMCXG3QUGBBHDRM23YDDLO5SAZCALXMFUR3VS&client_secret=HHFBNGSRMFOUAFYQCTVMR1FK4HR4GZL5LO0T0BYGQVFUHSW0&v=20180130')
  .then(venueAPI =>{
    return venueAPI.json()})
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
  .then(() => {
    $.ajax({
      url: 'http://api.eventful.com/json/events/search?app_key=RWcbt5k294VSHHmJ&l=Belgrade&date=Future&image_sizes=block100,medium,dropshadow250&page_size=50&within=30',
      accepts:{
        accepts: "application/json  charset=utf-8"
      },
      dataType: 'jsonp',
      success: eventJson=> {
        var takeEvent = eventJson.events.event;
        var myDays = 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday';
        var  myMont = 'January, February, March, April, May, June, July, August, September, October, November, December';
        localStorage.setItem('dayW', myDays);
        localStorage.setItem('monthS', myMont);
        let weekday = localStorage.getItem('dayW').split(",");
        let month = localStorage.getItem('monthS').split(",");
        var imageArr = [], iterArr = [], itr, takeImg;

        for(let l = 0; l <= 20; l++){
          itr = takeEvent[l];
          takeImg = itr.image != null ? String(itr.image.medium.url) : 'no image'
          if (itr.image != null && itr.image.medium.url.startsWith('h')) {
            imageArr.push(itr.image.medium.url);
            iterArr.push(l);
          } else if (itr.image != null && itr.image.medium.url.startsWith('/')) {
            imageArr.push('http:' + itr.image.medium.url)
            iterArr.push(l)
          }
          var countName = itr.country_name;
          var strTime = itr.start_time;
          var evTitle = itr.title;
          var evUrl = itr.url;
          var eveUrlPrt = evUrl.slice(0, 28);
          var venAdrr = itr.venue_address != undefined ? itr.venue_address : '&nbsp; No address' + ` &nbsp; <img src="images/no-waiting.png"/>`
          var venName = itr.venue_name;
          var venUrl = itr.venue_url != undefined ? itr.venue_url : ' No link ' + ` &nbsp; <img src="images/no-waiting.png"/>`
          var monthPrt = strTime.slice(5, 7).charAt(0) != 0 ? strTime.slice(5, 7) : strTime.slice(6, 7);
          var monIs = month[monthPrt - 1];
          var dayIs = strTime.slice(8, 10).charAt(0) != 0 ? strTime.slice(8, 10) : strTime.slice(9, 10);
          var yrIs = strTime.slice(0, 4);
          var toStr = strTime.slice(0, 10) + "";
          var dSplit = toStr.split("-");
          var namD = new Date(dSplit[0], dSplit[1], dSplit[2]);
          var dayName = weekday[namD.getDay()];
          var opnTime = strTime.slice(10, 13) < 12 && strTime.slice(10, 13) > 00 ? strTime.slice(10, 16) + " AM" : strTime.slice(10, 16) + ' PM'
          var evnLoc = itr.olson_path.slice(7);
          var takeDesc = itr.description != undefined ? itr.description.slice(0, 38) : 'No description'
          var takeLL = itr.latitude.slice(itr.latitude.length - 2) != 86 ? 'https://www.google.com/maps/search/?api=1&query=' + itr.latitude + ',' + itr.longitude : '';

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
      .then(responseHotelsApi => {
        return responseHotelsApi.json()})
      .then(hotelS=> {
        let allVenueX = hotelS.response.venues;
        for (let i = 0; i <= 40; i++){
          var x = allVenueX[i],  xL = allVenueX[i].location, xC = allVenueX[i].categories[0];
          var storeImageFSQ =xC.icon.prefix + 64 + xC.icon.suffix;
          localStorage.setItem('eto1', 'images/imageeditNEW1.png')
          var defImgS = localStorage.getItem('eto1');
          var storeCateg = xC.name;
          var storeUrl = x.url != undefined ? x.url : 'No link info';
          var prtUrl = storeUrl.slice(0, 30);
          var Address = xL.address != undefined ? xL.address : '' + 'No street info';
          var strCross = xL.crossStreet != undefined ? xL.crossStreet : '' + 'No intersection info';
          var Addr1 = xL.formattedAddress[1] != undefined ? `${xL.formattedAddress[1]},` : 'Belgrade,';
          var Addr2 = xL.formattedAddress[2] != undefined ? `&nbsp; ${xL.formattedAddress[2]}` : '&nbsp;  Serbia';
          var number = x.contact.formattedPhone != undefined ? '' + `${x.contact.formattedPhone}` : `<span id ='ifNoNumId'>No number info</span>`;
          var latLon = 'https://www.google.com/maps/search/?api=1&query=' + xL.lat + ',' + xL.lng;

          document.getElementsByClassName('item2')[i].children[0].innerHTML = ` <h3 title = ${xC.name} id = 'titleFSQ1'> ${x.name} &nbsp;&nbsp;&nbsp; <img id = 'imgFSQ1' src =${storeImageFSQ} /> 
          <img title='hotel/hostel/apartments' id='defImg2' src=${defImgS}></h3>  <div id ='fsqTextDiv'> <p id ='adress4sq'> <i title='Location of place' class="fa fa-map-signs"></i> 
          <a id='latLonForSq' href=${latLon} target=_blank title='Click to get there'>&nbsp;&nbsp;&nbsp;&nbsp;${Address}</a> <br> <span title='Explanation, nearby streets' id='crossId'>&nbsp;&#9580; </span>
          &nbsp;&nbsp;&nbsp; ${strCross} <br> <i title='In which city?'  class="fa fa-address-card-o styleFaCard"></i> &nbsp;&nbsp; ${Addr1} ${Addr2}<br> 
          <span id ='boldNumId'><span title='Phone number' id ='phone4SqId'>&#9742;</span> &nbsp;&nbsp;&nbsp; ${number}</span></p>
          <img title='Internet adress' id ='style4ImgUrl' src ='https://image.flaticon.com/icons/svg/109/109476.svg' style="width:26px;height:28px;"/><p>&nbsp;<a id = 'sq4UrlTxt' href = ${storeUrl} target = "_blank">${prtUrl}...</a></p> 
          <p id='showOnSm'>Visit Site<p></div><p id ='categ4sqId'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Categories: <span id='sq4StoreCat'>${storeCateg}</span></p>`;
        }
      })
    fetch('https://api.foursquare.com/v2/venues/search?ll=44.8099375,20.4494431&categoryId=4d4b7105d754a06378d81259&&limit=50&client_id=KVMJZ1HNLYIFF1LFGHK2151NCNXXOOP3JTKNB1RGZNVBG4CU&client_secret=ISR0GKYPL22ETHND0VCOSIULQ2VZIH1IH2IUB3TWLLWIL3SC&v=20180130')
      .then(allShopsApi => {
        return allShopsApi.json()})
      .then(storeShops=> {
        let allVenueX = storeShops.response.venues, eachVenId = [];
         for (let i = 0; i <= 40; i++){
          let sh = allVenueX[i], sL = allVenueX[i].location, sC = allVenueX[i].categories[0];
          eachVenId.push(sh.id);
           /*fetch('https://api.foursquare.com/v2/venues/' + eachVenId[i]  + '?&client_id=SYQLZ1DXBSZYMCXG3QUGBBHDRM23YDDLO5SAZCALXMFUR3VS&client_secret=HHFBNGSRMFOUAFYQCTVMR1FK4HR4GZL5LO0T0BYGQVFUHSW0&v=20180130')
            .then((detailedShops)=> {
              return detailedShops.json();
            })
            .then((eachShop)=>{
              //var d1 = document.getElementById('one');
              //d1.insertAdjacentHTML('afterend', '<div id="two">two</div>');
              let forNumber = eachShop.response.venue.contact.formattedPhone;
              let forLink   = eachShop.response.venue.url;
              return [forNumber, forLink]
            })*/
          // .then((takeArr)=>{
          localStorage.setItem('shopIds4', sh.id);
          var storeImageFSQ = sC.icon.prefix + 64 + sC.icon.suffix;
          localStorage.setItem('eto2', 'images/imageeditNEW2.jpg')
          var defImgS = localStorage.getItem('eto2'), Categ = sC.name;
          var storeUrl = sh.url != undefined ? sh.url : 'No link info', prtUrl = storeUrl.slice(0, 30);
          var Address =  sL.address != undefined ?  sL.address : '' + 'No street info';
          var strCross =  sL.crossStreet != undefined ?  sL.crossStreet : '' + 'No intersection info';
          var Adrs1 =  sL.formattedAddress[1] != undefined ? `${sL.formattedAddress[1]},` : 'Belgrade,';
          var Adrs2 =  sL.formattedAddress[2] != undefined ? `&nbsp; ${ sL.formattedAddress[2]}` : '&nbsp;  Serbia';
          var number = sh.contact.formattedPhone != undefined ? '' + `${sh.contact.formattedPhone}` : `<span id ='ifNoNumId'>No number info</span>`;
          var latLon = 'https://www.google.com/maps/search/?api=1&query=' +  sL.lat + ',' + sL.lng
          
          document.getElementsByClassName('item44')[i].children[0].innerHTML=`<h3 title = ${sC.name} id = 'titleFSQ1'> ${sh.name} &nbsp;&nbsp; <img id = 'imgFSQ1' src =${storeImageFSQ} /> <img title='Shopping/stores' id='defImg3' src=${defImgS}></h3>
            <div id ='fsqTextDiv'> <p id ='adress4sq1'> <i title='Location of place' class="fa fa-map-signs"></i> <a id='latLonForSq' href=${latLon} target=_blank title='Click to get there'>&nbsp;&nbsp;&nbsp;&nbsp;${Address}</a> <br>
            <span title='Explanation, nearby streets' id='crossId'>&nbsp;&#9580; </span> &nbsp;&nbsp;&nbsp; ${strCross} <br> <i title='In which city?'  class="fa fa-address-card-o styleFaCard"></i> &nbsp;&nbsp; ${Adrs1} ${Adrs2}<br>
            <span id ='boldNumId'><span title='Phone number' id ='phone4SqId'>&#9742;</span> &nbsp;&nbsp;&nbsp; ${number}</span></p><img title='Internet adress' id ='style4ImgUrl' src ='https://image.flaticon.com/icons/svg/109/109476.svg' style="width:26px;height:28px;"/> 
            <p>&nbsp;<a id = 'sq4UrlTxt' href = ${storeUrl} target = "_blank">${prtUrl}...</a></p><p id='showOnSm'>Visit Site<p></div><p id ='categ4sqId'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Categories: <span id='sq4StoreCat'>${Categ}</span></p>`;
          // }) //then
        }
      })
  })
  .then(()=> {
    fetch('https://api.foursquare.com/v2/venues/search?ll=44.8099375,20.4494431&categoryId=4deefb944765f83613cdba6e&&limit=50&client_id=KVMJZ1HNLYIFF1LFGHK2151NCNXXOOP3JTKNB1RGZNVBG4CU&client_secret=ISR0GKYPL22ETHND0VCOSIULQ2VZIH1IH2IUB3TWLLWIL3SC&v=20180130')
      .then(historicSites=> {
        return historicSites.json()})
      .then(famSite=> {
        let allFamSites= famSite.response.venues
        localStorage.setItem('eto5', 'images/102753-200.png');
        for (let i = 0; i <= 40; i++){
         let x = allFamSites[i], xL = allFamSites[i].location, xC =  allFamSites[i].categories[0];
          var imgFS = xC.icon.prefix + 64 + xC.icon.suffix, defImgS = localStorage.getItem('eto5');
          var categ = xC.name;
          var url = x.url != undefined ? x.url : 'No link info', prtUrl = url.slice(0, 30);
          var Address =  xL.address != undefined ?  xL.address : '' + 'No street info';
          var strCross =  xL.crossStreet != undefined ?  xL.crossStreet : '' + 'No intersection info';
          var Addr1 =  xL.formattedAddress[1] != undefined ? `${ xL.formattedAddress[1]},` : 'Belgrade,';
          var Addr2 =  xL.formattedAddress[2] != undefined ? `&nbsp; ${ xL.formattedAddress[2]}` : '&nbsp;  Serbia';
          var number = x.contact.formattedPhone != undefined ? '' + `${x.contact.formattedPhone}` : `<span id ='ifNoNumId'>No number info</span>`;
          var LatLon = 'https://www.google.com/maps/search/?api=1&query=' +  xL.lat + ',' +  xL.lng
           
          document.getElementsByClassName('item55')[i].children[0].innerHTML = `<h3 title = ${xC.name} id = 'titleFSQ1'> ${x.name} &nbsp;&nbsp;&nbsp;<img id= 'imgFSQ1' src =${imgFS} />
          <img title='sites/attractions' id='defImg3' src=${defImgS}></h3> <div id ='fsqTextDiv'> <p id ='adress4sq1'> <i title='Location of place' class="fa fa-map-signs"></i>
           <a id='latLonForSq' href=${LatLon} target=_blank title='Click to get there'>&nbsp;&nbsp;&nbsp;&nbsp;${Address}</a><br>
          <span title='Explanation, nearby streets' id='crossId'>&nbsp;&#9580; </span> &nbsp;&nbsp;&nbsp; ${strCross} <br> <i title='In which city?'  class="fa fa-address-card-o styleFaCard"></i> &nbsp;&nbsp; ${Addr1} ${Addr2}<br>
          <span id ='boldNumId'><span title='Phone number' id ='phone4SqId'>&#9742;</span> &nbsp;&nbsp;&nbsp; ${number}</span></p>
          <img title='Internet adress' id ='style4ImgUrl' src='https://image.flaticon.com/icons/svg/109/109476.svg' style="width:26px;height:28px;"/>
          <p>&nbsp;<a id = 'sq4UrlTxt' href = ${url} target = "_blank">${prtUrl}...</a></p><p id='showOnSm'>Visit Site<p></div><p id ='categ4sqId'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Categories: <span id='sq4StoreCat'>${categ}</span></p>`;
        };
      })
  }) //last then


  