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

El API se encuentra alojada en vercel
https://api-market-bivz.vercel.app/

Se uso **Mongo Atlas** para gestionar la base de datos en la nube.  

---
### Rutas 
### Product 
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

### Objetivos del Taller:

Comprender los conceptos básicos de una API RESTful.
Aprender a implementar rutas y endpoints en una API.
Conectar y gestionar una base de datos utilizando MongoDB Atlas.
Realizar operaciones CRUD a través de la API.
Familiarizarse con las mejores prácticas en el diseño y desarrollo de APIs.

### Esquema 1 
![Vistaprevia](https://github.com/SebastianL2/api-market/blob/main/IMG/Diagrama%20en%20blanco%20(15).png?raw=true)
### Esquema 2 . de productos
![Vistaprevia](https://github.com/SebastianL2/api-market/blob/main/IMG/Diagrama%20en%20blanco%20(11).png?raw=true)


