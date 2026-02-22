const isDashboardPage = () => {
    const path = window.location.pathname;
    return path === "/" || path === "/dashboard";
};

if (isDashboardPage()) {
    var removedElements = 0;

    const copilotInputFields = document.querySelectorAll('[partial-name="copilot-chat-input-partial"]');
    copilotInputFields.forEach( (element) => {
        element.remove();
        removedElements++;
    } )
    
    console.log(`GitHub Unslop: Removed ${removedElements} elements.`)
}
