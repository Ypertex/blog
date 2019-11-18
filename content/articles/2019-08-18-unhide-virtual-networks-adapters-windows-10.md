---
title: "Unhide Virtual Network Adapters in Windows 10"
date: 2019-08-18
authors: ["Michael Schmidle"]
slug: "unhide-virtual-network-adapters-windows-10"
tags: ["Tutorials"]
description: "In Windows' latest releases, Microsoft hides virtual adapters and networks by default. In some cases though, you need them to be available just like regular adapters and networks."
cover: "server-rack.jpg"
---

If you ever have installed a virtualization platform like VMware Workstation or Oracle Virtualbox on a Windows 10 box, you might have noticed a different behavior since recent releases (i.e. release 1903): All the virtual network adapters introduced by VMware Workstation et al. don't appear anymore in the "Network and Sharing Center" and other parts of Windows.

I assume that for the majority of users, these adapters showing up in all possible places of the <abbr title="Operating System">OS</abbr> just like regular network interfaces caused more confusion than it was helpful. So they changed how Windows treats virtual network adapters.

{{<figure src="/media/server-rack.jpg">}}"It's easy to get confused with too many ports, so let's hide some." (Image: [Taylor Vick](https://unsplash.com/photos/M5tzZtFCOfs)){{</figure>}}

There might be cases however, in which you need Windows to treat a virtual network adapter just like a regular one. A small change in the registry and a reboot fixes this.

Read on to see why on earth this might cause issues or jump ahead to the [solution below](#unhide-the-host-only-virtual-network-adapter).

# Use Case: Route All Traffic Through a Virtual Machine

Cloud gaming comes with a nice value proposition: Run the latest games on powerful cloud infrastructure but only pay a fraction of the costs you would incur when owning the hardware yourself.

After testing a few of the services and also building my "own" <abbr title="Graphical Processing Unit">GPU</abbr>-powered virtual machines in the cloud (i.e. Azure and Paperspace), I've come to the conclusion that the implementation of cloud gaming still has to overcome a few challenges.

The closest that I've come to cloud gaming in a way that I would enjoy it, is renting a physical GPU-powered server, installing Windows 10 and running games on it. Of course, there are a few issues with this:

* It's not a cloud service at all since A) I have to manage the complete software stack myself and B) I am paying a monthly flat fee instead of pay-per-use.
* Windows 10 is a client OS and as such should never be connected directly to the open Internet without any device as security gateway.

## Cost Considerations of Self-Made Cloud Gaming

As far as I know, the only provider offering physical GPU-powered servers that more or less match the costs of buying your own ready-for-use gaming hardware is [Hetzner](https://www.hetzner.com/). At the time of writing, you get a [Nvidia Geforce GTX 1080 GPU](https://www.hetzner.com/dedicated-rootserver/ex51-ssd-gpu) paired with an Intel i7 CPU and 64GB RAM for roughly EUR100 per month.

Considering that you would have to invest around EUR2,500 to get a comparable ready-for-use rig, the cost of the Hetzner server is comparable to buying and using a gaming PC for two years (EUR2,500 / EUR100 per month ≈ 24 months ≈ 2 years). In my opinion, that's a fair amortisation period for gaming hardware.

For the kind of games I play, the latency of around 15ms caused by my distance to the Hetzner datacenter is totally fine. So while it doesn't save me any money, it saves space, noise and power consumption at home. Plus, I can remotely play demanding games even on my thin clients, even if I'm not at home (given that I'm still within an acceptable distance to the datacenter).

## Security Considerations of Self-Made Cloud Gaming

Having a Windows 10 client exposed directly to the Internet is never a good idea—no matter what security software runs on it.

In the case of Hetzner as provider, you could use their firewall. Unfortunately, they only allow a maximum of 10 rules per server. The game store Steam alone uses a handful of rules so you quickly exceed the maximum.

However, there is a smart way to avoid this public exposure when running Windows 10 on a Hetzner server:

Install VMware Workstation, Oracle Virtualbox or similar, then create a virtual machine with [OPNSense](https://opnsense.org/) or some other firewall as OS on top. OPNSense is a full-blown firewall that can be exposed to a direct Internet connection more securely than a client OS like Windows 10. Hooking the firewall <abbr title="Virtual Machine">VM</abbr> between the gaming OS and the internet creates a second, more secure path:

{{<figure src="/media/virtual-network-adapters.svg">}}Creating a second and more secure Internet connection via virtual environment{{</figure>}}

The problem with this setup in newer Windows 10 releases: Windows disregards the virtual host-only network adapter as Internet connection. Disabling the physical adapter hence leads to Windows acting like it's completely offline—even if a fully working connection via the virtual environment and the secondary <abbr title="Internet Protocol">IP</abbr> address is established.

# Unhide the Host-Only Virtual Network Adapter

To get Windows to treat the host-only adapter like a "real" one, open the Registry Editor and look for the corresponding entry.

For VMware Workstation, the value is located in a subfolder like ``0010`` at ``Computer\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-08002be10318}`` in the registry. Verify that the value of ``DriverDesc`` in the same location is ``VMware Virtual Ethernet Adapter for VMnet1``.

Then change the ``*NdisDeviceType`` value of from ``1`` to ``0``.

Apply the change by rebooting your Windows 10 instance. Next time you log on, Windows will show the virtual adapter under "Network & Sharing Center" and properly detect Internet connectivity on both links.

# Finishing Touches for My Use Case

Now that Windows recognizes the second connection as valid Internet connection, we need to make sure that it prioritizes the virtual network over the physical one. There are several ways to achieve this, with varying levels of security:

1. Deactivate the physical network adapter in Windows. This is a bit inconvenient in case of issues with the firewall VM in the middle. You will need a <abbr title="Keyboard Video Mouse">KVM</abbr> console from Hetzner support to connect to your box and fix things.
2. Block connections on the Hetzner firewall for the primary IP address of the server. You can re-allow certain connections in the event you locked yourself out of the second path.
3. Change the metrics of the two adapters. This will tell Windows which of the two connections to prioritize while leaving both connections basically intact.

I use a combination of 2 and 3. Either way, you will get the desired routing:

{{<figure src="/media/virtual-network-adapters-primary.svg">}}Getting Windows 10 to use the second, more secure link while keeping the original connection as a fallback option.{{</figure>}}

# Conclusion

This article showed you how to securely use Windows 10 as host operating system on a server with a direct Internet connection. Just make sure to route all traffic through a security gateway that runs inside a VM.

The reason why someone would do such a crazy thing to begin with: to play games on a powerful GPU-enhanced server instead of buying and operating a gaming PC at home.

---

{{<note class="is-info">}}I am in no way affiliated with Hetzner. I recommend them as IT professional who employs their services for personal use.{{</note>}}
