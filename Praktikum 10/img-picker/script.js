function imgPicker(){
  let picker = document.getElementById("selectImg").value;
  let images = document.getElementById("imgFigure");

  if (picker == "violet") {
      images.src = "violet.png";
      images.width = 300;
      images.alt = "Ini adalah gambar violet.png";
      alert("Ini adalah gambar violet.png");
  } else if (picker == "waifu") {
      images.src = "waifu.png";
      images.width = 300;
      images.alt = "Ini adalah gambar waifu.png";
      alert("Ini adalah gambar waifu.png");
  } else if (picker == "arisu") {
      images.src = "arisu.png";
      images.width = 300;
      images.alt = "Ini adalah gambar arisu.png";
      alert("Ini adalah gambar arisu.png");
  } else if (picker == "kirito") {
      images.src = "kirito.png";
      images.width = 300;
      images.alt = "Ini adalah gambar kirito.png";
      alert("Ini adalah gambar kirito.png");
  } else if (picker == "megumi") {
      images.src = "megumi.png";
      images.width = 300;
      images.alt = "Ini adalah gambar megumi.png";
      alert("Ini adalah gambar megumi.png");
  } else if (picker == "mJkPaVR") {
      images.src = "mJkPaVR.png";
      images.width = 300;
      images.alt = "Ini adalah gambar smJkPaVR.png";
      alert("Ini adalah gambar mJkPaVR.png");
  } else if (picker == "rapthalia") {
      images.src = "rapthalia.png";
      images.width = 300;
      images.alt = "Ini adalah gambar rapthalia.png";
      alert("Ini adalah gambar rapthalia.png");
  } else if (picker == "saber") {
      images.src = "saber.png";
      images.width = 300;
      images.alt = "Ini adalah gambar saber.png";
      alert("Ini adalah gambar saber.png");
  } else {
      alert("Gagal");
  }
}