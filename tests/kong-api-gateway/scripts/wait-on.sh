#!/bin/bash

# Initialize variables
max_attempts=10
wait_seconds=1
attempt_num=1

# Function to check the HTTP status
check_status() {
    response=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:8002)
    echo $response
}

# Loop until the service is up or max attempts are reached
while [ $attempt_num -le $max_attempts ]
do
    echo "Attempt $attempt_num of $max_attempts..."
    status=$(check_status)
    
    # Check if the HTTP status is 200
    if [ "$status" -eq 200 ]; then
        echo "Service is up!"
        break
    else
        echo "Service not ready yet. Waiting $wait_seconds seconds..."
        sleep $wait_seconds
        ((attempt_num++))
    fi
done

# Check if the maximum number of attempts was exceeded
if [ $attempt_num -gt $max_attempts ]; then
    echo "Failed to start service after $max_attempts attempts."
    exit 1
else
    # Continue with the rest of the script
    echo "Continuing with further operations..."
fi
