# Phase-E — Publications (Static Index)

## Overview

This directory contains the Phase-E publication index—a strictly static, fail-closed system for displaying allowlisted publication references.

## Purpose

Phase-E provides a minimal, auditable Layer-2 presentation of publication-ready artifacts that have passed governance review. All entries are:
- **Static only**: No JavaScript, no runtime, no build process
- **Immutable links**: Only DOI, Zenodo permalinks, tagged releases, or institutional permalinks
- **Human-approved**: Every addition requires manual review and merge
- **Claim-free**: No performance metrics, no "best/fastest" claims

## Files

- **index.html**: The public-facing Phase-E page with governance information and publications table
- **publications.yml**: Single source of truth registry for all publications (canonical edit location)
- **TEMPLATE_PUBLICATION_ENTRY.txt**: Copy/paste template for adding new entries
- **README.md**: This file

## Global Invariants

- **I1: STATIC_ONLY** = true
- **I2: NO_JS** = true
- **I3: NO_RUNTIME** = true (no build, no fetch, no scripts, no dynamic charts)
- **I4: NO_METRICS** = true (no counters, no analytics, no tracking, no live data)
- **I5: NO_AUTOMATION** = true (no workflows, deploy scripts, or publishing automation)
- **I6: HUMAN_MERGE_REQUIRED** = true
- **I7: CLAIM_MINIMIZATION** = true (no performance claims)
- **I8: SINGLE_SOURCE_OF_TRUTH** = publications.yml
- **I9: FAIL_CLOSED_IF_EMPTY** = true (empty registry shows "none listed")
- **I10: NO_EXTERNAL_DEPENDENCIES** = true (no CDN fonts, no remote CSS)
- **I11: CONTENT_TEMPLATE_LOCK** = true (stable placeholders, no ad-hoc edits)
- **I12: PR_ONLY_CHANGES** = true (change only within allowed artifacts)

## How to Add a Publication

### Step 1: Allowlist Candidate (phase-e-gateway)
- Submit PR to phase-e-gateway repository
- Add candidate to governance allowlist
- Obtain human review and approval

### Step 2: Add to Registry (this repo)
- Open PR to this repository
- Edit `publications.yml` using the schema format
- Add entry with immutable URL only
- See `TEMPLATE_PUBLICATION_ENTRY.txt` for format

### Step 3: Mirror to HTML Table
- Manually copy entry from YAML to HTML table in `index.html`
- No scripts, no automation
- Ensure table row matches template format

### Step 4: Human Merge
- Request human review
- No automatic merges
- Verify all invariants hold

## Publication Schema

```yaml
publications:
  - id: "unique-stable-identifier"
    type: "paper|report|dataset|doi|release"
    immutable_url: "https://..."  # MUST be immutable
    source: "repository-name-or-venue"
    status: "allowlisted|verified|published"
    notes: "neutral-description-no-performance-claims"
```

## Fail-Closed Rules

- Empty `publications.yml` list → Display "No Phase-E publications are currently listed"
- Non-https URL → Treat as invalid, do not display
- Blank `immutable_url` → Treat as invalid, do not display
- Performance claims in notes → Reject during review

## Safety & Limitations

This system explicitly prohibits:
- JavaScript execution
- Runtime data fetching
- Build processes or dynamic generation
- Analytics, counters, or tracking
- Performance claims or comparative metrics
- Automatic publishing or cross-repo writes

If a change introduces any runtime behavior, it must be rejected.

## References

- **Governance**: See trizel-core decision record (reference only)
- **Layer-0**: Policy and decision authority
- **Layer-1**: Evidence production (trizel-lab)
- **Layer-2**: Static reference display (this site)

## Maintenance

All changes must:
1. Maintain all global invariants
2. Go through PR review process
3. Obtain human approval before merge
4. Preserve fail-closed default state
5. Use only immutable external links

---

**Status**: Enabled (Static)  
**Publishing**: Manual review only  
**Automation**: None  
**Runtime**: None  
**Metrics**: None  
**JS**: Disabled
