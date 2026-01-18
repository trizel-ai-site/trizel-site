# DNS BINDING AND VERIFICATION

**Repository:** trizel-ai-site/trizel-site  
**Layer:** Layer-2 (Presentation/Display)  
**Purpose:** Documentation for GitHub Pages custom domain binding and DNS verification

---

## Target Configuration

**Custom Domain:** trizel-ai.com  
**GitHub Pages Baseline URL:** https://trizel-ai-site.github.io/trizel-site/  
**Target:** Bind trizel-ai.com as custom domain for this Layer-2 repository

---

## DNS Records Required

To bind trizel-ai.com to GitHub Pages, the following DNS records must be configured at your domain registrar/DNS provider:

### Apex Domain (trizel-ai.com)

Configure **A records** pointing to GitHub Pages IP addresses:

```
Type: A
Name: @ (or trizel-ai.com)
Value: 185.199.108.153
TTL: 3600 (or default)

Type: A
Name: @ (or trizel-ai.com)
Value: 185.199.109.153
TTL: 3600 (or default)

Type: A
Name: @ (or trizel-ai.com)
Value: 185.199.110.153
TTL: 3600 (or default)

Type: A
Name: @ (or trizel-ai.com)
Value: 185.199.111.153
TTL: 3600 (or default)
```

**Note:** These are GitHub's standard Pages IP addresses. For the most current list, refer to [GitHub's official documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain).

### WWW Subdomain

Configure a **CNAME record** for the www subdomain:

```
Type: CNAME
Name: www
Value: trizel-ai-site.github.io
TTL: 3600 (or default)
```

---

## CNAME File (Canonical Binding)

The canonical method for binding a custom domain to GitHub Pages is via a `CNAME` file in the repository root.

**File:** `CNAME` (at repository root)  
**Content:** `trizel-ai.com` (exactly, no protocol, no trailing slash)

**Important:** Settings UI may be blocked by repository branch protection rules. The `CNAME` file in the repository is the **canonical** source of truth for the custom domain binding. Changes to the custom domain should be made via pull request by modifying this file.

---

## Auto-Check Verification Steps

Follow these steps to verify the domain binding:

### Step 1: Verify CNAME File

```bash
# From repository root
cat CNAME
# Expected output: trizel-ai.com
```

**Status:** ✅ CNAME file must exist in repository root on `main` branch

### Step 2: Check GitHub Pages Settings

1. Navigate to: Repository → Settings → Pages
2. Verify "Custom domain" field shows: `trizel-ai.com`
3. Verify "Enforce HTTPS" is checked (may require DNS propagation first)

**Note:** If repository rules prevent UI changes, the CNAME file is authoritative.

### Step 3: Verify DNS Propagation

Use standard DNS lookup tools to confirm records are propagated:

#### Check A Records (Apex Domain)

```bash
# Using nslookup
nslookup trizel-ai.com

# Using dig
dig trizel-ai.com A +short

# Expected: Should return GitHub Pages IP addresses
# 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
```

#### Check CNAME Record (WWW Subdomain)

```bash
# Using nslookup
nslookup www.trizel-ai.com

# Using dig
dig www.trizel-ai.com CNAME +short

# Expected: trizel-ai-site.github.io
```

**Typical Propagation Time:** 5 minutes to 48 hours (usually < 1 hour)

### Step 4: Verify Domain Ownership with GitHub

After DNS propagation:

1. GitHub will automatically check DNS records
2. If DNS is correctly configured, a green checkmark appears in Pages settings
3. Status indicators:
   - ✅ "DNS check successful" — Domain is correctly configured
   - ⏳ "DNS check in progress" — Wait for propagation
   - ❌ "DNS check failed" — Review DNS configuration

### Step 5: HTTPS Certificate Issuance

Once DNS verification is complete:

1. GitHub automatically requests an SSL/TLS certificate from Let's Encrypt
2. Certificate issuance typically takes a few minutes
3. "Enforce HTTPS" checkbox becomes available once certificate is issued
4. Check the option to enforce HTTPS

**Typical Certificate Issuance Time:** 5 minutes to 1 hour after DNS verification

**Status Check:**

```bash
# Test HTTPS access
curl -I https://trizel-ai.com

# Expected: HTTP/2 200 OK (once certificate is issued)
```

### Step 6: Verify Live Site

1. Visit https://trizel-ai.com in a browser
2. Verify SSL certificate is valid (lock icon in address bar)
3. Verify site content loads correctly
4. Check that all assets load over HTTPS (no mixed content warnings)

---

## Troubleshooting

### Issue: "Domain already taken"

**Symptom:** GitHub Pages shows error: "trizel-ai.com is already taken"

**Cause:** The domain is currently bound to another GitHub Pages site

**Resolution:**
1. Identify which GitHub repository currently claims the domain
2. Remove the domain from that repository (remove CNAME file or clear custom domain in Settings)
3. Wait a few minutes for GitHub to release the domain
4. Retry binding in this repository

**Note:** You must have control over both repositories, or contact GitHub Support if the domain is claimed by another account.

### Issue: "DNS check in progress"

**Symptom:** GitHub Pages shows "DNS check in progress" for extended period

**Cause:** DNS records not yet propagated, or DNS configuration is incorrect

**Resolution:**
1. Verify DNS records are correctly configured at your registrar
2. Wait for DNS propagation (can take up to 48 hours, usually < 1 hour)
3. Use `dig` or `nslookup` to verify DNS records are visible
4. If DNS is correct but still shows "in progress," wait longer or contact GitHub Support

### Issue: "HTTPS not available" or "Enforce HTTPS" disabled

**Symptom:** Cannot enable HTTPS enforcement, or certificate not issued

**Cause:** DNS not verified yet, or certificate issuance pending

**Resolution:**
1. Ensure DNS check is successful (green checkmark in Pages settings)
2. Wait for certificate issuance (typically 5-60 minutes after DNS verification)
3. If issue persists beyond 24 hours, try:
   - Remove custom domain
   - Wait 5 minutes
   - Re-add custom domain via CNAME file
   - Wait for DNS check and certificate issuance

### Issue: "Some settings are managed by your organization"

**Symptom:** Cannot modify Pages settings in UI

**Cause:** Repository has branch protection or organization policies

**Resolution:**
- Use the `CNAME` file method (already implemented in this repository)
- All domain binding changes must be made via pull request
- This is the intended workflow for governance-controlled repositories

### Issue: "ERR_CERT_COMMON_NAME_INVALID" or SSL errors

**Symptom:** Browser shows SSL certificate error when visiting custom domain

**Cause:** Certificate not yet issued, or certificate doesn't cover custom domain

**Resolution:**
1. Wait for certificate issuance (check Pages settings)
2. Verify "Enforce HTTPS" is enabled in Pages settings
3. Clear browser cache and retry
4. Check certificate details in browser (should show Let's Encrypt certificate for trizel-ai.com)

---

## Verification Checklist

Use this checklist to verify complete setup:

- [ ] CNAME file exists in repository root with content: `trizel-ai.com`
- [ ] DNS A records configured for apex domain (4 IPs)
- [ ] DNS CNAME record configured for www subdomain
- [ ] DNS propagation verified with `dig` or `nslookup`
- [ ] GitHub Pages settings show custom domain: `trizel-ai.com`
- [ ] GitHub DNS check shows green checkmark (✅ DNS check successful)
- [ ] HTTPS certificate issued (Let's Encrypt)
- [ ] "Enforce HTTPS" enabled in Pages settings
- [ ] https://trizel-ai.com loads correctly in browser
- [ ] https://www.trizel-ai.com redirects to https://trizel-ai.com
- [ ] SSL certificate valid (no browser warnings)
- [ ] All assets load over HTTPS (no mixed content)

---

## External Resources

- [GitHub Docs: Configuring a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [GitHub Docs: Managing a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [GitHub Docs: Troubleshooting custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages)

---

**DNS Binding and Verification** — Layer-2 documentation — Presentation-only — No automation — Governance-compliant
