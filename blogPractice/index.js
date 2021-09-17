var title = document.getElementById("title")
var content = document.getElementById("content")
var btn = document.getElementById("btn")
var list = document.getElementById("articleBoard")


btn.addEventListener("click",function(){
    //onsole.log("hi")
    //var a = title.value
    //var b = content.value
    //console.log(a+"\r\n"+b)
    //console.log(list.innerHTML)
    
    //var newArticle = '<div class="article"><h2>' +title.value+'</h2><p>'+content.value+'</p></div>'
    //反引號
    var newArticle = `
    <div class="article">
        <h2> ${title.value}</h2>
        <p> ${content.value}</p>
    </div>
    `;
    list.innerHTML += newArticle;
    title.value = ""
    content.value = ""
})