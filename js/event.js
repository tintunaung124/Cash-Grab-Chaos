const characterID =
    localStorage.getItem("selectedCharacterID");

const image1 =
    document.getElementById("event-image-1");

const image2 =
    document.getElementById("event-image-2");

switch (characterID) {

    case "0":

        image1.src =
            "images/Captain Compass.png";

        image2.src =
            "images/CC2.png";

        break;

    case "1":

        image1.src =
            "images/PM1.png";

        image2.src =
            "images/PM2.png";

        break;

    case "2":

        image1.src =
            "images/BM1.png";

        image2.src =
            "images/BM2.png";

        break;
}