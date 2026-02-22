document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const exportPdfBtn = document.getElementById("export-pdf-btn");
  if (exportPdfBtn) {
    exportPdfBtn.addEventListener("click", () => {
      window.print();
    });
  }

  const scrollAreas = document.querySelectorAll(".career-scroll");
  scrollAreas.forEach((scrollArea) => {
    let isDragging = false;
    let startX = 0;
    let startLeft = 0;

    const startDrag = (clientX) => {
      isDragging = true;
      startX = clientX;
      startLeft = scrollArea.scrollLeft;
      scrollArea.classList.add("is-dragging");
    };

    const moveDrag = (clientX) => {
      if (!isDragging) return;
      const delta = clientX - startX;
      scrollArea.scrollLeft = startLeft - delta;
    };

    const endDrag = () => {
      if (!isDragging) return;
      isDragging = false;
      scrollArea.classList.remove("is-dragging");
    };

    scrollArea.addEventListener("pointerdown", (event) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      startDrag(event.clientX);
    });

    scrollArea.addEventListener("pointermove", (event) => {
      moveDrag(event.clientX);
    });

    scrollArea.addEventListener("pointerup", endDrag);
    scrollArea.addEventListener("pointercancel", endDrag);
    scrollArea.addEventListener("pointerleave", () => {
      if (isDragging) endDrag();
    });

    if (!window.PointerEvent) {
      scrollArea.addEventListener("touchstart", (event) => {
        if (event.touches.length !== 1) return;
        startDrag(event.touches[0].clientX);
      }, { passive: true });

      scrollArea.addEventListener("touchmove", (event) => {
        if (event.touches.length !== 1) return;
        moveDrag(event.touches[0].clientX);
        if (isDragging) event.preventDefault();
      }, { passive: false });

      scrollArea.addEventListener("touchend", endDrag);
      scrollArea.addEventListener("touchcancel", endDrag);
    }
  });
});
