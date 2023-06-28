---
layout: page
title: Team
permalink: /team/
ribbon_display: yes
---


| - |
| :-------------: |
||
| __Faculty__ |
| <img align="left" style="padding: 10px" src="/images/bijo.jpg" alt="Picture not available" width="300"> <br/> <br/> <a href="https://asl-iitm.github.io/bijosebastian/"> {{ "__Bijo Sebastian__" | escape }}</a>  <br/>  Assistant Professor <br/> Department of Engineering Design, IIT Madras <br/> <a href="https://www.linkedin.com/in/bijo-sebastian-389153147/"> {{ "LinkedIn" | escape }}</a>|
| __MS Scholars__ |

{% assign number_printed = 0 %}
{% for member in site.data.team_members %}
{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="/images/bijo.jpg" class="img-responsive" alt="Picture not available" width="25%" style="float: left" />
  <a href="https://asl-iitm.github.io/bijosebastian/"> {{ "__Bijo Sebastian__" | escape }}</a>  <br/>  Assistant Professor <br/> Department of Engineering Design, IIT Madras <br/> <a href="https://www.linkedin.com/in/bijo-sebastian-389153147/"> {{ "LinkedIn" | escape }}</a>|
  <ul style="overflow: hidden">

  </ul>
</div>
{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

<!-- -->

| - | - | 
| :-------------: | :-------------: |
| <img align="left" style="padding: 10px" src="/images/students/durva.jpg" alt="Picture not available" width="300"> <br/> <br/> __Durva Gaikwad__ <br/>  Department of Engineering Design, IIT Madras <br/> <a href="https://www.linkedin.com/in/durva-gaikwad-48a36120a/"> {{ "LinkedIn" | escape }}</a> | <img align="left" style="padding: 10px" src="/images/students/shreyash.jpg" alt="Picture not available" width="300"> <br/> <br/> __Shreyash Gadgil__ <br/>  Department of Engineering Design, IIT Madras <br/> <a href="https://www.linkedin.com/in/shreyash-gadgil/"> {{ "LinkedIn" | escape }}</a> |
|||
|<img align="left" style="padding: 10px" src="/images/students/eshant.jpg" alt="Picture not available" width="300"> <br/> <br/> __Eshant Jha__ <br/>   Interdisciplinary Research Programme (IDRP) <br/> Dept. of Ocean Engineering & Dept. of Engineering Design, IIT Madras <br/> <a href="https://www.linkedin.com/in/eshant-jha-b6a29a116/"> {{ "LinkedIn" | escape }}</a> | <img align="left" style="padding: 10px" src="/images/students/vrijesh.jpeg" alt="Picture not available" width="300"> <br/> <br/> __Vrijesh Kunwar__ <br/>   Junior Research Fellow <br/>Department of Engineering Design, IIT Madras <br/> <a href="https://www.linkedin.com/in/vrijesh-kunwar-47b236130/"> {{ "LinkedIn" | escape }}</a> |
|||
|<img align="left" style="padding: 10px" src="/images/students/sayooj.jpeg" alt="Picture not available" width="300"> <br/> <br/> __Sayooj P Raveendran__ <br/>   Senior Project Engineer <br/> Department of Engineering Design, IIT Madras <br/> <a href="https://www.linkedin.com/in/sayooj-p/"> {{ "LinkedIn" | escape }}</a> | |

**We are  looking for new PhD students, Master students, and Undergraduates to join the team** 
<a href="{{ "openings/" | relative_url }}"> {{ "__see openings__" | escape }}</a>

| - |
| :-------------: |
||
| __Industry Partners__ |
|<img align="left" style="padding: 10px" src="/images/industry_partners/accenture.png" alt="Picture not available" width="300"> <br/> <br/> <img align="left" style="padding: 10px" src="/images/industry_partners/caterpillar.jpg" alt="Picture not available" width="300"> <br/> <br/>|
