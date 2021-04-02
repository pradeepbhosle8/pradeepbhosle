console.log('WOrking shoppong cart');

//*********************************
// Shopping cart 
//*********************************

function shopingCartitem(name, image, price, quantity){
	this.name = name;
	this.image = image;
	this.price = price;
	this.quantity = quantity;
}

function shoppingCart(){

}

shoppingCart.addItemToCart = (name)=>{
// console.log(name);
		saveLocalStorage();
		for(let item in cartObj){
		console.log(name);
		// console.log(cartObj[item].name);
		if(cartObj[item].name === name){
		cartObj[item].quantity++;
		localStorage.setItem('productCart', JSON.stringify(cartObj));
		}

		}
		let item = newProductItem;
		cartObj.push(item);
		
		localStorage.setItem('productCart', JSON.stringify(cartObj));
displayUiDOMCart();
		
}

shoppingCart.removeItem = (name)=>{
	saveLocalStorage();
	for(let item in cartObj){
		// console.log(name);
		// console.log(cartObj[item].name);
		if(cartObj[item].name === name){
			cartObj[item].quantity--;
			localStorage.setItem('productCart', JSON.stringify(cartObj));
			
			}
			console.log(cartObj[item].quantity);
			if(cartObj[item].quantity === 0){
				cartObj.splice(item, 1);
				
				break;
			}
		}
		localStorage.setItem('productCart', JSON.stringify(cartObj));
}


addEventListener('DOMContentLoaded', ()=>{
	// console.log('DOM loaded WOrking');
	displayUiDOMCart();
	cartQuantity();	
	whishlistcount();


		$('.product-widget').on("click", ".plus-item", function() {
		
			console.log('pluse click');
		// console.log(this);
		let name = $(this).data('name');
		shoppingCart.addItemToCart(name);
		displayUiDOMCart();
		});

		$('.product-widget').on("click", ".minus-item", function(event) {
			
		console.log(this);
		var name = $(this).data('name');
		shoppingCart.removeItem(name)
		displayUiDOMCart();
		});





})





// add products 

let addproductsItem = document.querySelectorAll('[data-action="add_to_cart"]');
// console.log(addproductsItem);
addproductsItem.forEach((addbtntocart) =>{
	// console.log(addbtntocart);
	addbtntocart.addEventListener('click', (addtocartconfirm)=>{
		//btn parent
		let addtocartbtn = addbtntocart.parentNode.parentNode.parentNode;
		// console.log(addtocartbtn);
		let products = {
			name: addtocartbtn.querySelector('[data-action="product_name"]').innerText,
			image: addtocartbtn.querySelector('[data-action="product_img"]').getAttribute('src'),
			price: addtocartbtn.querySelector('[data-action="product_price"]').innerText

		}
		console.log(products);

		let newProductItem = new shopingCartitem(products.name, products.image, products.price, 1);
		// console.log(newProductItem);

		

		saveLocalStorage();

		// quantity incrase by click
		for(let item in cartObj){
			// console.log(cartObj[item].name === products.name);
			//console.log(cartObj[item].quantity++);
			// console.log(cartObj[item].quantity);
			if(cartObj[item].name === products.name){
				cartObj[item].quantity++;
				//console.log(cartObj[item].quantity++);
				// qunatity store locastorage
				localStorage.setItem('productCart', JSON.stringify(cartObj));
				displayUiDOMCart();
				return;
			}
		}	

		let item = newProductItem;
		cartObj.push(item);
		localStorage.setItem('productCart', JSON.stringify(cartObj));

		displayUiDOMCart();
		cartQuantity();
		whishlistcount();

	});


});

// add whihlist
let addtowhishlist = document.querySelectorAll('[data-action="add_to_wishlist"]');
// console.log(addtowhishlist);
addtowhishlist.forEach((addtowhishlistitem) =>{
	addtowhishlistitem.addEventListener('click', (addtowhishlistconfirm)=>{
		// console.log(addtowhishlistconfirm);
		let addtowhishlisttbtn = addtowhishlistitem.parentNode.parentNode.parentNode;
		// console.log(addtowhishlisttbtn);
		let productswhislist = {
			name: addtowhishlisttbtn.querySelector('[data-action="product_name"]').innerText,
			image: addtowhishlisttbtn.querySelector('[data-action="product_img"]').getAttribute('src'),
			price: addtowhishlisttbtn.querySelector('[data-action="product_price"]').innerText

		}
		// console.log(productswhislist);
			let newProductItemWhishlist = new shopingCartitem(productswhislist.name, productswhislist.image, productswhislist.price, 1);
			// console.log(newProductItemWhishlist);
			
			let productcart = localStorage.getItem('whishlist');
			if(productcart == null){
			cartObj = [];
			}else{
			cartObj = JSON.parse(productcart);
			}

			let items = newProductItemWhishlist;
			// console.log(items);
			cartObj.push(items);
			localStorage.setItem('whishlist', JSON.stringify(cartObj));
			displayUiDOMCart();
			whishlistcount();
	})

		
})


// functions

function whishlistcount(){

		let productcart = localStorage.getItem('whishlist');
		if(productcart == null){
		cartObj = [];
		}else{
		cartObj = JSON.parse(productcart);
		}
		let whislistcount =0;
		cartObj.forEach((element, index)=>{
			whislistcount += element.quantity
		})
		document.querySelector('.total-count-whishlist').innerText = whislistcount;
}


// cart total price or quantity
function cartQuantity(){

	
 	let cartTotal = 0;
    saveLocalStorage();
    let cartquantites = 0;
	 // cartTotal = '';
	cartObj.forEach((element, index)=>{
		// console.log(element.price, element.quantity);
		cartTotal += element.quantity * element.price;
		// console.log(cartTotal);
		cartquantites += element.quantity;
	});

	document.querySelector('.cart-summary ').innerHTML = `
					<table class="table table-bordered">
					<tbody><tr>
					<td colspan="2" class="text-center">
					<small> <b> ${cartquantites} </b> Item(s) selected</small>
					</td>

					</tr>
					<tr>
					<td><h5>SUBTOTAL : </h5>  </td>
					<td class="font-weight-bold " style="font-size:1.2rem"><i class="fas fa-rupee-sign"></i>  ${cartTotal}</td>
					</tr>
					</tbody>
					</table>
	`;

     document.querySelector('.total_count_cart_quantity').innerText = cartquantites;


}





function saveLocalStorage(){
	let productcart = localStorage.getItem('productCart');
	if(productcart == null){
		cartObj = [];
	}else{
		cartObj = JSON.parse(productcart);
	}

}

function deleteProduct(index){
	saveLocalStorage();
	cartObj.splice(index, 1);
	localStorage.setItem('productCart', JSON.stringify(cartObj));
	displayUiDOMCart();
cartQuantity();
}

// display on ui browser
function displayUiDOMCart(){

		saveLocalStorage();

		let html = '';

		cartObj.forEach((element, index)=>{
			// console.log(element);
			html += `
				<div class="product-widget" >
				<div class="product-img">
				<img src="${element.image}" alt="Product image">
				</div>

				<div class="product-body">
				<h3 class="product-name"><a href="">${element.name}</a></h3>
				<h4 class="product-price"><span class="qty">${element.quantity} X </span> <i class="fas fa-rupee-sign"></i> ${element.price}</h4>
				<div class="input-group">
				
				<button class="btn btn-primary btn-small btn-danger minus-item" id="${index}" data-name="${element.name}"  >-</button>
				<input type="number" name="" class="cartQuantity form-control" data-action="${element.name}" id="" value="${element.quantity}">
				<button class="btn btn-primary btn-small plus-item" id="${index}" data-name="${element.name}"  >+</button>

				</div>
				</div>

				<button class="delete" onclick="deleteProduct(${index})"><i class="far fa-times-circle"></i></button>

				</div>
			`;
		})

		if(cartObj.length != 0){
			document.querySelector('.card-list').innerHTML = html;
		}else{
			document.querySelector('.card-list').innerHTML = '<p class="text-danger font-weight-bold text-center">No Cart is Show ! car is Empty</p>';
		//document.querySelector('.card-list').style.overflow='hidden';
		}
		
}




