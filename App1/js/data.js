(function () {
    "use strict";


    var _baseUrl = "http://ws.spotify.com/search/1/track.json";
    var _query = "the+clash";
    var _list = new WinJS.Binding.List();

    WinJS.Namespace.define("Spotify", {
        search: searchSpotify,
        list: _list,
        foo: "bar"
    });

    function searchSpotify(query) {
        if ( !(query )) {
            query = _query;
        }
        _list.splice(0,_list.length);
        var url = _baseUrl + "?q=" + encodeURIComponent(query);
        console.log("searching for: " + url);
        return WinJS.xhr({ url: url }).then( 
            function onSuccess (xhr) {
                var items = JSON.parse(xhr.responseText);
                // console.dir(items.tracks);
                items.tracks.forEach(function (item) {
                    _list.push(item);
                });
            },
            function onError(error) {
                console.log(error);
            })

        
    }


})();