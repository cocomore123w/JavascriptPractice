window.addEventListener('load',function(){
    //location.reload()
    const btn = document.getElementById("btn1")
    btn.addEventListener("click",function(){
        console.log("點三小幹")
        //let txb = document.getElementById("txb")
        if (userAct == "admin" && userPwd == "admin") 
        {
            window.alert("登入成功")
            //window.location.assign("https://www.youtube.com/channel/UCl_gCybOJRIgOXw6Qb4qJzQ")
            //window.location.reload()
            window.location.assign("P2.html")
            //const p2 = document.getElementById("p2")
            //console.log(p2)
            //p2.innerHTML = p2 + 'action="p2.html"'
            //console.log (p2)
            //window.location = 
        }
        else
        {
            location.reload()
            window.alert("error")
        }
        //console.log(txb)
    })

    //box1.innerHTML = "<p>Test"
    //console.log(p1);
    console.log("load")


    let userAct = ""
    let userPwd = ""
    const _act = document.getElementById("act")
    _act.addEventListener('blur',function(e){
        console.log(e.target.value)
        let str = ""
        let actValue = document.getElementById("act").value
        str = actValue
        userAct = str
        //userAct = (e.target.value)
        
        //console.log("input");
    })

    const _pwd = document.getElementById("pwd")
    _pwd.addEventListener('blur',function(e){
        console.log(e.target.value)
        
        let str = ""
        let pwdValue = document.getElementById("pwd").value
        str = pwdValue
        userPwd = str
        //userPwd = (e.target.value)
        //console.log("input");
    })

   
})
window.addEventListener