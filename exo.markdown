---
layout: page
title: Exo Glove
permalink: /exoglove/
ribbon_display: no
---

### Prior Work
<img align="left" style="padding: 10px" src="/images/exo/exo.png" alt="Picture not available" width="400" height="255">
<img align="left" style="padding: 10px" src="/images/exo/sea.png" alt="Picture not available" width="475" height="255">


The aim of this research is to create a novel Exoskeleton Glove design, hereafter referred to as exo-glove,  that is compact, lightweight, and repeatable. The proposed system could be used for assistance in performing the Activities of Daily Living (ADLs) as well as a rehabilitation tool for the patients who has suffered from a stroke or brachial plexus injury. 


In order to satisfy the above requirements, preliminary work led to the development of a single DOF linkage mechanism that is thin enough to be placed in between fingers, while being capable of enforcing natural bending angles on each of the phalanges. Being a single DOF mechanism, it only allows for achieving cylindrical grasp. The thumb had an additional degree of freedom, and this allowed for grasping objects within a wide range of sizes. The underlying mechanism is shown in the following figure. A US provisional patent has been filed on the developed exo-glove mechanism [3]. Detailed description of the figure and additional details on the mechanism can be found in [1]. 


A five-finger version of the exo-glove was later built with series elastic actuation allowing for compliance and precise force control. The use of series elastic actuators (SEA) allows for precise force control on each finger. This allows the exo-glove to grasp objects of different stiffness, shape, and size. Additional details regarding the full five finger exo-glove and the SEA design can be found in [2]. The proposed SEA design and the integrated prototype is shown below:

### Ongoing Research 

While the above system was an effective initial approach towards creating an assistive glove, the underlying mechanism for each finger has only a single DOF. As such the exo-glove could only be used to assist in achieving cylindrical grasp. Moreover, triggering the cylindrical grasp was achieved by the press of a button. Ongoing work on the exo-glove aims to improve the grasp capabilities of the previous design by incorporating two degrees of freedom in each finger. In addition, we are working on designing predictive controllers capable of recognizing user intent. This will result in a more naturalistic interaction between the user and the glove. An initial version of the single finger exoskeleton mechanism, with voice control capabaility, built at the Autonomous Systems Lab is shown below:

<br><br>
<div class="video">
<div class="video__youtube" data-youtube>
<img src="https://img.youtube.com/vi/z1tforALG-8/1.jpg" class="video__placeholder" />
<button class="video__button" data-youtube-button="https://www.youtube.com/watch?v=z1tforALG-8" >
</button>
</div>
<center><h4>Language Guided Open-Set Navigation | Part of our RSS 2023 Publication</h4></center>
</div>

### References
<ol>

<li> Refour, E, <strong> Sebastian, B. </strong>, & Ben-Tzvi, P. "Design and Integration of a Two-Digit Exoskeleton Glove." Proceedings of the ASME 2017 International Design Engineering Technical Conferences and Computers and Information in Engineering Conference. Volume 5A: 41st Mechanisms and Robotics Conference. Cleveland, Ohio, USA. August 6–9, 2017. <a href="https://doi.org/10.1115/DETC2017-67373"> {{ "DOI: 10.1115/DETC2017-67373" | escape }}</a> </li> 

<li> Refour, E.,<strong> Sebastian, B. </strong>, Ben-Tzvi, P., "Two-Digit Robotic Exoskeleton Glove Mechanism: Design and Integration," Journal of Mechanisms and Robotics, Vol. 10, Issue 2, pp. 025002: 1-9, April 2018. <a href="https://doi.org/10.1115/1.4038775"> {{ "DOI: 10.1115/1.4038775" | escape }}</a> </li>

<li> Ben-Tzvi, P., <strong> Sebastian, B. </strong>, Refour, E., Xu, W., Pradhan, S., Guo, Y., “Robotic exoskeleton glove system,” U.S. Patent Pending No.16888993, December 3, 2020. </li>
