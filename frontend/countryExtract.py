import json
import os

f = open("airports.json")
data = json.load(f)

uniqueCountries = []
for i in data:
    if(data[i]['country'] not in uniqueCountries):
        uniqueCountries.append(data[i]['country'])
print(sorted(uniqueCountries))