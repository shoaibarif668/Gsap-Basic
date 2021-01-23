let navButton=document.querySelector('.nav-button');
let navOpen=document.querySelector('.nav-open');

// let tween = TweenLite.to(object,time,{animate})
// let tween = TweenLite.to('.cover',1,{
//     width:'40%'
// });
let tl = new TimelineLite({paused:true,reversed:true}); //paused=true:waits for the event listener

tl.to('.cover',1,{  
    width:'60%',
    ease: Power2.easeOut
})
.to('nav',1,{
    height:'100%',
    ease: Power2.easeOut
}, '-=0.5'  //half second earlier before the first animation finishes
)
.fromTo('.nav-open',0.5,  //"From" one state "to" another
{
    opacity:0,
    x:50,
    ease:Power2.easeOut 
},
{
    opacity:1,
    x:0,
    onComplete:function(){
        navOpen.style.pointerEvents='auto';
        console.log('done');
    }
});
navButton.addEventListener('click', (e) =>{
    if(tl.isActive()){  //Animation wont work continuosly(try commenting it out for any doubt)
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    }   
    toggleTween(tl);
});

function toggleTween(tween){
    tween.reversed() ? tween.play() : tween.reverse();    //Like an if condition if(tween.reversed()==true){tween.play} else{tween.reverse()}
}