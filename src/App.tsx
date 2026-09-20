import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Command,
  Download,
  Mic,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import "./App.css";

const DOWNLOAD_URL =
  "https://github.com/labhadeom623-sketch/aether-website/releases/latest/download/Aether_1.0.0_x64-setup.exe";

const features = [
  {
    icon: Mic,
    title: "Talk naturally",
    text: "Speak to Aether like you're talking to a real assistant.",
  },
  {
    icon: Zap,
    title: "Acts instantly",
    text: "Open apps, search, navigate and trigger everyday actions fast.",
  },
  {
    icon: Shield,
    title: "Privacy first",
    text: "Designed around local-first interaction and control.",
  },
  {
    icon: Sparkles,
    title: "Always ready",
    text: "Use the command panel or voice to get things done without friction.",
  },
];

const tasks = [
  "Open Chrome",
  "Search YouTube",
  "Create a note",
  "Set a timer",
  "Open Downloads",
];

function App() {
  return (
    <div className="app-shell">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-inner">
          <a className="brand" href="#">
            <div className="brand-mark">
              <Sparkles size={18} strokeWidth={2.4} />
            </div>
            <span>Aether</span>
          </a>

          <nav className="nav-links">
            <a href="#features">Features</a>
            <a href="#experience">Experience</a>
            <a href="#download">Download</a>
          </nav>

          <a className="nav-download" href="#download">
            Get Aether
            <ArrowRight size={15} />
          </a>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section className="hero">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="hero-content">
            <motion.div
              className="eyebrow"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="eyebrow-dot" />
              A local personal assistant for Windows
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
            >
              Your computer.
              <br />
              <span>Your command.</span>
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16 }}
            >
              Aether turns natural language into action.
              <br />
              Talk, command, and get things done.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24 }}
            >
              <a
                className="primary-button"
                href={DOWNLOAD_URL}
              >
                <Download size={18} />
                Download for Windows
                <ArrowRight size={16} />
              </a>

              <a className="secondary-button" href="#experience">
                See how it works
              </a>
            </motion.div>

            <motion.div
              className="hero-meta"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              <span>
                <Check size={14} />
                Windows 10 / 11
              </span>
              <span>
                <Check size={14} />
                Free to use
              </span>
              <span>
                <Check size={14} />
                Version 1.0.0
              </span>
            </motion.div>
          </div>

          {/* ORB */}
          <motion.div
            className="orb-stage"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.25 }}
          >
            <div className="orb-ring ring-one" />
            <div className="orb-ring ring-two" />
            <div className="orb-ring ring-three" />

            <motion.div
              className="orb"
              animate={{
                scale: [1, 1.035, 1],
                boxShadow: [
                  "0 0 50px rgba(64, 146, 255, 0.22)",
                  "0 0 90px rgba(64, 146, 255, 0.42)",
                  "0 0 50px rgba(64, 146, 255, 0.22)",
                ],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="orb-core">
                <Sparkles size={34} strokeWidth={1.6} />
              </div>
            </motion.div>

            <div className="orb-label">
              <span className="status-dot" />
              Aether is ready
            </div>
          </motion.div>
        </section>

        {/* COMMAND DEMO */}
        <section className="command-section" id="experience">
          <div className="section-heading">
            <span className="section-kicker">THE COMMAND LAYER</span>
            <h2>
              Just say what
              <br />
              you want done.
            </h2>
            <p>
              No complicated menus. No hunting through settings.
              <br />
              Aether understands simple commands and turns them into actions.
            </p>
          </div>

          <motion.div
            className="command-window"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="window-top">
              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>

              <div className="window-title">
                <Command size={14} />
                Aether Command
              </div>

              <div className="window-shortcut">ALT + SPACE</div>
            </div>

            <div className="command-body">
              <div className="command-status">
                <div className="listening-icon">
                  <Mic size={20} />
                </div>

                <div>
                  <span className="command-status-label">Listening</span>
                  <span className="command-status-sub">
                    Aether is ready for your command
                  </span>
                </div>
              </div>

              <div className="command-input">
                <span className="command-cursor" />
                Open Chrome and search YouTube for Hanuman Chalisa
              </div>

              <div className="command-result">
                <div className="result-icon">
                  <Check size={16} />
                </div>

                <div>
                  <strong>Command understood</strong>
                  <span>
                    Opening Chrome and starting your search...
                  </span>
                </div>

                <span className="result-time">0.8s</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* FEATURES */}
        <section className="features-section" id="features">
          <div className="section-heading centered">
            <span className="section-kicker">BUILT FOR REAL LIFE</span>
            <h2>
              Less clicking.
              <br />
              More doing.
            </h2>
          </div>

          <div className="feature-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  className="feature-card"
                  key={feature.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                >
                  <div className="feature-icon">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* TASKS */}
        <section className="tasks-section">
          <div className="tasks-layout">
            <div className="tasks-copy">
              <span className="section-kicker">EVERYDAY ACTIONS</span>

              <h2>
                Your words become
                <br />
                actions.
              </h2>

              <p>
                Aether is made for those small computer tasks that shouldn't
                require five clicks and three different windows.
              </p>

              <div className="task-list">
                {tasks.map((task, index) => (
                  <motion.div
                    className="task-row"
                    key={task}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                    }}
                  >
                    <div className="task-check">
                      <Check size={14} />
                    </div>
                    <span>{task}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="task-visual">
              <div className="visual-glow" />

              <div className="mini-assistant">
                <div className="mini-header">
                  <div className="mini-brand">
                    <div className="mini-logo">
                      <Sparkles size={14} />
                    </div>
                    Aether
                  </div>

                  <span className="mini-online">
                    <span />
                    Online
                  </span>
                </div>

                <div className="mini-message assistant-message">
                  What can I do for you?
                </div>

                <div className="mini-message user-message">
                  Open my Downloads folder.
                </div>

                <div className="mini-message assistant-message">
                  <Check size={14} />
                  Opening Downloads...
                </div>

                <div className="mini-bar">
                  <span>Ready for another command</span>
                  <Mic size={15} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DOWNLOAD */}
        <section className="download-section" id="download">
          <div className="download-card">
            <div className="download-glow" />

            <div className="download-content">
              <div className="download-icon">
                <Sparkles size={25} />
              </div>

              <span className="section-kicker">READY WHEN YOU ARE</span>

              <h2>
                Meet Aether.
                <br />
                <span>Your new command layer.</span>
              </h2>

              <p>
                Download Aether for Windows and make your computer feel a
                little more like yours.
              </p>

              <a
                className="primary-button download-button"
                href={DOWNLOAD_URL}
              >
                <Download size={18} />
                Download Aether
                <ArrowRight size={16} />
              </a>

              <span className="download-note">
                Windows installer · Version 1.0.0 · Free
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-brand-mark">
                <Sparkles size={17} />
              </div>

              <div>
                <strong>Aether</strong>
                <span>Your computer. Your command.</span>
              </div>
            </div>

            <div className="footer-built">
              <span>Built with intention</span>
              <strong>Designed & developed by Om Labhade</strong>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 Aether</span>
            <span>Made in India</span>
            <span>Version 1.0.0</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;