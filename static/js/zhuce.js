let input = $("input")
let btn = $(".btn")
let del = $(".del")
let flag = false

input.val("")

input.on('input',function(e){
    let str = input.val()
    if(str.length>0){
        flag = true
        btn.addClass("btn_ok")
        del.css('display','block')
    }else{
        flag=false
        btn.removeClass("btn_ok")
        del.css('display','none')
    }
})

del.click(function(){
    input.val("")
    btn.removeClass("btn_ok")
    flag = false
})

btn.click(function(){
    if(flag){
        location.href = "/face2"
        localStorage.name = input.val()
    }
})
