document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);
        console.log(href)

        const scrollTarget = document.getElementById(href);

        const topOffset = 80;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});



function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('elem-show')
        }
    })
}

let options = { threshold: [0.5] }
let observer = new IntersectionObserver(onEntry, options)
let element = document.querySelector('.header__content')
let element2 = document.querySelector('.header__contact')
let element3 = document.querySelectorAll('.portfolio__content-block')

observer.observe(element)
observer.observe(element2)
observer.observe(element3[0])
observer.observe(element3[1])