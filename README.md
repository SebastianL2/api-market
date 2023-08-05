# API RESTful 
### Taller Colaborativo - Electiva II

##### Integrantes de grupo
- [Sebastan Cely Peña]


---
#### Instrucciones al clonar el API
Instalar las depencias necesarias 👇🏻

npm install

Ejecutar la API de forma local 👇🏻
bash
npm start

o en modo desarrollo 👇🏻
```bash
npm run dev
```
El **puerto** por el que corre el API es el `5000`

Tambien el API se encuentra alojada en Heroku 
[https://api-product-electiva.herokuapp.com/](https://api-product-electiva.herokuapp.com/)

Se uso **Mongo Atlas** para gestionar la base de datos en la nube.  

---
### Rutas 🛣️
### Product 🥃🍊🍦🍔
- `/api/product/` Tipo `GET` => Muestra todos los productos disponibles.
- `/api/product/` Tipo `POST` => Permite agregar un nuevo producto. Ejemplo 👇🏻
```json
{
"name":"dads",
"description":"asdada",
"value":"321",
"dateExpired":"4/08/2023"
}
```
- `/api/product/:id` Tipo `GET` => Muestra un solo producto por el `id` generado en mongo.
-  `/api/product/:id` Tipo `DELETE` => Permite eliminar un producto de la base de datos.

