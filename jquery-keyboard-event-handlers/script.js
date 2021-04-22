// Document ready
$(() => {
  /**
   * Increment the event count
   * @param {string} selector - jQuery selector value
   */
  function increment(selector) {
    const obj = $(selector);
    try {
      const count = parseInt(obj.text()) + 1;
      obj.text(count);
    } catch {
      obj?.text("0");
    }
  }

  /**
   * Display the key value of the event
   * @param {jQuery.Event} event - jQuery Event object
   */
  function recordKeyEvent(event) {
    increment(`.${event.type}--count`);
    $(`.${event.type}--which`)?.text(event.which);
  }

  /**
   * Record keyboard key input
   */
  $("#keyboardInput")
    .keydown(recordKeyEvent)
    .keypress(recordKeyEvent)
    .keyup(recordKeyEvent);
});
