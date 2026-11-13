
import { useEffect, useState } from "react";
import "../styles/profile.css";

const defaultProfile = {
  name: "Brian Gitonga",
  title: "Software Engineer",
  headline: "Building digital products, smart systems and meaningful experiences.",
  bio: "I'm a software engineer from Kenya passionate about building modern web applications, mobile apps and AI-powered solutions. I enjoy turning ideas into practical digital products.",
  email: "briangitonga3@gmail.com",
  phone: "",
  location: "Kenya",
  website: "https://gitong.com",
  profileImage: "/designer.png",
  resumeUrl: "",
  github: "",
  linkedin: "",
  facebook: "",
  instagram: "",
  availableForWork: true,
};

export default function Profile() {
  const [profile, setProfile] = useState(defaultProfile);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const storedProfile = localStorage.getItem("portfolioProfile");

    if (storedProfile) {
      try {
        setProfile({ ...defaultProfile, ...JSON.parse(storedProfile) });
      } catch {
        localStorage.removeItem("portfolioProfile");
      }
    }
  }, []);

  const updateField = (field, value) => {
    setProfile((current) => ({
      ...current,
      [field]: value,
    }));
    setSaved(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem("portfolioProfile", JSON.stringify(profile));
    setSaved(true);
  };

  return (
    <div className="admin-page profile-page">
      <div className="admin-page-header profile-header">
        <div>
          <span className="admin-eyebrow">PERSONAL SETTINGS</span>
          <h1>Profile</h1>
          <p>Manage the personal information displayed on your portfolio.</p>
        </div>

        <button className="profile-save-btn" onClick={handleSave}>
          Save Changes
        </button>
      </div>

      {saved && (
        <div className="profile-success">
          Your profile changes have been saved in this browser.
        </div>
      )}

      <form className="profile-layout" onSubmit={handleSave}>
        <div className="profile-main">
          <section className="profile-card">
            <div className="profile-card-heading">
              <div>
                <h2>Personal Information</h2>
                <p>Your name and professional introduction.</p>
              </div>
            </div>

            <div className="profile-image-section">
              <div className="profile-avatar">
                {profile.profileImage ? (
                  <img
                    src={profile.profileImage}
                    alt="Profile"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                ) : (
                  <span>{profile.name.charAt(0) || "B"}</span>
                )}
              </div>

              <div className="profile-image-fields">
                <label>Profile image URL</label>
                <input
                  type="text"
                  value={profile.profileImage}
                  onChange={(e) =>
                    updateField("profileImage", e.target.value)
                  }
                  placeholder="/profile.png or image URL"
                />
                <small>
                  Enter an image URL or a path to an image inside your public
                  folder.
                </small>
              </div>
            </div>

            <div className="profile-form-grid">
              <label>
                Full name
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  placeholder="Your full name"
                  required
                />
              </label>

              <label>
                Professional title
                <input
                  type="text"
                  value={profile.title}
                  onChange={(e) => updateField("title", e.target.value)}
                  placeholder="e.g. Full-stack Software Engineer"
                />
              </label>

              <label className="profile-full-width">
                Professional headline
                <input
                  type="text"
                  value={profile.headline}
                  onChange={(e) => updateField("headline", e.target.value)}
                  placeholder="A short statement about what you do"
                />
              </label>

              <label className="profile-full-width">
                Biography
                <textarea
                  rows="6"
                  value={profile.bio}
                  onChange={(e) => updateField("bio", e.target.value)}
                  placeholder="Tell visitors about yourself..."
                />
              </label>
            </div>
          </section>

          <section className="profile-card">
            <div className="profile-card-heading">
              <div>
                <h2>Contact Information</h2>
                <p>How potential clients and visitors can reach you.</p>
              </div>
            </div>

            <div className="profile-form-grid">
              <label>
                Email address
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="you@example.com"
                />
              </label>

              <label>
                Phone number
                <input
                  type="tel"
                  value={profile.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  placeholder="+254..."
                />
              </label>

              <label>
                Location
                <input
                  type="text"
                  value={profile.location}
                  onChange={(e) => updateField("location", e.target.value)}
                  placeholder="City, Country"
                />
              </label>

              <label>
                Portfolio website
                <input
                  type="url"
                  value={profile.website}
                  onChange={(e) => updateField("website", e.target.value)}
                  placeholder="https://example.com"
                />
              </label>
            </div>
          </section>

          <section className="profile-card">
            <div className="profile-card-heading">
              <div>
                <h2>Social Profiles</h2>
                <p>Add links to your professional and social accounts.</p>
              </div>
            </div>

            <div className="profile-form-grid">
              <label>
                GitHub
                <input
                  type="url"
                  value={profile.github}
                  onChange={(e) => updateField("github", e.target.value)}
                  placeholder="https://github.com/username"
                />
              </label>

              <label>
                LinkedIn
                <input
                  type="url"
                  value={profile.linkedin}
                  onChange={(e) => updateField("linkedin", e.target.value)}
                  placeholder="https://linkedin.com/in/username"
                />
              </label>

              <label>
                Facebook
                <input
                  type="url"
                  value={profile.facebook}
                  onChange={(e) => updateField("facebook", e.target.value)}
                  placeholder="https://facebook.com/username"
                />
              </label>

              <label>
                Instagram
                <input
                  type="url"
                  value={profile.instagram}
                  onChange={(e) => updateField("instagram", e.target.value)}
                  placeholder="https://instagram.com/username"
                />
              </label>
            </div>
          </section>

          <section className="profile-card">
            <div className="profile-card-heading">
              <div>
                <h2>Resume & Availability</h2>
                <p>Manage your CV and work availability status.</p>
              </div>
            </div>

            <div className="profile-form-grid">
              <label className="profile-full-width">
                Resume URL
                <input
                  type="url"
                  value={profile.resumeUrl}
                  onChange={(e) => updateField("resumeUrl", e.target.value)}
                  placeholder="Link to your downloadable CV"
                />
                <small>
                  You can add a hosted PDF link here. We'll add file uploads
                  later.
                </small>
              </label>

              <div className="profile-availability profile-full-width">
                <div>
                  <strong>Available for work</strong>
                  <p>Show visitors whether you're currently accepting projects.</p>
                </div>

                <label className="profile-switch">
                  <input
                    type="checkbox"
                    checked={profile.availableForWork}
                    onChange={(e) =>
                      updateField("availableForWork", e.target.checked)
                    }
                  />
                  <span />
                </label>
              </div>
            </div>
          </section>

          <div className="profile-bottom-actions">
            <button type="submit" className="profile-save-btn">
              Save Profile
            </button>
          </div>
        </div>

        <aside className="profile-preview-column">
          <div className="profile-preview-card">
            <span className="profile-preview-label">LIVE PREVIEW</span>

            <div className="profile-preview-avatar">
              {profile.profileImage ? (
                <img src={profile.profileImage} alt={profile.name} />
              ) : (
                <span>{profile.name.charAt(0) || "B"}</span>
              )}
            </div>

            <h3>{profile.name || "Your Name"}</h3>
            <span className="profile-preview-title">
              {profile.title || "Your Professional Title"}
            </span>

            <p>{profile.headline || "Your professional headline will appear here."}</p>

            <div className="profile-preview-location">
              {profile.location || "Your location"}
            </div>

            <div
              className={
                profile.availableForWork
                  ? "profile-preview-status is-available"
                  : "profile-preview-status is-unavailable"
              }
            >
              <span />
              {profile.availableForWork
                ? "Available for work"
                : "Not available"}
            </div>

            {profile.email && (
              <div className="profile-preview-email">{profile.email}</div>
            )}
          </div>

          <div className="profile-preview-note">
            <strong>Profile visibility</strong>
            <p>
              This preview shows your profile details. The public website will
              use these values after we connect the profile data to its pages.
            </p>
          </div>
        </aside>
      </form>
    </div>
  );
}
