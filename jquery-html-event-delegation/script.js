// Avoid alias conflic by passing jQuery object to anon-function.
(function ($) {
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
  function clearLog() {
    $("tbody").empty();
  }

  /**
   * On document ready record event happening
   */
  $().ready(() => {
    log("DOCUMENT", "ready");
  });

  /**
   * Delegate click and keypress handlers
   */
  $("html").on("click keypress", (event) => {
    log(event.target.nodeName, event.type);
  });

  /**
   * Prevent submitting the form
   */
  $("#userLogin").on("submit", (event) => {
    event.preventDefault();
  });

  /**
   * Clear the recorded events
   */
  $("#clearEvents").on("click", (event) => {
    // Prevent the click from propagating to html
    event.stopPropagation();
    clearLog();
  });
})(jQuery);
