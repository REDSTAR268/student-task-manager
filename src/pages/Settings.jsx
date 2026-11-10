function Settings({ theme, setTheme }) {
  function handleThemeChange(event) {
    setTheme(event.target.value);
  }

  return (
    <div className="settings-page">

      {/* Page Header */}
      <div className="settings-header">
        <h2>Settings</h2>
        <p>Customize your Student Task Manager.</p>
      </div>

      {/* Appearance Settings */}
      <section className="settings-section">

        <h2>Appearance</h2>

        <p>Choose your preferred application theme.</p>

        <div className="theme-options">

          <label>
            <input
              type="radio"
              name="theme"
              value="light"
              checked={theme === "light"}
              onChange={handleThemeChange}
            />
            Light Mode ☀️
          </label>

          <label>
            <input
              type="radio"
              name="theme"
              value="dark"
              checked={theme === "dark"}
              onChange={handleThemeChange}
            />
            Dark Mode 🌙
          </label>

        </div>

        <p className="current-theme">
          Current theme: <strong>{theme}</strong>
        </p>

      </section>

      {/* Application Information */}
      <section className="settings-section">

        <h2>About Application</h2>

        <p>
          Student Task Manager helps students manage tasks, and track progress.
        </p>

        <p>Version: 1.0.0</p>

      </section>

    </div>
  );
}

export default Settings;