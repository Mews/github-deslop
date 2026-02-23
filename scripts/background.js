import "./browser-polyfill.min.js"

browser.runtime.onInstalled.addListener(async () => {
    await browser.storage.local.set(
        {
            "home_page": true,
            "dashboard_page": true,
        }
    )
    console.log("Stored default settings")

    const settings = await browser.storage.local.get(null)
    console.log("Current settings:", settings)
})
