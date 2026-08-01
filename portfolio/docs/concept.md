I want to create a portfolio website.

#Visually

I want it to embrace the web, it will have tabs, but it must feel like a one page app using the view transitions.
The website is a visual refference to a map with named dividers. When selecting a division, the ones under the selected one should shuffle to the bottom of the page. The illustrations to visualise this is in the ./sketch folder.


When opening a tab, the view should always be the same. It should load a carousel from which the first slide should be taking in 90% of the page and contains mostly text, but in general just a html content. All other parts should be images.

#Technically

The lib to use for loading the carousel should be: https://www.embla-carousel.com/.

The font used should be google font Hanken grotesk: https://fonts.google.com/specimen/Hanken+Grotesk?query=grotesk&preview.script=Latn.

The website should be a static site. 
I will later provide images in all folders matching the tabs on the webiste. 
For now there is a dumy img in all folders, use those, and repeat them a few times to have a sample size example.
When rendering the website for production, all html pages should be generated so it is just a complete static site.
Use astro to do so.