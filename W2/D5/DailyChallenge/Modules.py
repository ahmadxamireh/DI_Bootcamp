# Daily Challenge: Modules
#
# What You will learn:
# OOP
# Modules
#
#
# Instructions:
# Using the requests and time modules, create a function which returns the amount of time it takes a webpage to load
# (how long it takes for a complete response to a request).
# Test your code with multiple sites such as google, ynet, imdb, etc.
from time import time
import requests


def timer():
    """
    Returns the current time in seconds since the Epoch.

    This function provides the current time as returned by the `time`
    module. The Epoch is the point where the time starts.

    :return: Current time in seconds since the Epoch
    :rtype: float
    """
    return time()  # Return the current time in seconds since the Epoch


def load_a_website(link: str) -> float:
    """
    Measures the time taken to load a website by sending an HTTP GET request to the provided link.
    Handles HTTP or network-related errors gracefully and returns -1 in such cases.

    :param link:
        The URL of the website to load.
    :type link: str
    :return:
        The time taken, in seconds, to load the website if successful.
        Returns -1 if the website could not be loaded.
    :rtype: float
    """
    start = timer()
    try:
        response = requests.get(link, timeout=5)  # avoids long delays for unresponsive sites
        response.raise_for_status()  # Raise exception for HTTP errors
    except requests.RequestException as e:
        print(f"Failed to load {link}: {e}")
        return -1

    end = timer()
    return round(end - start, 2)


def main():
    """
    Executes the main workflow to evaluate the load times of predefined websites.

    The function iterates over a list of URLs and utilizes the `load_a_website`
    function to measure the time taken to load each website. If the loading
    duration is valid (not equal to -1), the function outputs the time taken for
    each website.

    :return: None
    """
    links = ["https://en.wikipedia.org/", "https://www.google.com/", "https://www.yahoo.com/"]
    for link in links:
        time_to = load_a_website(link)
        if time_to == -1:
            pass
        else:
            print(f'It took {time_to} seconds to load {link}')


if __name__ == '__main__':
    main()
