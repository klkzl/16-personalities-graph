const types = [
  {
    name: 'Architect',
    shortcut: 'INTJ',
    percentage: 2,
    features: 'Intoverted Intuitive Thinking Judging',
    summary: 'Imaginative and strategic thinkers, with a plan for everything.',
    curiosity: 'Architects are the most likely personality type to say it was easy for them to do well in school.',
    famous: 'Elon Musk, Vladimir Putin, Michelle Obama, Friedrich Nietzsche'
  },
  {
    name: 'Logican',
    shortcut: 'INTP',
    percentage: 3,
    features: 'Intoverted Intuitive Thinking Prospecting',
    summary: 'Innovative inventors with an unquenchable thirst for knowledge.',
    curiosity: 'Logicians are the most likely personality type to consider being an astronomer.',
    famous: 'Bill Gates, Albert Einstein, Isaac Newton, Elen Page'
  },
  {
    name: 'Commander',
    shortcut: 'ENTJ',
    percentage: 3,
    features: 'Extraverted Intuitive Thinking Judging',
    summary: 'Imaginative and strong-willed leaders, always finding a way - or making one.',
    curiosity: 'Commanders are the most likely personality type to try to complete tasks long before they are due.',
    famous: 'Steve Jobs, Harrison Ford, Margaret Thatcher, Franklin D. Roosevelt'
  },
  {
    name: 'Debater',
    shortcut: 'ENTP',
    percentage: 3,
    features: 'Extraverted Intuitive Thinking Prospecting',
    summary: 'Smart and curious thinkers who cannot resist an intellectual challenge.',
    curiosity: 'Debaters are the most likely personality type to want to be famous.',
    famous: 'Mark Twain, Celine Dion, Thomas Edison, Tom Hanks'
  },
  {
    name: 'Advocate',
    shortcut: 'INFJ',
    percentage: 1.5,
    features: 'Intoverted Intuitive Feeling Judging',
    summary: 'Quiet and mystical, yet very inspiring and tireless idealists.',
    curiosity: 'Advocates are the most likely personality type to describe themselves as “people watchers”.',
    famous: 'Martin Luther King, Mother Teresa, Nelson Mandela, Nicole Kidman'
  },
  {
    name: 'Mediator',
    shortcut: 'INFP',
    percentage: 4.5,
    features: 'Intoverted Intuitive Feeling Prospecting',
    summary: 'Poetic, kind and altruistic people, always eager to help a good cause.',
    curiosity: 'Mediators are the least likely personality type to say they perform better under stress.',
    famous: 'J. R. R. Tolkien, Johnny Depp, William Shakespeare, Julia Roberts'
  },
  {
    name: 'Protagonist',
    shortcut: 'ENFJ',
    percentage: 2.5,
    features: 'Extraverted Intuitive Feeling Judging',
    summary: 'Charismatic and inspiring leaders, able to mesmerize their listeners.',
    curiosity: 'Protagonists are the most likely personality type to defend someone who is being bullied.',
    famous: 'Oprah Winfrey, Barack Obama, Sean Connery, Ben Affleck'
  },
  {
    name: 'Campaigner',
    shortcut: 'ENFP',
    percentage: 7,
    features: 'Extraverted Intuitive Feeling Prospecting',
    summary: 'Creative and sociable free spirits, who can always find a reason to smile.',
    curiosity: 'Campaigners are the most likely personality type to say that success is primarily determined by belief in yourself.',
    famous: 'Quentin Tarantino, Robert Downey Jr., Drew Barrymore, Robin Williams'
  },
  {
    name: 'Logistician',
    shortcut: 'ISTJ',
    percentage: 13,
    features: 'Intoverted Observant Thinking Judging',
    summary: 'Practical and fact-minded individuals, whose reliability cannot be doubted.',
    curiosity: 'Logisticians are the most likely personality type to say they are private individuals.',
    famous: 'Angela Merkel, Sting, George H. W. Bush, Anthony Hopkins'
  },
  {
    name: 'Defender',
    shortcut: 'ISFJ',
    percentage: 12.5,
    features: 'Intoverted Observant Feeling Judging',
    summary: 'Very dedicated and warm protectors, always ready to defend their loved ones.',
    curiosity: 'Defenders are the least likely personality type to enjoy gambling.',
    famous: 'Queen Elisabeth II, Beyonce, Vin Diesel, Kate Middleton'
  },
  {
    name: 'Executive',
    shortcut: 'ESTJ',
    percentage: 11.5,
    features: 'Extraverted Observant Thinking Judging',
    summary: 'Excellent administators, unsurpassed at managing things - or people.',
    curiosity: 'Executives are the most likely personality type to know what success means to them personally.',
    famous: 'John D. Rockefeller, Frank Sinatra, Sonia Sotomayor, James Monroe'
  },
  {
    name: 'Consul',
    shortcut: 'ESFJ',
    percentage: 12,
    features: 'Extraverted Observant Feeling Judging',
    summary: 'Extraordinarily caring, social and popular people, always eager to help.',
    curiosity: 'Consuls are the most likely personality type to believe most of their actions have a positive impact on other people’s lives.',
    famous: 'Jennifer Lopez, Bill Clinton, Taylor Swift, Steve Harvey'
  },
  {
    name: 'Virtuoso',
    shortcut: 'ISTP',
    percentage: 5,
    features: 'Intoverted Observant Thinking Prospecting',
    summary: 'Bold and practical experimenters, masters of all kind of tools.',
    curiosity: 'Virtuosos are the most likely personality type to avoid asking other people for help.',
    famous: 'Bear Grylls, Tom Cruise, Michael Jordan, Daniel Craig'
  },
  {
    name: 'Adventurer',
    shortcut: 'ISFP',
    percentage: 8,
    features: 'Intoverted Observant Feeling Prospecting',
    summary: 'Flexible and charming artists, always ready to explore and experience something new.',
    curiosity: 'Adventurers are the personality type most likely to be productive late in the evening.',
    famous: 'Britney Spears, Michael Jackson, Lana Del Rey, Kevin Costner'
  },
  {
    name: 'Entrepreneur',
    shortcut: 'ESTP',
    percentage: 4,
    features: 'Extaverted Observant Thinking Prospecting',
    summary: 'Smart, energetic and very perceptive people, who truly enjoy living on the edge.',
    curiosity: 'Entrepreneurs are the most likely personality type to know how to build and start a fire.',
    famous: 'Ernest Hemingway, Madonna, Jack Nicholson, Eddie Murphy'
  },
  {
    name: 'Entertainer',
    shortcut: 'ESFP',
    percentage: 7.5,
    features: 'Extaverted Observant Feeling Prospecting',
    summary: 'Spontaneous, energetic and enthusiastic people - life is never boring around them.',
    curiosity: 'Entertainers are the most likely personality type to say they are good at cheering people up.',
    famous: 'Adele, Marilyn Monroe, Jamie Oliver, Jamie Foxx'
  }
];

export default types;