# APP Market :computer: - Proyecto final backend Nodejs
# escalab :rocket:

## Primer paso
Para instalar las dependencias del __node_modules__
```javascript
npm i
```

## Crear la database en MongoDB y luego asociar el nombre en las variables.env
```javascript
DB_URL=mongodb://localhost/[nombre de la base de datos] en el proyecto lo llame restapis
```

## Para iniciar el proyecto
```javascript
npm start
```
## Notas
### Para Obtener el token
- [x] Primero se debe registrar
- [x] Segundo autenticarse con el login
- [x] Último, devolverá un token como respuesta 

### Para ambos endpoints
##### ObtenerClientes (GET http://localhost:5000/clientes)
##### ObtenerProductos (GET http://localhost:5000/productos)
- [x] En postman en **Headers**
- [x] **Key** = Authorization
- [x] **value** = Bearer "Aquí el Token"

## Screenshots de ayuda

![image](https://user-images.githubusercontent.com/39087254/103490803-1340a380-4dfd-11eb-961e-25034a471310.png)

![image](https://user-images.githubusercontent.com/39087254/103490833-53a02180-4dfd-11eb-86c9-eb47889a231a.png)

![image](https://user-images.githubusercontent.com/39087254/103490859-77636780-4dfd-11eb-92d4-5cc08e9839e1.png)

![image](https://user-images.githubusercontent.com/39087254/103490875-9104af00-4dfd-11eb-81c0-8637d6fb7279.png)

