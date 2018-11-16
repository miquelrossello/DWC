$(document).ready(function () {
    function getAmarraments() {
        var table_body_element = $('tbody');
        let amarraments;
        let json_file = fetch('getMoorings_JSON.php')
            .then( (res) =>  {
                res.json().then( function (data) {
                    amarraments = data;
                    for (let amarrament in amarraments) {
                        let idAmarrament = amarraments[amarrament].idAmarrament;
                        let numAmarrament = amarraments[amarrament].numeroAmarrament;
                        let fondaria = amarraments[amarrament].fondaria;
                        let amplitud = amarraments[amarrament].amplitud;
                        let llargaria = amarraments[amarrament].llargaria;
                        let preu_dia = amarraments[amarrament].preu_dia;
                        let icona = amarraments[amarrament].icona;
                        let antelacio_max_reserva = amarraments[amarrament].antelacio_max_reserva;
                        let idZona = amarraments[amarrament].idZona;
                        let dniPropietari = amarraments[amarrament].dniPropietari;
                        let idPoliticaCancelacio = amarraments[amarrament].idPoliticaCancelacio;
                        let tr_element = $('<tr>');
                        let td_element_idAmarrament = $('<td>', {text: idAmarrament});
                        let td_element_numAmarrament = $('<td>', {text: numAmarrament});
                        let td_element_fondaria = $('<td>', {text: fondaria});
                        let td_element_amplitud = $('<td>', {text: amplitud});
                        let td_element_llargaria = $('<td>', {text: llargaria});
                        let td_element_preu_dia = $('<td>', {text: preu_dia});
                        let td_element_icona= $('<td>', {text: icona});
                        let td_element_dni_propietari = $($('<td>'), {text: dniPropietari});
                        let td_element_antelacio_max_reserva = $('<td>', {text: antelacio_max_reserva});
                        let td_element_id_zona = $('<td>', {text: idZona});
                        let td_element_id_politica_cancelacio = $('<td>', {text: idPoliticaCancelacio});
                        console.log(td_element_idAmarrament);
                        table_body_element.append(td_element_idAmarrament);
                        table_body_element.append(td_element_numAmarrament);
                        table_body_element.append(td_element_fondaria);
                        table_body_element.append(td_element_amplitud);
                        table_body_element.append(td_element_llargaria);
                        table_body_element.append(td_element_preu_dia);
                        table_body_element.append(td_element_icona);
                        table_body_element.append(td_element_antelacio_max_reserva);
                        table_body_element.append(td_element_id_zona);
                        table_body_element.append(td_element_dni_propietari);
                        table_body_element.append(td_element_id_politica_cancelacio);
                    }
                })
            });
    }
    getAmarraments();
});