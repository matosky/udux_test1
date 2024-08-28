import "./sidebar.scss";
import homeIcon from "../../assets/home.svg";
import listen from "../../assets/listen.png";

const Sidebar = () => {
  const sidebarData = [
    {
      section: "GENERAL",
      links: [
        { name: "Home", href: "/", icon: homeIcon, isActive: true },
        { name: "Discover", href: "/discover", icon: homeIcon },
        { name: "Search", href: "/search", icon: homeIcon },
      ],
    },
    {
      section: "YOUR MUSIC",
      links: [
        { name: "Your Library", href: "/library", icon: homeIcon },
        { name: "Liked Songs", href: "/liked-songs", icon: homeIcon },
        { name: "Recently Played", href: "/recently-played", icon: homeIcon },
        { name: "Create Playlist", href: "/create-playlist", icon: homeIcon },
        { name: "History", href: "/history", icon: homeIcon },
        { name: "Share", href: "/share", icon: homeIcon },
      ],
    },
    {
      section: "YOUR PLAYLISTS",
      links: [
        { name: "African Heat", href: "/playlist/african-heat", icon: homeIcon },
        { name: "Riffs & Runs", href: "/playlist/riffs-runs", icon: homeIcon },
        { name: "Running out of Playlist...", href: "/playlist/running-out", icon: homeIcon },
        { name: "Gold Nights", href: "/playlist/gold-nights", icon: homeIcon },
        { name: "Saturday was a Good Day", href: "/playlist/saturday-good-day", icon: homeIcon },
      ],
    },
  ];

  return (
    <aside className="sidebar">
      {sidebarData.map((section, index) => (
        <div key={index} className="sidebar-section">
          <h3 className="sidebar-section-title">{section.section}</h3>
          <nav className="sidebar-nav">
            <ul>
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className={link.isActive ? "active" : ""}>
                    <img src={link.icon} alt={link.name} className="sidebar-icon" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ))}
      <div className="sidebar-promo">
        <img src={listen} alt="udux" />
      </div>
    </aside>
  );
};

export default Sidebar;
