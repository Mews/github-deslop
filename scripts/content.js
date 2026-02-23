const isHomePage = () => {
    const path = window.location.pathname;
    return path === "/";
};

const isDashboardPage = () => {
    const path = window.location.pathname;
    return path === "/dashboard";
};

if (isHomePage() || isDashboardPage()) {
    var removedElements = 0;

    const copilotInputFields = document.querySelectorAll('[partial-name="copilot-chat-input-partial"]');
    copilotInputFields.forEach( (element) => {
        element.remove();
        removedElements++;
    } )
    
    console.log(`GitHub De-slop: Removed ${removedElements} elements.`)
}
