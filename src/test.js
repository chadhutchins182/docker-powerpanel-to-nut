const test = require('ava');
const pwr = require('./powerpanel/pwrstat');
var fs = require('fs');

test.beforeEach(t => {
    t.context = {
        pwrstatRaw: fs.readFileSync('./test/pwrstatraw.txt', 'utf8')
    };
});


test('Testing Raw pwrstat -status Parser', t => {
    const raw = pwr.parseUPSData(t.context.pwrstatRaw);

    if (raw instanceof pwr.pwrstat) {
        t.pass()
    } else {
        t.fail()
    }

});

test.skip('Testing getting UPS data', t => {
    const data = pwr.getUPSData();

    if (data !== null){
        t.pass()
    }else{
        t.fail()
    }

});
