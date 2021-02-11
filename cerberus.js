$("#form").submit(function (e) {
    e.preventDefault();

    var query = $("#search").val();

    var API_KEY = '91e67499c338b646b3590f73a5696583';


    //var url = 'http://api.serpstack.com/search?access_key=' + API_KEY + `&query=${query}` + `+filetype%3Apdf`

    //INSIDE BOOKS.HTML, GIVE UNIQUE IDS TO EACH RADIO BUTTON OPTION SUCH AS RD1, RD2 AND RD3. THEN, GIVE EACH A VARIABLE AS SHOWN BELOW
    //THIS VARIABLE WILL BE SET IF AN OPTION IS CHOSEN. SO RD1 WILL BE SELECTED IF THE APP CHECKS IT AND IT IS INDEED RD1 THAT WAS CHOSEN

    //RIGHT NOW, IT IS MORE MANUAL IN THE SENSE THAT 'URL' IS REPEATED, BUT THE FUNCTIONALITY IS NOT AFFECTED. 
    //NEXT STEP IS TO MAKE IT LOOK NICER BY PUTTING STUFF INTO FUNCTIONS, SO THAT CAN JUST CALL SAID FUNCTIONS EASILY.
    var rd1 = document.getElementById("rd1");
    var rd2 = document.getElementById("rd2");
    var rd3 = document.getElementById("rd3");

    //APP CHECKS FOR WHAT IS SELECTED. SO IF RD1 WAS SELECTED, FUNCTION EXECUTES ETC.
    if (rd1.checked == true)

        var url = 'http://api.serpstack.com/search?access_key=' + API_KEY + `&query=${query}` + `+8080`;

    else if (rd2.checked == true)
        var url = 'http://api.serpstack.com/search?access_key=' + API_KEY + `&query=${query}` + `+inurl:/proc/self/cwd`;

    else if (rd3.checked == true)
        var url = 'http://api.serpstack.com/search?access_key=' + API_KEY + `&query=${query}` + `+filetype:xls inurl:"email.xls"`;



    console.log(url);





    $.get(url, function (data) {

        $("#result").html('');
        console.log(data);

        data.organic_results.forEach(res => {
            result = `
      
      <h1>${res.title}</h1><br><a target="_blank" href="${res.url}">${res.url}</a>
      <p>${res.snippet}</p>`;

            $("#result").append(result);
        });

    });

});

