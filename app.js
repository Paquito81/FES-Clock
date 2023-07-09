const secondHandle = document.querySelector('.handle__second')
const minuteHandle = document.querySelector('.handle__minute')
const hourHandle = document.querySelector('.handle__hour')

// requestAnimationFrame(setHandles)
setInterval(() => {
    setHandles()
}, 1000)

function setHandles() {
    console.log('pizza')
    const d = new Date();

    const hours = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d. getSeconds();
    
    secondHandle.styles.transform = `translateX(-50) rotate(${seconds * 6}deg)`
    hourHandle.styles.transform = `translateX(-50%) rotate(${hours * 30}deg)`
    minuteHandle.styles.transform = `translateX(-50%) rotate(${minutes * 6}deg)`

}