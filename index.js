

// TODO:: create a key listener
// TODO:: connent key press to play a beat
// TODO:: create database of beats
// TODO:: set the color programmecally

window.onload = ()=>{
    setColors();
}

let beats ={
  "a" :{

  beat : "beat1.mp3",
  color : "purple"
  },

  "s" :{
   beat : "beat2.mp3",
   color : "purple"
  } ,
  "d" : {
   beat : "beat3.mp3",
   color : "yellow"
  } ,
  "f": {
   beat : "beat4.mp3",
   color : "yellow"
  } ,
  "g": {
   beat : "beat5.mp3",
   color : "yellow"
  },
  "h": {
   beat : "beat6.mp3",
   color : "blue"
  },
  "j": {
   beat : "beat7.mp3",
   color : "blue"
  } ,
  "k": {
   beat : "beat8.mp3",
   color : "yellow"
  } ,
  "l": {
   beat : "beat9.mp3",
   color : "blue"
  } 
}


const setColors = ()=>{
for(let keycode in beats){
    let beat = beats[keycode];
    let element = document.getElementById(keycode);
    element.style.borderColor = beat.color;

    element.addEventListener("transitionend",()=>{
        element.style.backgroundColor = "transparent";
        element.style.boxShadow = "none";
    })


    setInterval(() => {
            element.style.backgroundColor = "transparent";
            element.style.boxShadow = "none";
    }, 1000);
}
}

const onpressChange = (buttonkey)=>{
    let element = document.getElementById(buttonkey);
    element.style.backgroundColor = beats[buttonkey].color;
    element.style.boxShadow = `0px 0px 20px 0px ${beats[buttonkey].color}`;
}




let playBeat = (buttonkey)=>{

    const audiosrc  = beats[buttonkey].beat;
    // console.log(audiosrc);
    let audio = new Audio(audiosrc);
    audio.currentTime = 0;
    audio.play();


    setInterval(() => {
        audio.pause();
        audio.currentTime = 0;
        
    }, 1000)
}


document.addEventListener("keydown", (event)=>{
    playBeat(event.key);
    onpressChange(event.key);
})



    
    //      let audio1 = new Audio("beat1.mp3");
    //      let audio2 = new Audio("beat2.mp3");
    //      let audio3 = new Audio("beat3.mp3");
    //      let audio4 = new Audio("beat4.mp3");
    //      let audio5 = new Audio("beat5.mp3");
    //      let audio6 = new Audio("beat6.mp3");
    //      let audio7 = new Audio("beat7.mp3");
    //      let audio8 = new Audio("beat8.mp3");
    //      let audio9 = new Audio("beat9.mp3");
         



    // let a = document.getElementById("a");
    // let b = document.getElementById("b");
    // let c = document.getElementById("c");
    // let d = document.getElementById("d");
    // let e = document.getElementById("e");
    // let g = document.getElementById("g");
    // let h = document.getElementById("h");
    // let q = document.getElementById("q");
    // let f = document.getElementById("f");

    
    // document.addEventListener("keydown",(event)=>{

    //     console.log(event.key);
    //          if(event.key == "a"){
    //              a.classList.add("aa");
    //              audio1.play();
    //          }
    //          else if(event.key == "s"){
    //              b.classList.add("bb");
    //              audio2.play();
    //          }
    //          else if(event.key == "j"){
    //              c.classList.add("cc");
    //              audio3.play();
    //          }
    //          else if(event.key == "d"){
    //              d.classList.add("dd");
    //              audio4.play();
    //          }
    //          else if(event.key == "l"){
    //              e.classList.add("ee");
    //              audio5.play();
    //          }
    //          else if(event.key == "f"){
    //              f.classList.add("ff");
    //              audio6.play();
    //          }
    //          else if(event.key == "g"){
    //              g.classList.add("gg");
    //              audio7.play();
    //          }
    //          else if(event.key == "h"){
    //              h.classList.add("hh");
    //              audio8.play();
    //          }
    //          else if(event.key == "k"){
    //              q.classList.add("qq");
    //              audio9.play();
    //          }

             
    // })



    // document.addEventListener("keyup" , (event)=>{
    //              a.classList.remove("aa");
    //              b.classList.remove("bb");
    //              c.classList.remove("cc");
    //              d.classList.remove("dd");
    //              e.classList.remove("ee");
    //              f.classList.remove("ff");
    //              g.classList.remove("gg");
    //              h.classList.remove("hh");
    //              q.classList.remove("qq");
    //             audio1.pause();
    //             audio2.pause();
    //             audio3.pause();
    //             audio4.pause();
    //             audio5.pause();
    //             audio6.pause();
    //             audio7.pause();
    //             audio8.pause();
    //             audio9.pause();
                
    // })


// const playBeat = (buttonkey)=>{
//     let audiosrc = beats[buttonkey].beat;
//     let audio  = new Audio(audiosrc);
//     audio.currentTime = 0;
//     audio.play();

// }


// probely we can do this in that way but this is very long method 
// we want to do some easier work like database storage
// const playBeat = (buttonkey)=>{
//     if(buttonkey== "a"){

    
//     let audio = new Audio("here is url of audio file");
//     audio.currentTime = 0;
//     audio.play();
//     }
// }

