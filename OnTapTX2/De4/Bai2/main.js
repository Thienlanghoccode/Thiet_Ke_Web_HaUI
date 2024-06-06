document.getElementById('ln').value = 8 * 20000;

var thuong = 0;

var tinhtien_btn = document.getElementById('tinhtien');
tinhtien_btn.addEventListener('click', function () {
    var ngaycong = parseInt(document.getElementById('ngaycong').value);
    document.getElementById('lt').value = ngaycong * 8 * 20000;
    if(ngaycong > 25) {
        document.getElementById('xl').value = 'A';
        thuong = 500000;
    }
    else if (ngaycong <= 25 && ngaycong >= 20) {
        document.getElementById('xl').value = 'B';
        thuong = 300000;
    }
    else {
        document.getElementById('xl').value = 'C';
        thuong = 0;
    }
    document.getElementById('thuong').value = thuong;
    document.getElementById('thuclinh').value = thuong + ngaycong * 8 * 20000;
})