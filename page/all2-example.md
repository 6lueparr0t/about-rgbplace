---
layout: page
title: Example
permalink: /all_posts/example
---

<div class="home">

{% if site.categories.example == null %}
{% else %}
    {% for post in site.categories.example %}
  <ul class="post-list">
      <li>
        <span class="post-meta">{{ post.date | date: "%Y-%m-%d %T" }}</span>
        <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
      </li>
  </ul>
    {% endfor %}
{% endif %}

</div>
