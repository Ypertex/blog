---
title: How to Advertise Subnets to Upstream Routers with OPNsense and ARP
publishdate: 2018-08-02
tags: [Tutorials]
summary: If you ever wondered how to split a subnet away from a fixed upstream gateway, here’s how you can achieve this with ARP in OPNsense.
cover: a6e46127-e43f-4ea3-9aa8-819893c0f602
---

Today was the first time that I needed to split one IPv4 subnet into two and forward the second half to somewhere else—without the ability to configure the upstream gateway. It took me a while to figure out how to achieve this with an [OPNsense firewall](https://opnsense.org/) as my router. I thought I’d document this in case anyone else is looking for a solution to this, too.

{{<figure src="a6e46127-e43f-4ea3-9aa8-819893c0f602" cite="[Pablo Heimplatz](https://unsplash.com/photos/an3qaxZ-2bY)">}}Splitting stuff is hard enough, but how do you move away the part that you just split off?{{</figure>}}

## The Challenge of Transparently Splitting a Subnet

Consider the following scenario: My <abbr title="Internet Service Provider">ISP</abbr> allocated me a ``/28`` subnet (``x.x.129.208/28``). Along with it, they provided a gateway on the first IP of the subnet (``x.x.129.209``) and nothing else—and that was the problem.

Usually when you are provided a subnet, it is routed to the fixed public IP of your router. This IP is not part of the subnet so you have the freedom to forward the routing of the subnet downstream over any number of hops to anywhere you need it in your infrastructure. In this case however, the first IP was assigned to the ISP gateway—making it impossible to allocate the subnet somewhere else. My router had to be in the exact same subnet (i.e. ``x.x.129.210``).

{{<figure src="/media/advertise-subnet-with-opnsense-arp-1.png">}}Schema of network conditions dictated by my ISP.{{</figure>}}

However, what I wanted was a <abbr title="Demilitarized Zone">DMZ</abbr> *behind that firewall router*, i.e. servers that are accessible via public IPs without <abbr title="Network Address Translation">NAT</abbr> or Transparent Bridging. So I split the ``/28`` subnet in two ``/29``:

* ``x.x.129.208/29``
* ``x.x.129.216/29``

This is how it looked once configured on the firewall router and DMZ:

{{<figure src="/media/advertise-subnet-with-opnsense-arp-2.png">}}Schema of the networks as I wanted to route them.{{</figure>}}

Notice how the firewall router has the same Internet-facing IP but with a different netmask now?

I thought that the OPNsense firewall router would be intelligent enough to advertise to the upstream ISP gateway, that the IP ``x.x.129.210`` and all IPs ``x.x.129.116``-``.123`` of the ``/29`` DMZ subnet were all to be routed via its ISP-facing IP (``x.x.129.210``).

But no, it doesn’t work like this out of the box. And there was no way for me to explicitly configure the ISP gateway to route the ``/29`` DMZ subnet to a specific IP.

## The Solution: Proxy ARP

After lots of DuckDuckGoing (If searching with Google is called Googling, then that’s what searching with [DuckDuckGo](https://duckduckgo.com) must be called, right?) to no avail, I finally stumbled over the *Virtual IP* settings in OPNsense, specifically of type *Proxy <abbr title="Address Resolution Protocol">ARP</title>*.

This Proxy ARP type of virtual IP allows you to broadcast the advertisement of IPs or subnets via an interface. So I entered:

* Mode: Proxy ARP
* Interface: WAN
* Address: ``x.x.129.216/29``

{{<figure src="/media/opnsense-virtual-ip-proxy-arp.png">}}Setting Proxy ARP virtual IPs in OPNsense.{{</figure>}}

In other words: The OPNsense firewall router now published to the ISP gateway that (besides the IP ``x.x.129.210``) it also was the recipient for all IP packets of the ``/29`` DMZ subnet. In a way, ARP allows to configure upstream routers that are not part of your own infrastructure.

This works like a charm. Servers in the DMZ configured with the public IPs of the second ``/29`` subnet are now able to communicate in both directions with the Internet.

---

{{<note>}}OPNsense automatically adds the DMZ subnet to its NAT, so don’t forget to remove it manually. In this case, it was translating the public subnet ``x.x.129.216/29`` to the public IP ``x.x.129.210``—which of course doesn’t make any sense whatsoever. It might work in the outbound direction, but your DMZ can’t be reached from the outside, rendering the DMZ useless.{{</note>}}
