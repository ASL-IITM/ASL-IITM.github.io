---
layout: page
title: Autonomous Driving
permalink: /auto_drive/
ribbon_display: no
---

> Exploring autonomous driving and driver assistance solutions specifically tailored for Indian roads, taking into account diverse traffic, frequent congestion, unpredictable pedestrian movement, and varying road infrastructure.

---

### Autonomous Vehicle Testbed

The test vehicle is a four-seater equipped with a 5 kW ACIM motor and is designed for low-speed operation. The primary goal of this platform is to demonstrate key capabilities in autonomous driving and safety features.

The perception stack consists of two cameras, LiDAR, an IMU, and radar.

The major areas of research conducted on this platform include perception, low-speed adaptive cruise control (ACC), software development, safety and driver takeover mechanisms, and brake blending for improved user comfort.

The ASL Lab is developing a complete low-speed autonomy stack with potential applications in:

- Low-speed traffic scenarios
- Campus environments (institutes or corporate parks)
- Airports and shipyards
- Other controlled or semi-structured environments

---

### Perception for Autonomous Navigation

Preliminary results on perception for autonomous driving are shown below:

The video visualizes detections from the LiDAR point cloud fused with camera-based detections to provide classification for the LiDAR detections. This represents an initial version of the 3D object detection pipeline. Further work is ongoing to implement multi-object tracking and trajectory prediction for the detected objects.

<div class="yt-video-grid">
  {% include youtube-video.html id="pXp1Ph0vvJw" title="LiDAR and camera fusion for 3D object detection" %}
  {% include youtube-video.html id="EiqNRwigJp4" title="Perception pipeline for autonomous navigation" %}
</div>

---

### Trajectory Prediction of Surrounding Vehicles

This research work aims to predict the future trajectories of surrounding vehicles. Trajectory prediction is crucial for motion planning and vehicle control to ensure safer operation. This work presents a framework for multi-hypothesis trajectory prediction of detected vehicles over a fixed time horizon.

{% include youtube-video.html id="TLtha1oYV9o" title="Multi-hypothesis trajectory prediction of surrounding vehicles" %}

---

### Steer by Wire

The vehicle does not have inherent drive-by-wire capabilities. As a first step, steer-by-wire functionality was implemented. This was achieved by attaching a BLDC motor to the steering shaft to actuate the steering. Work is currently underway to enable smooth driver takeover through the steering interface.

{% include youtube-video.html id="9l_K_9sOy7c" title="Retrofitted BLDC motor for steer-by-wire control" %}

---

### Drive by Wire

As the next step, full drive-by-wire capability was implemented in the vehicle, including control over the throttle, motor brake, and manual brake using a linear actuator. The system also incorporates a safety override feature that allows the driver to take control through the throttle pedal, brake, or steering input.

{% include youtube-video.html id="3lOLpP2Ft0g" title="Drive-by-wire remote control via joystick" %}

---

### Autonomy Software Stack

Here we present the initial results from ground-up development of a complete software stack for autonomous driving being developed in ASL. Currently, the stack includes modules for a global planner, local planner, and vehicle controller. The architecture is highly modular and is designed to operate independently of any specific simulator or ROS framework.

The simulation presents L2 level Autonomy, and uses ROS2 and the Webots simulator, demonstrating local planning, steering control, and longitudinal control.

{% include youtube-video.html id="Ss8tQw8hjAE" title="L2 autonomy simulation with ROS2 and Webots" %}
