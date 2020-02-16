

$.get(
    "https://swapi.co/api/people/",
    function(data){
        var people=data.results;
        localStorage["swpeople"]=JSON.stringify(people);

        console.log('people', people);
        var contador=0;
        people.forEach(
            function(person){
                var card_body=document.createElement("div");
                card_body.className="card-body";
                card_body.innerHTML=`
                <p><strong>Nombrecito:</strong> ${person.name}</p>
                <p><strong>Altura:</strong> ${person.height}</p>
                <p><strong>Peso:</strong> ${person.mass}</p>
                <p><strong>Cabello:</strong> ${person.hair_color}</p>
                <button class="btn btn-primary" id="${contador}" onclick="cambioPag(this)"> Ver pelis</button>
                `;

                var card=document.createElement("div");
                card.className="card card-cst";
                card.append(card_body);

                var col=document.createElement("div");
                col.className="col-md-3 p-2";
                col.append(card);

                document.getElementById("people").append(col);
                contador++;
            }
        );
    });


    function cambioPag(boton){
        localStorage["id"]=boton.id;
        window.location="pelis.html";
    }