(function () {
  var nav = document.getElementById("nav");
  var toggle = document.getElementById("navToggle");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
  }

  var filters = document.querySelectorAll(".filter-btn");
  var cards = document.querySelectorAll("#courseGrid .course-card");
  if (filters.length && cards.length) {
    filters.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filters.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        var f = btn.getAttribute("data-filter");
        cards.forEach(function (card) {
          var show = f === "all" || card.getAttribute("data-cat") === f;
          card.style.display = show ? "" : "none";
        });
      });
    });
  }
})();
