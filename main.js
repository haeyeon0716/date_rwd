const now = new Date();
const min = now.getMinutes();
const sec = now.getSeconds();
const hours = now.getHours();

console.log(setNumbers(hours));

function setNumbers(num) {
    let result = 0;
    /*
    if(num<10) num ='0' + num;
    */
    //조건식 ? true일 때 실행할 구문 : false일 때 실행할 구문
    //삼항연산자 구문안에는 대입연산자가 들어올 수 없기 때문에 괄호로 묶어 표현식으로 변경
    //특정 값이 else일 때 굳이 실행할 코드가 없다면 &&연산자 사용
    // (num < 10) ? (result ='0' + num) : (result = num);

    num < 10 && (num = '0' + num);
    return 

}

/*
 let newHr = 0;

 if(hours >12){
     newHr = hours -12;
     if(newHr < 10){
         newHr = '0' + newHr + 'PM'
     }
     else{
         newHr = newHr + 'PM'
     }
 }
 else{
     newHr = hours;

     if(newHr < 10){
         newHr = '0' + newHr + 'AM'
     }
     else{
        newHr = newHr + 'AM'
     }
 }
 */