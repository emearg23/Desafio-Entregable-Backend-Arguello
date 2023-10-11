class ProductManager {
    constructor() {
      this.products = [];
    }
  
    generateUniqueId() {
      return '_' + Math.random().toString(36).slice(2, 9);
    }
  
    getProducts() {
      return this.products;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      const existingProduct = this.products.find(product => product.code === code);
      if (existingProduct) {
        throw new Error('El código de producto ya existe.');
      }
  
      const id = this.generateUniqueId();

      const newProduct = {
        id,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };

      this.products.push(newProduct);

      return newProduct;
    }
  
    getProductById(id) {
      const product = this.products.find(product => product.id === id);
      if (!product) {
        throw new Error('Not found');
      }
      return product;
    }
  }
  
  const productManager = new ProductManager();
  
  console.log(productManager.getProducts());
  
  try {
    productManager.addProduct(
      "producto prueba",
      "Este es un producto prueba",
      200,
      "Sin imagen",
      "abc123",
      25
    );
    console.log("Producto agregado satisfactoriamente.");
  } catch (error) {
    console.error("Error al agregar producto:", error.message);
  }
  
  console.log(productManager.getProducts());
  
  try {
    productManager.addProduct(
      "producto repetido",
      "Este es un producto repetido",
      300,
      "Otra imagen",
      "abc123",
      10
    );
    console.log("Producto agregado satisfactoriamente.");
  } catch (error) {
    console.error("Error al agregar producto:", error.message);
  }
  
  try {
    const product = productManager.getProductById(productManager.getProducts()[0].id);
    console.log("Producto encontrado por ID:", product);
  } catch (error) {
    console.error("Error al obtener producto por ID:", error.message);
  }