let clickCount = 0
const btn1 = document.getElementById("nyan")
const btnReset = document.getElementById("reset")
const btnAuto = document.getElementById("auto")
const count = document.getElementById("count")
const status = document.getElementById("status")

let flagAuto = false;
//============
window.addEventListener("load",function(){
    console.log("load")
    clickCount = 0
    let $ = 87,尻尻 = 11,る = 12
    
    //===============
    //setInterval(function(){alert("Hello")},3000);
    //================
    btn1.addEventListener("click",function(){
        let add = (x) =>{x+=1;return x;}
        clickCount = add(clickCount)
        count.innerText = String(clickCount)
        //
        // alert 彈出
        // prompt 彈出輸入
        // confirm 彈出回傳boolean 
        //window.alert("喵" + String(clickCount))
        //let keyIn = prompt("hi,你有多猛", [""]);
        //let keyClick = confirm("尻尻看嗎");
        
        // 結構變數
        /*
        let user = {
            name : keyIn,
            st : keyClick
        }
        */
        //
        //condition ? a : b
        //condition is true ,return a
        //or not return b
        /*
        let a = (clickCount == 5) ? function(){
            //console.log("尻太多搂")
            //window.alert("尻太多搂")
            let flash = document.getElementById("flash")
            flash.innerText = "尻太多搂"
        } :function(){
            console.log("alert click")
            console.log(user.name)
            console.log(user.st)
        }*/    
        /*
        switch(clickCount){
            case 5:
                status.innerText = "5次還不夠噢"
                break
            case 10:
                status.innerText = "10次了捏"
                break
            case 20:
                status.innerText = "尻爽沒啦幹"
        }
        */
        statusFunction(clickCount,status)
       //status.innerText = statusFunction(clickCount)
    })



    btnReset.addEventListener("click",function(){
        clickCount = 0
        count.innerText = String(clickCount)
        status.innerText = ""
        btnAuto.innerText = "自動尻"
        flagAuto = false
        //clearInterval(autoTimer)
    })

    btnAuto.addEventListener("click",function(){
        if(flagAuto == false)
        {    
            flagAuto = true
            btnAuto.innerText = "自動尻 on"
            //console.log(flagAuto)
        }
        else
        {
            flagAuto = false
            btnAuto.innerText = "自動尻 off"
            //console.log(flagAuto)
        }
    })
    //let autoTimer
    let autoCa = () => {
        setInterval(function()
        {
            //console.log(flag)
            //console.log(flag)
            if(flagAuto==true)
            {
                //console.log('a')
                clickCount++
                count.innerText = String(clickCount)
            }
            else
            {
                clearInterval()
            }
            //status.innerText = statusFunction(clickCount)
            statusFunction(clickCount,status)
        },1000);
    }
    autoCa()
    console.log("喵")
})


let bgc = btn1.style.backgroundColor
let mdAdd
btn1.addEventListener("mousedown",function(){
    
    mdAdd = setInterval(function(){
            clickCount += 1
            count.innerText = String(clickCount)
            //status.innerText = statusFunction(clickCount)
            statusFunction(clickCount,status)
    }
    ,1000)
    
    btn1.style.backgroundColor = "#7DB9DE"
})

btn1.addEventListener("mouseup",function(){
    clearInterval(mdAdd)
    btn1.style.backgroundColor = bgc
})

function statusFunction(count,obj){
    let text 
    switch(count){
        case 5:
            obj.innerText = "5次還不夠噢"
            //text = "5次還不夠噢"
            break
        case 10:
            //text = "10次了捏"
            obj.innerText = "10次了捏"
            break
        case 20:
            //text = "尻爽沒啦幹"
            obj.innerText = "尻爽沒啦幹"
            break
    }
    //console.log(text)
    //console.log(clickCount)
    //return text
}



