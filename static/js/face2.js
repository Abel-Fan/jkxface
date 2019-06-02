let title1 = $(".title1")
let title2 = $(".title2")
let video = $("video")
let ok = $(".ok")
let flag = true  // 验证是否成功 默认成功
let canvas = $("canvas")
let cobj = canvas[0].getContext("2d");
let flag1 = true
video[0].onprogress = function(){
    if(flag1){
        flag1 = false
        cobj.drawImage(video[0],0,0)
        let imgData = canvas[0].toDataURL("image/jpeg",0.7)
        imgData = imgData.substr(23)
        let name = localStorage.name
        $.ajax({
            url:"/addface",
            type:"post",
            dataType:"json",
            data:{url:imgData,name:name},
            success:function(data){
                if(data.error_code){
                    flag1 = true
                }else{
                    flag1 = false
                    location.href="/face1"
                }
            }
        })

    }
}




setTimeout(function(){
    title1.css('display','block')
    title2.css('display','none')
},1000)


navigator.mediaDevices.getUserMedia({
    video:{
        width:192,
        height:250
    }
}).then(function(data){
    video[0].srcObject = data
})

ok.click(function(){
    if(flag){
        // 跳转页面
        location.href=""
        let speech = window.speechSynthesis
        let setObj = new SpeechSynthesisUtterance()
        setObj.text="道路千万条，学习第一条。学习不努力，工作不顺利"
        speech.speak(setObj)
    }
})
