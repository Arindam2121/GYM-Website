let v1 = document.querySelector('#joinbtn');
v1.addEventListener('click',OpennewWindow);

function OpennewWindow(){
    location.href='index2.html';
}

let v2 = document.querySelector('.btn3');
v2.addEventListener('click',OpennewWindow);

let v3 = document.querySelector('#buybutton1');
v3.addEventListener('click',OpennPayment);

function OpennPayment(){
    location.href='index4.html';
}

let v4 = document.querySelector('#buybutton2');
v4.addEventListener('click',OpennPayment);

