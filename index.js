const contentEL = document.querySelector('.content');
const bodyEl =  document.querySelector('body');
const phrases = ['مع تحياتي بالشفاء العاجل' , 'لمعده داوود اللفته' ,
'وراسه الي نطح بيها المروحه' , 'واحلي مسا علي فخاده '];
let i=0 , j=0;
let colorCount = 0;
const colorChar = ['0', '1' ,'2' ,'3' ,'4' ,'5' ,'6' ,'7'
                 ,'8' ,'9' ,'a' ,'b' ,'c', 'd' ,'e' ,'f'];
 function getRandomColor (){
   let color='#';
    for(let i = 0 ;i < 6;i++){
        color+= colorChar[Math.floor(Math.random()*colorChar.length)];
    }
    return color;
} ;

function show (){
    if(j === phrases[i].length){
        i += 1;
        j = 0;
        contentEL.style.color = getRandomColor();
    }
    if(i=== phrases.length){
        j = 0;
        i = 0;
    }
    contentEL.innerHTML = `<h1>  ${phrases[i].slice(0,j+1)} </h1>`
    j++;
    setTimeout(show,400)
    
}
show();

// bodyEl.addEventListener('touchmove', function(e){
   
//     let span = document.createElement('span');
//     let top = e.touches[0].pageY;
//     let left =e.touches[0].pageX;
//     span.style.left = left +'px';
//     span.style.top = top +'px';
//     console.log( left , top);
//     body.appendChild(span);
//     setTimeout(()=> {
//         span.remove();
//     },3000)
// })

// bodyEl.addEventListener('click', function(event){
   
//     let span = document.createElement('span');
//     let top = event.offsetY;
//     let left =event.offsetX;
//     span.style.left = left +'px';
//     span.style.top = top +'px';
//     span.style.width = random + 'px';
//     span.style.height = random +'px';
//     console.log( left , top);
//     body.appendChild(span);
//     setTimeout(()=> {
//         span.remove();
//     },3000)
// })
bodyEl.addEventListener('mousemove', function(event){
   console.log(span);
   let span = document.createElement('span');
   let left = event.offsetX;
   let top = event.offsetY;
   bodyEl.appendChild(span);

})
