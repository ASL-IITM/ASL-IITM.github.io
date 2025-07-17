---
layout: home
---

<!-- Lab Intro -->
<p style="text-align: justify">
The Autonomous Systems Lab is a part of the
<a href="https://ed.iitm.ac.in/"> {{ "Engineering Design Department" | escape }}</a>
at
<a href="https://www.iitm.ac.in/"> {{ "IIT Madras. " | escape }}</a>
The lab was established in 2021, under the guidance of 
<a href="{{ "bijosebastian/" | relative_url }}">{{ "Dr. Bijo Sebastian. " | escape }}</a>
We focus on developing autonomous robotic solutions for a wide range of applications including autonomous navigation for mobile robots in indoor and outdoor environment, multi-agent coordination, intelligent grasping and manipulation. 
</p>

<!-- Owl Carousel Styles -->
<style>
.owl-carousel-fullwidth .item img {
  max-height: 400px; /* adjust as needed */
  width: auto;
  margin: 0 auto;
  display: block;
  object-fit: contain;
}
</style>

<link rel="stylesheet" href="/css/owl.carousel.min.css">
<link rel="stylesheet" href="/css/owl.theme.default.min.css">

<!-- Carousel Section -->
<div class="owl-carousel owl-carousel-fullwidth">
  <div class="item">
    <a href="#">
      <img src="/images/homepage/ASLGroup.jpeg" alt="Slide 1">
      <div class="slider-copy">
        <!-- <h2>Research in Action</h2> -->
      </div>
    </a>
  </div>
  <div class="item">
    <a href="#">
      <img src="/images/homepage/Lab_outing.jpeg" alt="Slide 2">
      <div class="slider-copy">
        <!-- <h2>Multi-Robot Systems</h2> -->
      </div>
    </a>
  </div>
  <div class="item">
    <a href="#">
      <img src="/images/homepage/Outing_Fall2023.jpg" alt="Slide 3">
      <div class="slider-copy">
        <!-- <h2>Human-Robot Collaboration</h2> -->
      </div>
    </a>
  </div>
</div>

<!-- Owl Carousel Scripts -->
---
layout: home
---

<!-- Lab Intro -->
<p style="text-align: justify">
The Autonomous Systems Lab is a part of the
<a href="https://ed.iitm.ac.in/"> {{ "Engineering Design Department" | escape }}</a>
at
<a href="https://www.iitm.ac.in/"> {{ "IIT Madras. " | escape }}</a>
The lab was established in 2021, under the guidance of 
<a href="{{ "bijosebastian/" | relative_url }}">{{ "Dr. Bijo Sebastian. " | escape }}</a>
We focus on developing autonomous robotic solutions for a wide range of applications including autonomous navigation for mobile robots in indoor and outdoor environment, multi-agent coordination, intelligent grasping and manipulation. 
</p>

<!-- Owl Carousel Styles -->
<style>
.owl-carousel-fullwidth .item img {
  max-height: 400px; /* adjust as needed */
  width: auto;
  margin: 0 auto;
  display: block;
  object-fit: contain;
}
</style>

<link rel="stylesheet" href="/css/owl.carousel.min.css">
<link rel="stylesheet" href="/css/owl.theme.default.min.css">

<!-- Carousel Section -->
<div class="owl-carousel owl-carousel-fullwidth">
  <div class="item">
    <a href="#">
      <img src="/images/homepage/ASLGroup.jpeg" alt="Slide 1">
      <div class="slider-copy">
        <!-- <h2>Research in Action</h2> -->
      </div>
    </a>
  </div>
  <div class="item">
    <a href="#">
      <img src="/images/homepage/Lab_outing.jpeg" alt="Slide 2">
      <div class="slider-copy">
        <!-- <h2>Multi-Robot Systems</h2> -->
      </div>
    </a>
  </div>
  <div class="item">
    <a href="#">
      <img src="/images/homepage/Outing_Fall2023.jpg" alt="Slide 3">
      <div class="slider-copy">
        <!-- <h2>Human-Robot Collaboration</h2> -->
      </div>
    </a>
  </div>
</div>

<!-- Owl Carousel Scripts -->
<script src="/js/jquery.min.js"></script>
<script src="/js/owl.carousel.min.js"></script>

<script>
  $(document).ready(function(){
    $(".owl-carousel-fullwidth").owlCarousel({
      items: 1,
      loop: true,
      margin: 10,
      nav: true,
      navText: ['&#10094;', '&#10095;'], // ← Left & Right arrow symbols
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true
    });
  });
</script>


#### Following is a list of our research areas and projects:

| - |
| :-------------: |
|<img align="left" style="padding: 10px" src="/images/disassembly/ur5.jpg" alt="Picture not available" width="400" > <br/> <br/> <a href="{{ "intelligent_grasping/" | relative_url }}"> {{ "__Intelligent grasping and manipulation:__" | escape }}</a>  : This research aims to develop perception, motion planning and control algorithms for intelligent grasping and manipulation in real world conditions. We also explore the application of intelligent grasping and manipulation for practical applications such as human-robot collaborative workspace. **This project is funded by the Accenture – IIT Madras Centre of Excellence.** |
||
| <img align="left" style="padding: 10px" src="/images/mobile_robot/mobile_vision.jpg" alt="Picture not available" width="400" > <br/> <br/> <a href="{{ "mobile_robot/" | relative_url }}"> {{ "__Motion Planning for Mobile Robots:__" | escape }}</a>  This research aims to develop autonomous navigation capabilities for mobile robots in indoor and outdoor environments. This includes localization of indoor mobile robots in GPS denied environment, and path planning in human centric environments as well. **This project is funded by the New Faculty Initiation Grant (NFIG) from IIT Madras.** |
||
| <img align="left" style="padding: 10px" src="/images/mobile_manipulation/mobile_manipulation.jpg" alt="Picture not available" width="400"> <br/> <br/> <a href="{{ "multi_agent_systems/" | relative_url }}"> {{ "__Multi-agent systems:__" | escape }}</a> Robotic systems have been deployed extensively for manipulation and transportation tasks in warehouses. But the majority of these applications involve a single robot interacting with an object in a given instant. This in turn limits the size and weight of the object that can be handled. Multi-agent systems provide a natural solution in this scenario. **This project is funded by the Start-up Research Grant (SRG) under Science & Engineering Research Board (SERB).**| 
||
| <img align="left" style="padding: 10px" src="/images/exo/exo.png" alt="Picture not available" width="400" > <br/> <br/> <a href="{{ "exoglove/" | relative_url }}"> {{ "__Designing an exoskeleton glove to help assist and rehabilitate brachial plexus patients:__" | escape }}</a>  This research aims to develop a 2 Degree of Freedom mechanism that could mimic the motion of a human finger. Extending this design into a full glove with series elastic actuation will allow us to create an exoskeleton glove that could assist patients in performing a wide variety of grasps. The final goal of this research at the Autonomous Systems Lab at IIT Madras, will be to deliver a viable product that could assist with the everyday challenges faced by patients in India. **This project is funded by the New Faculty Initiation Grant (NFIG) from IIT Madras.** |


#### Following is a list of our research areas and projects:

| - |
| :-------------: |
|<img align="left" style="padding: 10px" src="/images/disassembly/ur5.jpg" alt="Picture not available" width="400" > <br/> <br/> <a href="{{ "intelligent_grasping/" | relative_url }}"> {{ "__Intelligent grasping and manipulation:__" | escape }}</a>  : This research aims to develop perception, motion planning and control algorithms for intelligent grasping and manipulation in real world conditions. We also explore the application of intelligent grasping and manipulation for practical applications such as human-robot collaborative workspace. **This project is funded by the Accenture – IIT Madras Centre of Excellence.** |
||
| <img align="left" style="padding: 10px" src="/images/mobile_robot/mobile_vision.jpg" alt="Picture not available" width="400" > <br/> <br/> <a href="{{ "mobile_robot/" | relative_url }}"> {{ "__Motion Planning for Mobile Robots:__" | escape }}</a>  This research aims to develop autonomous navigation capabilities for mobile robots in indoor and outdoor environments. This includes localization of indoor mobile robots in GPS denied environment, and path planning in human centric environments as well. **This project is funded by the New Faculty Initiation Grant (NFIG) from IIT Madras.** |
||
| <img align="left" style="padding: 10px" src="/images/mobile_manipulation/mobile_manipulation.jpg" alt="Picture not available" width="400"> <br/> <br/> <a href="{{ "multi_agent_systems/" | relative_url }}"> {{ "__Multi-agent systems:__" | escape }}</a> Robotic systems have been deployed extensively for manipulation and transportation tasks in warehouses. But the majority of these applications involve a single robot interacting with an object in a given instant. This in turn limits the size and weight of the object that can be handled. Multi-agent systems provide a natural solution in this scenario. **This project is funded by the Start-up Research Grant (SRG) under Science & Engineering Research Board (SERB).**| 
||
| <img align="left" style="padding: 10px" src="/images/exo/exo.png" alt="Picture not available" width="400" > <br/> <br/> <a href="{{ "exoglove/" | relative_url }}"> {{ "__Designing an exoskeleton glove to help assist and rehabilitate brachial plexus patients:__" | escape }}</a>  This research aims to develop a 2 Degree of Freedom mechanism that could mimic the motion of a human finger. Extending this design into a full glove with series elastic actuation will allow us to create an exoskeleton glove that could assist patients in performing a wide variety of grasps. The final goal of this research at the Autonomous Systems Lab at IIT Madras, will be to deliver a viable product that could assist with the everyday challenges faced by patients in India. **This project is funded by the New Faculty Initiation Grant (NFIG) from IIT Madras.** |
