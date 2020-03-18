'''
This program emits GPS location data to our server.

If a device is moving, we continually emit data.
If a device is stationary, we emit data every 5 minutes.

We utilize Reactive programming paradigms to build our program.
Our program is a stream of data emissions, we can use operators to 
transmutate this stream.
'''

import requests
import rx

from requests.auth import HTTPBasicAuth
from rx import operators as ops

# Configuration info, later on these would be environment variables.
serverEndpoint = 'https://atlasproject.ngrok.io/device-coms/testing'
basicAuthUser = ''
basicAuthPassword = ''

# source = rx.of("Alpha", "Beta", "Gamma", "Delta", "Epsilon")

# composed = source.pipe(
# 	ops.map(lambda s: len(s)),
# 	ops.filter(lambda i: i >= 5)
# )
# composed.subscribe(lambda value: print("Received {0}".format(value)))

def sendData(data):
	requests.post(serverEndpoint, data, auth=HTTPBasicAuth(basicAuthUser, basicAuthPassword))
