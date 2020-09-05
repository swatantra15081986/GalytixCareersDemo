#!/bin/bash
echo "TIMESTAMP will be replace with random generated numbers in the file"
initialDate=`date | awk '{print $3,$2,$6}'`
#echo $initialDate
DATETIME=`date -j -f "%d %b %Y" "$initialDate" +%m\\\/%d\\\/%Y`
echo $DATETIME
sed -i -e "s/TEMP/$RANDOM/g" OrderFileUpload.csv
sed -i -e "s/DATETIME/$DATETIME/g" OrderFileUpload.csv
echo "Replacing content text completed and saved."

