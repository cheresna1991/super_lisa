let a = document.getElementById('aaa');
a.addEventListener('click', () => {
    var ia = Number(document.querySelector('#ia>input').value);
    if (ia === 5) {
        var g = 'Правильно!';
        document.getElementById("aa").innerHTML = g;
    } else {
        var g = 'Неправильно! Ответ: 5';
        document.getElementById("aa").innerHTML = g;
    }
});
let b = document.getElementById('aab');
b.addEventListener('click', () => {
    var ia = Number(document.querySelector('#ib>input').value);
    if (ia === 1.4)  {
        var g = 'Правильно!';
        document.getElementById("ab").innerHTML = g;}
    else {
        var g = 'Неправильно! Ответ: 1.4';
        document.getElementById("ab").innerHTML = g;
    }
});
let c = document.getElementById('aac');
c.addEventListener('click', () => {
    var ia = Number(document.querySelector('#ic>input').value);
    if (ia === 32) {
        var g = 'Правильно!';
        document.getElementById("ac").innerHTML = g;
    } else {
        var g = 'Неправильно! Ответ: 32';
        document.getElementById("ac").innerHTML = g;
    }
});
let d = document.getElementById('aad');
d.addEventListener('click', () => {
    var ia = Number(document.querySelector('#id>input').value);
    if (ia === 13.5)  {
        var g = 'Правильно!';
        document.getElementById("ad").innerHTML = g;}
     else {
        var g = 'Неправильно! Ответ: 13.5';
        document.getElementById("ad").innerHTML = g;
    }
});