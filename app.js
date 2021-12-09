let count = 0
x=5;
var products = [
    {
        Name: "Drums",
        Type: "Precussion",
        Price: "279.99",
        Brand: "Fender",
        Image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQUtQ-DhXKXyMB5aF2CE3cwKcu_R_30WuUWvXZhMuYpnZrShj18m_i8nrsOBm66aXODOZ9DR0eqmv6VmrRhNVlhoMz0rC1KrG53SwN9IJ7g55kqQ98mDqZBvg&usqp=CAY"
    },
    {
        Name: "Guitar",
        Type: "String",
        Price: "89.99",
        Brand: "Yamaha",
        Image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTPKKx5gEs6n6vA7eEk9S54stp3eNTT1CddoDnXeGsw13Jdbc9pW_7u8tiO9zZaF2cGuNdk5mXZuQA1DeV6Op3fIeWbRI6OQ4f1XUTg-xpw&usqp=CAY"
    },
    {
        Name: "Saxophone",
        Type: "Woodwind",
        Price: "287.99",
        Brand: "Malton",
        Image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTg-OoM67kf4XQtpM-afGbs9r_cYBcZVdCx8XBr5sZP5apsRt3Zmq1kDnEgdfuT6fm71E6eyC64PKbOcI_pDe7AFmIE_HNix7pb-xRJTa_eQyP-bvy6CP8Y5w&usqp=CAY"
    },
    {
        Name: "Piano",
        Type: "Chordophone",
        Price: "349.99",
        Brand: "Fender",
        Image: "data:image/jpeg;base64,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"
    },
    {
        Name: "Trumpet",
        Type: "Brass",
        Price: "299.99",
        Brand: "Yamaha",
        Image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTfP2YbTHqhxjw4aEHSeSwxV1X4yE4-uOrEyWR5O42l3hgAvbQfSHucmdF0jPUgmK17-2g6O8PBx5an6kBHX0RoxTFdzRhMSjnpyhW27EoQYdCSIQpvsukG&usqp=CAY"
    },
    {
        Name: "Ukulele",
        Type: "String",
        Price: "29.99",
        Brand: "Malton",
        Image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR1lfQHbf4eX5gUHIHxMU-wdm9qVe_XBVtVjmHVLvoNA9dKQqCQGjY9t7g9EJ-1XPdm8PFsItRONQnKUuscB8Z3jSvJBIoDmwkCNgV_RQr3ehp8mTOelqWXSg&usqp=CAY"
    }
];
var eles = [];

const popUp=document.querySelector(".popUp");

function box(itm){
    const that=this;
    that.create();
    that.innerCreate()
    that.image(itm.Image);
    that.name(itm.Name);
    that.price(itm.Price);
    that.type(itm.Type);
    that.brand(itm.Brand);
    that.button();

    container.appendChild(this.ele);
    this.ele.appendChild(this.innerEle)
    this.innerEle.appendChild(this.img);
    this.innerEle.appendChild(this.nameEle);
    this.innerEle.appendChild(this.buttonEle);

   this.img.addEventListener("click", function(){
        that.popUp();
    })
    this.ele.addEventListener("mouseenter", function (){
        that.changeColor(itm.Brand);
    })
    this.ele.addEventListener("mouseleave",function (){
        that.changeColor("off");
    })
}

box.prototype.create= function (){
    this.ele=document.createElement("div");
    this.ele.className="product";
}
box.prototype.innerCreate= function (){
    this.innerEle=document.createElement("div");
    this.innerEle.className="inner";
}

box.prototype.image=function(image){
    this.img=document.createElement("img");
    this.img.src=image;
}

box.prototype.name=function(name){
    this.nameEle=document.createElement("p");
    this.nameEle.innerHTML="Name: " + name;
}

box.prototype.price=function(price){
    this.priceEle=document.createElement("p");
    this.priceEle.innerHTML="Price: $"+price;
}
box.prototype.type=function(type){
    this.typeEle=document.createElement("p");
    this.typeEle.innerHTML="Type: "+type;
}
box.prototype.brand=function(brand){
    this.brandEle=document.createElement("p");
    this.brandEle.innerHTML="Brand: "+brand;
}

box.prototype.button=function(){
    const that=this;
    this.buttonEle=document.createElement("button");
    this.buttonEle.innerHTML="Add Item";
    this.buttonEle.onclick = function(){addCart(); that.ele.style.display="none"};
}

box.prototype.popUp = function(){
    const that=this;

    this.innerEle.removeChild(this.buttonEle);
    this.innerEle.appendChild(this.typeEle);
    this.innerEle.appendChild(this.brandEle);
    this.innerEle.appendChild(this.priceEle);
    this.innerEle.appendChild(this.buttonEle);
    this.ele.style.height="auto";

    popUp.appendChild(this.ele);

    popUp.removeAttribute("style");

    popUp.addEventListener("click", function(){
        that.products();
    })
}

box.prototype.changeColor=function(Brand){
    if(Brand==="Malton"){
        this.ele.style.backgroundColor="Blue";
    }
    if(Brand==="Yamaha"){
        this.ele.style.backgroundColor="Green"
    }
    if(Brand==="Fender"){
        this.ele.style.backgroundColor="Red"
    }
    if(Brand==="off"){
        this.ele.style.backgroundColor="white";
    }
}
box.prototype.products=function(){
    const that=this;
    popUp.style.display="none";

    popUp.removeChild(this.ele);

    container.appendChild(this.ele);
    this.innerEle.removeChild(this.buttonEle);
    this.innerEle.removeChild(this.priceEle);
    this.innerEle.removeChild(this.typeEle);
    this.innerEle.removeChild(this.brandEle);
    this.innerEle.appendChild(this.buttonEle);

    this.img.addEventListener("click", function(){
        that.popUp();
    })
}
function start() {
    popUp.style.display = "none";
    for (let i = 0; i < products.length; i++) {
        eles.push(new box(products[i]));
    }


}

function CartAdd(){
    cart.innerHTML="Cart: " + count;
}

let container=document.createElement("div");
container.id="container";



const header=()=>{
    topBar=document.createElement("div");
    topBar.className="topBar";
    btn = document.createElement("button");
    btn.className="btn";
    btn.innerHTML="Create Item";
    btn.onclick=function(){createItm();}
    cart=document.createElement("button");
    cart.className="cart";
    cart.onclick=function(){reset();};
    CartAdd();

    document.body.appendChild(topBar);
    topBar.appendChild(btn);
    topBar.appendChild(cart);
    
}

function form() {
    frmDiv = document.createElement("div");
    document.body.appendChild(frmDiv);
    frmDiv.id = "frm";
    frmDiv.className="popUp";

    frmBox=document.createElement("div");
    frmDiv.appendChild(frmBox);
    frmBox.id="frmBox";

    frm = document.createElement("form");
    frmBox.appendChild(frm);

    input("foName","Name");
    input("foType","Type");
    input("foBrand","Brand");
    input("foPrice", "Price");

    foBtn = document.createElement("button");
    foBtn.innerHTML="Create";
    frmBox.appendChild(foBtn);
    frmBox.addEventListener("click",function(){hide();});
    frmDiv.style.display="none";
}

function input(ipt,pl){
    this.ipt = document.createElement("input");
    this.ipt.type="text";
    this.ipt.id=ipt;
    this.ipt.placeholder=pl;
    frm.appendChild(this.ipt);
}


const contain=()=>{
    document.write("<br>");
    document.body.appendChild(container);
}


const createItm=()=>{
    frmDiv.style.display="";
}
const hide=()=>{
    frmDiv.style.display="none";
}

const addCart=()=>{
    count++;
    CartAdd();
}

const reset=()=>{
    count = 0;
    CartAdd();
    container.innerHTML=" ";
    start();
}

form();
header();
contain();
start();
