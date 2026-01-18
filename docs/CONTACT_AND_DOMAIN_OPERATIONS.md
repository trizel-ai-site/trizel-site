# CONTACT AND DOMAIN OPERATIONS

**Repository:** trizel-ai-site/trizel-site  
**Layer:** Layer-2 (Presentation/Display)  
**Purpose:** Canonical contact information and operational procedures for domain management

---

## Canonical Contact Information

### Primary Domain Contact

**Email:** admin1@trizel-ai.com  
**Purpose:** All domain-related correspondence, verification requests, and operational communications

**Use this contact for:**
- Domain ownership verification
- DNS configuration questions
- GitHub Pages custom domain support requests
- Domain transfer or binding inquiries
- Emergency domain access issues

---

## Operational Procedures

### Domain Binding Operations

All domain binding actions for this Layer-2 repository must follow governance-compliant procedures:

#### Adding or Changing Custom Domain

1. **Create a pull request** modifying the `CNAME` file at repository root
2. Include the new domain (or remove CNAME file if unbinding)
3. Await review and approval per repository governance rules
4. Merge the pull request
5. Verify GitHub Pages recognizes the change (Settings → Pages)
6. Configure DNS records at the domain registrar/provider

**Important:** Direct changes via GitHub Settings UI may be blocked by repository rules. The `CNAME` file is the **canonical source of truth**.

#### Removing Custom Domain

1. **Create a pull request** that deletes the `CNAME` file
2. Include rationale in PR description
3. Await review and approval
4. Merge the pull request
5. Verify domain is released in GitHub Pages settings
6. Optionally update or remove DNS records at registrar

### Change Control

**All domain operations must:**
- Be recorded via pull request (audit trail)
- Include clear commit messages and PR descriptions
- Follow the existing governance model (no direct commits to `main`)
- Be documented in subsequent changelog updates

**Forbidden actions:**
- Direct modification of `CNAME` file on `main` branch without PR
- Manual custom domain changes in Settings UI (if blocked by policy)
- Undocumented domain binding/unbinding

---

## Escalation Paths

### Domain Dispute or Conflict

**Scenario:** GitHub Pages reports "domain already taken" or domain cannot be bound

**Escalation Steps:**

1. **Level 1 — Self-Service Resolution**
   - Check if you control another repository claiming the domain
   - Remove the domain from the other repository (via PR)
   - Wait 5-10 minutes for GitHub to release the domain
   - Retry binding via CNAME file in this repository

2. **Level 2 — GitHub Support Contact**
   - If Level 1 fails, contact GitHub Support
   - Use subject line: "Custom domain conflict for trizel-ai.com"
   - Provide proof of domain ownership (admin email verification)
   - Reference this repository: trizel-ai-site/trizel-site
   - Request manual release of domain from conflicting repository

3. **Level 3 — Domain Registrar Support**
   - If DNS propagation or verification issues persist beyond 48 hours
   - Contact domain registrar support (Google Workspace / Squarespace)
   - Verify DNS records are correctly configured
   - Request DNS propagation status check

### GitHub Pages Certificate Issues

**Scenario:** HTTPS certificate not issued, or SSL errors persist

**Escalation Steps:**

1. **Level 1 — Wait and Verify**
   - Ensure DNS is correctly configured and propagated
   - Wait up to 24 hours for automatic certificate issuance
   - Verify "Enforce HTTPS" becomes available in Pages settings

2. **Level 2 — Remove and Re-add Domain**
   - Create PR to remove CNAME file
   - Merge and wait 5 minutes
   - Create PR to re-add CNAME file
   - Merge and wait for certificate issuance

3. **Level 3 — GitHub Support Contact**
   - If certificate issues persist beyond 48 hours
   - Contact GitHub Support
   - Subject: "HTTPS certificate not issued for trizel-ai.com"
   - Provide: Repository name, custom domain, DNS verification status

### Emergency Domain Access

**Scenario:** Loss of access to domain registrar account or admin email

**Escalation Steps:**

1. **Immediate Action**
   - Attempt account recovery via registrar's standard process
   - Use backup email or phone verification if available

2. **Contact Domain Registrar Support**
   - Provide proof of identity (may require documents per registrar policy)
   - Request account access restoration
   - Update admin email if necessary

3. **Update Repository Documentation**
   - Once access is restored, create PR to update:
     - docs/DOMAIN_OWNERSHIP_DOSSIER.md (if admin email changes)
     - docs/CONTACT_AND_DOMAIN_OPERATIONS.md (this file)
   - Document the incident in repository changelog

---

## Communication Guidelines

### Response Time Expectations

For inquiries sent to **admin1@trizel-ai.com**:

- **Routine inquiries:** Response within 2-3 business days
- **Urgent domain issues:** Response within 24 hours (best effort)
- **Emergency (site down):** Response within 12 hours (best effort)

**Note:** These are target response times, not guaranteed SLAs. This is a Layer-2 presentation repository with limited operational support.

### Email Subject Line Format

For efficient routing, use clear subject lines:

- "trizel-ai.com Domain Verification Request"
- "GitHub Pages Custom Domain Support Needed"
- "DNS Configuration Question for trizel-ai.com"
- "Emergency: Domain Access Issue"

### Required Information for Support Requests

When contacting admin1@trizel-ai.com about domain issues, include:

1. **Domain:** trizel-ai.com
2. **Repository:** trizel-ai-site/trizel-site
3. **Issue description:** Clear description of the problem
4. **Steps taken:** What you've already tried
5. **Error messages:** Any error messages from GitHub or DNS tools
6. **Timeline:** When the issue started

---

## Security and Privacy

### Email Security

**admin1@trizel-ai.com** is the only authorized contact for domain operations. Be cautious of:

- Phishing emails claiming to be from domain support
- Requests for credentials or sensitive information via email
- Unsolicited offers to "transfer" or "purchase" the domain

**Verification:** If you receive unexpected domain-related communications, verify authenticity before responding.

### Information Disclosure

When responding to domain verification requests:

- ✅ **Share:** Domain name, repository name, admin contact email
- ✅ **Share (redacted):** DNS configuration, registrar name
- ❌ **Do NOT share:** Registrar account passwords, payment information, personal addresses, government IDs

**See:** docs/DOMAIN_OWNERSHIP_DOSSIER.md for full privacy and redaction policy

---

## References

### Related Documentation

- **DNS Configuration:** docs/DNS_BINDING_AND_VERIFICATION.md
- **Domain Ownership:** docs/DOMAIN_OWNERSHIP_DOSSIER.md
- **Account Registry:** docs/ACCOUNT_REGISTRY.md (governance-controlled identity)
- **Launch Readiness:** docs/LAUNCH_READINESS.md

### External Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Custom Domains for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [GitHub Support](https://support.github.com/)

---

## Changelog

Changes to contact information or operational procedures must be documented:

- **2026-01-18:** Initial creation of contact and operational procedures documentation
- (Future updates will be appended here)

---

**Contact and Domain Operations** — Layer-2 documentation — Governance-compliant — Privacy-aware — Audit-ready
