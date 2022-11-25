const cards = [
     {
        Reference : "LAP-D463",
        category : "Informatique",
        subCategory : "PC Portable",
        marque : "DELL",
        title : "DELL INSPIRON G15 5510 - i7 10é -16Go - 512Go SSD - RTX 3050 -4 Go",
        prix : "3539,000 DT",
        stock : true,
        description : "Processeur :   Intel® Core™  i7-10870H de 10e génération  (16MB Cache, up to 5.0 GHz, 8 cores) / Ram 16 Go, 2 x 8 Go de mémoire, DDR4 à 3 200 MHz / Disque  512Go SSD / Carte graphique NVIDIA® GeForce RTX™ 3050 avec 4 Go de mémoire GDDR6 / Ecran 15.6'' Full HD (1920x1080px) 120Hz/ Wifi / Bluetooth / Clavier rétroéclairé / 2 USB 2.0 / 1 USB 3.0 / HDMI /Ethernet / Dark Shadow Grey / UBUNTU / Garantie 1 an",
        image : "/images/dell-inspiron-g15-5510-i7-10e-16go-512go-ssd-rtx-3050-4-go.jpg",
        couleur : ["Black", "Grey","White"],
        qteDispo : 13,
    },
     {
        Reference : "ALLP71000.W01",
        category : "Électroménager",
        subCategory : "Machine à laver",
        marque : "PREMIUM",
        title : "Lave linge frontal PREMIUM 7KG pose libre ALLP71000.W01",
        prix : "989,000 DT",
        stock : true,
        description : "Lave linge frontal pose libre / Affichage électronique / Capacité de lavage : 7kg / Vitesse d’essorage (tr/min) : 1000rpm / Nombre de programmes : 15 / Programmes de base: Coton, Synthétiques, Laine / Lavage à la main / Réglage de la température / Réglages personnels possibles pour tous les programmes Confort et sécurité -Sécurité enfants / système anti débordement / Consommation d'eau annuelle (L/an) : 12100 / Consommation d'énergie annuelle / Garantie 2 ans",
        image : "/images/lave-linge-frontal-premium-7kg-pose-libre-allp71000w01-blanc.jpg",
        couleur : ["Black", "Grey","White"],
        qteDispo : 13,


    },
    {
        Reference : "ALLP71000.W01",
        category : "Téléphonie | Tablettes",
        subCategory : "Smartphone & Mobile",
        marque : "INFINIX",
        title : "Smartphone INFINIX SMART 5 64G - Ocean Wave",
        prix : "369,000 DT",
        stock : false,
        description : "Processeur : Mediatek MT6761D Helio A20 (12 nm) Quad-Core 1,8 GHz / RAM : 3 Go / Capacité : 64 Go / Écran LCD IPS 6.6 pouces (1600 x 720px) / appareils photo Arrière : 13MP + AF + QVGA / Frontale: 8 MP / Wi-Fi / Bluetooth / 4G / GPS / Batterie: Li-po 5000mAh / Android 10 / Lecteur d'empreinte / Dual SIM / Garantie 1 an",
        image : "/images/smartphone-infinix-smart-5-64g-ocean-wave.jpg",
        couleur : ["Black", "Grey","White"],
        qteDispo : 13,


    },
     {
        Reference : "ALLP71000.W01",
        category : "Téléphonie | Tablettes",
        subCategory : "Smartphone & Mobile",
        marque : "INFINIX",
        title : "Smartphone INFINIX SMART 5 64G - Ocean Wave",
        prix : "369,000 DT",
        stock : false,
        description : "Processeur : Mediatek MT6761D Helio A20 (12 nm) Quad-Core 1,8 GHz / RAM : 3 Go / Capacité : 64 Go / Écran LCD IPS 6.6 pouces (1600 x 720px) / appareils photo Arrière : 13MP + AF + QVGA / Frontale: 8 MP / Wi-Fi / Bluetooth / 4G / GPS / Batterie: Li-po 5000mAh / Android 10 / Lecteur d'empreinte / Dual SIM / Garantie 1 an",
        image : "/images/smartphone-infinix-smart-5-64g-ocean-wave.jpg",
        couleur : ["Black", "Grey","White"],
        qteDispo : 13,

    },
     {
        Reference : "ALLP71000.W01",
        category : "Téléphonie | Tablettes",
        subCategory : "Smartphone & Mobile",
        marque : "INFINIX",
        title : "Smartphone INFINIX SMART 5 64G - Ocean Wave",
        prix : "369,000 DT",
        stock : false,
        description : "Processeur : Mediatek MT6761D Helio A20 (12 nm) Quad-Core 1,8 GHz / RAM : 3 Go / Capacité : 64 Go / Écran LCD IPS 6.6 pouces (1600 x 720px) / appareils photo Arrière : 13MP + AF + QVGA / Frontale: 8 MP / Wi-Fi / Bluetooth / 4G / GPS / Batterie: Li-po 5000mAh / Android 10 / Lecteur d'empreinte / Dual SIM / Garantie 1 an",
        image : "/images/smartphone-infinix-smart-5-64g-ocean-wave.jpg",
        couleur : ["Black", "Grey","White"],
        qteDispo : 13,

    },
];
const panier = [];
// let y;
//  let cards1 = fetch('https://dummyjson.com/products')
// .then(res => y= res.json());

// console.log(cards1);

function indexCards(ob){
    const x = Object.keys(ob).length;
    var text = "";
    var i;
    for( i = 0 ; i < x ; i++){
        text += "<div id=card"+ i + " class=\"card col-md-3 col-xs-6 col-sp-6 mx-3 my-3\"  onmouseover=\"this.classList.add('shadow-lg');\" onmouseout=\"this.classList.remove('shadow-lg');\" style=\"width: 18rem;\"  > <div class=\"d-flex my-2 mx-1 justify-content-between\"><div class=\"\"> <i class=\"fa-solid fa-tag text-primary\"></i>&nbsp;"+ob[i].category+ "</div><div class=\"btn btn-outline-primary align-self-start\">"+ (ob[i].stock ? "En Stock" : "Epuisé" ) +"</div></div> <a href=\"#\"><img class=\"bd-placeholder-img card-img-top\" onclick=\"more("+i+")\"  src= \"" + ob[i].image + "\" alt = " + ob[i].title + " /></a><div class=\"card-body text-center\"><a href=\"#\" class=\"text-decoration-none text-black\"><h5 class=\"card-title\" onclick=\"more("+i+")\" >"+ ob[i].title+" </h5></a><h5 class=\"card-text text-danger \">"+ ob[i].prix + "</h5><a href=\"#\" class=\"btn btn-outline-primary\" onclick=\"addPanier("+ i +",1)\" >Ajouter au panier <i class=\"fa-solid fa-bag-shopping text-outline-primary\"></i></a></div></div>";
    }
        return text;  
}

 function addPanier(ob,qte){
    var p = cards[ob];
    if( panier.indexOf(p) < 0){
        p.qtePanier = qte;
        panier.push(p);
    }else {
        p.qtePanier += qte;
    }
    cards[0].qteDispo -= qte;
}
function more(i){
    var link = "<a href=\"#cards\" class=\"btn btn-primary\" onclick=\"index()\">back</a>"
    var text = "<div class=\"col\"><div> " + link + " </div><img src= \"" + cards[i].image + "\" alt = " + cards[i].title + " class=\"col-10\" ></div><div class=\"col bg-light\"><h1 class=\"card-title\">"+ cards[i].title+" </h1><h5 class=\"card-text text-secondary \">Réf: "+ cards[i].Reference + "</h5><p>"+cards[i].description+"</p><h1 class=\"card-text text-danger \">"+ cards[i].prix + "</h1><div class=\"text-center d-flex justify-content-between\"><div class=\"d-flex justify-content-between w-50\"><label for = \"Qte#"+ i +"\"> <h4 class=\" text-success\" >Quantité :</h4> </label><div class=\"w-50\" ><input type=\"number\" id = \"Qte#"+ i +"\" value=\"1\"min=\"1\" max="+ cards[i].qteDispo+" class=\"form-control\"></div></div><a href=\"#\" class=\"btn btn-outline-primary\" onclick=\"addPanier("+ i +",x = parseInt(document.getElementById('Qte#"+i+"').value))\" >Ajouter au panier <i class=\"fa-solid fa-bag-shopping text-outline-primary\"></i></a></div></div>"
    document.getElementById('cards').innerHTML = "<div class=\"row\">" + text + "</div>";
}

function index(){
    document.getElementById('cards').innerHTML = indexCards(cards);
}


document.getElementById('cards').innerHTML = indexCards(cards);

// fetch('https://dummyjson.com/products/1', {
//   method: 'PUT', /* or PATCH */
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     subCategory: 'iPhone Galaxy +1'
//   })
// })
// .then(res => res.json())
// .then(console.log);
