var objects = [
        "Lumbah Jack",
        "Ice Witch",
        "Fire Queen",
        "Royal Dragon Groomer",
        "Whale hunter",
        "The world's worst super hero team",
        "Treehouse",
        "Underground bunker",
        "Laser gun",
        "Diamond staff",
        "Elephant working in a cubicle",
        "Grasshopper hopping over hurdles in the Olypics",
        "A tiny elephant eating a huge banana",
        "Frogs robbing bank while police aren't looking",
        "Cats falling from the sun",
        "People knitting scarves with knives",
        "Mermaids being discovered on TV",
        "A man jumping from the Statue of Liberty",
        "Bookshelves leading to a portal",
        "A dog jumping over a young child",
        "A man pushing a kangaroo into an acid lake",
        "A parade with gorillas and minions",
        "An alien librarian",
        "An enourmous ant eating slugs at a dinner table",
        "Frogs eating dragonflies with knives",
        "A cabbage that can suddenly walk and talk",
        "DanTDM gaining the ability to fly",
        "A famous actor flying through New York City",
        "A snowball fight but with meatballs",
        "A hidden portal under the sea",
        "A suspicious looking woman selling rare frogs at a school",
        "A giraffe holding a young child",
        "A man teaching a gorilla to dance"
];

        function displayRandomObject() {
            var displayElement = document.getElementById("display");
            var randomIndex = Math.floor(Math.random() * objects.length);
            displayElement.textContent = objects[randomIndex];
        }
