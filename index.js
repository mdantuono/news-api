/*global $ APIKEY*/
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
});
$('#source').submit(function(event) {
        event.preventDefault();
        console.log(document.getElementById('selection').value);
        showMe();
        // alert(document.getElementById('selection').value);
    });
//GET HEADLINES TO SHOW
function showMe() {
    //RESET ARTICLES
    document.getElementById('articleList').innerHTML = "";
    //BLOOMBERG
    if (document.getElementById('selection').value == "bloomberg") {
        $.ajax({
            method: "GET",
            url: "https://newsapi.org/v2/top-headlines",
            data: { sources:"bloomberg", apiKey: APIKEY},
            success: function(stuff) {
                console.log(stuff);
                for (var i = 0; i < stuff.articles.length; i++) {
                    var anchor = document.createElement("a");
                    var items = document.createElement("LI");
                    var image = document.createElement("IMG");
                    document.getElementById("articleList").appendChild(items);
                    anchor.href = stuff.articles[i].url;
                    anchor.innerHTML = stuff.articles[i].title + "<br>";
                    image.src = stuff.articles[i].urlToImage;
                    items.innerHTML = stuff.articles[i].description;
                    items.appendChild(anchor);
                    items.appendChild(image);
                }
            }
        });
    }
    //BUSINESS INSIDER
    else if (document.getElementById('selection').value == "business-insider") {
        $.ajax({
            method: "GET",
            url: "https://newsapi.org/v2/top-headlines",
            data: { sources:"business-insider", apiKey: APIKEY},
            success: function(stuff) {
                console.log(stuff);
                for (var i = 0; i < stuff.articles.length; i++) {
                    var items = document.createElement("LI");
                    var image = document.createElement("IMG");
                    var anchor = document.createElement("a");
                    document.getElementById("articleList").appendChild(items);
                    anchor.href = stuff.articles[i].url;
                    image.src = stuff.articles[i].urlToImage;
                    anchor.innerHTML = stuff.articles[i].title + "<br>";
                    items.innerHTML = stuff.articles[i].description;
                    items.appendChild(anchor);
                    items.appendChild(image);
                }
            }
        });
    }
    //CNBC
    else if (document.getElementById('selection').value == "cnbc") {
        $.ajax({
            method: "GET",
            url: "https://newsapi.org/v2/top-headlines",
            data: { sources:"cnbc", apiKey: APIKEY},
            success: function(stuff) {
                console.log(stuff);
                for (var i = 0; i < stuff.articles.length; i++) {
                    var items = document.createElement("LI");
                    var image = document.createElement("IMG");
                    var anchor = document.createElement("a");
                    document.getElementById("articleList").appendChild(items);
                    anchor.href = stuff.articles[i].url;
                    image.src = stuff.articles[i].urlToImage;
                    anchor.innerHTML = stuff.articles[i].title + "<br>";
                    items.innerHTML = stuff.articles[i].description;
                    items.appendChild(anchor);
                    items.appendChild(image);
                }
            }
        });
    }
    //FORTUNE
    else if (document.getElementById('selection').value == "fortune") {
        $.ajax({
            method: "GET",
            url: "https://newsapi.org/v2/top-headlines",
            data: { sources:"fortune", apiKey: APIKEY},
            success: function(stuff) {
                console.log(stuff);
                for (var i = 0; i < stuff.articles.length; i++) {
                    var items = document.createElement("LI");
                    var image = document.createElement("IMG");
                    var anchor = document.createElement("a");
                    document.getElementById("articleList").appendChild(items);
                    anchor.href = stuff.articles[i].url;
                    image.src = stuff.articles[i].urlToImage;
                    anchor.innerHTML = stuff.articles[i].title + "<br>";
                    items.innerHTML = stuff.articles[i].description;
                    items.appendChild(anchor);
                    items.appendChild(image);
                }
            }
        });
    }
    //THE WALL STREET JOURNAL
    else if (document.getElementById('selection').value == "the-wall-street-journal") {
        $.ajax({
            method: "GET",
            url: "https://newsapi.org/v2/top-headlines",
            data: { sources:"the-wall-street-journal", apiKey: APIKEY},
            success: function(stuff) {
                console.log(stuff);
                for (var i = 0; i < stuff.articles.length; i++) {
                    var items = document.createElement("LI");
                    var image = document.createElement("IMG");
                    var anchor = document.createElement("a");
                    document.getElementById("articleList").appendChild(items);
                    anchor.href = stuff.articles[i].url;
                    image.src = stuff.articles[i].urlToImage;
                    anchor.innerHTML = stuff.articles[i].title + "<br>";
                    items.innerHTML = stuff.articles[i].description;
                    items.appendChild(anchor);
                    items.appendChild(image);
                }
            }
        }); 
    }
}
