---
title: Multisource-Multitrack Recording in Your Daw
publishdate: 2021-07-16
tags:
- Music
- Tutorials
summary: Want to patch audio from multiple interfaces through to your digital audio workstation on seperate tracks? Here's how VoiceMeeter can help.
images:
- https://res.cloudinary.com/ypertex/image/upload/c_fill,dpr_auto,f_auto,g_auto,h_630,q_auto,w_1200/2dc21d85-7a71-4b06-af35-33e87070dcbd
aliases:
- ""
---

Imagine you want to live stream a session that involves multiple audio sources. Let's say that these sources include microphones of different types (i.e. XLR, USB) and different media players on your computer (i.e. Spotify, YouTube). Imagine further that you want to process and mix these sources separately.

{{<figure src="2dc21d85-7a71-4b06-af35-33e87070dcbd">}}Having many audio sources in one place is great---but how do you keep individual sources separated instead of mixed together with all others?{{</figure>}}

The best place to do that is a [<abbr title="Digital Audio Workstation">DAW</abbr>](https://en.wikipedia.org/wiki/Digital_audio_workstation) like Cubase, Logic, Live, or my personal favorite [Studio One](https://www.presonus.com/products/Studio-One).

# The Problem

There's just one problem: DAWs typically work with a single audio interface, whereas your sources might come into the computer via different interfaces.

It means:

* Your DAW will *either* record audio from your USB microphone (that represents its own audio interface) *or* your XLR microphone (which is connected via a separate USB audio interface). Simultaneously recording two interfaces apparently is impossible in most DAWs today.
* Also, to record audio from different media players, you will need to route their audio to the same interface. This interface will mix these sources already into a single audio signal before entering your DAW (instead of forwarding them as separate inputs).

# The Solution

Fortunately, there is software that can simultaneously work with sources from more than one audio interface and forward these sources on separate tracks to your DAW: It's called [Voicemeeter](https://vb-audio.com/Voicemeeter/index.htm). The best: The two entry level editions are free.

{{<figure src="85e2c99a-2ebe-4e88-876d-663b5bb1888b" transformation="inline">}}The <abbr title="Graphical User Interface">GUI</abbr> of Voicemeeter, "Banana" edition{{</figure>}}

# The Challenge

Mixing audio from multiple sources and routing the master mix to your DAW is straight forward in Voicemeeter. What's less intuitive, is how to route the sources as multitracks to your DAW so that you can process and mix the sources there. This tutorial is here to help!

# Tutorial

## Step 1: Select the Appropriate Voicemeeter Edition

Voicemeeter comes in different editions. Pick the one that suits your needs based on the amount of interfaces it can handle. I picked "Banana" since it offers enough channels for my use and still is free.

## Step 2: Set Your Main Hardware Output

After downloading and installing your instance of Voicemeeter, the software will ask you to define the main audio interface ("A1").

## Step 3: Configure the Master Interface

Next, decide which of Voicemeeter's virtual interfaces you want to use to carry all tracks. In this tutorial, I'll go with the "Voicemeeter VAIO" interface (or "B1" for that matter). Send this interface's output to your main hardware output by activating the "A1" routing as shown in the following screenshot:

{{<figure src="04cec235-13fb-4b32-98c9-b8b88862ff88" transformation="inline" />}}

In the "Master Section" in the lower right half, change the first setting of the B1 track from ``Normal mode`` to ``Composite`` by clicking on it until the proper value shows:

{{<figure src="82dde4a4-c7ec-4139-9cf0-a710c01e7a11" transformation="inline" />}}

## Step 4: Distribute Sources on Channels

Open the ``System Settings / Options`` dialog from the menu. In the area called "PATCH COMPOSITE" (see screenshot below), select which input track should be put on which output track. Click on each one of the eight channels and map the input that you want to correspond.

In my case, I routed ...

* the left and right tracks from "HARDWARE INPUT 1" to the first two channels,
* the left and right tracks from "HARDWARE INPUT 2" to the third and fourth channel respectively,
* and so on for the third hardware input as well as the Voicemeeter virtual AUX input

All in all, I now can use four distinct audio sources and route them to separate tracks, all on a single one audio interface.

{{<figure src="b6031c11-8004-469b-a20e-dd0b6174abe4" transformation="paddedInline" />}}

## Step 5: Configure Your DAW

With Voicemeeter set up, configure your DAW to use the Voicemeeter VAIO interface. Since this interface receives the four stereo or eight mono tracks as inputs, you now can record or manipulate these inputs as you would with any other track in your DAW.

The output of your DAW is sent back over the Voicemeeter VAIO interface and routed to your main hardware output where you can listen to the final mix.

# Conclusion

This tutorial showed how Voicemeeter can be used to route audio from multiple sources to your DAW---all while conserving these sources on multiple tracks. This will enable you to process and mix the audio from each source separately or in any combination.

The two important, yet less intuitive steps are to use the ``Composite`` mode on Voicemeeter's virtual audio interface and then patch the desired inputs through to the available tracks of that virtual interface.

---

{{<note class="alert-success">}}
###### <i class="las la-lightbulb"></i> Pro Tip

VB-Audio, the developer of Voicemeeter, have other very useful software in their portfolio. For example, the [virtual audio cables](https://vb-audio.com/Cable/index.htm) are perfect for routing the output of your media players to separate hardware inputs in Voicemeeter.
{{</note>}}
