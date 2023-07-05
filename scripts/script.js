function change_image(file) {
    document.querySelector("#click_img").src = "./images/" + file;
}

let counter = 0;
document.querySelector("#counter").textContent = counter;

document.body.onmousedown = function () {
    counter += 1;
    document.querySelector("#counter").textContent = counter;
    change_image("unko_gorilla.png");
}

document.body.onmouseup = function () {
    change_image("gorilla_banana.png");
}