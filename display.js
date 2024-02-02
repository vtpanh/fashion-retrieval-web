
// Sửa lại cho khớp với code của nhóm mình rồi hẳn ghép vào để chạy nha


function displayRetrievalResults(data) {
    // Lấy danh sách index từ kết quả
    const retrievedIndexes = data.ids;

    // Đọc danh sách đường dẫn từ filenames_test.txt
    fetch("data/FashionAI/filenames_test.txt")  //Path dẫn đên filenames_test.txt
        .then(response => response.text())
        .then(filenamesText => {
            const filenamesTest = filenamesText.split('\n').map(filename => filename.trim());

            // Ánh xạ index ảnh với đường dẫn ảnh
            const imagePaths = retrievedIndexes.map(index => "data/FashionAI/image/folder/" + filenamesTest[index]);

            // Hiển thị danh sách đường dẫn ảnh trên màn hình
            displayImages(imagePaths);
        })
        .catch(error => {
            console.error("Error reading filenames_test.txt:", error);
        });
}


function displayImages(imagePaths) {
    var resultArea = document.getElementById("fileDisplayArea");
    resultArea.innerHTML = ""; // Xóa nội dung hiện tại

    imagePaths.forEach(imgPath => {
        // Tạo thẻ <img> để hiển thị ảnh
        var imgElement = document.createElement("img");
        imgElement.src = imgPath;
        imgElement.width = 200;
        imgElement.height = 200;

        // Thêm thẻ <img> vào khu vực hiển thị
        resultArea.appendChild(imgElement);
    });
}