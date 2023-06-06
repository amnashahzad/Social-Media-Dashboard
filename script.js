// Sample data for social media widgets
const widgetsData = [
    {
        title: "Facebook",
        content: "1.5k",
        link: "#"
    },
    {
        title: "Twitter",
        content: "2.3k",
        link: "#"
    },
    {
        title: "Instagram",
        content: "1.8k",
        link: "#"
    }
];

// Function to create social media widgets
function createWidgets() {
    const dashboard = document.querySelector(".dashboard");

    widgetsData.forEach(data => {
        const widget = document.createElement("div");
        widget.classList.add("widget");

        const header = document.createElement("div");
        header.classList.add("widget-header");

        const title = document.createElement("span");
        title.classList.add("widget-title");
        title.textContent = data.title;

        const content = document.createElement("span");
        content.classList.add("widget-content");
        content.textContent = data.content;

        const footer = document.createElement("div");
        footer.classList.add("widget-footer");

        const link = document.createElement("a");
        link.href = data.link;
        link.textContent = "View";

        header.appendChild(title);
        header.appendChild(content);
        footer.appendChild(link);

        widget.appendChild(header);
        widget.appendChild(footer);

        dashboard.appendChild(widget);
    });
}

// Call the function to create widgets when the page loads
window.addEventListener("load", createWidgets);
