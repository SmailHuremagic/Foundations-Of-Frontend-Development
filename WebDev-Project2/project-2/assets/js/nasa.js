$(document).ready(function(){
    $("#generateBtn").click(function(){
        $.ajax({
            url: 'https://api.nasa.gov/planetary/apod',
            dataType: 'json',
            data: {
                api_key: 'F47nlNzH2BUv5ZY0MPeMET7j8IEz5PrZgut2TdeW' // Replace 'YOUR_API_KEY' with your actual NASA API key
            },
            success: function(data){
                $("#apodImage").attr("src", data.url);
                $("#apodExplanation").text(data.explanation);
            }
        });
    });
});
