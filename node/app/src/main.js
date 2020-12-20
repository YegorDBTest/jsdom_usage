const { JSDOM } = require("jsdom");


async function handle() {
  let dom = await JSDOM.fromFile("/app/src/test.html", {
    runScripts: "dangerously",
  });
  console.log('dom.window.TEST_DATA', dom.window.TEST_DATA);
}


handle();
