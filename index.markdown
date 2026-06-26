---
layout: home
---

<div class="lab-snapshot">
  <p class="lab-snapshot__desc">
    The Autonomous Systems Lab is a part of the
    <a href="https://ed.iitm.ac.in/">Engineering Design Department</a>
    at
    <a href="https://www.iitm.ac.in/">IIT Madras.</a>
    The lab was established in 2021, under the guidance of
    <a href="{{ 'bijosebastian/' | relative_url }}">Dr. Bijo Sebastian.</a>
    We focus on developing autonomous robotic solutions for a wide range of
    applications including autonomous navigation for mobile robots in indoor and
    outdoor environments, multi-agent coordination, intelligent grasping and
    manipulation.
  </p>
  <div class="lab-snapshot__grid">
    <div class="lab-snapshot__item">
      <span class="lab-snapshot__value">2021</span>
      <span class="lab-snapshot__label">Established</span>
    </div>
    <div class="lab-snapshot__item">
      <span class="lab-snapshot__value">5</span>
      <span class="lab-snapshot__label">PhD Scholars</span>
    </div>
    <div class="lab-snapshot__item">
      <span class="lab-snapshot__value">5</span>
      <span class="lab-snapshot__label">MS Scholars</span>
    </div>
    <div class="lab-snapshot__item">
      <span class="lab-snapshot__value">13</span>
      <span class="lab-snapshot__label">Journal Papers</span>
    </div>
    <div class="lab-snapshot__item">
      <span class="lab-snapshot__value">22</span>
      <span class="lab-snapshot__label">Conference Papers</span>
    </div>
    <div class="lab-snapshot__item">
      <span class="lab-snapshot__value">4</span>
      <span class="lab-snapshot__label">Patents</span>
    </div>
  </div>
  <div class="lab-snapshot__actions">
    <a href="{{ 'openings/' | relative_url }}" class="lab-snapshot__btn lab-snapshot__btn--primary">Join Our Team</a>
    <a href="{{ 'publications/' | relative_url }}" class="lab-snapshot__btn lab-snapshot__btn--outline">View Publications</a>
  </div>
</div>

<!-- Owl Carousel -->
<link rel="stylesheet" href="/css/owl.carousel.min.css">
<link rel="stylesheet" href="/css/owl.theme.default.min.css">

<div class="owl-carousel owl-carousel-fullwidth">
  <div class="item">
    <img src="/images/homepage/ASLGroup.jpeg" alt="ASL research group photo" loading="eager">
  </div>
  <div class="item">
    <img src="/images/homepage/Lab_outing.jpeg" alt="Lab outing" loading="lazy">
  </div>
  <div class="item">
    <img src="/images/homepage/Outing_Fall2023.jpg" alt="Fall 2023 group outing" loading="lazy">
  </div>
  <div class="item">
    <img src="/images/homepage/RoboticsGroup.JPG" alt="Robotics research group" loading="lazy">
  </div>
  <div class="item">
    <img src="/images/homepage/Shreyash_conf_presentation.jpg" alt="Conference presentation by Shreyash" loading="lazy">
  </div>
  <div class="item">
    <img src="/images/homepage/Talk-at-Accenture-Labs-Bangalore.jpg" alt="Talk at Accenture Labs, Bangalore" loading="lazy">
  </div>
</div>

<script src="/js/owl.carousel.min.js"></script>
<script>
  $(document).ready(function(){
    $(".owl-carousel-fullwidth").owlCarousel({
      items: 1,
      loop: true,
      margin: 10,
      nav: true,
      navText: ['&#10094;', '&#10095;'],
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true
    });
  });
</script>

<div class="section-heading">
  <h3>Research Areas & Projects</h3>
</div>

{% include research-card.html title="Intelligent Grasping and Manipulation" image="/images/disassembly/ur5.jpg" alt="UR5 robot arm performing grasping task" url="/intelligent_grasping/" description="Developing perception, motion planning and control algorithms for intelligent grasping and manipulation in real world conditions, including human-robot collaborative workspaces." funding="Funded by the Accenture – IIT Madras Centre of Excellence." %}

{% include research-card.html title="Motion Planning for Mobile Robots" image="/images/mobile_robot/mobile_vision.jpg" alt="Indoor autonomous mobile robot with vision sensors" url="/mobile_robot/" description="Developing autonomous navigation capabilities for mobile robots in indoor and outdoor environments, including localization in GPS-denied environments and path planning in human-centric spaces." funding="Funded by the New Faculty Initiation Grant (NFIG) from IIT Madras." %}

{% include research-card.html title="Multi-Agent Systems" image="/images/mobile_manipulation/mobile_manipulation.jpg" alt="Multi-robot cooperative manipulation system" url="/multi_agent_systems/" description="Multi-agent systems for cooperative manipulation and transportation tasks, enabling multiple robots to handle objects beyond the capability of a single robot." funding="Funded by the Start-up Research Grant (SRG) under SERB." %}

{% include research-card.html title="Autonomous Driving and ADAS" image="/images/auto_drive/vehicle_suite.png" alt="Autonomous vehicle sensor suite" url="/auto_drive/" description="Development of autonomous driving and Advanced Driver-Assistance Systems tailored specifically for Indian road and traffic conditions, including perception, planning, and control for electric vehicles." funding="Funded by the New Faculty Seed Grant (NFSG) from IIT Madras." %}
