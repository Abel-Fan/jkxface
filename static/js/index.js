// let start = document.querySelector(".start")
let start = $('.start')
let tip = $('.tip')
let no = $('.no')
let ok = $('.ok')
let tip2 = $('.tip2')
let tip2_btn = $(".tip2_btn")
let register = $(".register")

register.click(function(){
    location.href="/zhuce"
})

start.click( function(){
    tip.css('display','block')
} )

no.click(function(){
    tip.css('display','none')
})
ok.click(function(){
    tip2.css("display","block")

    let speech = window.speechSynthesis
    let setObj = new SpeechSynthesisUtterance()
    setObj.text = "请将音量调到适中"
    speech.speak(setObj)
})

tip2_btn.click(function(){
    location.href="/face1"
})
