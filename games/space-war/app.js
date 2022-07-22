const mothershipImg = document.querySelector('[data-mothership-img]')
const mothershipDiv = document.querySelector('[data-mothership-div')

mothershipImg.addEventListener('mouseover', () => {
    mothershipDiv.innerHTML += `
        <ul class="stats-menu">
            <li>Mothership</li>
            <li>HP: 100 / 100</li>
        </ul >`
})

mothershipImg.addEventListener('mouseout', () => {
    mothershipDiv.style.backgroundColor = ''
})