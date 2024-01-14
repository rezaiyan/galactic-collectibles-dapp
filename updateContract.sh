#!/bin/bash

# Remove the destination directory if it exists
rm -rf ./app/src/contracts

# Copy the directory
cp -rf artifacts/contracts app/src/
