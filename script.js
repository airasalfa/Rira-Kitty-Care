let currentPrice = 0;
let isHotelService = false;

function showService(title, desc, price, isHotel){

  currentPrice = price;
  isHotelService = isHotel;

  document.getElementById("popup").style.display = "flex";

  document.getElementById("popup-title").innerText = title;

  document.getElementById("popup-desc").innerText = desc;

  document.getElementById("popup-price").innerText =
  "Mulai dari Rp" + price.toLocaleString();

  if(isHotel){

    document.getElementById("hotel-row").style.display = "flex";

  }else{

    document.getElementById("hotel-row").style.display = "none";

    document.getElementById("hari").value = "1";

  }

}

function closePopup(){

  document.getElementById("popup").style.display = "none";

  document.getElementById("nama").value = "";

  document.getElementById("kucing").value = "";

  document.getElementById("tanggal").value = "";

  document.getElementById("hari").value = "";

  document.getElementById("pesan").value = "";

}

function kirimPesan(){

  let nama =
  document.getElementById("nama").value;

  let kucing =
  document.getElementById("kucing").value;

  let tanggal =
  document.getElementById("tanggal").value;

  let hari =
  document.getElementById("hari").value;

  let pesan =
document.getElementById("pesan").value;

  if(nama == '' || kucing == ''){

    alert('Isi dulu semuanya 😺');
    return;

  }

  if(isHotelService && (tanggal == '' || hari == '')){

    alert('Isi tanggal dan lama inap 😺');
    return;

  }

  let layanan =
  document.getElementById("popup-title").innerText;

  let total = currentPrice;

  if(isHotelService){

    total = currentPrice * Number(hari);

  }

  document.getElementById("isiStruk").innerHTML = `

    <p><b>Nama Pemilik:</b> ${nama}</p>

    <p><b>Nama Kucing:</b> ${kucing}</p>

    <p><b>Layanan:</b> ${layanan}</p>

    <p><b>Catatan:</b> ${pesan || '-'}</p>

    ${isHotelService ?
    `<p><b>Tanggal:</b> ${tanggal}</p>
     <p><b>Lama Inap:</b> ${hari} malam</p>`
    : ''}

    <p><b>Total:</b> Rp${total.toLocaleString()}</p>

   <hr style="margin:15px 0;">

<div style="text-align:center; margin-top:20px;">
  🐾 Terima kasih sudah booking di Rira Kitty Care!
</div>

<p style="margin-top:15px;">
  <b>Status:</b>
  <span style="
  background:#ffe4ec;
  padding:5px 10px;
  border-radius:10px;
  color:#d94f7d;
  font-weight:bold;
  ">
  Menunggu Konfirmasi
  </span>
</p>

  `;

  document.getElementById("popup").style.display = "none";
document.getElementById("strukPopup").style.display = "flex";

}


window.onclick = function(event){

  let popup = document.getElementById("popup");
  let strukPopup = document.getElementById("strukPopup");

  if(event.target == popup){
    popup.style.display = "none";
  }

  if(event.target == strukPopup){
    strukPopup.style.display = "none";
  }

}

function closeStruk(){

  document.getElementById("strukPopup").style.display = "none";

}