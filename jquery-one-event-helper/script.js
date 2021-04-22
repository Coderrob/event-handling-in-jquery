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
   * Record attaching events
   */
  log("click", "added");
  log("contextmenu", "added");

  /**
   * Attach to click and right-click events
   */
  $("#clickMe").one("click contextmenu", function (event) {
    event.preventDefault();

    log(event.type, "fired");
  });
});
