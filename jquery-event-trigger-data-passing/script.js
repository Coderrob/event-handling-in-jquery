// Document ready
$(() => {
  /**
   * Event handler expecting additional data
   * @param {jQuery.Event} event - jQuery.Event object
   * @param {Object[]} args - data passed from jQuery trigger function
   */
  const eventHandler = (event, ...args) => {
    // Log the event to console
    log("event", event);

    // Log the passed trigger data to console
    log("args", args);

    // Alert showing trigger data
    alert(JSON.stringify(args, null, 2));
  };

  /**
   * Attach to click event passing custom data object
   */
  $("#clickMe").on("click", eventHandler);

  /**
   * Attach to click event to trigger clickMe button
   */
  $("#triggerMe").on("click", () => {
    $("#clickMe").trigger("click", ["foo", "bar"]);
  });
});

/**
 * Log key / value
 * @param {string} key - name or description
 * @param {Object} value - value to write to the console
 */
const log = (key, value) =>
  console.log(`${key}:${JSON.stringify(value, null, 2)}`);
