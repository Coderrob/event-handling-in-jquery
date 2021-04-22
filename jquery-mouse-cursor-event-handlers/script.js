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
   * Event handler to log event counts and mouse cursor position
   * @param {jQuery.Event} event - jQuery.Event object
   */
  function eventHandler(event) {
    const { type, pageX, pageY } = event ?? {};
    increment(`.${type}--count`);
    $(`.${type}--position`)?.text(`${pageX ?? 0}, ${pageY ?? 0}`);
  }

  /**
   * Record mouseenter and mouseleave events
   */
  $("#mouseenterTarget").mouseenter(eventHandler).mouseleave(eventHandler);

  /**
   * Record mouseover and mouseout events
   */
  $("#mouseoverTarget").mouseover(eventHandler).mouseout(eventHandler);

  /**
   * Record mousemove events
   */
  $("#mousemoveTarget").mousemove(eventHandler);

  /**
   * Add child element hover
   */
  $(".child").hover(
    // Mouseenter
    function () {
      // Remove class style on the element
      $(this).toggleClass("border-dark").toggleClass("shadow border-primary");
    },
    // Mouseleave
    function () {
      // Add class style on the element
      $(this).toggleClass("border-dark").toggleClass("shadow border-primary");
    }
  );
});
