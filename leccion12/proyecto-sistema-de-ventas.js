class Producto{
    static contadorProductos = 0;

    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }
    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio;
    }
    toString(){
        return `${this._idProducto} ${this._nombre} ${this._precio}`;
    }
}


class Orden{
    static contadorOrdenes = 0;
    static MAXProducto = 5;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        let Producto = ['pan', 'queso'];
        contadorProductosAgregados = 0;
        const MAXProducto = 5;
    }
   agregarProducto(){
    return this._nombre + ' ' + this ._precio + this.contadorProductosAgregados
   }
   calcularTotal(){
       return this._idProducto + ' ' + this._idOrden;
   }
   toString(){
       return this.calcularTotal;
   }
}






