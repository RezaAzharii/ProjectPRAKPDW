function showModal(imageSrc, title, description) {
    Swal.fire({
        title: title,
        html: `<img src="${imageSrc}" style="max-width: 80%; height: auto;"><br><br>${description}`,
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            popup: 'custom-popup-class',
            image: 'custom-image-class',
        }
    });
}

