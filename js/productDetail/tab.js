export function tabPanelFunc() {
  const tabItems = document.querySelectorAll(".tab-item > a");
  const tabPanelItems = document.querySelectorAll(".tab-panel > div");
  tabItems.forEach((tabItem) => {
    tabItem.addEventListener("click", function (e) {
      e.preventDefault();
      tabItems.forEach((item) => item.classList.remove("active"));
      tabItem.classList.add("active");
      tabPanelItems.forEach((item) => item.classList.remove("active"));
      tabPanelItems.forEach((tabPanelItem) => {
        tabItem.href.includes(tabPanelItem.id) &&
          tabPanelItem.classList.add("active");
      });
    });
  });
}
