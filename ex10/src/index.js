function myFunction() {

    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Ma",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            // Add a record here
            artist: "Dino Merlin",
            title: "Burek",
            release_year: 2004,
            id: 1,
            formats: {
                1: "cd",
                2: "usb",
                3: "youtube"
            },
            gold: false
        }
    };

    return myMusic;
}

console.log(myFunction()[2]);

module.exports = myFunction;