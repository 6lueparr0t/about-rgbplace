# RGBplace.github.io
RGB place - GitHub Blog

## Link
[github.RGBplace.com](https://github.rgbplace.com)


## Memo

use header.html
```
{% for page in site.pages %}
	{% if page.title %}
  <a class="page-link" href="{{ page.url | relative_url }}">{{ page.title | escape }}</a>
	{% endif %}
{% endfor %}
```
