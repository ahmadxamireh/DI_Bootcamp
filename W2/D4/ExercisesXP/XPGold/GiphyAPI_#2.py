# Exercise 3: Giphy API #2
# Instructions
# Hint: For this exercise, You will work with this part of the documention
# You will use this API KEY: hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
#
# Create a small Python program which asks the user for a term or phrase and returns all the relevant gifs. (Example:
# all the “hilarious” gifs)
# If the term or phrase doesn’t exist or if the user didn’t enter a correct term or phrase, return the trending gifs
# of the day and a message stating that you couldn’t find the requested term or phrase.
# Note from the documentation: GIPHY Trending returns a list of the most relevant and engaging content each and
# every day.
import requests


def url_builder(perform: str = 'search', search_term: str = 'hilarious'):
    """
    Builds and returns a URL for the Giphy API. The URL is constructed based on
    the specified operation type (`perform`) and search term (`search_term`).
    Optional parameters include the rating and result limit.

    The function utilizes a predefined base URL, API key, and other fixed
    parameters. By default, it performs a search with the term "hilarious" if
    no arguments are provided.

    :param perform: Specifies the type of operation to perform. Defaults to 'search'.
                    This corresponds to the API operation endpoint, such as search or trending.
    :type perform: str
    :param search_term: Represents the query or term to be used for searching Giphy-related
                        content. Defaults to 'hilarious'. The function encodes the term
                        into the URL and processes it appropriately.
    :type search_term: str
    :return: A fully qualified Giphy API URL string for performing the specified
             operation with the given search term, built with hardcoded parameters
             for rating, API key, and limit.
    :rtype: str
    """
    base_url = 'https://api.giphy.com/v1/gifs'
    query = search_term
    rating = 'g'
    api_key = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
    limit = 10
    url = f'{base_url}/{perform}?q={query}&rating={rating}&api_key={api_key}&limit={limit}'
    return url


def fetch_gifs(query):
    """
    Fetches GIFs based on the given search query and prints their titles and URLs.
    If no results are found, it defaults to fetching and printing trending GIFs.
    Handles the HTTP GET request to retrieve GIF data from an external API.

    :param query: The search term used to query GIFs
    :type query: str
    :return: None
    """
    url = url_builder(search_term=query)
    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        if data['data']:  # not empty
            print(f'\nGIFs for \'{query}\':')
            for i, gif in enumerate(data['data']):
                print(f'{i + 1}. {gif['title']}, link: {gif['url']}')
        else:
            print(f'\n❌ No results for \'{query}\'. Showing trending gifs instead:')
            fetch_trending()
    else:
        print(f'\nFailed to fetch data. Status code: {response.status_code}')


def fetch_trending():
    """
    Fetch and display trending GIFs by making an HTTP GET request to the appropriate
    endpoint. Requests the trending GIFs using the URL generated by the
    `url_builder` function, parses the JSON response to extract and print the title
    and link of each GIF. If the request fails, an error message with the
    corresponding status code is displayed.

    :return: None
    """
    trending_url = url_builder(perform='trending')
    response = requests.get(trending_url)

    if response.status_code == 200:
        data = response.json()
        print('\nTrending GIFs:')
        for i, gif in enumerate(data['data']):
            print(f'{i + 1}. {gif['title']}, link: {gif['url']}')
    else:
        print(f'\nFailed to fetch trending gifs. Status code: {response.status_code}')


def main():
    term = input('Enter a search term or phrase for GIFs: ').strip()
    if term:
        fetch_gifs(term)
    else:
        print('You must enter a valid term. Showing trending gifs instead.')
        fetch_trending()


main()
