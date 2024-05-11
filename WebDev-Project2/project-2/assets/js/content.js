function loadModalContent(page, title = 'Dynamic Content') {
    $.ajax({
        url: page,
        type: 'GET',
        success: function(response) {
            $('#dynamicContentModal .modal-body').html(response);
            $('#dynamicContentModalLabel').text(title);
            var myModal = new bootstrap.Modal(document.getElementById('dynamicContentModal'));
            myModal.show();
        },
        error: function() {
            $('#dynamicContentModal .modal-body').html('<p>Error loading content.</p>');
            $('#dynamicContentModalLabel').text('Error');
            var myModal = new bootstrap.Modal(document.getElementById('dynamicContentModal'));
            myModal.show();
        }
    });
}
