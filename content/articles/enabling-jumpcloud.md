---
title: ""
date: 2018-11-09
author: Michael Schmidle
slug: 
tags: [Tutorials]
description: ""
cover: 
---

If you followed [the](/articles/jumpcloud-curl-error-22/) [articles](/articles/tools-for-the-smart-start-up-in-2018-1/) on this blog you know that I have a lot of love for [JumpCloud](https://jumpcloud.com/). Currently I have 16 systems connected to their service: all PCs in the family, and a slew of virtual machines and [LXD containers](https://linuxcontainers.org/lxd/) hosted on a mini-server in the basement or in the cloud.

These <abbr title="Virtual Machines">VM</abbr>s and containers host useful applications like [Matomo](https://matomo.org/), [Openmediavault](https://www.openmediavault.org/), [Plex](https://www.plex.tv/), [Pi-Hole](https://pi-hole.net/), [Guacamole](https://guacamole.apache.org/), [Paperless](https://paperless.readthedocs.io/) etc. Whenever I change my password or private keys (or other user accounts or configuration policies for that matter), I do this once via JumpCloud—and all attached systems will update automatically in a matter of seconds.

---

{{<note-info>}}No, I'm still not affiliated with JumpCloud. All praise is given based on my personal experience with their service.{{</note-info>}}

---

However, there is a JumpCloud limitation that bugs me a little: it doesn't work out of the box with Linux-based systems like [Proxmox Virtual Environment](https://www.proxmox.com/en/proxmox-ve) or Openmediavault. Fortunately, there's a way around that limitation that I'd like to share with you in this article.

## The Issue with ``/etc/issue``

It seems that the Linux JumpCloud agent determines based on the small text file ``/etc/issue`` whether it is compatible to whatever system on which it was started. The content of this file is printed on the (virtual) screen after the system booted. It is displayed just above the login prompt and originally contains information about the operating system:

IMAGE

Software developers at Proxmox and Openmediavault have 
