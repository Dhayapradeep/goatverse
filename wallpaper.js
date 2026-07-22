function openPreview(image){

    document.getElementById("previewModal").style.display="flex";

    document.getElementById("previewImage").src=image;

}

function closePreview(){

    document.getElementById("previewModal").style.display="none";

}