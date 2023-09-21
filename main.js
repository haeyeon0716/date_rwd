/*
특정시간을 주기로 코드를 반복할 때 
- setInterval(반복실행할 함수, 반복간격 시간 (ms))
*/
const [hr, m, s] = document.querySelectorAll('h1 span');

setInterval(()=>{
    const now = new Date();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    const hours = now.getHours();

    hr.innerText = setNumbers(setHours(hours));
    m.innerText = setNumbers(min);
    s.innerText = setNumbers(sec);
}, 1000);





function setNumbers(num) {
    num < 10 && (num = '0' + num);
    return num;
}

function setHours(num){
    num > 12 && (num = num-12);
    return num;
}