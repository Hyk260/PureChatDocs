function createLinks(tm) {
  tm.links = [{ icon: "github", link: `https://github.com/${tm.github}` }];
  if (tm.webtools) {
    tm.links.push({
      icon: "mastodon",
      link: `https://elk.zone/m.webtoo.ls/@${tm.webtools}`,
    });
  }
  if (tm.youtube) {
    tm.links.push({
      icon: "youtube",
      link: `https://www.youtube.com/@${tm.youtube}`,
    });
  }
  if (tm.discord) tm.links.push({ icon: "discord", link: tm.discord });
  // tm.links.push({ icon: "twitter", link: `https://twitter.com/${tm.twitter}` });
  return tm;
}

const plainTeamMembers = [
  {
    avatar: "./Hyk260.png",
    name: "yongkang",
    github: "Hyk260",
    // twitter: "",
    sponsor: "https://github.com/sponsors/Hyk260",
    title: "",
    org: "",
    desc: "Hello",
  },
];

export const teamMembers = plainTeamMembers.map((tm) => createLinks(tm));