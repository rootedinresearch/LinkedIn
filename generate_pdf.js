const puppeteer = require('puppeteer-core');
const path = require('path');

const execPdfPath = path.join(__dirname, 'Greg_Hladik_Executive_Resume.pdf');
const cvPdfPath = path.join(__dirname, 'Greg_Hladik_CV.pdf');
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function generatePDFs() {
  console.log('Launching Edge via puppeteer-core for PDF generation...');
  
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: true,
    args: ['--no-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.goto('http://localhost:8000', { waitUntil: 'networkidle0' });

  // 1. Generate Abbreviated Executive Resume PDF
  console.log('Generating Abbreviated Executive Resume PDF...');
  await page.evaluate(() => {
    const selector = document.getElementById('view-mode-selector');
    if (selector) {
      selector.value = 'executive';
      selector.dispatchEvent(new Event('change'));
    }
  });

  const headerExec = `
    <div style="font-size: 8.5pt; font-family: 'Merriweather', serif, Georgia; font-weight: 600; width: 100%; text-align: center; color: #1E293B; border-bottom: 1px solid #CBD5E1; padding-bottom: 4px; margin: 0 15mm;">
      Dr. Greg Hladik, Ph.D. — Executive Resume
    </div>
  `;

  const footerExec = `
    <div style="font-size: 8pt; font-family: 'Inter', sans-serif, Arial; width: 100%; text-align: right; color: #475569; padding-right: 15mm;">
      <span class="pageNumber"></span> / <span class="totalPages"></span>
    </div>
  `;

  await page.pdf({
    path: execPdfPath,
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: headerExec,
    footerTemplate: footerExec,
    margin: { top: '22mm', bottom: '18mm', left: '15mm', right: '15mm' }
  });
  console.log(`Generated Executive Resume PDF: ${execPdfPath}`);

  // 2. Generate Full Academic CV PDF
  console.log('Generating Full Academic CV PDF...');
  await page.evaluate(() => {
    const selector = document.getElementById('view-mode-selector');
    if (selector) {
      selector.value = 'academic';
      selector.dispatchEvent(new Event('change'));
    }
  });

  const headerCv = `
    <div style="font-size: 8.5pt; font-family: 'Merriweather', serif, Georgia; font-weight: 600; width: 100%; text-align: center; color: #1E293B; border-bottom: 1px solid #CBD5E1; padding-bottom: 4px; margin: 0 15mm;">
      Dr. Greg Hladik, Ph.D. — Curriculum Vitae
    </div>
  `;

  await page.pdf({
    path: cvPdfPath,
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: headerCv,
    footerTemplate: footerExec,
    margin: { top: '22mm', bottom: '18mm', left: '15mm', right: '15mm' }
  });
  console.log(`Generated Academic CV PDF: ${cvPdfPath}`);

  await browser.close();
  console.log('All PDF generation tasks completed successfully!');
}

generatePDFs().catch(err => {
  console.error('PDF generation error:', err);
  process.exit(1);
});
