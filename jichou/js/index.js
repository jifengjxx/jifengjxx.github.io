(function () {
    var y, m, d, dateNew, dateStr;
    var date =  document.getElementById("date"),
        content =  document.getElementById("container"),
        showImage = document.querySelector('#showImg'),
        createImg = document.getElementById("createImg");

    dateNew =  new Date();
    y = dateNew.getFullYear();
    m = dateNew.getMonth() + 1;
    d = dateNew.getDate();
    dateStr =  y +"年"+m+"月"+d+"日";
    date.innerHTML = dateStr;

    createImg.onclick = function () {
        html2canvas(content, {
            allowTaint: true,
            taintTest: false,
            onrendered: function (canvas) {
                canvas.id = "mycanvas";
                var dataUrl = canvas.toDataURL();
                var newImg = document.createElement("img");
                newImg.src = dataUrl;
                showImage.innerHTML = "";
                showImage.appendChild(newImg);
            }
        });
    }
})();

