import express from 'express';
import puppeteer from 'puppeteer';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener la ruta del directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001; // Usa el puerto que prefieras

const URL = "https://tienda.mercadona.es/";

async function scrapeData() {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.goto(URL, { waitUntil: "networkidle2" });

    const productsData = await page.evaluate(() => {
        const productElements = document.querySelectorAll('[data-testid="product-cell"]');
        return Array.from(productElements).map(productElement => ({
            title: productElement.querySelector('[data-testid="product-cell-name"]')?.textContent.trim() || "Sin título",
            price: productElement.querySelector('[data-testid="product-price"]')?.textContent.trim() || "Sin precio",
            image: productElement.querySelector('.product-cell__image-wrapper img')?.src || "Sin imagen"
        }));
    });

    await fs.writeFile('products.json', JSON.stringify(productsData, null, 2), 'utf-8');
    console.log("✅ Productos guardados en products.json");

    await browser.close();
}

// Servir archivos estáticos (como el index.html) desde la carpeta 'public'
app.use(express.static(path.join(__dirname)));

// Redirigir la raíz a /index.html (puedes cambiarlo si lo deseas)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});

// Ruta para ver los productos en el navegador
app.get('/products', async (req, res) => {
    try {
        const data = await fs.readFile('products.json', 'utf-8');
        res.json(JSON.parse(data));
    } catch (error) {
        res.status(500).json({ error: "Error al leer el archivo de productos." });
    }
});

app.listen(PORT, async () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    await scrapeData(); // Ejecutar el scraping al iniciar el servidor
});
