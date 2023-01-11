const remainTime=document.querySelector("#remain-time");

function diffDay(){
    const masTime = new Date("2023-12-25");
    const todayTime = new Date();

    const diff = masTime - todayTime;
    
    const diffDay = Math.floor(diff/(1000*60*60*24));
    const diffHour =String(Math.floor((diff/(1000*60*60)) %24)).padStart(2,"0");
    const diffMin=String(Math.floor(diff/(1000*60))%60).padStart(2,"0");
    const diffSec=String(Math.floor(diff/1000%60)).padStart(2,"0");

    remainTime.innerText = `${diffDay}일 ${diffHour}시간 ${diffMin}분 ${diffSec}초 `;
}
diffDay();

setInterval(diffDay,1000);











//function getClock(){
  //  const date = new Date();
    //const hours = String(date.getHours()).padStart(2,"0");
    //const miustes =String(date.getMinutes()).padStart(2,"0");
    //const seconds =String(date.getSeconds()).padStart(2,"0");
    //clock.innerText=`${hours}: ${miustes} : ${seconds}`;

//}


//getClock();
//setInterval(getClock,1000);