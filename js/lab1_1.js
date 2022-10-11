const button = document.querySelector('.btn');

button.addEventListener('click',changeColor);
// Chi tiết hàm changeColor:
    function changeColor(){
        const background1 = document.querySelector('.background');
        const arrayColor = ['red','yellow','pink','gray','black','orange','blue'];
        let random = arrayColor[randomColor(arrayColor)];
        background1.style.backgroundColor = random;
        console.log(random);
    }
function randomColor(array){
    return Math.floor(Math.random()*array.length);
}

