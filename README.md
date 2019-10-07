# Restaurant Review App

## Project Overview: Stage 1

For the **Restaurant Reviews** projects, I had to incrementally convert a static webpage to a mobile-ready web application. In **Stage One**,I had to convert a static design that lacked accessibility to be responsive on different sized displays and accessible for screen reader use. In the end I had to add a service worker to begin the process of creating a seamless offline experience for your users.

### How to view the web application?

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

    * In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
   * Note -  For Windows systems, Python 3.x is installed as `python` by default. To start a Python 3.x server, you can simply enter `python -m http.server 8000`.
2. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). I generated a token at [Mapbox](https://www.mapbox.com/) and put it into the code. Mapbox is free to use, and does not require any payment information.


