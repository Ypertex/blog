---
title: Tools for the Smart Start-up in 2018 (II)
publishdate: 2018-11-07
tags:
- Likes
- Technology
summary: Small budgets can get you great IT infrastructure. Running great desktop and web applications on top can be very inexpensive, too. Here’s how.
images:
- https://res.cloudinary.com/ypertex/image/upload/c_fill,dpr_auto,f_auto,g_auto,h_630,q_auto,w_1200/24d4a332-d0da-4977-81d1-3056ac49b9e0
---

In my previous article, I gave you some ideas on how to leverage great but very affordable hard- and software to build [state-of-the-art IT infrastructure on a small budget](/articles/tools-for-the-smart-start-up-in-2018-1/). If you follow these ideas, you can outfit your team with the basic IT tools to work with: (virtual) hardware and hardened operating systems. 

That’s nice—but hardware and <abbr title="Operating System">OS</abbr> alone won’t get you very far. What’s needed are applications on top of that basic infrastructure. In this article, I’d like to introduce you to some **less popular yet very powerful options** that are available for little to no cost. Let me give you some recommendations in the area of design, diagramming, web publishing, knowledge management, password management and more.

{{<figure src="24d4a332-d0da-4977-81d1-3056ac49b9e0">}}Smart pawns can be kings{{</figure>}}

---

{{<note>}}
##### <i class="las la-balance-scale-left"></i> Disclaimer

I am in no way affiliated with any of the vendors and providers mentioned below. My recommendations stem from personal and professional experience with these tools.
{{</note>}}

---

## Design

### Graphical Design with [Affinity](https://affinity.serif.com/)

For a long time, there weren’t many options available in the area of professional-grade graphic design software. Adobe dominated the market with Photoshop, Illustrator, and other software—asking premium prices for their licenses. This changed when the software developer Serif introduced their Affinity suite, consisting of the three applications **Affinity Photo** (for editing photos), **Affinity Designer** (for creating illustrations), and **Affinity Publisher** (for creating print publications, still in beta at the time of writing this article).

{{<figure src="0046b6ea-fa52-4c28-bf08-2707c33656dc" transformation="full">}}Screenshot of the affinity.serif.com website, November 2018{{</figure>}}

The Affinity applications come at a *onetime payment* of ca. USD50 each per individual user (volume licensing and discounts available upon request). If you compare this to what Adobe currently offers, this is a huge difference. Adobe software can’t be bought anymore: One has to rent it and pay *monthly fees*. Depending on which software you need, this can get cost-intensive fast. For editing photos, the least expensive plan starts at ca. USD10 per month and user. All other apps can be rented starting from a bit over USD20 per month per user each. The cheapest bundle (when you need three or more of the Adobe applications) sits at over USD50 per month per user.

The Adobe “All Apps” bundle plan including more than 20 creative software might be very interesting if you require more than just software to edit photos or create illustrations and print publications. As all Adobe plans, the bundle includes additional features like cloud storage, access to Adobe Fonts etc. But if all you need is **professional-grade features without all the non-essential extras**, the Affinity line-up offers the best price-performance ratio I know of at the moment.

### Diagramming with [yEd](https://www.yworks.com/products/yed/)

{{<figure src="dcf019bd-27fe-4970-b139-8bbf29d23a98" transformation="full">}}Screenshot of the yworks.com website, November 2018{{</figure>}}

If you are in the business of drawing complex diagrams like system architectures, business processes or entity relationships, I strongly recommend yEd. It can help you generate BPMN diagrams, flowcharts, family trees, semantic networks, social networks, and UML class diagrams. While there is a wide variety of applications that can support you in generating such diagrams, two aspects make yEd really stand out:

* yEd has different built-in algorithms to **automatically layout** your diagrams according to your preferences. It comes with eight predefined algorithms: hierarchical, orthogonal, UML-style orthogonal, organic, circular, tree, radial, and domain-specific layouts. Each can be further fine-tuned via a set of parameters. With these layouts it’s just a single click to optimally arrange objects including labels according to your rules, and route their connections with as few collisions as possible. Gone are the times when you dreaded the addition or removal of a single object to a complex diagram because it would mess up your carefully crafted layout. With yEd it really is a matter of seconds to change a diagram and restore the previous quality of its layout.

* yEd is **free.**

The combination of the two makes yEd a pretty remarkable **software that can save you a lot of time at zero cost**. The only drawbacks that I experienced so far with yEd: The icon library is somehow limited, especially the “Computer Network” library, and importing icons in Visio format is not as straight forward. In addition, the layout settings (i.e. custom settings to the hierarchical layout algorithm) are not embedded in the diagram files, so auto-arranging layouts on a different computer can lead to different results.

Apart from these limitations though, yEd delivers outstanding value.

## Web Publishing with [Netlify](https://www.netlify.com/)

The way I publish websites has substantially changed over the past two years. Previously, I used a <abbr title="Content Management System">CMS</abbr> that would dynamically generate a webpage just in time when it was loaded for the very first time. This meant:

* Each time a page was requested for the first time, loading it took the extra time required to dynamically generate it.
* The webspace used to host the website required extra computing performance and software components to run the CMS and generate the website on the fly.

{{<figure src="680986f2-f8a0-4def-93df-f053718e36c1" transformation="full">}}Screenshot of the netlify.com website, November 2018{{</figure>}}

Nowadays, the CMS sits on my laptop and regenerates the entire website whenever I change a thing. Regenerating this blog takes around 125ms, so basically no time. Once I am happy and want to publish the changes, I commit them to my Git repository and push them to GitHub. The repository contains both the source files used to generate the website and the generated final result. Take a look at the first article in this series for example:

* the article’s human readable [source file](https://github.com/Ypertex/blog/blob/master/content/articles/2018-08-02-tools-for-the-smart-start-up.md)
* the corresponding generated [<abbr title="Hypertext Markup Language">HTML</abbr> webpage](https://github.com/Ypertex/blog/blob/master/public/articles/tools-for-the-smart-start-up-1/index.html)

Once my commits are pushed to the repository on GitHub, my work is done. Netlify takes it from there:

After each commit to the repository, Netlify **instantly fetches the changes and deploys the files to their global <abbr title="Content Delivery Network">CDN</abbr>**. This means that the website is not just hosted on one server, but on several ones distributed over the globe. So whenever a webpage is requested for the first time, it is already generated and already geographically close to the user. Websites deployed on Netlify’s CDN are **automatically secured with SSL** certificates, meaning you can browse these websites via ``🔒 https://`` rather the insecure ``http://``.

This is called “Continuous Deployment”. In most cases, it only takes a few seconds after pushing to GitHub that the new version of the blog becomes available at ``blog.ypertex.com``. Neat, right? By the way: Netlify also works with GitLab and Bitbucket as sources for your Git repositories!

The best part is that Netlify offers this service **for free**.  I still can’t believe that my little blog is running on such serious tech. Without. Paying. Anything. Even further advanced features like Identity, Forms, and Functions are available as free plans. Prices kick in once you require team features or cross certain thresholds.

---

{{<note>}}
##### <i class="las la-lightbulb"></i> Pro Tip

If you use a password manager capable of password sharing (see [my recommendations below](#password-management)), you can easily use Netlify as a team with a single user account.{{</note>}}

---

## Knowledge Management

Whenever people collaborate, there quickly is the need to document knowledge somewhere so that the team becomes more independent of single team members and their know-how. Proper knowledge management let’s you bring new team members on board quickly. It also helps to avoid constantly interrupting the people with the knowledge if the answers to such frequently asked questions are documented where everyone can find them quickly.

Tools that are both a real joy to use and affordable, are hard to find. Here are two that I can recommend:

### [BookStack](https://www.bookstackapp.com/)

I really like BookStack because of its **well designed interface and ease of use**. It’s rather modest in terms of system requirements as it doesn’t require a lot of hardware resources. Also: It’s **open source software, available for free** (as in no license fees).

{{<figure src="bb60e3e4-3b05-4ec1-836a-eb286d0c4eb0" transformation="full">}}Screenshot of the bookstackapp.com website, November 2018{{</figure>}}

On the downside: This Wiki software needs to be **installed and run on one’s own server**. My previous article on [IT infrastructure for start-ups](/articles/tools-for-the-smart-start-up-in-2018-1/) lists a few ideas for low-cost yet powerful IT infrastructure. BookStack can be installed in various ways on such infrastructure as detailed [in their documentation](https://www.bookstackapp.com/docs/admin/installation/). Running this software hence needs administration by someone on your team—so strictly speaking, using this service still comes at a cost. The good news is that the software is available as [Docker image](https://www.bookstackapp.com/docs/admin/installation/#docker) which really reduces the amount of maintenance and administration required.

### [Confluence](https://www.atlassian.com/software/confluence/)

Probably **even better designed and more feature-rich** is Confluence by Atlassian. It too produces great looking documentation and is backed by one of the world’s largest developers of collaboration software. Integration of Confluence into other [Atlassian products](https://www.atlassian.com/software/) like Trello, Jira, Bitbucket etc. is, of course, easy.

{{<figure src="3483291c-8353-4583-b388-e0b67277934d" transformation="full">}}Screenshot of the atlassian.com website, November 2018{{</figure>}}

In contrary to BookStack, Confluence comes with a price tag for the license. The **software is offered as a service** (“Cloud”, meaning that Atlassian is running and maintaining the software on their infrastructure) or **as download for self-hosting** (meaning that you install, run and maintain the software on your own infrastructure). The software requires more (virtual) hardware resources than BookStack but is available as [Docker image](https://hub.docker.com/r/atlassian/confluence-server/), too.

When choosing the <abbr title="Software as a Service">SaaS</abbr> version, Atlassian asks USD10 per month total for the first ten users. The self-hosted version is even more affordable; a license for up to ten users costs a one-time total fee of USD10. These prices for such high quality software including vendor support are a steal, if you ask me.

A **word of caution** however: If your start-up grows beyond the threshold of ten users, costs for Confluence grow significantly. The Atlassian-operated service then costs USD5 per user per month—resulting in an increase from USD10 per month for ten users to USD55 for eleven users. Growing to eleven users for the self-hosted version makes a huge difference, too: Instead of the one-time USD10 payment for ten users, Atlassian asks you to pay once USD1,900. **The eleventh user is quite expensive!**

## Password Management

### Short Introduction to Password Managers

Let me guess: Over your lifetime, you have opened so many accounts for Internet services that you can’t even tell anymore just *how* many. I certainly can’t. What I do know is that during the last eight months alone, I have used accounts for over 100 different services. (I know this because the password manager I switched to in March 2018 manages as many logins for me: over 100.)

Due to the sheer number of logins we use across the Internet, most of us have resorted to reusing the same or, at most, slightly altered credentials. The issue with this: If just one of these services gets hacked and your credentials get stolen, they can be used on practically all the other services that you have signed up for. Even Internet giants like Facebook with the smartest security professionals [get hacked](https://www.cnn.com/2018/10/04/tech/facebook-hack-explainer/index.html). The question is not *if* but *when* your credentials will get stolen from any of the services you use.

To both limit the damage caused by credentials theft and increase ease of use, password managers have been invented. The idea behind such software is that it generates and securely stores a unique random password for each service that you use. This way, if ever one of the services you use got hacked, the hackers only obtain access to your account on that specific service—and nowhere else.

{{<figure src="80a9d356-a9f6-4096-90f8-ea9835304e72" />}}

The added convenience with such a password manager is that you never again have to manually type a user name or password when logging into websites and apps. You only log in manually when starting the password manager on the respective device—from then on, the manager pastes your credentials into the login forms. Easy!

Of course, when relying on a single master password, this password should be hard to crack. Forget complexity by using a minimum amount of lower/upper case letters, numbers and special characters. Instead, “hard to crack” can be achieved much better by choosing **long passphrases**. So a passphrase like ``Table blink chili draw!`` with 23 characters is already a lot harder to crack than any eight-character password, no matter how complex the shorter password might be. [See for yourself.](https://howsecureismypassword.net/)

With a password manager and a single master passphrase, I enjoy the level of security as if I remembered over 100 different random 30-character passwords like ``Q%UkDuwveO.9ju*92aUj>TA5&KmFe^`` during the last eight months alone. Not bad.

### [Bitwarden](https://bitwarden.com/)

Now, there are many password managers out there. Even some with excellent features that are [free for individual users](https://fossbytes.com/best-free-password-manager-software/).

However, working in teams sometimes requires the ability to share passwords. Some password managers offer this functionality as paid option. And while it probably is a good idea to spend a few bucks on your start-up’s security level, there is one software that offers the complete enterprise-level functionality for free: Bitwarden.

{{<figure src="288c88ec-a816-488a-8cf9-4389d23eb2fa" transformation="full">}}Screenshot from the bitwarden.com website, November 2018{{</figure>}}

The catch is that you have to host it on your own infrastructure if you want to avoid the costs of currently USD3 per user per month for the enterprise-level functionality. But since we have [affordable yet state-of-the-art infrastructure](/articles/tools-for-the-smart-start-up-in-2018-1/) available, let’s put it to good use and install it there. Just create a virtual machine on your dedicated server, then follow the short and comprehensible [Bitwarden installation guide](https://help.bitwarden.com/article/install-on-premise/).

Voilà, you now have your own, fully featured enterprise-grade Password Manager at zero cost.

## Conclusion

The two articles in this series showed that having a small IT budget as a start-up is no obstacle anymore to using enterprise-grade (virtual) hardware and software.

Did these recommendations help you as individual or small team? Did I miss anything that also would be worth mentioning?

I’d like to hear from you.
