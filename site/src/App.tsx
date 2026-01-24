// src/App.tsx
import { useEffect, useMemo, useState } from "react";

type ModuleKey =
  | "registry"
  | "maintenance"
  | "pm"
  | "inventory"
  | "telemetry"
  | "compliance";

const modules: Record<
  ModuleKey,
  {
    title: string;
    desc: string;
    bullets: string[];
    image?: string;
  }
> = {
  registry: {
    title: "Asset Registry",
    desc: "Single source of truth for assets, types, locations, status, and lifecycle history.",
    bullets: [
      "Asset tag, serial, type, station/location, ownership",
      "Lifecycle events & history timeline",
      "Master data governance (types, stations, vendors)",
    ],
    image: "/og-image1.png",
  },
  maintenance: {
    title: "Maintenance Engine",
    desc: "Work orders with assignment, status control, evidence capture, and audit trail.",
    bullets: [
      "Work orders with structured steps & outcomes",
      "Assignments, approvals, and status transitions",
      "Evidence capture: notes, photos, readings, sign-off",
    ],
    image: "/og-image.png",
  },
  pm: {
    title: "PM Schedules",
    desc: "Recurring preventive maintenance driven by intervals, usage, and policy.",
    bullets: [
      "Recurring PM plans and auto-generated schedule",
      "Overdue tracking and escalation readiness",
      "History of execution for audits and reliability",
    ],
    image: "/og-image1.png",
  },
  inventory: {
    title: "Parts & Inventory",
    desc: "Optional parts tracking tied to work orders for cost and traceability.",
    bullets: [
      "Parts catalog & stock levels (optional)",
      "Link consumption to work orders",
      "Better cost attribution and re-order planning",
    ],
    image: "/og-image.png",
  },
  telemetry: {
    title: "Telemetry & Alerts",
    desc: "IoT-ready hooks for meters, usage-based maintenance, and operational alerts.",
    bullets: [
      "Usage/meter signals and threshold alerts",
      "Fault/abnormal behavior detection (roadmap-ready)",
      "Analytics and dashboards (Power BI / embedded)",
    ],
    image: "/og-image1.png",
  },
  compliance: {
    title: "Audit & ISO-ready Controls",
    desc: "Enterprise controls for accountability, compliance, and security.",
    bullets: [
      "RBAC (roles & permissions) and tenant isolation",
      "Audit logs: who changed what and when",
      "ISO-ready workflow patterns and evidence capture",
    ],
    image: "/og-image.png",
  },
};

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function App() {
  const year = useMemo(() => new Date().getFullYear(), []);
  const [active, setActive] = useState<ModuleKey>("registry");
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVideoOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const m = modules[active];

  return (
    <div className="page">
      {/* Topbar */}
      <div className="topbar">
        <div className="wrap">
          <div className="nav">
            <a className="brand" href="#top" aria-label="AssetOps Home">
              <img className="brandWordOnly" src="/AssetOps2.png" alt="AssetOps" />
            </a>

            <div className="links" aria-label="Primary navigation">
              <button className="link" onClick={() => scrollToId("modules")}>
                Modules
              </button>
              <button className="link" onClick={() => scrollToId("industries")}>
                Industries
              </button>
              <button className="link" onClick={() => scrollToId("usecases")}>
                Use Cases
              </button>
              <button className="link" onClick={() => scrollToId("security")}>
                Security
              </button>
              <button className="link" onClick={() => scrollToId("contact")}>
                Contact
              </button>
            </div>

            <div className="navCta">
              <button className="btn ghost" onClick={() => scrollToId("contact")}>
                Talk to us
              </button>
              <button className="btn primary" onClick={() => scrollToId("contact")}>
                Request a demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div id="top" className="hero">
        <div className="wrap">
          <div className="heroGrid">
            <div>
              <div className="kicker">
                <span className="kDot" aria-hidden="true"></span>
                <span>
                  <b>Enterprise-ready</b> for GSE, Trucking fleets, and Aviation MRO
                </span>
              </div>

              <h1 className="h1">Run your assets like an airline runs operations.</h1>

              <p className="sub">
                AssetOps is a modern <b>asset registry + maintenance engine</b> designed for uptime.
                Plan preventive maintenance, execute work orders, capture evidence, and scale securely
                across locations with <b>tenant isolation</b> and <b>audit-ready controls</b>.
              </p>

              <div className="heroCtas">
                <button className="btn primary" onClick={() => scrollToId("contact")}>
                  Request a demo
                </button>
                <button className="btn" onClick={() => scrollToId("modules")}>
                  Explore modules
                </button>
                <button className="btn" onClick={() => setVideoOpen(true)}>
                  ▶ Watch overview
                </button>
              </div>

              <div className="trustLine" aria-label="Trust line">
                Built on <b>Azure</b> • <b>Multi-tenant</b> ready • <b>Audit-ready</b> workflows
              </div>

              <div className="proof" aria-label="Proof points">
                <div className="chip">✅ RBAC + tenant isolation</div>
                <div className="chip">✅ Audit logs & ISO-ready workflows</div>
                <div className="chip">✅ Azure-first deployment</div>
                <div className="chip">✅ Maintenance-first data model</div>
              </div>
            </div>

            <div className="heroPanel" aria-label="Hero highlights">
              <div className="panelTop">
                <div>
                  <div className="panelTitle">What you get from day one</div>
                  <div className="panelSub">
                    Start with Registry → add Maintenance → expand to PM & analytics
                  </div>
                </div>
                <div className="badge">Operations-grade</div>
              </div>

              {/* ✅ Replace big placeholder image with a KPI preview panel (looks “full” immediately) */}
              <div className="heroMedia" aria-label="Product preview">
                <div className="preview">
                  <div className="previewRow">
                    <div className="previewKpi">
                      <div className="k">Assets</div>
                      <div className="v">1,248</div>
                      <div className="s">Across 7 stations</div>
                    </div>
                    <div className="previewKpi">
                      <div className="k">Open WOs</div>
                      <div className="v">23</div>
                      <div className="s">5 high priority</div>
                    </div>
                    <div className="previewKpi">
                      <div className="k">PM Due</div>
                      <div className="v">41</div>
                      <div className="s">Next 14 days</div>
                    </div>
                  </div>

                  <div className="previewList">
                    <div className="previewItem">
                      <span className="dot ok" />
                      <div>
                        <b>TRUCK-003</b> • PM scheduled
                        <div className="muted">Due: Feb 02 • Station: YYZ</div>
                      </div>
                    </div>
                    <div className="previewItem">
                      <span className="dot warn" />
                      <div>
                        <b>GPU-118</b> • Work order assigned
                        <div className="muted">Priority: High • Evidence required</div>
                      </div>
                    </div>
                    <div className="previewItem">
                      <span className="dot info" />
                      <div>
                        <b>BELT-021</b> • Status change logged
                        <div className="muted">Audit trail updated • User: Supervisor</div>
                      </div>
                    </div>
                  </div>

                  <div className="heroImgCaption">
                    <span className="capDot" aria-hidden="true"></span>
                    <span>Example dashboard preview (replace with real screenshot later)</span>
                  </div>
                </div>
              </div>

              <div className="panelCards">
                <div className="miniCard">
                  <div className="miniIcon">📌</div>
                  <div>
                    <div className="miniTitle">Single source of truth</div>
                    <div className="miniText">
                      Assets, types, status, location, and history in one place.
                    </div>
                  </div>
                </div>
                <div className="miniCard">
                  <div className="miniIcon">🛠️</div>
                  <div>
                    <div className="miniTitle">Maintenance engine</div>
                    <div className="miniText">Plans → PM → work orders → events → audit trail.</div>
                  </div>
                </div>
                <div className="miniCard">
                  <div className="miniIcon">🔒</div>
                  <div>
                    <div className="miniTitle">Enterprise controls</div>
                    <div className="miniText">
                      RBAC, tenant boundaries, and compliance-friendly logging.
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 style={{ margin: "0 0 6px" }}>Ideal for</h3>
                <p>Ground Support Equipment • Fleet operations • MRO shops • Multi-site asset owners</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Proof strip */}
      <div className="strip">
        <div className="wrap">
          <div className="grid3">
            <div className="card">
              <div className="icon">⚡</div>
              <h3>Reduce downtime</h3>
              <p>Shift from reactive breakdowns to planned maintenance with accountable execution.</p>
            </div>
            <div className="card">
              <div className="icon">📊</div>
              <h3>Operational visibility</h3>
              <p>Track asset status, utilization and maintenance history across locations with confidence.</p>
            </div>
            <div className="card">
              <div className="icon">✅</div>
              <h3>Audit-ready compliance</h3>
              <p>ISO-ready patterns: change tracking, audit logs, controlled access and evidence capture.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Industries */}
      <div id="industries" className="section anchor">
        <div className="wrap">
          <div className="head">
            <div>
              <h2>Who it’s for</h2>
              <p>Teams that need uptime, control, and compliance — without spreadsheets and manual follow-ups.</p>
            </div>
          </div>

          <div className="grid3">
            <div className="card">
              <div className="icon">🧰</div>
              <h3>GSE Operations</h3>
              <p>
                Reduce out-of-service equipment with station-level readiness, standardized inspections,
                and accountable repairs.
              </p>
            </div>
            <div className="card">
              <div className="icon">🚚</div>
              <h3>Fleet & Trucking</h3>
              <p>
                Stay ahead of service cycles with preventive schedules, faster repair turnaround, and
                consistent execution across terminals.
              </p>
            </div>
            <div className="card">
              <div className="icon">✈️</div>
              <h3>Aviation MRO</h3>
              <p>
                Track tooling and ground assets with audit-ready actions, approvals, evidence capture,
                and controlled access.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modules (interactive tabs) */}
      <div id="modules" className="section anchor">
        <div className="wrap">
          <div className="head">
            <div>
              <h2>Core modules</h2>
              <p>Adopt in phases — start with Asset Registry and scale into Maintenance, PM, Inventory and Insights.</p>
            </div>
          </div>

        <div className="tabs" role="tablist" aria-label="Modules">
          {(
            [
              ["registry", "Asset Registry"],
              ["maintenance", "Maintenance"],
              ["pm", "PM Schedules"],
              ["inventory", "Inventory"],
              ["telemetry", "Telemetry"],
              ["compliance", "Audit/ISO"],
            ] as Array<[ModuleKey, string]>
          ).map(([key, label]) => (
            <button
              key={key}
              className={cx("tab", active === key && "tabActive")}
              onClick={() => setActive(key)}
              role="tab"
              aria-selected={active === key}
            >
              {label}
            </button>
          ))}
        </div>

          <div className="modulePanel">
            <div className="moduleText">
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
              <ul>
                {m.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="moduleActions">
                <button className="btn primary" onClick={() => scrollToId("contact")}>
                  Request a demo
                </button>
                <button className="btn" onClick={() => setVideoOpen(true)}>
                  ▶ See it in action
                </button>
              </div>
            </div>

            <div className="moduleArt" aria-label="Module visual">
              <img className="moduleImg" src={m.image || "/og-image1.png"} alt={`${m.title} visual`} />
            </div>
          </div>
        </div>
      </div>

      {/* Use cases */}
      <div id="usecases" className="section anchor">
        <div className="wrap">
          <div className="head">
            <div>
              <h2>Use cases that drive ROI</h2>
              <p>Repeatable flows that turn operational chaos into predictable execution.</p>
            </div>
          </div>

          <div className="grid2">
            <div className="panel">
              <div className="panelInner">
                <h3>From breakdowns → planned maintenance</h3>
                <div className="steps">
                  <div className="step">
                    <div className="n">STEP 1</div>
                    <b>Standardize asset records</b>
                    <span>Clean master data: tag, type, location, status, history.</span>
                  </div>
                  <div className="step">
                    <div className="n">STEP 2</div>
                    <b>Build preventive plans</b>
                    <span>Create PM rules aligned to equipment cycles and policy.</span>
                  </div>
                  <div className="step">
                    <div className="n">STEP 3</div>
                    <b>Execute with work orders</b>
                    <span>Assign, track, log actions, and keep an audit-ready trail.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="panel">
              <div className="panelInner">
                <h3>Multi-site control with security</h3>
                <div className="steps">
                  <div className="step">
                    <div className="n">STEP 1</div>
                    <b>Tenant boundaries</b>
                    <span>Keep customers/sites isolated with controlled access patterns.</span>
                  </div>
                  <div className="step">
                    <div className="n">STEP 2</div>
                    <b>Role-based permissions</b>
                    <span>Operators, managers, admins — each sees only what they should.</span>
                  </div>
                  <div className="step">
                    <div className="n">STEP 3</div>
                    <b>Audit visibility</b>
                    <span>Track who changed what and when, with defensible logs.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security */}
      <div id="security" className="section anchor">
        <div className="wrap">
          <div className="head">
            <div>
              <h2>Trust, security & compliance</h2>
              <p>Enterprise controls: RBAC, tenant isolation, audit logs, and Azure-first deployment.</p>
            </div>
          </div>

          <div className="grid3">
            <div className="card">
              <div className="icon">🔐</div>
              <h3>RBAC</h3>
              <p>Role-based permissions to control who can view, edit, approve, and administer.</p>
            </div>
            <div className="card">
              <div className="icon">🧱</div>
              <h3>Tenant isolation</h3>
              <p>Designed for multi-tenant operations with secure customer separation patterns.</p>
            </div>
            <div className="card">
              <div className="icon">🧾</div>
              <h3>Audit logs</h3>
              <p>Accountability: track changes, actions, and status transitions reliably.</p>
            </div>
            <div className="card">
              <div className="icon">☁️</div>
              <h3>Azure-first</h3>
              <p>Built for modern deployment with Azure hosting and scalable data services.</p>
            </div>
            <div className="card">
              <div className="icon">📘</div>
              <h3>ISO-ready patterns</h3>
              <p>Structured workflows and logging aligned to common ISO control expectations.</p>
            </div>
            <div className="card">
              <div className="icon">🧠</div>
              <h3>AI-ready foundation</h3>
              <p>Clean data model for predictive maintenance, anomaly detection, and planning optimization.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="section anchor">
        <div className="wrap">
          <div className="cta">
            <div>
              <h2>See AssetOps in action</h2>
              <p>
                Tell us your fleet size, locations, and maintenance process. We’ll respond with a
                recommended rollout plan and a demo walkthrough.
              </p>

              <div className="proof" style={{ marginTop: 10 }}>
                <div className="chip">⏱️ Fast onboarding</div>
                <div className="chip">🧩 Adopt in phases</div>
                <div className="chip">🔒 Enterprise controls</div>
              </div>

              <div className="ctaBtns">
                <button className="btn primary" onClick={() => setVideoOpen(true)}>
                  ▶ Watch overview
                </button>

                <a
                  className="btn"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Calendly placeholder. Replace this with your Calendly URL when ready.");
                  }}
                >
                  Book a call (Calendly)
                </a>

                <a
                  className="btn"
                  href="mailto:sales@assetops.ca?subject=AssetOps%20Demo%20Request&body=Hi%20AssetOps%20team,%0D%0A%0D%0AI%E2%80%99d%20like%20a%20demo.%20Here%E2%80%99s%20our%20context:%0D%0A-%20Industry:%0D%0A-%20%23%20of%20assets:%0D%0A-%20Locations:%0D%0A-%20Current%20system:%0D%0A-%20Top%203%20pain%20points:%0D%0A%0D%0AThanks!"
                >
                  Email sales@assetops.ca
                </a>
              </div>

              <div className="fine" style={{ marginTop: 10 }}>
                Prefer email? Write to{" "}
                <a className="inlineLink" href="mailto:support@assetops.ca">
                  support@assetops.ca
                </a>
                .
              </div>
            </div>

            <div className="formPanel">
              <div className="formTitle">Quick inquiry</div>
              <form
                className="form"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget as HTMLFormElement;
                  const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
                  const company = (form.elements.namedItem("company") as HTMLInputElement).value.trim();
                  const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
                  const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

                  const subject = encodeURIComponent("AssetOps Demo Request - " + (company || name || "Website"));
                  const body = encodeURIComponent(`Name: ${name}\nCompany: ${company}\nEmail: ${email}\n\n${message}`);

                  window.location.href = `mailto:sales@assetops.ca?subject=${subject}&body=${body}`;
                }}
              >
                <label className="field">
                  <span>Name</span>
                  <input name="name" placeholder="Your name" required />
                </label>

                <label className="field">
                  <span>Company / Location</span>
                  <input name="company" placeholder="Company / station" />
                </label>

                <label className="field">
                  <span>Email</span>
                  <input name="email" type="email" placeholder="you@company.com" required />
                </label>

                <label className="field">
                  <span>Message</span>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us your asset types, fleet size, locations, and goals (downtime, compliance, visibility)..."
                    required
                  />
                </label>

                <button className="btn primary" type="submit">
                  Send
                </button>

                <div className="fine">This opens your email client (mailto). We can add a real backend form later.</div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="wrap">
          <div className="foot">
            <div>© {year} AssetOps.ca</div>
            <div className="footLinks">
              <button className="link" onClick={() => scrollToId("security")}>
                Security
              </button>
              <button className="link" onClick={() => scrollToId("modules")}>
                Modules
              </button>
              <button className="link" onClick={() => scrollToId("contact")}>
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video modal (MP4) */}
      {videoOpen && (
        <div className="modalBackdrop" role="dialog" aria-modal="true" aria-label="Product overview video">
          <button className="modalBackdropClick" onClick={() => setVideoOpen(false)} aria-label="Close video" />
          <div className="modal">
            <div className="modalBar">
              <div className="modalTitle">AssetOps — Product Overview</div>
              <button className="modalClose" onClick={() => setVideoOpen(false)}>
                Close
              </button>
            </div>

            <div className="videoBox">
              <video className="videoPlayer" controls autoPlay playsInline preload="metadata">
                <source src="/videos/assetops-overview.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className="muted" style={{ marginTop: 10 }}>
                If the video doesn’t load, confirm the file exists at{" "}
                <code>/public/videos/assetops-overview.mp4</code>.
              </div>
            </div>

            <div className="modalHint">
              Tip: Next upgrade is to embed a real product walkthrough video (Registry → Work Order → PM Schedule → Audit Log).
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
