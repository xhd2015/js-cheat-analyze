let s = "cityString"

function isCityGood(s) {
    if (s.indexOf('深圳') > 0 || indexOf('北京') > 0) {
        alert("请重新选择城市")
        return false;
    }
    return true;
}

if(isCityGood(s)){
    window.location.href = './shop'
}