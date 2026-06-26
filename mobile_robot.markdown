---
layout: page
title: Mobile Robots
permalink: /mobile_robot/
ribbon_display: no
---

<!--
  HOW TO ADD A NEW RESEARCH ITEM: Copy a research-detail block.
  Single video: { % include youtube-video.html id="VIDEO_ID" title="Title" % }
  Multiple videos: wrap in <div class="research-detail__videos">...</div>
-->

> Advancing autonomous mobile robotics through robust localization, intelligent motion planning, and LLM-driven embodied AI — enabling robots to perceive, reason, and act in complex, human-centric indoor environments.

<div class="research-detail">
<h3>LLM-Driven Embodied AI Agent for Autonomous Mobile Robots</h3>
{% include youtube-video.html id="u8eALJEbG8E" title="LLM-driven embodied AI agent for mobile robot navigation" %}
<p>A modular agentic framework that uses a Large Language Model as the reasoning core of a mobile robot, enabling it to understand natural language commands and translate them into real-world actions. The robot can autonomously learn its environment, intelligently decide what action to take next based on real-time feedback, and execute complex multi-step navigation tasks — validated on a custom-built physical platform.</p>
</div>

<div class="research-detail">
<h3>Localization in GPS-Denied Environments</h3>
{% include youtube-video.html id="69TlcWPwAac" title="Indoor mobile robot localization with sensor fusion" %}
<p>Localization is essential for a mobile robot to navigate on a given map, especially in GPS-denied environments. This work effectively estimates the pose of an indoor mobile robot in a given map by fusing estimates from different sensors like motor encoders, IMU, 2D LiDAR, and camera, combining them to arrive at a more accurate estimate.</p>
</div>

<div class="research-detail">
<h3>Map-Informed Path Planning for Human-Aware Navigation</h3>
{% include youtube-video.html id="dEotL10HdZs" title="Map-informed human-aware navigation for mobile robots" %}
<p>To integrate mobile robots smoothly into structured indoor environments, we employ a "defensive robot navigation" paradigm. By combining multi-hypothesis human trajectory predictions with predefined topological maps, the robot proactively anticipates navigational conflicts at structural bottlenecks, such as hallway intersections. Using a Safe Interval Path Planning (SIPP) framework alongside an A* global planner, the robot yields to pedestrians in advance rather than relying solely on reactive dodging.</p>
</div>

<div class="research-detail">
<h3>Sidewalks as Lanes: A Soft-Boundary Approach for Urban Robots</h3>
{% include youtube-video.html id="1kwL0s3U940" title="Soft-boundary sidewalk navigation for urban robots" %}
<p>Navigating crowded outdoor sidewalks requires flexibility beyond rigid path constraints. This framework models sidewalks similarly to vehicular lanes by utilizing semantic segmentation and clothoid curve fitting to extrapolate the path's geometry. By treating the sidewalk edges as "soft" boundaries within a Hybrid A* global planner paired with an ORCA-based local controller, the robot can strategically step off the paved path to yield to pedestrians or bypass physical obstructions.</p>
</div>
