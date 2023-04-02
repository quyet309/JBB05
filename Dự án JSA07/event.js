 //khai báo biến slideIndex đại diện cho slide hiện tại
 var slideIndex;
 // KHai bào hàm hiển thị slide
 function showSlides() {
     var i;
     var slides = document.getElementsByClassName("mySlides");
     var dots = document.getElementsByClassName("dot");
     for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
     }
     for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" active", "");
     }

     slides[slideIndex].style.display = "block";  
     dots[slideIndex].className += " active";
     //chuyển đến slide tiếp theo
     slideIndex++;
     //nếu đang ở slide cuối cùng thì chuyển về slide đầu
     if (slideIndex > slides.length - 1) {
       slideIndex = 0
     }    
     //tự động chuyển đổi slide sau 3s
     setTimeout(showSlides, 3000);
 }
 //mặc định hiển thị slide đầu tiên 
 showSlides(slideIndex = 0);


 function currentSlide(n) {
   showSlides(slideIndex = n);
 }



 const API_URL = 'https://fakestoreapi.com/products?limit=10'

const fetchProducts = async () => {
  const response = await axios.get(API_URL) // lấy phản hồi từ trên server
  // console.log(response)
  const data = response.data // truy cập vào trường data từ phản hồi
  // console.log(data)
  // console.log(data)
  mapDataFromApi(data) // truyền data sau khi gọi API vào hàm mapDataFromApi
}

fetchProducts()

const productsQuery = document.querySelector('.quote')



// truncate text to get only 40 characters, ...


const truncate =(string, length) => {
    if (string.length > length) {
        return string.substring(0, length) + '...'
    } else {
        return string
    }
}



const mapDataFromApi = (params) => {
  // nhận data truyền từ hàm fetchProducts thông qua biến params
  // console.log(params)
  // map data từ API
  const products = params?.map((item, index) => {
    console.log(item)
    return `
            
    
        
     
  <div class="card w-96 bg-base 30 shadow-xl">
  <figure><img src="${item.image}" alt=""class='w-[300px] h-[150px] object-cover '  /></figure>
  <div class="card-body">
    <h2 class="card-title">${truncate(item.title)}</h2>
    <p>${truncate(item.description)}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy$${item.price}(Now just 1$)</button>

    </div>
  </div>
</div>
            
   `
  })

  productsQuery.innerHTML = products.join('')
}