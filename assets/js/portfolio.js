// console.log('portfolio working');

// http://localhost/portfoliodemo/portfolio.json
// https://pradeepbhosle8.github.io/pradeepdbport/db.json

fetch('https://pradeepbhosle8.github.io/pradeepdbport/db.json')
.then((res)=>{
    return res.json();
}).then((datafilter)=>{
// console.log(datafilter);
let hrmlData= '';
    datafilter.portfolio.forEach((item, index) => {
    // console.log(item, index);
    hrmlData += `
   
    <div class="col-md-4 col-sm-6  portfolio-item mb-3"  data-filter="${item.category}" >
    <a href="#${item.unique}" class="portfolio-link"  data-toggle="modal" >
        <div class="bar">
            <h2>${item.caption}</h2>
            <i></i>
        </div>
        <div class="barA">
            <h2>${item.skill}</h2>
           
        </div>
        <div class="portfolio-hover">
            <div class="portfolio-hover-content">
                
                <i class="far fa-eye"></i>	
            </div>
        </div>
        <div class="picture_img">
      
          <img src="./assets/images/portfolio/${item.port_img}" class="img-fluid" alt="">
        </div>
       
    </a>
  
  </div>

 
  
  
    `;
})
    document.getElementById('itemThmb').innerHTML = hrmlData;


    // filter data on click
    let filterTabdiv = document.querySelectorAll('.filter');
    // console.log(filterTabdiv);

    // forEach loope filter gallry
    filterTabdiv.forEach((filter =>{
        filter.addEventListener('click', ()=>{
            let selectedFilter = filter.getAttribute('data-filter');
            // console.log(selectedFilter);
            // console.log(filter);
            filter.classList.add('active');
            let noteFilter = document.querySelectorAll(`.filter:not([data-filter='${selectedFilter}'])`);
            console.log(noteFilter);
            noteFilter.forEach((notlist)=>{
                // console.log(notlist);
                notlist.classList.remove('active');
            })
            
            // noteFilter.classList.remove('active');

            let itemsToHide = document.querySelectorAll(`.projects .portfolio-item:not([data-filter='${selectedFilter}'])`);
            // console.log(itemsToHide);
            let itemsToShow = document.querySelectorAll(`.portfolio-item[data-filter='${selectedFilter}']`);
            // console.log(itemsToShow);

            if (selectedFilter == '*') {
                itemsToHide = [];
                itemsToShow = document.querySelectorAll('.projects [data-filter]');
               
              }

              itemsToHide.forEach(el => {
                el.classList.add('remove');
                el.classList.remove('show');
                el.classList.add('animate__animated');
                el.classList.add('animate__zoomIn');
                el.style.setProperty('--animate-duration', '.5s');
               
              });

              itemsToShow.forEach(el => {
                el.classList.remove('remove');
                el.classList.add('show'); 
               el.classList.add('animate__animated');
               el.classList.add('animate__zoomIn');
               el.style.setProperty('--animate-duration', '.5s');
               
              });

        })
    }))
   


})


// modal popup

fetch('https://pradeepbhosle8.github.io/pradeepdbport/db.json')
.then((res)=>{
    return res.json();
}).then((dataModalpop)=>{

    let hrmlModalpop= '';

    dataModalpop.portfolio.forEach((modalpop, index) => {
        hrmlModalpop += `
                <div class="portfolio-modal modal fade p-0" id="${modalpop.unique}" tabindex="-1" role="dialog" aria-hidden="true" style="display: none;">
                <div class="modal-dialog">
                <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                <div class="rl">
                </div>
                </div>
                </div>
                <div class="container">
                <div class="row">
                <div class="col-lg-12 ">
                <div class="modal-body">
                <!-- Project Details Go Here -->
                <div class="row">
                <div class="col-sm-7">

                <h2>${modalpop.caption}</h2>

                <img class="img-fluid img-centered" src="./assets/images/portfolio/${modalpop.port_img}" alt="">

                ${(modalpop.visit_website == '' ? `<a href="#"  class="btn btn-info"  style='pointer-events: none;' >No Link</a>`: `<a href="${modalpop.visit_website}" target="_blank" class="btn btn-info">View Link</a>` )
                  }
                
                </div>

                <div class="col-sm-5">
                
                <p class="item-intro text-muted">${modalpop.description}</p>
                <p class="mt-2 mb-2 text-info text-uppercase"><span><b>Skills : </b></span>${modalpop.skill}</p>
                <ul class="list-inline">

                ${modalpop.achivement.map(function (key,index) {
                    // console.log(key, index)
                    return `<li> ${key} </li>`;          
                }).join('')}

                </ul>

                </div>
                </div>





                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
        `;
    })
    document.querySelector('.modalPopView').innerHTML = hrmlModalpop;

})