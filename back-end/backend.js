async function fetchData() {
    // JSON from API
    const response = await fetch("http://0.0.0.0:8000/submit");
    const data = await response.json();

    // list ID, list sim, list rtime
    const ids = data.ids;
    const similarities = data.similarities;
    const retrieval_time = data.retrieval_time;

    // get img from ID
    const filenames = await fetch("filenames_test.txt").then(response => response.text()).then(text => text.split("\n"));

    // get main container in the HTML where images will be displayed
    const mainContainer = document.getElementById("main-container");

    // retrieval time 
    const retrievalTimeElement = document.createElement("p");
    retrievalTimeElement.textContent = `Retrieval Time: ${retrieval_time} milliseconds`;
    mainContainer.appendChild(retrievalTimeElement);

    // display img on the web-app
    for (let i = 0; i < ids.length; i++) {
        // container of image and information
        const imageContainer = document.createElement("div");

        // image element
        const imgElement = document.createElement("img");
        imgElement.src = `path/to/images/${filenames[i]}`; // img path
        imgElement.alt = `Image ${ids[i]}`;

        // similarity 
        const similarityText = document.createElement("p");
        similarityText.textContent = `Similarity: ${similarities[i]}`;

        // append the image and similarity to the container
        imageContainer.appendChild(imgElement);
        imageContainer.appendChild(similarityText);

        // append the container to the main container
        mainContainer.appendChild(imageContainer);
    }
}

fetchData();
