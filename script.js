const wrapper = document.getElementById("wrapper")
const wrapperPosition = wrapper.getBoundingClientRect()

const wrapperWidth = wrapperPosition.width
const wrapperHeight = wrapperPosition.height

const eyeWrapper = document.getElementsByClassName("eyes")
const eyeWrapperWidth = eyeWrapper[0].getBoundingClientRect().width

const eyes = document.getElementsByClassName("eye")
const eyeWidth = eyes[0].getBoundingClientRect().width

addEventListener('mousemove', (e) => {
    const mouseX = e.clientX
    const mouseY = e.clientY

    const position = calculateEyePosition(mouseX, mouseY)

    for (let eye of eyes) {
        eye.style.left = position.x + "px"
        eye.style.top = position.y + "px"
    }
})

function calculateEyePosition (mouseX, mouseY) {
    return {
        x: calculatePosition(mouseX, wrapperWidth),
        y: calculatePosition(mouseY, wrapperHeight),
    }
}

function calculatePosition (mousePosition, wrapperSize) {
    const position = mousePosition / wrapperSize * eyeWrapperWidth - eyeWidth
    return position < 0 ? 0 : position
}
