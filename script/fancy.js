Fancybox.bind('[data-fancybox="gallery"]', {
    animated: true,
    showClass: false,
    hideClass: false,

    click: true,

    dragToClose: true,

    Image: {
        zoom: true,
    },

    Toolbar: {
        display: [{ id: "counter", position: "center" }, "close"],
    },
});
