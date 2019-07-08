/**
 * By running this node js app you will subscribe to multiple topics and start
 * completing tasks
 *
 */


const {Client, logger, Variables} = require("camunda-external-task-client-js");

// configuration for the Client:
// - 'baseUrl': url to the Workflow Engine
// - 'logger': utility to automatically log important events
const config = {baseUrl: "http://localhost:8080/rest", use: logger};

// create a Client instance with custom configuration
const client = new Client(config);

client.subscribe("chargeAccount", async function ({task, taskService}) {

    const processVariables = new Variables();

    const randomNum = Math.trunc(Math.random() * 8000);

    console.log('...waiting for ' + randomNum + ' milliseconds...');
    await sleep(randomNum);

    console.log("......picking up work for chargeAccount");

    console.log("......finishing up chargeAccount");
    await taskService.complete(task, processVariables);

});

client.subscribe("createAccount", async function ({task, taskService}) {

    const processVariables = new Variables();

    const randomNum = Math.trunc(Math.random() * 8000);

    console.log('...waiting for ' + randomNum + ' milliseconds...');
    await sleep(randomNum);

    console.log("......picking up work for createAccount");

    console.log("......finishing up createAccount");

    await taskService.complete(task, processVariables);

});

client.subscribe("locateScooter", async function ({task, taskService}) {

    const processVariables = new Variables();

    const randomNum = Math.trunc(Math.random() * 8000);

    console.log('...waiting for ' + randomNum + ' milliseconds...');
    await sleep(randomNum);

    console.log("......picking up work for locateScooter");

    console.log("......finishing up locateScooter");

    await taskService.complete(task, processVariables);

});

client.subscribe("lockScooter", async function ({task, taskService}) {

    const processVariables = new Variables();

    const randomNum = Math.trunc(Math.random() * 8000);

    console.log('...waiting for ' + randomNum + ' milliseconds...');
    await sleep(randomNum);

    console.log("......picking up work for lockScooter");

    if (Math.random() < 0.5) {
        processVariables.set("shortRide", true);
    } else {
        processVariables.set("shortRide", false);
    }

    if (Math.random() < 0.5) {
        processVariables.set("batteryLow", true);
    } else {
        processVariables.set("batteryLow", false);
    }

    console.log("......finishing up lockScooter");
    await taskService.complete(task, processVariables);

});

client.subscribe("seedWallet", async function ({task, taskService}) {

    const processVariables = new Variables();

    const randomNum = Math.trunc(Math.random() * 8000);

    console.log('...waiting for ' + randomNum + ' milliseconds...');
    await sleep(randomNum);

    console.log("......picking up work for seedWallet");

    if (Math.random() < 0.5) {
        processVariables.set("scootNow", true);
    } else {
        processVariables.set("scootNow", false);
    }

    console.log("......finishing up seedWallet");
    await taskService.complete(task, processVariables);

});

client.subscribe("unlockScooter", async function ({task, taskService}) {

    const processVariables = new Variables();

    const randomNum = Math.trunc(Math.random() * 8000);

    console.log('...waiting for ' + randomNum + ' milliseconds...');
    await sleep(randomNum);

    console.log("......picking up work for unlockScooter");

    console.log("......finishing up unlockScooter");
    await taskService.complete(task, processVariables);

});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}