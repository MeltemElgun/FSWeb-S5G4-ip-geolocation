//axios import buraya gelecek
import axios from "axios";
var benimIP;

// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl() {
  await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipadresim",
  })
    .then(function (response) {
      return response.data;
    })
    .then(function (a) {
      benimIP = a;
    });
}

// ------------ değiştirmeyin --------------

/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/

//kodlar buraya gelecek
let cards = document.querySelector(".cards");
function cardAll(nesne) {
  let cardDiv = document.createElement("div");
  cardDiv.classList = "card";

  let cardImg = document.createElement("img");
  cardImg.src = "{ülke bayrağı url}";
  cardDiv.appendChild(cardImg);

  let cardDiv1 = document.createElement("div");
  cardDiv1.classList = "card-info";
  cardDiv.appendChild(cardDiv1);

  let cardH3 = document.createElement("h3");
  cardH3.classList = "ip";
  cardH3.textContent = "{ip adresi}";
  cardDiv.appendChild(cardH3);

  let cardP = document.createElement("p");
  cardP.classList = "ulke";
  cardP.textContent = "{ülke bilgisi (ülke kodu)}";
  cardDiv.appendChild(cardP);

  let cardP1 = document.createElement("p");
  cardP1.textContent = "{enlem} Boylam: {boylam}";
  cardDiv.appendChild(cardP1);

  let cardP2 = document.createElement("p");
  cardP2.textContent = "Şehir: {şehir}";
  cardDiv.appendChild(cardP2);

  let cardP3 = document.createElement("p");
  cardP3.textContent = "Saat dilimi: {saat dilimi}";
  cardDiv.appendChild(cardP3);

  let cardP4 = document.createElement("p");
  cardP4.textContent = "Para birimi: {para birimi}";
  cardDiv.appendChild(cardP4);

  let cardP5 = document.createElement("p");
  cardP5.textContent = "ISP: {isp}";
  cardDiv.appendChild(cardP5);

  return cardDiv;
}

cards.appendChild(cardAll(benimIP));
