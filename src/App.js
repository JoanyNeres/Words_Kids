import './App.css';
import { Machine } from './Components/Machine';

function App() {

  const wordsInMachine = [
      "apple", "banana", "grapes", "strawberry", "watermelon", "dog", "cat",
      "monkey", "lion", "pig", "fish", "panda", "bird", "duck", "giraffe",
      "rabbit", "tree", "mushroom", "sun", "rainbow", "star"
  ]

  const emojisInMachine = [
    "https://emojipedia-us.s3.amazonaws.com/source/skype/289/red-apple_1f34e.png",
    "https://emojipedia-us.s3.amazonaws.com/source/skype/289/banana_1f34c.png",
    "https://emojipedia-us.s3.amazonaws.com/source/skype/289/grapes_1f347.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/joypixels/340/strawberry_1f353.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/joypixels/340/watermelon_1f349.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/whatsapp/326/dog-face_1f436.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/whatsapp/326/cat-face_1f431.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/whatsapp/326/monkey-face_1f435.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/whatsapp/326/lion_1f981.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/whatsapp/326/pig-face_1f437.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/346/fish_1f41f.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/whatsapp/326/panda_1f43c.png",
    "https://emojipedia-us.s3.amazonaws.com/source/skype/289/bird_1f426.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/346/duck_1f986.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/giraffe_1f992.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/rabbit-face_1f430.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/346/deciduous-tree_1f333.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/joypixels/340/mushroom_1f344.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/joypixels/340/sun_2600-fe0f.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/joypixels/340/rainbow_1f308.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/346/star_2b50.png"
  ]

  const indexGenerated = Math.floor(Math.random() * (wordsInMachine.length-1))
  const wordGenerated = wordsInMachine[indexGenerated]
  const emojiGenerated = emojisInMachine[indexGenerated]
  let emojisDisplay = [emojiGenerated]
  while (emojisDisplay.length < 6) {
    let emojiToAdd = emojisInMachine[Math.floor(Math.random() * (wordsInMachine.length-1))]
    if (!emojisDisplay.includes(emojiToAdd)){
      emojisDisplay.push(emojiToAdd)
    }
  }
  emojisDisplay = emojisDisplay.sort()


  return (
    <div className="body_content">
      <div className="box">

        <Machine
          wordMachine = {wordGenerated}
          emojiMachine = {emojiGenerated}
          emojisDisplay = {emojisDisplay}
          indexGenerated = {indexGenerated}
        />

      </div>
    </div>
  );
}

export default App;