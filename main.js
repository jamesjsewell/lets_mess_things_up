let buttonChanger = document.getElementById('styles')
let pageDiv = document.getElementById('pageDiv')
let mainHeading = document.getElementById('heading')

buttonChanger.addEventListener('click', () => {
    if (pageDiv.attributes.class.value == 'primary_background') {
        mainHeading.innerHTML = 'Hello Destruction!'
        pageDiv.setAttribute('class', 'secondary_background')
        console.log("COMMMMMEEE ONNN")
    } else {
        console.log("leeeettttt")
        mainHeading.innerHTML = 'Hello World!'
        pageDiv.setAttribute('class', 'primary_background')
    }
})