document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll("img");

    for(const image of images){
        fetch("https://cataas.com/cat?position=center")
        .then(response => response.json())
        .then(data => {
            image.src = data.message
            image.width = 300;
            image.height = 300;
        })
    }

})