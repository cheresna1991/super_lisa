let a = document.getElementById('aaa');
a.addEventListener('click', () => {
    var ia = Number(document.querySelector('#ia>input').value);
    if (ia === 32) {
        var g = 'Правильно!';
        document.getElementById("aa").innerHTML = g;
    } else {
        var g = 'Неправильно! Ответ: 32';
        document.getElementById("aa").innerHTML = g;
    }
});
let b = document.getElementById('aab');
b.addEventListener('click', () => {
    var ib = Number(document.querySelector('#ib>input').value);
    if (ib === -8)  {
            var g = 'Правильно!';
            document.getElementById("ab").innerHTML = g;
    } else {
        var g = 'Неправильно! Ответ: -8';
        document.getElementById("ab").innerHTML = g;
    }
});
let c = document.getElementById('aac');
c.addEventListener('click', () => {
    var ic = Number(document.querySelector('#ic>input').value);
    if (ic === -18) {
        var g = 'Правильно!';
        document.getElementById("ac").innerHTML = g;
    } else {
        var g = 'Неправильно! Ответ: -18';
        document.getElementById("ac").innerHTML = g;
    }
});
let d = document.getElementById('aad');
d.addEventListener('click', () => {
    var id = Number(document.querySelector('#id>input').value);
    if (id === 0.5) {
        var g = 'Правильно!';
        document.getElementById("ad").innerHTML = g;
    } else {
        var g = 'Неправильно! Ответ: 0.5';
        document.getElementById("ad").innerHTML = g;
    }
});
let e = document.getElementById('aae');
e.addEventListener('click', () => {
    var id = Number(document.querySelector('#ie>input').value);
    if (id === 2) {
        var g = 'Правильно!';
        document.getElementById("ae").innerHTML = g;
    } else {
        var g = 'Неправильно! Ответ: 2';
        document.getElementById("ae").innerHTML = g;
    }
});