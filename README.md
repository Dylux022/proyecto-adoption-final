# Proyecto Adoption Final

Proyecto backend desarrollado con Node.js y Express para la entrega final del curso.

El proyecto implementa tests funcionales completos sobre el router `adoption.router.js`, utilizando mocks y stubs con Sinon para aislar dependencias externas.

Además, el proyecto fue dockerizado y publicado en DockerHub.

---

# Tecnologías utilizadas

- Node.js
- Express
- Mocha
- Chai
- Supertest
- Sinon
- Docker

---

# Instalación del proyecto

Clonar repositorio:

```bash
git clone https://github.com/Dylux022/proyecto-adoption-final.git
```

Entrar a la carpeta:

```bash
cd proyecto-adoption-final
```

Instalar dependencias:

```bash
npm install
```

---

# Ejecutar proyecto

Modo desarrollo:

```bash
npm run dev
```

Modo producción:

```bash
npm start
```

Servidor:

```txt
http://localhost:8080
```

---

# Endpoints disponibles

## GET

```http
GET /api/adoptions
```

---

## GET by ID

```http
GET /api/adoptions/:id
```

---

## POST

```http
POST /api/adoptions
```

Body ejemplo:

```json
{
  "pet": "Firulais",
  "owner": "Dylan"
}
```

---

## PUT

```http
PUT /api/adoptions/:id
```

---

## DELETE

```http
DELETE /api/adoptions/:id
```

---

# Tests funcionales

Los tests funcionales fueron desarrollados utilizando:

- Mocha
- Chai
- Supertest
- Sinon

Sinon fue utilizado para crear mocks/stubs sobre el servicio de adopciones y aislar dependencias externas.

---

## Ejecutar tests

```bash
npm test
```

Resultado esperado:

```txt
6 passing
```

---

## Cobertura de tests

Los tests cubren:

- GET de adopciones
- GET por ID
- POST exitoso
- POST con error de validación
- PUT
- DELETE

---

# Docker

## Construir imagen

```bash
docker build -t proyecto-adoption-final:1.0.0 .
```

---

## Ejecutar contenedor

```bash
docker run -p 8080:8080 proyecto-adoption-final:1.0.0
```

---

## Probar contenedor

```bash
curl http://localhost:8080/api/adoptions
```

Resultado esperado:

```json
{"status":"success","message":"Listado de adopciones"}
```

---

# DockerHub

Imagen pública:

https://hub.docker.com/r/dylux022/proyecto-adoption-final

---

# GitHub

Repositorio:

https://github.com/Dylux022/proyecto-adoption-final

---

# Dockerfile utilizado

```dockerfile
FROM node:24-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY src ./src

EXPOSE 8080

CMD ["npm", "start"]
```

---

# Estructura del proyecto

```txt
proyecto-adoption-final/
│
├── src/
│   ├── routes/
│   │   └── adoption.router.js
│   ├── services/
│   │   └── adoption.service.js
│   ├── app.js
│   └── server.js
│
├── test/
│   └── adoption.router.test.js
│
├── Dockerfile
├── .dockerignore
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

# Autor

Dylan Cisneros - Dylux022