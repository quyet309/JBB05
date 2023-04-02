// const API = "https://api.escuelajs.co/api/v1/products"
// const axiosqv = () => {
//     axios.get(API)
//         .then((Quyyt) => {
//             const data = Quyyt.data
//             console.log(data);
//         })
// }
// console.log(axiosqv)

// axiosqv()







// làm quen với promise và cách tương tác với API

// 1. Promise là gì?

// Promise là một đối tượng JavaScript mô tả hoàn tất hoặc thất bại của một hoạt động bất đồng bộ trong tương lai. Nói cách khác, Promise là một mẫu xử lý mã bất đồng bộ giúp cho việc xử lý lỗi và quản lý dữ liệu trả về từ hoạt động bất đồng bộ dễ dàng hơn.

// Một Promise có thể trong một trong ba trạng thái:

// Đang chờ: trạng thái ban đầu, chưa hoàn tất hoặc thất bại.
// Đã hoàn tất: hoạt động hoàn tất thành công.
// Thất bại: hoạt động thất bại.
// Một Promise được tạo bằng cách sử dụng constructor Promise và truyền vào một hàm gọi là "executor". Executor được gọi ngay lập tức với hai hàm là tham số: resolve và reject. Hàm resolve được gọi khi hoạt động bất đồng bộ thành công, và hàm reject được gọi khi hoạt động thất bại.

// Ví dụ:
// th 1 : trạng thái resolve : hoàn thành thành công
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('The operation was successful!');
//   }, 1000);
// });

// myPromise.then((result) => {
//   console.log(result); // Output: 'The operation was successful!'
// });

// th2 : trạng thái reject : thất bại

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('The operation was successful!');
//   }, 1000);
// });

// myPromise.then((result) => {
//   console.log(result); // Output: 'The operation was successful!'
// });

// 2. Cách tương tác với API
// API là gì : application programming interface : API là 1 đường link được back-end tạo ra. thông qua đường link đó thì frond-end có thể
// - get : lấy dữ liệu từ phía back-end trả về
// - post : tạo dữ liệu mới rồi cập nhật cho back-end
// - put : cập nhật dữ liệu
// - delete : xoá dữ liệu trên server

// ví dụ :
// 1, khách hàng : front-end : oder món ăn theo menu của nhà hàng
// 2, nhà hàng : back-end : nhận đơn hàng từ khách hàng và chế biến ra món ăn theo yêu cầu của khách
// 3, người phục vụ :(API) : ghi oder các món ăn của khách hàng và mang vào cho bếp chế biến. sau khi bếp chế biến xong => mang món ăn
// ra phục vụ cho phía khách hàng

// note : link api là do back-end quy định, phía front-end chỉ cần gọi đúng link api thì nó sẽ lấy được dữ liệu từ back-end trả về
// tuyệt đối không tự ý thay đổi các param trong API : thay đổi tên, thay đổi kí tự, ...

// để phía front-end có thể sử dụng API để lấy dữ liệu : có 2 phương thức chính :
// 1, fetch : dùng để lấy dữ liệu từ API ( hàm build-in của js nhưng bị giới hạn khá nhiều tính năng hay)
// 2, axios : đây là 1 thư viện dùng để lấy dữ liệu từ API ( thư viện này có nhiều tính năng hay hơn fetch)

// cách 1 : dùng fetch để gọi API
// lưu ý : với fetch : khi data trả về mình cần phải convert sang dạng JSON để có thể tương tác với data
// hàm convert : paramName.json()

const API_URL = `https://jsonplaceholder.typicode.com/users`
const handleAlert = (params) => {
  console.log(params)
  return alert('id', params)
}

const containerQuery = document.querySelector('#container')
// muốn render html từ js bắt buộc dùng dấu `  ` và dùng ${} để gọi biến

const renderItem = (items) => {
  console.log(items, 'items nè')
  const html = items.map((item, index) => {
    return `
        <div 
         key=${index} class="max-w-sm w-[400px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Email : ${item.email}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Name : ${item.name}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">UserName : ${item.username}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Website : ${item.website}</p>
        <div
            onclick="handleAlert(${item.id})"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Call ${item.phone}
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </div>
        </div>
        `
  })
  containerQuery.innerHTML = html.join('')
}

// hàm renderItem : có mục đích là nhận data được truyền vào từ hàm then thứ 2 của hàm handlegetUser và dùng data đó để render ra html trong
// bằng hàm map, sau đó gán vào containerQuery để hiển thị ra màn hình
// chú ý : data là 1 các obj, mảng này có chiều dài bằng bao nhiêu thì sẽ có bấy nhiêu items được sinh ra trong hàm renderItem

const handleGetUsers = () => {
  fetch(API_URL) // hàm fetch với link API là tham số, hàm này trả về 1 promise
    .then((response) => response.json()) // then : hàm này sẽ chạy khi promise trả về kết quả thành công ( hàm callback trả về promise)
    .then((data) => renderItem(data)) // then : mang data đã convert từ dòng hàm then bên trên xuống và truyền vào hàm renderItem
    .catch((error) => console.log(error)) // catch : bắt lỗi khi quá trình gọi API thất bại
    .finally(() => console.log('Call API Done')) // finally : hàm này luôn chạy mặc cho quá trình gọi API thành công hay thât bai (không nhất thiết phải có)
}

// handleGetUsers()

// 2 cách dùng axios : axios.method
// method : get, post, put, delete
// từ giờ trở đi : khi gọi API thì sẽ dùng axios thay vì fetch

// lưu ý : axios luôn luôn trả data về dưới dạng JSON và mình sẽ không cần phải convert sang JSON nữa  ( bỏ dc dòng .then((response) => response.json())

// const axiosGetUser = () => {
//     axios.get(API_URL)  // hàm get : dùng để lấy dữ liệu từ API
//     .then((response) => {
//         const data = response.data
//         renderItem(data)
//     })  // hàm then : nhận data từ API và truyền vào hàm renderItem
// }

// axiosGetUser()
// handleAlert(1)

// buổi 9 : sử dụng async ... await để xử effect liên quan đến call API

// async : hàm async sẽ trả về 1 promise
// await : hàm await sẽ chờ cho đến khi promise trả về kết quả thành công thì mới chạy tiếp
// note : async luôn luôn đi cùng với await; async await không chạy độc lập mà nó cần chạy cùng 1 hàm khác

// const QUOTE_API = 'https://api.quotable.io/random'

// const renderQuote = (items) => {
//   console.log(items, 'quote nhận được đây nè nè')

//   const quoteDetail = document.createElement('div')
//   quoteDetail.classList.add('quote-detail') // thêm style cho khối div vừa tạo

//   quoteDetail.innerHTML = `
//     <a href="#">
//          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black"> Author : ${items.author}</h5>
//     </a>
//     <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Author Slug : ${items.authorSlug}</p>
//     <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Quote : ${items.content}</p>
//     <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Date Added : ${items.dateAdded}</p>
//     `

//   containerQuery.appendChild(quoteDetail)
// }

// const handleGetQuote = async () => {
//   const response = await axios.get(QUOTE_API) // đặt 1 biến là response để hứng giá trị trả lại từ API sau gọi = axios

//   //    console.log('response từ API là',response )

//   const data = response.data
//   renderQuote(data) // truyền data nhận được vào hàm renderQuote()

//   console.log(data, 'data nèeeeeee')

//   // chỉ quan tâm đến trường data của biến response
// }

// handleGetQuote()

const PRODUCT_API = 'https://fakestoreapi.com/products?limit=10'

const renderProduct = (params) => {
  // nhận lại data thông qua biến params
  console.log(params)
  const html = params.map((item, index) => {
    return `
            <div 
             key=${index} class="max-w-sm w-[400px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> category : ${item.category}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">description : ${item.description}</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">title : ${item.title}</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">price : ${item.price} $</p>
            <img class="h-auto max-w-lg rounded-lg" src=${item.image} alt="image description">
            <div
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                rating ${item.rating.rate}
                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </div>
            </div>
            `
  })
  containerQuery.innerHTML = html.join('')
}

const handleGetProduct = async () => {
  const res = await axios.get(PRODUCT_API)
  const data = res.data
  renderProduct(data) // truyền data nhận đc từ API cho hàm renderProduct

  console.log(data, 'data nèeeeeee')
}

handleGetProduct()