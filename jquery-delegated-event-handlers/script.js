// Document ready
$(() => {
  /**
   * Add click handler to 'Add' button
   */
  $("#addItem").click(() => {
    const newEntry = $("#newEntry");

    // Get text input value
    const value = newEntry.val();

    // Clear text input and set focus to textbox
    newEntry.val("");
    newEntry.focus();

    // Skip any empty input
    if (!value) return;

    // Add text entry to the list
    $("#myList").append(`<li>${value}</li>`);
  });

  /**
   * Add delegated click handler to list items
   */
  $("#myList").on("click", "li", function (event) {
    // Log the event to console for understanding
    log("event", event);

    // Get the list-item text value
    const value = $(this).text();

    // Pop-up alert showing the clicked value
    alert(`clicked: ${value}`);
  });
});

/**
 * Log key / value
 * @param {string} key - name or description
 * @param {Object} value - value to write to the console
 */
const log = (key, value) =>
  console.log(`${key}:${JSON.stringify(value, null, 2)}`);
