const puppeteer = require("puppeteer")
console.log(puppeteer);
(async () => {
   const browser = await puppeteer.launch({ headless: false });
   const page = await browser.newPage();
   await page.goto("https://reg.msu.ac.th/registrar/home.asp");
   await page.waitForSelector("#menutive > a:nth-child(3)")
   await page.click("#menutive > a:nth-child(3)")
   await page.waitForSelector("#ASPxRoundPanel1_RPC > table > tbody > tr:nth-child(1) > td:nth-child(5) > input[type=TEXT]")
   await page.type("#ASPxRoundPanel1_RPC > table > tbody > tr:nth-child(1) > td:nth-child(5) > input[type=TEXT]", "64011212049", { delay: 100 })
   await page.type("#ASPxRoundPanel1_RPC > table > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=PASSWORD]:nth-child(1)", "0", { delay: 100 })
   await page.click("#ASPxRoundPanel1_RPC > table > tbody > tr:nth-child(3) > td:nth-child(2) > font > input[type=SUBMIT]")
   await page.click("#fancybox-close")

})();


// async function scrape() {
//    const browser = await puppeteer.launch({headless:false});
//    const page = await browser.newPage();
//    await page.goto("https://reg.msu.ac.th/registrar/home.asp");

//    await page.waitForSelector("#menutive > a:nth-child(3)")
//    await page.click("#menutive > a:nth-child(3)")
   // for (let index = 1; index < 1000; index++) {
   //    let element = await page.waitForSelector(`#wordlistsContentPanel > ul > li:nth-child(${index})> a`)
   //    let text = await page.evaluate(element => element.textContent, element)

   //    let element1 = await page.waitForSelector(`#wordlistsContentPanel > ul > li:nth-child(${index}) > span`)
   //    let text1 = await page.evaluate(element1 => element1.textContent, element1)

   //    console.log(text + "\t" + text1);
   // }
   // await browser.close();
// }
// scrape()