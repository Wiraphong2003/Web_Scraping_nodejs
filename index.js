const puppeteer = require("puppeteer")
console.log(puppeteer);

async function scrape() {
   const browser = await puppeteer.launch();
   const page = await browser.newPage();
   await page.goto("https://www.oxfordlearnersdictionaries.com/wordlists/oxford3000-5000");
   for (let index = 1; index < 1000; index++) {
      let element = await page.waitForSelector(`#wordlistsContentPanel > ul > li:nth-child(${index})> a`)
      let text = await page.evaluate(element => element.textContent, element)

      let element1 = await page.waitForSelector(`#wordlistsContentPanel > ul > li:nth-child(${index}) > span`)
      let text1 = await page.evaluate(element1 => element1.textContent, element1)

      console.log(text + "\t" + text1);
   }
   await browser.close();
}
scrape()