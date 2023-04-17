const tabs = (
  headerSelector,
  tabSelector,
  contentSelector,
  activeClass,
  display = "block"
) => {
  const header = document.querySelector(headerSelector);
  const tabs = document.querySelectorAll(tabSelector);
  const content = document.querySelectorAll(contentSelector);

  const hideTabContent = () => {
    content.forEach((el) => {
      el.style.display = "none";
    });

    tabs.forEach((item) => {
      item.classList.remove(activeClass);
    });
  };

  const showTabContent = (i = 0) => {
    content[i].style.display = display;
    tabs[i].classList.add(activeClass);
  };

  hideTabContent();
  showTabContent();

  header.addEventListener("click", (e) => {
    const target = e.target;

    if (
      (target && target.classList.contains(tabSelector.replace(/\./, ""))) ||
      target.parentNode.classList.contains(tabSelector.replace(/\./, ""))
    ) {
      tabs.forEach((el, i) => {
        if (target == el || target.parentNode == el) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
};

export default tabs;
