(function() {
  "use strict";

  function getCoarseSeason(epochOrDate) {
    try {
      const d = epochOrDate !== undefined
        ? (typeof epochOrDate === 'number' ? new Date(epochOrDate) : epochOrDate)
        : new Date();
      const month = d.getMonth(); // 0 = Jan .. 11 = Dec
      if (month >= 2 && month <= 4) return "spring";
      if (month >= 5 && month <= 7) return "summer";
      if (month >= 8 && month <= 10) return "fall";
      return "winter";
    } catch (e) {
      return "fall";
    }
  }

  const CANONICAL_COPY = {
    eyebrow: "SYSTEMS ARCHITECTURE & ENGINEERING · SEATTLE & REMOTE",
    headlineStart: "Software for complex",
    headlineSuffix: "<span class=\"accent-word\">systems.</span>",
    subtag: "// DISTRIBUTED RUNTIMES · CONSENSUS ENGINES · RELIABLE INFRASTRUCTURE",
    badgeLeft: "• STUDIO81 // ARCHITECTURE THROUGH DELIVERY",
    lede: "We help teams design, build, and operate reliable software—from architecture decisions to production.",
    col1: ["[01] SYSTEMS ARCHITECTURE", "Design and implementation of distributed systems, consensus engines, and fault-tolerant infrastructure built for high reliability."],
    col2: ["[02] RELIABILITY & SCALE", "Diagnose production problems, improve resilience, and scale data pipelines."],
    col3: ["[03] WORK DIRECTLY WITH US", "Hands-on collaboration directly with technical founders and engineering leadership."]
  };

  // ARCHITECTURAL MODEL:
  // Themes are modular design systems that define common base skenes (physical button style,
  // display typography, corner geometry, edge mullions) and are parameterized by an arbitrary
  // tier hierarchy (0 tiers, 1 tier, 2 tiers, up to 4 tiers).
  //
  // - Pacific Northwest Places: Tier 2 is 'Season' (coarse-clock real-world seasonal rhythm).
  // - Computing Eras: Tier 2 is 'Release' (historical architectural OS and workstation milestones).
  // - In Quneic, workspaces map themes and their parameter tiers directly to work surfaces to
  //   provide instant, unmistakable visual separation across execution contexts.

  const THEMES = {
    "redmond-town-square": {
      slug: "redmond",
      name: "Redmond Town Square",
      category: "era",
      tierType: "release",
      tierLabel: "Release",
      tierBadge: "RELEASE",
      qualifierType: "release",
      defaultQualifierId: "v2",
      defaultMode: "light",
      baseSkenes: {
        buttonTreatment: "tactile-bevel",
        buttonTreatmentLabel: "Tactile 3D Bevel",
        cardRadius: "sharp",
        cardRadiusLabel: "Sharp 0px",
        heroFontLabel: "Segoe UI Redmond Enterprise",
        fontDisplay: "\"Segoe UI\", \"Trebuchet MS\", \"Libre Franklin\", Tahoma, sans-serif",
        edgeStyle: "corporate-steel",
        edgeLabel: "Anodized Steel Mullion"
      },
      alignedButton: "tactile-bevel",
      alignedButtonTreatmentLabel: "Tactile 3D Bevel",
      alignedCardRadius: "sharp",
      heroFontLabel: "Segoe UI Redmond Enterprise",
      fontDisplay: "\"Segoe UI\", \"Trebuchet MS\", \"Libre Franklin\", Tahoma, sans-serif",
      tiers: [
        {
          id: "release",
          name: "Release",
          badge: "RELEASE",
          options: [
            { id: "v1", label: "Rel 1.0 (1996)", canonicalLabel: "Release 1.0 (1996)", badge: "Release 1.0", icon: "📁", name: "Windows NT 4.0", description: "Classic industrial workstation gray & enterprise blue" },
            { id: "v2", label: "Rel 2.0 (2000)", canonicalLabel: "Release 2.0 (2000)", badge: "Release 2.0", icon: "🏢", name: "Windows 2000 Pro", description: "Enterprise RTM Build 2195, corporate platinum & cobalt" },
            { id: "v3", label: "Rel 3.0 (2003)", canonicalLabel: "Release 3.0 (2003)", badge: "Release 3.0", icon: "🌐", name: "XP / Server Enterprise", description: "Modern campus glass curtain walls & corporate azure" },
            { id: "v4", label: "Rel 4.0 (2006)", canonicalLabel: "Release 4.0 (2006)", badge: "Release 4.0", icon: "⬛", name: "Longhorn Obsidian", description: "Aero glass, executive midnight obsidian & enterprise azure" }
          ]
        }
      ],
      qualifiers: [
        { id: "v1", label: "Rel 1.0 (1996)", canonicalLabel: "Release 1.0 (1996)", badge: "Release 1.0", icon: "📁", name: "Windows NT 4.0", description: "Classic industrial workstation gray & enterprise blue" },
        { id: "v2", label: "Rel 2.0 (2000)", canonicalLabel: "Release 2.0 (2000)", badge: "Release 2.0", icon: "🏢", name: "Windows 2000 Pro", description: "Enterprise RTM Build 2195, corporate platinum & cobalt" },
        { id: "v3", label: "Rel 3.0 (2003)", canonicalLabel: "Release 3.0 (2003)", badge: "Release 3.0", icon: "🌐", name: "XP / Server Enterprise", description: "Modern campus glass curtain walls & corporate azure" },
        { id: "v4", label: "Rel 4.0 (2006)", canonicalLabel: "Release 4.0 (2006)", badge: "Release 4.0", icon: "⬛", name: "Longhorn Obsidian", description: "Aero glass, executive midnight obsidian & enterprise azure" }
      ],
      palettes: {"v1":{"dark":{"canvasBg":"#10141b","surfaceBg":"#19202a","surfaceHoverBg":"#232c3a","textPrimary":"#f4f6fa","textSecondary":"#c0c9d6","textMuted":"#7f8ea2","borderSubtle":"rgba(13, 148, 136, 0.38)","accentPrimary":"#0d9488","accentSecondary":"#f59e0b","accentTertiary":"#475569","heroGradient":"linear-gradient(135deg, #0d9488 0%, #f59e0b 55%, #f4f6fa 100%)","buttonBg":"#0d9488","buttonText":"#ffffff","buttonHoverBg":"#0f766e","buttonShadow":"rgba(13, 148, 136, 0.45)","causticGradients":"radial-gradient(ellipse 70% 55% at 85% 15%, rgba(13, 148, 136, 0.24), transparent 60%), radial-gradient(ellipse 65% 50% at 15% 75%, rgba(245, 158, 11, 0.20), transparent 65%), radial-gradient(circle 800px at 50% 20%, #19202a, #10141b)","gridLineColor":"rgba(255, 255, 255, 0.035)","svgBeamGrad":["#0d9488","#0f766e","#10141b"],"svgPlanesGrad":["#f59e0b","#d97706","#10141b"],"svgStreamlineGrad":["#0d9488","#14b8a6","#f59e0b","#d97706"],"bracketColors":["#0d9488","#f59e0b"],"selectionBg":"rgba(13, 148, 136, 0.35)","selectionText":"#ccfbf1"},"light":{"canvasBg":"#e2e6eb","surfaceBg":"#edf2f7","surfaceHoverBg":"#e4e9ef","textPrimary":"#0a111a","textSecondary":"#1e293b","textMuted":"#475569","borderSubtle":"rgba(2, 106, 162, 0.40)","accentPrimary":"#026aa2","accentSecondary":"#475569","accentTertiary":"#d97706","heroGradient":"linear-gradient(135deg, #0369a1 0%, #475569 50%, #111824 100%)","buttonBg":"#026aa2","buttonText":"#ffffff","buttonHoverBg":"#075985","buttonShadow":"rgba(3, 105, 161, 0.38)","causticGradients":"radial-gradient(ellipse 75% 65% at 90% 12%, rgba(3, 105, 161, 0.16), transparent 60%), radial-gradient(ellipse 70% 60% at 8% 85%, rgba(71, 85, 105, 0.14), transparent 65%), radial-gradient(circle 800px at 50% 25%, rgba(3, 105, 161, 0.08), #e2e6eb)","gridLineColor":"rgba(17, 24, 36, 0.06)","svgBeamGrad":["#0369a1","#0284c7","#e2e6eb"],"svgPlanesGrad":["#475569","#334155","#e2e6eb"],"svgStreamlineGrad":["#0369a1","#38bdf8","#475569","#334155"],"bracketColors":["#0369a1","#475569"],"selectionBg":"rgba(3, 105, 161, 0.22)","selectionText":"#082f49"}},"v2":{"dark":{"canvasBg":"#080c14","surfaceBg":"#101724","surfaceHoverBg":"#172233","textPrimary":"#f8fafc","textSecondary":"#94a3b8","textMuted":"#64748b","borderSubtle":"rgba(37, 99, 235, 0.35)","accentPrimary":"#2563eb","accentSecondary":"#64748b","accentTertiary":"#0284c7","heroGradient":"linear-gradient(135deg, #3b82f6 0%, #60a5fa 45%, #93c5fd 85%, #ffffff 100%)","buttonBg":"#2563eb","buttonText":"#ffffff","buttonHoverBg":"#1d4ed8","buttonShadow":"rgba(37, 99, 235, 0.45)","causticGradients":"radial-gradient(ellipse 70% 55% at 85% 15%, rgba(37, 99, 235, 0.20), transparent 60%), radial-gradient(ellipse 65% 50% at 15% 75%, rgba(2, 132, 199, 0.16), transparent 65%), radial-gradient(circle 800px at 50% 20%, #101724, #080c14)","gridLineColor":"rgba(255, 255, 255, 0.035)","svgBeamGrad":["#2563eb","#1d4ed8","#080c14"],"svgPlanesGrad":["#64748b","#334155","#080c14"],"svgStreamlineGrad":["#2563eb","#38bdf8","#64748b","#1e40af"],"bracketColors":["#2563eb","#64748b"],"selectionBg":"rgba(37, 99, 235, 0.35)","selectionText":"#dbeafe"},"light":{"canvasBg":"#e4ebf4","surfaceBg":"#f3f7fc","surfaceHoverBg":"#eaf0f8","textPrimary":"#091629","textSecondary":"#1e293b","textMuted":"#475569","borderSubtle":"rgba(29, 78, 216, 0.40)","accentPrimary":"#1d4ed8","accentSecondary":"#475569","accentTertiary":"#0284c7","heroGradient":"linear-gradient(135deg, #1d4ed8 0%, #2563eb 45%, #0284c7 80%, #091629 100%)","buttonBg":"#1d4ed8","buttonText":"#ffffff","buttonHoverBg":"#1e40af","buttonShadow":"rgba(29, 78, 216, 0.40)","causticGradients":"radial-gradient(ellipse 75% 65% at 90% 12%, rgba(37, 99, 235, 0.16), transparent 60%), radial-gradient(ellipse 70% 60% at 8% 85%, rgba(2, 132, 199, 0.12), transparent 65%), radial-gradient(circle 800px at 50% 25%, rgba(71, 85, 105, 0.08), #e4ebf4)","gridLineColor":"rgba(9, 22, 41, 0.06)","svgBeamGrad":["#1d4ed8","#2563eb","#e4ebf4"],"svgPlanesGrad":["#475569","#334155","#e4ebf4"],"svgStreamlineGrad":["#1d4ed8","#2563eb","#0284c7","#475569"],"bracketColors":["#1d4ed8","#475569"],"selectionBg":"rgba(37, 99, 235, 0.25)","selectionText":"#1e3a8a"}},"v3":{"dark":{"canvasBg":"#091220","surfaceBg":"#111e33","surfaceHoverBg":"#192b47","textPrimary":"#f4f8fe","textSecondary":"#b7d0ef","textMuted":"#6f92be","borderSubtle":"rgba(56, 189, 248, 0.38)","accentPrimary":"#38bdf8","accentSecondary":"#10b981","accentTertiary":"#2563eb","heroGradient":"linear-gradient(135deg, #38bdf8 0%, #10b981 55%, #f4f8fe 100%)","buttonBg":"#0284c7","buttonText":"#ffffff","buttonHoverBg":"#0369a1","buttonShadow":"rgba(56, 189, 248, 0.45)","causticGradients":"radial-gradient(ellipse 70% 55% at 85% 15%, rgba(56, 189, 248, 0.25), transparent 60%), radial-gradient(ellipse 65% 50% at 15% 75%, rgba(16, 185, 129, 0.20), transparent 65%), radial-gradient(circle 800px at 50% 20%, #111e33, #091220)","gridLineColor":"rgba(255, 255, 255, 0.035)","svgBeamGrad":["#38bdf8","#0284c7","#091220"],"svgPlanesGrad":["#10b981","#059669","#091220"],"svgStreamlineGrad":["#38bdf8","#7dd3fc","#10b981","#059669"],"bracketColors":["#38bdf8","#10b981"],"selectionBg":"rgba(56, 189, 248, 0.35)","selectionText":"#e0f2fe"},"light":{"canvasBg":"#e0edfc","surfaceBg":"#eff6ff","surfaceHoverBg":"#e2eefb","textPrimary":"#071526","textSecondary":"#1e293b","textMuted":"#475569","borderSubtle":"rgba(2, 132, 199, 0.40)","accentPrimary":"#0284c7","accentSecondary":"#059669","accentTertiary":"#1d4ed8","heroGradient":"linear-gradient(135deg, #0284c7 0%, #059669 55%, #081a33 100%)","buttonBg":"#0284c7","buttonText":"#ffffff","buttonHoverBg":"#0369a1","buttonShadow":"rgba(2, 132, 199, 0.38)","causticGradients":"radial-gradient(ellipse 75% 65% at 90% 12%, rgba(2, 132, 199, 0.18), transparent 60%), radial-gradient(ellipse 70% 60% at 8% 85%, rgba(5, 150, 105, 0.16), transparent 65%), radial-gradient(circle 800px at 50% 25%, rgba(2, 132, 199, 0.08), #e0edfc)","gridLineColor":"rgba(8, 26, 51, 0.06)","svgBeamGrad":["#0284c7","#38bdf8","#e0edfc"],"svgPlanesGrad":["#059669","#10b981","#e0edfc"],"svgStreamlineGrad":["#0284c7","#38bdf8","#059669","#10b981"],"bracketColors":["#0284c7","#059669"],"selectionBg":"rgba(2, 132, 199, 0.22)","selectionText":"#075985"}},"v4":{"dark":{"canvasBg":"#06080d","surfaceBg":"#0d121c","surfaceHoverBg":"#141a28","textPrimary":"#f7fafc","textSecondary":"#a5b4cb","textMuted":"#687791","borderSubtle":"rgba(6, 182, 212, 0.38)","accentPrimary":"#06b6d4","accentSecondary":"#3b82f6","accentTertiary":"#0284c7","heroGradient":"linear-gradient(135deg, #06b6d4 0%, #3b82f6 55%, #f7fafc 100%)","buttonBg":"#0891b2","buttonText":"#ffffff","buttonHoverBg":"#0e7490","buttonShadow":"rgba(6, 182, 212, 0.45)","causticGradients":"radial-gradient(ellipse 70% 55% at 85% 15%, rgba(6, 182, 212, 0.25), transparent 60%), radial-gradient(ellipse 65% 50% at 15% 75%, rgba(59, 130, 246, 0.20), transparent 65%), radial-gradient(circle 800px at 50% 20%, #0d121c, #06080d)","gridLineColor":"rgba(255, 255, 255, 0.035)","svgBeamGrad":["#06b6d4","#0891b2","#06080d"],"svgPlanesGrad":["#3b82f6","#1d4ed8","#06080d"],"svgStreamlineGrad":["#06b6d4","#22d3ee","#3b82f6","#1d4ed8"],"bracketColors":["#06b6d4","#3b82f6"],"selectionBg":"rgba(6, 182, 212, 0.35)","selectionText":"#cffafe"},"light":{"canvasBg":"#e6edf5","surfaceBg":"#f2f7fc","surfaceHoverBg":"#e8f0f9","textPrimary":"#081420","textSecondary":"#1e293b","textMuted":"#475569","borderSubtle":"rgba(14, 116, 144, 0.40)","accentPrimary":"#0e7490","accentSecondary":"#1d4ed8","accentTertiary":"#0284c7","heroGradient":"linear-gradient(135deg, #0891b2 0%, #1d4ed8 55%, #0a1728 100%)","buttonBg":"#0e7490","buttonText":"#ffffff","buttonHoverBg":"#0e7490","buttonShadow":"rgba(8, 145, 178, 0.38)","causticGradients":"radial-gradient(ellipse 75% 65% at 90% 12%, rgba(8, 145, 178, 0.18), transparent 60%), radial-gradient(ellipse 70% 60% at 8% 85%, rgba(29, 78, 216, 0.16), transparent 65%), radial-gradient(circle 800px at 50% 25%, rgba(8, 145, 178, 0.08), #e6edf5)","gridLineColor":"rgba(10, 23, 40, 0.06)","svgBeamGrad":["#0891b2","#06b6d4","#e6edf5"],"svgPlanesGrad":["#1d4ed8","#2563eb","#e6edf5"],"svgStreamlineGrad":["#0891b2","#06b6d4","#1d4ed8","#2563eb"],"bracketColors":["#0891b2","#1d4ed8"],"selectionBg":"rgba(8, 145, 178, 0.22)","selectionText":"#164e63"}}},
      localizedCopy: {
        eyebrow: "ENTERPRISE SYSTEMS ARCHITECTURE · CAMPUS CORE · EXECUTIVE GRID",
        headlineStart: "Mission-critical",
        headlineSuffix: "<span class=\"accent-word\">platforms.</span>",
        subtag: "// FORTUNE 50 ENTERPRISE SCALE · TRANSACTIONAL COM+ RUNTIMES · MULTI-TENANT QUORUM",
        badgeLeft: "• CAMPUS_CORE // NT_ENTERPRISE",
        lede: "Building the robust, dependable enterprise foundations that run global financial, logistics, and cloud infrastructure. Total architectural governance.",
        col1: ["[01] ENTERPRISE SCALE", "Mission-critical clustered architectures with zero-defect SLAs."],
        col2: ["[02] CAMPUS DISPATCH", "Thread-pool orchestration handling millions of concurrent enterprise sessions."],
        col3: ["[03] PRINCIPAL GOVERNANCE", "Direct engagement with veteran systems architects."]
      }
    },
    "sgi-indigo": {
      slug: "sgi",
      name: "SGI Indigo",
      category: "era",
      tierType: "release",
      tierLabel: "Release",
      tierBadge: "RELEASE",
      qualifierType: "release",
      defaultQualifierId: "v2",
      defaultMode: "dark",
      baseSkenes: {
        buttonTreatment: "cad-bracket",
        buttonTreatmentLabel: "CAD Reticle Bracket",
        cardRadius: "subtle",
        cardRadiusLabel: "Subtle 2px",
        heroFontLabel: "Orbitron 3D Workstation HUD",
        fontDisplay: "ui-sans-serif, system-ui, sans-serif",
        edgeStyle: "chamfer",
        edgeLabel: "Chamfered Precision Bezel"
      },
      alignedButton: "cad-bracket",
      alignedButtonTreatmentLabel: "CAD Reticle Bracket",
      alignedCardRadius: "subtle",
      heroFontLabel: "Orbitron 3D Workstation HUD",
      fontDisplay: "ui-sans-serif, system-ui, sans-serif",
      tiers: [
        {
          id: "release",
          name: "Release",
          badge: "RELEASE",
          options: [
            { id: "v1", label: "Rel 1.0 (1991)", canonicalLabel: "Release 1.0 (1991)", badge: "Release 1.0", icon: "⚡", name: "R3000 Classic", description: "Entry-level RISC Indigo chassis with vibrant magenta & cyan caustics" },
            { id: "v2", label: "Rel 2.0 (1993)", canonicalLabel: "Release 2.0 (1993)", badge: "Release 2.0", icon: "🔷", name: "IRIX 5.3 Extreme", description: "Indigo2 Extreme Graphics, deep indigo chassis with electric cyan & rose accents" },
            { id: "v3", label: "Rel 3.0 (1996)", canonicalLabel: "Release 3.0 (1996)", badge: "Release 3.0", icon: "🟢", name: "Octane Dual-MIPS", description: "Octane dual-processor workstation, racing green & lime telemetry" },
            { id: "v4", label: "Rel 4.0 (1999)", canonicalLabel: "Release 4.0 (1999)", badge: "Release 4.0", icon: "🟣", name: "Onyx2 / Fuel", description: "Deskside visualization supercomputer, crimson & cobalt" }
          ]
        }
      ],
      qualifiers: [
        { id: "v1", label: "Rel 1.0 (1991)", canonicalLabel: "Release 1.0 (1991)", badge: "Release 1.0", icon: "⚡", name: "R3000 Classic", description: "Entry-level RISC Indigo chassis with vibrant magenta & cyan caustics" },
        { id: "v2", label: "Rel 2.0 (1993)", canonicalLabel: "Release 2.0 (1993)", badge: "Release 2.0", icon: "🔷", name: "IRIX 5.3 Extreme", description: "Indigo2 Extreme Graphics, deep indigo chassis with electric cyan & rose accents" },
        { id: "v3", label: "Rel 3.0 (1996)", canonicalLabel: "Release 3.0 (1996)", badge: "Release 3.0", icon: "🟢", name: "Octane Dual-MIPS", description: "Octane dual-processor workstation, racing green & lime telemetry" },
        { id: "v4", label: "Rel 4.0 (1999)", canonicalLabel: "Release 4.0 (1999)", badge: "Release 4.0", icon: "🟣", name: "Onyx2 / Fuel", description: "Deskside visualization supercomputer, crimson & cobalt" }
      ],
      palettes: {"v1":{"dark":{"canvasBg":"#0e0a1a","surfaceBg":"#18122c","surfaceHoverBg":"#211a3b","textPrimary":"#fbf5ff","textSecondary":"#ddc8fd","textMuted":"#937cb6","borderSubtle":"rgba(236, 72, 153, 0.38)","accentPrimary":"#ec4899","accentSecondary":"#06b6d4","accentTertiary":"#a855f7","heroGradient":"linear-gradient(135deg, #ec4899 0%, #06b6d4 55%, #fbf5ff 100%)","buttonBg":"#db2777","buttonText":"#ffffff","buttonHoverBg":"#be185d","buttonShadow":"rgba(236, 72, 153, 0.45)","causticGradients":"radial-gradient(ellipse 75% 65% at 85% 15%, rgba(236, 72, 153, 0.25), transparent 60%), radial-gradient(ellipse 65% 55% at 15% 75%, rgba(6, 182, 212, 0.22), transparent 65%), radial-gradient(circle 800px at 50% 20%, #18122c, #0e0a1a)","gridLineColor":"rgba(255, 255, 255, 0.04)","svgBeamGrad":["#ec4899","#db2777","#0e0a1a"],"svgPlanesGrad":["#06b6d4","#0891b2","#0e0a1a"],"svgStreamlineGrad":["#ec4899","#f472b6","#06b6d4","#0891b2"],"bracketColors":["#ec4899","#06b6d4"],"selectionBg":"rgba(236, 72, 153, 0.35)","selectionText":"#fce7f3"},"light":{"canvasBg":"#eeeae4","surfaceBg":"#faf7f2","surfaceHoverBg":"#eeeae2","textPrimary":"#150d18","textSecondary":"#382340","textMuted":"#5a3d64","borderSubtle":"rgba(162, 28, 175, 0.40)","accentPrimary":"#a21caf","accentSecondary":"#0891b2","accentTertiary":"#7c3aed","heroGradient":"linear-gradient(135deg, #c026d3 0%, #0891b2 55%, #211824 100%)","buttonBg":"#a21caf","buttonText":"#ffffff","buttonHoverBg":"#a21caf","buttonShadow":"rgba(192, 38, 211, 0.38)","causticGradients":"radial-gradient(ellipse 75% 65% at 85% 15%, rgba(192, 38, 211, 0.16), transparent 60%), radial-gradient(ellipse 65% 55% at 15% 75%, rgba(8, 145, 178, 0.16), transparent 65%), radial-gradient(circle 800px at 50% 20%, rgba(192, 38, 211, 0.08), #eeeae4)","gridLineColor":"rgba(33, 24, 36, 0.06)","svgBeamGrad":["#c026d3","#a21caf","#eeeae4"],"svgPlanesGrad":["#0891b2","#06b6d4","#eeeae4"],"svgStreamlineGrad":["#c026d3","#e879f9","#0891b2","#06b6d4"],"bracketColors":["#c026d3","#0891b2"],"selectionBg":"rgba(192, 38, 211, 0.22)","selectionText":"#701a75"}},"v2":{"dark":{"canvasBg":"#0b0a1a","surfaceBg":"#14112e","surfaceHoverBg":"#1d1940","textPrimary":"#f7f5ff","textSecondary":"#c8bbfd","textMuted":"#8077ab","borderSubtle":"rgba(129, 140, 248, 0.38)","accentPrimary":"#6366f1","accentSecondary":"#06b6d4","accentTertiary":"#f43f5e","heroGradient":"linear-gradient(135deg, #818cf8 0%, #38bdf8 50%, #f43f5e 100%)","buttonBg":"#6366f1","buttonText":"#ffffff","buttonHoverBg":"#4f46e5","buttonShadow":"rgba(99, 102, 241, 0.50)","causticGradients":"radial-gradient(ellipse 75% 65% at 85% 15%, rgba(99, 102, 241, 0.28), transparent 60%), radial-gradient(ellipse 65% 55% at 15% 75%, rgba(6, 182, 212, 0.22), transparent 65%), radial-gradient(circle 800px at 50% 20%, #14112e, #0b0a1a)","gridLineColor":"rgba(255, 255, 255, 0.04)","svgBeamGrad":["#06b6d4","#0891b2","#0b0a1a"],"svgPlanesGrad":["#6366f1","#f43f5e","#0b0a1a"],"svgStreamlineGrad":["#06b6d4","#818cf8","#6366f1","#f43f5e"],"bracketColors":["#06b6d4","#6366f1"],"selectionBg":"rgba(99, 102, 241, 0.35)","selectionText":"#ede9fe"},"light":{"canvasBg":"#ebe5f7","surfaceBg":"#f5f0fc","surfaceHoverBg":"#ede5fa","textPrimary":"#0d0a22","textSecondary":"#271e4a","textMuted":"#4a3d78","borderSubtle":"rgba(67, 56, 202, 0.42)","accentPrimary":"#4338ca","accentSecondary":"#0891b2","accentTertiary":"#e11d48","heroGradient":"linear-gradient(135deg, #6366f1 0%, #0891b2 45%, #e11d48 85%, #171038 100%)","buttonBg":"#4338ca","buttonText":"#ffffff","buttonHoverBg":"#4f46e5","buttonShadow":"rgba(99, 102, 241, 0.40)","causticGradients":"radial-gradient(ellipse 75% 65% at 85% 15%, rgba(99, 102, 241, 0.18), transparent 60%), radial-gradient(ellipse 65% 55% at 15% 75%, rgba(8, 145, 178, 0.16), transparent 65%), radial-gradient(circle 800px at 50% 20%, rgba(99, 102, 241, 0.10), #ebe5f7)","gridLineColor":"rgba(23, 16, 56, 0.06)","svgBeamGrad":["#0891b2","#06b6d4","#ebe5f7"],"svgPlanesGrad":["#6366f1","#e11d48","#ebe5f7"],"svgStreamlineGrad":["#0891b2","#6366f1","#a855f7","#e11d48"],"bracketColors":["#0891b2","#6366f1"],"selectionBg":"rgba(99, 102, 241, 0.25)","selectionText":"#3730a3"}},"v3":{"dark":{"canvasBg":"#091617","surfaceBg":"#122324","surfaceHoverBg":"#1a3032","textPrimary":"#f3faf9","textSecondary":"#b7dedb","textMuted":"#6fa6a2","borderSubtle":"rgba(16, 185, 129, 0.38)","accentPrimary":"#10b981","accentSecondary":"#84cc16","accentTertiary":"#06b6d4","heroGradient":"linear-gradient(135deg, #10b981 0%, #84cc16 55%, #f3faf9 100%)","buttonBg":"#10b981","buttonText":"#ffffff","buttonHoverBg":"#059669","buttonShadow":"rgba(16, 185, 129, 0.45)","causticGradients":"radial-gradient(ellipse 75% 65% at 85% 15%, rgba(16, 185, 129, 0.25), transparent 60%), radial-gradient(ellipse 65% 55% at 15% 75%, rgba(132, 204, 22, 0.22), transparent 65%), radial-gradient(circle 800px at 50% 20%, #122324, #091617)","gridLineColor":"rgba(255, 255, 255, 0.04)","svgBeamGrad":["#10b981","#059669","#091617"],"svgPlanesGrad":["#84cc16","#4d7c0f","#091617"],"svgStreamlineGrad":["#10b981","#34d399","#84cc16","#4d7c0f"],"bracketColors":["#10b981","#84cc16"],"selectionBg":"rgba(16, 185, 129, 0.35)","selectionText":"#d1fae5"},"light":{"canvasBg":"#e2ece9","surfaceBg":"#f0f7f5","surfaceHoverBg":"#e4f0ed","textPrimary":"#091815","textSecondary":"#1b3d36","textMuted":"#345e55","borderSubtle":"rgba(4, 120, 87, 0.40)","accentPrimary":"#047857","accentSecondary":"#65a30d","accentTertiary":"#0891b2","heroGradient":"linear-gradient(135deg, #059669 0%, #65a30d 55%, #102421 100%)","buttonBg":"#047857","buttonText":"#ffffff","buttonHoverBg":"#047857","buttonShadow":"rgba(5, 150, 105, 0.38)","causticGradients":"radial-gradient(ellipse 75% 65% at 85% 15%, rgba(5, 150, 105, 0.16), transparent 60%), radial-gradient(ellipse 65% 55% at 15% 75%, rgba(101, 163, 13, 0.16), transparent 65%), radial-gradient(circle 800px at 50% 20%, rgba(5, 150, 105, 0.08), #e2ece9)","gridLineColor":"rgba(16, 36, 33, 0.06)","svgBeamGrad":["#059669","#10b981","#e2ece9"],"svgPlanesGrad":["#65a30d","#84cc16","#e2ece9"],"svgStreamlineGrad":["#059669","#10b981","#65a30d","#84cc16"],"bracketColors":["#059669","#65a30d"],"selectionBg":"rgba(5, 150, 105, 0.22)","selectionText":"#064e3b"}},"v4":{"dark":{"canvasBg":"#0d0c18","surfaceBg":"#171529","surfaceHoverBg":"#211e3a","textPrimary":"#f9f6ff","textSecondary":"#cec5ea","textMuted":"#8b80b0","borderSubtle":"rgba(244, 63, 94, 0.38)","accentPrimary":"#f43f5e","accentSecondary":"#3b82f6","accentTertiary":"#8b5cf6","heroGradient":"linear-gradient(135deg, #f43f5e 0%, #3b82f6 55%, #f9f6ff 100%)","buttonBg":"#e11d48","buttonText":"#ffffff","buttonHoverBg":"#be123c","buttonShadow":"rgba(244, 63, 94, 0.48)","causticGradients":"radial-gradient(ellipse 75% 65% at 85% 15%, rgba(244, 63, 94, 0.25), transparent 60%), radial-gradient(ellipse 65% 55% at 15% 75%, rgba(59, 130, 246, 0.22), transparent 65%), radial-gradient(circle 800px at 50% 20%, #171529, #0d0c18)","gridLineColor":"rgba(255, 255, 255, 0.04)","svgBeamGrad":["#f43f5e","#e11d48","#0d0c18"],"svgPlanesGrad":["#3b82f6","#1d4ed8","#0d0c18"],"svgStreamlineGrad":["#f43f5e","#fb7185","#3b82f6","#1d4ed8"],"bracketColors":["#f43f5e","#3b82f6"],"selectionBg":"rgba(244, 63, 94, 0.35)","selectionText":"#ffe4e6"},"light":{"canvasBg":"#e8e8f2","surfaceBg":"#f4f4fb","surfaceHoverBg":"#ececf6","textPrimary":"#150c12","textSecondary":"#3b1c28","textMuted":"#613346","borderSubtle":"rgba(190, 18, 60, 0.40)","accentPrimary":"#be123c","accentSecondary":"#1d4ed8","accentTertiary":"#7c3aed","heroGradient":"linear-gradient(135deg, #e11d48 0%, #1d4ed8 55%, #16152b 100%)","buttonBg":"#be123c","buttonText":"#ffffff","buttonHoverBg":"#be123c","buttonShadow":"rgba(225, 29, 72, 0.38)","causticGradients":"radial-gradient(ellipse 75% 65% at 85% 15%, rgba(225, 29, 72, 0.16), transparent 60%), radial-gradient(ellipse 65% 55% at 15% 75%, rgba(29, 78, 216, 0.16), transparent 65%), radial-gradient(circle 800px at 50% 20%, rgba(225, 29, 72, 0.08), #e8e8f2)","gridLineColor":"rgba(22, 21, 43, 0.06)","svgBeamGrad":["#e11d48","#f43f5e","#e8e8f2"],"svgPlanesGrad":["#1d4ed8","#2563eb","#e8e8f2"],"svgStreamlineGrad":["#e11d48","#fb7185","#1d4ed8","#2563eb"],"bracketColors":["#e11d48","#1d4ed8"],"selectionBg":"rgba(225, 29, 72, 0.22)","selectionText":"#881337"}}},
      localizedCopy: {
        eyebrow: "MIPS RISC PIPELINES · NUMALINK FABRICS · IRIX SYSTEM ARCHITECTURE",
        headlineStart: "Workstation",
        headlineSuffix: "<span class=\"accent-word\">computation.</span>",
        subtag: "// ZERO-LATENCY GEOMETRY ENGINES · SMP FIBRE CHANNEL FABRICS · REAL-TIME RASTERIZATION",
        badgeLeft: "• SILICON_GRAPHICS // IRIX_ACTIVE",
        lede: "Parallel architectures for spatial simulation and high-bandwidth rendering backbones. Built to execute where precision is critical.",
        col1: ["[01] NUMA FABRICS", "Coherent distributed shared memory across high-density clusters."],
        col2: ["[02] XIO CROSSBARS", "Gigabyte-per-second point-to-point sub-chassis interconnects."],
        col3: ["[03] REAL-TIME KERNELS", "Deterministic sub-millisecond dispatch for mission-critical loads."]
      }
    },
    "puget-twilight": {
      slug: "puget",
      name: "Puget Twilight",
      category: "place",
      tierType: "season",
      tierLabel: "Season",
      tierBadge: "SEASON",
      qualifierType: "season",
      defaultQualifierId: getCoarseSeason(),
      defaultMode: "dark",
      baseSkenes: {
        buttonTreatment: "double-wire",
        buttonTreatmentLabel: "Double-Wire Rim",
        cardRadius: "pill",
        cardRadiusLabel: "Pill 999px",
        heroFontLabel: "Syne Maritime Architectural",
        fontDisplay: "ui-sans-serif, system-ui, sans-serif",
        edgeStyle: "pill",
        edgeLabel: "Maritime Aero Pill"
      },
      alignedButton: "double-wire",
      alignedButtonTreatmentLabel: "Double-Wire Rim",
      alignedCardRadius: "pill",
      heroFontLabel: "Syne Maritime Architectural",
      fontDisplay: "ui-sans-serif, system-ui, sans-serif",
      tiers: [
        {
          id: "season",
          name: "Season",
          badge: "SEASON",
          options: [
            { id: "spring", label: "Spring", canonicalLabel: "Spring", badge: "Spring", icon: "🌸", name: "Salish Spring", description: "Cool maritime currents and fresh salt spray along Puget Sound" },
            { id: "summer", label: "Summer", canonicalLabel: "Summer", badge: "Summer", icon: "☀️", name: "Sound Summer", description: "Long sunset horizons over the Olympic mountains and warm waters" },
            { id: "fall",   label: "Fall",   canonicalLabel: "Fall",   badge: "Fall",   icon: "🍁", name: "Tidal Fall",   description: "Low autumn light, deep indigo waters, and amber city reflections" },
            { id: "winter", label: "Winter", canonicalLabel: "Winter", badge: "Winter", icon: "❄️", name: "Maritime Winter", description: "Cold rain, iron-gray skies, and sharp wind off the Strait" }
          ]
        }
      ],
      qualifiers: [
        { id: "spring", label: "Spring", canonicalLabel: "Spring", badge: "Spring", icon: "🌸", name: "Salish Spring", description: "Cool maritime currents and fresh salt spray along Puget Sound" },
        { id: "summer", label: "Summer", canonicalLabel: "Summer", badge: "Summer", icon: "☀️", name: "Sound Summer", description: "Long sunset horizons over the Olympic mountains and warm waters" },
        { id: "fall",   label: "Fall",   canonicalLabel: "Fall",   badge: "Fall",   icon: "🍁", name: "Tidal Fall",   description: "Low autumn light, deep indigo waters, and amber city reflections" },
        { id: "winter", label: "Winter", canonicalLabel: "Winter", badge: "Winter", icon: "❄️", name: "Maritime Winter", description: "Cold rain, iron-gray skies, and sharp wind off the Strait" }
      ],
      palettes: {"spring":{"dark":{"canvasBg":"#0d1a20","surfaceBg":"#152630","surfaceHoverBg":"#1c3442","textPrimary":"#f2f8fa","textSecondary":"#b7d4dc","textMuted":"#7198a4","borderSubtle":"rgba(20, 184, 166, 0.38)","accentPrimary":"#14b8a6","accentSecondary":"#fbbf24","accentTertiary":"#0284c7","heroGradient":"linear-gradient(135deg, #14b8a6 0%, #fbbf24 55%, #f2f8fa 100%)","buttonBg":"#0d9488","buttonText":"#ffffff","buttonHoverBg":"#0f766e","buttonShadow":"rgba(20, 184, 166, 0.45)","causticGradients":"radial-gradient(ellipse 70% 60% at 85% 15%, rgba(20, 184, 166, 0.24), transparent 60%), radial-gradient(ellipse 65% 55% at 15% 75%, rgba(251, 191, 36, 0.20), transparent 65%), radial-gradient(circle 800px at 50% 20%, #152630, #0d1a20)","gridLineColor":"rgba(255, 255, 255, 0.04)","svgBeamGrad":["#14b8a6","#0d9488","#0d1a20"],"svgPlanesGrad":["#fbbf24","#d97706","#0d1a20"],"svgStreamlineGrad":["#14b8a6","#2dd4bf","#fbbf24","#d97706"],"bracketColors":["#14b8a6","#fbbf24"],"selectionBg":"rgba(20, 184, 166, 0.35)","selectionText":"#ccfbf1"},"light":{"canvasBg":"#dfebed","surfaceBg":"#edf6f7","surfaceHoverBg":"#e2f0f1","textPrimary":"#081c20","textSecondary":"#1c3e44","textMuted":"#355f68","borderSubtle":"rgba(15, 118, 110, 0.40)","accentPrimary":"#0f766e","accentSecondary":"#d97706","accentTertiary":"#0284c7","heroGradient":"linear-gradient(135deg, #0d9488 0%, #d97706 55%, #0d2226 100%)","buttonBg":"#0f766e","buttonText":"#ffffff","buttonHoverBg":"#0f766e","buttonShadow":"rgba(13, 148, 136, 0.38)","causticGradients":"radial-gradient(ellipse 70% 60% at 85% 15%, rgba(13, 148, 136, 0.18), transparent 60%), radial-gradient(ellipse 65% 55% at 15% 75%, rgba(217, 119, 6, 0.16), transparent 65%), radial-gradient(circle 800px at 50% 20%, rgba(13, 148, 136, 0.08), #dfebed)","gridLineColor":"rgba(13, 34, 38, 0.06)","svgBeamGrad":["#0d9488","#14b8a6","#dfebed"],"svgPlanesGrad":["#d97706","#b45309","#dfebed"],"svgStreamlineGrad":["#0d9488","#2dd4bf","#d97706","#b45309"],"bracketColors":["#0d9488","#d97706"],"selectionBg":"rgba(13, 148, 136, 0.22)","selectionText":"#134e4a"}},"summer":{"dark":{"canvasBg":"#12182b","surfaceBg":"#1a223c","surfaceHoverBg":"#232e50","textPrimary":"#fbf7f4","textSecondary":"#d6c8e4","textMuted":"#9481b0","borderSubtle":"rgba(249, 115, 22, 0.38)","accentPrimary":"#f97316","accentSecondary":"#8b5cf6","accentTertiary":"#0284c7","heroGradient":"linear-gradient(135deg, #f97316 0%, #8b5cf6 55%, #fbf7f4 100%)","buttonBg":"#ea580c","buttonText":"#ffffff","buttonHoverBg":"#c2410c","buttonShadow":"rgba(249, 115, 22, 0.45)","causticGradients":"radial-gradient(ellipse 70% 60% at 85% 15%, rgba(249, 115, 22, 0.25), transparent 60%), radial-gradient(ellipse 65% 55% at 15% 75%, rgba(139, 92, 246, 0.22), transparent 65%), radial-gradient(circle 800px at 50% 20%, #1a223c, #12182b)","gridLineColor":"rgba(255, 255, 255, 0.04)","svgBeamGrad":["#f97316","#ea580c","#12182b"],"svgPlanesGrad":["#8b5cf6","#7c3aed","#12182b"],"svgStreamlineGrad":["#f97316","#fb923c","#8b5cf6","#7c3aed"],"bracketColors":["#f97316","#8b5cf6"],"selectionBg":"rgba(249, 115, 22, 0.35)","selectionText":"#ffedd5"},"light":{"canvasBg":"#e2ebf7","surfaceBg":"#eff4fc","surfaceHoverBg":"#e5eef9","textPrimary":"#0c1626","textSecondary":"#243654","textMuted":"#44597d","borderSubtle":"rgba(194, 65, 12, 0.40)","accentPrimary":"#c2410c","accentSecondary":"#6366f1","accentTertiary":"#1d4ed8","heroGradient":"linear-gradient(135deg, #ea580c 0%, #6366f1 55%, #101c33 100%)","buttonBg":"#c2410c","buttonText":"#ffffff","buttonHoverBg":"#c2410c","buttonShadow":"rgba(234, 88, 12, 0.38)","causticGradients":"radial-gradient(ellipse 70% 60% at 85% 15%, rgba(234, 88, 12, 0.18), transparent 60%), radial-gradient(ellipse 65% 55% at 15% 75%, rgba(99, 102, 241, 0.16), transparent 65%), radial-gradient(circle 800px at 50% 20%, rgba(234, 88, 12, 0.08), #e2ebf7)","gridLineColor":"rgba(16, 28, 51, 0.06)","svgBeamGrad":["#ea580c","#f97316","#e2ebf7"],"svgPlanesGrad":["#6366f1","#4f46e5","#e2ebf7"],"svgStreamlineGrad":["#ea580c","#fb923c","#6366f1","#4f46e5"],"bracketColors":["#ea580c","#6366f1"],"selectionBg":"rgba(234, 88, 12, 0.22)","selectionText":"#7c2d12"}},"fall":{"dark":{"canvasBg":"#131822","surfaceBg":"#1b2332","surfaceHoverBg":"#232e42","textPrimary":"#f2f6fa","textSecondary":"#c0cfde","textMuted":"#7f93a8","borderSubtle":"rgba(2, 132, 199, 0.38)","accentPrimary":"#0284c7","accentSecondary":"#d97706","accentTertiary":"#c83b3b","heroGradient":"linear-gradient(135deg, #0284c7 0%, #d97706 55%, #f2f6fa 100%)","buttonBg":"#0284c7","buttonText":"#ffffff","buttonHoverBg":"#0369a1","buttonShadow":"rgba(2, 132, 199, 0.45)","causticGradients":"radial-gradient(ellipse 70% 60% at 85% 15%, rgba(2, 132, 199, 0.26), transparent 60%), radial-gradient(ellipse 65% 55% at 15% 75%, rgba(217, 119, 6, 0.22), transparent 65%), radial-gradient(circle 800px at 50% 20%, #1b2332, #131822)","gridLineColor":"rgba(255, 255, 255, 0.04)","svgBeamGrad":["#0284c7","#0369a1","#131822"],"svgPlanesGrad":["#d97706","#b45309","#131822"],"svgStreamlineGrad":["#0284c7","#38bdf8","#d97706","#b45309"],"bracketColors":["#0284c7","#d97706"],"selectionBg":"rgba(2, 132, 199, 0.35)","selectionText":"#e0f2fe"},"light":{"canvasBg":"#dbe2ec","surfaceBg":"#ebf1f8","surfaceHoverBg":"#e0e8f2","textPrimary":"#061320","textSecondary":"#1b3248","textMuted":"#3b5774","borderSubtle":"rgba(2, 106, 162, 0.42)","accentPrimary":"#026aa2","accentSecondary":"#b45309","accentTertiary":"#c2410c","heroGradient":"linear-gradient(135deg, #0369a1 0%, #b45309 55%, #0e1d2c 100%)","buttonBg":"#026aa2","buttonText":"#ffffff","buttonHoverBg":"#075985","buttonShadow":"rgba(3, 105, 161, 0.38)","causticGradients":"radial-gradient(ellipse 70% 60% at 85% 15%, rgba(3, 105, 161, 0.18), transparent 60%), radial-gradient(ellipse 65% 55% at 15% 75%, rgba(180, 83, 9, 0.16), transparent 65%), radial-gradient(circle 800px at 50% 20%, rgba(3, 105, 161, 0.08), #dbe2ec)","gridLineColor":"rgba(14, 29, 44, 0.06)","svgBeamGrad":["#0369a1","#0284c7","#dbe2ec"],"svgPlanesGrad":["#b45309","#d97706","#dbe2ec"],"svgStreamlineGrad":["#0369a1","#38bdf8","#b45309","#d97706"],"bracketColors":["#0369a1","#b45309"],"selectionBg":"rgba(3, 105, 161, 0.22)","selectionText":"#075985"}},"winter":{"dark":{"canvasBg":"#0a121e","surfaceBg":"#131f31","surfaceHoverBg":"#1b2a40","textPrimary":"#f1f6fa","textSecondary":"#cbdbe8","textMuted":"#8ca6bd","borderSubtle":"rgba(2, 132, 199, 0.38)","accentPrimary":"#c83b3b","accentSecondary":"#0284c7","accentTertiary":"#38bdf8","heroGradient":"linear-gradient(135deg, #db4d4d 0%, #38bdf8 55%, #f1f6fa 100%)","buttonBg":"#c83b3b","buttonText":"#ffffff","buttonHoverBg":"#ad2e2e","buttonShadow":"rgba(200, 59, 59, 0.45)","causticGradients":"radial-gradient(ellipse 70% 60% at 85% 15%, rgba(200, 59, 59, 0.24), transparent 60%), radial-gradient(ellipse 65% 55% at 15% 75%, rgba(2, 132, 199, 0.25), transparent 65%), radial-gradient(circle 800px at 50% 20%, #131f31, #0a121e)","gridLineColor":"rgba(255, 255, 255, 0.04)","svgBeamGrad":["#0284c7","#0369a1","#0a121e"],"svgPlanesGrad":["#c83b3b","#8f2424","#0a121e"],"svgStreamlineGrad":["#0284c7","#38bdf8","#c83b3b","#992626"],"bracketColors":["#0284c7","#c83b3b"],"selectionBg":"rgba(2, 132, 199, 0.35)","selectionText":"#e0f2fe"},"light":{"canvasBg":"#e1ecf5","surfaceBg":"#eef5fb","surfaceHoverBg":"#e5f0f8","textPrimary":"#081524","textSecondary":"#1e354f","textMuted":"#3d5978","borderSubtle":"rgba(3, 105, 161, 0.40)","accentPrimary":"#0369a1","accentSecondary":"#c83b3b","accentTertiary":"#0369a1","heroGradient":"linear-gradient(135deg, #0284c7 0%, #0369a1 45%, #c83b3b 80%, #0a1d33 100%)","buttonBg":"#0369a1","buttonText":"#ffffff","buttonHoverBg":"#0369a1","buttonShadow":"rgba(2, 132, 199, 0.40)","causticGradients":"radial-gradient(ellipse 70% 60% at 85% 15%, rgba(2, 132, 199, 0.18), transparent 60%), radial-gradient(ellipse 65% 55% at 15% 75%, rgba(200, 59, 59, 0.14), transparent 65%), radial-gradient(circle 800px at 50% 20%, rgba(2, 132, 199, 0.10), #e1ecf5)","gridLineColor":"rgba(10, 29, 51, 0.06)","svgBeamGrad":["#0284c7","#38bdf8","#e1ecf5"],"svgPlanesGrad":["#c83b3b","#8f2424","#e1ecf5"],"svgStreamlineGrad":["#0284c7","#38bdf8","#c83b3b","#0369a1"],"bracketColors":["#0284c7","#c83b3b"],"selectionBg":"rgba(2, 132, 199, 0.25)","selectionText":"#075985"}}},
      localizedCopy: {
        eyebrow: "SALISH SEA MARITIME RUNTIMES · 47.6062°N · ELLIOTT BAY",
        headlineStart: "Uncompromising",
        headlineSuffix: "<span class=\"accent-word\">architecture.</span>",
        subtag: "// HIGH-CONSEQUENCE SYSTEMS · TIDAL BATCH PIPELINING · GLOBAL QUORUM CONSENSUS",
        badgeLeft: "• SALISH_SEA // SPRING · ACTIVE",
        lede: "We partner with principal technical founders to design, debug, and scale mission-critical platforms navigating turbulent market currents. From distributed consensus to zero-copy data pipelines.",
        col1: ["[01] SOUND PIPELINES", "High-concurrency tidal queue processing with sub-millisecond dispatch."],
        col2: ["[02] BASIN REPLICATION", "Cross-continental Raft consensus and Byzantine-fault-tolerant quorums."],
        col3: ["[03] TWILIGHT TELEMETRY", "Real-time distributed tracing, eBPF kernel probes, synthetic canary sweeps."]
      }
    },
    "olympic-larch": {
      slug: "olympic",
      name: "Olympic Larch",
      category: "place",
      tierType: "season",
      tierLabel: "Season",
      tierBadge: "SEASON",
      qualifierType: "season",
      defaultQualifierId: getCoarseSeason(),
      defaultMode: "dark",
      baseSkenes: {
        buttonTreatment: "double-wire",
        buttonTreatmentLabel: "Double-Wire Rim",
        cardRadius: "sharp",
        cardRadiusLabel: "Sharp 0px",
        heroFontLabel: "Unbounded Alpine Chisel",
        fontDisplay: "ui-sans-serif, system-ui, sans-serif",
        edgeStyle: "sharp",
        edgeLabel: "Chiseled Granite Edge"
      },
      alignedButton: "double-wire",
      alignedButtonTreatmentLabel: "Double-Wire Rim",
      alignedCardRadius: "sharp",
      heroFontLabel: "Unbounded Alpine Chisel",
      fontDisplay: "ui-sans-serif, system-ui, sans-serif",
      tiers: [
        {
          id: "season",
          name: "Season",
          badge: "SEASON",
          options: [
            { id: "spring", label: "Spring", canonicalLabel: "Spring", badge: "Spring", icon: "🌱", name: "Spring Thaw", description: "Glacial runoff, snowmelt streams, and nascent alpine growth" },
            { id: "summer", label: "Summer", canonicalLabel: "Summer", badge: "Summer", icon: "☀️", name: "High Summer", description: "Dry ridge trails, granite summits, and deep evergreen canopy" },
            { id: "fall",   label: "Fall",   canonicalLabel: "Fall",   badge: "Fall",   icon: "🍁", name: "Larch Madness", description: "High-country needle turning to blazing gold before the snows" },
            { id: "winter", label: "Winter", canonicalLabel: "Winter", badge: "Winter", icon: "❄️", name: "Alpine Frost", description: "Heavy powder on subalpine fir, silent high-altitude ridges" }
          ]
        }
      ],
      qualifiers: [
        { id: "spring", label: "Spring", canonicalLabel: "Spring", badge: "Spring", icon: "🌱", name: "Spring Thaw", description: "Glacial runoff, snowmelt streams, and nascent alpine growth" },
        { id: "summer", label: "Summer", canonicalLabel: "Summer", badge: "Summer", icon: "☀️", name: "High Summer", description: "Dry ridge trails, granite summits, and deep evergreen canopy" },
        { id: "fall",   label: "Fall",   canonicalLabel: "Fall",   badge: "Fall",   icon: "🍁", name: "Larch Madness", description: "High-country needle turning to blazing gold before the snows" },
        { id: "winter", label: "Winter", canonicalLabel: "Winter", badge: "Winter", icon: "❄️", name: "Alpine Frost", description: "Heavy powder on subalpine fir, silent high-altitude ridges" }
      ],
      palettes: {"spring":{"dark":{"canvasBg":"#131e1b","surfaceBg":"#1b2c27","surfaceHoverBg":"#233a34","textPrimary":"#f7faf8","textSecondary":"#c8ded5","textMuted":"#8dafa4","borderSubtle":"rgba(132, 204, 22, 0.38)","accentPrimary":"#84cc16","accentSecondary":"#06b6d4","accentTertiary":"#059669","heroGradient":"linear-gradient(135deg, #84cc16 0%, #06b6d4 55%, #f7faf8 100%)","buttonBg":"#65a30d","buttonText":"#ffffff","buttonHoverBg":"#4d7c0f","buttonShadow":"rgba(132, 204, 22, 0.45)","causticGradients":"radial-gradient(ellipse 75% 65% at 85% 15%, rgba(132, 204, 22, 0.24), transparent 60%), radial-gradient(ellipse 65% 55% at 15% 75%, rgba(6, 182, 212, 0.20), transparent 65%), radial-gradient(circle 800px at 50% 25%, #1b2c27, #131e1b)","gridLineColor":"rgba(255, 255, 255, 0.04)","svgBeamGrad":["#84cc16","#4d7c0f","#131e1b"],"svgPlanesGrad":["#06b6d4","#0891b2","#131e1b"],"svgStreamlineGrad":["#84cc16","#a3e635","#06b6d4","#0891b2"],"bracketColors":["#84cc16","#06b6d4"],"selectionBg":"rgba(132, 204, 22, 0.35)","selectionText":"#ecfccb"},"light":{"canvasBg":"#eaf2ea","surfaceBg":"#f4faf4","surfaceHoverBg":"#ebf4eb","textPrimary":"#101c12","textSecondary":"#283d2d","textMuted":"#47614c","borderSubtle":"rgba(63, 98, 18, 0.40)","accentPrimary":"#3f6212","accentSecondary":"#0891b2","accentTertiary":"#047857","heroGradient":"linear-gradient(135deg, #65a30d 0%, #0891b2 55%, #162319 100%)","buttonBg":"#3f6212","buttonText":"#ffffff","buttonHoverBg":"#4d7c0f","buttonShadow":"rgba(101, 163, 13, 0.38)","causticGradients":"radial-gradient(ellipse 75% 65% at 85% 15%, rgba(101, 163, 13, 0.16), transparent 60%), radial-gradient(ellipse 65% 55% at 15% 75%, rgba(8, 145, 178, 0.16), transparent 65%), radial-gradient(circle 800px at 50% 25%, rgba(101, 163, 13, 0.08), #eaf2ea)","gridLineColor":"rgba(22, 35, 25, 0.06)","svgBeamGrad":["#65a30d","#84cc16","#eaf2ea"],"svgPlanesGrad":["#0891b2","#06b6d4","#eaf2ea"],"svgStreamlineGrad":["#65a30d","#84cc16","#0891b2","#06b6d4"],"bracketColors":["#65a30d","#0891b2"],"selectionBg":"rgba(101, 163, 13, 0.22)","selectionText":"#365314"}},"summer":{"dark":{"canvasBg":"#131e1c","surfaceBg":"#1c2c29","surfaceHoverBg":"#253a36","textPrimary":"#f6faf9","textSecondary":"#cce2db","textMuted":"#90b5ab","borderSubtle":"rgba(16, 185, 129, 0.38)","accentPrimary":"#10b981","accentSecondary":"#6366f1","accentTertiary":"#047857","heroGradient":"linear-gradient(135deg, #10b981 0%, #6366f1 55%, #f6faf9 100%)","buttonBg":"#10b981","buttonText":"#ffffff","buttonHoverBg":"#059669","buttonShadow":"rgba(16, 185, 129, 0.45)","causticGradients":"radial-gradient(ellipse 75% 65% at 85% 15%, rgba(16, 185, 129, 0.24), transparent 60%), radial-gradient(ellipse 65% 55% at 15% 75%, rgba(99, 102, 241, 0.20), transparent 65%), radial-gradient(circle 800px at 50% 25%, #1c2c29, #131e1c)","gridLineColor":"rgba(255, 255, 255, 0.04)","svgBeamGrad":["#10b981","#059669","#131e1c"],"svgPlanesGrad":["#6366f1","#4f46e5","#131e1c"],"svgStreamlineGrad":["#10b981","#34d399","#6366f1","#4f46e5"],"bracketColors":["#10b981","#6366f1"],"selectionBg":"rgba(16, 185, 129, 0.35)","selectionText":"#d1fae5"},"light":{"canvasBg":"#edf2ed","surfaceBg":"#f7faf7","surfaceHoverBg":"#eef4ee","textPrimary":"#0e1c16","textSecondary":"#243d32","textMuted":"#416152","borderSubtle":"rgba(4, 120, 87, 0.40)","accentPrimary":"#047857","accentSecondary":"#2563eb","accentTertiary":"#047857","heroGradient":"linear-gradient(135deg, #059669 0%, #2563eb 55%, #14241e 100%)","buttonBg":"#047857","buttonText":"#ffffff","buttonHoverBg":"#047857","buttonShadow":"rgba(5, 150, 105, 0.38)","causticGradients":"radial-gradient(ellipse 75% 65% at 85% 15%, rgba(5, 150, 105, 0.16), transparent 60%), radial-gradient(ellipse 65% 55% at 15% 75%, rgba(37, 99, 235, 0.14), transparent 65%), radial-gradient(circle 800px at 50% 25%, rgba(5, 150, 105, 0.08), #edf2ed)","gridLineColor":"rgba(20, 36, 30, 0.06)","svgBeamGrad":["#059669","#10b981","#edf2ed"],"svgPlanesGrad":["#2563eb","#1d4ed8","#edf2ed"],"svgStreamlineGrad":["#059669","#10b981","#2563eb","#1d4ed8"],"bracketColors":["#059669","#2563eb"],"selectionBg":"rgba(5, 150, 105, 0.22)","selectionText":"#064e3b"}},"fall":{"dark":{"canvasBg":"#151b1e","surfaceBg":"#1e272b","surfaceHoverBg":"#273338","textPrimary":"#f8fafc","textSecondary":"#cbd5e1","textMuted":"#94a3b8","borderSubtle":"rgba(245, 158, 11, 0.38)","accentPrimary":"#f59e0b","accentSecondary":"#10b981","accentTertiary":"#c83b3b","heroGradient":"linear-gradient(135deg, #f59e0b 0%, #fbbf24 45%, #10b981 80%, #f8fafc 100%)","buttonBg":"#d97706","buttonText":"#ffffff","buttonHoverBg":"#b45309","buttonShadow":"rgba(245, 158, 11, 0.45)","causticGradients":"radial-gradient(ellipse 75% 65% at 85% 15%, rgba(245, 158, 11, 0.26), transparent 60%), radial-gradient(ellipse 65% 55% at 15% 75%, rgba(16, 185, 129, 0.20), transparent 65%), radial-gradient(circle 800px at 50% 25%, #1e272b, #151b1e)","gridLineColor":"rgba(255, 255, 255, 0.04)","svgBeamGrad":["#10b981","#059669","#151b1e"],"svgPlanesGrad":["#f59e0b","#c83b3b","#151b1e"],"svgStreamlineGrad":["#10b981","#34d399","#f59e0b","#fbbf24"],"bracketColors":["#10b981","#f59e0b"],"selectionBg":"rgba(245, 158, 11, 0.35)","selectionText":"#fef3c7"},"light":{"canvasBg":"#f6f1e3","surfaceBg":"#fdfaf2","surfaceHoverBg":"#f9f4e8","textPrimary":"#141610","textSecondary":"#313322","textMuted":"#52533c","borderSubtle":"rgba(146, 64, 14, 0.42)","accentPrimary":"#b45309","accentSecondary":"#059669","accentTertiary":"#b91c1c","heroGradient":"linear-gradient(135deg, #d97706 0%, #b45309 45%, #059669 80%, #22231b 100%)","buttonBg":"#92400e","buttonText":"#ffffff","buttonHoverBg":"#b45309","buttonShadow":"rgba(217, 119, 6, 0.40)","causticGradients":"radial-gradient(ellipse 75% 65% at 85% 15%, rgba(217, 119, 6, 0.18), transparent 60%), radial-gradient(ellipse 65% 55% at 15% 75%, rgba(5, 150, 105, 0.15), transparent 65%), radial-gradient(circle 800px at 50% 25%, rgba(217, 119, 6, 0.08), #f6f1e3)","gridLineColor":"rgba(34, 35, 27, 0.06)","svgBeamGrad":["#059669","#10b981","#f6f1e3"],"svgPlanesGrad":["#d97706","#b91c1c","#f6f1e3"],"svgStreamlineGrad":["#059669","#d97706","#b45309","#b91c1c"],"bracketColors":["#059669","#d97706"],"selectionBg":"rgba(217, 119, 6, 0.25)","selectionText":"#92400e"}},"winter":{"dark":{"canvasBg":"#0e151e","surfaceBg":"#15212e","surfaceHoverBg":"#1d2b3c","textPrimary":"#f2f7fc","textSecondary":"#c0d4e8","textMuted":"#7c9bb9","borderSubtle":"rgba(56, 189, 248, 0.38)","accentPrimary":"#38bdf8","accentSecondary":"#d97706","accentTertiary":"#0284c7","heroGradient":"linear-gradient(135deg, #38bdf8 0%, #0284c7 55%, #f2f7fc 100%)","buttonBg":"#0284c7","buttonText":"#ffffff","buttonHoverBg":"#0369a1","buttonShadow":"rgba(56, 189, 248, 0.45)","causticGradients":"radial-gradient(ellipse 75% 65% at 85% 15%, rgba(56, 189, 248, 0.26), transparent 60%), radial-gradient(ellipse 65% 55% at 15% 75%, rgba(217, 119, 6, 0.20), transparent 65%), radial-gradient(circle 800px at 50% 25%, #15212e, #0e151e)","gridLineColor":"rgba(255, 255, 255, 0.04)","svgBeamGrad":["#38bdf8","#0284c7","#0e151e"],"svgPlanesGrad":["#d97706","#b45309","#0e151e"],"svgStreamlineGrad":["#38bdf8","#7dd3fc","#d97706","#b45309"],"bracketColors":["#38bdf8","#d97706"],"selectionBg":"rgba(56, 189, 248, 0.35)","selectionText":"#e0f2fe"},"light":{"canvasBg":"#e1eaf3","surfaceBg":"#eff5fa","surfaceHoverBg":"#e4edf5","textPrimary":"#0a1722","textSecondary":"#203649","textMuted":"#40586e","borderSubtle":"rgba(3, 105, 161, 0.40)","accentPrimary":"#0369a1","accentSecondary":"#1e40af","accentTertiary":"#d97706","heroGradient":"linear-gradient(135deg, #0284c7 0%, #1e40af 55%, #0f1f2e 100%)","buttonBg":"#0369a1","buttonText":"#ffffff","buttonHoverBg":"#0369a1","buttonShadow":"rgba(2, 132, 199, 0.38)","causticGradients":"radial-gradient(ellipse 75% 65% at 85% 15%, rgba(2, 132, 199, 0.18), transparent 60%), radial-gradient(ellipse 65% 55% at 15% 75%, rgba(30, 64, 175, 0.16), transparent 65%), radial-gradient(circle 800px at 50% 25%, rgba(2, 132, 199, 0.08), #e1eaf3)","gridLineColor":"rgba(15, 31, 46, 0.06)","svgBeamGrad":["#0284c7","#38bdf8","#e1eaf3"],"svgPlanesGrad":["#1e40af","#1d4ed8","#e1eaf3"],"svgStreamlineGrad":["#0284c7","#38bdf8","#1e40af","#1d4ed8"],"bracketColors":["#0284c7","#1e40af"],"selectionBg":"rgba(2, 132, 199, 0.22)","selectionText":"#0c4a6e"}}},
      localizedCopy: {
        eyebrow: "OLYMPIC MOUNTAIN RANGE · 47.8012°N · LARIX HIGH DIVIDE",
        headlineStart: "Alpine",
        headlineSuffix: "<span class=\"accent-word\">concurrency.</span>",
        subtag: "// SUBALPINE HIGH DIVIDE · SCREE-CHAMFER KERNELS · GLACIAL RELIABILITY",
        badgeLeft: "• OLYMPIC // HIGH_DIVIDE · ACTIVE",
        lede: "Engineered for subalpine environments. High-altitude computing backbones with rigid error boundaries and predictable performance.",
        col1: ["[01] PEAK PERFORMANCE", "Low-jitter transaction schedulers tuned for harsh adversarial workloads."],
        col2: ["[02] SEASONAL FAILOVER", "Predictable partition recovery models that ensure state consistency through storms."],
        col3: ["[03] CASCADE BENCHMARKS", "Rigorous stress validation replicating real-world high-altitude hardware degradation."]
      }
    },
    "lopez-madrone": {
      slug: "lopez",
      name: "Lopez Madrone",
      category: "place",
      tierType: "season",
      tierLabel: "Season",
      tierBadge: "SEASON",
      qualifierType: "season",
      defaultQualifierId: getCoarseSeason(),
      defaultMode: "dark",
      baseSkenes: {
        buttonTreatment: "solid-glow",
        buttonTreatmentLabel: "Ambient Warm Glow",
        cardRadius: "rounded",
        cardRadiusLabel: "Rounded 16px",
        heroFontLabel: "Fraunces Handcrafted Serif",
        fontDisplay: "ui-sans-serif, system-ui, sans-serif",
        edgeStyle: "rounded",
        edgeLabel: "Smooth Madrone Contour 16px"
      },
      alignedButton: "solid-glow",
      alignedButtonTreatmentLabel: "Ambient Warm Glow",
      alignedCardRadius: "rounded",
      heroFontLabel: "Fraunces Handcrafted Serif",
      fontDisplay: "ui-sans-serif, system-ui, sans-serif",
      tiers: [
        {
          id: "season",
          name: "Season",
          badge: "SEASON",
          options: [
            { id: "spring", label: "Spring", canonicalLabel: "Spring", badge: "Spring", icon: "🌱", name: "Spring Bloom", description: "Wildflowers on coastal bluffs, mild channel winds" },
            { id: "summer", label: "Summer", canonicalLabel: "Summer", badge: "Summer", icon: "☀️", name: "Summer Solstice", description: "Sun-drenched sandstone, peeling terra cotta bark, warm salt air" },
            { id: "fall",   label: "Fall",   canonicalLabel: "Fall",   badge: "Fall",   icon: "🍁", name: "Autumn Gale", description: "Southwesterly gusts, red berries on madrones, stormy passes" },
            { id: "winter", label: "Winter", canonicalLabel: "Winter", badge: "Winter", icon: "❄️", name: "Winter Drizzle", description: "Wood smoke across island pastures, quiet harbor fog" }
          ]
        }
      ],
      qualifiers: [
        { id: "spring", label: "Spring", canonicalLabel: "Spring", badge: "Spring", icon: "🌱", name: "Spring Bloom", description: "Wildflowers on coastal bluffs, mild channel winds" },
        { id: "summer", label: "Summer", canonicalLabel: "Summer", badge: "Summer", icon: "☀️", name: "Summer Solstice", description: "Sun-drenched sandstone, peeling terra cotta bark, warm salt air" },
        { id: "fall",   label: "Fall",   canonicalLabel: "Fall",   badge: "Fall",   icon: "🍁", name: "Autumn Gale", description: "Southwesterly gusts, red berries on madrones, stormy passes" },
        { id: "winter", label: "Winter", canonicalLabel: "Winter", badge: "Winter", icon: "❄️", name: "Winter Drizzle", description: "Wood smoke across island pastures, quiet harbor fog" }
      ],
      palettes: {"spring":{"dark":{"canvasBg":"#15241b","surfaceBg":"#1d3226","surfaceHoverBg":"#253e30","textPrimary":"#f5faf6","textSecondary":"#c8ddce","textMuted":"#8dae97","borderSubtle":"rgba(239, 68, 68, 0.35)","accentPrimary":"#f87171","accentSecondary":"#4ade80","accentTertiary":"#15803d","heroGradient":"linear-gradient(135deg, #f87171 0%, #4ade80 55%, #f5faf6 100%)","buttonBg":"#ef4444","buttonText":"#ffffff","buttonHoverBg":"#dc2626","buttonShadow":"rgba(239, 68, 68, 0.45)","causticGradients":"radial-gradient(ellipse 75% 65% at 85% 15%, rgba(248, 113, 113, 0.22), transparent 60%), radial-gradient(ellipse 65% 55% at 15% 75%, rgba(74, 222, 128, 0.22), transparent 65%), radial-gradient(circle 800px at 50% 25%, #1d3226, #15241b)","gridLineColor":"rgba(255, 255, 255, 0.045)","svgBeamGrad":["#4ade80","#15803d","#15241b"],"svgPlanesGrad":["#f87171","#ef4444","#15241b"],"svgStreamlineGrad":["#4ade80","#86efac","#f87171","#ef4444"],"bracketColors":["#4ade80","#f87171"],"selectionBg":"rgba(239, 68, 68, 0.35)","selectionText":"#fee2e2"},"light":{"canvasBg":"#ede8dd","surfaceBg":"#f7f3ea","surfaceHoverBg":"#eee9dd","textPrimary":"#121c13","textSecondary":"#2b3e2e","textMuted":"#4c6150","borderSubtle":"rgba(153, 27, 27, 0.40)","accentPrimary":"#991b1b","accentSecondary":"#15803d","accentTertiary":"#166534","heroGradient":"linear-gradient(135deg, #dc2626 0%, #15803d 55%, #1a241c 100%)","buttonBg":"#991b1b","buttonText":"#ffffff","buttonHoverBg":"#b91c1c","buttonShadow":"rgba(220, 38, 38, 0.38)","causticGradients":"radial-gradient(ellipse 75% 65% at 85% 15%, rgba(220, 38, 38, 0.16), transparent 60%), radial-gradient(ellipse 65% 55% at 15% 75%, rgba(21, 128, 61, 0.16), transparent 65%), radial-gradient(circle 800px at 50% 25%, rgba(220, 38, 38, 0.08), #ede8dd)","gridLineColor":"rgba(26, 36, 28, 0.06)","svgBeamGrad":["#15803d","#22c55e","#ede8dd"],"svgPlanesGrad":["#dc2626","#b91c1c","#ede8dd"],"svgStreamlineGrad":["#15803d","#4ade80","#dc2626","#b91c1c"],"bracketColors":["#15803d","#dc2626"],"selectionBg":"rgba(220, 38, 38, 0.22)","selectionText":"#7f1d1d"}},"summer":{"dark":{"canvasBg":"#1f241d","surfaceBg":"#2a3227","surfaceHoverBg":"#343e31","textPrimary":"#f6f9f4","textSecondary":"#d0ddd0","textMuted":"#96ab98","borderSubtle":"rgba(200, 59, 59, 0.35)","accentPrimary":"#c83b3b","accentSecondary":"#34d399","accentTertiary":"#8f2424","heroGradient":"linear-gradient(135deg, #db4d4d 0%, #ea7575 45%, #6ee7b7 85%, #f6f9f4 100%)","buttonBg":"#c83b3b","buttonText":"#ffffff","buttonHoverBg":"#ad2e2e","buttonShadow":"rgba(200, 59, 59, 0.45)","causticGradients":"radial-gradient(ellipse 75% 65% at 85% 15%, rgba(200, 59, 59, 0.24), transparent 60%), radial-gradient(ellipse 65% 55% at 15% 75%, rgba(52, 211, 153, 0.18), transparent 65%), radial-gradient(circle 800px at 50% 25%, #2a3227, #1f241d)","gridLineColor":"rgba(255, 255, 255, 0.045)","svgBeamGrad":["#34d399","#059669","#1f241d"],"svgPlanesGrad":["#c83b3b","#8f2424","#1f241d"],"svgStreamlineGrad":["#34d399","#6ee7b7","#c83b3b","#a82d2d"],"bracketColors":["#34d399","#c83b3b"],"selectionBg":"rgba(200, 59, 59, 0.35)","selectionText":"#fee2e2"},"light":{"canvasBg":"#f5ece0","surfaceBg":"#fdf8f0","surfaceHoverBg":"#f9f2e4","textPrimary":"#1a100d","textSecondary":"#3d2621","textMuted":"#63453e","borderSubtle":"rgba(154, 52, 18, 0.40)","accentPrimary":"#9a3412","accentSecondary":"#16a34a","accentTertiary":"#851c1c","heroGradient":"linear-gradient(135deg, #c43b35 0%, #a82d2d 45%, #16a34a 80%, #261814 100%)","buttonBg":"#9a3412","buttonText":"#ffffff","buttonHoverBg":"#aa2f2a","buttonShadow":"rgba(196, 59, 53, 0.38)","causticGradients":"radial-gradient(ellipse 75% 65% at 85% 15%, rgba(196, 59, 53, 0.16), transparent 60%), radial-gradient(ellipse 65% 55% at 15% 75%, rgba(22, 163, 74, 0.14), transparent 65%), radial-gradient(circle 800px at 50% 25%, rgba(196, 59, 53, 0.08), #f5ece0)","gridLineColor":"rgba(38, 24, 20, 0.06)","svgBeamGrad":["#16a34a","#22c55e","#f5ece0"],"svgPlanesGrad":["#c43b35","#851c1c","#f5ece0"],"svgStreamlineGrad":["#16a34a","#4ade80","#c43b35","#851c1c"],"bracketColors":["#16a34a","#c43b35"],"selectionBg":"rgba(196, 59, 53, 0.25)","selectionText":"#851c1c"}},"fall":{"dark":{"canvasBg":"#231a16","surfaceBg":"#30241f","surfaceHoverBg":"#3d2e28","textPrimary":"#fbf4ef","textSecondary":"#dccec6","textMuted":"#a38f85","borderSubtle":"rgba(217, 119, 6, 0.38)","accentPrimary":"#b91c1c","accentSecondary":"#f59e0b","accentTertiary":"#78350f","heroGradient":"linear-gradient(135deg, #b91c1c 0%, #f59e0b 55%, #fbf4ef 100%)","buttonBg":"#b91c1c","buttonText":"#ffffff","buttonHoverBg":"#991b1b","buttonShadow":"rgba(185, 28, 28, 0.45)","causticGradients":"radial-gradient(ellipse 75% 65% at 85% 15%, rgba(185, 28, 28, 0.24), transparent 60%), radial-gradient(ellipse 65% 55% at 15% 75%, rgba(245, 158, 11, 0.22), transparent 65%), radial-gradient(circle 800px at 50% 25%, #30241f, #231a16)","gridLineColor":"rgba(255, 255, 255, 0.045)","svgBeamGrad":["#f59e0b","#d97706","#231a16"],"svgPlanesGrad":["#b91c1c","#78350f","#231a16"],"svgStreamlineGrad":["#f59e0b","#fbbf24","#b91c1c","#78350f"],"bracketColors":["#f59e0b","#b91c1c"],"selectionBg":"rgba(185, 28, 28, 0.35)","selectionText":"#fee2e2"},"light":{"canvasBg":"#f2e8d5","surfaceBg":"#faf2e2","surfaceHoverBg":"#f2e7d3","textPrimary":"#18100a","textSecondary":"#382315","textMuted":"#5e422f","borderSubtle":"rgba(153, 27, 27, 0.42)","accentPrimary":"#991b1b","accentSecondary":"#d97706","accentTertiary":"#b45309","heroGradient":"linear-gradient(135deg, #991b1b 0%, #d97706 50%, #261b12 100%)","buttonBg":"#991b1b","buttonText":"#ffffff","buttonHoverBg":"#7f1d1d","buttonShadow":"rgba(153, 27, 27, 0.38)","causticGradients":"radial-gradient(ellipse 75% 65% at 85% 15%, rgba(153, 27, 27, 0.18), transparent 60%), radial-gradient(ellipse 65% 55% at 15% 75%, rgba(217, 119, 6, 0.16), transparent 65%), radial-gradient(circle 800px at 50% 25%, rgba(153, 27, 27, 0.08), #f2e8d5)","gridLineColor":"rgba(38, 27, 18, 0.06)","svgBeamGrad":["#d97706","#b45309","#f2e8d5"],"svgPlanesGrad":["#991b1b","#7f1d1d","#f2e8d5"],"svgStreamlineGrad":["#d97706","#f59e0b","#991b1b","#7f1d1d"],"bracketColors":["#d97706","#991b1b"],"selectionBg":"rgba(153, 27, 27, 0.22)","selectionText":"#7f1d1d"}},"winter":{"dark":{"canvasBg":"#121c15","surfaceBg":"#1b2a20","surfaceHoverBg":"#23362a","textPrimary":"#f2f8f4","textSecondary":"#c6ded0","textMuted":"#85a894","borderSubtle":"rgba(153, 27, 27, 0.40)","accentPrimary":"#991b1b","accentSecondary":"#10b981","accentTertiary":"#047857","heroGradient":"linear-gradient(135deg, #dc2626 0%, #10b981 55%, #f2f8f4 100%)","buttonBg":"#991b1b","buttonText":"#ffffff","buttonHoverBg":"#7f1d1d","buttonShadow":"rgba(153, 27, 27, 0.48)","causticGradients":"radial-gradient(ellipse 75% 65% at 85% 15%, rgba(153, 27, 27, 0.25), transparent 60%), radial-gradient(ellipse 65% 55% at 15% 75%, rgba(16, 185, 129, 0.22), transparent 65%), radial-gradient(circle 800px at 50% 25%, #1b2a20, #121c15)","gridLineColor":"rgba(255, 255, 255, 0.04)","svgBeamGrad":["#10b981","#047857","#121c15"],"svgPlanesGrad":["#991b1b","#7f1d1d","#121c15"],"svgStreamlineGrad":["#10b981","#34d399","#991b1b","#7f1d1d"],"bracketColors":["#10b981","#991b1b"],"selectionBg":"rgba(153, 27, 27, 0.35)","selectionText":"#fee2e2"},"light":{"canvasBg":"#e0eae3","surfaceBg":"#ecf4ef","surfaceHoverBg":"#e2ece5","textPrimary":"#0c1b12","textSecondary":"#243b2d","textMuted":"#435d4d","borderSubtle":"rgba(136, 19, 55, 0.40)","accentPrimary":"#881337","accentSecondary":"#047857","accentTertiary":"#0f766e","heroGradient":"linear-gradient(135deg, #881337 0%, #047857 55%, #112218 100%)","buttonBg":"#881337","buttonText":"#ffffff","buttonHoverBg":"#700f2d","buttonShadow":"rgba(136, 19, 55, 0.38)","causticGradients":"radial-gradient(ellipse 75% 65% at 85% 15%, rgba(136, 19, 55, 0.16), transparent 60%), radial-gradient(ellipse 65% 55% at 15% 75%, rgba(4, 120, 87, 0.16), transparent 65%), radial-gradient(circle 800px at 50% 25%, rgba(136, 19, 55, 0.08), #e0eae3)","gridLineColor":"rgba(17, 34, 24, 0.06)","svgBeamGrad":["#047857","#10b981","#e0eae3"],"svgPlanesGrad":["#881337","#4c0519","#e0eae3"],"svgStreamlineGrad":["#047857","#059669","#881337","#4c0519"],"bracketColors":["#047857","#881337"],"selectionBg":"rgba(136, 19, 55, 0.22)","selectionText":"#4c0519"}}},
      localizedCopy: {
        eyebrow: "SAN JUAN ARCHIPELAGO · 48.4871°N · LOPEZ BLUFF",
        headlineStart: "Resilient",
        headlineSuffix: "<span class=\"accent-word\">foundations.</span>",
        subtag: "// WEATHERED TERRACOTTA RUNTIMES · SALINE RESISTANT PROTOCOLS · PEELING CAMBIUM BUFFERS",
        badgeLeft: "• ARCHIPELAGO // LOPEZ_MADRONE",
        lede: "Architectures shaped by marine winds and rocky shores. Resilient distributed systems that withstand persistent node churn and unpredictable network partitions.",
        col1: ["[01] BLUFF FABRICS", "Fault-tolerant peer topologies surviving intermittent oceanic transit lines."],
        col2: ["[02] CAMBIUM BUFFERS", "Smooth layer shedding and adaptive self-healing under sudden traffic spikes."],
        col3: ["[03] BASIN VERIFICATION", "Formal guarantees ensuring cross-island data stores remain mutually consistent."]
      }
    },
    "fort-worden-mist": {
      slug: "worden",
      name: "Fort Worden Mist",
      category: "place",
      tierType: "season",
      tierLabel: "Season",
      tierBadge: "SEASON",
      qualifierType: "season",
      defaultQualifierId: getCoarseSeason(),
      defaultMode: "light",
      baseSkenes: {
        buttonTreatment: "concrete-strop",
        buttonTreatmentLabel: "Concrete Slab",
        cardRadius: "sharp",
        cardRadiusLabel: "Sharp 0px",
        heroFontLabel: "Oswald Military Monolith",
        fontDisplay: "ui-sans-serif, system-ui, sans-serif",
        edgeStyle: "military-slab",
        edgeLabel: "Cast Gun-Emplacement Concrete"
      },
      alignedButton: "concrete-strop",
      alignedButtonTreatmentLabel: "Concrete Slab",
      alignedCardRadius: "sharp",
      heroFontLabel: "Oswald Military Monolith",
      fontDisplay: "ui-sans-serif, system-ui, sans-serif",
      tiers: [
        {
          id: "season",
          name: "Season",
          badge: "SEASON",
          options: [
            { id: "spring", label: "Spring", canonicalLabel: "Spring", badge: "Spring", icon: "🌱", name: "Point Wilson Fog", description: "Thick sea fog clinging to coastal battery walls and lighthouse" },
            { id: "summer", label: "Summer", canonicalLabel: "Summer", badge: "Summer", icon: "☀️", name: "Strait Breeze", description: "Clear views across to Whidbey, dry coastal grasses on bunkers" },
            { id: "fall",   label: "Fall",   canonicalLabel: "Fall",   badge: "Fall",   icon: "🍁", name: "Bonfire Smoke", description: "Low fog creeping through artillery corridors, rusted ironworks" },
            { id: "winter", label: "Winter", canonicalLabel: "Winter", badge: "Winter", icon: "❄️", name: "Nocturnal Gale", description: "Winter breakers pounding the Point Wilson shoal, dark surveillance" }
          ]
        }
      ],
      qualifiers: [
        { id: "spring", label: "Spring", canonicalLabel: "Spring", badge: "Spring", icon: "🌱", name: "Point Wilson Fog", description: "Thick sea fog clinging to coastal battery walls and lighthouse" },
        { id: "summer", label: "Summer", canonicalLabel: "Summer", badge: "Summer", icon: "☀️", name: "Strait Breeze", description: "Clear views across to Whidbey, dry coastal grasses on bunkers" },
        { id: "fall",   label: "Fall",   canonicalLabel: "Fall",   badge: "Fall",   icon: "🍁", name: "Bonfire Smoke", description: "Low fog creeping through artillery corridors, rusted ironworks" },
        { id: "winter", label: "Winter", canonicalLabel: "Winter", badge: "Winter", icon: "❄️", name: "Nocturnal Gale", description: "Winter breakers pounding the Point Wilson shoal, dark surveillance" }
      ],
      palettes: {"spring":{"dark":{"canvasBg":"#121517","surfaceBg":"#1a1f23","surfaceHoverBg":"#22292f","textPrimary":"#e6edf0","textSecondary":"#9bb0bb","textMuted":"#627581","borderSubtle":"rgba(168, 56, 48, 0.40)","accentPrimary":"#a83830","accentSecondary":"#556854","accentTertiary":"#5d707c","heroGradient":"linear-gradient(135deg, #b8433a 0%, #556854 50%, #e6edf0 100%)","buttonBg":"#9c322b","buttonText":"#ffffff","buttonHoverBg":"#842923","buttonShadow":"rgba(156, 50, 43, 0.38)","causticGradients":"radial-gradient(ellipse 75% 65% at 90% 12%, rgba(156, 50, 43, 0.16), transparent 60%), radial-gradient(ellipse 70% 60% at 8% 85%, rgba(85, 104, 84, 0.20), transparent 65%), radial-gradient(circle 800px at 50% 25%, #1a1f23, #121517)","gridLineColor":"rgba(230, 237, 240, 0.04)","svgBeamGrad":["#a83830","#556854","#121517"],"svgPlanesGrad":["#556854","#5d707c","#121517"],"svgStreamlineGrad":["#a83830","#556854","#5d707c","#842923"],"bracketColors":["#556854","#a83830"],"selectionBg":"rgba(168, 56, 48, 0.35)","selectionText":"#fcedec"},"light":{"canvasBg":"#d5dbd7","surfaceBg":"#e2e8e4","surfaceHoverBg":"#d8dfdb","textPrimary":"#0f1512","textSecondary":"#29342f","textMuted":"#495650","borderSubtle":"rgba(127, 29, 29, 0.40)","accentPrimary":"#7f1d1d","accentSecondary":"#4b5a4a","accentTertiary":"#50616a","heroGradient":"linear-gradient(135deg, #8e2c26 0%, #4b5a4a 55%, #151b18 100%)","buttonBg":"#7f1d1d","buttonText":"#ffffff","buttonHoverBg":"#75221d","buttonShadow":"rgba(142, 44, 38, 0.32)","causticGradients":"radial-gradient(ellipse 75% 65% at 90% 12%, rgba(142, 44, 38, 0.12), transparent 60%), radial-gradient(ellipse 70% 60% at 8% 85%, rgba(75, 90, 74, 0.14), transparent 65%), radial-gradient(circle 800px at 50% 25%, rgba(21, 27, 24, 0.05), #d5dbd7)","gridLineColor":"rgba(21, 27, 24, 0.06)","svgBeamGrad":["#8e2c26","#4b5a4a","#d5dbd7"],"svgPlanesGrad":["#4b5a4a","#50616a","#d5dbd7"],"svgStreamlineGrad":["#8e2c26","#4b5a4a","#50616a","#75221d"],"bracketColors":["#4b5a4a","#8e2c26"],"selectionBg":"rgba(142, 44, 38, 0.22)","selectionText":"#6b1914"}},"summer":{"dark":{"canvasBg":"#171816","surfaceBg":"#212320","surfaceHoverBg":"#2b2d29","textPrimary":"#f4f2ec","textSecondary":"#c8c4b6","textMuted":"#888373","borderSubtle":"rgba(181, 136, 61, 0.38)","accentPrimary":"#b5883d","accentSecondary":"#5c684d","accentTertiary":"#4d5e6b","heroGradient":"linear-gradient(135deg, #c79747 0%, #5c684d 50%, #f4f2ec 100%)","buttonBg":"#a57930","buttonText":"#ffffff","buttonHoverBg":"#8c6525","buttonShadow":"rgba(165, 121, 48, 0.38)","causticGradients":"radial-gradient(ellipse 75% 65% at 90% 12%, rgba(181, 136, 61, 0.18), transparent 60%), radial-gradient(ellipse 70% 60% at 8% 85%, rgba(92, 104, 77, 0.18), transparent 65%), radial-gradient(circle 800px at 50% 25%, #212320, #171816)","gridLineColor":"rgba(244, 242, 236, 0.04)","svgBeamGrad":["#b5883d","#5c684d","#171816"],"svgPlanesGrad":["#5c684d","#4d5e6b","#171816"],"svgStreamlineGrad":["#b5883d","#d4a85b","#5c684d","#4d5e6b"],"bracketColors":["#5c684d","#b5883d"],"selectionBg":"rgba(181, 136, 61, 0.35)","selectionText":"#fffbeb"},"light":{"canvasBg":"#e0ded6","surfaceBg":"#ece9e1","surfaceHoverBg":"#e2ded6","textPrimary":"#151412","textSecondary":"#35322c","textMuted":"#575249","borderSubtle":"rgba(120, 53, 15, 0.40)","accentPrimary":"#78350f","accentSecondary":"#4e5a42","accentTertiary":"#485966","heroGradient":"linear-gradient(135deg, #916b2d 0%, #4e5a42 55%, #1c1b18 100%)","buttonBg":"#78350f","buttonText":"#ffffff","buttonHoverBg":"#73531e","buttonShadow":"rgba(140, 103, 41, 0.30)","causticGradients":"radial-gradient(ellipse 75% 65% at 90% 12%, rgba(145, 107, 45, 0.12), transparent 60%), radial-gradient(ellipse 70% 60% at 8% 85%, rgba(78, 90, 66, 0.14), transparent 65%), radial-gradient(circle 800px at 50% 25%, rgba(28, 27, 24, 0.05), #e0ded6)","gridLineColor":"rgba(28, 27, 24, 0.05)","svgBeamGrad":["#916b2d","#4e5a42","#e0ded6"],"svgPlanesGrad":["#4e5a42","#485966","#e0ded6"],"svgStreamlineGrad":["#916b2d","#ab8038","#4e5a42","#73531e"],"bracketColors":["#4e5a42","#916b2d"],"selectionBg":"rgba(145, 107, 45, 0.22)","selectionText":"#5e4213"}},"fall":{"dark":{"canvasBg":"#141414","surfaceBg":"#1c1d1d","surfaceHoverBg":"#252727","textPrimary":"#f0eeea","textSecondary":"#bcb7ad","textMuted":"#7c776c","borderSubtle":"rgba(158, 53, 43, 0.38)","accentPrimary":"#9e352b","accentSecondary":"#966d32","accentTertiary":"#444f56","heroGradient":"linear-gradient(135deg, #ab3c32 0%, #966d32 50%, #f0eeea 100%)","buttonBg":"#923026","buttonText":"#ffffff","buttonHoverBg":"#7a261e","buttonShadow":"rgba(146, 48, 38, 0.40)","causticGradients":"radial-gradient(ellipse 75% 65% at 90% 12%, rgba(158, 53, 43, 0.18), transparent 60%), radial-gradient(ellipse 70% 60% at 8% 85%, rgba(150, 109, 50, 0.18), transparent 65%), radial-gradient(circle 800px at 50% 25%, #1c1d1d, #141414)","gridLineColor":"rgba(240, 238, 234, 0.04)","svgBeamGrad":["#9e352b","#966d32","#141414"],"svgPlanesGrad":["#966d32","#444f56","#141414"],"svgStreamlineGrad":["#9e352b","#c04a3f","#966d32","#444f56"],"bracketColors":["#966d32","#9e352b"],"selectionBg":"rgba(158, 53, 43, 0.35)","selectionText":"#fee2e2"},"light":{"canvasBg":"#dedad4","surfaceBg":"#eae7e1","surfaceHoverBg":"#dedbd5","textPrimary":"#11110f","textSecondary":"#2f2e29","textMuted":"#4f4c44","borderSubtle":"rgba(117, 34, 25, 0.45)","accentPrimary":"#752219","accentSecondary":"#7a5825","accentTertiary":"#46525a","heroGradient":"linear-gradient(135deg, #8a2c22 0%, #7a5825 50%, #181816 100%)","buttonBg":"#752219","buttonText":"#ffffff","buttonHoverBg":"#702119","buttonShadow":"rgba(138, 44, 34, 0.32)","causticGradients":"radial-gradient(ellipse 75% 65% at 90% 12%, rgba(138, 44, 34, 0.12), transparent 60%), radial-gradient(ellipse 70% 60% at 8% 85%, rgba(122, 88, 37, 0.14), transparent 65%), radial-gradient(circle 800px at 50% 25%, rgba(24, 24, 22, 0.05), #dedad4)","gridLineColor":"rgba(24, 24, 22, 0.06)","svgBeamGrad":["#8a2c22","#7a5825","#dedad4"],"svgPlanesGrad":["#7a5825","#46525a","#dedad4"],"svgStreamlineGrad":["#8a2c22","#7a5825","#46525a","#702119"],"bracketColors":["#7a5825","#8a2c22"],"selectionBg":"rgba(138, 44, 34, 0.22)","selectionText":"#68170f"}},"winter":{"dark":{"canvasBg":"#0e1216","surfaceBg":"#151b21","surfaceHoverBg":"#1d242c","textPrimary":"#eaf0f5","textSecondary":"#9eb2c2","textMuted":"#627585","borderSubtle":"rgba(155, 48, 42, 0.40)","accentPrimary":"#9b302a","accentSecondary":"#4e6578","accentTertiary":"#7c683b","heroGradient":"linear-gradient(135deg, #ab3831 0%, #4e6578 55%, #eaf0f5 100%)","buttonBg":"#912b25","buttonText":"#ffffff","buttonHoverBg":"#78221d","buttonShadow":"rgba(145, 43, 37, 0.40)","causticGradients":"radial-gradient(ellipse 75% 65% at 90% 12%, rgba(155, 48, 42, 0.18), transparent 60%), radial-gradient(ellipse 70% 60% at 8% 85%, rgba(78, 101, 120, 0.20), transparent 65%), radial-gradient(circle 800px at 50% 25%, #151b21, #0e1216)","gridLineColor":"rgba(234, 240, 245, 0.04)","svgBeamGrad":["#9b302a","#4e6578","#0e1216"],"svgPlanesGrad":["#4e6578","#7c683b","#0e1216"],"svgStreamlineGrad":["#9b302a","#ab3831","#4e6578","#7c683b"],"bracketColors":["#4e6578","#9b302a"],"selectionBg":"rgba(155, 48, 42, 0.35)","selectionText":"#fee2e2"},"light":{"canvasBg":"#d2d8de","surfaceBg":"#e0e6ec","surfaceHoverBg":"#d6dce2","textPrimary":"#091016","textSecondary":"#202c38","textMuted":"#404f5e","borderSubtle":"rgba(127, 29, 29, 0.40)","accentPrimary":"#7f1d1d","accentSecondary":"#3d5060","accentTertiary":"#6b5830","heroGradient":"linear-gradient(135deg, #85241e 0%, #3d5060 55%, #0d151c 100%)","buttonBg":"#7f1d1d","buttonText":"#ffffff","buttonHoverBg":"#6c1c17","buttonShadow":"rgba(133, 36, 30, 0.30)","causticGradients":"radial-gradient(ellipse 75% 65% at 90% 12%, rgba(133, 36, 30, 0.12), transparent 60%), radial-gradient(ellipse 70% 60% at 8% 85%, rgba(61, 80, 96, 0.14), transparent 65%), radial-gradient(circle 800px at 50% 25%, rgba(13, 21, 28, 0.05), #d2d8de)","gridLineColor":"rgba(13, 21, 28, 0.06)","svgBeamGrad":["#85241e","#3d5060","#d2d8de"],"svgPlanesGrad":["#3d5060","#6b5830","#d2d8de"],"svgStreamlineGrad":["#85241e","#a0312a","#3d5060","#6b5830"],"bracketColors":["#3d5060","#85241e"],"selectionBg":"rgba(133, 36, 30, 0.22)","selectionText":"#5e140f"}}},
      localizedCopy: {
        eyebrow: "POINT WILSON BASTION · 48.1442°N · CONCRETE ADMIRALTY",
        headlineStart: "Fortified",
        headlineSuffix: "<span class=\"accent-word\">quorums.</span>",
        subtag: "// REINFORCED BUNKER STORAGE · HARDENED CONSENSUS · SALISH WEATHER RESISTANCE",
        badgeLeft: "• BASTION // FORT_WORDEN_MIST",
        lede: "Concrete-encased durability for operations under siege. Cold-start persistence and tamper-evident replication logs designed for adversarial zero-trust environments.",
        col1: ["[01] BUNKER STORAGE", "Crash-only durable journals surviving host termination without state corruption."],
        col2: ["[02] HARBOR OBSERVABILITY", "Air-gapped telemetry feeds immune to network spoofing and MITM vectors."],
        col3: ["[03] COASTAL INTEGRITY", "Continuous cryptographic attestation across geo-distributed witness nodes."]
      }
    }
  };

  // Canonical theme slugs and aliases
  const THEME_SLUGS = {
    // Primary short slugs
    "redmond": "redmond-town-square",
    "sgi": "sgi-indigo",
    "puget": "puget-twilight",
    "olympic": "olympic-larch",
    "lopez": "lopez-madrone",
    "worden": "fort-worden-mist",

    // Canonical full IDs
    "redmond-town-square": "redmond-town-square",
    "sgi-indigo": "sgi-indigo",
    "puget-twilight": "puget-twilight",
    "olympic-larch": "olympic-larch",
    "lopez-madrone": "lopez-madrone",
    "fort-worden-mist": "fort-worden-mist",

    // Shorthand aliases
    "rts": "redmond-town-square",
    "indigo": "sgi-indigo",
    "twilight": "puget-twilight",
    "pt": "puget-twilight",
    "larch": "olympic-larch",
    "ol": "olympic-larch",
    "madrone": "lopez-madrone",
    "lm": "lopez-madrone",
    "mist": "fort-worden-mist",
    "fort": "fort-worden-mist",
    "fwm": "fort-worden-mist"
  };

  const CANONICAL_SLUGS = {
    "redmond-town-square": "redmond",
    "sgi-indigo": "sgi",
    "puget-twilight": "puget",
    "olympic-larch": "olympic",
    "lopez-madrone": "lopez",
    "fort-worden-mist": "worden"
  };

  function parseThemeRef(rawInput) {
    if (!rawInput || typeof rawInput !== 'string') return null;
    let s = rawInput.trim();
    // Strip URI prefixes if present
    s = s.replace(/^qn:\/\/81\.studio\/themes?\//i, '')
         .replace(/^qrate:\/\/81\.studio\/themes#/i, '')
         .replace(/^q\.ux\.theme:/i, '')
         .replace(/^theme:/i, '');

    // Split frontier if specified with @ or :
    let themePart = s;
    let frontierPart = null;
    if (s.includes('@')) {
      const parts = s.split('@');
      themePart = parts[0];
      frontierPart = parts.slice(1).join('@');
    } else if (s.includes(':') && !s.includes('://')) {
      const parts = s.split(':');
      themePart = parts[0];
      frontierPart = parts.slice(1).join(':');
    }

    const themeKey = themePart.toLowerCase().trim();
    const canonicalId = THEME_SLUGS[themeKey];
    if (!canonicalId) return null;

    const baseSlug = CANONICAL_SLUGS[canonicalId] || themeKey;
    const frontier = frontierPart ? frontierPart.toLowerCase().trim() : null;

    return {
      canonicalId,
      baseSlug,
      frontier
    };
  }

  // Backwards compatibility property getters for dark / light defaults
  for (const [id, t] of Object.entries(THEMES)) {
    const defQual = t.palettes[t.defaultQualifierId] || Object.values(t.palettes)[0];
    t.dark = defQual.dark;
    t.light = defQual.light;
  }

  function resolveThemeState() {
    let urlPreset = null, urlMode = null, urlRelease = null, urlSeason = null, urlQualifier = null, urlSlug = null;
    try {
      const search = window.location && window.location.search;
      if (search) {
        const params = new URLSearchParams(search);
        urlPreset = params.get("preset") || params.get("theme");
        urlSlug = params.get("slug");
        urlMode = params.get("mode");
        urlRelease = params.get("release");
        urlSeason = params.get("season");
        urlQualifier = params.get("qualifier") || params.get("version");
      }
    } catch (e) {}

    let saved = null;
    try {
      if (typeof localStorage !== "undefined") {
        const raw = localStorage.getItem("studio81_theme_state");
        if (raw) saved = JSON.parse(raw);
      }
    } catch (e) {}

    const coarseSeason = getCoarseSeason();
    const rawRef = urlSlug || urlPreset || (saved && (saved.presetId || saved.activeThemeId));
    const parsed = parseThemeRef(rawRef);
    const presetId = parsed ? parsed.canonicalId : "redmond-town-square";
    const theme = THEMES[presetId] || THEMES["redmond-town-square"];

    let specifiedQual = null;
    if (parsed && parsed.frontier) {
      specifiedQual = parsed.frontier;
    } else if (theme.tierType === "release") {
      specifiedQual = urlRelease || urlQualifier || urlSeason;
    } else if (theme.tierType === "season") {
      specifiedQual = urlSeason || urlQualifier || urlRelease;
    } else {
      specifiedQual = urlRelease || urlSeason || urlQualifier;
    }

    const defaultQual = (theme.tierType === "season" || theme.qualifierType === "season") ? coarseSeason : theme.defaultQualifierId;
    const qualifierId = (specifiedQual && theme.palettes && theme.palettes[specifiedQual])
      ? specifiedQual
      : (saved && saved.qualifierId && theme.palettes && theme.palettes[saved.qualifierId])
        ? saved.qualifierId
        : defaultQual;

    let isDark = (theme.defaultMode === "dark");
    if (saved && typeof saved.isDark === "boolean") isDark = saved.isDark;
    if (urlMode === "dark") isDark = true;
    if (urlMode === "light") isDark = false;

    const baseSlug = theme.slug || CANONICAL_SLUGS[presetId] || "redmond";
    const quneicSlug = `${baseSlug}@${qualifierId}`;

    return { presetId, qualifierId, isDark, slug: quneicSlug, baseSlug };
  }

  // 3. GENERIC HTMLX COMPILER & LOWERING BACKEND
  function compileCardNode(node) {
    const isSelected = Boolean(node.state && (node.state.selected || node.state.revealed));
    const diagHtml = (isSelected && node.diagnostics && node.diagnostics.length)
      ? `<div class="qux-card-diagnostics" style="margin-top: 12px; padding: 10px; border-left: 2px solid var(--accent-primary); background: rgba(0,0,0,0.18); font-family: var(--font-mono, monospace); font-size: 0.78rem;">
           <div style="font-weight: 700; color: var(--accent-secondary); margin-bottom: 4px;">// ARCHITECTURAL VERIFICATION:</div>
           ${node.diagnostics.map(d => `<div style="color: var(--text-secondary); margin-bottom: 2px;">• ${d}</div>`).join('')}
         </div>`
      : '';

    const btnLabel = isSelected
      ? (node.activeActionLabel || (node.actionLabel === 'INSPECT INVARIANTS' ? '✓ ACTIVE (COLLAPSE)' : node.actionLabel))
      : (node.actionLabel || 'ACTION');

    const actionBtn = node.action
      ? `<button class="btn btn-ghost qux-action-trigger" 
                 data-qux-action='${JSON.stringify(node.action)}'
                 style="margin-top: 12px; font-size: 0.75rem; padding: 5px 12px; border: 1px solid var(--border-subtle); cursor: pointer; color: var(--text-primary); border-radius: var(--button-radius, 4px);">
           ${btnLabel}
         </button>`
      : '';

    return `
      <article class="qux-node qux-card${isSelected ? ' selected' : ''}"
               data-qux-node-id="${node.nodeId}"
               data-qux-role="${node.role}"
               data-qux-source="${node.source}"
               data-qux-selected="${isSelected ? 'true' : 'false'}"
               style="border: 1px solid ${isSelected ? 'var(--accent-primary)' : 'var(--border-subtle)'}; padding: 18px; border-radius: var(--card-radius, 6px); background: ${isSelected ? 'var(--surface-hover)' : 'transparent'}; transition: all 0.2s ease;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <h4 style="margin: 0; font-family: var(--font-mono, monospace); font-size: 0.82rem; color: var(--accent-secondary); letter-spacing: 0.1em;">${node.title}</h4>
          ${node.badge ? `<span style="font-family: var(--font-mono, monospace); font-size: 0.68rem; color: var(--text-muted);">${node.badge}</span>` : ''}
        </div>
        <p style="margin: 0; font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5; white-space: pre-line;">${node.body}</p>
        ${diagHtml}
        ${actionBtn}
      </article>
    `;
  }

  function hexToHsl(hex) {
    if (!hex || typeof hex !== 'string') return null;
    let hStr = hex.replace(/^#/, '');
    if (hStr.length === 3) hStr = hStr.split('').map(c => c + c).join('');
    if (hStr.length !== 6) return null;
    const num = parseInt(hStr, 16);
    const r = (num >> 16) / 255;
    const g = ((num >> 8) & 0xff) / 255;
    const b = (num & 0xff) / 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
        case g: h = ((b - r) / d + 2) / 6; break;
        case b: h = ((r - g) / d + 4) / 6; break;
      }
    }
    return { h: h * 360, s, l };
  }

  function hslToHex(h, s, l) {
    h = (h % 360 + 360) % 360 / 360;
    s = Math.max(0, Math.min(1, s));
    l = Math.max(0, Math.min(1, l));
    if (s === 0) {
      const v = Math.round(l * 255).toString(16).padStart(2, '0');
      return `#${v}${v}${v}`;
    }
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };
    const r = Math.round(hue2rgb(p, q, h + 1/3) * 255).toString(16).padStart(2, '0');
    const g = Math.round(hue2rgb(p, q, h) * 255).toString(16).padStart(2, '0');
    const b = Math.round(hue2rgb(p, q, h - 1/3) * 255).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
  }

  function adjustColorIntensity(hex, intensityFactor) {
    if (intensityFactor >= 1.0 || !hex || typeof hex !== 'string' || !hex.startsWith('#')) return hex;
    const hsl = hexToHsl(hex);
    if (!hsl) return hex;
    const newS = hsl.s * intensityFactor;
    return hslToHex(hsl.h, newS, hsl.l);
  }

  function lowerToHtmlx(model, doc = (typeof document !== "undefined" ? document : null)) {
    if (!doc || !doc.documentElement) return;
    const root = doc.documentElement;
    const { state, tokens, nodes } = model;

    // 1. Lower root attributes
    root.setAttribute("data-mode", state.isDark ? "dark" : "light");
    root.setAttribute("data-preset", state.activeThemeId || state.presetId || "default");
    root.setAttribute("data-qualifier", state.activeQualifierId || state.qualifierId || "default");
    const activeTId = state.activeThemeId || state.presetId || "redmond-town-square";
    const bSlug = (THEMES[activeTId] && THEMES[activeTId].slug) || CANONICAL_SLUGS[activeTId] || "redmond";
    const curQ = state.activeQualifierId || state.qualifierId || "default";
    root.setAttribute("data-slug", `${bSlug}@${curQ}`);
    if (tokens.activeButtonTreatment) root.setAttribute("data-button-treatment", tokens.activeButtonTreatment);
    if (tokens.activeCardRadius) root.setAttribute("data-card-radius", tokens.activeCardRadius);
    if (state.density) root.setAttribute("data-density", state.density);

    // 2. Lower CSS custom properties
    root.style.setProperty("--canvas-bg", tokens.canvasBg);
    root.style.setProperty("--surface-bg", tokens.surfaceBg);
    root.style.setProperty("--surface-hover", tokens.surfaceHoverBg || tokens.surfaceBg);
    root.style.setProperty("--surface-hover-bg", tokens.surfaceHoverBg || tokens.surfaceBg);
    root.style.setProperty("--card-bg", tokens.cardBg || tokens.surfaceBg);
    root.style.setProperty("--text-primary", tokens.textPrimary);
    root.style.setProperty("--text-secondary", tokens.textSecondary);
    root.style.setProperty("--text-muted", tokens.textMuted);
    root.style.setProperty("--border-subtle", tokens.borderSubtle);
    root.style.setProperty("--accent-primary", tokens.accentPrimary);
    root.style.setProperty("--accent-secondary", tokens.accentSecondary);
    root.style.setProperty("--accent-tertiary", tokens.accentTertiary);
    root.style.setProperty("--button-bg", tokens.buttonBg);
    root.style.setProperty("--button-text", tokens.buttonText);
    root.style.setProperty("--button-hover-bg", tokens.buttonHoverBg);
    root.style.setProperty("--hero-gradient", tokens.heroGradient);
    root.style.setProperty("--caustic-gradients", tokens.causticGradients);
    root.style.setProperty("--header-bg", state.isDark ? "rgba(14, 23, 38, 0.82)" : "rgba(255, 255, 255, 0.88)");
    if (tokens.fontDisplay) root.style.setProperty("--font-display", tokens.fontDisplay);

    if (tokens.activeCardRadius) {
      let cardR = '0px';
      let btnR = '0px';
      if (tokens.activeCardRadius === 'sharp') { cardR = '0px'; btnR = '0px'; }
      else if (tokens.activeCardRadius === 'subtle') { cardR = '2px'; btnR = '2px'; }
      else if (tokens.activeCardRadius === 'rounded') { cardR = '16px'; btnR = '10px'; }
      else if (tokens.activeCardRadius === 'pill') { cardR = '24px'; btnR = '999px'; }
      root.style.setProperty("--card-radius", cardR);
      root.style.setProperty("--button-radius", btnR);
    }

    // 3. Lower semantic card components into container if mounted
    if (doc.getElementById || doc.querySelector) {
      const container = (doc.getElementById && (doc.getElementById("qux-cards-mount") || doc.getElementById("matrix-cols"))) ||
                        (doc.querySelector && doc.querySelector("[data-qux-container='cards']"));
      if (container && nodes && Array.isArray(nodes)) {
        const cards = nodes.filter(n => n.role === "card");
        if (cards.length > 0) {
          container.innerHTML = cards.map(compileCardNode).join('');
        }
      }
    }
  }

  let activeModel = null;

  function applyBootstrapTheme() {
    const { presetId, qualifierId, isDark } = resolveThemeState();
    const theme = THEMES[presetId];
    const qualPal = (theme.palettes && (theme.palettes[qualifierId] || theme.palettes[theme.defaultQualifierId])) || theme;
    const pal = isDark ? qualPal.dark : qualPal.light;

    const effectiveCardRadius = theme.alignedCardRadius || (theme.baseSkenes && theme.baseSkenes.cardRadius) || "sharp";

    const tokens = {
      canvasBg: pal.canvasBg,
      surfaceBg: pal.surfaceBg,
      surfaceHoverBg: pal.surfaceHoverBg || pal.surfaceBg,
      cardBg: pal.surfaceBg,
      textPrimary: pal.textPrimary,
      textSecondary: pal.textSecondary,
      textMuted: pal.textMuted,
      borderSubtle: pal.borderSubtle,
      accentPrimary: pal.accentPrimary,
      accentSecondary: pal.accentSecondary,
      accentTertiary: pal.accentTertiary,
      buttonBg: pal.buttonBg,
      buttonText: pal.buttonText,
      buttonHoverBg: pal.buttonHoverBg,
      heroGradient: pal.heroGradient,
      causticGradients: pal.causticGradients,
      activeCardRadius: effectiveCardRadius,
      activeButtonTreatment: theme.baseSkenes ? theme.baseSkenes.buttonTreatment : "tactile-bevel"
    };

    const bSlug = theme.slug || CANONICAL_SLUGS[presetId] || "redmond";
    const qSlug = `${bSlug}@${qualifierId}`;

    activeModel = {
      schema: "q.ux.resolved-presentation-model/1",
      state: { activeThemeId: presetId, presetId, activeQualifierId: qualifierId, qualifierId, isDark, density: "comfortable", cardRadius: "aligned", intensity: 100 },
      theme: {
        id: presetId,
        slug: qSlug,
        baseSlug: bSlug,
        name: theme.name,
        category: theme.category,
        tierType: theme.tierType,
        tierLabel: theme.tierLabel,
        activeQualifierId: qualifierId,
        isDark: isDark
      },
      tokens: tokens,
      nodes: [
        {
          nodeId: "node:cap:01",
          role: "card",
          source: "qrate://81.studio/capabilities#01",
          badge: "CAPABILITY 01",
          title: CANONICAL_COPY.col1[0],
          body: CANONICAL_COPY.col1[1],
          action: { type: "SelectCapability", capabilityId: "01" },
          actionLabel: "INSPECT INVARIANTS",
          diagnostics: ["Survives Byzantine network partitions with deterministic quorum recovery"],
          state: { selected: false }
        },
        {
          nodeId: "node:cap:02",
          role: "card",
          source: "qrate://81.studio/capabilities#02",
          badge: "CAPABILITY 02",
          title: CANONICAL_COPY.col2[0],
          body: CANONICAL_COPY.col2[1],
          action: { type: "SelectCapability", capabilityId: "02" },
          actionLabel: "INSPECT INVARIANTS",
          diagnostics: ["Crash-only durable journals eliminating uncommitted side-effects"],
          state: { selected: false }
        },
        {
          nodeId: "node:cap:03",
          role: "card",
          source: "qrate://81.studio/capabilities#03",
          badge: "CAPABILITY 03",
          title: CANONICAL_COPY.col3[0],
          body: CANONICAL_COPY.col3[1],
          action: { type: "SelectCapability", capabilityId: "03" },
          actionLabel: "INSPECT INVARIANTS",
          diagnostics: ["Hands-on collaboration directly with technical founders and engineering leadership"],
          state: { selected: false }
        }
      ]
    };

    lowerToHtmlx(activeModel);
  }

  function applyPalette(state) {
    const theme = THEMES[state.presetId] || THEMES["redmond-town-square"];
    const qualId = state.qualifierId || theme.defaultQualifierId;
    const qualPal = (theme.palettes && (theme.palettes[qualId] || theme.palettes[theme.defaultQualifierId])) || theme;
    const pal = state.isDark ? qualPal.dark : qualPal.light;

    const intensity = (state && typeof state.intensity === "number") ? Math.max(0, Math.min(100, state.intensity)) : 100;
    const intensityFactor = intensity / 100.0;

    const accentPrimary = adjustColorIntensity(pal.accentPrimary, intensityFactor);
    const accentSecondary = adjustColorIntensity(pal.accentSecondary, intensityFactor);
    const accentTertiary = adjustColorIntensity(pal.accentTertiary, intensityFactor);
    const buttonBg = adjustColorIntensity(pal.buttonBg || pal.accentPrimary, intensityFactor);
    const buttonHoverBg = adjustColorIntensity(pal.buttonHoverBg, intensityFactor);

    let causticGradients = pal.causticGradients || "";
    if (intensityFactor < 1.0 && causticGradients) {
      causticGradients = causticGradients.replace(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([0-9.]+)\)/g, (m, r, g, b, a) => {
        const newA = (parseFloat(a) * intensityFactor).toFixed(3);
        return `rgba(${r}, ${g}, ${b}, ${newA})`;
      });
    }

    const effectiveCardRadius = (!state.cardRadius || state.cardRadius === "aligned")
      ? (theme.alignedCardRadius || (theme.baseSkenes && theme.baseSkenes.cardRadius) || "sharp")
      : state.cardRadius;

    const tokens = {
      canvasBg: pal.canvasBg,
      surfaceBg: pal.surfaceBg,
      surfaceHoverBg: pal.surfaceHoverBg || pal.surfaceBg,
      cardBg: pal.surfaceBg,
      textPrimary: pal.textPrimary,
      textSecondary: pal.textSecondary,
      textMuted: pal.textMuted,
      borderSubtle: pal.borderSubtle,
      accentPrimary: accentPrimary,
      accentSecondary: accentSecondary,
      accentTertiary: accentTertiary,
      buttonBg: buttonBg,
      buttonText: pal.buttonText,
      buttonHoverBg: buttonHoverBg,
      heroGradient: pal.heroGradient,
      causticGradients: causticGradients,
      activeCardRadius: effectiveCardRadius,
      activeButtonTreatment: theme.baseSkenes ? theme.baseSkenes.buttonTreatment : "tactile-bevel"
    };

    const bSlug = theme.slug || CANONICAL_SLUGS[state.presetId] || "redmond";
    const qSlug = `${bSlug}@${qualId}`;

    activeModel = {
      schema: "q.ux.resolved-presentation-model/1",
      state: { activeThemeId: state.presetId, presetId: state.presetId, activeQualifierId: qualId, qualifierId: qualId, isDark: state.isDark, intensity: intensity, cardRadius: effectiveCardRadius },
      theme: {
        id: state.presetId,
        slug: qSlug,
        baseSlug: bSlug,
        name: theme.name,
        category: theme.category,
        tierType: theme.tierType,
        tierLabel: theme.tierLabel,
        activeQualifierId: qualId,
        isDark: state.isDark
      },
      tokens: tokens,
      nodes: activeModel ? activeModel.nodes : []
    };

    lowerToHtmlx(activeModel);
    return pal;
  }

  let activeRuntime = null;

  function registerRuntime(runtime) {
    activeRuntime = runtime;
  }

  function dispatchAction(action) {
    if (!action) return;
    if (activeRuntime && typeof activeRuntime.dispatch === "function") {
      activeModel = activeRuntime.dispatch(action);
      lowerToHtmlx(activeModel);
      return activeModel;
    }
    // Generic action handling when no runtime is registered:
    // Any card node whose action matches action payload toggles its interaction state
    if (activeModel && activeModel.nodes) {
      for (const node of activeModel.nodes) {
        if (node.role === "card" && node.action) {
          const isTarget = JSON.stringify(node.action) === JSON.stringify(action) ||
            (action.capabilityId && node.action.capabilityId === action.capabilityId) ||
            (action.cardId && node.action.cardId === action.cardId);
          if (isTarget && node.state) {
            node.state.selected = !node.state.selected;
            if (node.state.revealed !== undefined) {
              node.state.revealed = node.state.selected;
            }
          }
        }
      }
      lowerToHtmlx(activeModel);
    }
    return activeModel;
  }

  applyBootstrapTheme();

  if (typeof document !== "undefined" && document.addEventListener) {
    document.addEventListener("DOMContentLoaded", () => {
      lowerToHtmlx(activeModel);
    });

    document.addEventListener("click", (e) => {
      const trigger = e.target.closest && e.target.closest("[data-qux-action]");
      if (trigger) {
        e.preventDefault();
        try {
          const action = JSON.parse(trigger.getAttribute("data-qux-action"));
          dispatchAction(action);
        } catch (err) {}
      }
    });
  }

  if (typeof window !== "undefined") {
    window.THEMES = THEMES;
    window.CANONICAL_COPY = CANONICAL_COPY;
    window.CANONICAL_SLUGS = CANONICAL_SLUGS;
    window.getCoarseSeason = getCoarseSeason;
    window.resolveThemeState = resolveThemeState;
    window.applyPalette = applyPalette;
    window.compileCardNode = compileCardNode;
    window.lowerToHtmlx = lowerToHtmlx;
    window.registerRuntime = registerRuntime;
    window.dispatchAction = dispatchAction;
  }
})();
