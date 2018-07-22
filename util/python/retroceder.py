import sys
import time
import RPi.GPIO as GPIO

#mode=GPIO.getmode()

"""
'Forward=26
Backward=20
"""
sleeptime=1

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
##MOTOR 1
GPIO.setup(9, GPIO.OUT)
GPIO.setup(10, GPIO.OUT)

##MOTOR 2
GPIO.setup(2, GPIO.OUT)
GPIO.setup(3, GPIO.OUT)


GPIO.output(2, GPIO.LOW)
GPIO.output(3, GPIO.HIGH)

GPIO.output(9, GPIO.LOW)
GPIO.output(10, GPIO.HIGH)


print("Retroceder")