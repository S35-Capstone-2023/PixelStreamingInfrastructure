#!/bin/bash
# Copyright Epic Games, Inc. All Rights Reserved.
BASH_LOCATION=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

# Custom function to parse arguments
parse_args() {
    while [ $# -gt 0 ]; do
        case "$1" in
            --WebSocketURL)
                if [ -n "$2" ] && [ ${2:0:1} != "-" ]; then
                    WebSocketURL="$2"
                    shift
                else
                    echo "Error: --WebSocketURL requires a value"
                    exit 1
                fi
                ;;
            *)
                # Store other arguments, if needed
                OTHER_ARGS+=("$1")
                ;;
        esac
        shift
    done
}


pushd "${BASH_LOCATION}" > /dev/null

source common_utils.sh

# Parse custom and other arguments
parse_args "$@"
use_args "${OTHER_ARGS[@]}"
use_args "$@"
call_setup_sh

process="${BASH_LOCATION}/node/lib/node_modules/npm/bin/npm-cli.js run start:default --"

# Include the WebSocketURL in the process command if it's provided
if [ ! -z "$WebSocketURL" ]; then
    process="$process --WebSocketURL=$WebSocketURL"
fi

pushd ../.. > /dev/null

echo ""
echo "Starting Matchmaker use ctrl-c to exit"
echo "-----------------------------------------"
echo ""

PATH="${BASH_LOCATION}/node/bin:$PATH"
start_process $process

popd > /dev/null # ../..

popd > /dev/null # BASH_SOURCE
