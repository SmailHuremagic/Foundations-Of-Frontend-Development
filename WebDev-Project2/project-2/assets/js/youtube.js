$(document).ready(function(){
    $('#searchBtn').click(function(){
        searchVideos();
    });
});

function searchVideos() {
    var keyword = $('#searchInput').val();
    if (!keyword) {
        console.error('Please enter a search keyword.');
        return;
    }

    $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/search',
        dataType: 'json',
        data: {
            part: 'snippet',
            q: keyword,
            type: 'video',
            maxResults: 5,
            key: 'AIzaSyDOy-9LScrLxRZ7P_48C5pb-dmWc4gGrgs' // Replace 'YOUR_API_KEY' with your actual API key
        },
        success: function(response) {
            if (response && response.items) {
                displayVideos(response.items);
            } else {
                console.error('No videos found.');
            }
        },
        error: function(xhr, status, error) {
            console.error('Error fetching videos:', error);
        }
    });
}

function displayVideos(videos) {
    var videoContainer = $('#videoContainer');
    videoContainer.empty();

    $.each(videos, function(index, video) {
        var videoId = video.id.videoId;
        var title = video.snippet.title;

        var iframe = $('<iframe>', {
            src: 'https://www.youtube.com/embed/' + videoId,
            allowfullscreen: true
        });

        var titleElement = $('<h3>').text(title);

        videoContainer.append(titleElement);
        videoContainer.append(iframe);
    });
}
