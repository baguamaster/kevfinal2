$(document).ready(function () {

    var API_KEY = 'AIzaSyAeEkr2Kd5WLw1E3t6uaMgmcjyqJBBfTIU'

    var video = ''

    var videos = $("#videos")

    $("#form").submit(function (event) {
        event.preventDefault()
        alert("Please wait. Form submitted")

        var search = $("#search").val()

        videoSearch(API_KEY, search, 21)
    })

    function videoSearch(key, search, maxResults) {

        $("#videos").empty()

        $.get("https://www.googleapis.com/youtube/v3/search?key=" + API_KEY + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search, function (data) {
            console.log(url)

            data.items.forEach(item => {
                video = `
            <iframe width="420" height="315" src="http://www.youtube.com/embed/${item.if.videoId" frameborder="0" allowfullscreen></iframe>`


            })


                })

            });

        })

// $("#form").submit(function(){

//      $.get(url, function(data){

//      }) // end $.get

// }); //  end submit


