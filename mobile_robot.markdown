---
layout: page
title: Mobile Robots
permalink: /mobile_robot/
ribbon_display: no
---

> Advancing autonomous mobile robotics through robust localization, intelligent motion planning, and LLM-driven embodied AI — enabling robots to perceive, reason, and act in complex, human-centric indoor environments.

---

### LLM-Driven Embodied AI Agent for Autonomous Mobile Robots:
A modular agentic framework that uses a Large Language Model as the reasoning core of a mobile robot, enabling it to understand natural language commands and translate them into real-world actions. The robot can autonomously learn its environment, intelligently decide what action to take next based on real-time feedback, and execute complex multi-step navigation tasks — validated on a custom-built physical platform.

[![Click here for video](https://img.youtube.com/vi/u8eALJEbG8E/0.jpg)](https://www.youtube.com/watch?v=u8eALJEbG8E)

---

### Localization in GPS denied environment:
Localization is essential for a mobile robot to navigate on a given map, especially in GPS denied environments. This work intends to effectively estimate the pose of an indoor mobile robot in a given map by fusing estimates from different sensors like motor encoders, Inertial measurement unit, 2-D LIDAR , Camera; combining then to arrive at a more accurate estimate.
Initial results are shown below:

[![Click here for video](https://img.youtube.com/vi/69TlcWPwAac/0.jpg)](https://www.youtube.com/watch?v=69TlcWPwAac)

---

### Map-Informed Path Planning for Human-Aware Navigation: 
To integrate mobile robots smoothly into structured indoor environments, we employ a "defensive robot navigation" paradigm. By combining multi-hypothesis human trajectory predictions with predefined topological maps, the robot proactively anticipates navigational conflicts at structural bottlenecks, such as hallway intersections. Using a Safe Interval Path Planning (SIPP) framework alongside an A* global planner, the robot yields to pedestrians in advance rather than relying solely on reactive dodging. This map-informed approach reduces human personal space violations compared to standard reactive baselines and reduces interruptions to human trajectories navigating around the robot.

[![Click here for video](https://img.youtube.com/vi/dEotL10HdZs/0.jpg)](https://www.youtube.com/watch?v=dEotL10HdZs)

---


### Sidewalks as Lanes: A Soft-Boundary Approach for Urban Robots:
Navigating crowded outdoor sidewalks requires flexibility beyond rigid path constraints. This framework models sidewalks similarly to vehicular lanes by utilizing semantic segmentation and clothoid curve fitting to extrapolate the path's geometry. This provides the robot with persistent spatial awareness, even when the sidewalk is temporarily out of its field of view. By treating the sidewalk edges as "soft" boundaries within a Hybrid A* global planner paired with an ORCA-based local controller, the robot can strategically step off the paved path to yield to pedestrians or bypass physical obstructions. This approach successfully mitigates gridlock and maintains high safety scores in dense urban scenarios.

[![Click here for video](https://img.youtube.com/vi/1kwL0s3U940/0.jpg)](https://www.youtube.com/watch?v=1kwL0s3U940)

---
