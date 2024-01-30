async function fetchData() {
    // JSON from API
    const response = await fetch("http://0.0.0.0:8000/submit");
    const data = await response.json();

    // list ID 
    const ids = data.ids;

    // get img from ID
    const filenames = await fetch("filenames_test.txt").then(response => response.text()).then(text => text.split("\n"));

    // display image on web-app
    const container = document.getElementById("image-container");
    for (const id of ids) {
        const filename = filenames[id];
        const img = document.createElement("img");
        img.src = `<image_>path`;
        container.appendChild(img);
    }
}

fetchData();


