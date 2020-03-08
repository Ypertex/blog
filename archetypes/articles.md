---
title: "{{ replace .Name "-" " " | title }}"
date: {{ dateFormat "2006-01-02" .Date }}
slug: "{{ .Name }}"
tags: []
description: ""
resources:
- name: cover
  src: ""
---