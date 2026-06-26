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
  <div class="lab-snapshot__actions">
    <a href="{{ 'openings/' | relative_url }}" class="lab-snapshot__btn lab-snapshot__btn--primary">Join Our Team</a>
    <a href="{{ 'publications/' | relative_url }}" class="lab-snapshot__btn lab-snapshot__btn--outline">View Publications</a>
  </div>
</div>

<!-- Owl Carousel -->
<link rel="stylesheet" href="/css/owl.carousel.min.css">
<link rel="stylesheet" href="/css/owl.theme.default.min.css">

<div class="carousel-news-row">

  <div class="carousel-news-row__carousel">
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
  </div>

  <div class="carousel-news-row__news">
    <h4 class="news-ticker__title">Latest News</h4>
    <div class="news-ticker">
      <div class="news-ticker__track">
        <!-- To add a news item, copy one news-ticker__item div. Newest first. -->
        <div class="news-ticker__item">
          <span class="news-ticker__date">Jun 2026</span>
          <span class="news-ticker__text">Paper on LiDAR-based vehicle classification accepted at IEEE APSCON 2026, Delhi.</span>
        </div>
        <div class="news-ticker__item">
          <span class="news-ticker__date">May 2026</span>
          <span class="news-ticker__text">Journal paper on cooperative manipulation published in ASME J. Mechanisms and Robotics.</span>
        </div>
        <div class="news-ticker__item">
          <span class="news-ticker__date">Dec 2025</span>
          <span class="news-ticker__text">Best Paper Award at IEEE STPEC 2025, NIT Goa for intelligent grasp planning work.</span>
        </div>
        <div class="news-ticker__item">
          <span class="news-ticker__date">Oct 2025</span>
          <span class="news-ticker__text">QuickGrasp paper accepted at IEEE ICRA 2025, Atlanta.</span>
        </div>
        <div class="news-ticker__item">
          <span class="news-ticker__date">Sep 2025</span>
          <span class="news-ticker__text">Journal paper on three-finger grasp planning published in J. Intelligent &amp; Robotic Systems.</span>
        </div>
        <div class="news-ticker__item">
          <span class="news-ticker__date">2025</span>
          <span class="news-ticker__text">Dr. Bijo Sebastian receives Award for Excellence in Teaching, IIT Madras.</span>
        </div>
        <div class="news-ticker__item">
          <span class="news-ticker__date">Dec 2024</span>
          <span class="news-ticker__text">Two papers presented at IEEE IICAIET 2024, Kota Kinabalu, Malaysia.</span>
        </div>
        <div class="news-ticker__item">
          <span class="news-ticker__date">Aug 2024</span>
          <span class="news-ticker__text">Paper on landmark placement for indoor localization presented at ASME IDETC/CIE 2024.</span>
        </div>
        <div class="news-ticker__item">
          <span class="news-ticker__date">Apr 2024</span>
          <span class="news-ticker__text">Best Presentation Award at IEEE ICCAR 2024, Singapore.</span>
        </div>
        <div class="news-ticker__item">
          <span class="news-ticker__date">May 2024</span>
          <span class="news-ticker__text">U.S. Patent No. 11986033 granted for robotic exoskeleton glove system.</span>
        </div>
      </div>
    </div>
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

  // News ticker auto-scroll with seamless loop
  $(window).on('load', function(){
    var ticker = document.querySelector('.news-ticker');
    if (!ticker) return;
    var track = ticker.querySelector('.news-ticker__track');
    if (!track || track.scrollHeight <= ticker.clientHeight) return;

    var items = track.innerHTML;
    track.innerHTML = items + items;

    var speed = 0.3;
    var paused = false;

    ticker.addEventListener('mouseenter', function(){ paused = true; });
    ticker.addEventListener('mouseleave', function(){ paused = false; });

    setTimeout(function(){
      var halfHeight = track.scrollHeight / 2;

      function step() {
        if (!paused) {
          ticker.scrollTop += speed;
          if (ticker.scrollTop >= halfHeight) {
            ticker.scrollTop = 0;
          }
        }
        requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }, 500);
  });
</script>

<div class="section-heading">
  <h3>Research Areas & Projects</h3>
</div>

{% include research-card.html title="Intelligent Grasping and Manipulation" image="/images/disassembly/ur5.jpg" alt="UR5 robot arm performing grasping task" url="/intelligent_grasping/" description="Developing perception, motion planning and control algorithms for intelligent grasping and manipulation in real world conditions, including human-robot collaborative workspaces." funding="Funded by the Accenture – IIT Madras Centre of Excellence." %}

{% include research-card.html title="Motion Planning for Mobile Robots" image="/images/mobile_robot/mobile_vision.jpg" alt="Indoor autonomous mobile robot with vision sensors" url="/mobile_robot/" description="Developing autonomous navigation capabilities for mobile robots in indoor and outdoor environments, including localization in GPS-denied environments and path planning in human-centric spaces." funding="Funded by the New Faculty Initiation Grant (NFIG) from IIT Madras." %}

{% include research-card.html title="Multi-Agent Systems" image="/images/mobile_manipulation/mobile_manipulation.jpg" alt="Multi-robot cooperative manipulation system" url="/multi_agent_systems/" description="Multi-agent systems for cooperative manipulation and transportation tasks, enabling multiple robots to handle objects beyond the capability of a single robot." funding="Funded by the Start-up Research Grant (SRG) under SERB." %}

{% include research-card.html title="Autonomous Driving and ADAS" image="/images/auto_drive/vehicle_suite.png" alt="Autonomous vehicle sensor suite" url="/auto_drive/" description="Development of autonomous driving and Advanced Driver-Assistance Systems tailored specifically for Indian road and traffic conditions, including perception, planning, and control for electric vehicles." funding="Funded by the New Faculty Seed Grant (NFSG) from IIT Madras." %}
