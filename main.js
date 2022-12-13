function indexCards(ob){
    const x = Object.keys(ob).length;
    var text = "", origin_price;
    var i;
    for( i = 0 ; i < x ; i++){
        origin_price = ob[i].discountPercentage ? (ob[i].price*3.21/(1-ob[i].discountPercentage/100)).toFixed(3) +  "<sup>DT</sup>" : "";
        text += "<div id=card"+ i + " class=\"card col-md-3 col-xs-6 col-sp-6 mx-3 my-3 col\"  onmouseover=\"this.classList.add('shadow-lg');\" onmouseout=\"this.classList.remove('shadow-lg');\" style=\"width: 18rem;\"  > <div class=\"d-flex my-2 mx-1 justify-content-between\"><div class=\"\"> <i class=\"fa-solid fa-tag text-primary\"></i>&nbsp;"+ob[i].category+ "</div><div class=\"btn btn-outline-primary align-self-start\">"+ (ob[i].stock ? "En Stock" : "Epuisé" ) +"</div></div> <a href=\"#\" onclick=\"more("+ob[i].id+", this)\" ><img class=\"bd-placeholder-img card-img-top\" src= \"" + ob[i].thumbnail + "\" alt = " + ob[i].title + "  height = \"250\"/></a><div class=\"card-body text-center\"><a href=\"#\" class=\"text-decoration-none text-black\"><h5 class=\"card-title\" onclick=\"more("+ob[i].id+", this)\" >"+ ob[i].title+" </h5></a><div class=\"d-flex justify-content-center mb-3\"><h6 class=\"card-text text-black \"><del>"+ origin_price + "</del></h6>&nbsp;<h4 class=\"card-text text-danger \">"+ (ob[i].price*3.21).toFixed(3) + "<sup>DT</sup></h4></div><a href=\"#\" class=\"btn btn-outline-primary\" onclick=\"addPanier("+ ob[i].id +",1)\" >Ajouter au panier <i class=\"fa-solid fa-bag-shopping text-outline-primary\"></i></a></div></div>";
    }
        return text;  
}

function addPanier(ob,qte){
    let p = cards.filter(x => x.id === ob)[0];
    if(p.stock >= qte){
        if( panier.indexOf(p) < 0){
            p.panier = qte;
            panier.push(p);
        }else {
            p.panier += qte;
        }
        p.stock -= qte;
        document.getElementById("panel").innerHTML = showPanier(panier);
    }
}

function more(i, id){
    let parentId = id.parentElement.id;
    let grandParentId = document.getElementById(parentId).parentElement.id;
    document.getElementById("search").style.display = "none";
    let elem = cards.filter(x => x.id === i)[0];
    var origin_price = elem.discountPercentage ? (elem.price*3.21/(1-elem.discountPercentage/100)).toFixed(3) +  "<sup>DT</sup>" : "";
    var qte_int = elem.stock >= 1 ? 1 : 0; 
    var link;
    if(parentId.indexOf("card")>=0 && grandParentId === "cards") 
      link = "<a href=\"index.html\" class=\"btn btn-primary\">back</a>"
    else{
      link = "<a href=\"produits.html\" class=\"btn btn-primary\">back</a>"
    }
    var text = "<div class=\"col\"><div> " + link + " </div><img src= \"" + elem.images[parseInt(10*Math.random())%elem.images.length] + "\" alt = " + elem.title + " class=\"col-10\" ></div><div class=\"col bg-light\"><h1 class=\"card-title\">"+ elem.title+" </h1><h5 class=\"card-text text-secondary \">Réf: MQAM3HX/A"+ elem.id + "</h5><p>"+elem.description+"</p><div class=\"d-flex  mb-3\"><h4 class=\"card-text text-black \"><del>"+ origin_price + "</del></h4>&nbsp;<h1 class=\"card-text text-danger \">"+ (elem.price*3.21).toFixed(3) + "<sup>DT</sup></h1></div><div class=\"text-center d-flex justify-content-between\"><div class=\"d-flex justify-content-between w-50\"><label for = \"Qte#"+ i +"\"> <h4 class=\" text-success\" >Quantité :</h4> </label><div class=\"w-50\" ><input type=\"number\" id = \"Qte#"+ i +"\" value=\""+qte_int+"\" min=\"0\" max="+ elem.stock+" class=\"form-control\"></div></div><a href=\"#\" class=\"btn btn-outline-primary\" onclick=\"addPanier("+ i +",x = parseInt(document.getElementById('Qte#"+i+"').value))\" >Ajouter au panier <i class=\"fa-solid fa-bag-shopping text-outline-primary\"></i></a></div></div>"
    document.getElementById('cards').innerHTML = "<div class=\"row\">" + text + "</div>";
}

function index(){
    data = cards.sort(() => 0.5 - Math.random()).slice(0,12);
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

  // function searchCards(){
  //   var input,i, p = [],elem;
  //   input = document.getElementById('search').value.toUpperCase();
  //   for(i = 0;i<Object.keys(cards).length;i++){
  //       elem = cards[i].title.toUpperCase();
  //       if(elem.indexof(input)>-1)
  //         p.push(cards[i]);
  //   }
  //   document.getElementById("cards").innerHTML = indexCards(p);
  // }
//--------------- main -------------------------------------------
panier = [];
function showPanier(ob){
  const x = Object.keys(ob).length;
  console.log(x);
  var text="",total=0;
  var i;
  for( i = 0 ; i < x ; i++){
    text += "<div class=\"card mb-1 bg-light\" style=\"width: 300px;\"><div class=\"row g-0\" style=\"height : 75px !important\"><div class=\"col-md-3 bg-light\"><img src=\""+ob[i].thumbnail+"\" width =\"75\" height=\"75\" class=\"rounded-start\" alt=\"...\"></div><div class=\"col-md-9 bg-light\"><div class=\"pt-1 pb-0 card-body bg-light\"><div><h6 class=\" card-title bg-light\">"+ob[i].title+"</h6></div><div class=\"mt-0 d-flex justify-content-between bg-light\"><h6 class=\"card-text text-danger \">"+ (ob[i].price*3.21).toFixed(3) + "<sup>DT</sup></h6><p class=\"text-secondary\">× "+ ob[i].panier+ "</p></div></div></div></div></div>";
    total += (ob[i].price*3.21)*ob[i].panier;
  }
  text += "<div class=\"d-flex justify-content-between fw-bold fs-5 my-2\"><div>Total</div><div>"+total.toFixed(3)+"<sup>DT</sup></div></div>"
  return text;
}

function toggle(){
  var classList = document.getElementById('panel').classList.value;
  if(classList.indexOf('d-block')>-1)
    document.getElementById('panel').classList.remove('d-block');
  else 
  document.getElementById('panel').classList.add('d-block');
}
function affichePanier(){
  if(panier.length){
  var text = indexCards(panier);
  text += "<button type=\"button\"  id=\"panier\" class=\"p1 btn btn-outline-danger mx-2\" onclick=\"affichePanier()\" data-bs-toggle=\"modal\" data-bs-target=\"#myModal\">Order</button>";
  // document.getElementById('carouselExampleInterval').style = "d"
  document.getElementById('carouselExampleInterval').classList.add('d-none');
  document.querySelector('main').innerHTML = "";
  document.getElementById('cards').innerHTML = text;

  }
}


function order(){
  panier= [];
  document.getElementById('carouselExampleInterval').classList.remove('d-none');
  document.getElementById('cards') = index();
  document.getElementById('closed').click();

}


