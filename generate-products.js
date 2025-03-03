import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const productsPath = path.join(__dirname, "products.json");

// Verificar si el archivo ya existe
if (!fs.existsSync(productsPath)) {
    fs.writeFileSync(productsPath, JSON.stringify([], null, 2), "utf8");
    console.log("✅ Archivo products.json generado correctamente (vacío).");
} else {
    console.log("📂 Archivo products.json ya existe, no se sobrescribió.");
}
