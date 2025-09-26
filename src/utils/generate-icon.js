import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __iconsDir = path.resolve(__dirname, '../components/ui/icons');

const generateExportLines = files => {
    return files.filter(file => file.endsWith('.tsx')).map(file => {
        const name = path.basename(file, '.tsx');
        return`export { default as ${name}} from './${name}';`;
    });
};

if(!fs.existsSync(__iconsDir)) {
    fs.mkdirSync(__iconsDir, { recursive: true });
} 

const files = fs.readdirSync(__iconsDir);
const exportLines = generateExportLines(files);

if(exportLines.length) {
    fs.writeFileSync(path.join(__iconsDir, 'index.ts'), exportLines.join('\n'));
} else {
    console.log('Nėra tsx komponentų!')
}
