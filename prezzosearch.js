$("#form").submit(function (e) {
    e.preventDefault()

    var query = $("#search").val()
   
    var API_KEY = '91e67499c338b646b3590f73a5696583'

    var url = 'http://api.serpstack.com/search?access_key=' + API_KEY + `&query=${query}` + `+filetype%3Appt`


    console.log(url)


    $.get(url, function (data) {

        $("#result").html('')

        console.log(data)

        data.organic_results.forEach(res => {
            result = `
      
      <h1>${res.title}</h1><br><a target="_blank" href="${res.url}">${res.url}</a>
      <p>${res.snippet}</p>`

            $("#result").append(result)
        })

    });

})

