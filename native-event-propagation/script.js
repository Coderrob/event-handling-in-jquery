// Document ready
(function () {
  /**
   * Initialize the counter object (from utils.js)
   */
  const counter = createCounter();

  /**
   * Get event propagation phase name
   * @param {Event} event - native browser event object
   */
  function getPhaseName(event) {
    switch (event?.eventPhase) {
      case Event.AT_TARGET:
        return "target";

      case Event.BUBBLING_PHASE:
        return "bubbling";

      case Event.CAPTURING_PHASE:
        return "capturing";

      default:
        return "none";
    }
  }

  /**
   * Event handler for the click events
   * @param {Event} - native browser event object
   */
  function eventHandler(event) {
    // Uncomment to see what happens when an event stops propagating
    //event.stopPropagation();

    // Get the value of `data-reaction` from the element
    const reaction = event.target?.dataset?.reaction;

    // If reaction is null or undefined return;
    if (!reaction) return;

    // Increment call order
    counter.increment();

    // Add the event type and value to the table
    log(counter.get(), getPhaseName(event), event.type, reaction);
  }

  /**
   * Reset the displayed call order
   */
  // Add click handler to clear the reactions
  document.getElementById("clearEvents").addEventListener("click", () => {
    counter.reset();
    clearLog();
  });

  /**
   * Get reference to reactions icons
   */
  const icons = document.querySelectorAll("i");

  /**
   * Add event handler to each icon element
   */
  icons.forEach((icon) => {
    icon.addEventListener("click", eventHandler);
  });

  /**
   * Get reference to reactions list
   */
  const list = document.querySelector("ul");

  /**
   * Add event handler to unordered list in the bubbling phase (default)
   */
  list.addEventListener("click", eventHandler);

  /**
   * Add event handler to unordered list in the capturing phase
   */
  list.addEventListener("click", eventHandler, true);
})();
