# Classic mode for Wikipedia
<a href="https://addons.mozilla.org/firefox/addon/classic-wikipedia/">Classic mode for Wikipedia</a> is a Firefox add-on to get the classic Wikipedia interface and layout back, pre-January 2023. **It is free, open-source, without advertisement, and respects your privacy -and it will stay this way**. 

The add-on also works with other Wikimedia projects: Wikimedia Commons, Wiktionary, Wikisource, Wikidata.org, and MediaWiki (more will come). It leaves <a href="https://nostalgia.wikipedia.org">Nostalgia Wikipedia</a> untouched. 

The add-on can be installed from  **<a href="https://addons.mozilla.org/firefox/addon/classic-wikipedia/">here</a>**. 

Feel free write a review on the Mozilla add-on page if you find it useful or, God forbid, if you encountered problems using it.

# Overview
* [Bug reports and feature requests](#bug-reports-and-feature-requests)
* [Technical details](#technical-details)
* [Privacy](#privacy)
* [Compatibility](#compatibility)
* [Roadmap](#roadmap)
* [License](#license)
* [Alternatives](#alternatives)
* [Author info](#author-info)
## Bug reports and feature requests
For any bug report, feature request, or question, you can, alternatively:
- write me an e-mail at classic.mode.wikipedia /at/ gmail.com 
- <a href="https://github.com/jeanbaptisteb/classic_Wikipedia/issues">file a bug report or feature request</a> on Github if you're familiar with that. 
- write a comment under the Mozilla discourse <a href="https://discourse.mozilla.org/t/support-classic-mode-for-wikipedia/110245/2">dedicated thread</a>.

## Technical details
The extension automatically appends a `useskin=vector` parameter to any Wikipedia page URL you request, and automatically loads this new URL. For example, if you request https://en.wikipedia.org/wiki/Logistic_regression, you'll automatically land on https://en.wikipedia.org/wiki/Logistic_regression?useskin=vector, which will show you the page with the classic Wikipedia interface (a.k.a. the "[legacy Vector skin](https://www.mediawiki.org/wiki/Skin:Vector)", in Wikipedia jargon). 

The add-on voluntarily won't work with Nostalgia Wikipedia, and voluntarily won't work either if you request the mobile layout of a Wikipedia page.

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

The [extension icon](https://github.com/jeanbaptisteb/classic_Wikipedia/blob/main/back.svg) is licensed under the [Creative Commons Attribution-Share Alike 3.0 Unported license](https://creativecommons.org/licenses/by-sa/3.0/deed.en). This icon is a derivate work from https://commons.wikimedia.org/wiki/File:Ic_settings_backup_restore_48px.svg (author: Google Inc.).
 

## Alternatives
Here are two excellent alternative add-ons that do more or less the same thing than *Classic mode for Wikipedia*, if you want to see if the grass is greener on the other side:

- **For Firefox users**, [Wikipedia Vector Skin](https://addons.mozilla.org/firefox/addon/wikipedia-vector-skin/). This one has been developed pretty much at the same time than *Classic mode for Wikipedia* and offers similar features. It ended up being more popular for some reason (that is, the developer is probably a more frequent user of social media than I am). Neat code, and the developer seems to answer quickly to bug reports, so I can only recommend it warmly. Nice job!
- **For Chrome users**, [Old Wiki](https://chrome.google.com/webstore/detail/old-wiki/cphagceemhgokfclmbnkpfkmchbfnclb) is a very nice extension and works well as far as I've tested it ([source code here](https://github.com/adlerzei/old-wiki)). Nice and clean code, and the developer seems to answer quickly to bug reports/feature requests.

## Author info


This add-on is a personal initiative, developed during my free time. I am not affiliated in any way to the Wikimedia Foundation, even though I am a sporadic anonymous contributor to Wikipedia.

I also have a couple of other free and open-source projects hosted on Github, that you can find [here](https://github.com/jeanbaptisteb/). They are generally unrelated to Wikipedia or other Wikimedia projects, and are more on the side of research and publishing. But who knows, you might be interested!
