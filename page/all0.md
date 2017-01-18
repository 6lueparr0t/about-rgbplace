---
layout: page
title: All Posts
permalink: /all_posts/
---

<div class="home">

{% if site.categories.start == null %}
{% else %}
    {% for post in site.categories.start %}
  <ul class="post-list">
	<h1>Start</h1>
      <li>
        <span class="post-meta">{{ post.date | date: "%Y-%m-%d %T" }}</span>
        <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
      </li>
  </ul>
    {% endfor %}
{% endif %}

<hr/>

{% if site.categories.example == null %}
{% else %}
    {% for post in site.categories.example %}
  <ul class="post-list">
	<h1>example</h1>
      <li>
        <span class="post-meta">{{ post.date | date: "%Y-%m-%d %T" }}</span>
        <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
      </li>
  </ul>
    {% endfor %}
{% endif %}


</div>
