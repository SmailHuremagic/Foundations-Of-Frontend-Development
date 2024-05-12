$(document).ready(function() {
    let colorCardinal = 'rgb(196, 30, 58)'; // Define cardinal color

    $("#button_toggle_colors").click(function() {
        $(".box").each(function() {
            if ($(this).css('background-color') === colorCardinal) {
                $(this).css('background-color', ''); // Reset to default
            } else {
                $(this).css('background-color', colorCardinal); // Set to cardinal
            }
        });
    });

    $("#button_toggle_roundedges").click(function() {
        $(".box").toggleClass('round-edge');
    });

    $("#button_add_box").click(function() {
        var new_box = $('<div></div>'); // Create a new div
        var existingBoxes = $(".box").length + 1; // Get the next box number

        new_box.addClass("box outlined")
               .attr("id", "box" + existingBoxes)
               .appendTo("#boxes"); // Append the new box to the container
    });
});
