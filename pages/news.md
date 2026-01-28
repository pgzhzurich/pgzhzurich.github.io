---
layout: page
title: News
permalink: /news/
description: Alle Beiträge vom Paragliding Club Zürich
---

{% for post in site.posts %}

<article class="mb-5">
  <h3>
    {{ post.title }}
  </h3>
  <p class="text-muted small">
    {{ post.date | date: "%d.%m.%Y" }}
  </p>
  <p>
    {{ post.excerpt | strip_html }}
  </p>
  <a href="{{ post.url | relative_url }}" class="btn btn-outline-secondary">Weiterlesen</a>
</article>
{% endfor %}
