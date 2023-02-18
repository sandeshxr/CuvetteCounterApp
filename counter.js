function totalClick(click){
 const totalClick = document.getElementById('totalClick');
 const sumvalue = parseInt(totalClicks.innerText)+click;
 console.log(sumvalue+click);
 totalClicks.innerText = sumvalue;
 if(sumvalue<0){
    totalClicks.innerText = 0;
 }
    if(click === 0){
        totalClicks.innerText = 0;
    }
 }
