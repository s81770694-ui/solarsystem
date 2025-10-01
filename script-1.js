// Wait until page fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const planets = document.querySelectorAll(".planet");
    const infoBox = document.getElementById("infoBox");
    const infoText = document.getElementById("infoText");
    const audioPlayer = document.getElementById("audioPlayer");

    // Planet information in English
    const planetInfo = {
        mercury: {
            text: "Planet Mercury - The smallest planet in our Solar System and the closest to the Sun.",
            sound: "media/mercury.mp3"
        },
        venus: {
            text: "Planet Venus - Known as Earth’s twin, but with a toxic atmosphere and extreme heat.",
            sound: "media/venus.mp3"
        },
        earth: {
            text: "Planet Earth - Our home, the only known planet to support life.",
            sound: "media/earth.mp3"
        },
        mars: {
            text: "Planet Mars - Called the Red Planet, famous for its dusty surface and potential for past water.",
            sound: "media/mars.mp3"
        },
        jupiter: {
            text: "Planet Jupiter - The largest planet with a Great Red Spot and dozens of moons.",
            sound: "media/jupiter.mp3"
        },
        saturn: {
            text: "Planet Saturn - Famous for its spectacular ring system made of ice and rock.",
            sound: "media/saturn.mp3"
        },
        uranus: {
            text: "Planet Uranus - A tilted ice giant that rotates on its side.",
            sound: "media/uranus.mp3"
        },
        neptune: {
            text: "Planet Neptune - The farthest planet, known for its deep blue color and strong winds.",
            sound: "media/neptune.mp3"
        }
    };

    // Add click event to each planet
    planets.forEach(planet => {
        planet.addEventListener("click", () => {
            const name = planet.dataset.name; // data-name="mercury"
            const data = planetInfo[name];

            if (data) {
                infoText.textContent = data.text;
                infoBox.style.display = "block";

                // Play planet sound
                audioPlayer.src = data.sound;
                audioPlayer.play();
            }
        });
    });
});
