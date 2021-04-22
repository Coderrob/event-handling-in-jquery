// Document ready
$(() => {
  /**
   * Attach to click event passing custom data object
   */
  $("#clickMe").on("click", { foo: "bar" }, (event) => {
    // Log the event for console view
    log("event", event);

    // Alert showing passed custom data
    alert(JSON.stringify(event.data));
  });
});

/**
 * Log key / value
 * @param {string} key - name or description
 * @param {Object} value - value to write to the console
 */
const log = (key, value) =>
  console.log(`${key}:${JSON.stringify(value, null, 2)}`);
