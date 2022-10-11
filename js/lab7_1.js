// How to randomize (shuffle) a JavaScript array?
//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

//  Making different sizes of grids and want to change the size of them once user choose an option
//https://stackoverflow.com/questions/69125664/making-different-sizes-of-grids-and-want-to-change-the-size-of-them-once-user-ch

// HTML DOM Element className
//https://www.w3schools.com/jsref/prop_html_classname.asp
// How can I change an element's class with JavaScript?
//https://stackoverflow.com/questions/195951/how-can-i-change-an-elements-class-with-javascript

//STEP 1: Khởi tạo mảng chạy từ 1 đến 64
var lists = [];
for (let i = 0; i < 64; i++) {
    lists.push(i+1);
}

//STEP 1.2: Method Xử lí dữ liệu mảng random giá trị
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

//STEP 1.3: Gọi Xử lí dữ liệu mảng random giá trị
const randoms = shuffle(lists);

//STEP 2: Viết phương thức vẽ bàn cờ 
function creategrid() {
    var vitri = 0;
    // Create grid from select value
    for (var i = 0; i < 8; i++) {
        var rows = document.createElement('div');
        rows.className = 'row';
        for (var j = 0; j < 8; j++) {
            var box = document.createElement('div');
            box.className = 'box';
            box.innerHTML = `<button onclick="changeColor(${randoms[vitri]})" class="btn" id="btn-${randoms[vitri]}">${randoms[vitri]}</button>`;
            rows.appendChild(box);
            vitri ++;
        }
        document.getElementById('boxParent').appendChild(rows);
    }
}

//STEP 3: Gọi phương thức vẽ bàn cờ 
creategrid();

//STEP 4: Xử lí action khi nhấn vào giá trị trên bàn cờ
var before = 0;
function changeColor(click) {
    console.log("before",before);//print
    console.log("click",click);//print
    const element = document.getElementById("btn-"+click);
    if (click == (before+1)){
        element.className = "newStyle";
        before = click;
        console.log(" > before",before);//print
    }else{
        element.className = "myStyle";
    //     // window.alert("Chọn sai số nhấn không liền kề "+ before);
    }
}
