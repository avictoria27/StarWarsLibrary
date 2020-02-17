

$.get(
    "https://swapi.co/api/people/",
    function(data){
        var people=data.results;
        localStorage["swpeople"]=JSON.stringify(people);

        console.log('people', people);
        var contador=0;
        people.forEach(
            function(person){
                // var card_body=document.createElement("div");
                // card_body.className="card-body";
                // card_body.innerHTML=`
                // <p><strong>Nombre:</strong> ${person.name}</p>
                // <p><strong>Altura:</strong> ${person.height}</p>
                // <p><strong>Peso:</strong> ${person.mass}</p>
                // <p><strong>Cabello:</strong> ${person.hair_color}</p>
                // <button class="btn btn-primary" id="${contador}" onclick="cambioPag(this)"> Ver pelis</button>
                // `;

                // var card=document.createElement("div");
                // card.className="card card-cst";
                // card.append(card_body);

                // var col=document.createElement("div");
                // col.className="col-md-3 p-2";
                // col.append(card);

                // document.getElementById("people").append(col);
                // contador++;

                var flip_card_front = document.createElement("div");
                flip_card_front.className="flip-card-front";
                flip_card_front.innerHTML=`
                <img src="./others/logoSW.png" alt="Avatar ">
                `;
                var flip_card_back = document.createElement("div");
                flip_card_back.className = "flip-card-back p-5";
                flip_card_back.innerHTML = `
                <p><strong>Nombre:</strong> ${person.name}</p>
                <p><strong>Altura:</strong> ${person.height}</p>
                <p><strong>Peso:</strong> ${person.mass}</p>
                <p><strong>Cabello:</strong> ${person.hair_color}</p>
                <button class="btn btn-primary" id="${contador}" onclick="cambioPag(this)"> Ver pelis</button>
                `;

                var flip_card_inner = document.createElement("div");
                flip_card_inner.className = "flip-card-inner";
                flip_card_inner.append(flip_card_front);
                flip_card_inner.append(flip_card_back);

                var flip_card = document.createElement("div");
                flip_card.className="flip-card";
                flip_card.append(flip_card_inner);

                var col=document.createElement("div");
                col.className="col-md-4 p-2";
                col.append(flip_card);

                document.getElementById("people").append(col);

            }
        );
    });


    function cambioPag(boton){
        localStorage["id"]=boton.id;
        window.location="pelis.html";
    }