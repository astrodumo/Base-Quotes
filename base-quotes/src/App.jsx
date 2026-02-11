import React, { useState } from 'react';
import { Sparkles, RefreshCw } from 'lucide-react';

import { sdk } from '@farcaster/miniapp-sdk';
import { useEffect } from 'react';

    
export default function PhilosophicalQuoteGenerator() {
  useEffect(() => {
        sdk.actions.ready();
    }, []);
  const [selectedMood, setSelectedMood] = useState('');
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const moods = [
    { value: 'reflective', label: 'Reflective', emoji: '🤔', color: 'from-blue-500 to-purple-500' },
    { value: 'anxious', label: 'Anxious', emoji: '😰', color: 'from-yellow-500 to-orange-500' },
    { value: 'joyful', label: 'Joyful', emoji: '😊', color: 'from-pink-500 to-rose-500' },
    { value: 'sad', label: 'Sad', emoji: '😢', color: 'from-gray-500 to-slate-600' },
    { value: 'inspired', label: 'Inspired', emoji: '✨', color: 'from-cyan-500 to-blue-500' },
    { value: 'lost', label: 'Lost', emoji: '🌫️', color: 'from-indigo-500 to-purple-600' },
    { value: 'grateful', label: 'Grateful', emoji: '🙏', color: 'from-green-500 to-emerald-500' },
    { value: 'angry', label: 'Angry', emoji: '😤', color: 'from-red-500 to-orange-600' },
  ];

   const quotes = {
  reflective: [
    { quote: "The unexamined life is not worth living.", philosopher: "Socrates" },
    { quote: "We cannot choose our external circumstances, but we can always choose how we respond to them.", philosopher: "Epictetus" },
    { quote: "The only true wisdom is in knowing you know nothing.", philosopher: "Socrates" },
    { quote: "Know thyself.", philosopher: "Ancient Greek Proverb" },
    { quote: "I think, therefore I am.", philosopher: "René Descartes" },
    { quote: "The cave you fear to enter holds the treasure you seek.", philosopher: "Joseph Campbell" },
    { quote: "Between stimulus and response there is a space. In that space is our power to choose our response.", philosopher: "Viktor Frankl" },
    { quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", philosopher: "Aristotle" },
    { quote: "The only journey is the one within.", philosopher: "Rainer Maria Rilke" },
    { quote: "Knowing yourself is the beginning of all wisdom.", philosopher: "Aristotle" },
    { quote: "Life must be understood backward. But it must be lived forward.", philosopher: "Søren Kierkegaard" },
    { quote: "The privilege of a lifetime is to become who you truly are.", philosopher: "Carl Jung" },
    { quote: "One's destination is never a place, but a new way of seeing things.", philosopher: "Henry Miller" },
    { quote: "We do not learn from experience... we learn from reflecting on experience.", philosopher: "John Dewey" },
    { quote: "Man is condemned to be free.", philosopher: "Jean-Paul Sartre" },
    { quote: "The greatest thing in the world is to know how to belong to oneself.", philosopher: "Michel de Montaigne" },
    { quote: "Your vision will become clear only when you can look into your own heart.", philosopher: "Carl Jung" },
    { quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", philosopher: "Ralph Waldo Emerson" },
    { quote: "The mind is everything. What you think you become.", philosopher: "Buddha" },
    { quote: "In the depths of winter, I finally learned that within me there lay an invincible summer.", philosopher: "Albert Camus" },
    { quote: "He who looks outside, dreams; he who looks inside, awakes.", philosopher: "Carl Jung" },
    { quote: "To understand the world, you must first understand a place like Mississippi.", philosopher: "William Faulkner" },
    { quote: "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.", philosopher: "Marcel Proust" },
    { quote: "Silence is a source of great strength.", philosopher: "Lao Tzu" },
    { quote: "The quieter you become, the more you can hear.", philosopher: "Ram Dass" },
    { quote: "Philosophy is a battle against the bewitchment of our intelligence by means of language.", philosopher: "Ludwig Wittgenstein" },
    { quote: "Everything that irritates us about others can lead us to an understanding of ourselves.", philosopher: "Carl Jung" },
    { quote: "The first step toward change is awareness. The second step is acceptance.", philosopher: "Nathaniel Branden" },
    { quote: "Muddy water, let stand, becomes clear.", philosopher: "Lao Tzu" },
    { quote: "Turn your wounds into wisdom.", philosopher: "Oprah Winfrey" }
  ],
  anxious: [
    { quote: "You have power over your mind - not outside events. Realize this, and you will find strength.", philosopher: "Marcus Aurelius" },
    { quote: "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.", philosopher: "Marcus Aurelius" },
    { quote: "The present moment is all you ever have. Make the Now the primary focus of your life.", philosopher: "Eckhart Tolle" },
    { quote: "Nothing can harm you as much as your own thoughts unguarded.", philosopher: "Buddha" },
    { quote: "We suffer more often in imagination than in reality.", philosopher: "Seneca" },
    { quote: "Do not anticipate trouble, or worry about what may never happen. Keep in the sunlight.", philosopher: "Benjamin Franklin" },
    { quote: "Worry does not empty tomorrow of its sorrow, it empties today of its strength.", philosopher: "Corrie ten Boom" },
    { quote: "Peace comes from within. Do not seek it without.", philosopher: "Buddha" },
    { quote: "The greatest weapon against stress is our ability to choose one thought over another.", philosopher: "William James" },
    { quote: "If the problem can be solved why worry? If the problem cannot be solved worrying will do you no good.", philosopher: "Shantideva" },
    { quote: "Rule your mind or it will rule you.", philosopher: "Horace" },
    { quote: "The primary cause of unhappiness is never the situation but your thoughts about it.", philosopher: "Eckhart Tolle" },
    { quote: "Our anxiety does not come from thinking about the future, but from wanting to control it.", philosopher: "Kahlil Gibran" },
    { quote: "Fear is the path to the dark side. Fear leads to anger, anger leads to hate, hate leads to suffering.", philosopher: "Yoda" },
    { quote: "Nothing in the affairs of men is worthy of great anxiety.", philosopher: "Plato" },
    { quote: "He who fears he shall suffer, already suffers what he fears.", philosopher: "Michel de Montaigne" },
    { quote: "Breathe. Let go. And remind yourself that this very moment is the only one you know you have for sure.", philosopher: "Oprah Winfrey" },
    { quote: "The only way out is through.", philosopher: "Robert Frost" },
    { quote: "Fear is only as deep as the mind allows.", philosopher: "Japanese Proverb" },
    { quote: "Smile, breathe, and go slowly.", philosopher: "Thich Nhat Hanh" },
    { quote: "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor.", philosopher: "Thich Nhat Hanh" },
    { quote: "The best way out is always through.", philosopher: "Helen Keller" },
    { quote: "Everything you've ever wanted is on the other side of fear.", philosopher: "George Addair" },
    { quote: "Don't believe everything you think.", philosopher: "Buddhist Saying" },
    { quote: "This too shall pass.", philosopher: "Persian Proverb" },
    { quote: "Anxiety is love's greatest killer. It makes others feel as you might when a drowning man holds on to you.", philosopher: "Anaïs Nin" },
    { quote: "The mind is its own place, and in itself can make a heaven of hell, a hell of heaven.", philosopher: "John Milton" },
    { quote: "Nothing is permanent in this wicked world, not even our troubles.", philosopher: "Charlie Chaplin" },
    { quote: "First say to yourself what you would be; and then do what you have to do.", philosopher: "Epictetus" },
    { quote: "Present-moment awareness is the key to staying calm.", philosopher: "Jon Kabat-Zinn" }
  ],
  joyful: [
    { quote: "Happiness is not something ready made. It comes from your own actions.", philosopher: "Dalai Lama" },
    { quote: "The purpose of our lives is to be happy.", philosopher: "Dalai Lama" },
    { quote: "Joy in looking and comprehending is nature's most beautiful gift.", philosopher: "Albert Einstein" },
    { quote: "Happiness is the meaning and the purpose of life, the whole aim and end of human existence.", philosopher: "Aristotle" },
    { quote: "The most important thing is to enjoy your life—to be happy—it's all that matters.", philosopher: "Audrey Hepburn" },
    { quote: "Happiness depends upon ourselves.", philosopher: "Aristotle" },
    { quote: "Joy is what happens to us when we allow ourselves to recognize how good things really are.", philosopher: "Marianne Williamson" },
    { quote: "The happiness of your life depends upon the quality of your thoughts.", philosopher: "Marcus Aurelius" },
    { quote: "Happiness is when what you think, what you say, and what you do are in harmony.", philosopher: "Mahatma Gandhi" },
    { quote: "The best way to cheer yourself up is to try to cheer somebody else up.", philosopher: "Mark Twain" },
    { quote: "Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.", philosopher: "Franklin D. Roosevelt" },
    { quote: "The secret of happiness is not in doing what one likes, but in liking what one does.", philosopher: "J.M. Barrie" },
    { quote: "Let us be grateful to the people who make us happy; they are the charming gardeners who make our souls blossom.", philosopher: "Marcel Proust" },
    { quote: "Happiness is not a goal; it is a by-product.", philosopher: "Eleanor Roosevelt" },
    { quote: "The foolish man seeks happiness in the distance, the wise grows it under his feet.", philosopher: "James Oppenheim" },
    { quote: "Happiness radiates like the fragrance from a flower and draws all good things towards you.", philosopher: "Maharishi Mahesh Yogi" },
    { quote: "Joy does not simply happen to us. We have to choose joy and keep choosing it every day.", philosopher: "Henri Nouwen" },
    { quote: "The grand essentials to happiness in this life are something to do, something to love, and something to hope for.", philosopher: "Joseph Addison" },
    { quote: "Happiness is a warm puppy.", philosopher: "Charles M. Schulz" },
    { quote: "Now and then it's good to pause in our pursuit of happiness and just be happy.", philosopher: "Guillaume Apollinaire" },
    { quote: "Delight in the simple things.", philosopher: "Rudyard Kipling" },
    { quote: "The moments of happiness we enjoy take us by surprise. It is not that we seize them, but that they seize us.", philosopher: "Ashley Montagu" },
    { quote: "Joy is the simplest form of gratitude.", philosopher: "Karl Barth" },
    { quote: "Count your age by friends, not years. Count your life by smiles, not tears.", philosopher: "John Lennon" },
    { quote: "Happiness is a direction, not a place.", philosopher: "Sydney J. Harris" },
    { quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", philosopher: "Mother Teresa" },
    { quote: "Life is full of beauty. Notice it.", philosopher: "Ashley Smith" },
    { quote: "Happiness is not something you postpone for the future; it is something you design for the present.", philosopher: "Jim Rohn" },
    { quote: "The joy of life comes from our encounters with new experiences.", philosopher: "Christopher McCandless" },
    { quote: "Find ecstasy in life; the mere sense of living is joy enough.", philosopher: "Emily Dickinson" }
  ],
  sad: [
    { quote: "The wound is the place where the Light enters you.", philosopher: "Rumi" },
    { quote: "Even a happy life cannot be without a measure of darkness, and the word happy would lose its meaning if it were not balanced by sadness.", philosopher: "Carl Jung" },
    { quote: "The deeper that sorrow carves into your being, the more joy you can contain.", philosopher: "Kahlil Gibran" },
    { quote: "Tears are words the heart can't express.", philosopher: "Gerard Way" },
    { quote: "Every man has his secret sorrows which the world knows not; and often times we call a man cold when he is only sad.", philosopher: "Henry Wadsworth Longfellow" },
    { quote: "The soul would have no rainbow had the eyes no tears.", philosopher: "John Vance Cheney" },
    { quote: "Sadness flies away on the wings of time.", philosopher: "Jean de La Fontaine" },
    { quote: "Behind every sweet smile, there is a bitter sadness that no one can ever see and feel.", philosopher: "Tupac Shakur" },
    { quote: "Grief can be the garden of compassion. If you keep your heart open through everything, your pain can become your greatest ally in your life's search for love and wisdom.", philosopher: "Rumi" },
    { quote: "There is a sacredness in tears. They are not the mark of weakness, but of power.", philosopher: "Washington Irving" },
    { quote: "What brings us to tears, will lead us to grace.", philosopher: "Rumi" },
    { quote: "The good times of today are the sad thoughts of tomorrow.", philosopher: "Bob Marley" },
    { quote: "We must understand that sadness is an ocean, and sometimes we drown, while other days we are forced to swim.", philosopher: "R.M. Drake" },
    { quote: "Don't grieve. Anything you lose comes round in another form.", philosopher: "Rumi" },
    { quote: "Sadness is but a wall between two gardens.", philosopher: "Kahlil Gibran" },
    { quote: "Tears come from the heart and not from the brain.", philosopher: "Leonardo da Vinci" },
    { quote: "The way sadness works is one of the strange riddles of the world.", philosopher: "Lemony Snicket" },
    { quote: "Let your tears come. Let them water your soul.", philosopher: "Eileen Mayhew" },
    { quote: "Out of suffering have emerged the strongest souls; the most massive characters are seared with scars.", philosopher: "Kahlil Gibran" },
    { quote: "Sometimes you have to be your own hero and save your own little heart.", philosopher: "Unknown" },
    { quote: "You cannot protect yourself from sadness without protecting yourself from happiness.", philosopher: "Jonathan Safran Foer" },
    { quote: "When you do something noble and beautiful and nobody noticed, do not be sad. For the sun every morning is a beautiful spectacle and yet most of the audience still sleeps.", philosopher: "John Lennon" },
    { quote: "Noble deeds and hot baths are the best cures for depression.", philosopher: "Dodie Smith" },
    { quote: "Stars can't shine without darkness.", philosopher: "Unknown" },
    { quote: "Rain makes corn, corn makes whiskey, and whiskey makes my baby feel a little frisky.", philosopher: "Traditional Wisdom" },
    { quote: "Heavy hearts, like heavy clouds in the sky, are best relieved by the letting of a little water.", philosopher: "Christopher Morley" },
    { quote: "Sometimes when you're in a dark place you think you've been buried, but you've actually been planted.", philosopher: "Christine Caine" },
    { quote: "Sadness is also a kind of defense.", philosopher: "Ivo Andrić" },
    { quote: "The word 'happy' would lose its meaning if it were not balanced by sadness.", philosopher: "Carl Jung" },
    { quote: "This too shall pass.", philosopher: "Persian Proverb" }
  ],
  inspired: [
    { quote: "The meaning of life is to find your gift. The purpose of life is to give it away.", philosopher: "Pablo Picasso" },
    { quote: "What we think, we become.", philosopher: "Buddha" },
    { quote: "Be the change you wish to see in the world.", philosopher: "Mahatma Gandhi" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", philosopher: "Eleanor Roosevelt" },
    { quote: "Your time is limited, so don't waste it living someone else's life.", philosopher: "Steve Jobs" },
    { quote: "The only impossible journey is the one you never begin.", philosopher: "Tony Robbins" },
    { quote: "Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.", philosopher: "Johann Wolfgang von Goethe" },
    { quote: "The best time to plant a tree was 20 years ago. The second best time is now.", philosopher: "Chinese Proverb" },
    { quote: "Don't watch the clock; do what it does. Keep going.", philosopher: "Sam Levenson" },
    { quote: "Everything you can imagine is real.", philosopher: "Pablo Picasso" },
    { quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", philosopher: "Ralph Waldo Emerson" },
    { quote: "It is during our darkest moments that we must focus to see the light.", philosopher: "Aristotle" },
    { quote: "Act as if what you do makes a difference. It does.", philosopher: "William James" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", philosopher: "Winston Churchill" },
    { quote: "Believe you can and you're halfway there.", philosopher: "Theodore Roosevelt" },
    { quote: "The only way to do great work is to love what you do.", philosopher: "Steve Jobs" },
    { quote: "In the middle of difficulty lies opportunity.", philosopher: "Albert Einstein" },
    { quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", philosopher: "Zig Ziglar" },
    { quote: "Start where you are. Use what you have. Do what you can.", philosopher: "Arthur Ashe" },
    { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", philosopher: "Nelson Mandela" },
    { quote: "If you want to lift yourself up, lift up someone else.", philosopher: "Booker T. Washington" },
    { quote: "I have not failed. I've just found 10,000 ways that won't work.", philosopher: "Thomas Edison" },
    { quote: "A person who never made a mistake never tried anything new.", philosopher: "Albert Einstein" },
    { quote: "The only limit to our realization of tomorrow will be our doubts of today.", philosopher: "Franklin D. Roosevelt" },
    { quote: "Do what you can, with what you have, where you are.", philosopher: "Theodore Roosevelt" },
    { quote: "You are never too old to set another goal or to dream a new dream.", philosopher: "C.S. Lewis" },
    { quote: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.", philosopher: "Winston Churchill" },
    { quote: "Don't let yesterday take up too much of today.", philosopher: "Will Rogers" },
    { quote: "You learn more from failure than from success. Don't let it stop you. Failure builds character.", philosopher: "Unknown" },
    { quote: "It's not whether you get knocked down, it's whether you get up.", philosopher: "Vince Lombardi" }
  ],
  lost: [
    { quote: "Not all those who wander are lost.", philosopher: "J.R.R. Tolkien" },
    { quote: "Life can only be understood backwards; but it must be lived forwards.", philosopher: "Søren Kierkegaard" },
    { quote: "The journey of a thousand miles begins with a single step.", philosopher: "Lao Tzu" },
    { quote: "Only those who risk going too far can possibly find out how far they can go.", philosopher: "T.S. Eliot" },
    { quote: "Sometimes you have to get lost to find yourself.", philosopher: "Unknown" },
    { quote: "It's okay to feel lost. It means you're growing.", philosopher: "Unknown" },
    { quote: "The darkest nights produce the brightest stars.", philosopher: "Unknown" },
    { quote: "When you get to the end of your rope, tie a knot and hang on.", philosopher: "Franklin D. Roosevelt" },
    { quote: "Lost opportunities, lost possibilities, feelings we can never get back. That's part of what it means to be alive.", philosopher: "Haruki Murakami" },
    { quote: "You can't start the next chapter of your life if you keep re-reading the last one.", philosopher: "Unknown" },
    { quote: "Sometimes the wrong choices bring us to the right places.", philosopher: "Unknown" },
    { quote: "Getting lost was not a matter of geography so much as identity.", philosopher: "Pat Conroy" },
    { quote: "Just when the caterpillar thought the world was over, it became a butterfly.", philosopher: "Unknown" },
    { quote: "You are not a drop in the ocean. You are the entire ocean in a drop.", philosopher: "Rumi" },
    { quote: "When you're lost in the darkness, look for the light.", philosopher: "Unknown" },
    { quote: "Every journey begins with a single step, even if you don't know where you're going.", philosopher: "Unknown" },
    { quote: "The path isn't a straight line; it's a spiral. You continually come back to things you thought you understood and see deeper truths.", philosopher: "Barry H. Gillespie" },
    { quote: "Sometimes you need to step outside, get some air, and remind yourself of who you are and where you want to be.", philosopher: "Unknown" },
    { quote: "No matter how long you have traveled in the wrong direction, you can always turn around.", philosopher: "Unknown" },
    { quote: "Confusion is a luxury which only the very, very young can possibly afford.", philosopher: "E.E. Cummings" },
    { quote: "You'll never find a rainbow if you're looking down.", philosopher: "Charlie Chaplin" },
    { quote: "The only real mistake is the one from which we learn nothing.", philosopher: "Henry Ford" },
    { quote: "A ship is always safe at shore but that is not what it's built for.", philosopher: "Albert Einstein" },
    { quote: "Lost time is never found again.", philosopher: "Benjamin Franklin" },
    { quote: "You find yourself by losing yourself in service to others.", philosopher: "Mahatma Gandhi" },
    { quote: "Not until we are lost do we begin to understand ourselves.", philosopher: "Henry David Thoreau" },
    { quote: "When you're at the end of your rope, all you can do is make a knot and hang on.", philosopher: "Theodore Roosevelt" },
    { quote: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.", philosopher: "Alan Watts" },
    { quote: "Doubt is uncomfortable, certainty is ridiculous.", philosopher: "Voltaire" },
    { quote: "To lose patience is to lose the battle.", philosopher: "Mahatma Gandhi" }
  ],
  grateful: [
    { quote: "Gratitude turns what we have into enough.", philosopher: "Melody Beattie" },
    { quote: "When you arise in the morning, think of what a precious privilege it is to be alive - to breathe, to think, to enjoy, to love.", philosopher: "Marcus Aurelius" },
    { quote: "Acknowledging the good that you already have in your life is the foundation for all abundance.", philosopher: "Eckhart Tolle" },
    { quote: "Gratitude is not only the greatest of virtues but the parent of all others.", philosopher: "Cicero" },
    { quote: "Enjoy the little things, for one day you may look back and realize they were the big things.", philosopher: "Robert Brault" },
    { quote: "The struggle ends when gratitude begins.", philosopher: "Neale Donald Walsch" },
    { quote: "Gratitude makes sense of our past, brings peace for today, and creates a vision for tomorrow.", philosopher: "Melody Beattie" },
    { quote: "When I started counting my blessings, my whole life turned around.", philosopher: "Willie Nelson" },
    { quote: "Gratitude is the healthiest of all human emotions.", philosopher: "Zig Ziglar" },
    { quote: "Let us be grateful to the people who make us happy; they are the charming gardeners who make our souls blossom.", philosopher: "Marcel Proust" },
    { quote: "Gratitude is the fairest blossom which springs from the soul.", philosopher: "Henry Ward Beecher" },
    { quote: "The roots of all goodness lie in the soil of appreciation for goodness.", philosopher: "Dalai Lama" },
    { quote: "Piglet noticed that even though he had a Very Small Heart, it could hold a rather large amount of Gratitude.", philosopher: "A.A. Milne" },
    { quote: "Gratitude is the memory of the heart.", philosopher: "Jean Baptiste Massieu" },
    { quote: "As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them.", philosopher: "John F. Kennedy" },
    { quote: "In ordinary life, we hardly realize that we receive a great deal more than we give, and that it is only with gratitude that life becomes rich.", philosopher: "Dietrich Bonhoeffer" },
    { quote: "The thankful receiver bears a plentiful harvest.", philosopher: "William Blake" },
    { quote: "Gratitude unlocks the fullness of life.", philosopher: "Melody Beattie" },
    { quote: "Be thankful for what you have; you'll end up having more.", philosopher: "Oprah Winfrey" },
    { quote: "Gratitude is when memory is stored in the heart and not in the mind.", philosopher: "Lionel Hampton" },
    { quote: "Silent gratitude isn't very much use to anyone.", philosopher: "Gertrude Stein" },
    { quote: "I would maintain that thanks are the highest form of thought; and that gratitude is happiness doubled by wonder.", philosopher: "G.K. Chesterton" },
    { quote: "Feeling gratitude and not expressing it is like wrapping a present and not giving it.", philosopher: "William Arthur Ward" },
    { quote: "The more grateful I am, the more beauty I see.", philosopher: "Mary Davis" },
    { quote: "Wear gratitude like a cloak and it will feed every corner of your life.", philosopher: "Rumi" },
    { quote: "Gratitude is a powerful catalyst for happiness.", philosopher: "Amy Collette" },
    { quote: "None is more impoverished than the one who has no gratitude.", philosopher: "Unknown" },
    { quote: "When you practice gratefulness, there is a sense of respect toward others.", philosopher: "Dalai Lama" },
    { quote: "Gratitude is the sign of noble souls.", philosopher: "Aesop" },
    { quote: "Reflect upon your present blessings, of which every man has plenty.", philosopher: "Charles Dickens" }
  ],
  angry: [
    { quote: "Holding onto anger is like drinking poison and expecting the other person to die.", philosopher: "Buddha" },
    { quote: "The best fighter is never angry.", philosopher: "Lao Tzu" },
    { quote: "When anger rises, think of the consequences.", philosopher: "Confucius" },
    { quote: "For every minute you remain angry, you give up sixty seconds of peace of mind.", philosopher: "Ralph Waldo Emerson" },
    { quote: "Speak when you are angry and you will make the best speech you will ever regret.", philosopher: "Ambrose Bierce" },
    { quote: "Anger is an acid that can do more harm to the vessel in which it is stored than to anything on which it is poured.", philosopher: "Mark Twain" },
    { quote: "You will not be punished for your anger; you will be punished by your anger.", philosopher: "Buddha" },
    { quote: "Anybody can become angry — that is easy, but to be angry with the right person and to the right degree and at the right time and for the right purpose, and in the right way — that is not within everybody's power and is not easy.", philosopher: "Aristotle" },
    { quote: "The greatest remedy for anger is delay.", philosopher: "Seneca" },
    { quote: "Anger makes you smaller, while forgiveness forces you to grow beyond what you were.", philosopher: "Cherie Carter-Scott" },
    { quote: "Bitterness is like cancer. It eats upon the host. But anger is like fire. It burns it all clean.", philosopher: "Maya Angelou" },
    { quote: "Anger is a wind which blows out the lamp of the mind.", philosopher: "Robert Green Ingersoll" },
    { quote: "If you are patient in one moment of anger, you will escape a hundred days of sorrow.", philosopher: "Chinese Proverb" },
    { quote: "Getting angry doesn't solve anything.", philosopher: "Grace Poe" },
    { quote: "Where there is anger, there is always pain underneath.", philosopher: "Eckhart Tolle" },
    { quote: "In times of great stress or adversity, it's always best to keep busy, to plow your anger and your energy into something positive.", philosopher: "Lee Iacocca" },
    { quote: "Anger and intolerance are the enemies of correct understanding.", philosopher: "Mahatma Gandhi" },
    { quote: "He who angers you conquers you.", philosopher: "Elizabeth Kenny" },
    { quote: "Every time you get angry, you poison your own system.", philosopher: "Alfred A. Montapert" },
    { quote: "Anger is a brief madness.", philosopher: "Horace" },
    { quote: "The more anger towards the past you carry in your heart, the less capable you are of loving in the present.", philosopher: "Barbara De Angelis" },
    { quote: "Violence is the last refuge of the incompetent.", philosopher: "Isaac Asimov" },
    { quote: "Anger dwells only in the bosom of fools.", philosopher: "Albert Einstein" },
    { quote: "Never go to bed mad. Stay up and fight.", philosopher: "Phyllis Diller" },
    { quote: "Anger, if not restrained, is frequently more hurtful to us than the injury that provokes it.", philosopher: "Seneca" },
    { quote: "Whatever is begun in anger ends in shame.", philosopher: "Benjamin Franklin" },
    { quote: "When angry, count to ten before you speak. If very angry, count to one hundred.", philosopher: "Thomas Jefferson" },
    { quote: "A man who has never made a woman angry is a failure in life.", philosopher: "Christopher Morley" },
    { quote: "How much more grievous are the consequences of anger than the causes of it.", philosopher: "Marcus Aurelius" },
    { quote: "Keep your temper. Do not quarrel with an angry person, but give him a soft answer. It is commanded by the Holy Writ and, furthermore, it makes him madder than anything else you could say.", philosopher: "Will Rogers" }
  ]
   }
   
  const generateQuote = async () => {
    if (!selectedMood) {
      setError('Please select a mood first');
      return;
    }

    setLoading(true);
    setError('');
    setQuote('');
    setAuthor('');

    // Simulate API delay for better UX
    await new Promise(resolve => setTimeout(resolve, 800));

    try {
      const moodQuotes = quotes[selectedMood] || quotes.reflective;
      const randomQuote = moodQuotes[Math.floor(Math.random() * moodQuotes.length)];
      
      setQuote(randomQuote.quote);
      setAuthor(randomQuote.philosopher);
    } catch (err) {
      console.error('Error generating quote:', err);
      setError('Failed to generate quote. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const selectedMoodData = moods.find(m => m.value === selectedMood);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-purple-400 mr-2" />
            <h1 className="text-4xl font-bold text-white">Base Quotes</h1>
          </div>
          <p className="text-purple-200 text-lg">Find wisdom for your current state of mind</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
          <div className="mb-6">
            <label className="block text-white text-sm font-semibold mb-4">
              How are you feeling right now?
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {moods.map((mood) => (
                <button
                  key={mood.value}
                  onClick={() => setSelectedMood(mood.value)}
                  className={`p-4 rounded-xl transition-all duration-200 ${
                    selectedMood === mood.value
                      ? `bg-gradient-to-r ${mood.color} text-white shadow-lg scale-105`
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/20'
                  }`}
                >
                  <div className="text-2xl mb-1">{mood.emoji}</div>
                  <div className="text-sm font-medium">{mood.label}</div>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={generateQuote}
            disabled={loading || !selectedMood}
            className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-200 flex items-center justify-center ${
              selectedMood && !loading
                ? `bg-gradient-to-r ${selectedMoodData?.color} hover:shadow-lg hover:scale-105`
                : 'bg-gray-600 cursor-not-allowed'
            }`}
          >
            {loading ? (
              <>
                <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                Generating wisdom...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 mr-2" />
                Generate Quote
              </>
            )}
          </button>

          {error && (
            <div className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm">
              {error}
            </div>
          )}

          {quote && (
            <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/20 animate-fadeIn">
              <div className="text-3xl text-purple-300 mb-4">"</div>
              <p className="text-white text-xl leading-relaxed mb-4 italic">
                {quote}
              </p>
              <p className="text-purple-300 text-right font-medium">
                — {author}
              </p>
            </div>
          )}
        </div>

        <div className="text-center mt-6 text-purple-200 text-sm">
          <p>Select your mood and receive personalized wisdom</p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
