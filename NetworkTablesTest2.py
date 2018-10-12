#!/usr/bin/env python
#
# This is a NetworkTables client (eg, the DriverStation/coprocessor side).
# You need to tell it the IP address of the NetworkTables server (the
# robot or simulator).
#
# When running, this will read and print the value of 'Time'

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
while True:
    print('gotting Time:', sd.getNumber('Time', 'N/A'))
    time.sleep(.1)
