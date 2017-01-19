---
layout: page
title: Example
permalink: /example/
---

<div class="home">
<hr/>

{% if site.categories.example == null %}
{% else %}
    {% for post in site.categories.example %}
  <ul class="post-list">
      <li>
        <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}
          <span class="post-datetime">{{ post.date | date: "%Y-%m-%d" }}</span>
        </a>
      </li>
  </ul>
    {% endfor %}
{% endif %}

</div>
