---
layout: page
title: Intelligent Grasping & Manipulation
permalink: /intelligent_grasping/
ribbon_display: no
---

<!--
  PAGE STRUCTURE
  - Hero (vision + featured video)
  - Roadmap: four layers, each a <section class="gr-layer" id="...">
  - Each layer holds one or more <div class="gr-work"> blocks (media + text)
  - Applications, funding

  Video:  { % include youtube-video.html id="VIDEO_ID" title="Title" quality="sddefault" % }
          (quality="sddefault" for large videos; omit for small thumbnails)
  Looping clip (short, muted MP4 in /videos/grasping/, ideally < 2 MB):
          { % include loop-video.html src="/videos/grasping/x.mp4" poster="/videos/grasping/x.jpg" alt="..." caption="..." % }
  Image:  <figure class="gr-figure"><img src="{{ '/images/grasping/x.jpg' | relative_url }}" alt="..."><figcaption>...</figcaption></figure>
  Add class "gr-work--flip" to a gr-work block to put the media on the right.
-->

<div class="gr-hero">
  <div class="gr-hero__text">
    <p class="gr-kicker">Our goal</p>
    <p class="gr-hero__lead">A robot arm you can instruct in plain language, one that picks, clears and hands over everyday objects reliably, in clutter and next to people, without retraining for every new task.</p>
    <p>We build towards this in layers. Fast, reliable grasps make it possible to work in clutter. Working in clutter and around people makes real deployments possible. Language and memory then let the robot take on whole tasks, not just single picks.</p>
  </div>
  <div class="gr-hero__media">
    {% include loop-video.html src="/videos/grasping/ur5_multi_pick.mp4" poster="/videos/grasping/ur5_multi_pick.jpg" alt="UR5e arm with a three-finger gripper picking up several objects from a table" caption="Open-vocabulary, language-driven grasp planning on our UR5e testbed (2× speed)." %}
  </div>
</div>

<ol class="gr-roadmap" aria-label="Research roadmap">
  <li><a href="#grasp"><span class="gr-roadmap__num">01</span><span class="gr-roadmap__title">Grasp</span><span class="gr-roadmap__sub">Where to hold an object</span></a></li>
  <li><a href="#clutter"><span class="gr-roadmap__num">02</span><span class="gr-roadmap__title">Clear</span><span class="gr-roadmap__sub">How to reach it in clutter</span></a></li>
  <li><a href="#people"><span class="gr-roadmap__num">03</span><span class="gr-roadmap__title">Share</span><span class="gr-roadmap__sub">Working beside people</span></a></li>
  <li><a href="#reason"><span class="gr-roadmap__num">04</span><span class="gr-roadmap__title">Reason</span><span class="gr-roadmap__sub">Understanding the whole task</span></a></li>
</ol>

<!-- ============================ 01 GRASP ============================ -->
<section class="gr-layer" id="grasp">
  <header class="gr-layer__head">
    <span class="gr-layer__num">01</span>
    <div>
      <p class="gr-kicker">Grasp</p>
      <h2>Reliable grasps, in milliseconds</h2>
    </div>
  </header>
  <p class="gr-layer__intro">Everything else depends on a grasp that works the first time. Sampling-based and end-to-end learned grasp planners are often slow, hard to repeat and fragile outside the lab. We design grasp planners that are fast, explainable and suited to the gripper actually on the robot.</p>

  <div class="gr-work">
    <div class="gr-work__media">
      <figure class="gr-figure gr-figure--capped">
        <img src="{{ '/images/grasping/quickgrasp_points.jpg' | relative_url }}" alt="QuickGrasp: segmented surfaces and selected antipodal grasp points on a bottle and a banana point cloud" loading="lazy">
        <figcaption>QuickGrasp finds grasp points directly on segmented object surfaces.</figcaption>
      </figure>
    </div>
    <div class="gr-work__text">
      <h3>QuickGrasp: lightweight antipodal grasp planning</h3>
      <p>Instead of searching the full 6-DoF space of gripper poses, QuickGrasp estimates grasp points on the object surface. A soft region-growing step segments even curved surfaces into planes, and an optimisation-based quality metric enforces indirect force closure. It outperformed the widely used Grasp Pose Detection (GPD) baseline in simulation and on a UR5 with a Robotiq gripper.</p>
      <div class="gr-actions">
        {% include youtube-video.html id="xVyax52mRto" title="QuickGrasp antipodal grasp planning demo" %}
      </div>
      <p class="gr-papers"><span class="gr-venue">ICRA 2025</span> <a href="https://doi.org/10.1109/ICRA55743.2025.11128143">Paper</a> · <a href="https://arxiv.org/abs/2504.19716">arXiv</a></p>
    </div>
  </div>

  <div class="gr-work gr-work--flip">
    <div class="gr-work__media">
      {% include loop-video.html src="/videos/grasping/three_finger_prism.mp4" poster="/videos/grasping/three_finger_prism.jpg" alt="Three-finger gripper on a UR5e grasping and lifting a blue prism" caption="Learned three-finger grasp planning, executed on the UR5e (2× speed)." %}    </div>
    <div class="gr-work__text">
      <h3>Grasp planning for underactuated three-finger grippers</h3>
      <p>Most learned grasp planners assume a two-finger parallel-jaw gripper. We introduced an SE(3) + triangle grasp representation, in which each vertex of a triangle is a fingertip, and trained a network to predict three-finger grasps directly from RGB-D images. Grasp quality matched the GraspIt! planner, and the predictions transferred from simulation to the real robot.</p>
      <p class="gr-stat"><strong>20 s → 15 ms</strong> grasp inference compared with GraspIt!</p>
      <div class="gr-actions">
        {% include youtube-video.html id="HOEOI3_f0wA" title="Learned three-finger grasp planning" %}
        {% include youtube-video.html id="IUeuknTScco" title="Three-finger grasp planning with GraspIt!" %}
      </div>
      <p class="gr-papers"><span class="gr-venue">J. Intell. Robot. Syst. 2025</span> <a href="https://doi.org/10.1007/s10846-025-02307-3">Paper</a> · <span class="gr-venue gr-venue--muted">Indian patent application 202441057093</span></p>
    </div>
  </div>

  <div class="gr-work">
    <div class="gr-work__media">
      {% include loop-video.html class="gr-loop--native" src="/videos/grasping/slip_correction.mp4" poster="/videos/grasping/slip_correction.jpg" alt="Three-finger gripper holding a bottle as water is poured into it, next to a live plot of fingertip force" caption="Slip correction: as the bottle fills and gets heavier, the gripper detects slip at the fingertips and tightens its grasp (2× speed)." %}
    </div>
    <div class="gr-work__text">
      <h3>Holding on: force control and slip correction</h3>
      <p>Heavy-duty grippers like our three-finger Robotiq use non-backdrivable worm gears. They can only cap motor current, so grip force jumps suddenly and cannot be eased off. We added force-sensing pads to each fingertip and closed the loop on fingertip force. This lets the robot hold a soft sponge ball without crushing it.</p>
      <p>The same sensors detect slip: a sudden spike in the force gradient (more than eight times the local average) signals that the object is moving, and the gripper tightens until it stops.</p>
      <p class="gr-papers"><span class="gr-venue">IEEE IICAIET 2024</span> <a href="https://doi.org/10.1109/IICAIET62352.2024.10730714">Paper</a></p>
    </div>
  </div>
</section>

<!-- ============================ 02 CLUTTER ============================ -->
<section class="gr-layer" id="clutter">
  <header class="gr-layer__head">
    <span class="gr-layer__num">02</span>
    <div>
      <p class="gr-kicker">Clear</p>
      <h2>Reaching a target buried in clutter</h2>
    </div>
  </header>
  <p class="gr-layer__intro">In practice the object a robot needs is rarely sitting alone. Getting to it means deciding which other objects to move, and in what order, without toppling the pile.</p>

  <div class="gr-work">
    <div class="gr-work__media">
      {% include youtube-video.html id="38hCFhmjpf4" title="ClutterNav: gradient-guided search for 3D clutter removal" quality="sddefault" %}
      <div class="gr-figure-pair">
        <figure class="gr-figure">
          <img src="{{ '/images/grasping/clutternav_real.jpg' | relative_url }}" alt="UR5e with three-fingered gripper above a pile of white blocks hiding a black target block" loading="lazy">
        </figure>
        <figure class="gr-figure">
          <img src="{{ '/images/grasping/clutternav_sim.jpg' | relative_url }}" alt="Simulated clutter, height map, point cloud and per-object segmentation" loading="lazy">
        </figure>
      </div>
    </div>
    <div class="gr-work__text">
      <h3>ClutterNav: deciding what to remove next</h3>
      <p>ClutterNav treats clutter removal as a sequential decision problem. A <em>removability critic</em>, learned from demonstrations, estimates how much the pile would be disturbed by removing each object. Integrated gradients then estimate how each object affects access to the target. Balancing the two, the robot picks the next best object to remove and updates its view of the scene after every removal.</p>
      <p class="gr-stat"><strong>Near human-like</strong> removal sequences, in real time, with no hand-written heuristics</p>
      <p class="gr-papers"><span class="gr-venue">ICRAE 2026</span> <a href="https://arxiv.org/abs/2511.12479">arXiv</a></p>
    </div>
  </div>
</section>

<!-- ============================ 03 PEOPLE ============================ -->
<section class="gr-layer" id="people">
  <header class="gr-layer__head">
    <span class="gr-layer__num">03</span>
    <div>
      <p class="gr-kicker">Share</p>
      <h2>Working safely beside people</h2>
    </div>
  </header>
  <p class="gr-layer__intro">Factories, labs and recycling lines are shared spaces. A useful manipulator has to keep working while people move around it, rather than stopping every time someone comes close.</p>

  <div class="gr-work gr-work--flip">
    <div class="gr-work__media">
      {% include youtube-video.html id="HLudJf04hnI" title="Real-time perception and motion planning for human-robot collaboration" poster="/images/grasping/hrc_trial2.jpg" %}
      <p class="gr-caption">User-study trial: the UR5e re-plans around a person working at the same table (left), with the robot's view of the scene (right).</p>
    </div>
    <div class="gr-work__text">
      <h3>Real-time perception and planning for a shared workspace</h3>
      <p>We fuse live human tracking with occupancy-grid motion planning on a UR5e. As the person moves, the robot re-plans its trajectory around them and carries on with its task, avoiding collisions without halting.</p>
      <p class="gr-stat"><strong>87% fewer</strong> collisions in a 16-person user study (mean 4.44 → 0.56 per trial)</p>
      <figure class="gr-figure gr-figure--inline">
        <img src="{{ '/images/disassembly/UR5_human.png' | relative_url }}" alt="A person and a UR5e arm working at the same table" loading="lazy">
      </figure>
      <p class="gr-papers"><span class="gr-venue">ICRM 2025</span> <a href="https://doi.org/10.1109/ICRM66809.2025.11349032">Paper</a></p>
    </div>
  </div>

  <div class="gr-work">
    <div class="gr-work__media">
      {% include loop-video.html src="/videos/grasping/proactive_packaging.mp4" poster="/videos/grasping/proactive_packaging.jpg" alt="A person and a UR5e arm packing items into a blue crate together, with a task-progress dashboard on a screen" caption="Proactive collaboration on a packaging task: the robot tracks the person's progress and does its share at the right moment (2× speed)." %}
    </div>
    <div class="gr-work__text">
      <h3>From avoiding people to anticipating them</h3>
      <p>Avoiding collisions is only the start. In a collaborative packaging task, the robot tracks the person's arm in 3D, estimates how far through each step they are, and predicts what will be needed next. An agent then splits the task between person and robot, so the robot picks and places its items as the person finishes theirs, instead of waiting to be told. When something goes wrong, the system detects it and asks the operator how to recover.</p>
      <p class="gr-papers"><span class="gr-venue gr-venue--muted">Ongoing work with Accenture Labs</span></p>
    </div>
  </div>
</section>

<!-- ============================ 04 REASON ============================ -->
<section class="gr-layer" id="reason">
  <header class="gr-layer__head">
    <span class="gr-layer__num">04</span>
    <div>
      <p class="gr-kicker">Reason</p>
      <h2>From a single instruction to a whole task</h2>
    </div>
  </header>
  <p class="gr-layer__intro">The last layer turns a grasping system into an assistant. The robot must work out what an instruction means for the objects in front of it, then carry a multi-step task through to the end, even when it cannot see everything.</p>

  <div class="gr-work">
    <div class="gr-work__media">
      <figure class="gr-figure">
        <img src="{{ '/images/grasping/rbvla_setup.jpg' | relative_url }}" alt="UR5e arm with a three-finger gripper and RGB-D camera above a table of objects and a bin" loading="lazy">
        <figcaption>Real-robot setup for long-horizon, language-driven pick-and-place.</figcaption>
      </figure>
    </div>
    <div class="gr-work__text">
      <h3>Open-vocabulary, language-driven grasp planning</h3>
      <p>Combining open-vocabulary image segmentation with LLM reasoning lets the robot work out what to grasp, and how, from a natural-language request. It needs no fixed list of object categories, and it can explain its choices. The clip at the top of this page shows it running.</p>
      <div class="gr-actions">
        {% include youtube-video.html id="FAYOKLMosNI" title="Language-driven grasp planning with open-vocabulary segmentation and an LLM" %}
      </div>
      <p class="gr-papers"><span class="gr-venue">IEEE STPEC 2025</span> <a href="https://doi.org/10.1109/STPEC66316.2025.11490732">Paper</a></p>

      <h3>RB-VLA: vision-language-action with memory</h3>
      <p>Today's vision-language-action models react to what they currently see and lose track of progress in long tasks. RB-VLA keeps a compact <em>belief</em> about task history and object interactions. The vision-language model is queried once per task for intent, and a diffusion policy acts on intent and belief together.</p>
      <ul class="gr-stats">
        <li><strong>+52.5%</strong> success on multi-stage pick-and-place vs. π<sub>0</sub></li>
        <li><strong>+37.5%</strong> success on stacking vs. π<sub>0</sub></li>
        <li><strong>Up to 5×</strong> lower inference latency</li>
      </ul>
      <p class="gr-papers"><span class="gr-venue">IROS 2026</span> <a href="https://arxiv.org/abs/2602.20659">arXiv</a></p>
    </div>
  </div>

  <figure class="gr-figure gr-figure--wide">
    <img src="{{ '/images/grasping/rbvla_architecture.jpg' | relative_url }}" alt="RB-VLA architecture: a reasoning VLM produces intent, a recursive belief estimator tracks task state, and a diffusion model outputs robot actions" loading="lazy">
    <figcaption>RB-VLA: the VLM reasons once at the start, the recursive belief tracks task progress, and a diffusion policy produces actions.</figcaption>
  </figure>
</section>

<!-- ============================ APPLICATIONS ============================ -->
<section class="gr-apps">
  <h2>Applications and supporting work</h2>
  <div class="gr-app-feature">
    {% include loop-video.html src="/videos/grasping/battery_disassembly.mp4" poster="/videos/grasping/battery_disassembly.jpg" alt="An operator and a robot arm working together to disassemble a lithium-ion battery pack" caption="Human-robot battery pack disassembly (3× speed)." %}
    <div class="gr-app-feature__text">
      <p class="gr-kicker">Application</p>
      <h3>Lithium-ion battery recycling</h3>
      <p>Spent lithium-ion battery packs have to be taken apart before their materials can be recovered. This is slow, varied and hazardous work for people. Our semi-autonomous system shares the job: an operator handles steps that need judgement, and the robot grasps, cuts and extracts cells and electrode stacks. It brings together the grasping and shared-workspace work above.</p>
      <p class="gr-papers"><span class="gr-venue">ICEMPS 2024</span> <a href="https://doi.org/10.1109/ICEMPS60684.2024.10559331">Paper</a> · <span class="gr-venue gr-venue--muted">Indian patent application 202341051709</span></p>
    </div>
  </div>

  <div class="gr-apps__grid gr-apps__grid--2">
    <div class="gr-app">
      <h3>Robotic rebar placement</h3>
      <p>Measuring how hard rebar placement is for a robot's motion planner, in terms of geometry, space and computation, as a step towards automating construction sites.</p>
      <p class="gr-papers"><span class="gr-venue">ISARC 2026</span> <a href="https://doi.org/10.22260/ISARC2026/0017">Paper</a></p>
    </div>
    <div class="gr-app">
      <h3>Motion planning for redundant arms</h3>
      <p>Voxel-based A* search combined with redundant inverse-kinematics solutions for optimal manipulator motion.</p>
      <p class="gr-papers"><span class="gr-venue">CK 2025</span> <a href="https://doi.org/10.1007/978-981-95-7155-0_12">Paper</a></p>
    </div>
  </div>
</section>

<section class="gr-funding">
  <img src="{{ '/images/industry_partners/accenture.png' | relative_url }}" alt="Accenture" loading="lazy">
  <p>This research is supported by the <strong>Accenture – IIT Madras Centre of Excellence</strong>.</p>
</section>

