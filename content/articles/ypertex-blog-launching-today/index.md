---
title: "Years in the Making, Launching Today: The Ypertex Blog"
publishdate: 2017-03-23
authors: [Michael Schmidle]
tags: [On a Personal Note]
summary: After years of intending to start blogging, I finally and proudly publish the first article on my own blog. When are you going to start?
aliases: [/2017/03/23/ypertex-blog-launching-today/]
---

Finally. After literally years of intending to start blogging (the first design sketch dates back to May 2010, and I registered the Ypertex domains in December 2010), I am proud to publish the first post on my own blog.

Now what took me so long?

## Lots of Reasons Not to Blog

### Content

First and foremost, up until now I felt that I did not have **anything *really* relevant to say** to a broader audience. This changed recently while reading articles, listening to podcasts and watching videos about artificial intelligence (AI). In my opinion, people seem to miss a few interesting and potentially important points—so I think that I can add some new perspectives on that topic.

Additionally, I think that I got more strongly opinionated about several other matters over the last year, too. My backlog of ideas for articles is already quite long which gives me the confidence that this blog is not going to run out of content any time soon. Time will tell!

### Form

As a person who thinks that the presentation or form of content is equally important as the content itself, my blog also required **a decent identity and a design**—that I struggled to come up with for quite some time. Then, in January 2017, I finally created a logo that I liked and found appropriate:


You might think that this is a rather simple logo and wonder how it could have been difficult to create it in the first place. However:

> The challenge in logo design always is to convey a high density of meaning with as few elements as possible.

Let me show you the process behind the creation of the logo—and what meaning it holds—in [one of the next articles](https://blog.ypertex.com/2017/05/17/the-making-of-the-ypertex-logo/).

Having the logo gave me the starting point to complete the identity of the blog with a so called “theme”. Such a theme basically defines typography, colors, spacing and other visual elements. You can find beautiful themes online that can be directly applied; but being the perfectionist I am with regard to design, in the end I opted against this approach. To create a theme from scratch on the other hand is an awful lot of work—so I took the shortcut of basing my theme on an existing <abbr title="Cascading Style Sheets">CSS</abbr> framework to lay the groundwork. Fortunately, there are many of them out there and the one that had the best balance between a beautiful default look and the ease of customization was [Bulma](http://bulma.io).

The result is what you are looking at right now:

{{<figure src="/media/ypertex-inhabitu-2017-04.jpg">}}Ypertex blog theme, March 2017{{</figure>}}

The theme is called `inhabitu` and its code is hosted on [Github](https://github.com/Ypertex/inhabitu)—from where you can download the [latest release](https://github.com/Ypertex/inhabitu/releases).

### Tool

Less important for the readers, but more so for me as author/editor is the **simple setup and use of the publishing engine** that powers my blog. Nowadays there are uncountable options available, many of them even available for free. Of course, this multitude of options pushes the makers to constantly add more and more functionality to their software in order to distinguish themselves from each other.

> Don’t give my an editor that is loaded with tons of features if all I need is a small fraction of them. In this case, I’m less the IT guy who loves powerful tools and more the modest author who just wants to focus on writing.

In the end, there remain only a few engines that satisfy my requirements along the above lines:

* Fast and effortless setup and maintenance
* A concise editor with sharp focus on blogging only
* Support for personalizing the blog
* Small price tag

## Choosing the Right Blogging Engine

### Medium

At first, I decided to go with [Medium](https://medium.com/), a managed publishing service. This means: no setup, no fiddling, straight to the point of blogging. I especially liked their beautifully simple editor.

Then, just when I requested the setup of my custom domain `blog.ypertex.com`, Medium decided to charge a setup fee for custom domains. The fee itself was not the issue; rather the flimsy excuse that it “covers your domain setup, an <abbr title="Secure Sockets Layer">SSL</abbr> certificate, and ongoing support of your domain on Medium.” As IT professional, I can assess the costs related to these points—which, if properly automated, should tend to zero.

> $75 for a process that can be 100% automated and in a time in which Let’s Encrypt (i.e. free SSL certificates) exist, that’s not reasonable. So either Medium doesn’t know how to automate the process or they are not candid about what costs they really want to cover.

Don’t get me wrong: Medium’s service is great and the pricing for their service ($0, except for custom domains) even better. I could appreciate if they said “custom domains are a feature for professional publications, that’s why they come with a price tag to cover some of the expenses we have in general”. You know, true expenses like wages for employees or hardware…

### Ghost

That led me to [Ghost](https://ghost.org/) who also offer a managed publishing service and a great editor. Unfortunately with a minimum monthly fee of $19, their service did not fit the bill. Compared to Medium however, Ghost’s software is open source and available for self-hosting.

Fast and effortless setup and maintenance (my first requirement, see above) on the one hand and self-hosting on the other hand usually contradict each other. Luckily in the end, I discovered [Cloudron](https://cloudron.io/), a platform for self-hosting apps *just* like the Ghost publishing engine. With a cheap Linux <abbr title="Virtual Private Server">VPS</abbr> (like for €3 per month from [Scaleway](https://www.scaleway.com/)), executing three little commands to install Cloudron and a few more clicks in the web panel you get:

* A running and self-updating Ghost publishing engine
* A free SSL certificate from [Let’s Encrypt](https://letsencrypt.org/) out of the box

In other words: With Ghost on Cloudron, one receives the combined benefits of a managed service (Cloudron automates away most tedious tasks) and the freedom and low costs of a self-hosted app.

On top of those benefits, you get to indirectly support a fine and exemplary organization: the Ghost Foundation, the entity behind the software and service. I have been following their development as an organization and am very impressed by their approach on transparency and stewardship.

> To the people from Ghost, this is directed at you: **I use the Ghost publishing platform because of Cloudron.** Please officially support the Cloudron Ghost app. Thanks!

## No More Excuses, Here I Go

Now that I have all the ingredients to finally start blogging—content, form *and* tool—, I am really happy to do so. With this very article.

When are *you* going to start?