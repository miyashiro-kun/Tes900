const indicator = document.querySelector(".indicator");
const tabs = document.querySelectorAll(".tab");

// Load first page by default
loadPage("pages/page1.html");

function changeTab(tab, page) {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    // Move liquid indicator
    indicator.style.width = tab.offsetWidth + "px";
    indicator.style.left = tab.offsetLeft + "px";

    loadPage(page);
}

function loadPage(page) {
    fetch(page)
        .then(res => res.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
        });
}

// Set indicator position on load
window.onload = () => {
    const activeTab = document.querySelector(".tab.active");
    indicator.style.width = activeTab.offsetWidth + "px";
    indicator.style.left = activeTab.offsetLeft + "px";
};
