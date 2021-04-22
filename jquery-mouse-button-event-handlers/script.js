// Document ready
$(() => {
  /**
   * Clear table
   */
  $("#clear").on("click", (event) => {
    event.preventDefault();
    $("tbody").empty();
  });

  /**
   * Log data
   * @param {Object[]} args - the arguments to log
   */
  function log(...args) {
    $("tbody").append(
      $("<tr>").append(args.map((arg) => `<td>${arg}</td>`).join())
    );
  }

  /**
   * Event handler to log element ID and event type
   * @param {jQuery.Event} event - jQuery.Event object
   */
  const eventHandler = function (event) {
    log(event.target.id, event.type);
  };

  /**
   * Record button events
   */
  $("#clickMe")
    .contextmenu(eventHandler)
    .mousedown(eventHandler)
    .mouseup(eventHandler)
    .click(eventHandler)
    .dblclick(eventHandler);
});
