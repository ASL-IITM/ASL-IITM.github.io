---
layout: page
title: Intelligent Grasping
permalink: /intelligent_grasping/
ribbon_display: no
---

> Exploring the intersection of perception, language, and motion planning to enable robots to grasp and manipulate objects autonomously in unstructured, real-world environments.

<div class="research-detail">
<h3>Intelligent Grasp Planning using Open Vocabulary Image Segmentation and LLM</h3>
{% include youtube-video.html id="FAYOKLMosNI" title="Intelligent Grasp Planning using Open Vocabulary Image Segmentation and LLM" %}
<p>Intelligent grasp planning is a growing research area with applications spanning industrial automation, assistive robotics, and service systems. Deploying grasp planners in open-ended real-world environments is particularly challenging when the robot must handle a diverse range of everyday objects without task-specific training. This work proposes a pipeline that combines open vocabulary image segmentation with large language model inference to enable natural language-driven, explainable grasp planning without relying on predefined object categories.</p>
</div>

<div class="research-detail">
<h3>Quick Grasp — Lightweight Analytical Grasp Planning</h3>
{% include youtube-video.html id="xVyax52mRto" title="QuickGrasp lightweight analytical grasp planning demo" %}
<p>Grasp planning in high-dimensional configuration spaces is computationally expensive, often limiting real-time deployment of robotic systems. This work proposes a lightweight analytical framework that estimates grasp points directly on the object surface, bypassing the need to sample the full six-degree-of-freedom grasp space. A novel optimization-based grasp quality metric enforcing indirect force closure improves grasp reliability and consistency, demonstrating better efficiency and real-world performance compared to state-of-the-art Grasp Pose Detection (GPD) across both simulation and physical robotic experiments.</p>
</div>

<div class="research-detail">
<h3>ClutterNav — Object Retrieval from Dense Clutter</h3>
{% include youtube-video.html id="38hCFhmjpf4" title="ClutterNav object retrieval from dense clutter" %}
<p>Retrieving a target object buried in dense clutter is a common yet difficult challenge in real-world robotic manipulation, requiring the robot to reason about which objects to remove and in what order. This work presents ClutterNav, a framework that formulates clutter removal as a continuous reinforcement learning problem, using a learned removability critic to estimate the disturbance cost of removing each object based on geometric and spatial cues. By strategically selecting low-disturbance removals that progressively improve target accessibility, the approach achieves efficient and intelligent object retrieval validated in both simulation and real-world experiments.</p>
</div>

<div class="research-detail">
<h3>Real-time Perception and Motion Planning for Human-Robot Collaboration</h3>
{% include youtube-video.html id="HLudJf04hnI" title="Real-time perception and motion planning for human-robot collaboration" %}
<p>Human-robot collaboration in shared workspaces introduces significant challenges for motion planning, as the robot must continuously adapt to the presence and movement of human operators. This work presents a real-time perception and motion planning framework that enables a UR5e manipulator to safely operate alongside humans without interrupting task execution. The system fuses live human tracking with occupancy grid-based path planning, allowing the robot to dynamically re-plan its trajectory in response to human motion and avoid collisions in real time.</p>
</div>

<div class="research-detail">
<h3>Grasp Planning for Underactuated Three-Finger Grippers</h3>
<div class="research-detail__videos">
{% include youtube-video.html id="HOEOI3_f0wA" title="Three-finger grasp planning simulation" %}
{% include youtube-video.html id="IUeuknTScco" title="Three-finger grasp planning hardware demo" %}
</div>
<p>Grasp planning for three-finger grippers presents unique challenges that existing methods, largely designed for two-finger parallel jaw grippers, are unable to address effectively. This work proposes a novel SE(3) + triangular grasp representation tailored for underactuated three-finger grippers, where each vertex of an isosceles triangle corresponds to a fingertip, capturing the full spatial configuration of the gripper. A modified ResNet50 architecture is trained end-to-end on RGB-D inputs to predict ideal grasp poses, achieving grasp quality comparable to GraspIt! while reducing inference time from 20 seconds to 15 milliseconds with strong sim-to-real transfer.</p>
</div>

<div class="research-detail">
<h3>Perception and Motion Planning for Autonomous Grasping</h3>
{% include youtube-video.html id="glKLp9OO6yQ" title="Autonomous pick and place demonstration" %}
<p>Autonomous grasping is an active research area with applications including manufacturing, logistics, assistive systems, and healthcare. This research explores sensor fusion to estimate unknown object properties (weight, shape, dimensions, stiffness) and then plan a stable grasp based on the manipulation requirements.</p>
</div>
