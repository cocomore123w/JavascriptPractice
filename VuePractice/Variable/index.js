window.addEventListener("load",function(){
    console.log("load fin")
})
//console.log("hi")

let member = {
    name:"coco",
    getName:function(){
        console.log(this.name)
        //return name
    }
}
let app = new Vue({
    el: '#app',
    data: {
      message: 'Hello . This is title used Vue.js .',
      score: 70,
      value:"喵"
    }
  })

let title = new Vue({
    el: '#title',
    data: {
      value:"喵",
      score: 70
    }
  })  
//console.log(aa)
//member.getName()
//console.log(member.getName)