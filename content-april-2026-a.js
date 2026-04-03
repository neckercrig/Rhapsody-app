// ============================================================
// RHAPSODY OF REALITIES — APRIL 2026 CONTENT
// FILE A: Days 1–15
//
// STRUCTURE PER DAY — mirrors the PDF exactly:
//
//   title        → Devotional title (as printed)
//   dayLabel     → Day name + number e.g. "wednesday 1"
//   scripture    → { text, ref } — the KEY VERSE block
//   body         → Array of paragraph strings — the article body
//   closingType  → "PRAYER" or "CONFESSION" (exactly as labelled in PDF)
//   closing      → The full prayer or confession text
//   furtherStudy → References listed under FURTHER STUDY
//   plan1yr      → 1-YEAR BIBLE READING PLAN
//   plan2yr      → 2-YEAR BIBLE READING PLAN
//   quiz         → 5 questions per day
//
// TO ADD A NEW MONTH:
//   1. Create content-[month]-[year]-a.js (days 1–15)
//   2. Create content-[month]-[year]-b.js (days 16–end)
//   3. Update the two <script> tags in index.html
//   4. Push to GitHub → Vercel redeploys in ~30 seconds
// ============================================================

const CONTENT = {

  "2026-04-01": {
    title: "Align Your Words With His Word",
    dayLabel: "wednesday 1",
    scripture: {
      text: "It is the spirit that quickeneth; the flesh profiteth nothing: the words that I speak unto you, they are spirit, and they are life.",
      ref: "John 6:63"
    },
    body: [
      "The Lord Jesus said, \"...the words that I speak unto you, they are spirit, and they are life\" (John 6:63). The same is true about our words, because as He is, so are we in this world (1 John 4:17). Our words are not ordinary. When you understand this, you'll put a premium on words and become careful how you use them.",
      "Words are the greatest things in the world. The Lord Jesus set an example for us on the use of words. He healed with words, He blessed with words, and He changed lives with words. On a certain occasion, some officers were sent to arrest Him; when they got to where He was, they met Him teaching and decided to listen (John 7:32, 45-46). When He was through, they couldn't bring themselves to lay hands on Him. When they returned without Him, the elders asked, \"Where is He?\" (John 7:45).",
      "They answered, \"...No man ever spoke like this Man!\" (John 7:46 NKJV). It wasn't that the Master used unusual expressions or rare diction; it was the power, truth, and spirit of His words (John 6:63; Luke 4:32). His words mended the brokenhearted, cast out devils, and even raised the dead (Luke 4:18-19; John 11:43-44). His words got a response from heaven; the Father responded to His words (John 12:28).",
      "In Christ, we have received that same life. Our words, spoken in faith, are spirit and life. Your words bring healing, comfort, direction, and blessings. This is why you must never take your words lightly. Speak with truth, grace, and faith. Speak as one who understands the power and energy of words.",
      "Remember the words of the Master in Matthew 12:37, \"For by thy words thou shalt be justified, and by thy words thou shalt be condemned.\" Align your speech continually with the Word, and it'll produce life and results. Keep growing in this understanding. Hallelujah!"
    ],
    closingType: "PRAYER",
    closing: "Dear Father, thank you for your Word, which cultures my spirit and fills my heart with faith, love, and righteousness. My words are not ordinary; they are spirit and life, producing healing, comfort, restoration, and blessings in my world, in Jesus' Name. Amen.",
    furtherStudy: "Proverbs 18:21; Mark 11:23 NKJV; John 7:45-46 NKJV",
    plan1yr: "Luke 9:1-17 & Joshua 10-12",
    plan2yr: "Romans 5:12-21 & Psalm 104",
    quiz: [
      { q: "What did the officers sent to arrest Jesus say when they returned empty-handed?", options: ["'We could not find Him'", "'No man ever spoke like this Man!'", "'He escaped through the crowd'", "'He rebuked us with power'"], answer: 1, explanation: "John 7:46 NKJV — 'No man ever spoke like this Man!' — a testimony to the power and spirit of His words." },
      { q: "According to John 6:63, what are the words that Jesus speaks?", options: ["Wisdom and knowledge", "Spirit and life", "Power and authority", "Truth and grace"], answer: 1, explanation: "Jesus declared: 'the words that I speak unto you, they are spirit, and they are life' (John 6:63)." },
      { q: "According to Matthew 12:37, what determines justification or condemnation?", options: ["Your actions", "Your thoughts", "Your words", "Your faith"], answer: 2, explanation: "Matthew 12:37 — 'For by thy words thou shalt be justified, and by thy words thou shalt be condemned.'" },
      { q: "What did Jesus do with words, according to today's devotional?", options: ["Only taught in synagogues", "Healed, blessed, and changed lives", "Wrote scripture directly", "Condemned sinners"], answer: 1, explanation: "Jesus healed with words, blessed with words, and changed lives with words." },
      { q: "Because 'as He is, so are we in this world' (1 John 4:17), our words are:", options: ["Limited to prayer only", "Ordinary like any human's", "Spirit and life just as His were", "Powerful only for pastors"], answer: 2, explanation: "Since we share His nature, our words spoken in faith carry the same spirit and life as the Master's." }
    ]
  },

  "2026-04-02": {
    title: "The Law of Life",
    dayLabel: "thursday 2",
    scripture: {
      text: "For the law of the Spirit of life in Christ Jesus hath made me free from the law of sin and death.",
      ref: "Romans 8:2"
    },
    body: [
      "Many have struggled with the underlined expression in our opening scripture as though \"the law of sin and death\" is one combined law. But in the context of Romans 7 and 8, death itself is not a law. There's the law of sin, and there's death as a consequence. The actual rendering is: \"the law of the Spirit of life in Christ Jesus has made you free from the law of sin, and from death.\"",
      "In chapter 7, Paul emphasises the law of sin that was at work in him before Christ, and he also speaks of death separately. When he comes into chapter 8, verse 2, he shows that the superior law—the law of the Spirit of life in Christ Jesus—has liberated you from both the law of sin and from death.",
      "You no longer live under the principles of this world that govern those who are outside Christ, who are subject to death, decadence and corruption. You live by the law of life. This is why you must refuse to harbour the fear of death. The life of God in you is not subject to death. You have passed from death unto life (John 5:24).",
      "Refuse the language, thoughts and expectations of those who are still under the fear of death. Declare boldly that the law of the Spirit of life in Christ Jesus is working in every fibre of your being, in every cell of your blood, in every bone of your body. Glory to God!"
    ],
    closingType: "PRAYER",
    closing: "Dear Father, thank you for bringing me under the law of the Spirit of life in Christ Jesus. This law is at work in me, energising my body, renewing my mind, and propelling me in the path of righteousness and glory. I am free from the law of sin and from death; I walk in life, health, victory and dominion every day. I refuse fear, and I live boldly in the reality of your finished work in Christ, in Jesus' Name. Amen.",
    furtherStudy: "Romans 8:10-11; 2 Timothy 1:10; John 5:24",
    plan1yr: "Luke 9:18-36 & Joshua 13-15",
    plan2yr: "Romans 6:1-11 & Psalm 105",
    quiz: [
      { q: "What does the law of the Spirit of life free us from, according to today's study?", options: ["The law of Moses only", "Poverty and sickness", "The law of sin and from death", "The fear of judgment"], answer: 2, explanation: "Romans 8:2 — the superior law frees us from both the law of sin and from death." },
      { q: "How does today's study clarify 'the law of sin and death'?", options: ["They are one combined force", "Death is a law; sin is a consequence", "Sin is a law; death is a separate consequence", "Both are symbolic"], answer: 2, explanation: "Death itself is not a law — the law is sin, and death is a consequence of it." },
      { q: "Which verse says believers have 'passed from death unto life'?", options: ["Romans 8:2", "John 5:24", "2 Timothy 1:10", "John 3:16"], answer: 1, explanation: "John 5:24 — referenced in today's further study as the basis of our freedom from death." },
      { q: "What should you refuse, according to today's devotional?", options: ["Hard work and ambition", "The language, thoughts, and fear of death", "All forms of human medicine", "Natural reasoning"], answer: 1, explanation: "Refuse the language, thoughts, and expectations of those still under the fear of death." },
      { q: "The law of the Spirit of life is described as:", options: ["Temporary for this age", "Equal to the law of sin", "The superior law that liberates", "Only available to apostles"], answer: 2, explanation: "The devotional calls it 'the superior law' that has liberated you from both sin and death." }
    ]
  },

  "2026-04-03": {
    title: "Dominion Over Fear of Death",
    dayLabel: "friday 3",
    scripture: {
      text: "Forasmuch then as the children are partakers of flesh and blood, he also himself likewise took part of the same; that through death he might destroy him that had the power of death, that is, the devil; And deliver them who through fear of death were all their lifetime subject to bondage.",
      ref: "Hebrews 2:14-15"
    },
    body: [
      "The scripture above is as clear as it is emphatic: the Lord Jesus has completely destroyed the one who had the power of death, the devil, and delivered humanity from the fear of death. He didn't come to give us a partial victory. His work wasn't unfinished or incomplete. He fully defeated Satan who had the power of death.",
      "2 Timothy 1:10 says, He \"…abolished death, and hath brought life and immortality to light through the gospel.\" He replaced death with life and deathlessness. Hallelujah! This is the message of faith. This is the Word of the Gospel: death has been abolished.",
      "Consider the early apostles; they didn't die because they grew old or weak. The Scriptures reveal that their departure from this world was consistent with their specific calling and choice to seal the message of the Gospel with their blood. They laid down their lives; death had no power over them.",
      "The Christian life is the transcendent life, not a slow succumbing to death, corruption or decay. You were not designed to \"wear out.\" The life of God in you is incorruptible; it's divine; it's ageless. It doesn't diminish or deteriorate. You're in the death-free and fear-free zone.",
      "Live in Christ's victory every day: fearless, strong and full of life. Praise God!"
    ],
    closingType: "CONFESSION",
    closing: "I'm fearless and bold, living in the consciousness that the Lord Jesus has abolished death and brought me into life and immortality. I walk in strength, health and glory. I live in Christ's victory: fearless, strong and full of life. Amen.",
    furtherStudy: "Hebrews 2:14-15 NIV; 2 Timothy 1:10 NIV; John 11:25-26; 1 Corinthians 15:54-55",
    plan1yr: "Luke 9:37-62 & Joshua 16-19",
    plan2yr: "Romans 6:12-23 & Psalm 106",
    quiz: [
      { q: "According to Hebrews 2:14-15, who had the power of death before Jesus defeated him?", options: ["Sin", "The world", "The devil", "Death itself"], answer: 2, explanation: "Hebrews 2:14 — Jesus destroyed 'him that had the power of death, that is, the devil.'" },
      { q: "What did 2 Timothy 1:10 say Jesus did to death?", options: ["Delayed it", "Weakened it", "Abolished it", "Replaced it temporarily"], answer: 2, explanation: "2 Timothy 1:10 — He 'abolished death, and hath brought life and immortality to light through the gospel.'" },
      { q: "Why did the early apostles depart from this world?", options: ["Old age and weakness", "They chose to seal the Gospel with their blood", "Sickness overtook them", "God recalled them"], answer: 1, explanation: "The apostles laid down their lives by choice to seal the Gospel — death had no power over them." },
      { q: "The Christian life is described as:", options: ["A gradual decline toward death", "A religious system", "The transcendent life — not a slow succumbing to decay", "A waiting period until heaven"], answer: 2, explanation: "'The Christian life is the transcendent life, not a slow succumbing to death, corruption or decay.'" },
      { q: "The life of God in you is described as:", options: ["Fragile and temporary", "Incorruptible, divine, and ageless", "Growing stronger only through fasting", "Dependent on church attendance"], answer: 1, explanation: "'The life of God in you is incorruptible; it's divine; it's ageless. It doesn't diminish or deteriorate.'" }
    ]
  },

  "2026-04-04": {
    title: "The True God and Eternal Life",
    dayLabel: "saturday 4",
    scripture: {
      text: "And we know that the Son of God is come, and hath given us an understanding, that we may know him that is true, and we are in him that is true, even in his Son Jesus Christ. This is the true God, and eternal life.",
      ref: "1 John 5:20"
    },
    body: [
      "Many imagine that if they saw the Lord Jesus in person, they'd instantly recognise Him as the Son of God and love Him immediately. But that's for those of us in whom the love of God already abounds by the Holy Ghost through the New Birth. When you study the Bible, you'd discover that many of those who saw Him physically when He walked the earth didn't believe in Him.",
      "John 1:11 says, \"He came unto his own, and his own received him not.\" Even with His miracles and teachings, He was rejected by the religious leaders of His day. Isaiah prophesied of Him, saying, \"…when we shall see him, there is no beauty that we should desire him\" (Isaiah 53:2).",
      "He didn't walk with an aura or physical glow that distinguished Him from others. Yet, He was a hundred per cent God. When He was arrested, Judas had to identify Him among the disciples with a kiss. They couldn't tell Him apart by appearance.",
      "This is why the Pharisees and scribes argued with Him when He declared Himself the Son of God. They questioned His origin, saying they didn't know where He was from. They dismissed Him and called Him a sinner, refusing to accept His divine identity. Even the man born blind, who testified to being healed by Jesus, was reviled and ridiculed for believing in Him (John 9:24-28).",
      "More surprisingly, His own siblings didn't believe in Him either (John 7:5) until His ascension to heaven. They didn't recognize the glory in the One they grew up with. At His crucifixion, while His mother was present, His brothers and sisters were nowhere to be found. They didn't stand by Him. They didn't defend Him. Yet, the Lord Jesus was everything He declared Himself to be. He was eternal life in a human body. He was God's love tabernacled in flesh, the very expression of the Father.",
      "Their unbelief didn't change who He was. And today, the world's opinions don't define Him. He is the great God of glory, the Christ, the Lord God almighty, God of heaven and earth. He is the true God and eternal life: \"And this is life eternal, that they might know thee the only true God, and Jesus Christ, whom thou hast sent\" (John 17:3)."
    ],
    closingType: "PRAYER",
    closing: "Dear Father, thank you for unveiling the person of the Lord Jesus to my heart—who He is—the great God, and eternal life. I behold Him in the Word and by the Spirit, acknowledging His Lordship, His deity, and His love. His life and nature are in me. I proclaim Him boldly to my world, and many believe through my witness, in Jesus' Name. Amen.",
    furtherStudy: "John 1:10-12; 1 Timothy 3:16; Titus 2:13-14",
    plan1yr: "Luke 10:1-24 & Joshua 20-22",
    plan2yr: "Romans 7:1-11 & Psalm 107",
    quiz: [
      { q: "What does John 1:11 say about Jesus coming to His own people?", options: ["They welcomed Him with joy", "His own received Him not", "The priests believed in Him first", "He was hidden from them"], answer: 1, explanation: "John 1:11 — 'He came unto his own, and his own received him not.'" },
      { q: "How did Judas identify Jesus for the soldiers at His arrest?", options: ["By pointing from a distance", "By shouting His name", "With a kiss", "By describing His garments"], answer: 2, explanation: "Judas had to identify Jesus with a kiss because He had no distinguishing physical appearance." },
      { q: "According to John 17:3, what is eternal life?", options: ["Going to heaven after death", "Knowing the only true God and Jesus Christ", "Living a holy life on earth", "Receiving the Holy Spirit"], answer: 1, explanation: "John 17:3 — 'this is life eternal, that they might know thee the only true God, and Jesus Christ, whom thou hast sent.'" },
      { q: "When did the biological siblings of Jesus finally believe in Him?", options: ["After His first miracle at Cana", "After His resurrection", "After His ascension to heaven", "During the Sermon on the Mount"], answer: 2, explanation: "His own siblings didn't believe until His ascension to heaven." },
      { q: "Isaiah 53:2 prophesied that when people saw Jesus:", options: ["A great light surrounded Him", "There was no beauty that they should desire Him", "Signs and wonders followed immediately", "His divine origin was unmistakable"], answer: 1, explanation: "Isaiah 53:2 — '…when we shall see him, there is no beauty that we should desire him.'" }
    ]
  },

  "2026-04-05": {
    title: "He Is Lord Jesus",
    dayLabel: "sunday 5",
    scripture: {
      text: "And when I saw him, I fell at his feet as dead. And he laid his right hand upon me, saying unto me, Fear not; I am the first and the last.",
      ref: "Revelation 1:17"
    },
    body: [
      "To walk with the Lord Jesus and truly serve Him, you must know who He really is. You can't honour Him if you don't know Him. You can't love Him if you don't know Him. Oftentimes, the way some call His Name reveals whether or not they truly recognise His divine identity and supreme lordship.",
      "For example, after His resurrection and ascension, no one who addressed Him called Him Jesus; they called Him Lord Jesus. He's Lord Jesus! That's what those who truly encountered Him called Him. Consider Saul of Tarsus; he was knocked down by divine power on the road to Damascus and said, \"Who are you, Lord?\"",
      "The moment he heard the answer, \"I am Jesus\", his reverence changed because he had a real encounter. Read it as Luke puts it: \"And he fell to the earth, and heard a voice saying unto him, Saul, Saul, why persecutest thou me? And he said, Who art thou, Lord? And the Lord said, I am Jesus whom thou persecutest: it is hard for thee to kick against the pricks\" (Acts 9:4-5).",
      "Many say they have seen Him, yet continue to address Him without reverence. A true encounter with the glorified Christ transforms how you speak to Him or about Him. You recognise His majesty. You honour His lordship. John the Apostle saw Him in glory on the Isle of Patmos, and his response was recorded in Revelation 1:17: \"...When I saw him, I fell at his feet as dead....\" He fell under the power, because of the manifestation of divine glory. Then the Master laid His hand upon him and spoke a blessing: \"Fear not; I am the first and the last.\" This is the glorified Christ.",
      "Your worship, your words, and your life should reflect the greatest honour, the deepest awe, and the utmost reverence for Him. He is \"…the great God and our Saviour Jesus Christ; Who gave himself for us, that he might redeem us from all iniquity, and purify unto himself a peculiar people, zealous of good works\" (Titus 2:13-14). He's Lord of all, and Lord of heaven and earth (Acts 10:36, Acts 17:24)."
    ],
    closingType: "PRAYER",
    closing: "Blessed Lord Jesus, I thank you for unveiling your lordship and glory to my spirit. My worship, my words, and my life reflect the greatest honour, the deepest awe, and the utmost reverence for your majesty, unparalleled greatness, dominion, great glory, and everlasting reign. Amen.",
    furtherStudy: "Philippians 2:9-11; Acts 2:36; Revelation 1:17-18",
    plan1yr: "Luke 10:25-42 & Joshua 23-24",
    plan2yr: "Romans 7:12-25 & Psalm 108",
    quiz: [
      { q: "After the resurrection, how did those who truly encountered Jesus address Him?", options: ["Just 'Jesus'", "'Rabbi Jesus'", "'Lord Jesus'", "'Christ Jesus only'"], answer: 2, explanation: "After the resurrection, those who truly encountered Him called Him 'Lord Jesus' — never just 'Jesus.'" },
      { q: "What was Saul of Tarsus' immediate response on the Damascus road?", options: ["He ran away", "He argued back", "He asked 'Who art thou, Lord?'", "He fell silent"], answer: 2, explanation: "Acts 9:4-5 — Saul asked 'Who art thou, Lord?' and his reverence transformed when he heard 'I am Jesus.'" },
      { q: "What was the Apostle John's physical response when he saw the glorified Christ?", options: ["He shouted for joy", "He fell at His feet as dead", "He ran toward Him", "He covered his eyes"], answer: 1, explanation: "Revelation 1:17 — 'When I saw him, I fell at his feet as dead.'" },
      { q: "Titus 2:13-14 describes Jesus as:", options: ["A great prophet and teacher", "The great God and our Saviour who purifies a peculiar people", "Lord of the Sabbath", "The suffering servant"], answer: 1, explanation: "Titus 2:13-14 — 'the great God and our Saviour Jesus Christ; Who gave himself for us…to purify unto himself a peculiar people.'" },
      { q: "What should your worship, words, and life reflect toward Him?", options: ["Cultural tradition", "Religious routine", "The greatest honour, deepest awe, and utmost reverence", "Personal achievement"], answer: 2, explanation: "'Your worship, your words, and your life should reflect the greatest honour, the deepest awe, and the utmost reverence for Him.'" }
    ]
  },

  "2026-04-06": {
    title: "The Wonder of Wonders",
    dayLabel: "monday 6",
    scripture: {
      text: "What and if ye shall see the Son of man ascend up where he was before?",
      ref: "John 6:62"
    },
    body: [
      "Did you know that the biological siblings of the Lord Jesus didn't believe in Him throughout His earthly ministry, even after His resurrection? But when He ascended before their very eyes, everything changed. The ascension was an undeniable confirmation of His divine origin and identity. It was the wonder of wonders.",
      "He had told the Jews that His ascension would be the proof of who He truly was when they questioned His claim to be the Son of God. He said to them, \"What and if ye shall see the Son of man ascend up where he was before?\" (John 6:62). He pointed them to the ascension as an unmistakable evidence of His deity.",
      "After the resurrection, some disciples still doubted. But on the day of His ascension, and they watched as He suddenly levitated and was taken up into heaven in full view, they had no more argument. Every mouth was stopped. What a moment! The One who was crucified and buried, the very One they thought was dead, ascended bodily into heaven!",
      "This was when His siblings believed that He was the Christ. They didn't return home. They followed the disciples to the upper room and received the Holy Spirit, including Mary, their biological mother (read Acts 1:9-14).",
      "Suddenly, they realised the One who ate with them, and lived under the same roof with them, was God Himself. His ascension seals His deity and assures us of His return. This was the wonder of wonders and remains a vital part of the Gospel and the Faith that we hold so dear."
    ],
    closingType: "PRAYER",
    closing: "How glorious you are, O Lord! My faith in you is eternal, for you're the only true God, proven by your resurrection from the dead and glorious ascension into heaven, where you live forevermore. I proclaim your majesty and live with the consciousness that you reign forever as King of kings and Lord of lords. Amen.",
    furtherStudy: "Acts 1:9-11; 1 Timothy 3:16",
    plan1yr: "Luke 11:1-13 & Judges 1-2",
    plan2yr: "Romans 8:1-11 & Psalm 109",
    quiz: [
      { q: "What event finally convinced the biological siblings of Jesus to believe in Him?", options: ["His first miracle at Cana", "His resurrection", "His ascension into heaven", "The Day of Pentecost"], answer: 2, explanation: "Watching Him levitate and be taken into heaven in full view was the moment His siblings finally believed." },
      { q: "What did Jesus point to as unmistakable evidence of His deity?", options: ["His miracles", "His resurrection", "His ascension", "His baptism"], answer: 2, explanation: "John 6:62 — Jesus pointed to the ascension: 'What and if ye shall see the Son of man ascend up where he was before?'" },
      { q: "According to Acts 1:9-14, what happened after Jesus ascended?", options: ["The disciples scattered and returned home", "His siblings and Mary joined the disciples in the upper room", "Only the twelve remained together", "The Pharisees finally believed"], answer: 1, explanation: "Acts 1:9-14 — His siblings and Mary joined the disciples in the upper room and received the Holy Spirit." },
      { q: "The ascension of Jesus seals His deity and:", options: ["Ends His ministry on earth", "Assures us of His return", "Removes His presence from earth", "Begins the age of silence"], answer: 1, explanation: "'His ascension seals His deity and assures us of His return.'" },
      { q: "When Jesus was taken up at His ascension, what was the reaction of those watching?", options: ["Great fear and fleeing", "Every mouth was stopped — no more argument", "Immediate singing and celebration", "Confusion and renewed disbelief"], answer: 1, explanation: "'Every mouth was stopped. What a moment!' — the ascension silenced all doubt." }
    ]
  },

  "2026-04-07": {
    title: "Discern and Eschew the Wrong Thoughts",
    dayLabel: "tuesday 7",
    scripture: {
      text: "For rebellion is as the sin of witchcraft, and stubbornness is as iniquity and idolatry…",
      ref: "1 Samuel 15:23"
    },
    body: [
      "The word witchcraft used in 1 Samuel 15:23 specifically refers to divination, a form of spiritual manipulation that God forbids. However, this is not the only kind of witchcraft mentioned in the Bible. In 2 Chronicles 33, we are introduced to King Manasseh, a ruler who led Judah into terrible idolatry and demonic practices.",
      "2 Chronicles 33:1-6 says, \"Manasseh was twelve years old when he began to reign, and he reigned fifty and five years in Jerusalem. But did that which was evil in the sight of the LORD, like unto the abominations of the heathen…And he caused his children to pass through the fire… also he observed times, and used enchantments, and used witchcraft….\"",
      "In the passage above, another Hebrew word is used for \"witchcraft,\" which primarily refers to whispering spells, practices that involve the use of words and thoughts to manipulate spiritual forces. Nonetheless, witchcraft, in its various forms, is often about the work of demons. But one key aspect is whispering spells, which involve sending spirits through words and thoughts.",
      "These spells are communicated via spoken words with spiritual intent, designed to summon or dispatch demons. What's particularly remarkable is that these demonic whispers often arrive as thoughts. They reach people as internal prompts, seemingly harmless at first. But remember, words are thoughts clothed in vocabulary. So, be quick to reject the wrong thoughts.",
      "Not every thought is from God, and not every thought you have originated from your own mind. Thoughts can come from multiple sources: from God, from your own mind, and from demons. That's why it's crucial to inundate your heart and mind with the Word of God.",
      "Only through the discerning power of the Holy Spirit, combined with knowledge of the Word, can you distinguish between divine thoughts and demonic whispers. The Bible instructs us to test every spirit (1 John 4:1). You must be vigilant to examine the source of every thought and impression.",
      "It's part of the reason you must give yourself wholly to the Word (1 Timothy 4:15); let it dwell in you richly (Colossians 3:16). With a deep knowledge of God's Word and the leading of His Spirit, you'll discern and reject the wrong thoughts and influences and embrace only the right ones."
    ],
    closingType: "PRAYER",
    closing: "Dear Father, thank you for your Word and the gift of the Spirit. My heart is guarded with truth and wisdom to reject every thought that's contrary to your Word, your will, and your destiny for my life. I walk in spiritual discernment and in the clarity and light of your Spirit, in Jesus' Name. Amen.",
    furtherStudy: "Philippians 4:8; 1 John 4:1; Romans 12:2",
    plan1yr: "Luke 11:14-36 & Judges 3-4",
    plan2yr: "Romans 8:12-19 & Psalm 110-111",
    quiz: [
      { q: "What does the Hebrew word for 'witchcraft' in 2 Chronicles 33 primarily refer to?", options: ["Idol worship", "Animal sacrifice", "Whispering spells through words and thoughts", "Sorcery using potions"], answer: 2, explanation: "This Hebrew word refers to whispering spells — practices using words and thoughts to manipulate spiritual forces." },
      { q: "How do demonic whispers often arrive, according to today's devotional?", options: ["As visions and dreams", "As audible voices", "As internal thoughts and prompts", "As physical sensations"], answer: 2, explanation: "'These demonic whispers often arrive as thoughts. They reach people as internal prompts, seemingly harmless at first.'" },
      { q: "According to 1 John 4:1, what should we do with every spirit?", options: ["Accept it if it feels peaceful", "Test it", "Ignore it", "Cast it out immediately"], answer: 1, explanation: "1 John 4:1 — 'test every spirit.'" },
      { q: "What are the three sources from which thoughts can come?", options: ["Angels, dreams, and conscience", "God, your own mind, and demons", "Scripture, prayer, and fellowship", "Heaven, earth, and the subconscious"], answer: 1, explanation: "'Thoughts can come from multiple sources: from God, from your own mind, and from demons.'" },
      { q: "Words are described as:", options: ["Prayers", "Prophecy", "Thoughts clothed in vocabulary", "Spiritual weapons only"], answer: 2, explanation: "'Words are thoughts clothed in vocabulary' — demonic thoughts become words, so reject wrong thoughts early." }
    ]
  },

  "2026-04-08": {
    title: "Cultivating the Right Mindset",
    dayLabel: "wednesday 8",
    scripture: {
      text: "And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God.",
      ref: "Romans 12:2"
    },
    body: [
      "Oftentimes, the challenges that people face are a result of their mindset. What's a mindset? A mindset is a fixed mental attitude or disposition that predetermines a person's responses and interpretations regarding any given situation. It's an established way of thinking that governs how one behaves.",
      "Being born again, you have the wisdom of the righteous, but you have to nurture it through the Word. As you continuously study and meditate on the Word, your mind is cultured to reason the Christ-way. You're programmed aright for life, victory and fruitfulness.",
      "However, your environment also plays a critical role. A wrong environment, saturated with negativity and worldly influences, will eventually shape your mindset. When you remain in an atmosphere where sickness, poverty, weakness, or defeat dominate conversations, those ideas may begin to influence your thinking.",
      "That's because humans are constantly being programmed by the things they hear, see, and those amongst whom they live. The way you are today is a result of the programming you received over the past years of your life. Your environment and the kind of information that you accepted contributed to your present mentality.",
      "This is why choosing the right spiritual environment is essential, an environment where your mind is continually influenced and renewed by God's Word. Romans 12:1-2 shows us the process: present your body to God as a living sacrifice, and then transform your mind. Let the Word of God replace your old way of thinking; exchange your thoughts for God's thoughts.",
      "Suddenly, you'll discover that certain thoughts and expressions no longer align with who you are; you've accepted God's way of thinking and allowed His Word to frame your mindset, resulting in a metamorphosis—a complete change of your state and estate. This transformation enables you to prove and live out God's perfect will, because your thoughts align with His."
    ],
    closingType: "CONFESSION",
    closing: "Dear Father, thank you for granting me the mindset of the righteous through your Word. My thoughts align with your truth. I refuse worldly conformity; my mind is continually renewed to think excellence, victory and possibilities, and to prove and live out your perfect will, because my thoughts align with yours. Hallelujah!",
    furtherStudy: "Romans 12:1-2 NKJV; Ephesians 4:23-24; Luke 1:17 DNT",
    plan1yr: "Luke 11:37-54 & Judges 5-6",
    plan2yr: "Romans 8:20-28 & Psalm 112-113",
    quiz: [
      { q: "How is a 'mindset' defined in today's devotional?", options: ["A temporary emotional reaction", "A fixed mental attitude that predetermines responses and interpretations", "A spiritual gift of discernment", "A habit formed through prayer"], answer: 1, explanation: "A mindset is 'a fixed mental attitude or disposition that predetermines a person's responses and interpretations regarding any given situation.'" },
      { q: "What does Romans 12:2 instruct us to do to prove God's will?", options: ["Fast regularly", "Be transformed by the renewing of your mind", "Separate from the world entirely", "Speak in tongues daily"], answer: 1, explanation: "Romans 12:2 — 'be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God.'" },
      { q: "Why is your environment critical to your mindset?", options: ["It determines financial success", "People are constantly programmed by what they hear and see", "Only bad environments affect you", "It only matters for children"], answer: 1, explanation: "'Humans are constantly being programmed by the things they hear, see, and those amongst whom they live.'" },
      { q: "What is the complete change of state and estate called in today's devotional?", options: ["Sanctification", "Justification", "Metamorphosis", "Regeneration"], answer: 2, explanation: "The devotional calls it 'a metamorphosis—a complete change of your state and estate.'" },
      { q: "What must happen BEFORE the mind is transformed, per Romans 12:1-2?", options: ["Water baptism", "Presenting your body to God as a living sacrifice", "Speaking in tongues", "Fasting for 40 days"], answer: 1, explanation: "Present your body to God as a living sacrifice first, then be transformed by the renewing of your mind." }
    ]
  },

  "2026-04-09": {
    title: "The Fullness of the Blessings of Christ",
    dayLabel: "thursday 9",
    scripture: {
      text: "And I am sure that, when I come unto you, I shall come in the fulness of the blessing of the gospel of Christ.",
      ref: "Romans 15:29"
    },
    body: [
      "Every Christian is called to walk in the fullness of the blessing of the Gospel. The Apostle Paul knew it was possible, and by the Spirit, he declared accordingly. It's not a special privilege exclusive to the apostles. Rather, it's what is possible for every one of us in Christ; we're called to live in the fullness of the blessings of Christ.",
      "Make up your mind that this is going to be your experience. Acknowledge and declare every day that you walk in the fullness of the blessing of the Gospel. This is the life of the new creation; it's a life of advantage, abundant supply, and exceeding grace.",
      "Remember the line in the prayer that the Lord Jesus taught His disciples to pray, \"Give us this day our daily bread\" (Matthew 6:11). This means our heavenly Father has a daily budget for each one of us, a divine provision set aside just for you every single day! So, enjoy what's yours; walk in the fullness of your daily provisions.",
      "God already made the supply. Even the ones you didn't \"collect\" over the years have accumulated for you as arrears; call them forth! Make the firm decision to enjoy your life in Christ and to live a great life. He called you into a life of blessing according to 1 Peter 3:9, \"… ye are thereunto called, that ye should inherit a blessing.\" Therefore, live in blessings.",
      "It's part of the reasons we give, serve, and reach others with the love of Christ. It's the reason we distribute God's Word in every known language, to improve and save lives, and bring them into the glorious liberty of the sons of God, so they too can know about and walk in the fullness of the blessings of Christ. Praise God!"
    ],
    closingType: "PRAYER",
    closing: "Dear Father, thank you for bringing me into the fullness of the blessing of the Gospel. I walk in surplus and unending divine advantages. I'm a dispenser of blessings, improving lives, and fulfilling your perfect will by the power of the Holy Spirit, in Jesus' Name. Amen.",
    furtherStudy: "Ephesians 1:3; Romans 15:29 AMPC; 2 Corinthians 9:8 AMPC",
    plan1yr: "Luke 12:1-21 & Judges 7-8",
    plan2yr: "Romans 8:29-39 & Psalm 114-115",
    quiz: [
      { q: "What does 'Give us this day our daily bread' (Matthew 6:11) reveal, according to today's teaching?", options: ["A prayer for physical food only", "A daily budget of divine provision set aside for you", "Dependence on the church for needs", "A general thanksgiving prayer"], answer: 1, explanation: "'Our heavenly Father has a daily budget for each one of us, a divine provision set aside just for you every single day!'" },
      { q: "What does the devotional call uncollected daily provisions from God?", options: ["Lost blessings", "Forfeited grace", "Accumulated arrears you can call forth", "Blessings reserved for heaven"], answer: 2, explanation: "'Even the ones you didn't collect over the years have accumulated for you as arrears; call them forth!'" },
      { q: "According to 1 Peter 3:9, Christians are called to:", options: ["Suffer patiently", "Inherit a blessing", "Endure to the end", "Wait for heaven"], answer: 1, explanation: "1 Peter 3:9 — '…ye are thereunto called, that ye should inherit a blessing.'" },
      { q: "The fullness of the blessings of Christ is:", options: ["Exclusive to apostles", "Available only after death", "For every Christian — a life of advantage, supply and exceeding grace", "Dependent on perfect obedience"], answer: 2, explanation: "'It's not a special privilege exclusive to the apostles. Rather, it's what is possible for every one of us in Christ.'" },
      { q: "Why do we give, serve and distribute God's Word to others?", options: ["To earn our own blessings", "To bring others into the fullness of the blessings of Christ", "To fulfil religious duty", "To build our reputation"], answer: 1, explanation: "We give and serve to bring others 'into the glorious liberty of the sons of God, so they too can know about and walk in the fullness of the blessings of Christ.'" }
    ]
  },

  "2026-04-10": {
    title: "Rich in Christ",
    dayLabel: "friday 10",
    scripture: {
      text: "For ye know the grace of our Lord Jesus Christ, that, though he was rich, yet for your sakes he became poor, that ye through his poverty might be rich.",
      ref: "2 Corinthians 8:9"
    },
    body: [
      "The Word of God is clear: poverty is not from God; therefore, you should never accept the message of poverty. Poverty is inconsistent with our divine nature and heritage in Christ. The Bible shows clearly that the Lord Jesus became poor, in contrast to His true wealth, for one purpose: that you might become rich.",
      "That's what we read in our opening scripture. It wasn't referring to spiritual riches; the Lord Jesus was never poor spiritually. The context is financial and material blessings. He laid aside all that belonged to Him so that through His substitutionary work, you would come into prosperity and financial abundance.",
      "Some may say that God isn't interested in making His children rich, but the Word already declares His will. In Christ, you're an heir of God. All things are yours. Some may choose not to enjoy them, but they should never claim that poverty is God's plan. The blessing of God brings prosperity, supply, and supernatural advantage.",
      "Let's for a moment review and ponder the magnitude of what belongs to us, our riches in Christ, as stated in Ephesians 3:8. Paul, by the Spirit, writes, \"To me, though I am the very least of all the saints (God's consecrated people), this grace (favor, privilege) was granted and graciously entrusted: to proclaim to the Gentiles the unending (boundless, fathomless, incalculable, and exhaustless) riches of Christ [wealth which no human being could have searched out]\" (AMPC).",
      "Our riches are unsearchable, beyond quantification, exhaustless, boundless, and incalculable. This is the kind of wealth you've been called to enjoy. It's Kingdom wealth—superior to earthly economics—and it's yours now in Christ Jesus. Therefore, refuse to think lack. Refuse to talk scarcity. Live with the consciousness of your divine inheritance.",
      "Every so often, say to yourself, \"I have unsearchable riches in Christ. All things are mine. I walk in abundance, and I give lavishly into the Gospel for the advancement of the Kingdom.\" Hallelujah!"
    ],
    closingType: "PRAYER",
    closing: "Dear Father, thank you for the unsearchable riches of Christ that belong to me. I walk in divine supply, abundance, and I'm empowered to give, to bless, and to cause the Gospel to spread everywhere. I reject lack and embrace the fullness of your provision, in Jesus' Name. Amen.",
    furtherStudy: "1 Corinthians 3:21-23; Ephesians 3:8 GNT; Galatians 3:29",
    plan1yr: "Luke 12:22-48 & Judges 9",
    plan2yr: "Romans 9:1-13 & Psalm 116-117",
    quiz: [
      { q: "According to 2 Corinthians 8:9, why did Jesus become poor?", options: ["To identify with the suffering of humanity", "To show humility to His disciples", "That through His poverty we might be rich", "To fulfil Old Testament prophecy about suffering"], answer: 2, explanation: "2 Corinthians 8:9 — 'though he was rich, yet for your sakes he became poor, that ye through his poverty might be rich.'" },
      { q: "What is the context of Jesus becoming 'poor' in 2 Corinthians 8:9?", options: ["Spiritual poverty", "Emotional suffering", "Financial and material blessings", "Social rejection"], answer: 2, explanation: "'It wasn't referring to spiritual riches; the Lord Jesus was never poor spiritually. The context is financial and material blessings.'" },
      { q: "How are the riches of Christ described in Ephesians 3:8 (AMPC)?", options: ["Temporary and conditional", "Boundless, fathomless, incalculable, and exhaustless", "Reserved for faithful tithers", "Spiritual only, not material"], answer: 1, explanation: "Ephesians 3:8 AMPC — 'unending (boundless, fathomless, incalculable, and exhaustless) riches of Christ.'" },
      { q: "What should you refuse to think and talk?", options: ["Lack and scarcity", "Success and abundance", "Healing and health", "Prayer and fasting"], answer: 0, explanation: "'Refuse to think lack. Refuse to talk scarcity. Live with the consciousness of your divine inheritance.'" },
      { q: "Kingdom wealth is described as:", options: ["Equal to earthly wealth", "Inferior to earthly economics", "Superior to earthly economics and yours now in Christ", "Available only in the afterlife"], answer: 2, explanation: "'It's Kingdom wealth—superior to earthly economics—and it's yours now in Christ Jesus.'" }
    ]
  },

  "2026-04-11": {
    title: "No Such Thing as Lack",
    dayLabel: "saturday 11",
    scripture: {
      text: "But my God shall supply all your need according to his riches in glory by Christ Jesus.",
      ref: "Philippians 4:19"
    },
    body: [
      "We observed in our previous study that being born again, you've been brought into a place of unending, boundless, and exhaustless riches. Christ is your source. He's brought you into a \"large place\" (Psalm 18:19), a place of wealth untold. That's the reality.",
      "Therefore, lack should have no place in your life as a child of God. There's no such thing as shortage for the one who lives by the mentality of the Spirit. Think beyond this world about everything concerning your life. Keep your mindset aligned with your divine nature.",
      "You're a child of God; therefore, your thoughts, speech, and expectations must reflect that reality. It must reflect in the excellence of your health, the excellence of your finances and everything else about your life. Don't allow others to measure you by their limitations.",
      "The one who thinks lack assumes everyone else is in lack. The one who feels pain assumes everyone must feel the same pain. But you're different. Therefore, think differently, speak differently and live differently. You're from above; you live in Christ, and in Christ there's no lack.",
      "Refuse to reason from the realm of need; you came from the realm of abundance. You function from heaven's supply. The Lord Jesus didn't die for nothing. He brought us into sonship. He made us heirs of God and joint-heirs with Christ. That means all things are yours now. See and speak from this divine position of advantage and abundant grace.",
      "There's money for you everywhere. There're resources laid up for you to execute the assignments God has committed to you. The doors are open; the supply is endless. Act like the Word is true, because, indeed, it is! It says, \"The lions may grow weak and hungry, but those who seek the LORD lack no good thing\" (Psalm 34:10 NIV). Hallelujah!"
    ],
    closingType: "CONFESSION",
    closing: "I walk in Christ's boundless and inexhaustible supply, in His unsearchable riches. I refuse lack or limitation. All things are mine. I live in supernatural supply every day! I operate in divine abundance and walk in the full manifestation of my inheritance in Christ. I am a dispenser of blessings and a giver of good things, fulfilling God's purpose with excellence. Amen.",
    furtherStudy: "2 Corinthians 9:8 AMPC; Ephesians 1:3; Romans 8:17",
    plan1yr: "Luke 12:49-59 & Judges 10-11",
    plan2yr: "Romans 9:14-25 & Psalm 118",
    quiz: [
      { q: "Psalm 34:10 (NIV) says those who seek the LORD:", options: ["Will be tested by poverty", "Lack no good thing", "Must endure seasons of shortage", "Receive only spiritual blessings"], answer: 1, explanation: "Psalm 34:10 NIV — 'The lions may grow weak and hungry, but those who seek the LORD lack no good thing.'" },
      { q: "What is Psalm 18:19 referred to as in today's devotional?", options: ["A large place — a place of wealth untold", "A place of spiritual growth", "A place of prayer and fasting", "A safe hiding place"], answer: 0, explanation: "The devotional references Psalm 18:19 as 'a large place' — the place of wealth untold that Christ has brought you into." },
      { q: "Why should lack have no place in a child of God's life?", options: ["Because they work harder", "Because God rewards tithing", "Because Christ is their source and He is inexhaustible", "Because they attend church regularly"], answer: 2, explanation: "'Christ is your source' and you've been brought into unending, boundless, exhaustless riches." },
      { q: "As heirs of God and joint-heirs with Christ, what does that mean for you now?", options: ["You will inherit in heaven only", "All things are yours now", "You inherit only spiritual gifts", "Blessings come when you mature"], answer: 1, explanation: "'He made us heirs of God and joint-heirs with Christ. That means all things are yours now.'" },
      { q: "What does the devotional say about resources for executing God's assignments?", options: ["They must be prayed down from heaven", "They are laid up for you and the supply is endless", "They depend on your level of sacrifice", "They come only through tithing"], answer: 1, explanation: "'There're resources laid up for you to execute the assignments God has committed to you. The doors are open; the supply is endless.'" }
    ]
  },

  "2026-04-12": {
    title: "A Sworn Declaration of Blessing",
    dayLabel: "sunday 12",
    scripture: {
      text: "For when God made promise to Abraham, because he could swear by no greater, he sware by himself, Saying, Surely blessing I will bless thee, and multiplying I will multiply thee.",
      ref: "Hebrews 6:13-14"
    },
    body: [
      "God's covenant with Abraham was more than a promise—it was a sworn declaration of blessing. The Bible says that because God could not swear by anyone greater, He swore by Himself. That means the blessing was backed by God's very nature and integrity. It wasn't just a good intention; it was a covenant of certainty.",
      "This blessing wasn't for Abraham alone. Galatians 3:29 declares, \"...If ye be Christ's, then are ye Abraham's seed, and heirs according to the promise.\" You're the inheritor of the Abrahamic blessings. You're the reason God made that promise to Abraham—to reach you through Christ. This blessing is active in your life today, and it means increase, favour, fruitfulness, and spiritual authority.",
      "God's blessing on you is irreversible and unstoppable. That's why no curse, opposition, or circumstance can prevail against you. You've been empowered to succeed and multiply. This is something much bigger than yourself. It's not just about your needs being met; it's about being a channel of divine flow. He said to Abraham, \"...I will bless you...And you shall be a blessing\" (Genesis 12:2 NKJV).",
      "You're blessed to be a blessing. You've been blessed with ALL spiritual blessings in heavenly places in Christ Jesus (Ephesians 1:3). Don't live like someone trying to be blessed. Live as one already blessed, walking in divine partnership with God and dispensing blessings. Speak blessings. Declare your increase. Expect favour and dispense favour. Multiply your resources and use them to advance the Kingdom. It's your heritage in Christ. Hallelujah!"
    ],
    closingType: "PRAYER",
    closing: "Dear Father, thank you for making me the seed of Abraham and an heir of the blessing. I'm fruitful, favoured and empowered to prosper. I walk in excellence and supernatural abundance; I'm a blessing to my world, in Jesus' Name. Amen.",
    furtherStudy: "Genesis 12:2-3; Galatians 3:8-9; Hebrews 6:13-14 NIV",
    plan1yr: "Luke 13:1-21 & Judges 12-13",
    plan2yr: "Romans 9:26-33 & Psalm 119:1-40",
    quiz: [
      { q: "Why did God swear by Himself when making the promise to Abraham?", options: ["He wanted Abraham to take it seriously", "There was no one greater by whom He could swear", "It was the custom of the time", "Angels witnessed the covenant"], answer: 1, explanation: "Hebrews 6:13 — 'because he could swear by no greater, he sware by himself' — backed by God's own nature and integrity." },
      { q: "According to Galatians 3:29, who are heirs of the Abrahamic promise?", options: ["Only physical descendants of Abraham", "Only pastors and prophets", "All who belong to Christ", "Only those who fast and pray"], answer: 2, explanation: "Galatians 3:29 — 'If ye be Christ's, then are ye Abraham's seed, and heirs according to the promise.'" },
      { q: "The Abrahamic blessing means for you today:", options: ["A life free from all challenges", "Increase, favour, fruitfulness, and spiritual authority", "Wealth with no responsibility", "Blessing for Abraham's physical descendants only"], answer: 1, explanation: "The devotional says the blessing 'means increase, favour, fruitfulness, and spiritual authority' for you today." },
      { q: "What is the correct posture for a child of God regarding blessings?", options: ["Pray and wait to receive blessings", "Live as one already blessed and dispense blessings", "Earn blessings through service", "Ask God daily to release the blessings"], answer: 1, explanation: "'Don't live like someone trying to be blessed. Live as one already blessed, walking in divine partnership with God and dispensing blessings.'" },
      { q: "According to Genesis 12:2 (NKJV), what was God's twofold declaration to Abraham?", options: ["'I will protect you and guide you'", "'I will bless you…And you shall be a blessing'", "'I will multiply you and give you the land'", "'I will make you a great nation and a king'"], answer: 1, explanation: "Genesis 12:2 NKJV — 'I will bless you…And you shall be a blessing.' Blessed to be a blessing." }
    ]
  },

  "2026-04-13": {
    title: "The Ultimate Blessing of the New Testament",
    dayLabel: "monday 13",
    scripture: {
      text: "Christ hath redeemed us from the curse of the law…That the blessing of Abraham might come on the Gentiles through Jesus Christ; that we might receive the promise of the Spirit through faith.",
      ref: "Galatians 3:13-14"
    },
    body: [
      "The latter part of what we just read helps us to understand that the ultimate blessing of Abraham wasn't diamonds, gold, land, or cattle; it was the Spirit. Through Jesus Christ, the promise of the Spirit has now come to us who believe. He lives in us, works through us, walks in us, and empowers us daily. This is the greatest treasure of the New Testament; the Holy Spirit in you!",
      "He's the seal of our inheritance, the proof that we belong to God. He's not a shadow or a force; He's a divine Person who walks with you and lives in you. His presence is what makes the Christian life supernatural, victorious and exciting. You need to be more aware of His power that's at work within you.",
      "Ephesians 1:19-20 talks about the exceeding greatness of His mighty power at work in you: \"And what is the exceeding greatness of his power to us-ward who believe, according to the working of his mighty power, Which he wrought in Christ, when he raised him from the dead….\" Hallelujah! There's no need to pray for power, strength, or wisdom because the Holy Spirit, who is Himself wisdom, strength, and the source of all power and divine guidance, is already resident in you.",
      "You're never without help. The same Spirit that raised the Lord Jesus from the dead lives in you. This is the fulfilment of God's eternal plan. The prophets longed to see it. The patriarchs anticipated it. But you're living it: \"Even the mystery which hath been hid from ages and from generations, but now is made manifest to his saints…which is Christ in you, the hope of glory\" (Colossians 1:26-27).",
      "Christianity without the Holy Spirit is religion. But with Him, it's a divine adventure. He makes the Word come alive, fills your prayer with power, and transforms you from glory to glory. Acknowledge Him. Yield to Him, and fellowship with Him always. He's the ultimate blessing of the New Testament."
    ],
    closingType: "PRAYER",
    closing: "Righteous Father, thank you for the blessing of the Holy Spirit who lives in me, strengthens me, leads me, and guides me to walk in supernatural wisdom, power and dominion. And by His mighty power at work in me, I'm effective in soul winning and my faith prevails always. Your love, grace and blessings are manifested in and revealed through me, in Jesus' Name. Amen.",
    furtherStudy: "Ephesians 1:13-14 NKJV; Romans 8:11; John 14:16-17",
    plan1yr: "Luke 13:22-35 & Judges 14-16",
    plan2yr: "Romans 10:1-10 & Psalm 119:41-64",
    quiz: [
      { q: "What was the ultimate blessing of Abraham, according to today's devotional?", options: ["Land, cattle and gold", "Physical descendants as numerous as stars", "The Spirit", "Protection from all enemies"], answer: 2, explanation: "'The ultimate blessing of Abraham wasn't diamonds, gold, land, or cattle; it was the Spirit.'" },
      { q: "What is the Holy Spirit described as — shadow, force, or Person?", options: ["A shadow of God's presence", "An impersonal force", "A divine Person who walks with and lives in you", "An angel of God"], answer: 2, explanation: "'He's not a shadow or a force; He's a divine Person who walks with you and lives in you.'" },
      { q: "According to Ephesians 1:19-20, what power is at work in believers?", options: ["The same power Moses had", "The exceeding greatness of His mighty power — the same that raised Christ", "The power of prayer alone", "The power of the written Word only"], answer: 1, explanation: "Ephesians 1:19-20 — the exceeding greatness of His mighty power working in believers — the same that raised Christ from the dead." },
      { q: "Colossians 1:26-27 describes 'Christ in you' as:", options: ["A future hope for heaven", "The mystery hidden from ages, now revealed — Christ in you, the hope of glory", "A metaphor for the Word", "A promise for the tribulation period"], answer: 1, explanation: "Colossians 1:26-27 — 'the mystery which hath been hid from ages…which is Christ in you, the hope of glory.'" },
      { q: "What is 'Christianity without the Holy Spirit' called in today's devotional?", options: ["Incomplete faith", "Religion", "A good foundation", "Spiritual immaturity"], answer: 1, explanation: "'Christianity without the Holy Spirit is religion. But with Him, it's a divine adventure.'" }
    ]
  },

  "2026-04-14": {
    title: "The Knowledge of Your Identity",
    dayLabel: "tuesday 14",
    scripture: {
      text: "But ye are a chosen generation, a royal priesthood, an holy nation, a peculiar people; that ye should shew forth the praises of him who hath called you out of darkness into his marvellous light.",
      ref: "1 Peter 2:9"
    },
    body: [
      "The Word declares that we are a chosen race, a royal priesthood, a dedicated nation, God's own purchased special people. You're special. You're born of God; therefore, you're taxonomically different from the unregenerate man. You have the organic and existential attributes of deity. You're of a divine origin. This is your identity in Christ.",
      "God created you to set forth His wonderful deeds and display His virtues and perfections, His glory and His excellence in the earth. He called you out of darkness into His marvellous light, to reveal Him to your world. What's more? You're His righteousness (2 Corinthians 5:21); you're the proof of His equity. Blessed be God!",
      "It's important for you to know these and other truths about your identity in Christ so you can walk accordingly. You need to know who you truly are, and the best way for you to know is to study God's Word. The Word, particularly the Epistles, are the album of the new creation in Christ.",
      "Through the Word you see and know yourself, you know the substance and character of your human spirit. In Christ, we're of a different spirit. We're gracious, loving, affectionate and kind. We're royalty. Consider again what we read in our opening scripture; it unveils who you are, what you have, and what you can do in Christ.",
      "When the revelation of your identity dawns on your spirit, it becomes your consciousness. You'll speak boldly and act confidently in line with the Word, resulting in testimonies, victories, unending joy, and peace with prosperity. The knowledge of your identity and heritage in Christ puts springs in your steps. It causes you to walk in His righteousness and dominion always. Hallelujah!"
    ],
    closingType: "CONFESSION",
    closing: "I'm God's peculiar treasure; holy, righteous, sanctified and justified. I walk in the consciousness of my royal identity and I manifest the virtues and perfections of Christ to my world. God's Word is my life; therefore, excellence, triumph and unending joy are the hallmarks of my life. I walk in the full blessings of the Gospel of Christ. Amen.",
    furtherStudy: "1 Peter 2:9 AMPC; Ephesians 2:10 AMPC; 1 John 4:17",
    plan1yr: "Luke 14:1-24 & Judges 17-18",
    plan2yr: "Romans 10:11-21 & Psalm 119:65-80",
    quiz: [
      { q: "According to 1 Peter 2:9, what are four descriptions of God's people?", options: ["Saved, sanctified, baptised, filled", "A chosen generation, royal priesthood, holy nation, peculiar people", "Righteous, holy, blameless, redeemed", "Forgiven, loved, healed, prosperous"], answer: 1, explanation: "1 Peter 2:9 — 'ye are a chosen generation, a royal priesthood, an holy nation, a peculiar people.'" },
      { q: "What are described as 'the album of the new creation in Christ'?", options: ["The Psalms", "The Gospels", "The Epistles", "The Prophets"], answer: 2, explanation: "'The Word, particularly the Epistles, are the album of the new creation in Christ.'" },
      { q: "You are 'taxonomically different' from the unregenerate man because:", options: ["You follow different rules", "You have the organic and existential attributes of deity", "You attend church regularly", "You were raised in a Christian home"], answer: 1, explanation: "'You're born of God; therefore, you're taxonomically different from the unregenerate man. You have the organic and existential attributes of deity.'" },
      { q: "What is the result when the revelation of your identity dawns on your spirit?", options: ["Religious pride", "Timidity and caution", "Bold speech, confident action, testimonies, victories, unending joy and peace with prosperity", "A desire to isolate from the world"], answer: 2, explanation: "'You'll speak boldly and act confidently in line with the Word, resulting in testimonies, victories, unending joy, and peace with prosperity.'" },
      { q: "Why were you called out of darkness into His marvellous light?", options: ["To enjoy personal blessings only", "To show forth the praises of God and reveal Him to your world", "To separate from sinners", "To receive spiritual gifts"], answer: 1, explanation: "1 Peter 2:9 — called 'that ye should shew forth the praises of him who hath called you out of darkness into his marvellous light.'" }
    ]
  },

  "2026-04-15": {
    title: "Always Filled With the Spirit",
    dayLabel: "wednesday 15",
    scripture: {
      text: "And be not drunk with wine, wherein is excess; but be filled with the Spirit.",
      ref: "Ephesians 5:18"
    },
    body: [
      "It's God's desire that you live continually filled with the Spirit, and the Bible tell us how in the ensuing verses 19 to 21 of our opening scripture: \"Speaking to yourselves in psalms and hymns and spiritual songs, singing and making melody in your heart to the Lord; Giving thanks always for all things unto God and the Father in the name of our Lord Jesus Christ; Submitting yourselves one to another in the fear of God.\"",
      "How profound that He'd list for us what we're to do in getting ourselves perpetually filled with the Spirit! It's up to you to put this to practise every day in your personal life. It'll keep you above agitation, fear and worry. Those who aren't often filled with the Spirit are easily troubled and uneasy, looking for someone to blame or somewhere to vent their frustrations.",
      "But when you live full of the Spirit, you remain joyful, peaceful and at rest. You don't struggle; your faith prevails. You function from a place of divine supply, strength and wisdom.",
      "Every day, stay continually stirred, stimulated and spiritually minded. It's your responsibility to remain in that atmosphere. There, everything is permanent, unshaken, and eternal. From that realm, you govern circumstances and rule over life's situations. You're constantly aglow and afire by the Holy Ghost. Hallelujah!"
    ],
    closingType: "PRAYER",
    closing: "Dear Father, thank you for the blessing of being continually filled with the Spirit. I maintain the glow of the Spirit in my life as I walk in the consciousness of your righteousness, glory, beauty, excellence and eternal life within me. I live from the realm of the Spirit and dominate my world with your power and glory, in Jesus' Name. Amen.",
    furtherStudy: "Ephesians 5:18-21 AMPC; 2 Corinthians 4:16-18; Romans 12:11 MOFFAT",
    plan1yr: "Luke 14:25-15:1-10 & Judges 19-21",
    plan2yr: "Romans 11:1-12 & Psalm 119:81-104",
    quiz: [
      { q: "According to Ephesians 5:19-21, what are three ways to stay filled with the Spirit?", options: ["Praying, fasting, and giving", "Speaking in psalms/hymns/spiritual songs, giving thanks always, submitting to one another", "Reading the Bible, attending church, witnessing", "Meditating, confessing, and worshipping"], answer: 1, explanation: "Ephesians 5:19-21 gives three practices: speaking psalms and hymns; giving thanks always; and submitting to one another." },
      { q: "What happens to those NOT often filled with the Spirit?", options: ["They lose their salvation", "They are easily troubled and uneasy, looking for someone to blame", "They fall into serious sin automatically", "They lose all spiritual gifts"], answer: 1, explanation: "'Those who aren't often filled with the Spirit are easily troubled and uneasy, looking for someone to blame or somewhere to vent their frustrations.'" },
      { q: "When you live full of the Spirit, you:", options: ["Never face any problems", "Remain joyful, peaceful and at rest — your faith prevails", "Become wealthy immediately", "Are exempt from all spiritual warfare"], answer: 1, explanation: "'When you live full of the Spirit, you remain joyful, peaceful and at rest. You don't struggle; your faith prevails.'" },
      { q: "Whose responsibility is it to remain filled with the Spirit?", options: ["The pastor's through intercession", "God's sovereign choice alone", "Yours personally — it's your daily responsibility", "The collective church through fasting"], answer: 2, explanation: "'It's up to you to put this to practise every day in your personal life.'" },
      { q: "From the realm of being Spirit-filled, what can you do?", options: ["Avoid all spiritual warfare", "Govern circumstances and rule over life's situations", "Receive new revelations automatically", "Speak new languages without study"], answer: 1, explanation: "'From that realm, you govern circumstances and rule over life's situations. You're constantly aglow and afire by the Holy Ghost.'" }
    ]
  }

};
