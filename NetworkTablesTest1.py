#!/usr/bin/env python
#
# This is a NetworkTables client (eg, the DriverStation/coprocessor side).
# You need to tell it the IP address of the NetworkTables server (the
# robot or simulator).
#
# When running, this will continue incrementing the value 'Time', and the
# value should be visible to other networktables clients and the robot.
#

import sys
import time
from networktables import NetworkTables

# To see messages from networktables, you must setup logging
import logging
logging.basicConfig(level=logging.DEBUG)
if len(sys.argv) != 2:
    print("Error: specify an IP to connect to!")
    exit(0)
ip = sys.argv[1]
NetworkTables.initialize(server=ip)
sd = NetworkTables.getTable("Test")
i = 0
while True:
    print('putting time:', i)
    sd.putNumber('Time', i)
    time.sleep(1)
    i += 1
