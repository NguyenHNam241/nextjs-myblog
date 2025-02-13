interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Medieval Mayhem Arrives With ‘Kingdom Come: Deliverance II’ on GeForce NOW',
    description: `It’s part of seven games coming to the cloud this week, kicking off GeForce NOW’s fifth anniversary.`,
    imgSrc: '/static/images/Kingdom-Come.jpg',
    href: 'https://blogs.nvidia.com/blog/geforce-now-thursday-kingdom-come-deliverance-2/',
  },
  {
    title: 'The Time Machine',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
