package org.camunda.demo.workers;

import org.camunda.bpm.client.ExternalTaskClient;
import org.camunda.bpm.client.backoff.ExponentialBackoffStrategy;
import org.camunda.bpm.client.topic.TopicSubscriptionBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.HashMap;
import java.util.Map;

public class ScootWorker {

    private static final Logger LOGGER = LoggerFactory.getLogger(ScootWorker.class.getName());

    public static void main(String[] args) {

        // bootstrap the client

        // https://github.com/camunda/camunda-external-task-client-java/blob/master/client/src/main/java/org/camunda/bpm/client/backoff/ExponentialBackoffStrategy.java

        ExternalTaskClient client = ExternalTaskClient.create()
                .baseUrl("http://localhost:8080/rest")
                .backoffStrategy(new ExponentialBackoffStrategy(0, 0, 0))
                .asyncResponseTimeout(120000)
                .lockDuration(1000)
                .maxTasks(1)
                .build();

        // subscribe to the topic
        TopicSubscriptionBuilder subscriptionBuilder = client.subscribe("scoot");

        subscriptionBuilder.handler((externalTask, externalTaskService) -> {

            LOGGER.info("...worker 'scoot' picks up work for topic...");

            Map<String, Object> variables = new HashMap<String, Object>();

            externalTaskService.complete(externalTask, variables);

        }).open();

    }
}