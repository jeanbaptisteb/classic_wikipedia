# Classic mode for Wikipedia
A Firefox add-on to get the classic Wikipedia interface and layout back, pre-January 2023. 

The add-on also works with other Wikimedia projects: Wikimedia Commons, Wiktionary, Wikisource, Wikidata.org, and MediaWiki (others will come). It leaves https://nostalgia.wikipedia.org untouched.

The add-on can be installed from the following address: **https://addons.mozilla.org/firefox/addon/classic-wikipedia/**

Feel free write a review on https://addons.mozilla.org/firefox/addon/classic-wikipedia/ if you find this add-on useful or, God forbid, if you encountered problems using it.

# Table of contents
* [Bug reports and feature requests](#bug-reports-and-feature-requests)
* [Technical details](#technical-details)
* [Privacy](#privacy)
* [Compatibility](#compatibility)
* [Roadmap](#roadmap)
* [License](#license)
* [Alternatives](#alternatives)
## Bug reports and feature requests
For any bug report, feature request, or question, you can, alternatively:
- write an e-mail to classic.mode.wikipedia /at/ gmail.com 
- file a bug report or feature request here: https://github.com/jeanbaptisteb/classic_Wikipedia/issues 
- write a comment under the Mozilla discourse dedicated thread: https://discourse.mozilla.org/t/support-classic-mode-for-wikipedia/110245/2

When reporting a bug, mention if possible the page or URL you were visting when you encountered the bug, what version of Firefox you were using, what other add-ons are installed, and if the problem happens systematically or only sometimes.

## Technical details
The extension automatically appends a `useskin=vector` parameter to any Wikipedia page URL you request, and automatically loads this new URL. For example, if you request https://en.wikipedia.org/wiki/Logistic_regression, you'll automatically land on https://en.wikipedia.org/wiki/Logistic_regression?useskin=vector, which will show you the page with the classic Wikipedia interface (a.k.a. the "[legacy Vector skin](https://www.mediawiki.org/wiki/Skin:Vector)", in Wikipedia jargon). 

For more details on how the add-on works, you can simply check the source code which is publicly available. Alternatively, you can ask for additional information [here](https://github.com/jeanbaptisteb/classic_Wikipedia/issues) or by writing an e-mail to classic.mode.wikipedia /at/ gmail.com.

## Privacy
You don't need to have a Wikipedia account to use this add-on. The add-on does not retrieve any information about you and never will. It just automatically redirects you to the classic version of Wikipedia pages with as little friction as possible. Nothing more, nothing less. 

## Compatibility
This add-on is compatible with Firefox versions > 52.0.

## Roadmap
I will investigate reported bugs and fix them if possible. Pull requests are more than welcome relatively to that. 

More features will come progressively, and might require some additional permissions as they'll probably involve saving preferences.

## License
The code is licensed under the [ Mozilla Public License 2.0 ](https://www.mozilla.org/en-US/MPL/2.0/).

The [extension icon](https://github.com/jeanbaptisteb/classic_Wikipedia/blob/main/back.svg) is licensed under the [Creative Commons Attribution-Share Alike 3.0 Unported license](https://creativecommons.org/licenses/by-sa/3.0/deed.en). This icon is a derivate work from https://commons.wikimedia.org/wiki/File:Ic_settings_backup_restore_48px.svg (author: Google Inc.)

## Alternatives
Here are two excellent alternatives I recommend, if you want to see if the grass is greener on the other side:

- **For Firefox users**, [Wikipedia Vector Skin](https://addons.mozilla.org/firefox/addon/wikipedia-vector-skin/). It offers features similar to *Classic mode for Wikipedia*.
- **For Chrome users**, [Old Wiki](https://chrome.google.com/webstore/detail/old-wiki/cphagceemhgokfclmbnkpfkmchbfnclb) is nice and works well as far as I've tested it ([source code here](https://github.com/adlerzei/old-wiki))
