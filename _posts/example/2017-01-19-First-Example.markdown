---
layout: post
title:  "First-Example"
date:   2017-01-19 02:10:03 +0900
categories: example
---

안녕하세요.

jekyll 첫번째 테스트 글입니다.

github 에서 꽤 좋은 서비스를 운영하고 있었군요.. jekyll 이라는 존재에 대해선 알고 있었는데, 이런식으로 간단하게 맘대로 글을 올릴 수 있다는 것을 알게되어, 설치해보게 되었습니다.

포스트 쓰기에는 영~ 아니다 싶지만 우선 원하는 글이나 스크립트 코드를 24시간 풀로 돌릴 수 있다는 것이 큰 장점이고
PHP에서 작업하는 것은 힘들어보이지만, 거의 웹호스팅 급의 기능을 수행하는 것과 `Git` 을 이용해 블로그 업데이트를 하는 것이 참 신기하네요.

멋집니다!

앞으로 꾸준히 업데이트 해 나갈 생각이고 아직 개발 단계라 많이 부족한 사이트입니다..
테마를 봤더니 커스터마이징 하기가 좀 힘들어보여서, 직접 만들어나갈 생각입니다.

메인 홈에 쓰인 스크립트에 대해 남겨보자면, 실시간으로 시간을 출력하는 코드입니다.

{% highlight html linenos%}
<span id="clock"></span>
{% endhighlight %}

여기서는 태그 바로 아래 이 스크립트를 작성했습니다. `<script> ... </script>`로 감싸줍니다.
{% highlight javascript linenos %}
function checkTime(i) {
    if (i < 10) i = "0" + i;
    return i;
}

function startTime() {
    var today = new Date();
    var year = today.getFullYear();
    var month= checkTime(today.getMonth()+1);
    var day  = checkTime(today.getDate());
    var h = checkTime(today.getHours());
    var m = checkTime(today.getMinutes());
    var s = checkTime(today.getSeconds());

    document.getElementById('clock').innerHTML =
        year + "-" + month + "-"+ day + " " + h + ":" + m + ":" + s + " +0900";
}

window.addEventListener("onload", setInterval(startTime, 500));
// ID가 'clock' 인 태그를 찾아 0.5초에 한번씩 시간을 업데이트 합니다.
{% endhighlight %}

post로 작성된 페이지에서는 결과 확인이 안되네요.
[w3school][w3school_link] 홈페이지를 통해 한번 확인해보시면 잘 나옵니다.

그럼 앞으로도 꾸준히 업데이트 하도록 하겠습니다!

[w3school_link]: http://www.w3schools.com/
