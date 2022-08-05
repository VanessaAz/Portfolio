const toggleBtn = document.querySelector('.nav-toggle')
const navlinks = document.querySelectorAll('.nav__link')

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('nav-open')
})

navlinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open')
    })
})
