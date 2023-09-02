class ProductManager {
    constructor() {
        this.products = [];  
    }
    //funcion de obtencion de todos los productos
    getProducts (){
       return this.products};
    // funcion de obtencion por ID
    getProductById (pid){
        let productId= this.products.find(product => product.id === pid);
        (!productId) ? console.log("Not found") : console.log("Producto encontrado", productId)
    }

    //metodo agregar producto al constructor
    addProduct = (title, description, price, thumbnail, code, stock) => { 
        let product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };


        //validacion ternaria:
        //id
        product.id= this.products.length === 0 ? 1 : this.products[this.products.length - 1].id + 1;
        //code
        let productCode = this.products.find(prod=> prod.code === product.code);
        productCode 
        ? console.log("codigo de producto ya registrado") :  
        Object.values(product).every(value => value)
            ? this.products.push(product)
            : console.log("Error Completa los campos");
    }};

    //Test para hacerle la vida mas facil
    let adminProductos = new ProductManager()
    //correctas
    adminProductos.addProduct('Alfajor Vimar', 'alfajor vimar de leche', 52, "Sin imagen", "Z245", 10)
    adminProductos.addProduct('Pepitos', 'galletitas pepitos 200grs', 230, "Sin imagen", "Z425", 8)
    adminProductos.addProduct('Leche Serenisima', 'Leche serenisima 1lt', 250, "Sin imagen", "L222", 22)
    //con errores
    adminProductos.addProduct('Leche Serenisima', 'Leche serenisima 1lt', 250, "Sin imagen", 22)
    adminProductos.addProduct('Pepitos', 'galletitas pepitos 200grs', 230, "Sin imagen", "Z425", 8)
    //get products
    console.log(adminProductos.getProducts())
    //id correcto 
    adminProductos.getProductById(2)
    //id incorrecto 
    adminProductos.getProductById(4)