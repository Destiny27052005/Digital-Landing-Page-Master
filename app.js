function navigation(navMenu, navId) {
    const navItem = document.getElementById(navMenu)
    const navbar = document.getElementById(navId)
    const cancel = document.getElementById('nav-close')

    if (navItem && navbar) {
        navbar.addEventListener('click', () => {
            navItem.classList.add('show')
            navbar.style.display = 'none'
            cancel.style.display = 'block'
            cancel.addEventListener('click', () => {
                navItem.classList.remove('show')
                navbar.style.display = 'block'
                cancel.style.display = 'none'
            })
        })
    }
}

navigation('nav-list', 'nav-bar')
