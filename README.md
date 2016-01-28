# Udacity FrontEnd Nanodegree P4
## Website Performance Optimization portfolio project

Demo live: [http://alessandroluciani.github.io/p4/](http://alessandroluciani.github.io/p4/)


### Information

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

### To install project

Some useful tips to help you get started:

* Check out the repository
* To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

* Open a browser and visit localhost:8080
* Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok http 8080
  ```

* Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)


### Actions on index.html (portfolio)

* css inlined and minified (style.css)
* css media print added for print.css (and minified)
* compressed all images used and saved locally (avoided src url requests)
* perfmatters(.js) in async mode
* moved after tag footer (inside body tag) the google analytics block 

[Pagespeed results obtained](https://developers.google.com/speed/pagespeed/insights/?url=alessandroluciani.github.io%2Fp4&tab=desktop)


### Actions on pizza.html (main(.js))
#### Resize pizza

* Splitted follow functions: changePizzaSizes, sizeSwitcher, determineDx, changeSliderLabel.
* Avoided all queryselector on domTree and replaced with better performance commands like getElementById and getElementsByClassName.
* Avoided read DOMdata commands inside 'for' cycles (like determineDx())
* Now resizePizzas result the main function for this feature

Values obtained in console.log during resizing Pizzas are 0.8-2.3 ms

#### Animation performance on scrolling

* At startUp of the page trying to calculate the number of pizzas to reduce the total number of pizzas (200 was the old value)
* Avoided all queryselector on domTree and replaced with better performance commands like getElementById and getElementsByClassName.
* Avoided read DOMdata commands inside 'for' cycles
* Used lastScrollY for calculate the phase
* Used requestAnimationFrame for a better sync with js animations.

Values obtained in console.log during animation are 0.5-1.5 ms
