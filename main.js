/*
객체 생성하는 방법
-객체 리터럴 통한 생성
- 생성자 함수 통한 생성 (new 키워드 이용해서 동일한 구조의 객체를 복사할 때 주로 사용)
- 생성자함수 통해서 생성된 객체 : 인스턴스
-인스턴스 객체에는 prototype이라는 공통의 저장공간이 포함되어있어 자주쓰는 함수 등록후 자유롭게 사용가능
*/

const now = new Date();
console.dir(now);

//우리나라 시간대는 전게셰 표준 시간대에서 9시간이 더해진 시간 (그리니치 표준 시간대 적용)

const year = now.getFullYear();
console.log(year)

const months = ['january', 'febuary', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'decemmber'];

const month = now.getMonth(); // 순번을 반환 
console.log(months[month]);

const date = now.getDate();
console.log(date);

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const day = now.getDay();
console.log(days[day]);

const min = now.getMinutes();
console.log(min);

const sec = now.getSeconds();
console.log(sec);

const hours = now.getHours()
console.log(hours)
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
console.log(newHr);
