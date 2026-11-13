---
layout: page
title: Autonomous Driving and ADAS
permalink: /auto_drive/
ribbon_display: no
---

<!--
  PAGE STRUCTURE (same building blocks as grasping.markdown, styles in _sass/minima/_research-page.scss)
  - Hero (goal + looping clip)
  - Roadmap: four layers, each a <section class="gr-layer" id="...">
  - Each layer holds one or more <div class="gr-work"> blocks (media + text)
  - Vehicle card, funding

  YouTube: { % include youtube-video.html id="VIDEO_ID" title="Title" quality="sddefault" % }
  Loop:    { % include loop-video.html src="/videos/auto_drive/x.mp4" poster="/videos/auto_drive/x.jpg" alt="..." caption="..." % }
  Add class "gr-work--flip" to a gr-work block to put the media on the right.
-->

<div class="gr-hero">
  <div class="gr-hero__text">
    <p class="gr-kicker">Our goal</p>
    <p class="gr-hero__lead">A complete low-speed autonomy stack built for Indian roads: a vehicle that can drive itself on campuses, industrial parks and in stop-and-go traffic, and hand control back to its driver smoothly.</p>
    <p>Indian traffic is dense, mixed and unpredictable, and road infrastructure varies from street to street. Rather than adapting a system built elsewhere, we build the whole stack on our own test vehicle: making it drivable by computer, perceiving and predicting the traffic around it, and controlling it safely with a human in the loop.</p>
  </div>
  <div class="gr-hero__media">
    {% include loop-video.html src="/videos/auto_drive/driverless_dbw.mp4" poster="/videos/auto_drive/driverless_dbw.jpg" alt="The lab's open-frame electric test vehicle driving with nobody in the driver's seat" caption="Our test vehicle driving under computer control, with no one at the wheel." %}
  </div>
</div>

<ol class="gr-roadmap" aria-label="Research roadmap">
  <li><a href="#actuate"><span class="gr-roadmap__num">01</span><span class="gr-roadmap__title">Actuate</span><span class="gr-roadmap__sub">Making the vehicle drivable by computer</span></a></li>
  <li><a href="#perceive"><span class="gr-roadmap__num">02</span><span class="gr-roadmap__title">Perceive</span><span class="gr-roadmap__sub">Seeing Indian traffic</span></a></li>
  <li><a href="#predict"><span class="gr-roadmap__num">03</span><span class="gr-roadmap__title">Predict</span><span class="gr-roadmap__sub">Where other vehicles will go</span></a></li>
  <li><a href="#drive"><span class="gr-roadmap__num">04</span><span class="gr-roadmap__title">Drive</span><span class="gr-roadmap__sub">Control with a human in the loop</span></a></li>
</ol>

<!-- ============================ 01 ACTUATE ============================ -->
<section class="gr-layer" id="actuate">
  <header class="gr-layer__head">
    <span class="gr-layer__num">01</span>
    <div>
      <p class="gr-kicker">Actuate</p>
      <h2>Making the vehicle drivable by computer</h2>
    </div>
  </header>
  <p class="gr-layer__intro">Our test vehicle, a four-seater with a 5 kW induction motor, came with no drive-by-wire capability. Before any autonomy could run, we had to give a computer control of the steering, throttle and brakes without taking it away from the driver.</p>

  <div class="gr-work">
    <div class="gr-work__media">
      {% include loop-video.html src="/videos/auto_drive/joystick_dbw.mp4" poster="/videos/auto_drive/joystick_dbw.jpg" alt="View from inside the vehicle as it is steered and driven with a game controller" caption="Drive-by-wire: steering, throttle and braking commanded from a controller." %}
    </div>
    <div class="gr-work__text">
      <h3>Steer-by-wire and drive-by-wire</h3>
      <p>We added a BLDC motor on the steering shaft for steer-by-wire, then took control of the throttle, the motor brake and the manual brake through a linear actuator. A safety override lets the driver take back control at any moment through the throttle pedal, the brake or the steering wheel.</p>
      <p>This retrofit is now the base for everything else on this page.</p>
    </div>
  </div>
</section>

<!-- ============================ 02 PERCEIVE ============================ -->
<section class="gr-layer" id="perceive">
  <header class="gr-layer__head">
    <span class="gr-layer__num">02</span>
    <div>
      <p class="gr-kicker">Perceive</p>
      <h2>Seeing Indian traffic</h2>
    </div>
  </header>
  <p class="gr-layer__intro">Two-wheelers, auto-rickshaws, buses and pedestrians share the same road, often without lane discipline. The vehicle has to detect and tell apart every one of them, and there is little public data from roads like ours to learn from.</p>

  <div class="gr-work gr-work--flip">
    <div class="gr-work__media">
      {% include loop-video.html src="/videos/auto_drive/lidar_classification.mp4" poster="/videos/auto_drive/lidar_classification.jpg" alt="LiDAR point cloud with classified vehicles next to the synchronised camera view of a campus road" caption="Vehicles detected and classified in the LiDAR point cloud, with the synchronised camera view." %}
    </div>
    <div class="gr-work__text">
      <h3>LiDAR-based vehicle classification</h3>
      <p>We classify vehicles in LiDAR data by combining their shape with how they move. Fusing geometric and kinematic features helps separate vehicle classes that look alike in a single scan.</p>
      <p class="gr-papers"><span class="gr-venue">IEEE APSCON 2026</span> <a href="https://doi.org/10.1109/APSCON68325.2026.11497160">Paper</a></p>

      <h3>LiDAR-camera fusion for 3D detection</h3>
      <p>Objects detected in the LiDAR point cloud are matched with camera detections, which supply the object class. This gives the planner 3D positions and labels for the traffic around the vehicle.</p>
      <div class="gr-actions">
        {% include youtube-video.html id="pXp1Ph0vvJw" title="Perception stack demo" %}
        {% include youtube-video.html id="EiqNRwigJp4" title="Perception for Indian road conditions" %}
      </div>
    </div>
  </div>

  <div class="gr-app gr-app--dataset">
    <p class="gr-kicker">Open dataset</p>
    <h3>Chennai Traffic Dataset</h3>
    <p>Synchronised camera data collected on urban roads in Chennai, covering straight roads, curves and intersections, with annotated images. It is openly available under a CC BY 4.0 licence for anyone working on perception for Indian traffic.</p>
    <p class="gr-papers"><span class="gr-venue">Zenodo 2026</span> <a href="https://doi.org/10.5281/zenodo.21545806">Download</a></p>
  </div>
</section>

<!-- ============================ 03 PREDICT ============================ -->
<section class="gr-layer" id="predict">
  <header class="gr-layer__head">
    <span class="gr-layer__num">03</span>
    <div>
      <p class="gr-kicker">Predict</p>
      <h2>Where other vehicles will go</h2>
    </div>
  </header>
  <p class="gr-layer__intro">Knowing where vehicles are now is not enough to plan safely. The vehicle needs to know where they could be in the next few seconds, and how confident it can be about each possibility.</p>

  <div class="gr-work">
    <div class="gr-work__media">
      {% include youtube-video.html id="TLtha1oYV9o" title="Multi-hypothesis trajectory prediction of surrounding vehicles" quality="sddefault" %}
    </div>
    <div class="gr-work__text">
      <h3>Multi-hypothesis trajectory prediction</h3>
      <p>For each detected vehicle, we predict several possible future trajectories over a fixed time horizon, such as going straight or turning at a junction. A Monte Carlo extended Kalman filter, constrained by the road map, keeps each prediction consistent with the road layout and gives each one a confidence. The planner and controller use these predictions to keep the vehicle safe.</p>
      <p class="gr-papers"><span class="gr-venue">IEEE STPEC 2025</span> <a href="https://doi.org/10.1109/STPEC66316.2025.11490651">Paper</a></p>
    </div>
  </div>
</section>

<!-- ============================ 04 DRIVE ============================ -->
<section class="gr-layer" id="drive">
  <header class="gr-layer__head">
    <span class="gr-layer__num">04</span>
    <div>
      <p class="gr-kicker">Drive</p>
      <h2>Control with a human in the loop</h2>
    </div>
  </header>
  <p class="gr-layer__intro">At low speeds in dense traffic, the vehicle must follow the traffic ahead comfortably, and the driver must be able to take over, or hand back, at any moment without a jolt.</p>

  <div class="gr-work gr-work--flip">
    <div class="gr-work__media">
      {% include loop-video.html src="/videos/auto_drive/l2_stack_sim.mp4" poster="/videos/auto_drive/l2_stack_sim.jpg" alt="Simulated city with the vehicle following a planned route, next to plots of planned and tracked paths" caption="Our L2 autonomy stack in simulation: global and local planning with steering and speed control (3× speed)." %}
    </div>
    <div class="gr-work__text">
      <h3>Adaptive cruise control for stop-and-go traffic</h3>
      <p>A model-based adaptive cruise controller keeps a safe, comfortable gap to the vehicle ahead through repeated stopping and starting, the norm in Indian city traffic. We validated it in real time on hardware, not only in simulation.</p>
      <p class="gr-papers"><span class="gr-venue">IEEE Access 2026</span> <a href="https://doi.org/10.1109/ACCESS.2026.3716361">Paper</a></p>

      <h3>Smooth handover through the steering wheel</h3>
      <p>Switching between the automation and the driver is one of the riskiest moments in assisted driving. Our interactive steering approach manages the transition through the steering wheel itself, so control changes hands smoothly instead of abruptly.</p>
      <p class="gr-papers"><span class="gr-venue">IEEE STPEC 2025</span> <a href="https://doi.org/10.1109/STPEC66316.2025.11490991">Paper</a></p>

      <h3>An L2 autonomy stack, built from the ground up</h3>
      <p>Our own modular software stack brings together a global planner, a local planner and a vehicle controller. It is designed to run independently of any particular simulator or ROS version, and is developed in ROS 2 with the Webots simulator before moving to the vehicle.</p>
      <p class="gr-papers"><span class="gr-venue gr-venue--muted">Indian copyright SW-21807 (L2 autonomous driving software stack)</span></p>
    </div>
  </div>
</section>

<!-- ============================ VEHICLE ============================ -->
<section class="gr-apps">
  <h2>Our test vehicle</h2>
  <div class="gr-app-feature">
    <figure class="gr-figure">
      <img src="{{ '/images/auto_drive/Vehicle_with_sensor.png' | relative_url }}" alt="The lab's test vehicle with an Ouster 32-channel LiDAR, Xsens Vision Navigator, IDS U3 RGB camera and SR75 radar labelled" loading="lazy">
    </figure>
    <div class="gr-app-feature__text">
      <p class="gr-kicker">Hardware</p>
      <h3>A low-speed electric four-seater</h3>
      <p>Our platform is a four-seat electric vehicle with a 5 kW induction motor, built for low-speed operation and retrofitted in the lab for full drive-by-wire. Its sensors are an Ouster 32-channel LiDAR, IDS U3 RGB cameras, an SR75 medium-range radar and an Xsens Vision Navigator.</p>
      <p>We are aiming the stack at low-speed settings where autonomy can be useful soon: campuses and corporate parks, airports, shipyards and other controlled or semi-structured spaces.</p>
    </div>
  </div>
</section>

<section class="gr-funding gr-funding--text">
  <p>Supported by the <strong>New Faculty Seed Grant (NFSG), IIT Madras</strong>.</p>
</section>

<script>
  // Respect reduced-motion preferences: stop autoplaying loops.
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.gr-loop video').forEach(function (v) {
      v.removeAttribute('autoplay'); v.pause(); v.setAttribute('controls', '');
    });
  }
</script>
