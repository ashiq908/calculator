function sum(){
    var fnum = parseInt(document.getElementById('num1').value)
    var snum = parseInt(document.getElementById('num2').value)
    alert(fnum+snum)
}
function sub(){
    var fnum = parseInt(document.getElementById('num1').value)
    var snum = parseInt(document.getElementById('num2').value)
    alert(fnum-snum)
}
function mul(){
    var fnum = parseInt(document.getElementById('num1').value)
    var snum = parseInt(document.getElementById('num2').value)
    alert(fnum*snum)
}
function div(){
    var fnum = parseInt(document.getElementById('num1').value)
    var snum = parseInt(document.getElementById('num2').value)
    if(snum===0){
        alert('division by 0 is not possible')
    }else{
        alert(fnum/snum)
    }
}