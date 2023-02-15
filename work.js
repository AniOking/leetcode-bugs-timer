/**
 * 
 * @param {HTMLCollection} chakras 
 * @param {number} index :[Representing whether it is reset or hide chakra] 
 * @description [Event handler when mouse moves inside timer div]
 */
function insideDiv(chakras,index){
  try{
    let chakra = chakras[index];
    chakra.style.display="";
  }
  catch(err){
    console.log(err.message);
  }
}

/**
 * 
 * @param {HTMLCollection} chakras 
 * @description [Event handler when mouse moves outside timer div]
 */
function outsideDiv(chakras){
    for(let i=2;i<4;++i){
        try{
          chakras[i].style.display = "none";
        }
        catch(err){
          console.log(err.message);
        }
    }
  
}

/**
 * @description [Event handler for lc-lg class (timer+reset)]
 */
function eventHandlerLclg(){
  try{
  let chakras =  document.getElementsByClassName("chakra-portal");
  let lclgtarget = document.querySelector("nav div .hidden .px-1").children;

  lclgtarget[0].addEventListener("mouseover",()=>{insideDiv(chakras,2)});
  lclgtarget[0].addEventListener("mouseleave",()=>{outsideDiv(chakras)});


  lclgtarget[1].addEventListener("mouseover",()=>{insideDiv(chakras,3)});
  lclgtarget[1].addEventListener("mouseleave",()=>{outsideDiv(chakras)});
  }
  catch(err){
    console.log(err.message);
  }
}

//Adding Event Listener to timer div which listen for click
document.querySelectorAll(".hidden > div")[3].addEventListener("click",function(){
    setTimeout(eventHandlerLclg,1000);
});