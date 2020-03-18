---
title: Enabling JumpCloud on Unsupported Linux Systems
publishdate: 2018-11-09
tags: [Tutorials]
summary: JumpCloud officially supports Debian, yet refuses to run on Debian-based systems like Proxmox Virtual Environment and Openmediavault. Let's fix that.
cover: 7ff88dd5-c612-415a-aaea-640800485086
---

If you followed the articles on this blog you know that I have a lot of love<sup>[1](/articles/jumpcloud-curl-error-22/), [2](/articles/tools-for-the-smart-start-up-in-2018-1/)</sup> for [JumpCloud](https://jumpcloud.com/).

However, there is a JumpCloud limitation that bugs me a little: It refuses to run on some Linux-based systems like [Proxmox Virtual Environment](https://www.proxmox.com/en/proxmox-ve) or [Openmediavault](https://www.openmediavault.org/) even though it officially supports the underlying Linux version.

Fortunately, there's a **way around that limitation** that I'd like to share with you in this article.

## The Issue with ``/etc/issue``

It seems that the JumpCloud Linux agent checks the small text file ``/etc/issue`` to determine whether it is compatible with the system on which it was started. The content of this file is printed on the (virtual) screen after the system booted. It is displayed just above the login prompt and originally contains information about the operating system:

{{<figure src="/media/debian-issue.png">}}The current version of Debian identifies itself as ``Debian GNU/Linux 9``{{</figure>}}

Software developers at Proxmox and Openmediavault have used this file to display additional information at the login prompt about how to use their applications:

{{<figure src="/media/pve-issue.png">}}Proxmox Virtual Environment shows instructions on how to connect to its web interface{{</figure>}}

Of course, now the content of ``/etc/issue`` doesn't match with the records in JumpCloud's database anymore. Since this additional information can change (i.e. when you configure a different <abbr title="Internet Protocol">IP</abbr> address on the system), the ``/etc/issue`` is **regenerated every time the system boots** to reflect the proper current settings. So simply replacing the content of the file with the original won't cut it. Now what?

## Stop and Disable the Respective Issue Service

After [DuckDuckGo](https://duckduckgo.com/)ing a bit, I was able to identify the services that regenerate ``/etc/issue`` after each boot:

* On Proxmox, it's ``pvebanner``
* On Openmediavault, it's ``openmediavault-issue`` (OK, I could have guessed that one)

So, to stop and disable these services ... just stop and disable them:

    # For Proxmox Virtual Environment
    sudo systemctl stop pvebanner && sudo systemctl disable pvebanner
    
    # For Openmediavault
    sudo systemctl stop openmediavault-issue && sudo systemctl disable openmediavault-issue

Disabling is what prevents the service from being restarted after the system boots. Great, we finally can revert the file ``/etc/issue`` back to its original content: Open the file (i.e. ``sudo nano /etc/issue``), then paste the complete string ``Debian GNU/Linux 9 \n \l``, and save the file. Done! After a reboot, the file still reads the same.

Installing the JumpCloud agent on these systems now **works as expected**. The systems report as ``Debian 9`` in the JumpCloud console from where they can be managed just as any other system.

## Conclusion

I am no Linux expert but isn't there a better way to reliably determine the distribution and version of a Linux system—other than checking the text file ``/etc/issue``? I wish, JumpCloud could figure out something.

If this issue bugs you too, let JumpCloud know by [voting on my feature request](https://support.jumpcloud.com/customer/portal/questions/17167497-agent-support-for-proxmox-and-openmediavault-debian-9-) I posted on their site over a year ago. Thanks. At least, we have a workaround with the above hack.
