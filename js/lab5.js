// var windowW = window.innerWidth - 270;
// // 270 là chiều dài của tấm hình
//
// //Di chuyển đối tượng từ trái sang phải
// function moveRight(){
//     $("#divsanta").animate({left: "+="+windowW}, 15000, moveLeft)
// }
//
// //Di chuyển đối tượng từ phải sang trái
// function moveLeft(){
//     $("#divsanta").animate({left: "-="+windowW}, 15000, moveRight)
// }
//
// $(document).ready(function() {
//     //Bắt đầu chạy thôi :D
//     moveRight();
// });
//

// const rotated = document.getElementById('rotated');
// let rotation = 0;
// const angle = 15;
// function rotateImage() {
//     rotation = (rotation + angle) % 360;
//
//     rotated.style.transform = `rotate(${rotation}deg)`;
// }

//     const rotated = document.getElementById('rotated');
//     let rotation = 0;
//     const angle = 15;
//     setInterval(function rotateImage() {
//     rotation = (rotation + angle) % 360;
//     rotated.style.transform = rotate(${rotation}deg);
// },
//     2000);


const contain = document.querySelector('#image')
let rotateDeg = 0;
setInterval(function rotateImage() {
    rotateDeg = rotateDeg + 15;
    contain.style.transform= 'rotate('+rotateDeg+'deg)';
},200);
























