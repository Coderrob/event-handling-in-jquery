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
   * Event handler to log event data and namespace
   * @param {jQuery.Event} event - jQuery Event object
   */
  const eventHandler = function (event) {
    event.preventDefault();
    // Decompose to get event properties as variables
    const { data, namespace } = event;
    log(data, namespace ?? "", "fired");
  };

  /**
   * Attach click handler and click handler with a namespace
   */
  $("#clickMe")
    .on("click", null, "click", eventHandler)
    .on("click.fancy", null, "click.fancy", eventHandler);

  /**
   * Add click handler to 'Trigger by Namespace' button
   */
  $("#triggerMe").on("click", () => {
    $("#clickMe").trigger("click.fancy");
  });

  /**
   * Add click handler to 'Remove Handlers' button
   */
  $("#removeMe").on("click", () => {
    $("#clickMe").off(".fancy");
  });
});
