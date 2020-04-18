---
title: Accelerate Your Website---With Your Logo
publishdate: 2020-04-18
tags:
- Technology
- Tutorials
summary: Most people who care about their website's performance probably use a website logo created by vector graphics software. Here's how to take advantage of vectorized logos to speed up your website. Seriously.
images:
- https://res.cloudinary.com/ypertex/image/upload/c_fill,dpr_auto,f_auto,g_auto,h_630,q_auto,w_1200/8d39dd05-95d1-443a-aeb9-2bcae2151c06
---

The fine people from [Crazy Egg](https://www.crazyegg.com/) are dedicated to optimizing websites. In an in-depth article in their blog, they look at why website speed matters and what one can do to reduce load times. I won't link it right here---otherwise, you'll get swallowed by their monster article and never return to this one! 😉 <small>(You still can find the link at the bottom of this article if you're interested.)</small>

{{<figure src="d5c5a393-65fb-4648-bf0a-ffd519fa3306">}}Screenshot of the crazyegg.com website, April 2020{{</figure>}}

Suffice it to say: Yes, website speed matters. In this article, we'll take a look at their (and my) **top two recommendations**:

1. Minimize <abbr title="Hypertext Transfer Protocol">HTTP</abbr> requests
2. Minify and combine files

More specifically, I'll show how you can implement these two recommendations with one of your most precious website assets: your logo. But first things first.

## What's a Vectorized Logo?

### Types of Graphics Files

In general, there are two types of graphics files: pixel- and vector-based.

**Pixel-based graphics files** store their information pixel by pixel, a little like this:

* The first pixel in the first row of pixels has the color white.
* The second pixel in the first row has the color white.
* The third pixel in the first row has the color green.
* ...
* The last pixel in the last row of pixels has the color white.

The big advantage of this approach is that we can store images with extremely rich details---and that the images can be displayed with a very high degree of fidelity as there's no room for misinterpretation. This type is used to store and display photos.

The downside of this format is their fixed resolution: I.e., if you have stored a picture with a width and height of 100×100 pixels but want to display it on a surface of 1,000×1,000 pixels, you somehow have to compensate for the missing pixels. Typically, this leads to pixelated or blurry results:

{{<figure src="33abb121-879a-48af-ab0b-a3a29c734efe">}}Scaling a small pixel-based image is like telling the computer: "Please make the picture bigger and guess what the missing pixels would look like!"{{</figure>}}

On the other hand, if you have stored a picture with 10,000×10,000 pixels but only want to display it on a surface of 100×100 pixels, you have a lot more information than you need.

**Vector-based graphics** work differently: Instead of storing data on every single pixel, they describe shapes. It goes a bit like this:

* The white canvas has an aspect ratio of 16:9.
* There's a blue oval with a height of 13% of the canvas' total height and a ratio of 3:2. Its upper left corner sits at 20% height and 37.6% width of the canvas.

In contrast to the pixel-based format *where every single pixel* of the canvas and oval would be stored (fixing its resolution in the process), this vector-based description is extremely efficient and resolution-independent. Whenever you display this image, you can precisely *calculate* each pixel on the fly. It doesn't matter how small or large your surface is---you'll get crisp and sharp graphics every time.

{{<figure src="0fc12af7-236c-4646-8726-cc74d5cb7c80">}}Scaling a small vector-based image is like telling the computer: "Please redraw the same vectors, just bigger this time!"{{</figure>}}

This advantage, however, is lost if you want to store highly detailed pictures where you end up drawing single pixels as vectors. In this case, it's more efficient to just store the pixels in a pixel-based format.

### Vector-Based Graphics Files for Logos

Logos are symbols. As such, they don't try to replicate every single detail of a real-world object. Instead, good logos aim at abstracting and simplifying. Often, they're crafted with geometric forms that easily can be described with mathematical formulas.

{{<figure src="8d39dd05-95d1-443a-aeb9-2bcae2151c06" transformation="full">}}Small selection of famous logograms: Volkswagen, Olympics, Mitsubishi, Microsoft, Nike, Twitter, Apple, McDonald's{{</figure>}}

In other words: Vector-based graphics files are a **perfect fit for logos**! Any even semi-professional designer nowadays will use vector graphics software to create logos.

Now let's go back and see how this can help with the above recommendations to improve your website's loading speed.

## Minimizing HTTP Requests and Combining Files With Vectorized Logos

Most of a website's loading time is caused by requesting the different assets that make up a website: all the <abbr title="Hypertext Markup Language">HTML</abbr>, Javascript, <abbr title="Cascading Style Sheets">CSS</abbr>, font, icon, and image files etc. need to be downloaded.

Each of these requests consumes precious time so the goal is to minimize the number of requests necessary. It's especially helpful if you can avoid requests for loading only small bits and pieces. It's faster to download one larger file than two smaller files.

For example, this blog's current logogram <svg width="50px" height="20px" viewBox="0 0 440 176" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2">
    <g transform="matrix(1,0,0,1,-2574,-792)">
        <g id="Unprotected-primary-color-logogram-on-transparent-background" serif:id="Unprotected primary color logogram on transparent background" transform="matrix(1.12719,0,0,0.885774,2612.5,797.543)">
            <rect x="-34.159" y="-6.258" width="390.352" height="198.696" style="fill:none;"/>
            <clipPath id="_clip1">
                <rect x="-34.159" y="-6.258" width="390.352" height="198.696"/>
            </clipPath>
            <g clip-path="url(#_clip1)">
                <g transform="matrix(3.69565,0,0,4.16217,-240.2,-272.956)">
                    <g transform="matrix(0.105625,-6.62507e-18,5.86335e-18,0.119347,45.1899,52.1434)">
                        <path d="M100,500L300,300L100,100L167.274,100C252.258,100 333.761,133.757 393.857,193.846C397.723,197.712 400,199.988 400,199.988L500,99.976L699.976,100L800,200.024L900,100L1100,100L900,300L1100,500L1032.74,500C947.747,500 866.238,466.238 806.141,406.141C802.276,402.276 800,400 800,400L700,500L500,500L700,300L600,200.024L300,500L100,500Z" style="fill:rgb(0,170,255);"/>
                    </g>
                    <g transform="matrix(0.105625,0,0,0.119347,45.1899,40.2116)">
                        <path d="M500,599.976L900,199.976L700,199.953L300,599.976L500,599.976Z" style="fill:rgb(14,17,18);fill-opacity:0.2;"/>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg> only weighs 1.69 KB in its <abbr title="Scalable Vector Graphics">SVG</abbr> format. It'd result in a speed penalty requesting this file separately.

> Wasting a separate request only to download a small file is like driving to the supermarket only to buy a single peanut.

The great thing about SVG: It's not just a vector format but an <abbr title="Extensible Markup Language">XML</abbr> notation, too. This means that you can put SVG files directly in HTML files (both are XML files after all). In other words: You **merge your logo and your webpage into a single file**.

If you do this, you reduce the number of requests necessary to display your page by 1 and improve your website's loading speed!

Here's the source of this blog's logogram:

{{<highlight svg>}}
<svg width="100%" height="100%" viewBox="0 0 440 176" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2">
    <g transform="matrix(1,0,0,1,-2574,-792)">
        <g id="Unprotected-primary-color-logogram-on-transparent-background" serif:id="Unprotected primary color logogram on transparent background" transform="matrix(1.12719,0,0,0.885774,2612.5,797.543)">
            <rect x="-34.159" y="-6.258" width="390.352" height="198.696" style="fill:none;"/>
            <clipPath id="_clip1">
                <rect x="-34.159" y="-6.258" width="390.352" height="198.696"/>
            </clipPath>
            <g clip-path="url(#_clip1)">
                <g transform="matrix(3.69565,0,0,4.16217,-240.2,-272.956)">
                    <g transform="matrix(0.105625,-6.62507e-18,5.86335e-18,0.119347,45.1899,52.1434)">
                        <path d="M100,500L300,300L100,100L167.274,100C252.258,100 333.761,133.757 393.857,193.846C397.723,197.712 400,199.988 400,199.988L500,99.976L699.976,100L800,200.024L900,100L1100,100L900,300L1100,500L1032.74,500C947.747,500 866.238,466.238 806.141,406.141C802.276,402.276 800,400 800,400L700,500L500,500L700,300L600,200.024L300,500L100,500Z" style="fill:rgb(0,170,255);"/>
                    </g>
                    <g transform="matrix(0.105625,0,0,0.119347,45.1899,40.2116)">
                        <path d="M500,599.976L900,199.976L700,199.953L300,599.976L500,599.976Z" style="fill:rgb(14,17,18);fill-opacity:0.2;"/>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
{{</highlight>}}

See how easy it'd be to include this in your HTML pages?

## Conclusion

This article explained how vector graphics like logos can be integrated *directly* into your webpages' HTML. By combining files this way, the number of requests needed to load a website can be minimized---leading to shorter loading times.

So instead of saving your vectorized logos as pixel-based formats and loading them as separate assets in your website, just export your logos in SVG format and paste them directly into your HTML source!

## Recommended Reading

{{<preview src="c9d4c0e4-d356-4578-b5f8-07db407eec75">}}

---

{{<note>}}
##### <i class="las la-balance-scale-left"></i> Disclaimer

I am in no way affiliated with Crazy Egg. I've never employed their services and can't speak to the quality of their work.
{{</note>}}
