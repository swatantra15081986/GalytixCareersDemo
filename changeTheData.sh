#!/bin/bash
echo "TIMESTAMP will be replace with random generated numbers in the file"
#initialDate=`date | awk '{print $3,$2,$6}'`
#echo $initialDate
DATETIME=`date +"%m-%d-%y"`
echo $DATETIME
sed -i -e "s/TEMP/$RANDOM/g" data/WMS/$1/OrderFileUpload.csv
sed -i -e "s/DATETIME/$DATETIME/g" data/WMS/$1/OrderFileUpload.csv
echo "Replacing content text completed and saved."

