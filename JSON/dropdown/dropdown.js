$(document).ready(function () {
    function getAmarraments() {
        var menu_element = $('#body_dropdow_amarraments');
        let amarraments;
        let json_file = fetch('getMoorings_JSON.php')
            .then( (res) =>  {
                res.json().then( function (data) {
                    amarraments = data;
                    for (let amarrament in amarraments) {
                        let idAmarrament = amarraments[amarrament].idAmarrament;
                        let a_element = $('<a>', {class: 'dropdown-item', text: idAmarrament});
                        menu_element.append(a_element);
                    }
                })
            });
    }
    getAmarraments();
});