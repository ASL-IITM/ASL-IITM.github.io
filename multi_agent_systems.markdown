---
layout: page
title: Multi-Agent Systems
permalink: /multi_agent_systems/
ribbon_display: no
---

<!--
  PAGE STRUCTURE (same building blocks as grasping.markdown, styles in _sass/minima/_research-page.scss)
  - Hero (goal + looping clip)
  - Roadmap: layers, each a <section class="gr-layer" id="...">
  - Each layer holds one or more <div class="gr-work"> blocks (media + text)
  - Funding

  YouTube: { % include youtube-video.html id="VIDEO_ID" title="Title" quality="sddefault" % }
  Loop:    { % include loop-video.html src="/videos/multi_agent/x.mp4" poster="/videos/multi_agent/x.jpg" alt="..." caption="..." % }
  Add class "gr-work--flip" to a gr-work block to put the media on the right.
-->

<div class="gr-hero">
  <div class="gr-hero__text">
    <p class="gr-kicker">Our goal</p>
    <p class="gr-hero__lead">Teams of robots, on land and on water, that plan together, keep out of each other's way, and take on jobs that no single robot could do alone.</p>
    <p>A team is only useful if its members can share space safely. So we start with coordination, carry it into settings where traffic rules matter, and then build towards robots that physically work together on one task.</p>
  </div>
  <div class="gr-hero__media">
    {% include loop-video.html src="/videos/multi_agent/three_robot_planning.mp4" poster="/videos/multi_agent/three_robot_planning.jpg" alt="Three small robots moving through a walled arena, with their planned paths drawn on a map" caption="Three robots planning decentralised, collision-free paths through a shared arena: planned paths (left), overhead camera (right)." %}
  </div>
</div>

<ol class="gr-roadmap gr-roadmap--3" aria-label="Research roadmap">
  <li><a href="#coordinate"><span class="gr-roadmap__num">01</span><span class="gr-roadmap__title">Coordinate</span><span class="gr-roadmap__sub">Who goes where, and when</span></a></li>
  <li><a href="#share"><span class="gr-roadmap__num">02</span><span class="gr-roadmap__title">Share</span><span class="gr-roadmap__sub">Following the rules of the road at sea</span></a></li>
  <li><a href="#cooperate"><span class="gr-roadmap__num">03</span><span class="gr-roadmap__title">Cooperate</span><span class="gr-roadmap__sub">Carrying a load together</span></a></li>
</ol>

<!-- ============================ 01 COORDINATE ============================ -->
<section class="gr-layer" id="coordinate">
  <header class="gr-layer__head">
    <span class="gr-layer__num">01</span>
    <div>
      <p class="gr-kicker">Coordinate</p>
      <h2>Who goes where, and when</h2>
    </div>
  </header>
  <p class="gr-layer__intro">When several robots share a space, each one's plan depends on everyone else's. Planning centrally for the whole team does not scale, so we look for ways for robots to plan for themselves while still working as a team.</p>

  <div class="gr-work">
    <div class="gr-work__media">
      {% include youtube-video.html id="fLK-2ZWy34o" title="Decentralized multi-agent motion planning" quality="sddefault" %}
    </div>
    <div class="gr-work__text">
      <h3>Decentralised motion planning</h3>
      <p>Each robot plans its own path and shares just enough with its neighbours to avoid conflicts. Because there is no central planner, adding robots does not slow the team down, and the team keeps working if one robot drops out. We have tested this in simulation and on small robots in a walled arena, as shown at the top of this page.</p>

      <h3>Task scheduling with time-space networks</h3>
      <p>Before robots can move, someone has to decide which robot does which task, and in what order. We model the workspace as a network across both space and time. This gives schedules that assign tasks and plan routes together, without robots queueing for the same corridor.</p>
      <p class="gr-papers"><span class="gr-venue gr-venue--muted">Indian copyright SW-21808 (multi-agent task scheduling software)</span></p>
    </div>
  </div>
</section>

<!-- ============================ 02 SHARE ============================ -->
<section class="gr-layer" id="share">
  <header class="gr-layer__head">
    <span class="gr-layer__num">02</span>
    <div>
      <p class="gr-kicker">Share</p>
      <h2>Following the rules of the road at sea</h2>
    </div>
  </header>
  <p class="gr-layer__intro">Avoiding collisions is not enough when other agents expect you to behave predictably. Ships follow the international collision regulations (COLREGs), which say who gives way in a crossing or head-on encounter. Autonomous vessels need to do the same.</p>

  <div class="gr-work gr-work--flip">
    <div class="gr-work__media">
      {% include loop-video.html src="/videos/multi_agent/vessel_trials.mp4" poster="/videos/multi_agent/vessel_trials.jpg" alt="Plots of planned and actual vessel paths next to footage of small autonomous boats on a lake" caption="Crossing and head-on encounters with autonomous surface vessels on a lake: planned and executed paths (left), on-water footage (right)." %}
    </div>
    <div class="gr-work__text">
      <h3>COLREGs-inspired decentralised path planning</h3>
      <p>Each vessel plans its own route with a Hybrid A* planner that builds COLREGs rules into the search, so give-way and stand-on behaviour in crossing and head-on encounters comes out of the plan itself. The clip shows these encounters with our autonomous boats on a lake.</p>
      <div class="gr-actions">
        {% include youtube-video.html id="24zdboMZOkE" title="Collision avoidance for multiple autonomous surface vessels" %}
      </div>
      <p class="gr-papers"><span class="gr-venue">IEEE IICAIET 2024</span> <a href="https://doi.org/10.1109/IICAIET62352.2024.10730739">Paper</a></p>
    </div>
  </div>
</section>

<!-- ============================ 03 COOPERATE ============================ -->
<section class="gr-layer" id="cooperate">
  <header class="gr-layer__head">
    <span class="gr-layer__num">03</span>
    <div>
      <p class="gr-kicker">Cooperate</p>
      <h2>Carrying a load together</h2>
    </div>
  </header>
  <p class="gr-layer__intro">Some objects are too large or heavy for one robot. Carrying them together means the robots stop being separate agents: they are physically linked through the load, and every move has to be planned for the group.</p>

  <div class="gr-work">
    <div class="gr-work__media">
      {% include loop-video.html src="/videos/multi_agent/cooperative_transport.mp4" poster="/videos/multi_agent/cooperative_transport.jpg" alt="Two small mobile robots carrying a shared load through an arena of low walls" caption="Hardware validation: two robots carrying a shared load through an obstacle course (4× speed)." %}
    </div>
    <div class="gr-work__text">
      <h3>Hierarchical cooperative manipulation and transportation</h3>
      <p>A high-level planner finds a collision-free path for the <em>object</em> from start to goal. A model predictive controller then works out what each robot must do to move the object along that path, while respecting how the robots and the load are connected. When obstacles move, the plan is updated on the fly. We validated the approach in simulation and on hardware.</p>
      <div class="gr-actions">
        {% include youtube-video.html id="d-VF06MEgWs" title="Hierarchical approach toward cooperative manipulation and transportation using mobile robots" %}
      </div>
      <p class="gr-papers"><span class="gr-venue">ASME J. Mechanisms and Robotics 2026</span> <a href="https://doi.org/10.1115/1.4070892">Paper</a></p>
      <figure class="gr-figure gr-figure--inline">
        <img src="{{ '/images/mobile_manipulation/mobile_manipulation.jpg' | relative_url }}" alt="Simulation of two robots carrying a box past static obstacles" loading="lazy">
      </figure>
    </div>
  </div>
</section>

<section class="gr-funding gr-funding--text">
  <p>Supported by the <strong>Start-up Research Grant (SRG), SERB</strong>.</p>
</section>

