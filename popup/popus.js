const homePageCheckbox = document.getElementById("home_page")
const dashboardPageCheckbox = document.getElementById("dashboard_page")

// Set the checkboxes to reflect the values in storage
if ((await browser.storage.local.get("home_page")).home_page) {
    homePageCheckbox.checked = true
}
else {
    homePageCheckbox.checked = false
}

if ((await browser.storage.local.get("dashboard_page")).dashboard_page) {
    dashboardPageCheckbox.checked = true
}
else {
    dashboardPageCheckbox.checked = false
}

// Update storage when checkboxes checked
homePageCheckbox.addEventListener("change", async () => {
    await browser.storage.local.set({"home_page":homePageCheckbox.checked})
})
dashboardPageCheckbox.addEventListener("change", async () => {
    await browser.storage.local.set({"dashboard_page":dashboardPageCheckbox.checked})
})
