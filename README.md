# xzhe9204_9103_tut-6
Please through HTML click "Go Live" to check the work, for unknow researn js can't open the work.
## Interaction Instructions
1. When the page opens, the small squares automatically start animating.
2. Fireworks appear and disappear over time.
3. Click anywhere on the canvas to start playing the music.
4. Once the music starts playing, some squares begin to jump to the rhythm, dynamically changing based on the volume.
5. Press the space bar to pause the audio and all audio-based effects.
## Animation Method
I choosed **Time-Based** as my main animation
## Animation Properties and Differences from Other Team Members' Work
1. The color changes over time.
2. Small squares rotate and move over time, creating a vibrating effect.
3. Added a fireworks element where particles are generated in a specific area upon click, gradually fading in color as they move, adding a unique visual element not present in my team members' work.
4. Music is added, and when clicked, some squares begin to jump to the rhythm of the music. Pressing the space bar pauses the music, and the squares return to their original motion.
### Compared to Other Team Members:
While some team members focus on single color changes or scaling effects, my work achieves a layered effect by combining color, rotation, and scaling. Different types of shapes (red, blue, and gray boxes) have distinct animation properties, timing settings and color change, creating a strong contrast on the canvas.
## Coding Changed
**Color Change Optimization**: I refined the color-changing logic to transition smoothly over time, enhancing the animation's visual appeal. The color gradient is implemented using `lerpColor`, allowing each frame's color to transition smoothly with volume changes while using `frameCount` to introduce subtle temporal variations.

**Square Rotation and Movement**: To add depth, I incorporated rotation and movement for small squares, creating a time-driven vibrating effect that adds dynamism to the overall animation. The code utilizes multiple `sin` and `cos` oscillations to animate lines and box elements smoothly and continuously, ensuring fluid motion.

**Firework Effect**: I introduced a firework element, generating particle effects in specific areas upon canvas click, with a color gradient fade-out effect, adding a new level of interactivity to the animation.

**Music and Animation Sync**: I added a music playback feature, dynamically controlling the jumping frequency of squares based on volume, synchronizing the animation with the music’s rhythm, enhancing viewer immersion. The added space bar pause function allows users to easily control the music and animation effects.
## Technical
The color interpolation method lerpColor was referenced from the p5.js gradient creation example. I chose this technique because it enables smooth color transitions based on volume.  
[linkText] https://p5js.org/reference/p5/lerpColor/

Using frameCount is effective for implementing time-driven effects.[linkText] https://p5js.org/reference/p5/frameCount/

I used blendMode() to layer squares, controlling transparency and blending modes.