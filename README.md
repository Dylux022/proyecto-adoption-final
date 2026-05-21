# Proyecto Adoption Final

Proyecto backend desarrollado con Node.js y Express para la entrega final del curso.

## Tecnologías utilizadas

- Node.js
- Express
- Mocha
- Chai
- Supertest
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

## GET by ID

```http
GET /api/adoptions/:id
```

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

## PUT

```http
PUT /api/adoptions/:id
```

## DELETE

```http
DELETE /api/adoptions/:id
```

---

# Tests funcionales

Ejecutar tests:

```bash
npm test
```

Resultado esperado:

```txt
6 passing
```

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

## Ejecutar contenedor

```bash
docker run -p 8080:8080 proyecto-adoption-final:1.0.0
```

## Probar contenedor

```bash
curl http://localhost:8080/api/adoptions
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
│   ├── app.js
│   └── server.js
│
├── test/
│   └── adoption.router.test.js
│
├── Dockerfile
├── package.json
├── .dockerignore
├── .gitignore
└── README.md
```

---

# Autor

Dylan Cisneros - Dylux022