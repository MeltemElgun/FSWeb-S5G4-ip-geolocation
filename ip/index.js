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
/* const dummy = {
  sorgu: "88.236.96.168",
  durum: "OK",
  kıta: "Asia",
  ülke: "Turkey",
  ülkeKodu: "TR",
  ülkebayrağı: "https://apis.ergineer.com/ulkebayraklari/TR",
  bölge: "25",
  bölgeAdı: "Erzurum",
  şehir: "Erzurum",
  zip: "09818",
  enlem: 39.9055000000000035242919693700969219207763671875,
  boylam: 41.2657999999999987039700499735772609710693359375,
  saatdilimi: "Europe/Istanbul",
  parabirimi: "TRY",
  isp: "TurkTelecom",
  organizasyon: "Turk Telekomunikasyon A.S",
  as: "AS47331 TTNet A.S.",
}; */
//kodlar buraya gelecek
let cards = document.querySelector(".cards");
function cardAll(nesne) {
  let cardDiv = document.createElement("div");
  cardDiv.classList = "card";

  let cardImg = document.createElement("img");
  cardImg.src = nesne.ülkebayrağı;
  cardDiv.appendChild(cardImg);

  let cardDiv1 = document.createElement("div");
  cardDiv1.classList = "card-info";
  cardDiv.appendChild(cardDiv1);

  let cardH3 = document.createElement("h3");
  cardH3.classList = "ip";
  cardH3.textContent = nesne.sorgu;
  cardDiv1.appendChild(cardH3);

  let cardP = document.createElement("p");
  cardP.classList = "ulke";
  cardP.textContent = `${nesne.ülke} (${nesne.ülkeKodu})`;
  cardDiv1.appendChild(cardP);

  let cardP1 = document.createElement("p");
  cardP1.textContent = `Enlem: ${nesne.enlem} Boylam: ${nesne.boylam}`;
  cardDiv1.appendChild(cardP1);

  let cardP2 = document.createElement("p");
  cardP2.textContent = `Şehir: ${nesne.şehir}`;
  cardDiv1.appendChild(cardP2);

  let cardP3 = document.createElement("p");
  cardP3.textContent = `Saat dilimi: ${nesne.saatdilimi}`;
  cardDiv1.appendChild(cardP3);

  let cardP4 = document.createElement("p");
  cardP4.textContent = `Para birimi: ${nesne.parabirimi}`;
  cardDiv1.appendChild(cardP4);

  let cardP5 = document.createElement("p");
  cardP5.textContent = ` ISP: ${nesne.isp}`;
  cardDiv1.appendChild(cardP5);

  return cardDiv;
}

const connection = async function () {
  await ipAdresimiAl();
  await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipgeoapi/" + benimIP,
  })
    .then(function (response) {
      return response.data;
    })
    .then(function (a) {
      cards.appendChild(cardAll(a));
    });
};

connection();
