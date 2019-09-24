import csv
import json
csvPath = "extended_house_ads_info.csv"
jsonPath = "data.json"
data = {"data": []}

with open(csvPath) as csvFile:
    csvReader = csv.DictReader(csvFile)
    for rows in csvReader:
        data["data"].append(rows)

with open(jsonPath, "w", encoding='utf-8') as jsonFile:
    jsonFile.write(json.dumps(data, indent=4, ensure_ascii=False))
