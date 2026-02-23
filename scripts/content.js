const isHomePage = () => {
    const path = window.location.pathname;
    return path === "/";
};
const isDashboardPage = () => {
    const path = window.location.pathname;
    return path === "/dashboard";
};

// Log current settings
(async () => {
    const settings = await browser.storage.local.get(null)
    console.log("Github De-slop: Current settings:", settings)

    if (isHomePage() && settings.home_page) {
        const copilotInputFields = document.querySelectorAll('[partial-name="copilot-chat-input-partial"]');
        copilotInputFields.forEach( (element) => {
            element.remove();
        } )
    }
    if (isDashboardPage() && settings.dashboard_page) {
        const copilotInputFields = document.querySelectorAll('[partial-name="copilot-chat-input-partial"]');
        copilotInputFields.forEach( (element) => {
            element.remove();
        } )
    }
})()
