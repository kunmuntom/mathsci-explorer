export class CommonLoader {
    constructor() { this.init() }
    init() {
        this.init_mobile()
        this.init_footer()
    }

    init_mobile() {
        const mBtn = document.getElementById('mobileMenuButton')
        const mSidebar = document.getElementById('mobileSidebar')
        const mOverlay = document.getElementById('mobileOverlay')
        const mClose = document.getElementById('closeSidebar')
        const mLinks = document.querySelectorAll('.mobile-nav-link')
        if (!mBtn || !mSidebar || !mOverlay || !mClose) return

        const openSidebar = () => {
            mSidebar.classList.remove('translate-x-full')
            mOverlay.classList.remove('hidden')
            setTimeout(() => mOverlay.classList.add('opacity-100'), 10)
        }

        const closeSidebarFn = () => {
            mSidebar.classList.add('translate-x-full')
            mOverlay.classList.remove('opacity-100')
            setTimeout(() => mOverlay.classList.add('hidden'), 300)
        }

        mBtn.addEventListener('click', openSidebar)
        mClose.addEventListener('click', closeSidebarFn)
        mOverlay.addEventListener('click', closeSidebarFn)
        mLinks.forEach(link => link.addEventListener('click', closeSidebarFn))

        document.addEventListener('keydown', (e) => (e.key === 'Escape' && !mSidebar.classList.contains('translate-x-full')) && closeSidebarFn())
    }

    init_footer() {
        const footer = document.getElementById('footer')
        if (!footer) return

        const cYear = window.Utils.getCurrentYear()
        const cLang = window.LangLoader ? window.LangLoader.getCurrentLanguage() : 'th'

        const footerContent = this.getFooter(cLang, cYear)
        footer.innerHTML = footerContent
    }

    getFooter(lang, year) {
        const isEnglish = lang === 'en'

        return `
            <div class="max-w-6xl mx-auto px-4">
                <div class="grid md:grid-cols-4 gap-8">
                    <div class="md:col-span-2">
                        <div class="flex items-center space-x-3 mb-4">
                            <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <i class="fas fa-graduation-cap text-white text-xl"></i>
                            </div>
                            <span class="text-xl font-bold">MathSci Mastermind</span>
                        </div>
                        <p class="text-gray-400 mb-4">
                            ${isEnglish ? 'AI-powered Mathematics and Science Learning Platform' : 'แพลตฟอร์มการเรียนรู้คณิตศาสตร์และวิทยาศาสตร์ด้วย AI'}
                        </p>
                        <div class="flex space-x-4">
                            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
                                <i class="fab fa-facebook-f text-xl"></i>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
                                <i class="fab fa-twitter text-xl"></i>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
                                <i class="fab fa-instagram text-xl"></i>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
                                <i class="fab fa-youtube text-xl"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="text-lg font-semibold mb-4">
                            ${isEnglish ? 'Categories' : 'หมวดหมู่'}
                        </h3>
                        <ul class="space-y-2">
                            <li><a href="#math" class="text-gray-400 hover:text-white transition-colors duration-200">
                                ${isEnglish ? 'Mathematics' : 'คณิตศาสตร์'}
                            </a></li>
                            <li><a href="#science" class="text-gray-400 hover:text-white transition-colors duration-200">
                                ${isEnglish ? 'Science' : 'วิทยาศาสตร์'}
                            </a></li>
                            <li><a href="#about" class="text-gray-400 hover:text-white transition-colors duration-200">
                                ${isEnglish ? 'About Us' : 'เกี่ยวกับเรา'}
                            </a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 class="text-lg font-semibold mb-4">
                            ${isEnglish ? 'Contact' : 'ติดต่อเรา'}
                        </h3>
                        <div class="space-y-2">
                            <div class="flex items-center space-x-2">
                                <i class="fas fa-school text-blue-400"></i>
                                <span class="text-gray-400 text-sm">
                                    ${isEnglish ? 'Thatako Phitayakom School' : 'โรงเรียนท่าตะโกพิทยาคม'}
                                </span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <i class="fas fa-map-marker-alt text-blue-400"></i>
                                <span class="text-gray-400 text-sm">
                                    ${isEnglish ? 'Nakhon Sawan, Thailand' : 'นครสวรรค์, ประเทศไทย'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p class="text-gray-400">
                        © ${year} MathSci Mastermind. ${isEnglish ? 'All rights reserved.' : 'สงวนลิขสิทธิ์'} | 
                        ${isEnglish ? 'Mathematics Learning Group, Thatako Phitayakom School' : 'กลุ่มสาระการเรียนรู้คณิตศาสตร์ โรงเรียนท่าตะโกพิทยาคม'}
                    </p>
                </div>
            </div>
        `
    }

    update_footer() { this.init_footer() }
    update_mNav() {
        const mLinks = document.querySelectorAll('.mobile-nav-link')
        const cLang = window.LangLoader ? window.LangLoader.getCurrentLanguage() : 'th'

        if (window.translations && window.translations[cLang]) {
            const lang = window.translations[cLang]
            const keys = ['homeLink', 'mathLink', 'scienceLink', 'aboutLink']

            mLinks.forEach((link, index) => {
                const span = link.querySelector('span')
                if (span && keys[index] && lang[keys[index]]) span.textContent = lang[keys[index]]
            })
        }
    }
}

window.CommonLoader = new CommonLoader()