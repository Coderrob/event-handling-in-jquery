// Document ready
$(() => {
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
   * Clear log data
   */
  $("#clear").click(() => {
    $("tbody").empty();
  });

  /**
   * Record the type of event fired
   * @param {jQuery.Event} event - jQuery Event object
   */
  const eventHandler = function (event) {
    log(event.type, "fired");
  };

  /**
   * Add input event handlers
   */
  $("#keyboardInput")
    .focusin(eventHandler)
    .focus(eventHandler)
    .focusout(eventHandler)
    .blur(eventHandler)
    .select(eventHandler)
    .change(eventHandler);

  /**
   * Set focus to the textbox
   */
  $("#setFocus").click(() => $("#keyboardInput").focus());

  /**
   * Submit the form
   */
  $("#submitForm").click(() => $("#form").submit());
});
