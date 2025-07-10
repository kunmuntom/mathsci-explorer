class Utils {
    static smooth_scroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault()
                const target = document.querySelector(this.getAttribute('href'))
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    })
                }
            })
        })
    }

    static init_nav_scroll() {
        const navbar = document.getElementById('navbar')
        if (!navbar) return

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('backdrop-blur-md')
                navbar.classList.remove('glass-effect')
            } else {
                navbar.classList.remove('backdrop-blur-md')
                navbar.classList.add('glass-effect')
            }
        })
    }

    static debounce(func, wait) {
        let timeout
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout)
                func(...args)
            }
            clearTimeout(timeout)
            timeout = setTimeout(later, wait)
        }
    }

    static throttle(func, limit) {
        let inThrottle
        return function () {
            const args = arguments
            const context = this
            if (!inThrottle) {
                func.apply(context, args)
                inThrottle = true
                setTimeout(() => inThrottle = false, limit)
            }
        }
    }

    static isInViewport(element) {
        const rect = element.getBoundingClientRect()
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        )
    }

    static getCurrentYear() { return new Date().getFullYear() }
    static formatDate(date, locale = 'th-TH') { return new Date(date).toLocaleDateString(locale) }
    static genId(prefix = 'id') { return `${prefix}-${btoa(`${Date.now()}-${performance.now().toString().replace('.', '')}${Math.random().toString(36).substr(2, 8)}`).replaceAll('=', '')}` }

    static setStorage(key, value) {
        try { localStorage.setItem(key, JSON.stringify(value)) }
        catch (e) { console.warn('LocalStorage not available') }
    }

    static getStorage(key, isJson = true) {
        try {
            const item = localStorage.getItem(key)
            if (!item) return null
            if (!isJson) return item

            return item ? JSON.parse(item) : null
        } catch (e) {
            console.warn('LocalStorage not available')
            return null
        }
    }

    static init() {
        this.smooth_scroll()
        this.init_nav_scroll()
    }
}

const loadUtils = () => {
    window.Utils = Utils
    window.Utils.init()
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => loadUtils())
else loadUtils()