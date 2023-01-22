# Classic mode for Wikipedia
A Firefox add-on to get the classic Wikipedia interface back, pre-January 2023. 

The add-on can be installed from the following address: **https://addons.mozilla.org/fr/firefox/addon/classic-wikipedia/**

Feel free write a review on https://addons.mozilla.org/fr/firefox/addon/classic-wikipedia/ if you find this add-on useful or if you encountered problems using it.

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

I may consider adding additional features, if they keep the add-on simple and lightweight, and do not require too much maintenance.

## License
The code is licensed under the [ Mozilla Public License 2.0 ](https://www.mozilla.org/en-US/MPL/2.0/).

The [extension icon](https://github.com/jeanbaptisteb/classic_Wikipedia/blob/main/back.svg) is licensed under the [Creative Commons Attribution-Share Alike 3.0 Unported license](https://creativecommons.org/licenses/by-sa/3.0/deed.en). This icon is a derivate work from https://commons.wikimedia.org/wiki/File:Ic_settings_backup_restore_48px.svg (author: Google Inc.)

## Alternatives
If you're not satisfied with this add-on, there are several alternatives out there for Firefox:
- **[Wikipedia Vector Skin](https://addons.mozilla.org/en-US/firefox/addon/wikipedia-vector-skin/)** for Firefox. It has a larger scope than *Classic mode for Wikipedia* (i.e. it also applies interface changes to mediawiki.org websites). Other than that, it offers the same features, using a slightly different code. I highly recommend it in case you're not satisfied with  *Classic mode for Wikipedia*. 
- [wikivector](https://addons.mozilla.org/en-US/firefox/addon/wikivector/) for Firefox, a still experimental add-on. I haven't tested it,  but its code seems to use a less efficient method than the *Wikipedia Vector Skin* add-on.
- [legacy skin wiki](https://addons.mozilla.org/en-US/firefox/addon/legacy-skin-wiki/) for Firefox. I haven't tested it, but same caveat than for the *wikivector* add-on mentioned above.

**For Chrome users**, it seems that many extensions offer the same kind of features. **[Old Wiki](https://chrome.google.com/webstore/detail/old-wiki/cphagceemhgokfclmbnkpfkmchbfnclb)** seems promising, even though I haven't tested it ([source code here](https://github.com/adlerzei/old-wiki))
