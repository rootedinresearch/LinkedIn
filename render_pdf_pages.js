const puppeteer = require('puppeteer-core');
const path = require('path');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const pdfPath = path.join(__dirname, 'Greg_Hladik_CV.pdf');
const screenshotPath = path.join(__dirname, 'pdf_verification.png');

async function renderPdfScreenshot() {
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: true,
    args: ['--no-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 1600 });
  await page.goto(`file:///${pdfPath.replace(/\\/g, '/')}`, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: screenshotPath, fullPage: false });
  await browser.close();
  console.log(`Rendered PDF screenshot to ${screenshotPath}`);
}

renderPdfScreenshot().catch(err => console.error(err));
