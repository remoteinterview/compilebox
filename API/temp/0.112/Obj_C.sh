#!/bin/bash

gcc $1 -I/usr/include/GNUstep -L/usr/lib/GNUstep -lobjc -lgnustep-base -Wall
