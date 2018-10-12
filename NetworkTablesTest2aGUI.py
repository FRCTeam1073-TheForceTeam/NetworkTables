#!/usr/bin/env python
#
# This is a NetworkTables client (eg, the DriverStation/coprocessor side).
# You need to tell it the IP address of the NetworkTables server (the
# robot or simulator).
#
#

import sys
import time
from networktables import NetworkTables
import Tkinter

class simpleapp_tk(Tkinter.Tk):
    def __init__(self,parent):
    	Tkinter.Tk.__init__(self,parent)
    	self.parent = parent
    	self.initialize()

    def initialize(self):
	self.grid()

    	self.entryVariable = Tkinter.StringVar()
        self.entry = Tkinter.Entry(self,textvariable=self.entryVariable)
    	self.entry.grid(column=0,row=0,sticky='EW')
    	self.entry.bind("<Return>", self.OnPressEnter)
        self.entryVariable.set(u"Enter new time here and press enter.")

    	button = Tkinter.Button(self,text=u"Click me to get time !",
                                command=self.OnButtonClick)
    	button.grid(column=1,row=0)

        self.labelVariable = Tkinter.StringVar()
    	label = Tkinter.Label(self,textvariable=self.labelVariable,
                          	anchor="w",fg="white",bg="blue")
    	label.grid(column=0,row=1,columnspan=2,sticky='EW')
    	self.labelVariable.set(u"0")

    	self.grid_columnconfigure(0,weight=1)
    	self.resizable(True,False)
    	self.update()
    	self.geometry(self.geometry())       
    	self.entry.focus_set()
    	self.entry.selection_range(0, Tkinter.END)

    def OnButtonClick(self):
        time = sd.getNumber('Time', 'N/A');
	self.labelVariable.set( " time="+str(time) )
    	self.entry.focus_set()
    	self.entry.selection_range(0, Tkinter.END)

    def OnPressEnter(self,event):
	#self.labelVariable.set( self.entryVariable.get()+" (You pressed ENTER)" )
	time = int(self.entryVariable.get())
	sd.putNumber('Time', time);
    	self.entry.focus_set()
    	self.entry.selection_range(0, Tkinter.END)

# To see messages from networktables, you must setup logging
import logging
logging.basicConfig(level=logging.DEBUG)

if len(sys.argv) != 2:
    print("Error: specify an IP to connect to!")
    exit(0)

ip = sys.argv[1]

NetworkTables.initialize(server=ip)

sd = NetworkTables.getTable("Test")

#start the GUI
if __name__ == "__main__":
	app = simpleapp_tk(None)
	app.title('my application')
	app.mainloop()
