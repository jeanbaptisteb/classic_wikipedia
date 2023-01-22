# Classic Wikipedia
A Firefox add-on to get the classic Wikipedia interface back, pre-January 2023. 

The add-on can be installed from the following address: https://addons.mozilla.org/fr/firefox/addon/classic-wikipedia/

# Bug reports
For any bug report or question you can, alternatively:
- report a bug here: https://github.com/jeanbaptisteb/classic_Wikipedia/issues 
- write an e-mail to classic.mode.wikipedia /at/ gmail.com 
- write a review on https://addons.mozilla.org/fr/firefox/addon/classic-wikipedia/.

When reporting a bug, mention if possible the page address you were visting when you encountered the bug, what version of Firefox you were using, what other add-ons are installed, and if the problem happens systematically or only sometimes.

# Technical details
The extension automatically appends a `useskin=vector` parameter to any Wikipedia page URL you request, and automatically loads this new URL. For example, if you request https://en.wikipedia.org/wiki/Logistic_regression, you'll automatically land on https://en.wikipedia.org/wiki/Logistic_regression?useskin=vector, which will show you the page with the classic Wikipedia interface (a.k.a. the "[legacy Vector skin](https://www.mediawiki.org/wiki/Skin:Vector)", in Wikipedia jargon). 

For more details on how the add-on works, you can simply check the source code which is publicly available. Alternatively, you can ask for additional information [here](https://github.com/jeanbaptisteb/classic_Wikipedia/issues) or by writing an e-mail to classic.mode.wikipedia /at/ gmail.com.

# Privacy
You don't need to have a Wikipedia account to use this add-on. The add-on does not retrieve any information about you and never will. It just automatically redirects you to the classic version of Wikipedia pages with as little friction as possible. Nothing more, nothing less. 

# Compatibility
This add-on is unlikely to be compatible with Firefox versions < 52.0.

# Roadmap
I do not plan to add additional features to this extension, but will investigate reported bugs and fix them if possible. Pull requests are more than welcome relatively to that.

# License
The code is licensed under the [ Mozilla Public License 2.0 ](https://www.mozilla.org/en-US/MPL/2.0/).

The [extension icon](https://github.com/jeanbaptisteb/classic_Wikipedia/blob/main/back.svg) is licensed under the [Creative Commons Attribution-Share Alike 3.0 Unported license](https://creativecommons.org/licenses/by-sa/3.0/deed.en). This icon is a derivate work from https://commons.wikimedia.org/wiki/File:Ic_settings_backup_restore_48px.svg (author: Google Inc.)
