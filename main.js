var objects = [
            "Object 1",
            "Object 2",
            "Object 3",
            "Object 4",
            "Object 5"
        ];

        function displayRandomObject() {
            var displayElement = document.getElementById("display");
            var randomIndex = Math.floor(Math.random() * objects.length);
            displayElement.textContent = objects[randomIndex];
        }
