var allDiv = document.getElementById('all-div');

function createCharacterCard(character) {
    return `
        <div id="character">
            <h1 id="name">${character.name}</h1>
            <div id="bottom-div">
                <div id="image-div">
                    <img src="${character.images[0]}" alt="Character picture">
                </div>
                <div id="properties">
                    <div id="main-informations">
                        <div id="name">Name: ${(character.name)?character.name:"Not found!"}</div>
                        <div id="clan">Clan: ${(character.personal.clan)?character.personal.clan:"Not found!"}</div>
                        <div id="birthday">Birthday: ${(character.personal.birthdate)?character.personal.birthdate:"Not found!"}</div>
                        <div id="height">Height: ${(character.personal["Blank Period"])?character.personal["Blank Period"]:"Not found!"}</div>
                        <div id="gender">Gender: ${(character.personal.sex)?character.personal.sex:"Not found!"}</div>
                        <div id="team">Team: ${Array.isArray(character.personal.team) ? character.personal.team[0] : 'Not found!'}</div>
                        <div id="ninjaRegistration">Ninja Registration: ${character.rank && character.rank.ninjaRegistration !== undefined ? character.rank.ninjaRegistration : 'Not found!'}</div>
                        <div id="voiceActors">Voice Actors: ${character.voiceActors.japanese[0]}</div>
                    </div>
                    <div id="family">
                        <span id="father">Father: ${(character.family.father)?character.family.father:"Not found!"}</span><br>
                        <span id="mother">Mother: ${(character.family.mother)?character.family.mother:"Not found!"}</span><br>
                        <span id="wife">Wife: ${(character.family.wife)?character.family.wife:"Not found!"}</span><br>
                        <span id="children">Children: ${(character.family.son)?character.family.son:"Not found!"}<br>${(character.family.daugthter)?character.family.daugthter:"Not found!"}</span>
                    </div>
                    <div id="power-div">
                        <div id="kekkeiGenkai">Kekkei-Genkai: ${(character.personal.kekkeiGenkai)?character.personal.kekkeiGenkai:"Not found!"}</div>
                    </div>
                </div>
            </div>
            <div id="jutsu-div">
                <h2 style="text-align:center;">Jutsu list</h2>
                <div id="jutsu-div">&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace;&ThickSpace; ${(character.jutsu)?character.jutsu:"Not found!"}</div>
            </div>
        </div>`;
}

function getCharacters() {
    for(let a=1;a<=3471;a++){
    fetch("https://dattebayo-api.onrender.com/characters/"+a)
        .then(res => res.json())
        .then(data => {
            console.log(data);
                allDiv.innerHTML += createCharacterCard(data);
        });
    }
}
getCharacters();

