# 🎉 Birthday Cake Project 🎂

Welcome to the **Birthday Cake Project**, where your browser becomes the life of the party! 🎈 Blow out the candle, enjoy the confetti, and jam to some tunes — all with the magic of your microphone. 🥳  

---

## 🚀 What’s the Party Trick?

🎤 **Blow the Candle Out**  
Get your microphone ready! A big blow or a loud sound will snuff out the candle.  

🎶 **Sing Along**  
Cue the "Happy Birthday" song to set the party vibes.  

🎊 **Confetti Explosion**  
Because no birthday celebration is complete without confetti raining down from the sky.  

🔥 **Dynamic Flame**  
The candle’s flame gets smaller (or wilder) based on the sound level. 

---

## 🛠 Tech Behind the Magic  

🎨 **React & CSS**: All the pretty visuals and smooth interactions.  
🎧 **Web Audio API**: Your microphone’s new best friend.  
💾 **TypeScript**: For code that’s as solid as the cake’s frosting.  
🎊 **React-Confetti**: Making every party pop (literally).  

---

## 🎂 How to Light the Candle  

1. **Clone the Magic** 🧙‍♂️  
   ```bash
   git clone https://github.com/your-username/birthday-cake.git
   cd birthday-cake
   ```

2. **Frost the Cake** 🍰  
   Install the essentials:  
   ```bash
   npm install
   ```

3. **Light the Candle** 🔥  
   Start the party with:  
   ```bash
   npm start
   ```

4. **Join the Celebration** 🎉  
   Open [localhost:3000](http://localhost:3000) in your browser and let the fun begin!  

---

## 🎁 Add Some Spark  

🛠 **Custom Flame Threshold**:  
Want it easier or harder to blow out? Adjust this:  
```ts
const threshold = 1000; // Try lower for a sensitive candle!
```

🎵 **Your Jam**:  
Swap out `happy-birthday.mp3` in the assets for your favorite tune!  

🎨 **Style It Up**:  
Modify `BirthdayCake.css` to make the candle as funky or elegant as you like.  

---

## 🌟 Behind the Scenes  

Here’s how the magic works:  

1. **Listen Up!**  
Your microphone captures sound through the **Web Audio API**.  

2. **Flame Action**  
The sound’s intensity dynamically scales the flame size (shrinking from the top, of course!).  

3. **Blow It Out**  
A loud enough sound crosses the threshold and *poof*! Candle’s out, song starts, confetti rains!  

---

## 📂 Project Layers  

```
birthday-cake/
├── public/         # Static files for the party
├── src/            # The brains behind the fun
│   ├── components/ # Confetti? Song? Candle? All here!
│   ├── assets/     # Your party supplies (images, music)
│   ├── styles/     # Dressing up the cake
│   └── App.tsx     # Where the magic happens
├── package.json    # Party planner's manual
└── README.md       # You’re reading it!
```

---

## 🎈 Let’s Celebrate Together  

🎂 Built with love, fun, and a sprinkle of confetti magic. Feel free to fork, share, and tweak it to throw your own browser bash!  

✨ Contributions, ideas, and bug fixes are always welcome. After all, the more, the merrier!  

---

Now go light that candle, turn up the volume, and blow it out like it’s your special day! 🎉
