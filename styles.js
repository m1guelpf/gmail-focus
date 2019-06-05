function refreshBodyClass() {
    if (document.location.hash.indexOf('#search') === 0) {
        document.body.classList.remove('notSearching')
    } else {
        document.body.classList.add('notSearching')
    }
}

window.addEventListener('hashchange', refreshBodyClass)

refreshBodyClass()