// console.log('PRoducts js WOrking');
// get products from json file

fetch('https://mydb-bc0d1.firebaseio.com/products.json')
.then((res)=>{
    return res.json()
}).then((data)=>{
    console.log(data);

    let html ='';

    data.forEach((element, index) => {
        // console.log(element);    
        html +=
        `
            <div class="product" data-id="${element.category}">
            <div class="product-img">
            <img src="./assets/imges/${element.image}" alt="">
            </div>
            <div class="product-content">
            <h3>${element.title}</h3>
            <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
            </div>
            <div class="product-price">
            <h4><i class="fas fa-rupee-sign"></i>${element.Price}</h4>
            </div>
            </div>
            <ul class="product-icon">
            <li><a href=""> <i class="far fa-eye"></i></a></li>
            <li><a href=""> <i class="far fa-heart"></i></a></li>
            <li><a href=""> <i class="fas fa-shopping-cart"></i></a></li>
            </ul>
            </div>
        `;
    });
    document.querySelector('.product_filter').innerHTML = html;

    // filter data on click
    let filterBtn = document.querySelectorAll('.filter-btn');
    // console.log(filterBtn);
    filterBtn.forEach((filter)=>{
        // console.log(filter);
        filter.addEventListener('click', ()=>{
            let selectFilter = filter.getAttribute('data-id');
            console.log(selectFilter);
            filter.classList.add('active');
            // let noteFilter = document.querySelectorAll(`.filter:not([data-id='${selectFilter}'])`);
            let noteFilter = document.querySelectorAll(`.filter-btn:not([data-id='${selectFilter}'])`);
            // console.log(noteFilter);
            noteFilter.forEach((nolist)=>{
                nolist.classList.remove('active');
            })

            let productHide =document.querySelectorAll(`.product_filter .product:not([data-id="${selectFilter}"])`);
            console.log(productHide);
            let ProductSHow = document.querySelectorAll(`.product[data-id='${selectFilter}']`);
            console.log(ProductSHow);

            if (selectFilter === '*') {
                productHide = [];
                ProductSHow = document.querySelectorAll('.product[data-id]');
               
              }

            productHide.forEach(el =>{
                el.classList.add('remove');
                el.classList.remove('show');
                el.classList.add('animate__animated');
                el.classList.add('animate__backInUp');
            })

            ProductSHow.forEach((el=>{
                el.classList.add('show');
                el.classList.remove('remove');
                el.classList.add('animate__animated');
                el.classList.add('animate__backInUp');
            }))
        })
    })
})


