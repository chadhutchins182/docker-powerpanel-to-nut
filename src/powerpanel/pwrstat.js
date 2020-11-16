

class pwrstat {

    constructor(state, supply, uVoltage, oVoltage, capacity, runtime, load, testresult, lastevent) {
        this.STATE = state
        this.SUPPLY = supply
        this.UVOLTAGE = uVoltage
        this.OVOLTAGE = oVoltage
        this.BATTERYCAPACITY = capacity
        this.RUNTIME = runtime
        this.LOAD = load
        this.TESTRESULT = testresult
        this.LASTPOWEREVENT = lastevent
    }


}

let getUPSData = function getUPSData(){
    
}



/**
 * 
 * @param {*} upsdata 
 */
let parseUPSData = function parseUPSData(upsdata) {

    var state;
    var supply;
    var uVoltage;
    var oVoltage;
    var capacity;
    var runtime;
    var load;
    var testresult;
    var lastevent;

    var lines = String(upsdata).split("\n");

    for (var i = 4; i < lines.length; i++) {

        if (i == 9) {
            //console.log("skip");
        } else {
            var line = lines[i].split(". ");
            var st = line[0].replace(/\./g, '').trim();
            //console.log("LineA: "+line[0].replace(/\./g,'').trim()+" LineB: "+line[1]+" Length: "+line.length);
            switch (st) {

                case "State":
                    state = line[1];
                    break;

                case "Power Supply by":
                    supply = line[1];
                    break;

                case "Utility Voltage":
                    uVoltage = line[1];
                    break;

                case "Output Voltage":
                    oVoltage = line[1];
                    break;

                case "Battery Capacity":
                    capacity = line[1];
                    break;

                case "Remaining Runtime":
                    runtime = line[1];
                    break;

                case "Load":
                    load = line[1];
                    break;

                case "Test Result":
                    testresult = line[1];
                    break;

                case "Last Power Event":
                    lastevent = line[1];
                    break;
            }
        }
    }

    const obj = new pwrstat(state,
        supply,
        uVoltage,
        oVoltage,
        capacity,
        runtime,
        load,
        testresult,
        lastevent);

    return obj;

}


module.exports.parseUPSData = parseUPSData;
module.exports.pwrstat = pwrstat;