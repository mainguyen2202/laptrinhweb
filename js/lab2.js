

const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
const rs = document.querySelector('.rs');

result.addEventListener('click', function(){
    var  A = parseFloat(a.value) ;
    var  B = parseFloat(b.value) ;
    var  C = parseFloat(c.value) ;
    var x1,x2;
    if( delta(A,B,C) < 0){
        rs.innerHTML = "vô nghiệm";
    } else if(delta(A,B,C) > 0){
        x1 = (-B+Math.sqrt(delta(A,B,C)))/(2*A);
        x2 = (-B-Math.sqrt(delta(A,B,C)))/(2*A);
        rs.innerHTML = "x1:" + x1 + " và " + "x2:" + x2;
    }else{
        rs.innerHTML = "Phương trình có nghiệm kép x:" + ((-B)/(2*A));
    }
} )
function delta (x,y,z){
    var delta;
    delta = y*y - 4*x*z;
    return delta;
}


























//------------------
//<![CDATA[

function tog(v) {

    return v ? 'addClass' : 'removeClass';

}

$(document).on('input', '.clearable', function() {

    $(this)[tog(this.value)]('x');

}).on('mousemove', '.x', function(e) {

    $(this)[tog(this.offsetWidth - 18 < e.clientX - this.getBoundingClientRect().left)]('onX');

}).on('touchstart click', '.onX', function(ev) {

    ev.preventDefault();

    $(this).removeClass('x onX').val('').change();

});

//]]>