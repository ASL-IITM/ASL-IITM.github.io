---
layout: page
title: Research
permalink: /research/
ribbon_display: no
---

<!--
  HOW TO ADD A NEW RESEARCH PROJECT:
  1. Create a new markdown page (e.g. new_project.markdown) with layout: page and ribbon_display: no.
  2. Add a research-card include line below (also add it to index.markdown).

  { % include research-card.html title="Project Title" image="/images/folder/photo.jpg" alt="Alt text" url="/permalink/" description="Short description." funding="Funding source." % }
-->

<h3 style="font-weight: 600;">Research Areas & Projects</h3>

{% include research-card.html title="Intelligent Grasping and Manipulation" image="/images/disassembly/ur5.jpg" alt="UR5 robot arm performing grasping task" url="/intelligent_grasping/" description="Developing perception, motion planning and control algorithms for intelligent grasping and manipulation in real world conditions, including human-robot collaborative workspaces." funding="Funded by the Accenture – IIT Madras Centre of Excellence." %}

{% include research-card.html title="Motion Planning for Mobile Robots" image="/images/mobile_robot/mobile_vision.jpg" alt="Indoor autonomous mobile robot with vision sensors" url="/mobile_robot/" description="Developing autonomous navigation capabilities for mobile robots in indoor and outdoor environments, including localization in GPS-denied environments and path planning in human-centric spaces." funding="Funded by the New Faculty Initiation Grant (NFIG) from IIT Madras." %}

{% include research-card.html title="Multi-Agent Systems" image="/images/mobile_manipulation/mobile_manipulation.jpg" alt="Multi-robot cooperative manipulation system" url="/multi_agent_systems/" description="Multi-agent systems for cooperative manipulation and transportation tasks, enabling multiple robots to handle objects beyond the capability of a single robot." funding="Funded by the Start-up Research Grant (SRG) under SERB." %}

{% include research-card.html title="Exoskeleton Glove for Rehabilitation" image="/images/exo/exo.png" alt="Exoskeleton glove mechanism for finger rehabilitation" url="/exoglove/" description="Designing a 2 DOF mechanism that mimics human finger motion, extended into a full glove with series elastic actuation for assisting and rehabilitating brachial plexus patients." funding="Funded by the New Faculty Initiation Grant (NFIG) from IIT Madras." %}
