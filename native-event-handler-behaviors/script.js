// Document loading
(function () {
  // Initialize the counter object (from utils.js)
  const counter = createCounter();

  /**
   * Update the click count total
   */
  function updateCount() {
    document.getElementById("count").innerText = counter.get();
  }

  /**
   * Add event listener to clear the click counts
   */
  document.getElementById("clear").addEventListener("click", () => {
    counter.reset();
    clearLog();
    updateCount();
  });

  /**
   * Create a new named event handler
   * @param {string} caller - the name of the caller
   */
  const createEventHandler = (caller) => () => {
    counter.increment();
    log(caller, counter.get());
    updateCount();
  };

  /**
   * Get reference to the 'Click Me' button
   */
  const clickMe = document.getElementById("clickMe");

  /**
   * Override the elements onclick function
   */
  clickMe.onclick = createEventHandler("onclick");

  /**
   * Add two event handlers with anonymouse event handler functions
   * results in TWO event handlers being added.
   */
  clickMe.addEventListener("click", createEventHandler("handler 1"));
  clickMe.addEventListener("click", createEventHandler("handler 2"));

  /**
   * Add two click event handlers sharing same function reference causes
   * results in ONE event handler being added.
   */
  const eventHandler = createEventHandler("handler 3");

  clickMe.addEventListener("click", eventHandler);
  clickMe.addEventListener("click", eventHandler);
})();
