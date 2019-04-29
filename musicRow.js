//Arrays for Labels
let Jumpstop = []
let Chatten = []
let Polar =[]

function createFunkArtist(name, age) {
    artist = {
        name: name,
        age: age,
        genre: "Funk"
    }
    Jumpstop.push(artist);
}
function createRapArtist(name, age)  {
    artist = {
        name: String(name),
        age: age,
        genre: "Rap"
    }
    Jumpstop.push(artist);
}
function createCountryArtist (name, age)  {
    artist = {
        name: name,
        age: age,
        genre: "Country"
    }
    Chatten.push(artist);
}
function createBluegrassArtist(name, age)  {
    artist = {
        name: name,
        age: age,
        genre: "Bluegrass"
    }
    Chatten.push(artist);
}
function createPopArtist(name, age)  {
    artist = {
        name: name,
        age: age,
        genre: "Pop"
    }
    Polar.push(artist);
}