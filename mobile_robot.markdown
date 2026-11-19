---
layout: page
title: Motion Planning for Mobile Robots
permalink: /mobile_robot/
ribbon_display: no
---

<!--
  PAGE STRUCTURE (same building blocks as grasping.markdown, styles in _sass/minima/_research-page.scss)
  - Hero (goal + looping clip)
  - Roadmap: four layers, each a <section class="gr-layer" id="...">
  - Each layer holds one or more <div class="gr-work"> blocks (media + text)
  - Platform card, funding/collaborators

  YouTube: { % include youtube-video.html id="VIDEO_ID" title="Title" quality="sddefault" % }
  Loop:    { % include loop-video.html src="/videos/mobile_robot/x.mp4" poster="/videos/mobile_robot/x.jpg" alt="..." caption="..." % }
  Image:   <figure class="gr-figure"><img src="{{ '/images/mobile_robot/x.jpg' | relative_url }}" alt="..."><figcaption>...</figcaption></figure>
  Add class "gr-work--flip" to a gr-work block to put the media on the right.
-->

<div class="gr-hero">
  <div class="gr-hero__text">
    <p class="gr-kicker">Our goal</p>
    <p class="gr-hero__lead">Mobile robots that share buildings and campuses with people: robots that know where they are without GPS, anticipate the people around them, adapt when the world surprises them, and take instructions in plain language.</p>
    <p>Each layer builds on the one before. Reliable localisation makes planning possible. Predicting people makes planning safe and polite. Learning from the unexpected takes the robot out of the corridor and into the open. Language turns navigation into useful work.</p>
  </div>
  <div class="gr-hero__media">
    {% include loop-video.html src="/videos/mobile_robot/husky_deer.mp4" poster="/videos/mobile_robot/husky_deer.jpg" alt="A Clearpath Husky robot driving along a campus road while two deer graze on the grass beside it" caption="Our Clearpath Husky on a campus run, sharing the road with the resident deer." %}
  </div>
</div>

<ol class="gr-roadmap" aria-label="Research roadmap">
  <li><a href="#localize"><span class="gr-roadmap__num">01</span><span class="gr-roadmap__title">Localize</span><span class="gr-roadmap__sub">Knowing where it is, without GPS</span></a></li>
  <li><a href="#anticipate"><span class="gr-roadmap__num">02</span><span class="gr-roadmap__title">Anticipate</span><span class="gr-roadmap__sub">Moving among people</span></a></li>
  <li><a href="#adapt"><span class="gr-roadmap__num">03</span><span class="gr-roadmap__title">Adapt</span><span class="gr-roadmap__sub">Beyond the corridor</span></a></li>
  <li><a href="#instruct"><span class="gr-roadmap__num">04</span><span class="gr-roadmap__title">Instruct</span><span class="gr-roadmap__sub">Taking instructions in plain language</span></a></li>
</ol>

<!-- ============================ 01 LOCALIZE ============================ -->
<section class="gr-layer" id="localize">
  <header class="gr-layer__head">
    <span class="gr-layer__num">01</span>
    <div>
      <p class="gr-kicker">Localize</p>
      <h2>Knowing where it is, without GPS</h2>
    </div>
  </header>
  <p class="gr-layer__intro">Inside buildings there is no GPS, and long corridors look the same to a LiDAR. Every planning decision depends on the robot knowing where it is on the map, so this is where we start.</p>

  <div class="gr-work">
    <div class="gr-work__media">
      {% include loop-video.html src="/videos/mobile_robot/indoor_localisation.mp4" poster="/videos/mobile_robot/indoor_localisation.jpg" alt="Building floor map with the robot's traced path alongside its front camera views" caption="Indoor localisation: estimated path on the building map, with the robot's camera views (3× speed)." %}
    </div>
    <div class="gr-work__text">
      <h3>Multi-sensor localisation</h3>
      <p>We fuse wheel encoders, an IMU, 2D LiDAR and a camera to estimate the robot's pose on a known map. Each sensor covers the others' weak spots, so the estimate stays accurate along long, featureless corridors.</p>
      <div class="gr-actions">
        {% include youtube-video.html id="69TlcWPwAac" title="Indoor mobile robot localization with sensor fusion" %}
      </div>
      <p class="gr-papers"><span class="gr-venue gr-venue--muted">Indian copyright SW-20151 (localisation software stack)</span></p>

      <h3>Where to put landmarks</h3>
      <p>Artificial landmarks help a robot localise, but only if they are in the right places. We optimise where to place them in a building so that localisation improves most for the fewest markers.</p>
      <p class="gr-papers"><span class="gr-venue">ASME IDETC 2024</span> <a href="https://doi.org/10.1115/DETC2024-141919">Paper</a></p>
    </div>
  </div>
</section>

<!-- ============================ 02 ANTICIPATE ============================ -->
<section class="gr-layer" id="anticipate">
  <header class="gr-layer__head">
    <span class="gr-layer__num">02</span>
    <div>
      <p class="gr-kicker">Anticipate</p>
      <h2>Moving among people</h2>
    </div>
  </header>
  <p class="gr-layer__intro">People are not static obstacles. They have destinations and follow the layout of the building. A robot that predicts where people are going can plan around them early instead of swerving at the last moment.</p>

  <div class="gr-work gr-work--flip">
    <div class="gr-work__media">
      {% include loop-video.html src="/videos/mobile_robot/person_following.mp4" poster="/videos/mobile_robot/person_following.jpg" alt="The mobile robot following a person across a paved courtyard on campus" caption="Tracking and following a person outdoors on campus (3× speed)." %}
      <div class="gr-figure-pair">
        <figure class="gr-figure">
          <img src="{{ '/images/mobile_robot/person_tracking.jpg' | relative_url }}" alt="Camera view of a corridor with several people detected and tracked with ID boxes" loading="lazy">
        </figure>
        <figure class="gr-figure">
          <img src="{{ '/images/mobile_robot/map_informed_recovery.jpg' | relative_url }}" alt="Floor map showing walking lanes and predicted paths of a person at an intersection" loading="lazy">
        </figure>
      </div>
    </div>
    <div class="gr-work__text">
      <h3>Following a person through occlusions</h3>
      <p>The robot tracks a chosen person by fusing camera-based tracking with 2D LiDAR clusters. When that person disappears behind others, the robot does not stop. It uses the building's walking lanes to predict where they could have gone, such as straight on or turning at an intersection, and keeps following until it sees them again.</p>
      <p class="gr-stat"><strong>71.4%</strong> reacquisition after occlusions of up to 7 s in crowded corridors</p>
      <p class="gr-papers"><span class="gr-venue">arXiv 2026</span> <a href="https://arxiv.org/abs/2609.07091">Paper</a></p>

      <h3>Map-informed, human-aware navigation</h3>
      <p>We combine multi-hypothesis predictions of people's paths with a topological map of the building. The robot spots likely conflicts at bottlenecks such as corridor intersections and yields in advance, using Safe Interval Path Planning with an A* global planner. Tracking and estimation of nearby people feed directly into the planner.</p>
      <div class="gr-actions">
        {% include youtube-video.html id="dEotL10HdZs" title="Map-informed human-aware navigation for mobile robots" %}
      </div>
      <p class="gr-papers"><span class="gr-venue">IEEE Sensors Letters 2024</span> <a href="https://doi.org/10.1109/LSENS.2024.3492373">Paper</a></p>
    </div>
  </div>
</section>

<!-- ============================ 03 ADAPT ============================ -->
<section class="gr-layer" id="adapt">
  <header class="gr-layer__head">
    <span class="gr-layer__num">03</span>
    <div>
      <p class="gr-kicker">Adapt</p>
      <h2>Beyond the corridor</h2>
    </div>
  </header>
  <p class="gr-layer__intro">Outdoors, the rules are softer and the surprises are bigger. Sidewalks have no hard walls, and the robot meets things no map or dataset prepared it for. It has to use structure where it exists and learn from what goes wrong.</p>

  <div class="gr-work">
    <div class="gr-work__media">
      {% include youtube-video.html id="1kwL0s3U940" title="Soft-boundary sidewalk navigation for urban robots" quality="sddefault" %}
    </div>
    <div class="gr-work__text">
      <h3>Sidewalks as lanes</h3>
      <p>We treat sidewalks like road lanes with soft edges. Semantic segmentation finds the sidewalk, and clothoid curves extend its shape ahead of the robot. A Hybrid A* planner prefers to stay on the path, while an ORCA-based local controller lets the robot step off it to give way to pedestrians or get around obstructions.</p>
    </div>
  </div>

  <div class="gr-work gr-work--flip">
    <div class="gr-work__media">
      {% include loop-video.html class="gr-loop--native gr-loop--narrow" src="/videos/mobile_robot/terrain_costmap.mp4" poster="/videos/mobile_robot/terrain_costmap.jpg" alt="LiDAR point cloud around the robot above two coloured grid maps of terrain elevation and slope" caption="Building terrain cost maps on the move: the LiDAR point cloud (top) turned into robot-centred elevation and slope maps (bottom) (3× speed)." %}
    </div>
    <div class="gr-work__text">
      <h3>Where can the robot safely drive?</h3>
      <p>Off the pavement, the question becomes which ground is safe to cross: mud, loose gravel and steep slopes can stall or tip a robot. We estimate traversability in two complementary ways. Elevation and slope computed from LiDAR capture the geometry, while a segmentation network trained on camera images recognises surfaces the robot can drive on. Both are fused into one cost map that the planner uses to route around risky ground.</p>
      <p>Because driving a robot into dangerous terrain to collect data is costly, we also generate training data in simulation (Isaac Sim and Webots), alongside real-world data collected on campus. Applications include agriculture, mining and construction sites.</p>
    </div>
  </div>

  <div class="gr-work">
    <div class="gr-work__media">
      <figure class="gr-figure">
        <img src="{{ '/images/mobile_robot/dfmt_hardware_results.jpg' | relative_url }}" alt="Learned disturbance maps around the robot next to photos of the real test environments" loading="lazy">
        <figcaption>Disturbances learned on our ground robot, mapped back onto the scene.</figcaption>
      </figure>
    </div>
    <div class="gr-work__text">
      <h3>Don't Fool Me Twice: learning from adversity</h3>
      <p>Some hazards only show up through experience: a fan that pushes a drone off course, or a surface that makes a wheel slip. When the robot drifts from its intended path, it describes what happened, asks a vision-language model what in the scene could have caused it, and stores the disturbance as a learned region in a semantic map. Next time, it plans around it.</p>
      <p class="gr-stat"><strong>Few-shot</strong> learning of new hazards, validated in simulation and on hardware across robot types</p>
      <p class="gr-papers"><span class="gr-venue">IROS 2026</span> <a href="https://arxiv.org/abs/2605.31119">arXiv</a></p>
    </div>
  </div>

  <figure class="gr-figure gr-figure--wide">
    <img src="{{ '/images/mobile_robot/dfmt_overview.jpg' | relative_url }}" alt="A drone flying through a warehouse, pushed off course by a fan, then adapting its path after learning the cause" loading="lazy">
    <figcaption>Don't Fool Me Twice: the robot is pushed off course once, works out that the fan caused it, and adapts its path next time.</figcaption>
  </figure>
</section>

<!-- ============================ 04 INSTRUCT ============================ -->
<section class="gr-layer" id="instruct">
  <header class="gr-layer__head">
    <span class="gr-layer__num">04</span>
    <div>
      <p class="gr-kicker">Instruct</p>
      <h2>Taking instructions in plain language</h2>
    </div>
  </header>
  <p class="gr-layer__intro">With a robot that can localise, anticipate and adapt, the remaining step is to make it easy to direct, whether by a spoken request or by a remote operator.</p>

  <div class="gr-work">
    <div class="gr-work__media">
      {% include youtube-video.html id="u8eALJEbG8E" title="LLM-driven embodied AI agent for mobile robot navigation" quality="sddefault" %}
    </div>
    <div class="gr-work__text">
      <h3>An LLM as the robot's reasoning core</h3>
      <p>A modular agent framework puts a large language model at the centre of the robot. It turns natural-language commands into actions, learns its surroundings, decides what to do next from live feedback, and carries out multi-step navigation tasks on our own hardware.</p>

      <h3>Shared control for telepresence</h3>
      <p>For robots driven remotely, we blend the operator's commands with the robot's own obstacle avoidance so that it moves safely through dynamic spaces, tested in virtual reality. Our recent work uses an LLM to make this sharing of control more responsive to the operator's intent.</p>
      <p class="gr-papers"><span class="gr-venue">ICCAR 2024</span> <a href="https://doi.org/10.1109/ICCAR61844.2024.10569672">Paper</a> · <span class="gr-venue">VAM-HRI 2025</span> <a href="https://openreview.net/forum?id=Z2mh4OdDXX">Paper</a></p>
    </div>
  </div>
</section>

<!-- ============================ PLATFORMS ============================ -->
<section class="gr-apps">
  <h2>Our platforms</h2>
  <div class="gr-app-feature">
    <figure class="gr-figure">
      <img src="{{ '/images/mobile_robot/husky.jpg' | relative_url }}" alt="Clearpath Husky with a mast-mounted LiDAR standing on open dirt ground" loading="lazy">
    </figure>
    <div class="gr-app-feature__text">
      <p class="gr-kicker">Hardware</p>
      <h3>A Clearpath Husky for rough ground</h3>
      <p>For outdoor and off-road experiments we use a Clearpath Husky, a rugged four-wheel skid-steer robot. It carries an Ouster OS0 LiDAR, two Intel RealSense D455 RGB-D cameras and an IMU, with an NVIDIA Jetson AGX and an Intel Core i3 computer on board for processing.</p>
      <p>It handles dirt tracks, leaf litter and uneven ground across the IIT Madras campus, which sits inside a forest and is shared with deer and other wildlife (see the clip at the top of this page): a natural test of the terrain-aware navigation above.</p>
    </div>
  </div>

  <div class="gr-app-feature">
    <figure class="gr-figure">
      <img src="{{ '/images/mobile_robot/platform_annotated.jpg' | relative_url }}" alt="The lab's mobile robot with a Velodyne VLP-32 LiDAR, RealSense D455 camera and Xsens IMU labelled" loading="lazy">
    </figure>
    <div class="gr-app-feature__text">
      <p class="gr-kicker">Hardware</p>
      <h3>Built in the lab, used indoors and out</h3>
      <p>Much of the work on this page runs on a mobile robot built in our lab. It carries a Velodyne VLP-32 LiDAR, an Intel RealSense D455 RGB-D camera and an Xsens 9-axis IMU, and is driven through ROS 2. The same robot works in corridors, courtyards and unpaved campus paths, so our methods are tested where they are meant to be used.</p>
    </div>
  </div>

  <div class="gr-apps__grid gr-apps__grid--2">
    <div class="gr-app gr-app--platform">
      <figure class="gr-figure">
        <img src="{{ '/images/mobile_robot/indoor_robot_annotated.jpg' | relative_url }}" alt="The lab's small indoor robot with an onboard laptop, 2D LiDAR, IMU and camera system labelled" loading="lazy">
      </figure>
      <p class="gr-kicker">Hardware</p>
      <h3>A compact indoor robot, also built in the lab</h3>
      <p>A small differential-drive robot for corridors and offices, with a 2D LiDAR, an IMU and a camera system, and a laptop on board for processing.</p>
    </div>
    <div class="gr-app gr-app--platform">
      <figure class="gr-figure">
        <img src="{{ '/images/mobile_robot/turtlebot4.jpg' | relative_url }}" alt="TurtleBot 4 Lite and TurtleBot 4 robots on a wooden floor" loading="lazy">
        <figcaption>Image: Clearpath Robotics.</figcaption>
      </figure>
      <p class="gr-kicker">Hardware</p>
      <h3>TurtleBot 4</h3>
      <p>A compact ROS 2 research robot built on an iRobot Create 3 base, with a 2D LiDAR and a stereo depth camera. We use it to try out new navigation ideas quickly indoors before moving them to our larger robots.</p>
    </div>
  </div>
</section>

<section class="gr-funding gr-funding--text">
  <p>Supported by the <strong>New Faculty Seed Grant (NFSG), IIT Madras</strong>, and an industry collaboration with <strong>Caterpillar</strong>. In collaboration with <strong>Carnegie Mellon University</strong> and <strong>Deakin University</strong>.</p>
</section>

