header = `<div class="row" id="header">
            <div></div>
            <div>Code</div>
            <div>Produit</div>
            <div>Taille</div>
            <div>Couleur</div>
            <div>Quantité</div>
            <div>Modifier</div>
            <div>Supprimer</div>
          </div>`
;

products = [
    {img:"1.png",code:"TMO",name:"T-shirt",size:"M",color:"orange",quantity:3},
    {img:"3.png",code:"P42B",name:"Pantalon",size:"42",color:"blue",quantity:12},
    {img:"2.png",code:"VSN",name:"Veste",size:"S",color:"black",quantity:5},
];

updateId = undefined;

deleteId = undefined;

function openAddProduct(){
    document.getElementById('addVeil').style.display = 'flex';
}

function openDeleteProduct(productId){
    deleteId = productId;
    document.getElementById("deleteId").innerHTML = productId;
    document.getElementById('deleteVeil').style.display = 'flex';
}


function openEditProduct(productId){
    updateId = productId;

    var edittingProduct = undefined;

    document.getElementById("updateId").innerHTML = productId;
    
    for (let index = 0; index < products.length; index++) {
        const product = products[index];
        if(product.code==updateId){
            edittingProduct = product;
        }
    }

    document.getElementById('editVeil').style.display = 'flex';
    document.getElementById("editproductId").value = edittingProduct.code;
    document.getElementById("editproductName").value = edittingProduct.name;
    document.getElementById("editproductSize").value = edittingProduct.size;
    document.getElementById("editproductColor").value = edittingProduct.color;
    document.getElementById("editproductQuantity").value = edittingProduct.quantity;
}

function ReadProducts(){
    document.getElementById("products").innerHTML = header;
    products.forEach(product => {
        document.getElementById("products").innerHTML+=`<div class="row">
        <div><img class="productImage" src="${product.img}" alt=""></div>
        <div>${product.code}</div>
        <div>${product.name}</div>
        <div>${product.size}</div>
        <div>${product.color}</div>
        <div>${product.quantity}</div>
        <div><button class="editProductButton" onclick='openEditProduct("${product.code}")'>Modifier</button></div>
        <div><button class="deleteProductButton" onclick='openDeleteProduct("${product.code}")'>Supprimer</button></div>
    </div>`
    });
}

ReadProducts();

function addProduct(){
    newProduct = {
        code:document.getElementById("addproductId").value,
        img:document.getElementById("addproductImage").value,
        name:document.getElementById("addproductName").value,
        size:document.getElementById("addproductSize").value,
        color:document.getElementById("addproductColor").value,
        quantity:document.getElementById("addproductQuantity").value,
    };
    products.push(newProduct);
    ReadProducts();
    document.getElementById('addVeil').style.display = 'none';
}

function editProduct(){
    const edittedProduct = {
        code:document.getElementById("editproductId").value,
        img:document.getElementById("editproductImage").value,
        name:document.getElementById("editproductName").value,
        size:document.getElementById("editproductSize").value,
        color:document.getElementById("editproductColor").value,
        quantity:document.getElementById("editproductQuantity").value,
    };

    for (let index = 0; index < products.length; index++) {
        const product = products[index];
        if(product.code==updateId){
            img = products[index].img
            products[index] = edittedProduct;
            products[index].img = img
        }
    }
    updateId = undefined;
    ReadProducts();
    document.getElementById('editVeil').style.display = 'none';
}

function deleteProduct(){
    for (let index = 0; index < products.length; index++) {
        const product = products[index];
        if(product.code==deleteId){
            products.splice(index, 1)
        }
    }
    deleteId = undefined;
    ReadProducts();
    document.getElementById('deleteVeil').style.display = 'none';
}