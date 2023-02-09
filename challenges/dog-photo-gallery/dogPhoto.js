


        const fetchRandomDog = async () => {
            try {
                const response = await fetch("https://dog.ceo/api/breeds/image/random");
                const data = await response.json();

                const li = document.createElement("li");
                const img = document.createElement("img");
                img.src = data.message;
                li.innerHTML = '';
                li.appendChild(img);
                document.querySelector("#dog-gallery").appendChild(li);
            } catch (error) {
                console.error("An error", error);
            }
        };

        const clearGallery = () => {
            const gallery = document.querySelector("#dog-gallery");
            while (gallery.firstChild) {
                gallery.removeChild(gallery.firstChild);
            }
        };

        document.querySelector("#fetch-dog").addEventListener("click", fetchRandomDog);
        document.querySelector("#clear-gallery").addEventListener("click", clearGallery);
    