#!/bin/bash

# Initialize variables
max_attempts=30
wait_seconds=1
attempt_num=1

# Function to check the HTTP status
check_status() {
    status=$(curl -s http://localhost:8080/actuator/health | jq -r .status)
    echo $status
}

# Loop until the service is up or max attempts are reached
while [ $attempt_num -le $max_attempts ]
do
    ws_status=$(check_status)
    
    # Check if the HTTP status is 200
    if [ "$ws_status" == "UP" ]; then
        jq -n --arg ws_status "$ws_status" '{"ws_status": $ws_status}'
        break
    else
        sleep $wait_seconds
        ((attempt_num++))
    fi
done