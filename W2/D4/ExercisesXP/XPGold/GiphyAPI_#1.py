# Exercise 2: Giphy API #1
# Instruction
#
# You will use this Gif URL: https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key
# =hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
# Explanation of the Gif URL
#
# q Request Paramater: Search query term or phrase. We are searching for “hilarious” gifs
#
# rating Request Paramater: Filters results by specified rating. We are searching for Level 1 gifs.
#
# api_key Request Paramater : GIPHY API Key. Our API KEY is hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
# Fetch the giphs from the Gif URL provided above.

# import json
import requests

# 1. Use f-strings and variables to build the URL string we’re using for the fetch.
base_url = 'https://api.giphy.com/v1/gifs'
query = 'hilarious'
rating = 'g'
api_key = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
limit = 10
url = f'{base_url}/search?q={query}&rating={rating}&api_key={api_key}&limit={limit}'

# 2. If the status code is 200 return the result as a JSON object.
response = requests.get(url)

results = []
if response.status_code == 200:
    # print(json.dumps(response.json(), indent=2))
    results = response.json()
    # print(len(results['data']))
    filtered_results = []

    # 3. Only return gifs which have a height bigger then 100.
    # result['data'] = [{}], item = {}
    for item in results['data']:
        # item['images'] = {}
        # item['images']['original'] = {}
        # item['images']['original']['height'] = '100' <- str height
        if int(item['images']['original']['height']) > 100:
            filtered_results.append(item)

    # 4. Return the length of the object you received in the previous question.
    print(f"Number of gifs with height > 100: {len(filtered_results)}")

    for i, gif in enumerate(filtered_results[:10]):
        print(f"{i + 1}. {gif['url']}")
else:
    print(f'Request failed with status code {response.status_code}')
