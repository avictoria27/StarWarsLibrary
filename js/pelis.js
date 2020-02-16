var id = localStorage["id"];

console.log(id);

var people=JSON.parse(localStorage["swpeople"]);

console.log(people);

let character = people[id];
console.log(people[id]);
character.films.forEach( film =>{
    $.get(
        film,
        function(data){
            var card_body = document.createElement("div");
            card_body.className = "card-body";
            card_body.innerHTML=`
                <p><strong>Titulo:</strong> ${data.title}</p>
                <p><strong># Episodio:</strong> ${data.episode_id}</p>
                <p><strong>Sinopsis:</strong> ${data.opening_crawl}</p>
                <p><strong>Director:</strong> ${data.director}</p>
                <p><strong>Productor:</strong> ${data.producer}</p>
                <p><strong>Fecha de Estreno:</strong> ${data.release_date}</p>
                `;
            var card = document.createElement("div");    
            card.className = "card";
            card.append(card_body);

            var col=document.createElement("div");
                col.className="col-md-4 p-2";
                col.append(card);

            document.getElementById("films").append(col);
        } 
    )
})