// Document loading
(function () {
  /**
   * Toggle the visual state of the light bulb
   * @param {Object} elem - element reference to turn on/off the lightbulb styles
   */
  function toggleLight(elem) {
    if (!elem?.classList) return;
    elem.classList.toggle("on");
    elem.classList.toggle("bi-lightbulb");
    elem.classList.toggle("bi-lightbulb-fill");
  }

  /**
   * Record the event in the table
   * @param {CustomEvent} event - the CustomEvent object
   */
  function record(event) {
    // Decompose the event object's properties
    const { type, target, detail } = event;

    // Decompose the event target object
    const { id, nodeName, value } = target ?? {};

    // Record the id, type, and value
    log(id || nodeName, type, value ?? detail ?? "");
  }

  /**
   * Add click listener to clear the table
   */
  document
    .getElementById("clearEvents")
    .addEventListener("click", clearLog.bind(this));

  /**
   * Reference to the light bulb icon element
   */
  const lightBulb = document.getElementById("lightBulb");

  /**
   * Add custom event handler for 'toggle.light'
   */
  lightBulb.addEventListener("toggle.light", function (event) {
    record(event);

    toggleLight(this);
  });

  /**
   * Reference to the light switch button group div container
   */
  document
    .getElementById("lightSwitch")
    .addEventListener("change", function (event) {
      record(event);

      // Publish CustomEvent to the light bulb for handling
      lightBulb.dispatchEvent(
        // Create new custom event using custom event type
        new CustomEvent("toggle.light", {
          detail: {
            power: event?.target?.value,
          },
        })
      );
    });
})();
