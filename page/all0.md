---
layout: page
title: All Posts
permalink: /all_posts/
---

<div class="home">

<hr/>

{% if site.categories.start == null %}
{% else %}
	<h1>Start</h1>
    {% for post in site.categories.start %}
  <ul class="post-list">
      <li>
        <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}
          <span class="post-datetime">{{ post.date | date: "%Y-%m-%d" }}</span>
        </a>
      </li>
  </ul>
    {% endfor %}
{% endif %}

<hr/>

{% if site.categories.example == null %}
{% else %}
	<h1>Example</h1>
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
