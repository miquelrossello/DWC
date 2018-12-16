$(document).ready(function () {
    conexion("thePhp", loadcardsPort);
});



function loadcardsPort(busqueda) {
            var ports = busqueda;
            var i = 0;
            for (m in ports) {
                if (i % 2 === 0) {
                    var rowDIV = $("<div/>", {class: "row",});
                    $("#cardsPorts").append(rowDIV);
                }
                i++;

                var coordenades = ports[m].coordenades;
                var telefon = ports[m].telefon;
                var correu = ports[m].correu;
                var web = ports[m].web;
                var nom = ports[m].nom;


                var colDIV = $("<div/>", {class: "col-sm-6"});
                var cardDIV = $("<div/>", {class: "card"});

                var cardBody = $("<div/>", {class: "card-body"});
                var cardH4 = $("<h5/>", {class: "card-title", text: nom});
                var cardP3 = $("<p/>", {class: "card-text", text: "Coordenades: " + coordenades});
                var cardP = $("<p/>", {class: "card-text", text: "Web: " + web});
                var cardP1 = $("<p/>", {class: "card-text", text: "Telefon: " + telefon});
                var cardP2 = $("<p/>", {class: "card-text", text: "Correu: " + correu});

                cardBody.append(cardH4, cardP3, cardP, cardP1, cardP2);
                cardDIV.append(cardBody);
                colDIV.append(cardDIV);
                rowDIV.append(colDIV);

            }
}