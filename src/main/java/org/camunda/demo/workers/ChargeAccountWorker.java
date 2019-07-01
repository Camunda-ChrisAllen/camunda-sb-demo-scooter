package org.camunda.demo.workers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ChargeAccountWorker {

    private static final String TOPIC_NAME = "chargeAccount";
    private static final Logger LOGGER = LoggerFactory.getLogger(ChargeAccountWorker.class.getName());

    public static void main(String[] args) {

        LOGGER.info("working " + TOPIC_NAME + " is beginning to poll for work.....");
        GenericWorker worker = new GenericWorker(TOPIC_NAME);
        worker.work();

    }
}
