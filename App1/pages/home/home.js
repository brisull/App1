(function () {
    "use strict";

    var ui = WinJS.UI;

    

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            //var renderElement = document.getElementById("templateControlRenderTarget");
            var templateElement = document.getElementById("templateDiv");
            var templateControl = templateElement.winControl;
            
            document.getElementById("search").innerHTML = "foo";

            function search(query) {
                Spotify.search(query).then(function (response) {
                    templateControl.layout = new ui.GridLayout({ groupHeaderPosition: "top" });
                    // console.log(Spotify.foo);
                    //var i = 0;
                    //Spotify.list.forEach(function (item) {
                    //    if (i > 15) {
                    //        return false;
                    //    }
                    //    i++;
                    //    // document.getElementById("debug").innerHTML += item.name + "<br />";
                    //    templateControl.render(item, renderElement);

                    //});
                });
            }

            
            //templateElement.winControl.render(people[selected--], renderElement);
            

            document.getElementById("spotSearch").addEventListener("change", function(e) {
                // console.log("Search for: " + e.target.value);
                search(e.target.value);
            });
        }
    });
})();
