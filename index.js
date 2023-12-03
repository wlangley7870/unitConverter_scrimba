//Unit Converter--Solo project built for Scrimba. github.com/wlangley7870


//define elements and link to variables

//ins
let inputEl = document.getElementById("fancy-input");
const convertBtn = document.getElementById("convert-btn");

//purely for code readability
let inp = "";

//outs
//DOM
const lengthEl = document.getElementById("length-el") ;
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");
//text switches
let ooEE = "ee";
let s = "s";

//backend
let lengthOut = "";
let volumeOut = "";
let massOut = "";



//base
const meterUOM = 3.281//feet
const literUOM = 0.264//gallons
const kilogramUOM = 2.204//pounds

convertBtn.addEventListener("click", function(){

    renderCalc()

})

function calc(uomIn) {
    let result;

    if (uomIn==='mTf') {
        result = (inp*meterUOM); 
        return result.toFixed(3);
    } else if (uomIn==='fTm') {
        result = (inp/meterUOM);
        return result.toFixed(3);
    } else if (uomIn==='lTg') {
        result = (inp*literUOM);
        return result.toFixed(3);
    } else if (uomIn==='gTl') {
        result = (inp/literUOM);
        return result.toFixed(3);
    } else if (uomIn==='kTp') {
        result = (inp*kilogramUOM);
        return result.toFixed(3);
    } else if (uomIn==='pTk') {
        result = (inp/kilogramUOM);
        return result.toFixed(3);
    }

}

function renderCalc() {
    inp = inputEl.value;
    
    if(Number(inp)===1) {
        ooEE = "oo"
        s = ""
    } else {
        ooEE = "ee"
        s = "s"
    }

    if(inp) {
    //render all cards e.g| "X meters = [calc] feet | X feet = [calc] meters"
    lengthOut = `${inp} meter${s} = ${calc('mTf')} feet | ${inp} f${ooEE}t = ${calc("fTm")} meter${s}`
    volumeOut = ` ${inp} liter${s} = ${calc("lTg")} gallon${s} | ${inp} gallon${s} = ${calc("gTl")} liter${s}`
    massOut = `${inp} kilo${s} = ${calc("kTp")} pound${s} | ${inp} pound${s} = ${calc("pTk")} kilo${s}`
    }
    
    updateDOM();
}

function updateDOM() {
    lengthEl.innerText = lengthOut;
    volumeEl.innerText = volumeOut;
    massEl.innerText = massOut;
}

