package org.camunda.demo.workers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class AllWorkers {


    private static final Logger LOGGER = LoggerFactory.getLogger(AllWorkers.class.getName());

    public static void main(String[] args) {

        LOGGER.info("working chargeAccount is beginning to poll for work.....");
        GenericWorker chargeAccountWorker = new GenericWorker("chargeAccount");
        chargeAccountWorker.work();

        LOGGER.info("working createAccount is beginning to poll for work.....");
        GenericWorker createAccountWorker = new GenericWorker("createAccount");
        createAccountWorker.work();

        LOGGER.info("working locateScooter is beginning to poll for work.....");
        GenericWorker locateScooterWorker = new GenericWorker("locateScooter");
        locateScooterWorker.work();

        LOGGER.info("working lockScooter is beginning to poll for work.....");
        GenericWorker lockScooterWorker = new GenericWorker("lockScooter");
        lockScooterWorker.work();

        LOGGER.info("working seedWallet is beginning to poll for work.....");
        GenericWorker seedWalletWorker = new GenericWorker("seedWallet");
        seedWalletWorker.work();

        LOGGER.info("working unlockScooter is beginning to poll for work.....");
        GenericWorker unlockScooterWorker = new GenericWorker("unlockScooter");
        unlockScooterWorker.work();

    }
}
