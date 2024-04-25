#!/bin/bash
# send request to URL with curl, displays size of body of response
curl -s "$1" | wc -c
