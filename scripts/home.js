
class HomePage {
    constructor() { this.init() }

    init() {
        this.init_anim()
        this.init_heroBtn()
        this.init_icon()
        this.init_particle()
    }

    init_anim() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }

        const observer = new IntersectionObserver((entries) =>
            entries.forEach(entry =>
                (entry.isIntersecting) && entry.target.classList.add('slide-in-left', 'slide-in-right', 'bounce-in')
            ), observerOptions
        )

        document.querySelectorAll('section > div > div, section > div > h2, section > div > p').forEach(el => observer.observe(el))
    }

    init_heroBtn() {
        const startLearningBtn = document.getElementById('startLearningBtn')
        const learnMoreBtn = document.getElementById('learnMoreBtn')

        if (startLearningBtn) startLearningBtn.addEventListener('click', () => this.scrollToSection('math'))
        if (learnMoreBtn) learnMoreBtn.addEventListener('click', () => this.scrollToSection('about'))
    }

    init_icon() {
        const floatingIcons = document.querySelectorAll('.float-animation');
        floatingIcons.forEach(icon => {
            icon.addEventListener('mouseenter', () => {
                icon.style.animationPlayState = 'paused'
                icon.style.transform = 'scale(1.2) rotate(15deg)'
            })

            icon.addEventListener('mouseleave', () => {
                icon.style.animationPlayState = 'running'
                icon.style.transform = ''
            })
        })
    }

    init_particle() {
        const heroSection = document.getElementById('home')
        if (!heroSection) return

        const particleCount = 50

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div')
            particle.className = 'absolute w-1 h-1 bg-white rounded-full opacity-30'
            particle.style.left = Math.random() * 100 + '%'
            particle.style.top = Math.random() * 100 + '%'
            particle.style.animationDelay = Math.random() * 10 + 's'
            particle.style.animation = `float ${5 + Math.random() * 10}s ease-in-out infinite`

            heroSection.appendChild(particle)
        }
    }

    scrollToSection(sectionId) {
        const target = document.getElementById(sectionId)
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => new HomePage())
else new HomePage()