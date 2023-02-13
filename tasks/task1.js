// class ProductManager {
//     constructor() {
//       this.products = [];
//     }
  
//     getProducts() {
//       return console.log(this.products);
//     }
  
//     getProductById(productId) {
//       const searchedProduct = this.products.find(
//         (product) => product.id === productId
//       );
//       if (!searchedProduct) {
//         console.error("Not Found");
//       } else {
//         console.log(searchedProduct);
//       }
//     }
  
//     addProduct(title, description, price, thumbnail, code, stock) {
//       const product = {
//         title,
//         description,
//         price,
//         thumbnail,
//         code,
//         stock,
//       };
  
//       if (this.products.find((product) => product.code === code)) {
//         return console.error("Error, Se repite");
//       }
  
//       if (this.products.length === 0) {
//         product.id = 1;
//       } else {
//         product.id = this.products.length + 1;
//       }
  
//       this.products.push(product);
//     }
//   }
  
//   const pm = new ProductManager();
//   console.log(pm.getProducts());
//   pm.addProduct(
//     "Producto prueba",
//     "Este es un producto de prueba",
//     200,
//     "sin Imagen",
//     "abc123",
//     25
//   );
//   console.log(pm.getProducts());
//   pm.addProduct(
//     "Otro Producto prueba",
//     "Este es Otro producto de prueba",
//     500,
//     "sin Imagen",
//     "abc123",
//     25
//   );
//   console.log(pm.getProducts());
//   pm.addProduct(
//     "Otro Producto prueba",
//     "Este es Otro producto de prueba",
//     500,
//     "sin Imagen",
//     "abc456",
//     25
//   );
//   console.log(pm.getProducts());
//   pm.getProductById(1);
//   pm.getProductById(2);
//   pm.getProductById(5);
    