/*global $ APIKEY*/
var titles = [];
var source;
$(document).ready(function() {
    //GET DROPDOWN SOURCES 
    $.ajax({
      method: "GET",
      url: "https://newsapi.org/v2/sources",
      data: { category:"business", country:"us", language:"en", apiKey: APIKEY}, 
      success: function(data) {
          console.log(data);
          if (data.status == "ok") {
              for (var i = 0; i < data.sources.length; i++) {
                  source = document.createElement("OPTION");
                  source.setAttribute("value", data.sources[i].id);
                  source.innerHTML = data.sources[i].name;
                  document.getElementById('selection').appendChild(source);
              }
          }
        }
    });

    // .done(function(msg) {
    //     console.log(msg);
    //     console.log(msg.status);
    // };
    $('#source').submit(function(event) {
        event.preventDefault();
        // alert(document.getElementById('selection').value);
    });
});
//GET HEADLINES TO SHOW
function showMe() {
    //CALL AND STORE HEADLINES IN A VARIABLE
    console.log(source);
    //BLOOMBERG
    if (source.value == "bloomberg") {
        $.ajax({
            method: "GET",
            url: "https://newsapi.org/v2/top-headlines",
            data: { sources:"bloomberg", category:"business", country:"us", language:"en", apiKey: APIKEY},
            success: function(stuff) {
                console.log(stuff);
                for (var i = 0; i < stuff.articles.length; i++) {
                    titles.push(stuff.articles[i].title);
                }
            }
        });
    }
    //BUSINESS INSIDER
    else if (source.value == "business-insider") {
        $.ajax({
            method: "GET",
            url: "https://newsapi.org/v2/top-headlines",
            data: { sources:"business-insider", category:"business", country:"us", language:"en", apiKey: APIKEY},
            success: function(stuff) {
                console.log(stuff);
                for (var i = 0; i < stuff.articles.length; i++) {
                    titles.push(stuff.articles[i].title);
                }
            }
        });
    }
    //CNBC
    else if (source.value == "cnbc") {
        $.ajax({
            method: "GET",
            url: "https://newsapi.org/v2/top-headlines",
            data: { sources:"cnbc", category:"business", country:"us", language:"en", apiKey: APIKEY},
            success: function(stuff) {
                console.log(stuff);
                for (var i = 0; i < stuff.articles.length; i++) {
                    titles.push(stuff.articles[i].title);
                }
            }
        });
    }
    //FORTUNE
    else if (source.value == "fortune") {
        $.ajax({
            method: "GET",
            url: "https://newsapi.org/v2/top-headlines",
            data: { sources:"fortune", category:"business", country:"us", language:"en", apiKey: APIKEY},
            success: function(stuff) {
                console.log(stuff);
                for (var i = 0; i < stuff.articles.length; i++) {
                    titles.push(stuff.articles[i].title);
                }
            }
        });
    }
    //THE WALL STREET JOURNAL
    else if (source.value == "the-wall-street-journal") {
        $.ajax({
            method: "GET",
            url: "https://newsapi.org/v2/top-headlines",
            data: { sources:"the-wall-street-journal", category:"business", country:"us", language:"en", apiKey: APIKEY},
            success: function(stuff) {
                console.log(stuff);
                for (var i = 0; i < stuff.articles.length; i++) {
                    titles.push(stuff.articles[i].title);
                }
            }
        });
    }
    // console.log(titles);
    // for (var i = 0; i < titles.length; i++) {
    //     var items = document.createElement("LI");
    //     items.innerHTML = titles[i];
    //     document.getElementById("articleList").appendChild(items);
    // }
}