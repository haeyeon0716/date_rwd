const [hr, m, s] = document.querySelectorAll('h1 span');

const now = new Date();
const min = now.getMinutes();
const sec = now.getSeconds();
const hours = now.getHours();

//hours 값은 setHours가 조건에 12를 뺀 값으로 반환
//반환된 결과값을 다시 바로 setNumbers에 집어넣어서 0을 붙이도록 처리
hr.innerText = setNumbers(setHours(hours));
m.innerText = setNumbers(min);
s.innerText = setNumbers(sec);

function setNumbers(num) {
    num < 10 && (num = '0' + num);
    return num;
}

function setHours(num){
    num > 12 && (num = num-12);
    return num;
}