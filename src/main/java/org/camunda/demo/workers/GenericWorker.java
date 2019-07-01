package org.camunda.demo.workers;

import org.camunda.bpm.client.ExternalTaskClient;
import org.camunda.bpm.client.topic.TopicSubscriptionBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.HashMap;
import java.util.Map;

public class GenericWorker {

    private String topicName = "unknown";
    private Logger LOGGER = LoggerFactory.getLogger(GenericWorker.class.getName());

    public GenericWorker(String topicName){
        this.topicName = topicName;
    }

    public void work(){

        // bootstrap the client
        ExternalTaskClient client = ExternalTaskClient.create()
                .baseUrl("http://localhost:8080/rest")
//                .asyncResponseTimeout(5000)
                .lockDuration(1000)
//                .maxTasks(20)
                .build();

        // subscribe to the topic
        TopicSubscriptionBuilder subscriptionBuilder = client.subscribe(topicName);

        subscriptionBuilder.handler((externalTask, externalTaskService) -> {

            LOGGER.info("...worker " + topicName + " receives work...");

            Map<String, Object> variables = new HashMap<String, Object>();

            // assign random values to scootNow and shortRide

            if (Math.random() < 0.5) {
                variables.put("scootNow", true);
            } else {
                variables.put("scootNow", false);
            }

            if (Math.random() < 0.5) {
                variables.put("shortRide", true);
            } else {
                variables.put("shortRide", false);
            }

            if (Math.random() < 0.5) {
                variables.put("batteryLow", true);
            } else {
                variables.put("batteryLow", false);
            }

            externalTaskService.complete(externalTask, variables);

        }).open();
    }
}
