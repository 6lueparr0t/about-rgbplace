---
layout: page
title: Start
permalink: /start/
---

<div class="home">

{% if site.categories.start == null %}
{% else %}
    {% for post in site.categories.start %}
  <ul class="post-list">
      <li>
        <span class="post-meta">{{ post.date | date: "%Y-%m-%d %T" }}</span>
        <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
      </li>
  </ul>
    {% endfor %}
{% endif %}

</div>
