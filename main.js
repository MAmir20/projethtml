

function indexCards(ob){
    const x = Object.keys(ob).length;
    var text = "", origin_price;
    var i;
    for( i = 0 ; i < x ; i++){
        origin_price = ob[i].discountPercentage ? (ob[i].price*3.21/(1-ob[i].discountPercentage/100)).toFixed(3) +  "<sup>DT</sup>" : "";
        text += "<div id=card"+ i + " onclick=\"more("+ob[i].id+", this)\" class=\"card col-md-3 col-xs-6 col-sp-6 mx-3 my-3 col\"  onmouseover=\"this.classList.add('shadow-lg');\" onmouseout=\"this.classList.remove('shadow-lg');\" style=\"width: 18rem;\"  > <div class=\"d-flex my-2 mx-1 justify-content-between\"><div class=\"\"> <i class=\"fa-solid fa-tag text-primary\"></i>&nbsp;"+ob[i].category+ "</div><div class=\"btn btn-outline-primary align-self-start\">"+ (ob[i].stock ? "En Stock" : "Epuisé" ) +"</div></div> <a href=\"#\"><img class=\"bd-placeholder-img card-img-top\" src= \"" + ob[i].thumbnail + "\" alt = " + ob[i].title + "  height = \"250\"/></a><div class=\"card-body text-center\"><a href=\"#\" class=\"text-decoration-none text-black\"><h5 class=\"card-title\" onclick=\"more("+i+")\" >"+ ob[i].title+" </h5></a><div class=\"d-flex justify-content-center mb-3\"><h6 class=\"card-text text-black \"><del>"+ origin_price + "</del></h6>&nbsp;<h4 class=\"card-text text-danger \">"+ (ob[i].price*3.21).toFixed(3) + "<sup>DT</sup></h4></div><a href=\"#\" class=\"btn btn-outline-primary\" onclick=\"addPanier("+ i +",1)\" >Ajouter au panier <i class=\"fa-solid fa-bag-shopping text-outline-primary\"></i></a></div></div>";
    }
        return text;  
}

function addPanier(ob,qte){
    var p = cards[ob];
    if(p.stock >= qte){
        if( panier.indexOf(p) < 0){
            p.panier = qte;
            panier.push(p);
        }else {
            p.panier += qte;
        }
        p.stock -= qte;
    }
}

function more(i, id){
    let parentId = id.parentElement.id;
    console.log(parentId);
    document.getElementById("search").style.display = "none";
    let elem = cards.filter(x => x.id === i)[0];
    var origin_price = elem.discountPercentage ? (elem.price*3.21/(1-elem.discountPercentage/100)).toFixed(3) +  "<sup>DT</sup>" : "";
    var qte_int = elem.stock >= 1 ? 1 : 0; 
    var link;
    if(parentId==="cards")
      link = "<a href=\"#cards\" class=\"btn btn-primary\" onclick=\"index()\">back</a>"
    else{
      link = "<a href=\"#cards\" class=\"btn btn-primary\" onclick=\"produits()\">back</a>"
    }
    var text = "<div class=\"col\"><div> " + link + " </div><img src= \"" + elem.images[parseInt(10*Math.random())%elem.images.length] + "\" alt = " + elem.title + " class=\"col-10\" ></div><div class=\"col bg-light\"><h1 class=\"card-title\">"+ elem.title+" </h1><h5 class=\"card-text text-secondary \">Réf: MQAM3HX/A"+ elem.id + "</h5><p>"+elem.description+"</p><div class=\"d-flex  mb-3\"><h4 class=\"card-text text-black \"><del>"+ origin_price + "</del></h4>&nbsp;<h1 class=\"card-text text-danger \">"+ (elem.price*3.21).toFixed(3) + "<sup>DT</sup></h1></div><div class=\"text-center d-flex justify-content-between\"><div class=\"d-flex justify-content-between w-50\"><label for = \"Qte#"+ i +"\"> <h4 class=\" text-success\" >Quantité :</h4> </label><div class=\"w-50\" ><input type=\"number\" id = \"Qte#"+ i +"\" value=\""+qte_int+"\" min=\"0\" max="+ elem.stock+" class=\"form-control\"></div></div><a href=\"#\" class=\"btn btn-outline-primary\" onclick=\"addPanier("+ i +",x = parseInt(document.getElementById('Qte#"+i+"').value))\" >Ajouter au panier <i class=\"fa-solid fa-bag-shopping text-outline-primary\"></i></a></div></div>"
    document.getElementById('cards').innerHTML = "<div class=\"row\">" + text + "</div>";
}

function index(){
    data = cards.sort(() => 0.5 - Math.random()).slice(0,8);
    document.getElementById("search").style.display = "block";
    document.getElementById('cards').innerHTML = indexCards(data);
}

function produits(){
    let laptops = cards.filter(x => x.category === "laptops");
    let smartphones = cards.filter(x => x.category === "smartphones");
    let clothing = cards.filter(x => ["tops", "womens-dresses", "womens-shoes", "mens-shirts", "mens-shoes"].indexOf(x.category) > -1);
    let accessories = cards.filter(x => ["mens-watches", "womens-watches", "womens-bags", "womens-jewellery", "sunglasses"].indexOf(x.category) > -1);
    let vehicules = cards.filter(x => ["automotive", "motorcycle"].indexOf(x.category) > -1);
    let maison = cards.filter(x => ["home-decoration", "furniture", "lighting"].indexOf(x.category) > -1);
    let beaute = cards.filter(x => ["fragrances", "skincare"].indexOf(x.category) > -1);
    let grocerie = cards.filter(x => x.category === "groceries");

    document.getElementById('laptops').innerHTML = indexCards(laptops);
    document.getElementById('smartphones').innerHTML = indexCards(smartphones);
    document.getElementById('clothing').innerHTML = indexCards(clothing);
    document.getElementById('accessories').innerHTML = indexCards(accessories);
    document.getElementById('vehicules').innerHTML = indexCards(vehicules);
    document.getElementById('maison').innerHTML = indexCards(maison);
    document.getElementById('beaute').innerHTML = indexCards(beaute);
    document.getElementById('grocerie').innerHTML = indexCards(grocerie);
}

function search() {
    // Declare variables
    var input, filter, els, el, a, i, txtValue;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    els = document.getElementById("cards");
    el = els.getElementsByClassName('card');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < el.length; i++) {
      a = el[i].getElementsByTagName("h5")[0];
      txtValue = a.textContent || a.innerText;
      console.log(txtValue)
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        el[i].style.display = "";
      } else {
        el[i].style.display = "none";
      }
    }
  }
//--------------- main -------------------------------------------
// index();
// produits();