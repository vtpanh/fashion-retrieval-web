async function fetchData() {
    // JSON from API
    const response = await fetch("http://0.0.0.0:8000/submit");
    const data = await response.json();

    // list ID, list sim, list rtime
    const ids = data.ids;
    const similarities = data.similarities
    const retrieval_time = data.retrieval_time

    // get img from ID
    const filenames = await fetch("filenames_test.txt").then(response => response.text()).then(text => text.split("\n"));

    // display image on web-app
    const container = document.getElementById("image-container");

    for (let i = 0; i < ids.length; i++) {
        const id = ids[i];
        const filename = filenames[id];
        const similarity = similarities[i];
        const retrievalTime = retrieval_time;

        // container of image and information
        const imageContainer = document.createElement("div");

        // image element
        const img = document.createElement("img");
        img.src = `<image_path>`;
        imageContainer.appendChild(img);

        // similarity
        const similarityText = document.createElement("p");
        similarityText.textContent = `Similarity: ${similarity}`;
        imageContainer.appendChild(similarityText);

        // append the container to the main container
        container.appendChild(imageContainer);
    }

    // retrieval time
    const retrievalTimeText = document.createElement("p");
    retrievalTimeText.textContent = `Retrieval Time: ${retrievalTime} seconds`;
    container.insertBefore(retrievalTimeText, container.firstChild);
}

fetchData();
