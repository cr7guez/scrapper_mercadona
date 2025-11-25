import puppeteer from 'puppeteer';
import fs from 'fs/promises';

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('https://tienda.mercadona.es/#content', { waitUntil: 'networkidle2' });

  await page.waitForSelector('[data-testid="product-cell"]');

  const productos = await page.evaluate(() => {
    // Selector al interior de cada producto
    const items = [...document.querySelectorAll('[data-testid="product-cell"]')];
    return items.map(item => {
      const nombre = item.querySelector('[data-testid="product-cell-name"]')?.innerText.trim() || '';
      const precio = item.querySelector('.product-priceunit-price[data-testid="product-price"]')?.innerText.trim() || '';
      const formato = item.querySelector('.product-format')?.innerText.trim() || '';
      // Selector mejorado para imagen: busca img con src dentro del producto
      const imagen = item.querySelector('img[src*="prod-mercadona.imgix.net"]')?.src || '';
      return { nombre, precio, formato, imagen };
    });
  });

  await fs.writeFile('products.json', JSON.stringify(productos, null, 2), 'utf-8');
  console.log(`Se guardaron ${productos.length} productos en products.json`);
  await browser.close();
})();
