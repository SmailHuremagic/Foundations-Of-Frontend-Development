var products;

$(document).ready(function() {
    $.ajax({
      url: 'https://dummyjson.com/products',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        products = data.products.slice(0, 10);
        console.log("first prod:", data.products[0]);
        document.getElementById('productCardsRow').innerHTML = generateProductCards(products);
      },
      error: function(xhr, status, error) {
        console.error('Failed to fetch JSON data:', error);
      }
    });
});

function generateProductCards(products) {
    var productCardsHTML = '';
    products.forEach(product => {
        productCardsHTML += `
        <div class="col-md-6 col-sm-12 mb-4">
        <div class="card card-body">
          <div class="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
            <div class="mr-2 mb-3 mb-lg-0">            
              <img src="${product.images[0]}" width="100%" height="250" alt="">                 
            </div>

            <div class="media-body">
              <h6 class="media-title font-weight-semibold mt-4">
                  <p data-abc="true">${product.title}</p>
              </h6>

              <ul class="list-inline list-inline-dotted mb-3 mb-lg-2">
                  <li class="list-inline-item"><a href="#" class="text-muted" data-abc="true">product</a></li>
                  <li class="list-inline-item"><a href="#" class="text-muted" data-abc="true">${product.category}</a></li>
              </ul>

              <p style="min-height: 50px;">${product.description}</p>
            </div>

            <div class="mt-lg-0 ml-lg-3 text-center">
              <h3 class="mb-0 font-weight-semibold">$ ${product.price}</h3>
              <div class="text-muted">Stock: ${product.stock}</div>

              <!-- Link to open product details page -->
              <a href="product.html?id=${product.id}" class="btn btn-warning mt-4 text-white cart-btn"><i class="icon-cart-add mr-2"></i>View More</a>
              <button class="btn btn-warning mt-4 text-white cart-btn edit-product" data-product-id="${product.id}"><i class="icon-cart-add mr-2"></i>Edit</button>
              <button class="btn btn-warning mt-4 text-white cart-btn delete-product" data-product-id="${product.id}"><i class="icon-cart-add mr-2"></i>Delete</button>
            </div>
          </div>
        </div>                  
      </div> 
        `;
    });
    return productCardsHTML;

}

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-product')) {
        var productId = event.target.dataset.productId;
        products = products.filter(product => product.id !== parseInt(productId));
        document.getElementById('productCardsRow').innerHTML = generateProductCards(products);
        console.log('Product deleted with ID:', productId);
    }
});

function handleEditProductModal(product) {
    document.getElementById('editTitle').value = product.title;
    document.getElementById('editPrice').value = product.price;
    document.getElementById('editStock').value = product.stock;
  
    var editProductModal = new bootstrap.Modal(document.getElementById('editProductModal'));
    editProductModal.show();
  
    document.getElementById('editProductButton').addEventListener('click', function() {
      var updatedTitle = document.getElementById('editTitle').value;
      var updatedPrice = document.getElementById('editPrice').value;
      var updatedStock = document.getElementById('editStock').value;
  
      products = products.map(p => p.id === product.id ? {...p, title: updatedTitle, price: updatedPrice, stock: updatedStock} : p);
      document.getElementById('productCardsRow').innerHTML = generateProductCards(products);
  
      editProductModal.hide();
    });
}
  
document.addEventListener('click', function(event) {
if (event.target.classList.contains('edit-product')) {
    var productId = event.target.dataset.productId;
    var product = products.find(p => p.id === parseInt(productId));
    if (product) {
    handleEditProductModal(product);
    }
}
});

document.addEventListener('DOMContentLoaded', function() {
    var galleryLinks = document.querySelectorAll('.gallery-link');
    galleryLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
        event.preventDefault();
        var modalImage = document.getElementById('modalImage');
        var imageSrc = link.getAttribute('data-image');
        var imageDescription = link.getAttribute('data-description');
        modalImage.src = imageSrc;
        modalImage.alt = imageDescription;
        });
    });
});

async function getNews(){
    await fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=cyzXGWejtWPqH80jhZbrWN60uFFMpJLG')
    .then(d => d.json())
    .then(response => {
        console.log(response.results);
        for(var i = 0; i < response.results.length; i++){
            const output = document.getElementById('output');
            
            try{
                output.innerHTML += `
                    <div class="card">
                    <div class="card-body">
                    <img src="${response.results[i]['media'][0]['media-metadata'][2].url}" class="card-img-top" alt="${response.results[i]['media'][0].caption}" title="${response.results[i]['media'][0].caption}"><br>
                    <h2 class="card-title">${response.results[i].title}</h2>
                    <div class="card-text">
                        <p>${response.results[i].abstract}</p>
                    </div>
                    </div>
                    </div>
                    <br>
                    `
                console.log(response.results[i]['media'][0].caption);
            }
            catch(err){
                console.log(err);
            }
        }
        document.getElementById('copyright').innerHTML = response.copyright;
    })
}
getNews();

