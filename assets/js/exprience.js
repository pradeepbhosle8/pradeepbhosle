console.log('Exprience js working');
// https://pradeepbhosle8.github.io/pradeepdbport/db.json
fetch('https://pradeepbhosle8.github.io/pradeepdbport/db.json')
.then((res)=>{
    return res.json();
}).then((data)=>{
    // console.log(data);
    
    let htmlData = '';
  
    
    data.exprience.forEach((exprience, index) => {
        // console.log(exprience.tags.length);
        // console.log(exprience, index);
       
        htmlData += `
       
                <div class="swiper-slide">

                <div class=" mb-3">

                <div class="card">
                <div class="content">

                <div class="logo">
               
                <h2> ${exprience.company} </h2>
                </div>
                <h2><strong>${exprience.jointDate} - ${exprience.leaveDate}</strong></h2>
                <p>
                <i class="fas fa-link"></i>
                <a
                href="${exprience.companyurl}"><small>${exprience.companyurl}</small></a>
                </p>
                <div class="tags">
                ${exprience.tags.map(function (key,index) {
                    // console.log(key, index)
                    return `<span> ${key} </span>`;          
                }).join('')}
                </div>
                </div>
                <div class="boton">
                <ul class="scrollbar" id="style-3">
                
                ${exprience.achivement.map(function (key,index) {
                    // console.log(key, index)
                    return `<li> ${key} </li>`;          
                }).join('')}
              
               
                </ul>
                </div>
                </div>

                </div>
                </div>
             

        `;
    });
   let xxx = document.querySelector('.testingslider .swiper-container  .swiper-wrapper');
   xxx.innerHTML = htmlData;
    // document.querySelector('.testingslider .skill-slider').innerHTML = htmlData;

})