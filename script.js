window.alert("welcom to my javascript project")
const body = document.getElementById('body').style
const colors = ["red", "blue", "green", "pink", "white", "purple", "grey", "orange", "yellow"]
function changeColor () {
     body.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
}
