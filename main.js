let toggle = false
setInterval(()=>{
    toggle = !toggle
    document.body.innerHTML = toggle ? 'WOW' : 'COOL'
}, 1000)