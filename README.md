# RGBplace.github.io
RGB place - Github Blog

## Link
[github.RGBplace.com](http://github.rgbplace.com)


## Memo

1. set alias

```
alias jkhome="  cd $JEKYLL"
alias jkcss="   cd $JEKYLL/_sass/"

alias jkserv="jkhome; jekyll serve"
alias jkpush="jkhome; git add .; git commit -a -m 'auto commit `date '+%Y-%m-%d %T'`'; git push origin master"
alias jkpull="jkhome; git pull"
alias jktime="date '+%Y-%m-%d %H:%M:%S %z'"
```

2. set menu link
- _includes/header.html
```
{% for page in site.pages %}
	{% if page.title %}
  <a class="page-link" href="{{ page.url | relative_url }}">{{ page.title | escape }}</a>
	{% endif %}
{% endfor %}
```
