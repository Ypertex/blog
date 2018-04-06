---
title: Humankind Is Expecting Offspring—Are We Ready?
date: 2017-03-30
authors: Michael Schmidle
slug: humanity-is-expecting-offspring
tags: [Artificial Intelligence]
description: The advent of Artificial General Intelligence is close, leading to all kinds of questions and potential for conflict. How do we make sure that we are ready?
cover: ex-machina.jpg
aliases: [/2017/03/30/humanity-is-expecting-offspring/]
---

As foretold in [my blog’s opening article](https://blog.ypertex.com/articles/ypertex-blog-launching-today/), Artificial Intelligence (AI) is a topic that concerns me a lot these days. In particular, I am more concerned about the first and still imperfect Artificial General Intelligence and less about the potentially god-like, almighty Artificial Super Intelligence everyone is talking about.

For those of you who are not too familiar with the subject, I will start this article with an introduction and recommend a few links for further reading at the end.

All readers who want to skip the introduction can jump right ahead to [the first core chapter](#asi-or-humankind-s-next-god).

{{<figure src="/media/ex-machina.jpg">}}Motive from the movie “Ex Machina”, 2014{{</figure>}}

## An Introduction to Artificial Intelligence (AI)

### Definition of Intelligence

Before we go any further, we first need to establish some common ground on what intelligence actually is or can be. For the purpose of this article, intelligence in general can be defined as follows:

> (1): the ability to learn or understand or to deal with new or trying situations (2): the ability to apply knowledge to manipulate one’s environment or to think abstractly as measured by objective criteria {{<cite>}}[Merriam Webster](https://www.merriam-webster.com/dictionary/intelligence){{</cite>}}

You might note that this definition does not include anything about biological life, consciousness or any of the sort. In other words: A piece of software can count as intelligent, too—as long as it possesses the above listed abilities.

### Evolution of Intelligence

One very important aspect to understand in the evolution of intelligence is its **exponential growth over time**. This feature is best visualized by the Cosmic Calendar in which the entire existence of our universe is mapped onto a calendar with twelve months:

{{<figure src="/media/cosmic-calendar.jpg">}}Efbrazil, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File%3ACosmic_Calendar.png){{</figure>}}

As you can see, if our universe came into existence on 00:00AM on January 1 and the present is on 23:59PM on December 31, our planet Earth formed in September and the first animal brains with the first intelligence developed somewhere around mid December. Finally, the first humans then arrive in the evening of December 31. In this calendar, 100 years equal 0.23 seconds. What does this tell us about exponential growth?

For a very, very long time (~96% of the time since the Big Bang), nothing happened at all with regards to intelligence in our observable universe. Then it developed very slowly over a smaller period of time (between ~96% and ~99.7% of all time) before significantly growing in the last ~0.3% of time. That is exponential growth: no movement for a long time, then an explosion at the very end. I will get back to this feature when talking about the term “Singularity”.

**The most important lesson** however is, that intelligence will continue to grow exponentially in the future unless it is stopped by a stronger force. However, that would have to be a *very* strong force, considering that even a global catastrophe like the one that erased the dinosaurs only resulted in a temporary setback. One could even say that the catastrophe actually worked in favor of higher intelligence since it made room for humans to develop.

So why should intelligence stop its exponential growth *exactly* at the level of human intelligence? Why not grow for i.e. one more hour on the calendar (translating to ~1.5 million years in real time)?—Science suggests no reason for it to stop *now*.

Comes in AI.

### Deep Learning

Right now, most aspects of above definition of intelligence are still a huge challenge for software. In one particular area however, significant progress has been made over the past decade: learning. The ability to learn is something that already is implemented in software *today* (actually already since a few decades). The current method is called [deep learning](https://en.wikipedia.org/wiki/Deep_learning) and is basically a way of letting algorithms analyze vast quantities of input/output data and let them discover the common pattern themselves.

{{<figure src="/media/deep-learning.jpg">}}Differences between AI, machine learning and deep learning, via [Nvidia](https://blogs.nvidia.com/blog/2016/07/29/whats-difference-artificial-intelligence-machine-learning-deep-learning-ai/){{</figure>}}

This approach is, among others, applied in image recognition software. During a training phase, algorithms are presented with i.e. large amounts of cat and dog pictures that are correctly labelled as “cat” or “dog”. So for each image (input) the software knows the correct label (output) but apart from that it needs to figure out itself what the common traits of cats and the common differences between cats and dogs are in those pictures. The software achieves this by i.e. looking at the first two cat pictures, finding commonalities between the two and then test if this theory holds up when comparing these two pictures with the remaining cat pictures. Every time the theory is true, it bumps up the theory’s score by `+1`—otherwise it reduces its score by `−1`. Theories are refined until a certain score is reached: Very high scoring theories are not refined further; very low scoring theories are dismissed. Reiterating this process over and over again, the algorithm learns over time what a cat picture usually looks like. Repeat this with images of dogs, and the software knows what dogs are, too—and what separates cat from dog pictures. After the training phase you can throw new and unknown input data at the algorithm and let the software respond with the output.

The same approach can be applied as well to low resolution input and high resolution output pictures, in fact [letting AI add information to a picture that was not there before](https://arstechnica.com/information-technology/2017/02/google-brain-super-resolution-zoom-enhance/)—simply based on what the AI has learned before.

For this approach to work well, the software needs some sort of …

* goals or a definition of success (like reaching a previously defined success rate for its theories),
* mechanisms to verify and falsify the attempts made to reach the goals (i.e. in- or decreasing theory scores), and
* freedom to create theories that can be tested and improved.

Maybe you have realized by now that this very much **mimics how humans learn**, too. I am referring to learning that “just happens”—not the artificial learning in school. For example, humans learn what i.e. the color yellow is by simply being presented different colors over and over again, all given their respective names by other humans. Nobody tells them that yellow has a wavelength of 590–560nm—at some point, kids just figure out by themselves what the common traits between all the yellows are and what traits separates all those yellows from i.e. all the blacks. Now, [software can learn as fast as humans do](https://www.technologyreview.com/s/542076/deep-learning-robot-takes-10-days-to-teach-itself-to-grasp/).

What about the other qualities of intelligence as defined above, like the ability to manipulate one’s environment? I would argue that given the correct mix of goals, incentives and freedom, software could use its growing learning abilities to gradually master the other aspects of intelligence soon, too.

After all, it exists the possibility that software could learn how to learn even better and develop more advanced methods than deep learning…

### Artificial General Intelligence (AGI) and Artificial Super Intelligence (ASI)

Apart from the broad definition of intelligence at the beginning of this chapter, there are two more relevant terms for our discussion: general intelligence and super intelligence.

**General intelligence** refers to the ability to learn and apply knowledge not just in one but in several domains in a dynamic fashion. The best chess computer is not generally intelligent since it only masters a single, very specific domain (i.e. chess) and cannot transfer its skills and knowledge to other domains (i.e. repairing its own hardware) should it become necessary (i.e. to survive).

To be honest, that is one of the last abilities that currently separates us humans from human-made computer software. While individual computers already are far better in any sufficiently narrow field of expertise (i.e. calculus), humans are able to learn, combine and apply different skills at different times in their lives:

{{<figure src="/media/peak-skills-by-age.jpg">}}Human peak skills by age, via [Business Insider](http://uk.businessinsider.com/best-age-for-everything-2017-3){{</figure>}}

Given the speed at which machine learning has progressed over the past decade, we should be prepared to see the first cross-domain AI (one that beats humans in more than one discipline simultaneously) *within the next few years* and the first dynamic-domain AI (one that can learn to master several additional domains at “will”) again a few years thereafter. In my opinion, it should not take too long until the first Artificial General Intelligence(s) walk(s) among us.

**Super intelligence** on the other hand refers to a level of intelligence higher than that of the brightest and ingenious humans. I wish I could give you concrete examples of such intelligence; the problem is that any example by definition surpasses my and your abilities to imagine, let alone understand and communicate these examples. (Assuming you are human, too!)

Related to Artificial Super Intelligence is the term of **Singularity**. This term describes the moment in which technological progress develops a takeoff (or: compounding, runaway) effect—meaning that each technological progress actually further accelerates its own advancement in a recursive way. Imagine writing software that helps you write better software until you entirely leave it up to even better software to write the best software.

Sorry if that made your head spin—but remember when I told you about exponential growth of intelligence on earth? This recursion is the trigger for the Singularity and where growth *really* starts to take off; and this is the direction we are taking as a species. So, where does this lead us?

{{<figure src="/media/ypertex-takeoff-effect.png">}}The takeoff effect in an exponential function{{</figure>}}

## ASI, Or: Humankind’s Next God?

So many publications about the topic of Artificial Intelligence focus on the time *after* the Singularity has occurred, i.e. when humans are faced with a super intelligent and super powerful being. Everybody is curious, of course, how such a scenario could play out. Will the AI be a benevolent or malevolent being, will it be friendly or unfriendly to humans? Will it consider us as its creators and as such treat us with respect and dignity—or will it be entirely indifferent and not especially care about humans?

I am curious myself as to what the answers to these question will be, however it seems to me that we are getting ahead of ourselves and focusing on the less fruitful and less relevant questions at hand.

First, is it not a bit presumptuous to think that anyone could correctly assume what an Artificial Super Intelligence might (not) do? In my definition, “super intelligent” is a relative term and means “intelligence significantly beyond one’s own.” This excludes the possibility that humankind can grasp *at all* the inner workings of a superhuman intelligent being. **We would not understand super intelligence even by chance.**

> Any human attempt to understand superhuman intelligence will, by definition, fail due to inferior human intelligence.

We cannot compensate for this lack of intelligence by any other means (like imagination or creativity) since all these are integral part of and accordingly limited by our overall intelligence. We simply are incapable of achieving this feat.

Second, the primary focus on the Singularity disregards what *is* within the reach of human intelligence and really *is* relevant in terms of proximity in time: the emergence of an Artificial General Intelligence.

So instead of adding to an already extensive discussion about the (certainly interesting) philosophical aspects of what the arrival of an almighty ASI would lead to, we will take a closer look at the less discussed and more immediate future: the transition to AGI.

## AGI, Or: Humankind’s Next Rival?

This chapter’s title already sums it up pretty well, but let me go a bit into more detail as to why I think that AGI will be critically relevant to all of us.

{{<figure src="/media/i-robot.jpg">}}Motive from the movie “I, Robot”, 2004{{</figure>}}

### Congratulations, It Is a … Machine!

When we talk about AGI, “G” or “General” refers to a comparable level of human intelligence. This in itself should already be our first concern:

> Artificial Intelligence on the level of human intelligence unfortunately also means **Artificial Stupidity on the level of human stupidity**.

This is a simplistic way of saying that any AGI will have its limitations, inherent defects, and error-proneness. It will make decisions based on those imperfections. After all, any AI in the end is a piece of software invented by humans. And I think we can all agree that we have never seen a bug-free human-invented software so far (i.e. without unintended but potentially harmful side effects).

> If a software has no bugs, it only means that they have not been discovered yet.

Until now, it was typically a good thing when somebody reached a higher level of intelligence—because this achievement was reserved for humans only, so we knew more or less that the long term effect would be positive. (If the outcome was negative, there was time and there were ways to react appropriately.) More intelligence was something we have always welcome without much further thought.

This needs to change.

When the first machine will reach our level of general intelligence, it will be an unprecedented event. As a society, we will have no experience whatsoever of what the effects might be because this kind of intelligence just works differently. Whatever the probability is—the effects might be negative, especially when taking into account that the first iterations of an AGI could still be flawed. Given the high processing frequency AIs are capable of, the AI’s environment including **humans will have not much time (if at all) to react appropriately** if the outcome is harmful.

### The Boon and Bane of Intelligence

The most intelligent species on this planet is the one that has, by far, the biggest impact on its surrounding. No other living being can even remotely control and shape the fate of this and nearby planets to the extent humans can—just have a look at [Elon Musk’s plans for colonizing Mars](http://uk.businessinsider.com/elon-musk-spacex-mars-colony-talk-iac-2016-9?r=US&IR=T).

{{<figure src="/media/terraform-mars.jpg">}}Artistic representation of terraforming Mars, via [bigthink](http://bigthink.com/videos/the-cheapest-way-to-terraform-mars-2){{</figure>}}

Based on this observation, it would be safe to assume that there is a correlation between the degree of intelligence of a species and the degree of adaption required by its surrounding for it to survive.

For us humans of course, the beings with the highest degree of intelligence in our observable environment, this fact is not a problem so far. We are in control and everything else has to adapt—maybe with the exception of the force of nature where we cannot control it yet.

Comes in a new variable to the equation: an AGI. All of the sudden, humans are not the only most intelligent species in their environment anymore. Now they have to adapt (at least to some degree) to another living being of equal intelligence? Now they are supposed to share resources? **If human history has taught us one thing, it is that people do not like to suddenly give up control about their habitual surroundings without conflict.** And that refers to giving up control to other humans—and not to some extraneous being we might not have much resemblance with.

There are plenty resources that would be valuable both to humans and AGIs—and therefore plenty of grounds for conflict. Especially one comes to mind: energy/electricity.

“But an AI could come up with a solution for the resource scarcity!” you might say. Maybe, but especially in the beginning of our co-existence, an AGI will be roughly as intelligent as humans and not have a peaceful and sustainable solution to each and every of the problems. What might seem like an appropriate solution to its own problem (like getting rid of all mankind), could be aggravating the situation for us humans.

### We Can Always Pull the Plug—Not

One particular stubborn misconception is the belief that humans will be able to control an AGI—at least by shutting it off if necessary. See for example Grady Booch’s comment about [Siri](http://www.apple.com/ios/siri/) at the 9:09 mark during the following TED Talk:

<figure>
{{< youtube z0HsPBKfhoI >}}
</figure>

What people tend to forget is the level of complexity that interconnected software has nowadays. Really, how simple is it for anyone but Apple, Inc. to shut down Siri as Grady Booch suggests? OK, I could turn off my iPhone on which Siri is listening—but Siri still runs on Apple’s servers and millions of other devices regardless. What about AGIs we do not even know about, i.e. driven by <abbr title="National Security Agency">NSA</abbr>, <abbr title="Central Intelligence Agency">CIA</abbr>, <abbr title="Government Communications Headquarters">GHCQ</abbr> and others? Keep in mind that **there is no clear-cut “we”**. Humans are divided into countless affiliations (nations, organizations, families and so on). The entity who develops and operates the AGI does not necessarily have to be the same entity that is affected negatively by it.

Do you remember the hacker attack on the German parliament in 2015? According to [heise security](https://www.heise.de/security/meldung/Bundestags-Hack-Angriff-mit-gaengigen-Methoden-und-Open-Source-Tools-3129862.html) [de], it took almost five months from the first suspicions of the admins to the returning to normal operations. This was just the time it took to stop this particular attack—not the attacker(s) in general.

If our society is already facing a major challenge with regard to keeping control of the virtual realm as it is right now; what makes anyone think that one could control a renegade software any better than controlling hostile human hackers? Do not forget: When it comes to controlling or escaping a software, any AGI (being software itself) naturally has home court advantage over humans.

The odds are clear:

> The AGI has to be lucky *only once* to get out of our control. We have to be lucky *all the time* to keep it under our control. {{<cite adapted>}}Hannah Wells in [ABC’s Designated Survivor](http://abc.go.com/shows/designated-survivor){{</cite>}}

There are a few proposed solutions to avoid getting into the control problem in the first place (which I might cover in more detail in a future article). At the time of writing this article however, none of them seem practical or well-timed enough to really avoid this situation.

## Conclusion

By now, the inevitability of the following points should have become clear (in arbitrary order apart from the first):

* AGIs will emerge pretty soon (yes, plural)
* AGIs will make stupid decisions along the way, too
* AGIs will require and compete for some of the same resources as humans need
* AGIs cannot be effectively controlled on a permanent basis

All in all, the potential for conflict is huge. Given this outlook, I hope you agree that we should start addressing how to deal with the emergence of AGIs as a society. **AI is no longer a purely technological topic** since it will concern every one of us in the near future.

I want to contribute—and will perform a little experiment by slipping into the mind of an AGI in one of my next articles. See you then?

---

## Recommended Videos and Articles for “AI Beginners”

* Sam Harris’ TED Talk: [Can we build AI without losing control over it?](https://www.youtube.com/watch?v=8nt3edWLgIg)
* Tim Urban’s two epic articles:
  * [The AI Revolution: The Road to Superintelligence](http://waitbutwhy.com/2015/01/artificial-intelligence-revolution-1.html)
  * [The AI Revolution: Our Immortality or Extinction](http://waitbutwhy.com/2015/01/artificial-intelligence-revolution-2.html)