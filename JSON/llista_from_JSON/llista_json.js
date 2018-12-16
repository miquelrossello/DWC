var xobj = new XMLHttpRequest();
xobj.overrideMimeType("application/json");
xobj.open('GET', 'prova.json', true);
xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
        var json_string = xobj.responseText;
        var json_obj = JSON.parse(json_string)[0];
        var llista_element = $('#llista');
        json_length = Object.keys(json_obj).length;
        json_keys = Object.keys(json_obj);
        for (let i = 0; i < json_length; i++) {
            let li_item = $('<li>', {text: json_keys[i]});
            li_item.appendTo(llista_element);
        }
    }
};
xobj.send(null);