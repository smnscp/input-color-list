# input-color-list

> A polyfill for HTML color inputs with list attribute.

The [web standard for color inputs](https://html.spec.whatwg.org/multipage/input.html#color-state-(type=color))
provides for [the `list` attribute](https://html.spec.whatwg.org/multipage/input.html#attr-input-list) to refer
to a [list of suggested color values](https://html.spec.whatwg.org/multipage/input.html#concept-input-list).
So far, user interfaces for this feature are
[only partly implemented](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color#browser_compatibility).
For example, [Chrome has a way](https://developer.chrome.com/blog/datalist-for-range-color-inputs-offer-some-default-choices/)
to interpret present the given list, whereas [Firefox does not](https://bugzilla.mozilla.org/show_bug.cgi?id=960984).

**input-color-list** aims to fill this gap and provide a simple implementation to let users pick colors from a predefined
palette represented by a standard HTML `datalist`.

See also:
- https://chrislachance.com/color-input-compared-cross-browser/
- https://www.reddit.com/r/firefox/comments/ym0itq/i_love_firefox_but_the_firefox_android_color/
