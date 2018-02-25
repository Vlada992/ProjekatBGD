

      

      

fetch('https://api.foursquare.com/v2/venues/search?ll=44.8099375,20.4494431&categoryId=4d4b7105d754a06374d81259&&limit=50&client_id=SYQLZ1DXBSZYMCXG3QUGBBHDRM23YDDLO5SAZCALXMFUR3VS&client_secret=HHFBNGSRMFOUAFYQCTVMR1FK4HR4GZL5LO0T0BYGQVFUHSW0&v=20180130')
.then(function(xVenAll){
  return xVenAll.json()
})
.then(venueY => {
    console.log(venueY);
      console.log('JASNIJE VENUES:', venueY.response.venues)
      
        var allVenueX     = venueY.response.venues;
        var eachVenId;
     for(var i = 0; i < 50; i++) { 
        
    var storeImageFSQ = allVenueX[i].categories[0].icon.prefix + 64 +allVenueX[i].categories[0].icon.suffix;
    var storeCateg    = allVenueX[i].categories[0].name;
    var storeUrl      = allVenueX[i].url  != undefined ?  allVenueX[i].url  : 'No link info'
    var storeAddress  = allVenueX[i].location.address != undefined ?   allVenueX[i].location.address    : ''+'No street info';
    var strCross      = allVenueX[i].location.crossStreet != undefined ? allVenueX[i].location.crossStreet : ''+'No intersection info';
    var storeAddr1    = allVenueX[i].location.formattedAddress[1] != undefined ? `${allVenueX[i].location.formattedAddress[1]},`  : 'Belgrade,';
    var storeAddr2    = allVenueX[i].location.formattedAddress[2] != undefined ?  `&nbsp; ${allVenueX[i].location.formattedAddress[2]}` : '&nbsp;  Serbia';
    var  number       = allVenueX[i].contact.formattedPhone != undefined ?  ''+`${allVenueX[i].contact.formattedPhone}` : `<span id ='ifNoNumId'>No number info</span>`;
    document.getElementsByClassName('item4')[i].children[0].innerHTML =   ` <h3 title = ${allVenueX[i].categories[0].name} id = 'titleFSQ1'> ${allVenueX[i].name} &nbsp;&nbsp;&nbsp; <img id = 'imgFSQ1' src =${storeImageFSQ} /></h3>  <div id ='fsqTextDiv'> <p id ='adress4sq'> <i class="fa fa-map-signs"></i> &nbsp;&nbsp;&nbsp;&nbsp;${storeAddress}<br> <span id='crossId'>&nbsp;&#9580; </span> &nbsp;&nbsp;&nbsp; ${strCross} <br><br><i class="fa fa-address-card-o"></i> &nbsp;&nbsp; ${storeAddr1} ${storeAddr2}<br> <span id ='boldNumId'><span id ='phone4SqId'>&#9742;</span> &nbsp;&nbsp;&nbsp; ${number}</span></p><img id ='style4ImgUrl' src ='https://image.flaticon.com/icons/svg/109/109476.svg' style="width:26px;height:28px;"/> <p>&nbsp;<a id = 'sq4UrlTxt' href = ${storeUrl} target = "_blank">&nbsp;${storeUrl}</a></p></div> <p id ='categ4sqId'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Categories: <span id='sq4StoreCat'>${storeCateg}</span></p>`

    //console.log(document.getElementsByClassName('item4'))
      eachVenId =  allVenueX[i].id;
    /*fetch('https://api.foursquare.com/v2/venues/' + eachVenId + '?&client_id=SYQLZ1DXBSZYMCXG3QUGBBHDRM23YDDLO5SAZCALXMFUR3VS&client_secret=HHFBNGSRMFOUAFYQCTVMR1FK4HR4GZL5LO0T0BYGQVFUHSW0&v=20180130')
        .then( eachVenue =>{
          return eachVenue.json();
        })
        .then(eachVen => {
          console.log(eachVen);

              //document.getElementsByClassName('item')[i].children[0].innerHTML =   ` <h3 title = ${allVenueX[i].categories[0].name} id = 'titleFSQ1'> ${allVenueX[i].name} &nbsp;&nbsp;&nbsp; <img id = 'imgFSQ1' src =${storeImageFSQ} /></h3>  <div id ='fsqTextDiv'> <p id ='adress4sq'> <i class="fa fa-map-signs"></i> &nbsp;&nbsp;&nbsp;&nbsp;${storeAddress}<br> <span id='crossId'>&nbsp;&#9580; </span> &nbsp;&nbsp;&nbsp; ${strCross} <br><br><i class="fa fa-address-card-o"></i> &nbsp;&nbsp; ${storeAddr1} ${storeAddr2}<br> <span id ='boldNumId'><span id ='phone4SqId'>&#9742;</span> &nbsp;&nbsp;&nbsp; ${number}</span></p><img id ='style4ImgUrl' src ='https://image.flaticon.com/icons/svg/109/109476.svg' style="width:26px;height:28px;"/> <p>&nbsp;<a id = 'sq4UrlTxt' href = ${storeUrl} target = "_blank">&nbsp;${storeUrl}</a></p></div> <p id ='categ4sqId'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Categories: <span id='sq4StoreCat'>${storeCateg}</span></p>`
          //console.log(document.getElementbyClassName('item'));

        })
      */
   
     } //END OF LOOP
})
.catch(function(error){
  console.log(error)
})
.then(() =>{

  $.ajax({
    //http://api.eventful.com/json/events/search?app_key=RWcbt5k294VSHHmJ&q=music&location=Belgrade&date=Future
    
      url: 'http://api.eventful.com/json/events/search?app_key=RWcbt5k294VSHHmJ&location=Belgrade&date=Future&page_size=50',
      accepts:{accepts: "application/json"},
      dataType: 'jsonp',
      success: function(eventJson){
        console.log(eventJson);
        console.log(eventJson.events.event)
      }
    }) 
  console.log('test..');

/*
  fetch('http://api.eventful.com/json/events/search?app_key=RWcbt5k294VSHHmJ&q=music&location=Belgrade&date=Future')
  .then(function(eventFullX){
    console.log(eventFullX);
    return eventFullX.json()
  })
  .then(function(eventF){
    console.log(eventF);
  })
 */

})

 

/*End of whatToSee.js      ///// // /////////////////*/


