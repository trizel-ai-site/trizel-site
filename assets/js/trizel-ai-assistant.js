/**
 * TRIZEL AI Assistant UI Component
 * Phase-F.1: "Talk to TRIZEL-AI" UI Shell
 * 
 * Layer-2 Presentation Repository
 * UI-only, no backend coupling, non-authoritative
 * Governed under PHASE_F_GOVERNANCE.md
 * 
 * This is a UI shell only - no AI processing happens in this repository.
 * All AI functionality is provided by external providers (implementation detail).
 * 
 * PHASE-F.1 MULTILINGUAL SEMANTIC LOCK APPLIED
 * All UI strings are internationalized with semantic equivalence across:
 * EN (canonical), FR, AR, ZH, RU, DE
 */

(function() {
  'use strict';
  
  // Global translations object - loaded from i18n/translations.json
  let currentTranslations = null;
  
  /**
   * Load translations for current language
   */
  async function loadTranslations() {
    try {
      const response = await fetch('/i18n/translations.json');
      const allTranslations = await response.json();
      
      // Get current language from path or default to 'en'
      const pathParts = window.location.pathname.split('/').filter(Boolean);
      const currentLang = pathParts[0] && allTranslations[pathParts[0]] ? pathParts[0] : 'en';
      
      currentTranslations = allTranslations[currentLang] || allTranslations['en'];
      return currentTranslations;
    } catch (error) {
      console.error('Failed to load translations:', error);
      // Fallback to English strings
      return getFallbackTranslations();
    }
  }
  
  /**
   * Get fallback English translations if loading fails
   */
  function getFallbackTranslations() {
    return {
      trizel_ai_button_aria_label: "Talk to TRIZEL-AI Assistant",
      trizel_ai_modal_title: "Talk to TRIZEL-AI",
      trizel_ai_close_aria_label: "Close dialog",
      trizel_ai_governance_notice_title: "⚠️ Governance Notice",
      trizel_ai_governance_notice_subtitle: "UI Assistant Only — Non-Authoritative",
      trizel_ai_governance_notice_text: "This AI assistant provides navigation and explanation support only. It cannot execute, analyze, or modify data. All scientific and governance decisions remain under Layer-0 authority.",
      trizel_ai_status_badge: "Advisory UI Assistant — Phase F.1",
      trizel_ai_welcome_heading: "Welcome to TRIZEL-AI Assistant",
      trizel_ai_welcome_intro: "I'm your UI assistant for navigating the TRIZEL Scientific Observatory. I can help you:",
      trizel_ai_category_find_info: "Find Information:",
      trizel_ai_category_find_info_desc: "Locate specific sections, documents, or references",
      trizel_ai_category_understand: "Understand Structure:",
      trizel_ai_category_understand_desc: "Explain the three-layer architecture and governance framework",
      trizel_ai_category_navigate: "Navigate Content:",
      trizel_ai_category_navigate_desc: "Guide you through the Global Observation & Production Index (GOI)",
      trizel_ai_category_language: "Language Support:",
      trizel_ai_category_language_desc: "Assist with multilingual content access (EN, FR, AR, ZH, RU, DE)",
      trizel_ai_category_reference: "Reference Lookup:",
      trizel_ai_category_reference_desc: "Point you to relevant external resources and documentation",
      trizel_ai_limitations_heading: "What I Cannot Do",
      trizel_ai_limitations_intro: "As a UI-only assistant operating under Phase-F governance, I am strictly limited:",
      trizel_ai_limitation_no_exec: "❌ No Execution:",
      trizel_ai_limitation_no_exec_desc: "Cannot perform calculations, analysis, or data processing",
      trizel_ai_limitation_no_auth: "❌ No Authority:",
      trizel_ai_limitation_no_auth_desc: "Cannot make scientific or governance decisions",
      trizel_ai_limitation_no_mod: "❌ No Modification:",
      trizel_ai_limitation_no_mod_desc: "Cannot change data, schemas, or repository content",
      trizel_ai_limitation_no_live: "❌ No Live Data:",
      trizel_ai_limitation_no_live_desc: "Cannot access or integrate with external systems",
      trizel_ai_usage_heading: "How to Use",
      trizel_ai_usage_note_label: "Note:",
      trizel_ai_usage_note_text: "This is a UI shell component. The actual AI conversation interface is provided by external AI providers (such as GitHub Copilot, ChatGPT, or others) and is not part of this repository.",
      trizel_ai_usage_instruction: "To interact with the AI assistant, use your preferred AI provider's interface and ask questions about the TRIZEL repository content, structure, and documentation.",
      trizel_ai_usage_implementation: "Implementation detail: AI provider selection and integration happens outside this repository in accordance with Phase-F governance.",
      trizel_ai_governance_heading: "Governance & Boundaries",
      trizel_ai_governance_text_1: "This feature operates under the",
      trizel_ai_governance_link_1: "Phase-F Governance & AI Interaction Contract",
      trizel_ai_governance_text_2: "which establishes strict boundaries for AI interaction.",
      trizel_ai_governance_text_3: "All operations are subject to Layer-0 governance authority maintained in the",
      trizel_ai_governance_link_2: "trizel-core",
      trizel_ai_governance_text_4: "repository.",
      trizel_ai_footer_text_1: "Phase-F.1 UI Component • Governed by",
      trizel_ai_footer_link: "Phase-F Governance Contract",
      trizel_ai_footer_text_2: "• Layer-2 Presentation Only"
    };
  }
  
  /**
   * Get translation string
   */
  function t(key) {
    return currentTranslations && currentTranslations[key] ? currentTranslations[key] : getFallbackTranslations()[key] || key;
  }
  
  /**
   * Initialize TRIZEL AI Assistant UI
   */
  async function initTrizelAI() {
    // Load translations first
    await loadTranslations();
    
    // Create and inject AI assistant button
    createAIButton();
    
    // Create AI assistant modal
    createAIModal();
    
    // Set up event listeners
    setupEventListeners();
  }
  
  /**
   * Create the floating AI assistant button
   */
  function createAIButton() {
    const button = document.createElement('button');
    button.className = 'trizel-ai-button';
    button.setAttribute('aria-label', t('trizel_ai_button_aria_label'));
    button.setAttribute('type', 'button');
    button.id = 'trizel-ai-button';
    
    // AI icon (chat bubble with sparkle)
    button.innerHTML = `
      <svg class="trizel-ai-button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        <path d="M12 8v4"></path>
        <path d="M12 16h.01"></path>
      </svg>
    `;
    
    document.body.appendChild(button);
  }
  
  /**
   * Create the AI assistant modal dialog
   */
  function createAIModal() {
    const modal = document.createElement('div');
    modal.className = 'trizel-ai-modal';
    modal.id = 'trizel-ai-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'trizel-ai-modal-title');
    
    modal.innerHTML = `
      <div class="trizel-ai-modal-content">
        <header class="trizel-ai-modal-header">
          <h2 class="trizel-ai-modal-title" id="trizel-ai-modal-title">
            <svg class="trizel-ai-modal-title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              <path d="M12 8v4"></path>
              <path d="M12 16h.01"></path>
            </svg>
            ${t('trizel_ai_modal_title')}
          </h2>
          <button class="trizel-ai-modal-close" type="button" aria-label="${t('trizel_ai_close_aria_label')}" id="trizel-ai-modal-close">
            <svg class="trizel-ai-modal-close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </header>
        
        <div class="trizel-ai-modal-body">
          <!-- Governance Notice -->
          <div class="trizel-ai-governance-notice">
            <p class="trizel-ai-governance-notice-title">
              ${t('trizel_ai_governance_notice_title')}
            </p>
            <p class="trizel-ai-governance-notice-text">
              <strong>${t('trizel_ai_governance_notice_subtitle')}</strong><br>
              ${t('trizel_ai_governance_notice_text')}
            </p>
          </div>
          
          <!-- Status Badge -->
          <div class="trizel-ai-status">
            <span class="trizel-ai-status-indicator"></span>
            ${t('trizel_ai_status_badge')}
          </div>
          
          <!-- Main Content -->
          <div class="trizel-ai-content">
            <h3>${t('trizel_ai_welcome_heading')}</h3>
            
            <p>
              ${t('trizel_ai_welcome_intro')}
            </p>
            
            <ul>
              <li><strong>${t('trizel_ai_category_find_info')}</strong> ${t('trizel_ai_category_find_info_desc')}</li>
              <li><strong>${t('trizel_ai_category_understand')}</strong> ${t('trizel_ai_category_understand_desc')}</li>
              <li><strong>${t('trizel_ai_category_navigate')}</strong> ${t('trizel_ai_category_navigate_desc')}</li>
              <li><strong>${t('trizel_ai_category_language')}</strong> ${t('trizel_ai_category_language_desc')}</li>
              <li><strong>${t('trizel_ai_category_reference')}</strong> ${t('trizel_ai_category_reference_desc')}</li>
            </ul>
            
            <h3>${t('trizel_ai_limitations_heading')}</h3>
            
            <p>${t('trizel_ai_limitations_intro')}</p>
            
            <ul>
              <li><strong>${t('trizel_ai_limitation_no_exec')}</strong> ${t('trizel_ai_limitation_no_exec_desc')}</li>
              <li><strong>${t('trizel_ai_limitation_no_auth')}</strong> ${t('trizel_ai_limitation_no_auth_desc')}</li>
              <li><strong>${t('trizel_ai_limitation_no_mod')}</strong> ${t('trizel_ai_limitation_no_mod_desc')}</li>
              <li><strong>${t('trizel_ai_limitation_no_live')}</strong> ${t('trizel_ai_limitation_no_live_desc')}</li>
            </ul>
            
            <h3>${t('trizel_ai_usage_heading')}</h3>
            
            <p>
              <strong>${t('trizel_ai_usage_note_label')}</strong> ${t('trizel_ai_usage_note_text')}
            </p>
            
            <p>
              ${t('trizel_ai_usage_instruction')}
            </p>
            
            <p>
              <em>${t('trizel_ai_usage_implementation')}</em>
            </p>
            
            <h3>${t('trizel_ai_governance_heading')}</h3>
            
            <p>
              ${t('trizel_ai_governance_text_1')} 
              <a href="/PHASE_F_GOVERNANCE.md" target="_blank">${t('trizel_ai_governance_link_1')}</a>, 
              ${t('trizel_ai_governance_text_2')}
            </p>
            
            <p>
              ${t('trizel_ai_governance_text_3')} 
              <a href="https://github.com/trizel-ai/trizel-core" target="_blank" rel="noopener noreferrer">${t('trizel_ai_governance_link_2')}</a> 
              ${t('trizel_ai_governance_text_4')}
            </p>
          </div>
        </div>
        
        <footer class="trizel-ai-modal-footer">
          <p class="trizel-ai-footer-text">
            ${t('trizel_ai_footer_text_1')} 
            <a href="/PHASE_F_GOVERNANCE.md" target="_blank">${t('trizel_ai_footer_link')}</a> 
            ${t('trizel_ai_footer_text_2')}
          </p>
        </footer>
      </div>
    `;
    
    document.body.appendChild(modal);
  }
  
  /**
   * Set up event listeners
   */
  function setupEventListeners() {
    const button = document.getElementById('trizel-ai-button');
    const modal = document.getElementById('trizel-ai-modal');
    const closeBtn = document.getElementById('trizel-ai-modal-close');
    
    // Open modal on button click
    if (button) {
      button.addEventListener('click', openModal);
    }
    
    // Close modal on close button click
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }
    
    // Close modal on backdrop click
    if (modal) {
      modal.addEventListener('click', function(e) {
        if (e.target === modal) {
          closeModal();
        }
      });
    }
    
    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
        closeModal();
      }
    });
  }
  
  /**
   * Open the AI assistant modal
   */
  function openModal() {
    const modal = document.getElementById('trizel-ai-modal');
    const button = document.getElementById('trizel-ai-button');
    
    if (modal) {
      modal.classList.add('active');
      
      // Focus on close button for accessibility
      setTimeout(function() {
        const closeBtn = document.getElementById('trizel-ai-modal-close');
        if (closeBtn) {
          closeBtn.focus();
        }
      }, 100);
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      
      // Store the element that triggered the modal for focus return
      if (button) {
        modal.setAttribute('data-return-focus', 'trizel-ai-button');
      }
    }
  }
  
  /**
   * Close the AI assistant modal
   */
  function closeModal() {
    const modal = document.getElementById('trizel-ai-modal');
    
    if (modal) {
      modal.classList.remove('active');
      
      // Restore body scroll
      document.body.style.overflow = '';
      
      // Return focus to the button that opened the modal
      const returnFocusId = modal.getAttribute('data-return-focus');
      if (returnFocusId) {
        const returnElement = document.getElementById(returnFocusId);
        if (returnElement) {
          setTimeout(function() {
            returnElement.focus();
          }, 100);
        }
      }
    }
  }
  
  /**
   * Initialize on DOM ready
   */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTrizelAI);
  } else {
    initTrizelAI();
  }
})();
