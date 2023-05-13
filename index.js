const puppeteer = require("puppeteer")
console.log(puppeteer);
(async () => {
   const browser = await puppeteer.launch({ headless: false });
   const page = await browser.newPage();
   await page.goto("https://reg.msu.ac.th/registrar/home.asp");
   await page.waitForSelector("#menutive > a:nth-child(3)")
   await page.click("#menutive > a:nth-child(3)")
   await page.waitForSelector("#ASPxRoundPanel1_RPC > table > tbody > tr:nth-child(1) > td:nth-child(5) > input[type=TEXT]")
   await page.type("#ASPxRoundPanel1_RPC > table > tbody > tr:nth-child(1) > td:nth-child(5) > input[type=TEXT]", "64011212049", { delay: 50 })

   await page.type("#ASPxRoundPanel1_RPC > table > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=PASSWORD]:nth-child(1)", "0", { delay: 50 })

   await page.click("#ASPxRoundPanel1_RPC > table > tbody > tr:nth-child(3) > td:nth-child(2) > font > input[type=SUBMIT]") // login

   await page.click("#fancybox-close") // close windows


   await page.click("#menutive > a:nth-child(8)") // ค้นหารายวิชา
   await page.click("body > div.contenttive > div:nth-child(1) > div.main > div > table:nth-child(2) > tbody > tr:nth-child(5) > td:nth-child(2) > select") // จำนวนรายการที่ได้จากการค้นหาไม่เกิน 

   await page.click("body > div.contenttive > div:nth-child(1) > div.main > div > table:nth-child(2) > tbody > tr:nth-child(5) > td:nth-child(2) > select > option:nth-child(4)") //250

   await page.waitForSelector("body > div.contenttive > div:nth-child(1) > div.main > div > table:nth-child(2) > tbody > tr:nth-child(7) > td:nth-child(2) > table > tbody > tr > td:nth-child(4) > input[type=TEXT]:nth-child(2)") // ช่องค้นหา


   await page.type("body > div.contenttive > div:nth-child(1) > div.main > div > table:nth-child(2) > tbody > tr:nth-child(7) > td:nth-child(2) > table > tbody > tr > td:nth-child(4) > input[type=TEXT]:nth-child(2)", "1204**", { delay: 100 })//หรอกรหัสวิชา


   await page.click("body > div.contenttive > div:nth-child(1) > div.main > div > table:nth-child(2) > tbody > tr:nth-child(7) > td:nth-child(2) > table > tbody > tr > td:nth-child(4) > input[type=submit]:nth-child(4)") //ค้นหา

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