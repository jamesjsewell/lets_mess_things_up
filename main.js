let buttonChanger = document.getElementById('styles')
let pageDiv = document.getElementById('pageDiv')
let mainHeading = document.getElementById('heading')

buttonChanger.addEventListener('click', () => {
  if (pageDiv.attributes.class.value === 'primary_background') {
    mainHeading.innerHTML = 'Hello Destruction!'
    pageDiv.setAttribute('class', 'secondary_background')
  } else {
    mainHeading.innerHTML = 'Aloha Planet!'
    mainHeading.className = 'mainHeadingText'
    pageDiv.setAttribute('class', 'primary_background')
  }
})
