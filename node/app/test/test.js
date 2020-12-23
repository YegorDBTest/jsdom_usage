const assert = require('assert');
const { JSDOM } = require("jsdom");


describe('Set global variable with jsdom', function() {
  it('should check global variable value', async function() {
    let dom = await JSDOM.fromFile("/app/test/test.html", {
      runScripts: "dangerously",
    });
    assert.equal(dom.window.TEST_DATA, 123);
  });
});
