// for (i = 0; i < 64; i++) {
//     document.write(`<button onClick="changeColor(${i+1})">Button</button>`)
// }
// function changeColor(vitri) {
//     console.log(vitri);//print
//     window.alert(vitri);
// }

let boxParent = document.getElementById("boxParent");

var lists = [];
for (let i = 0; i < 64; i++) {
    lists.push(i+1);
}
const randoms = shuffle(lists);
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

function change() {
    // Clear all content inside boxParent and create grid again
    boxParent.innerHTML = "";
    creategrid();
}

creategrid();

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
    //     element.className = "myStyle";
    //     // window.alert("Chọn sai số nhấn không liền kề "+ before);
    }
}
