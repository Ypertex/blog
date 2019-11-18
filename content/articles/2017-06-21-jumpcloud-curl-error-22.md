---
title: "Working Around the JumpCloud Curl Error 22"
authors: ["Michael Schmidle"]
date: 2017-06-21
slug: "jumpcloud-curl-error-22"
tags: ["Tutorials"]
description: "JumpCloud is a great tool to enable Single Sign On for whatever devices you have. Find out how to work around curl error 22 to keep using it on Linux."
cover: "jumpcloud.com-2017-06.jpg"
aliases: ["/2017/06/21/jumpcloud-curl-error-22/"]
---



## Introducing JumpCloud

In case you have not yet heard about [JumpCloud](https://jumpcloud.com/): It is a cloud service that leverages user directories like Active Directory, Office 365, and G Suite (previously known as Google Apps) for **Single Sign On in web apps and clients**. My favorite feature of JumpCloud is its lightweight agent: Installing this little piece of software on Linux, MacOS and Windows clients and servers enables you and your directory users to log into these machines *with your directory credentials*. How awesome is that!

{{<figure src="/media/jumpcloud.com-2017-06.jpg">}}Screenshot of the jumpcloud.com website, June 2017{{</figure>}}

No big deal, you say? Active Directory already provides this functionality, you say?—Not quite!

First of all, Active Directory comes with a price tag (there are affordable ways like the [Microsoft Softwareswap Reddit](https://www.reddit.com/r/microsoftsoftwareswap/), but still) while JumpCloud has a free version. Secondly, out of the box it only works on select Windows versions and the respective devices first need to be joined to your Active Directory Domain, controlled by servers usually inaccessible from outside your private network. So how do you quickly, within minutes and without prior preparation, join devices to your directory that are outside your network, i.e. virtual machines on the latest and greatest public cloud provider? With Active Directory, you cannot.

With JumpCloud you just install the agent, wait for a few seconds for the device to pop up in the JumpCloud console and then authorize your users and groups for that new device. Again a few seconds later, the device accepts logins from your users. All it requires is outbound port 443 (HTTPS) to be open for your devices, nothing more. There are some neat added security features: JumpCloud synchronizes not just user names and passwords between directory and devices—it also manages public SSH keys and offers Two Factor Authentication.

Not to mention: This service is *permanently* free for directories with up to ten users and an *unlimited* amount of devices.

> I rely on and do not want to miss the JumpCloud service to keep my little zoo of private virtual machines under control.

## Avoiding Curl Error 22 (the Requested URL Returned Error: 400 Bad Request)

A few days ago, I started to receive above curl error 22 when deploying the JumpCloud agent on a new Linux virtual machine (generic Ubuntu Server 16.04.2 LTS). The error occurs mostly on a consistent basis, but apparently only in some environments and not in others. For example, it reliably works at [Vultr](http://www.vultr.com/?ref=6803870) <small>(affiliation link)</small> and on my hypervisor on my desktop at home; but it continuously fails on my hypervisor at [OVH](https://www.ovh.com/). Results at [Scaleway](https://www.scaleway.com/) were mixed: It worked in a first and failed in a second test on two different bare metal servers. I have still to pinpoint the exact issue but I could narrow the error down to the part in the install script that checks the local system time (the call of the URL ``https://kickstart.jumpcloud.com/Time`` apparently returns an HTTP status code ``40x``). Anyway, the error says:

    curl: (22) The requested URL returned error: 400 Bad Request

Here is how to work around it: Instead of using the command provided by JumpCloud, use the following one (remember that I removed my connect key in the following command):

    curl --silent --show-error --header 'x-connect-key: [your individual connect key]' https://kickstart.jumpcloud.com/Kickstart > jc.sh

Note the closing ``> jc.sh`` instead of the original ``| sudo bash``. This way you only download the installer script and save it to the file ``jc.sh`` instead of executing it right away.

Then, open the downloaded installer script with your favorite editor, i.e. ``nano jc.sh``. Prefix the following six lines in the script with the ``#`` character to comment these commands out so that they do not get executed when running the script:

    #logMessage 'Checking local system time...'
    #localTime="$(date +%s)"
    #curlAgentWithoutCerts --data "time=$localTime" "$timeUrl"
    #setTimeIfIncorrect "$?" "Your system time seems inaccurate. Please ensure your system is set to the correct time by running ntpdate ('ntpdate -u pool.ntp.org') or verifying that ntpd is configured properly."
    #localTime="$(date +%s)"
    #logMessage 'System time is accurate'

Save the file and exit the editor, then execute the script: ``sudo bash jc.sh``. Et voilà, the script now runs without error and successfully installs the JumpCloud agent.

## Conclusion

JumpCloud allows you to use whatever physical or virtual Linux, MacOS or Windows clients and servers with *your centrally managed credentials*—anywhere you need it, whenever you need it.

Obviously, the curl error is quite annoying and the workaround requires a few extra manual steps. I hope JumpCloud fixes this issue soon. In the meantime, at least one can continue to deploy the JumpCloud agent on Linux machines.

If you have a better understanding of what the real issue is, please let me know via [Twitter](https://twitter.com/MichaelSchmidle). I will be happy to update this article accordingly. Thanks!

---

{{<note class="is-info">}}I am in no way affiliated with JumpCloud. The above praise is given as IT professional who employs JumpCloud for personal use.{{</note>}}
