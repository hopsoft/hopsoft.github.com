---
title: Relative Paths and the Asset Pipeline
authors: Nathan Hopkins
date: 2012-09-09
published: true
categories:
  - rails
  - software
  - programming
layout: post
---

I often use jQuery plugins (among others) in my applications and prefer to store them in a single directory. Typically saving them in **app/vendor/javascripts/plugin**

{% highlight bash %}
|-project
  |-app
  |-lib
  |-vendor
    |-assets
      |-javascripts
        |-plugin
      |-stylesheets
{% endhighlight %}

Sometimes the plugins contain other assets such as stylesheets,
but requiring stylesheets from within the javascript directory
can be a pain in the ass unless you know what you're doing.

Simply add a require statement to the stylesheet manifest that looks like this.

{% highlight bash %}
*= require ../../../vendor/assets/plugin/plugin.css
{% endhighlight %}

### Alternate Solution

A better solution might be to move the plugin's folder directly under assets.

{% highlight bash %}
|-project
  |-app
  |-lib
  |-vendor
    |-assets
      |-javascripts
      |-plugin
      |-stylesheets
{% endhighlight %}

Then you can require the plugin's files just as you would anything else.
Just be sure to watch out for naming collisions as your project grows.

{% include disqus.html %}
