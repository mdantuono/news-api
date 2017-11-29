/*global $ APIKEY*/
var titles = [];
var url;
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
                  var source = document.createElement("OPTION");
                  source.setAttribute("value", data.sources[i].id);
                  source.innerHTML = data.sources[i].name;
                  document.getElementById('selection').appendChild(source);
              }
          }
        }
    });
    //CALL AND STORE HEADLINES IN A VARIABLE
    $.ajax({
        method: "GET",
        url: "https://newsapi.org/v2/top-headlines",
        data: {category:"business", country:"us", language:"en", apiKey: APIKEY},
        success: function(stuff) {
            console.log(stuff);
            for (var i = 0; i < stuff.articles.length; i++) {
                titles.push(stuff.articles[i].title);
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
    console.log(titles);
    for (var i = 0; i < titles.length; i++) {
        var items = document.createElement("LI");
        items.innerHTML = titles[i];
        document.getElementById("articleList").appendChild(items);
    }
}