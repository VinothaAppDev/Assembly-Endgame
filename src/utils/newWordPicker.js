export default function newWordPicker() {
    const wordList = [
        "apple", "table", "chair", "house", "river", "plant", "cloud", "light", "sound", "smile",
        "dream", "water", "stone", "grass", "bread", "clock", "paper", "glass", "train", "earth",
        "fruit", "money", "music", "heart", "night", "child", "world", "green", "white", "black",
        "brown", "sweet", "sugar", "honey", "happy", "laugh", "dance", "drink", "sleep", "carry",
        "build", "paint", "write", "learn", "teach", "clean", "drive", "stand", "catch", "throw",
        "start", "finish", "watch", "listen", "speak", "answer", "story", "letter", "number",
        "window", "garden", "forest", "animal", "bird", "fish", "horse", "tiger", "lion", "snake",
        "mouse", "butter", "cheese", "travel", "weather", "journey", "village", "ocean", "island",
        "shadow", "silence", "memory", "future", "culture", "grammar", "chapter", "college"
    ];

    const index = Math.floor(Math.random() * wordList.length)

    return wordList[index]
}