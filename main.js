/**
 * Land Kings — CRM Form Handler
 * Routes all form submissions through the Cloudflare Worker to CRM
 * Worker URL: https://crm-forwarder.lkdev.workers.dev
 */

const WORKER_URL = 'https://crm-forwarder.lkdev.workers.dev/';

// ─── SELLER FORM ───────────────────────────────────────────────────────────────
async function handleSellerSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn ? btn.textContent : 'Get My Offers';
  
  try {
    if (btn) { btn.textContent = 'Sending...'; btn.disabled = true; }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    data.submitterType = 'seller';

    const response = await fetch(WORKER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    
    if (result.success) {
      showFormSuccess(form, 'Thank you! We received your property info and will be in touch within 24 hours.');
    } else {
      showFormError(form, result.error || 'Something went wrong. Please try again or email us directly.');
    }
  } catch (error) {
    showFormError(form, 'Network error. Please check your connection and try again.');
  } finally {
    if (btn) { btn.textContent = originalText; btn.disabled = false; }
  }
}

// ─── BIRDDOG / DEAL SUBMITTER FORM ─────────────────────────────────────────────
async function handleBirddogSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn ? btn.textContent : 'Submit Deal';
  
  try {
    if (btn) { btn.textContent = 'Submitting Deal...'; btn.disabled = true; }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    data.submitterType = 'broker';

    const response = await fetch(WORKER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    
    if (result.success) {
      showFormSuccess(form, 'Deal submitted! Our team reviews new deals weekly. If it\'s a fit, we\'ll reach out within 5 business days.');
    } else {
      showFormError(form, result.error || 'Something went wrong. Please try again or text us the deal directly.');
    }
  } catch (error) {
    showFormError(form, 'Network error. Please try again.');
  } finally {
    if (btn) { btn.textContent = originalText; btn.disabled = false; }
  }
}

// ─── INVESTOR / JV FORM ────────────────────────────────────────────────────────
async function handleInvestorSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn ? btn.textContent : 'Submit Inquiry';
  
  try {
    if (btn) { btn.textContent = 'Submitting...'; btn.disabled = true; }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    data.submitterType = 'investor';

    const response = await fetch(WORKER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    
    if (result.success) {
      showFormSuccess(form, 'Application received! Our investment team reviews submissions every Friday. We\'ll be in touch.');
    } else {
      showFormError(form, result.error || 'Something went wrong. Please try again.');
    }
  } catch (error) {
    showFormError(form, 'Network error. Please try again.');
  } finally {
    if (btn) { btn.textContent = originalText; btn.disabled = false; }
  }
}

// ─── JV MODAL FORM ─────────────────────────────────────────────────────────────
async function handleJVSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn ? btn.textContent : 'Submit Application';
  
  try {
    if (btn) { btn.textContent = 'Sending...'; btn.disabled = true; }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    data.submitterType = 'investor';

    const response = await fetch(WORKER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    
    if (result.success) {
      showFormSuccess(form, 'Application submitted! We review JV applications every Friday. Expect a response within 5 business days.');
    } else {
      showFormError(form, result.error || 'Something went wrong.');
    }
  } catch (error) {
    showFormError(form, 'Network error. Please try again.');
  } finally {
    if (btn) { btn.textContent = originalText; btn.disabled = false; }
  }
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function showFormSuccess(form, message) {
  form.innerHTML = `<div style="text-align:center;padding:2rem;border-radius:8px;background:#d1fae5;color:#065f46;font-family:inherit;">
    <strong style="font-size:1.25rem;">✓ Success!</strong>
    <p style="margin:0.75rem 0 0;">${message}</p>
  </div>`;
}

function showFormError(form, message) {
  const errorDiv = document.createElement('div');
  errorDiv.style.cssText = 'margin-top:0.75rem;padding:0.75rem;border-radius:6px;background:#fee2e2;color:#991b1b;font-size:0.875rem;';
  errorDiv.textContent = message;
  
  const existingError = form.parentNode.querySelector('.form-error');
  if (existingError) existingError.remove();
  
  errorDiv.className = 'form-error';
  form.parentNode.appendChild(errorDiv);
  
  setTimeout(() => errorDiv.remove(), 8000);
}

// ─── JV MODAL CONTROLS ────────────────────────────────────────────────────────
function openJVModal() {
  const modal = document.getElementById('jvModal');
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeJVModal() {
  const modal = document.getElementById('jvModal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
  const form = document.getElementById('jvForm');
  if (form) form.reset();
}

document.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal-backdrop')) {
    closeJVModal();
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeJVModal();
});

// ─── EXISTING LAND KINGS JS ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initSmoothScroll();
});

function initMobileNav() {
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  if (!navToggle || !mainNav) return;
  navToggle.addEventListener('click', () => {
    const isActive = mainNav.classList.toggle('active');
    navToggle.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
  });
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('active');
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !mainNav.contains(e.target)) {
      mainNav.classList.remove('active');
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    });
  });
}