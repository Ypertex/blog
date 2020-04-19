---
title: Useful Hugo Templating
publishdate: 2020-04-12
tags:
- Design
- Likes
- Tutorials
summary: Developing templates for the static website generator Hugo? Then these advanced tips & tricks might be helpful to you.
images:
- https://res.cloudinary.com/ypertex/image/upload/c_fill,dpr_auto,f_auto,g_auto,h_630,q_auto,w_1200/7d143c90-862c-4e74-9275-763746bf95f0
---

I've been working with [Hugo](https://gohugo.io/) for quite a while now. For roughly two years, according to [this Git commit](https://github.com/Ypertex/blog/commit/92b08548ac23cc0fc35f829976b66cfd77316681). During this time I've learned a few things worth sharing.

{{<figure src="7d143c90-862c-4e74-9275-763746bf95f0" transformation="full">}}Hugo's logo{{</figure>}}

## Rich Link Previews

[Open Graph](https://ogp.me/) and [Twitter Cards](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/abouts-cards/) <q>enable any web page to become a rich object in a social graph</q>. This allows previews including title, description, logo, images, author, publisher, etc.

For example, the following preview of the page on ``twitter.com`` linked in the previous paragraph is based on data retrieved from that link:

{{<preview src="cf42843f-3a7d-4f09-88f1-7340d3b9496e">}}

### Shortcode

Here's how my shortcode works in principle: I use the free <abbr title="Application Programming Interface">API</abbr> from [Microlink](https://microlink.io/) to retrieve a ``json`` file with all metadata for a given <abbr title="Uniform Resource Locator">URL</abbr>. With [Hugo's data capabilities](https://gohugo.io/templates/data-templates/#data-driven-content), I process the file and render the data fields of choice.

There are two ways to retrieve the data: letting Hugo automatically fetch the data directly from Microlink's API every time it runs---or manually saving Microlink's ``json`` file once to Hugo's ``data`` folder and having it Hugo access it locally.

I've opted for saving Microlink's files locally for three reasons:

1. The quality of Microlink's API fluctuates depending on the target URL. Saving the data locally gives me a chance to review and adjust it manually if necessary. It still saves me a ton of time.
2. The preview will remain intact even after the target URL is no longer available.
3. If you have a large website, builds will take longer when requesting Microlink's API for every preview. (Which isn't going to be a big deal for this blog any time soon.)

The downside, of course, is that the data might become outdated over time, essentially displaying an incorrect preview.

Either way, using the shortcode in your content is really ... short:

{{<highlight html>}}
{{</*preview src=""*/>}}
{{</highlight>}}

As ``src`` parameter, you either provide a target URL or the path to the file inside Hugo's ``data`` directory.  Since I save the ``json`` files locally, the corresponding shortcode source looks like this:

{{<highlight go-html-template>}}
{{ with (index .Site.Data (.Get "src")) }}
<div class="shadow card">
    <div class="card-body">
        <div class="media">
            {{ with .data.logo }}
            <img src="{{ .url }}" alt="" class="yx-favicon">
            {{ end }}
            <div class="media-body">
                <h6><i class="las la-external-link-alt"></i> <a href="{{ .data.url }}"
                        class="stretched-link">{{ .data.title | title }}</a></h6>
                {{ with .data.description }}<p>{{ . | htmlUnescape | markdownify }}</p>{{ end }}
            </div>
        </div>
    </div>
    <div class="card-footer">
        <div class="yx-attribution">
            {{ with .data.author }}{{ . }}{{ end }}{{ if and .data.author .data.publisher}},
            {{ end }}{{ with .data.publisher }}<cite>{{ . }}</cite>{{ end }}</div>
    </div>
</div>
{{ end }}
{{</highlight>}}

If you want instead to fetch Microlink's ``json`` response everytime Hugo builds your website, you would change the first line accordingly:

{{<highlight go-html-template>}}
{{ with getJSON (printf "https://api.microlink.io/?url=%s" (.Get "src")) }}
{{</highlight>}}

{{<figure src="4731a50a-4e35-49e4-9a4e-66865edb67aa">}}Screenshot of the microlink.io website, April 2020---taken with Microlink's screenshot service itself{{</figure>}}

Read on to see how you can easily provide such metadata yourself ---and make this even work with responsive images!

## Responsive Images in Hugo's Metadata Shortcodes

There's a quick and easy way with Hugo to enable *your* website to be previewed in other apps and websites, too.

Hugo comes with [built-in shortcodes](https://gohugo.io/templates/internal#open-graph) for the Open Graph and Twitter Cards protocols. Using the shortcodes is as simple as adding the following lines to your <abbr title="Hypertext Markup Language">HTML</abbr> ``head`` element:

{{<highlight go-html-template>}}
{{ template "_internal/opengraph.html" . }}
{{ template "_internal/twitter_cards.html" . }}
{{</highlight>}}

These shortcodes take the metadata from your site's configuration as well as your pages' front matter and turn it into the corresponding HTML ``meta`` tags. A social media platform like Twitter or a service like Microlink is now capable to retrieve metadata from your webpages.

Hugo's shortcodes will also consider images and generate the corresponding ``meta`` tags. According to [this research](https://iamturns.com/open-graph-image-size/), a good practice is to size Open Graph images to **1200×630 pixels**.

Hm, yet another size for the cover images of my articles I need to generate and keep track of.

Since I use [Cloudinary](https://cloudinary.com/) as a service to resize images on the fly and thus to [make my images responsive](/articles/redesign-march-2020/#images-can-be-responsive), the solution is pretty simple.

In the content files' front matter, I define one image in the ``.Params.images`` array. For this article you're just reading, it would look like this:

{{<highlight yml>}}
images:
- https://res.cloudinary.com/ypertex/image/upload/c_fill,dpr_auto,f_auto,g_auto,h_630,q_auto,w_1200/7d143c90-862c-4e74-9275-763746bf95f0
{{</highlight>}}

Hugo takes this URL and uses it in the two metadata shortcodes ``opengraph.html`` and ``twitter_cards.html``. I use this URL to show the same cover image in the list of articles---but properly transformed for the size of my users' devices. To that end, I first have to **deconstruct the URL** into its parts with the help of [Hugo's ``path.Split`` function](https://gohugo.io/functions/path.split/):

{{<highlight go-html-template>}}
{{ $cover := (path.Split (index (first 1 .Params.images) 0)).File }}
{{</highlight>}}

Now, I can **reconstruct different URLs** for different transformations of the same image, for example:

{{<highlight go-html-template>}}
<picture>
    <source media="(min-width: 1200px)" srcset="{{ .cloudinary.baseURL }}{{ .cloudinary.transformations.index.xl }}{{ $cover }}">
    <source media="(min-width: 992px)" srcset="{{ .cloudinary.baseURL }}{{ .cloudinary.transformations.index.lg }}{{ $cover }}">
    <source media="(min-width: 768px)" srcset="{{ .cloudinary.baseURL }}{{ .cloudinary.transformations.index.md }}{{ $cover }}">
    <source media="(min-width: 576px)" srcset="{{ .cloudinary.baseURL }}{{ .cloudinary.transformations.index.sm }}{{ $cover }}">
    <img src="{{ .cloudinary.baseURL }}{{ .cloudinary.transformations.index.xs }}{{ $cover }}">
</picture>
{{</highlight>}}

This way, I only need to track **one single URL per article for its cover image**---and yet can generate responsive images from it.

## Conclusion

In this article I shared a few ways how I use Hugo, Microlink, and Cloudinary to my advantage:

* How to generate rich previews of linked content
* How to use Hugo's metadata shortcodes with responsive images

I hope these ideas can make your life as a content producer and publisher easier, too!

---

{{<note>}}
##### <i class="las la-balance-scale-left"></i> Disclaimer

I am in no way affiliated with the services mentioned in this article. I recommend them as a blogger who employs their free services for personal use.
{{</note>}}
