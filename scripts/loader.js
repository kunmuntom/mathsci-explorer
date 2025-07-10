const load_all = async () => {
    await import("../scripts/function.js")
    await import("../scripts/common.js")

    await import("../scripts/lang/lang.js")
    await import("../scripts/lang/loader.js")
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', async () => load_all())
else load_all()