import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'src/pages');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  const badPattern = /{?\/\* LOGO_START \*\/}?\s*<img src="\/teddylogo\.png" alt="Teddy Cabs Logo" className="w-8 h-8 rounded object-cover" \/>\s*<\/div>/g;
  const badPattern2 = /<!-- LOGO_START -->\s*<img src="\/teddylogo\.png" alt="Teddy Cabs Logo" className="w-8 h-8 rounded object-cover" \/>\s*<\/div>/g;
  
  content = content.replace(badPattern, '<img src="/teddylogo.png" alt="Teddy Cabs Logo" className="w-8 h-8 rounded object-cover" />');
  content = content.replace(badPattern2, '<img src="/teddylogo.png" alt="Teddy Cabs Logo" className="w-8 h-8 rounded object-cover" />');
  
  fs.writeFileSync(filePath, content);
}
console.log("Done");
