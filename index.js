var randomNumber1 = Math.floor(Math.random() * 3) + 1;

var randomçokImage = "çok" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomçokImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);
;



if (randomNumber1 === 1) {
  document.querySelector("h1").innerHTML = "Çok Şanslısın!";
}
else if (randomNumber1 === 2) {
  document.querySelector("h1").innerHTML = "Normal Şans!";
}
else {
  document.querySelector("h1").innerHTML = "Kötü Şans!";
}
