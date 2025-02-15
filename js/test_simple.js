let a = document.getElementById('aaa');
a.addEventListener('click', () => {
    var ia = Number(document.querySelector('#ia>input').value);
    if (ia === 6) {
        var g = 'Правильно!';
        document.getElementById("aa").innerHTML = g;
    } else {
        var g = 'Неправильно! Ответ: 6';
        document.getElementById("aa").innerHTML = g;
    }
});
let b = document.getElementById('aab');
b.addEventListener('click', () => {
    var ib = Number(document.querySelector('#ib>input').value);
    if (ib === 9)  {
            var g = 'Правильно!';
            document.getElementById("ab").innerHTML = g;
    } else {
        var g = 'Неправильно! Ответ: 9';
        document.getElementById("ab").innerHTML = g;
    }
});
let c = document.getElementById('aac');
c.addEventListener('click', () => {
    var ic = Number(document.querySelector('#ic>input').value);
    if (ic === -4) {
        var g = 'Правильно!';
        document.getElementById("ac").innerHTML = g;
    } else {
        var g = 'Неправильно! Ответ: -4';
        document.getElementById("ac").innerHTML = g;
    }
});
let d = document.getElementById('aad');
d.addEventListener('click', () => {
    var id = Number(document.querySelector('#id>input').value);
    if (id === 33) {
        var g = 'Правильно!';
        document.getElementById("ad").innerHTML = g;
    } else {
        var g = 'Неправильно! Ответ: 33';
        document.getElementById("ad").innerHTML = g;
    }
});