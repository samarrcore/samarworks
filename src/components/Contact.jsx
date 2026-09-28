import React, { useState, useRef, useEffect } from "react";
import { sound } from "../utils/audio";
import { 
  FaEnvelope, 
  FaPhone, 
  FaLinkedin, 
  FaGithub, 
  FaMapMarkerAlt, 
  FaTerminal, 
  FaPaperPlane, 
  FaCopy, 
  FaCheck,
  FaExclamationCircle,
  FaCheckCircle
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const CONTACT_CHANNELS = [
  {
    icon: <FaEnvelope />,
    label: "EMAIL DIRECT",
    value: "samarpratapyes.01@gmail.com",
    actionType: "copy",
    copyText: "samarpratapyes.01@gmail.com",
    href: "mailto:samarpratapyes.01@gmail.com"
  },
  {
    icon: <FaPhone />,
    label: "VOICE / WHATSAPP",
    value: "+91 9798499241",
    actionType: "copy",
    copyText: "+919798499241",
    href: "tel:9798499241"
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "STATION LOCATION",
    value: "Tiruchirappalli, Tamil Nadu, India",
    actionType: "info"
  },
  {
    icon: <FaLinkedin />,
    label: "LINKEDIN NETWORK",
    value: "in/samar-singh-444bb927b",
    actionType: "link",
    href: "https://www.linkedin.com/in/samar-singh-444bb927b/"
  },
  {
    icon: <FaGithub />,
    label: "GITHUB CODEBASE",
    value: "github.com/samarrcore",
    actionType: "link",
    href: "https://github.com/samarrcore"
  }
];

const Contact = ({ onNavigate, prefillService }) => {
  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    message: prefillService ? `Inquiring about ${prefillService} service.\n\n` : ""
  });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedKey, setCopiedKey] = useState(null);
  const formRef = useRef();

  useEffect(() => {
    if (prefillService) {
      setForm(prev => ({
        ...prev,
        message: `Inquiring regarding: ${prefillService}\n\nProject outline:\n`
      }));
    }
  }, [prefillService]);

  const handleCopy = (text, key) => {
    sound.playEnter();
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleChange = (e) => {
    sound.playKey();
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.user_name.trim() || !form.user_email.trim() || !form.message.trim()) {
      sound.playError();
      setErrorMessage("Standard input error: All fields are required to dispatch packet.");
      return;
    }

    sound.playEnter();
    setSending(true);
    setErrorMessage("");

    // EmailJS configuration (preserved from original app)
    const serviceId = "default_service";
    const templateId = "template_rach02q";
    const publicKey = "mgLpbuGgBZyyG_NvE";

    emailjs
      .sendForm(serviceId, templateId, formRef.current, { publicKey })
      .then(
        () => {
          sound.playEnter();
          setSending(false);
          setSubmitted(true);
          setForm({ user_name: "", user_email: "", message: "" });
        },
        (err) => {
          sound.playError();
          console.error("EmailJS Error:", err);
          setSending(false);
          setErrorMessage(
            "Transmission failed. Please reach out directly to samarpratapyes.01@gmail.com"
          );
        }
      );
  };

  return (
    <div className="terminal-page sub-page contact-page">
      <div className="terminal-window">
        {/* Terminal Header */}
        <div className="terminal-window-header">
          <div className="window-dots">
            <span className="dot dot-close" onClick={() => onNavigate("home")}></span>
            <span className="dot dot-min"></span>
            <span className="dot dot-max"></span>
          </div>
          <div className="window-title">
            <FaTerminal className="title-icon" />
            samar@samarworks-os: ~/contact (sendmail --ssl)
          </div>
          <div className="window-status-tag">PORT: 587 (OPEN)</div>
        </div>

        {/* Content Body */}
        <div className="terminal-body">
          {/* CLI Prompt Line */}
          <div className="cli-prompt-line">
            <span className="prompt-user">samar@dev</span>
            <span className="prompt-sep">:</span>
            <span className="prompt-path">~/contact</span>
            <span className="prompt-char">$</span>
            <span className="prompt-text">cat /etc/vcard && ./dispatch_packet.sh</span>
          </div>

          <div className="contact-grid">
            {/* Left Column: Digital vCard */}
            <div className="vcard-terminal-card">
              <div className="card-header">
                <span className="card-tag">DIGITAL_VCARD</span>
                <span className="card-file">contact.json</span>
              </div>

              <div className="vcard-channels">
                {CONTACT_CHANNELS.map((ch, idx) => (
                  <div key={idx} className="channel-row">
                    <div className="channel-icon-col">{ch.icon}</div>
                    <div className="channel-data-col">
                      <div className="channel-label">{ch.label}</div>
                      <div className="channel-val">{ch.value}</div>
                    </div>
                    <div className="channel-action-col">
                      {ch.actionType === "copy" && (
                        <button
                          type="button"
                          onClick={() => handleCopy(ch.copyText, ch.label)}
                          className={`copy-btn ${copiedKey === ch.label ? "copied" : ""}`}
                          title="Copy to clipboard"
                        >
                          {copiedKey === ch.label ? (
                            <>
                              <FaCheck /> COPIED
                            </>
                          ) : (
                            <>
                              <FaCopy /> COPY
                            </>
                          )}
                        </button>
                      )}
                      {ch.actionType === "link" && (
                        <a
                          href={ch.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="visit-btn"
                          onClick={() => sound.playEnter()}
                        >
                          OPEN ↗
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="vcard-terminal-note">
                <span className="note-prompt">$ info --response-time</span>
                <p>
                  Typical response latency: &lt; 12 hours. Open for full-time roles, freelance contracts, and open-source ventures.
                </p>
              </div>
            </div>

            {/* Right Column: Dispatch Form */}
            <div className="dispatch-terminal-card">
              <div className="card-header">
                <span className="card-tag">TRANSMISSION_CONSOLE</span>
                <span className="card-file">sendmail.cli</span>
              </div>

              {submitted ? (
                <div className="transmission-success-box">
                  <FaCheckCircle className="success-icon" />
                  <h3>PACKET TRANSMITTED SUCCESSFULLY</h3>
                  <p>
                    Your message has been encoded and forwarded to Samar's primary inbox. You will receive a response shortly.
                  </p>
                  <button
                    onClick={() => {
                      sound.playEnter();
                      setSubmitted(false);
                    }}
                    className="cli-action-btn primary"
                  >
                    $ send-another-packet
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="transmission-form">
                  <div className="form-field">
                    <label className="field-label">
                      <span>SENDER_NAME</span>
                      <span className="flag">--name</span>
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      value={form.user_name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe / Organization"
                      className="terminal-text-input"
                      required
                      autoComplete="off"
                    />
                  </div>

                  <div className="form-field">
                    <label className="field-label">
                      <span>RETURN_EMAIL</span>
                      <span className="flag">--reply-to</span>
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      value={form.user_email}
                      onChange={handleChange}
                      placeholder="e.g. john@company.com"
                      className="terminal-text-input"
                      required
                      autoComplete="off"
                    />
                  </div>

                  <div className="form-field">
                    <label className="field-label">
                      <span>PAYLOAD_MESSAGE</span>
                      <span className="flag">--body</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Describe your project, role opportunity, or question..."
                      className="terminal-text-area"
                      required
                    ></textarea>
                  </div>

                  {errorMessage && (
                    <div className="form-error-alert">
                      <FaExclamationCircle /> {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className={`cli-action-btn primary submit-btn ${sending ? "sending" : ""}`}
                  >
                    {sending ? (
                      <>
                        <span className="spinner-dots">● ● ●</span> TRANSMITTING PACKET...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane /> $ dispatch --secure
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Quick Subpage Navigation */}
          <div className="subpage-nav-bar">
            <span className="nav-bar-label">PROCEED:</span>
            <div className="nav-bar-buttons">
              <button onClick={() => onNavigate("home")} className="nav-pill">
                $ cd ~/home
              </button>
              <button onClick={() => onNavigate("portfolio")} className="nav-pill">
                $ git log projects/
              </button>
              <button onClick={() => onNavigate("skills")} className="nav-pill">
                $ ls skills/
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
