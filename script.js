const formTag = document.querySelector('#shelterForm')
const inputTag = document.querySelector('#inputHere')
const spanTag = document.querySelector('#sp')


// 2. แสดงค่าของ input ที่หน้าเว็บและ log

formTag.addEventListener("submit", function(b) {
    b.preventDefault()
    
    let newInput = inputTag.value // ดึงค่าใน input มา
    console.log(newInput); // เอาค่าใน input มา log
    spanTag.innerText = newInput // เอาค่าใน input มาแสดงที่หน้าเว็บ
})

// 1. ไม่ให้ข้อความใน form ที่ submit หายไปหลังถูก refresh

// formTag.addEventListener("submit", function(a) {
//     a.preventDefault()
//     console.log(a);
// })