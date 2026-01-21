# TRIZEL System Structure

## Overview

TRIZEL operates under a strict **three-layer architecture** that enforces clear separation of concerns, authorities, and responsibilities. This document provides a comprehensive explanation of the system structure for visitors and stakeholders.

---

## Three-Layer Architecture

The TRIZEL system is organized into three distinct layers, each with specific roles and authorities:

### Layer-0: Governance / Authority

**Repository:** [trizel-core](https://github.com/trizel-ai-site/trizel-core)

**Purpose:** Establishes the governance framework and maintains authoritative control over the entire TRIZEL system.

**Responsibilities:**
- Define system-wide policies and standards
- Establish layer separation rules and boundaries
- Provide final decision-making authority
- Maintain governance documentation
- Define constraints and operational parameters

**Authority Level:** **Final and Binding**

**Key Characteristics:**
- All governance decisions originate from Layer-0
- No other layer may override Layer-0 decisions
- Provides the constitutional framework for TRIZEL operations
- Maintains institutional integrity and compliance

---

### Layer-1: Internal Research & Analysis

**Repositories:**
- [trizel-lab](https://github.com/trizel-ai-site/trizel-lab) — Research documentation and provenance
- trizel-AI — Internal research systems
- trizel-monitor — Analysis and monitoring tools

**Purpose:** Conducts internal research, analysis, and validation under Layer-0 governance.

**Responsibilities:**
- Execute research projects and experiments
- Produce scientific findings and analysis
- Maintain research provenance and documentation
- Perform validation and verification activities
- Archive research artifacts and results
- Conduct technical analysis

**Authority Level:** **Scientific and Technical Execution**

**Key Characteristics:**
- Operates under Layer-0 governance constraints
- Produces scientific and technical content
- Maintains internal research operations
- Does not interface directly with public visitors
- All research follows Layer-0 policies

---

### Layer-2: Public Artifacts / Presentation

**Repository:** [trizel-site](https://github.com/trizel-ai-site/trizel-site) (this repository)

**Purpose:** Provides public-facing presentation and orientation without any research or governance authority.

**Responsibilities:**
- Display structural information about TRIZEL
- Provide navigation to authoritative Layer-0 and Layer-1 resources
- Offer multilingual presentation (EN, FR, AR, ZH, RU)
- Maintain institutional visual identity
- Present orientation materials for visitors

**Authority Level:** **NONE — Presentation Only**

**Key Characteristics:**
- **No scientific authority** — Cannot make research claims
- **No governance power** — Cannot establish policies
- **No interpretation** — Cannot analyze or validate research
- **Read-only** — References authoritative sources only
- **Descriptive only** — Explains structure, does not create authority

**Explicit Prohibitions:**
- No scientific claims or findings
- No research execution or analysis
- No validation or verification activities
- No interpretation of Layer-1 research
- No citable scientific materials
- No AI models or execution logic
- No dynamic data processing
- No analytics or metrics collection

---

## Authority Flow

Authority and information flow **unidirectionally** through the three layers:

```
┌─────────────────────────────────────┐
│  Layer-0: Governance / Authority    │
│  (trizel-core)                      │
│                                     │
│  • Establishes policies             │
│  • Defines constraints              │
│  • Final authority                  │
└─────────────┬───────────────────────┘
              │ [governs]
              ↓
┌─────────────────────────────────────┐
│  Layer-1: Internal Research         │
│  (trizel-lab, trizel-AI, etc.)      │
│                                     │
│  • Conducts research                │
│  • Produces findings                │
│  • Scientific execution             │
└─────────────┬───────────────────────┘
              │ [informs]
              ↓
┌─────────────────────────────────────┐
│  Layer-2: Public Artifacts          │
│  (trizel-site)                      │
│                                     │
│  • Presents structure               │
│  • References authorities           │
│  • No decision power                │
└─────────────────────────────────────┘
```

**Key Principles:**
- Layer-0 **governs** Layer-1 and Layer-2
- Layer-1 **informs** Layer-2 through references
- Layer-2 **displays** but does not interpret
- Information flows downward only
- Authority resides at Layer-0 only

---

## Layer Separation Model

### Why Three Layers?

The three-layer architecture enforces:

1. **Clear Authority** — Governance decisions are centralized at Layer-0
2. **Research Integrity** — Layer-1 operates independently under governance
3. **Public Transparency** — Layer-2 provides clear, non-authoritative presentation
4. **Institutional Compliance** — Boundaries prevent conflation of roles
5. **Scientific Rigor** — Research is separated from public presentation

### Separation Principles

**Mandatory Separation:**
- Layers are **independent** — No cross-layer conflation
- Layers are **immutable** — Boundaries cannot be violated
- Layers are **explicit** — Roles are clearly defined
- Layers are **enforced** — Violations are prohibited

**Cross-Layer Interactions:**
- Layer-2 **may reference** Layer-0 and Layer-1 documents (read-only)
- Layer-2 **may not modify** any Layer-0 or Layer-1 content
- Layer-2 **may not interpret** Layer-1 research findings
- Layer-1 **operates under** Layer-0 governance
- Layer-1 **may not override** Layer-0 policies

---

## Institutional Context

### GitHub Organization

**Organization:** [trizel-ai-site](https://github.com/trizel-ai-site)

**Public Repositories:**
- `trizel-core` — Layer-0 governance
- `trizel-lab` — Layer-1 research documentation
- `trizel-site` — Layer-2 presentation

### Domain

**Primary Domain:** `trizel.ai`

**Hosted Content:**
- Public presentation pages (Layer-2)
- Language-specific interfaces (EN, FR, AR, ZH, RU)
- Static documentation and references
- Visual identity and design system

### Multilingual Support

Layer-2 provides presentation in **five languages**:
- **English (EN)** — Canonical source
- **French (FR)** — Français
- **Arabic (AR)** — العربية (with RTL layout support)
- **Chinese (ZH)** — 中文
- **Russian (RU)** — Русский

All translations maintain semantic equivalence and institutional accuracy.

---

## Extended Layers

In addition to the three core layers, TRIZEL includes extended presentation layers:

### Layer-2.5: System Interface / Epistemic Atlas

**Location:** `trizel-site/atlas/`

**Purpose:** Displays epistemic relationships and artifact mapping.

**Functions:**
- Maps repository → artifact → evidence relationships
- Provides structural overview of research provenance
- References authoritative Layer-1 sources
- **No interpretation or validation**

**Authority:** **NONE** (display-only)

### Layer-3: System Linking / Repository Topology

**Location:** `trizel-site/topology/`

**Purpose:** Displays system-wide repository relationships and organizational structure.

**Functions:**
- Shows repository connections
- Maps organizational hierarchy
- Visualizes account associations
- Provides system-level overview

**Authority:** **NONE** (display-only)

**Data Source:** All data is **hand-authored and static** — no API queries, no dynamic updates.

---

## Core Constraints

### What Layer-2 IS

- **Presentation surface** — Displays structural information
- **Navigation aid** — Links to authoritative sources
- **Multilingual interface** — Accessible to international visitors
- **Institutional identity** — Maintains visual consistency
- **Static reference** — Read-only, non-operational

### What Layer-2 IS NOT

- **Not a research platform** — No scientific content production
- **Not a governance body** — No policy-making authority
- **Not an analysis tool** — No data processing or validation
- **Not citable** — Not a source for scientific citation
- **Not authoritative** — No decision-making power
- **Not dynamic** — No live data or metrics
- **Not executable** — No code execution or AI models

---

## Compliance and Governance

### Governing Documents

All Layer-2 operations are constrained by:
- **[Scientific Presentation Contract](SCIENTIFIC_PRESENTATION_CONTRACT.md)** — Layer-2 scope and rules
- **[Layer Boundaries](LAYER_BOUNDARIES.md)** — Three-layer separation model
- **[System Topology](SYSTEM_TOPOLOGY.md)** — Repository structure and relationships

### Layer-2 Compliance

Layer-2 must:
- Reference Layer-0 governance authority explicitly
- Maintain presentation-only status
- Avoid all scientific claims or interpretations
- Use minimal JavaScript (language switching only)
- Provide static, hand-authored content
- Maintain multilingual accessibility

### Violations

Any of the following constitute **boundary violations**:
- Making scientific claims or findings
- Interpreting Layer-1 research results
- Establishing policies or standards
- Executing analysis or validation
- Publishing citable research materials
- Implementing AI models or logic
- Collecting metrics or analytics
- Modifying Layer-0 or Layer-1 content

---

## References and Navigation

### Authoritative Sources

For authoritative information, refer to:

**Governance:** [trizel-core](https://github.com/trizel-ai-site/trizel-core) (Layer-0)  
**Research:** [trizel-lab](https://github.com/trizel-ai-site/trizel-lab) (Layer-1)  
**Presentation:** This repository (Layer-2)

### Documentation Structure

**In this repository (`trizel-site`):**
- `/docs/` — Layer-2 documentation
- `/en/`, `/fr/`, `/ar/`, `/zh/`, `/ru/` — Language-specific pages
- `/assets/` — Stylesheets and minimal JavaScript
- `/atlas/` — Epistemic mapping interface (Layer-2.5)
- `/topology/` — System topology display (Layer-3)

---

## Summary

The TRIZEL system structure is designed for **clarity, compliance, and institutional integrity**:

- **Layer-0** provides governance authority
- **Layer-1** conducts internal research
- **Layer-2** presents structure to visitors

**Layer separation is absolute and non-negotiable.**

**Layer-2 has zero authority** and exists solely for public orientation and navigation.

For questions:
- **Governance matters** → Refer to Layer-0 (trizel-core)
- **Research inquiries** → Refer to Layer-1 (trizel-lab)
- **Presentation issues** → This repository (Layer-2)

---

**Document Classification:** Layer-2 Presentation Material  
**Authority:** None — Descriptive reference only  
**Status:** Static, read-only, non-authoritative  
**Audience:** Public visitors and stakeholders

**Layer-2 Notice:** This document describes structure only. It does not constitute governance, research, or authoritative interpretation.
