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

client.subscribe("decide", async function ({task, taskService}) {

    const processVariables = new Variables();

    // have the workers pause for 0 - 8 seconds.
    // const randomNum = Math.trunc(Math.random() * 8000);
    // console.log('..._decide topic_ worker waits for ' + randomNum + ' milliseconds...');
    // await sleep(randomNum);

    console.log("......picking up work for 'decide' topic");

    // randomize true or false for "lime" variable
    const lime = Math.random() >= 0.5;

    // add the variable to the collection
    processVariables.set("lime", lime);

    console.log("......finishing up 'decide' topic work");

    // complete the task in Camunda Engine via the client API
    await taskService.complete(task, processVariables);

});

client.subscribe("lime", async function ({task, taskService}) {

    // have the workers pause for 0 - 8 seconds.
    // const randomNum = Math.trunc(Math.random() * 8000);
    // console.log('..._decide topic_ worker waits for ' + randomNum + ' milliseconds...');
    // await sleep(randomNum);

    const processVariables = new Variables();

    console.log("......picking up work for 'lime' topic");
    console.log("I PICKED LIME!!");
    console.log("......finishing up 'lime' topic work");

    // complete the task in Camunda Engine via the client API
    await taskService.complete(task, processVariables);

});

client.subscribe("lyft", async function ({task, taskService}) {

    // have the workers pause for 0 - 8 seconds.
    // const randomNum = Math.trunc(Math.random() * 8000);
    // console.log('..._decide topic_ worker waits for ' + randomNum + ' milliseconds...');
    // await sleep(randomNum);

    const processVariables = new Variables();

    console.log("......picking up work for 'lyft' topic");
    console.log("I PICKED LYFT!!");
    console.log("......finishing up 'lyft' topic work");

    // complete the task in Camunda Engine via the client API
    await taskService.complete(task, processVariables);

});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}