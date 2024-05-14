//your JS code here. If required.
let colors = document.getElementById("colorSelect")
// alert(JSON.stringify(colors)) 

let button = document.querySelector("input[type='button'][value='Select and Remove']")

button.addEventListener('click', function () {
	let colorIndex = colors.selectedIndex
	// let color = colors.options[colorIndex]
	// alert(color.text, color.value)
	colors.options.remove(colorIndex)
})