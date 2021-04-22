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
 * Create counter object
 */
const createCounter = () => {
  count = 0;
  return {
    reset: () => (count = 0),
    get: () => count,
    increment: () => ++count,
  };
};
