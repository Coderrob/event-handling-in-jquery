/**
 * Log data
 * @param {Object[]} args - the arguments to log
 */
function log(...args) {
  $("tbody").prepend(
    $("<tr>").append(
      args.map((arg) => `<td>${JSON.stringify(arg)}</td>`).join()
    )
  );
}

/**
 * Clear log data
 */
function clearLog() {
  $("tbody").empty();
}
