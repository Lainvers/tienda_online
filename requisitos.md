# recuperar todos los productos

- url: GET/api/products
 -responder con status 200
 -respuesta debe tener formato JSON
 -respuesta debe tener un array de productos
# crear un producto

-url: Post/api/products
- responde con status 200
- respuesta debe tener formato JSon
- comprovar que tiene _id
comprovar si el producto en la BD tine el mismo nombre con el que lo hemos insertado

# Actualizar un producto
-objetivo : Lanzar una peticion pasndole el Id del producto a
editas los datos que quiero editar
-previo: necesito crear un objeto para poder editarlo a posteriori
-final: borraremos ese objeto 
-url:/api/products/:productID
 -Status 200 y Content-Type application/json
 -comprovamos que los capos que modificamos, realmente se modifica la BBDD

 
 CREAR LA URL/ api/products/:productId
 Metodo findByIdAndUpdate(ID, OBJ para editar)
 -¿de donde saco el ID?
 ¿de donde saco el objeto para editar?
 responder con un JSON con lo que devuelva el metodo anterior 
 !!!la ultima prueba falla!!!! 