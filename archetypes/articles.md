---
title: "{{ replace .Name "-" " " | title }}"
date: {{ dateFormat "2006-01-02" .Date }}
authors: ["List authors here"]
slug: "{{ .Name }}"
tags: ["List tags here"]
description: "Write description here"
cover: "Link to a cover picture here"
draft: true
---