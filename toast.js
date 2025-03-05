function c() {
  // Select all trigger elements with x-ordo-utils containing "show-toast"
  const triggers = document.querySelectorAll("[x-ordo-utils*=show-toast]");
  console.log("[Toast] Found", triggers.length, "trigger(s).");

  triggers.forEach(trigger => {
    // Retrieve timeout value or default to 3000ms
    const timeout = trigger.dataset.showToastTimeout ?? 3000;
    console.log("[Toast] Timeout for trigger:", timeout);

    // Hide the common toast container initially
    const $toast = $(`[x-ordo-utils="toast-component-common"]`);
    $toast.hide();

    // Attach click event listener to each trigger
    trigger.addEventListener("click", event => {
      event.preventDefault();
      console.log("[Toast] Trigger clicked:", trigger);

      const toastElement = document.querySelector(`[x-ordo-utils="toast-component-common"]`);
      if (toastElement) {
        console.log("[Toast] Toast element found:", toastElement);
        $(toastElement)
          .css({ display: "inline-block", opacity: 0, top: -100 })
          .animate({ top: 0, opacity: 1 }, 200, function() {
            console.log("[Toast] Toast animation complete.");
          });
        setTimeout(function() {
          $(toastElement).fadeOut(200, function() {
            console.log("[Toast] Toast faded out.");
          });
        }, timeout);
      } else {
        console.error("[Toast] Toast element not found!");
      }
    });
  });
}
c();
