// học về bất đồng bộ cơ bản nhất
// 1, khái niệm
// mấy ngày gần mạng của nhà mạng 4 chữ, 3 chữ, 7 chữ cứ đến tối là chậm => load trang fb, youtube có hiện tượnh
// - trắng màn hình
// - không hiện được thumbnail của video youtube
// - vào trang fb thì kéo chuột xuống load mãi mà không lấy được post mới
 // đây là các ví dụ cơ bản nhất của bất đồng bộ 

 // mặc định JS sẽ chạy code từ trên xuống dưới có nghĩa là khi vào trang fb chẳng hạn, theo lí thuyết thì mình phải chờ trang này
 // lấy hoàn thiện được data các bài post, story, reel thì mình mới được tương tác tiếp với trang web 
// => dẫn đến tình trạng delay tương tác, mạng càng chậm thì thời gian delay càng lâu
// => ảnh hưởng đến trải nghiệm của người dùng vì chờ đợi rất lâu

// 2, cách giải quyết
// JS sinh ra bất đồng bộ để giải quyết vấn đề trên
// - bất đồng bộ là gì?
// bất đồng bộ hiểu đơn giản : thay vì JS chạy các logic từ trên xuống dưới thì nó có thể chạy song song 1 lúc nhiều logic,
// logic nào có độ đơn giản thấp xong trước thì nó sẽ chạy xong trước, logic nào có độ đơn giản cao thì nó sẽ chạy xong lâu hơn

// ví dụ : fb -> vào trang cá nhân của ngta để stalk, fb sẽ load đc ảnh đại diện, ảnh bìa, tên, story nổi bật, reel trước
// khi người kéo chuột xuống thì lần lượt các bài post  mới load xong để hiện thị cho mình truy cập vào

// - các ví dụ cơ bản nhất của bất đồng bộ 
// 1, setTimeout()
// - setTimeout() là 1 hàm cơ bản bản của bất đông bộ, trong setTimeout sẽ có 2 đối số : hàm callback và thời gian delay
// - hàm callback là hàm sẽ được gọi sau khi thời gian delay kết thúc
// cú pháp : setTimeout( callback fnc, delay time)
// - setTimeout() sẽ trả về 1 giá trị là id của setTimeout, id này sẽ được dùng để hủy setTimeout
// - setTimeout() sẽ chạy logic 1 lần duy nhất sau thời gian delay time

// console.log("hello Hiếu")

// setTimeout(() => {
//     console.log("hello Nguyên")
// }, 3000);

// setTimeout(() => {
//     console.log('hello Đạt')
// }, 1000);

// setTimeout(() => {
//     console.log("hello Huy")
// }, 2000);

// dự đoán kết quả của console.log

//- hiếu => đạt => huy => nguyên



// 2, setInterval()
// gần tương tự như setTimeout() nhưng setInterval() sẽ chạy logic nhiều lần liên tiếp sau thời gian delay time
// setInterval sẽ như 1 vòng loop lặp đi lặp lại logic sau thời gian delay

// cú pháp : setInterval( callback fnc, delay time)

// ví dụ : cứ sau mỗi 2s lại chạy lên dòng log "ăn tết xong chưa"
// setInterval(() => {
//     console.log('ăn tết xong chưa')
// }, 2000);

// ứng dụng thực tế của setInterval() : làm đồng hồ đếm ngược thời gian

// làm đồng hộ đếm ngược thời gian
// - cách làm : sử dụng setInterval() để chạy logic sau mỗi 1s, trong logic sẽ trừ đi 1 giây và hiển thị lên UI
//
const counterQuery = document.querySelector('#counter')

 
let counterTime = 10

counterQuery.textContent = counterTime



// const handleCounter = () => {
//     console.log('đã bấm nút đếm ngược')
// }


// const handleCounter = setInterval(() => {
//     counterTime--
//     counterQuery.textContent = counterTime
// }, 1000);

// clear Interval là hàm để ngắt interval trong setInterval : clearInterval( id của setInterval)

// đối với setInterval thì mỗi lần chạy logic khi đếm ngược sẽ trả ra cho ta 1 id, nếu muốn kết thúc logic thì chỉ cần
// clearInterval chính cái id mà nó tạo ra

let counterId = null


const handleCounter = () => {
    counterId = setInterval(() => {   // biến counterId sẽ chính là id của setInterval hiện tại
        counterTime--
        counterQuery.textContent = counterTime
        if (counterTime === 0) {
            clearInterval(counterId) // hủy interval với id là biến counterId
        }
    }, 1000);
}


const handleStop = () => { 
    // tại hàm handleStop hiện tại không thể truy cập đc vào biến counterId có phạm vi là function scope trong hàm handleCounter
    console.log('dừng đếm ngược')
    // nên với logic clearInterval với id = counterId sẽ không hoạt động
    // cách dễ nhất : đẩy biến counterId ra bên ngoài, vượt khỏi phạm vi function scope của handleCounter
    clearInterval(counterId)
}




// 3, kiến thức cần nhớ 
// phan biệt giữa setTimeout() và setInterval()
// phạm vi của biến trong 1 file JS : global scope, function scope, block scope


// học về trạng thái toggle classList Name của JS


const blinkQuery = document.querySelector('#blink')

// style mặc định cho 1 component : style = id, style =class

// trong class nó có thể : thêm, xoá, thay đổi qua lại giữa các trạng thái = classList 
// classList : là 1 thuộc tính của DOM element, nó là 1 object, nó có các method để thao tác với class của DOM element đó

//  classList sẽ có các method sau : 
// add('class name') : thêm class vào DOM element

// remove('class name') : xoá class khỏi DOM element

// toggle('class name') : thêm class vào DOM element nếu chưa có, xoá class khỏi DOM element nếu đã có

// contains('class name') : kiểm tra xem DOM element có class name đó hay không, trả về true/false

// ví dụ : thêm class blink vào DOM element blinkQuery

// <p id="blink" class="mt-8 text-[32px] font-semibold text-red-500"> Chúc mừng năm mới</p>

// blinkQuery.classList.add('text-yellow-500') 
// <p id="blink" class="mt-8 text-[32px] font-semibold text-red-500 text-yellow-500"> Chúc mừng năm mới</p>

const pingAnimation = 'animate-ping' 
const yellowText = 'text-yellow-500'





setInterval(() => {
    blinkQuery.classList.toggle(pingAnimation)
    blinkQuery.classList.toggle(yellowText)
}, 500);


// Promise 
// 1, khái niệm : là bất đồng bộ nâng cao trong JS
// Promise có 3 trạng thái chính : pending, fulfilled, rejected
// pending : đang chờ để xử lí logic
// fulfilled : đã xử lí logic thành công
// rejected : đã xử lí logic thất bại

// áp dụng : khi gọi API để lấy dữ liệu từ server về client và hiển thị nó lên trên trình duyệt


// API : hiểu đơn giản là cầu nối giữa front-end và back-end
// API là 1 đường link, khi gọi API thì nó sẽ trả về 1 object, object này chứa thông tin về dữ liệu mà server trả về

// kiểu dữ liệu mà API trả về hiện nay : JSON 
// JSON : là 1 kiểu dữ liệu, nó là 1 chuỗi, nó có cấu trúc giống như object trong JS. là quy chuẩn chung cho data trao đổi
// giữa phía client và phía server

// JSON : JavaScript Object Notation 
