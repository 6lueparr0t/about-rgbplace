# RGBplace.github.io
RGB place - Blog

## Link
[RGBplace.github.io](https://rgbplace.github.io)


## Memo

use header.html
```
{% for page in site.pages %}
	{% if page.title %}
  <a class="page-link" href="{{ page.url | relative_url }}">{{ page.title | escape }}</a>
	{% endif %}
{% endfor %}
```
