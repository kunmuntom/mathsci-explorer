class LangLoader {
    constructor() {
        this.currentLanguage = 'th'
        this.init()
    }

    init() {
        this.initLanguageButton()
        this.saveload_lang()
    }

    initLanguageButton() {
        const langBtn = document.getElementById('languageButton')
        if (langBtn) langBtn.addEventListener('click', () => this.switch_lang())
    }

    saveload_lang() {
        const savedLang = window.Utils.getStorage('preferred_language')
        if (savedLang && savedLang !== this.currentLanguage) {
            this.currentLanguage = savedLang
            this.updateLanguage()
        }
    }

    switch_lang() {
        this.currentLanguage = this.currentLanguage === 'th' ? 'en' : 'th'
        this.updateLanguage()
        this.saveLanguage()
    }

    updateLanguage() {
        if (!window.translations || !window.translations[this.currentLanguage]) return (async () => {
            await import('../lang/lang.js')
            this.updateLanguage()
        })()

        const lang = window.translations[this.currentLanguage]
        this.update_LangBtn()
        this.update_textEl(lang)
        this.update_mNav(lang)
        this.update_footer()
    }

    update_LangBtn() {
        const langBtn = document.getElementById('languageButton')
        if (langBtn) {
            langBtn.innerHTML = this.currentLanguage === 'th'
                ? '<i class="fas fa-language mr-2"></i>EN'
                : '<i class="fas fa-language mr-2"></i>TH'
        }
    }

    update_textEl(lang) {
        Object.keys(lang).forEach(key => {
            const element = document.getElementById(key)
            if (element) this.update_El(element, lang[key], key)
        })
    }

    update_El(el, text, key) {
        if (key.includes('Button')) {
            const icon = el.querySelector('i')
            const iconClass = icon ? icon.className : ''
            el.innerHTML = iconClass ? `<i class="${iconClass}"></i> ${text}` : text
        } else if (key.includes('Link')) {
            const icon = el.querySelector('i')
            const span = el.querySelector('span')
            if (span) span.textContent = text
            else {
                const iconClass = icon ? icon.outerHTML : ''
                el.innerHTML = iconClass ? `${iconClass} ${text}` : text
            }
        } else if (key.includes('Title') && el.querySelector('i')) {
            const icon = el.querySelector('i')
            const iconClass = icon.outerHTML
            el.innerHTML = `${iconClass}${text}`
        } else el.textContent = text
    }

    update_mNav(lang) {
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link')
        const keys = ['homeLink', 'mathLink', 'scienceLink', 'aboutLink']

        mobileNavLinks.forEach((link, index) => {
            const span = link.querySelector('span')
            if (span && keys[index] && lang[keys[index]]) span.textContent = lang[keys[index]]
        })
    }

    update_footer() { if (window.CommonLoader) window.CommonLoader.update_footer() }
    saveLanguage() { window.Utils.setStorage('preferred_language', this.currentLanguage) }
    getCurrentLanguage() { return this.currentLanguage }
    setLanguage(lang) {
        if (lang === 'th' || lang === 'en') {
            this.currentLanguage = lang
            this.updateLanguage()
            this.saveLanguage()
        }
    }
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => window.LangLoader = new LangLoader())
else window.LangLoader = new LangLoader()