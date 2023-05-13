const puppeteer = require("puppeteer")
console.log(puppeteer);

async function scrape() {
   const browser = await puppeteer.launch();
   const page = await browser.newPage();
   await page.goto("http://reg.msu.ac.th/registrar/class_info_1.asp?avs1006135491=4&backto=enroll");

   let element = await page.waitForSelector("body > div.contenttive > div:nth-child(1) > div.main > div > table:nth-child(6) > tbody > tr:nth-child(4) > td:nth-child(2) > a")

   let text = await page.evaluate(element => element.textContent, element)
   console.log(text);
   await browser.close();
}
scrape()