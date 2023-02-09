



const getComicImage = async () => {
    try {
        const response = await fetch("https://xkcd.now.sh/?comic=latest");
        const date = await response.json();

        const img = document.createElement('img');
        img.src = date.img;
        document.querySelector('.container').appendChild(img);
    } catch (error) {
        console.error('An arror', error);
        alert('An error');
    }
}

document.getElementById('but').addEventListener('click', getComicImage)
