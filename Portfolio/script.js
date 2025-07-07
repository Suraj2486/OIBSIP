 let lastScrollTop = 0;
  const header = document.getElementById("main-header");

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > 100) {
      header.classList.add("hide-header");
    } else {
      header.classList.remove("hide-header");
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });

  document.addEventListener("mousemove", (e) => {
    if (e.clientY < 60) {
      header.classList.remove("hide-header");
    }
  });

  const form = document.querySelector(".contact-form");
  const popup = document.getElementById("popupMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector('textarea').value.trim();

    // You can also process or save this data here...

    // Show popup
    popup.classList.add("show");

    // Hide after 3 seconds
    setTimeout(() => {
      popup.classList.remove("show");
    }, 3000);

    form.reset(); // Clear the form
  });
