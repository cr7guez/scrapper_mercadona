# 🛒 Scraper de Novedades de Mercadona

Este proyecto es una aplicación que permite obtener y visualizar en todo momento las novedades de la tienda online de **Mercadona**. Esta diseñado con **NodeJs** y utiliza **Puppeteer** para hacer web scraping de los productos y **Express.js** para servir los datos en una API y en una interfaz web.

---

## 📌 Características

✅ Scraping automatizado de los productos más recientes de Mercadona.  
✅ Almacenamiento de los datos en un archivo `products.json`.  
✅ Interfaz web con un diseño similar al de Mercadona.  
✅ API disponible en `/products` para ver los datos en formato JSON.  

---

## 🚀 Instalación y Uso

### 1️⃣ Clonar el repositorio  
```bash
git clone https://github.com/tuusuario/scrapper_mercadona.git
cd scrapper_mercadona
```

### 2️⃣ Abrir el proyecto con Visual Studio Code
Si tienes Visual Studio Code instalado, puedes abrir el proyecto con el siguiente comando:
```bash
code .
```

### 3️⃣ Instalar las dependencias
Este proyecto utiliza Node.js y npm para gestionar las dependencias. Para instalar las dependencias, ejecuta:
```bash
npm i
```

### 4️⃣ Verificar instalación Puppeteer
Para asegurarte de que Puppeteer está instalado correctamente, ejecuta:
```bash
npm ls puppeteer
```
Si Puppeteer no está instalado, puedes agregarlo con:
```bash
npm install puppeteer
```

### 5️⃣ Ejecutar el proyecto
Una vez que las dependencias estén instaladas, puedes ejecutar el proyecto con el siguiente comando:
```bash
npm start
```

## 🧑‍💻 API
La API está disponible en la ruta /products y devuelve los productos en formato JSON.

Ejemplo de uso:
```bash
curl http://localhost:3000/products
```

## 📜 Tecnologías Usadas
- Node.js: Entorno de ejecución para JavaScript.
- Express.js: Framework para crear la API y servir la interfaz web.
- Puppeteer: Librería para hacer web scraping de los productos de Mercadona.
- JSON: Formato de almacenamiento para los productos obtenidos.

## ⚠️ Notas
- Asegúrate de tener Node.js instalado. Si no lo tienes, puedes descargarlo desde aquí.
- El proyecto realiza scraping de la página de Mercadona, por lo que es posible que el diseño y la estructura del sitio cambien, lo que podría requerir actualizar el código.
