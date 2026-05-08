---
layout: page
title: Intelligent Grasping
permalink: /intelligent_grasping/
ribbon_display: no
---

> Exploring the intersection of perception, language, and motion planning to enable robots to grasp and manipulate objects autonomously in unstructured, real-world environments.

---

### Intelligent Grasp Planning using Open Vocabulary Image Segmentation and LLM

Intelligent grasp planning is a growing research area with applications spanning industrial automation, assistive robotics, and service systems. Deploying grasp planners in open-ended real-world environments is particularly challenging when the robot must handle a diverse range of everyday objects without task-specific training. This work proposes a pipeline that combines open vocabulary image segmentation with large language model inference to enable natural language-driven, explainable grasp planning without relying on predefined object categories.


[![Intelligent Grasp Planning using Open Vocabulary Image Segmentation and LLM](https://img.youtube.com/vi/FAYOKLMosNI/maxresdefault.jpg)](https://www.youtube.com/watch?v=FAYOKLMosNI)

---

### Quick Grasp — Lightweight Analytical Grasp Planning

Grasp planning in high-dimensional configuration spaces is computationally expensive, often limiting real-time deployment of robotic systems. This work proposes a lightweight analytical framework that estimates grasp points directly on the object surface, bypassing the need to sample the full six-degree-of-freedom grasp space. A novel optimization-based grasp quality metric enforcing indirect force closure improves grasp reliability and consistency, demonstrating better efficiency and real-world performance compared to state-of-the-art Grasp Pose Detection (GPD) across both simulation and physical robotic experiments.


[![Quick Grasp](https://img.youtube.com/vi/xVyax52mRto/maxresdefault.jpg)](https://www.youtube.com/watch?v=xVyax52mRto)

---

### ClutterNav — Object Retrieval from Dense Clutter

Retrieving a target object buried in dense clutter is a common yet difficult challenge in real-world robotic manipulation, requiring the robot to reason about which objects to remove and in what order. This work presents ClutterNav, a framework that formulates clutter removal as a continuous reinforcement learning problem, using a learned removability critic to estimate the disturbance cost of removing each object based on geometric and spatial cues. By strategically selecting low-disturbance removals that progressively improve target accessibility, the approach achieves efficient and intelligent object retrieval validated in both simulation and real-world experiments.


[![ClutterNav](https://img.youtube.com/vi/38hCFhmjpf4/maxresdefault.jpg)](https://www.youtube.com/watch?v=38hCFhmjpf4)

---

### Real-time Perception and Motion Planning for Human-Robot Collaboration

Human-robot collaboration in shared workspaces introduces significant challenges for motion planning, as the robot must continuously adapt to the presence and movement of human operators. This work presents a real-time perception and motion planning framework that enables a UR5e manipulator to safely operate alongside humans without interrupting task execution. The system fuses live human tracking with occupancy grid-based path planning, allowing the robot to dynamically re-plan its trajectory in response to human motion and avoid collisions in real time.


[![Real-time Perception and Motion Planning](https://img.youtube.com/vi/HLudJf04hnI/maxresdefault.jpg)](https://www.youtube.com/watch?v=HLudJf04hnI)

---

### Grasp Planning for Underactuated Three-Finger Grippers using a Novel Triangular Representation

Grasp planning for three-finger grippers presents unique challenges that existing methods, largely designed for two-finger parallel jaw grippers, are unable to address effectively. This work proposes a novel SE(3) + triangular grasp representation tailored for underactuated three-finger grippers, where each vertex of an isosceles triangle corresponds to a fingertip, capturing the full spatial configuration of the gripper. A new synthetic dataset of over 2000 objects is generated using Blender and GraspIt!, and a modified ResNet50 architecture is trained end-to-end on RGB-D inputs to predict ideal grasp poses in the proposed representation. The trained model achieves grasp quality comparable to GraspIt! while reducing inference time from 20 seconds to 15 milliseconds, and demonstrates strong sim-to-real transfer across diverse object geometries.


[![Grasp Planning for Three-Finger Grippers - Simulation](https://img.youtube.com/vi/HOEOI3_f0wA/maxresdefault.jpg)](https://www.youtube.com/watch?v=HOEOI3_f0wA)  [![Grasp Planning for Three-Finger Grippers - Hardware](https://img.youtube.com/vi/IUeuknTScco/maxresdefault.jpg)](https://www.youtube.com/watch?v=IUeuknTScco)

---

### Perception and Motion Planning for Autonomous Grasping

Autonomous grasping is an active research area primarily because of the wide range of applications including manufacturing, logistics, assistive systems, and healthcare. Grasping and manipulation of objects in real-world environments is a challenging research problem, when properties of the object such as weight, shape, dimensions, stiffness etc. are unknown. This research work aims to explore sensor fusion to help estimate the object properties and then plan a stable grasp based on the manipulation requirements.


<p align="left">
  <a href="https://www.youtube.com/watch?v=glKLp9OO6yQ">
    <img src="https://img.youtube.com/vi/glKLp9OO6yQ/sddefault.jpg" width="1200"/>
  </a>
</p>
