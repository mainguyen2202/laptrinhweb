// for (i = 0; i < 64; i++) {
//     document.write(`<button onClick="changeColor(${i+1})">Button</button>`)
// }
// function changeColor(vitri) {
//     console.log(vitri);//print
//     window.alert(vitri);
// }

let boxParent = document.getElementById("boxParent");

var lists = [];
for (let i = 0; i < 10; i++) {
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
            box.innerHTML = `<button onclick="changeColor(${randoms[vitri]})" class="btn-${randoms[vitri]}">${randoms[vitri]}</button>`;
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

var click = 0;
function changeColor(temp) {
    console.log(temp);//print
   var a= $("div").children("button");
   var b = a.querySelector(".btn-"+temp);
   console.log(b);
    if (temp == (click+1)){
        // window.alert(temp);
        //remove css html javascript
        // select div element which is the parent
        // select first child(h2) and apply one
        // or more css property at a time
        // $("div").children("box").children("btn-"+temp).css({
        //     "backgroundColor": "black", "color": "white" });

        // apply one property at a time, use
        // property name just like css and
        // then select second child element(p)
        $("div").children("button").children("btn-"+temp).css("background-color", "red");
        // $("div").children("box").children("btn-"+temp).css("color", "white");
    }
    click = temp;
}

