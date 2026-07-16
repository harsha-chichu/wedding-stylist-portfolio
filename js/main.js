/* Ushaswini Munupaly — portfolio interactions */
(function () {
  "use strict";

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Navbar: transparent over hero → ivory on scroll ---------- */
  var nav = document.getElementById("nav");
  var onScroll = function () {
    nav.classList.toggle("is-scrolled", window.scrollY > 40);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  var toggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  navLinks.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  /* ---------- Scroll reveals ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Services tabs ---------- */
  var tabs = document.querySelectorAll(".tab");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (t) {
        var active = t === tab;
        t.classList.toggle("is-active", active);
        t.setAttribute("aria-selected", String(active));
        var panel = document.getElementById(t.getAttribute("aria-controls"));
        panel.hidden = !active;
        panel.classList.toggle("is-active", active);
        if (active) {
          panel.querySelectorAll(".reveal").forEach(function (el) {
            el.classList.add("is-visible");
          });
        }
      });
    });
  });

  /* ---------- Moodboard drag scroll ---------- */
  var scroller = document.getElementById("moodScroller");
  if (scroller) {
    var isDown = false, startX = 0, startLeft = 0, moved = false;
    scroller.addEventListener("pointerdown", function (e) {
      if (e.pointerType !== "mouse") return; // touch scrolls natively
      isDown = true;
      moved = false;
      startX = e.clientX;
      startLeft = scroller.scrollLeft;
      scroller.setPointerCapture(e.pointerId);
    });
    scroller.addEventListener("pointermove", function (e) {
      if (!isDown) return;
      var dx = e.clientX - startX;
      if (Math.abs(dx) > 4 && !moved) {
        moved = true;
        scroller.classList.add("is-dragging");
      }
      if (moved) scroller.scrollLeft = startLeft - dx;
    });
    var endDrag = function () {
      isDown = false;
      scroller.classList.remove("is-dragging");
    };
    scroller.addEventListener("pointerup", endDrag);
    scroller.addEventListener("pointercancel", endDrag);
    scroller.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { scroller.scrollBy({ left: 320, behavior: reducedMotion ? "auto" : "smooth" }); e.preventDefault(); }
      if (e.key === "ArrowLeft") { scroller.scrollBy({ left: -320, behavior: reducedMotion ? "auto" : "smooth" }); e.preventDefault(); }
    });
  }

  /* ---------- Portfolio filters ---------- */
  var pills = document.querySelectorAll(".filter-pill");
  var works = document.querySelectorAll(".work");
  pills.forEach(function (pill) {
    pill.addEventListener("click", function () {
      pills.forEach(function (p) { p.classList.toggle("is-active", p === pill); });
      var filter = pill.dataset.filter;
      works.forEach(function (work) {
        work.classList.toggle("is-hidden", filter !== "all" && work.dataset.cat !== filter);
      });
    });
  });

  /* ---------- Lightbox ---------- */
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");
  var lightboxCaption = document.getElementById("lightboxCaption");
  var lightboxClose = document.getElementById("lightboxClose");
  var lastFocused = null;

  document.querySelectorAll(".work-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var img = btn.querySelector("img");
      var caption = btn.querySelector("figcaption");
      lightboxImg.src = img.currentSrc || img.src;
      lightboxImg.alt = img.alt;
      lightboxCaption.textContent = caption ? caption.textContent : "";
      lastFocused = btn;
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
      lightboxClose.focus();
    });
  });

  var closeLightbox = function () {
    lightbox.hidden = true;
    lightboxImg.src = "";
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  };
  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
  });

  /* ---------- Enquiry form → mail client ---------- */
  var form = document.getElementById("enquiryForm");
  var note = document.getElementById("formNote");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var data = new FormData(form);
    var name = (data.get("name") || "").toString().trim();
    if (!name) {
      note.textContent = "Please tell me your name so I know who I'm writing back to.";
      form.querySelector("[name=name]").focus();
      return;
    }
    var subject = "Wedding styling enquiry — " + name;
    var body =
      "Name: " + name + "\n" +
      "Wedding date: " + (data.get("date") || "—") + "\n" +
      "City: " + (data.get("city") || "—") + "\n\n" +
      (data.get("message") || "");
    window.location.href =
      "mailto:hello@ushaswinistyles.com?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);
    note.textContent = "Opening your mail app — I'll reply within two days.";
  });
})();
