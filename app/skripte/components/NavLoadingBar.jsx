'use client'
import { useEffect } from 'react'

/**
 * Shows a full-page loading overlay on the CURRENT page immediately when
 * the user clicks any same-origin navigation link. The overlay stays visible
 * while the browser waits for the next page to respond (dev compilation delay).
 * The new page always starts without the overlay.
 */
export default function NavLoadingBar() {
  useEffect(() => {
    // --- Build overlay elements ---
    const style = document.createElement('style')
    style.textContent = `
      #__nav-loading {
        position: fixed;
        inset: 0;
        background: #0F0605;
        z-index: 99999;
        display: none;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.12s ease;
        pointer-events: none;
      }
      #__nav-loading.visible {
        display: flex;
        opacity: 1;
        pointer-events: all;
      }
      @keyframes __nav-bar {
        0%   { left: -60%; width: 55% }
        100% { left: 110%; width: 55% }
      }
      @keyframes __nav-spin {
        to { transform: rotate(360deg) }
      }
    `
    document.head.appendChild(style)

    const overlay = document.createElement('div')
    overlay.id = '__nav-loading'
    overlay.innerHTML = `
      <div style="
        position:absolute;top:0;left:0;right:0;height:2px;
        background:#0F0605;overflow:hidden;
      ">
        <div style="
          position:absolute;top:0;height:100%;
          background:linear-gradient(90deg,#E8C97A,#DC322F,#E8C97A);
          animation:__nav-bar 1.1s cubic-bezier(.4,0,.2,1) infinite;
        "></div>
      </div>
      <div style="
        width:28px;height:28px;
        border:2px solid rgba(232,201,122,0.15);
        border-top-color:#E8C97A;
        border-radius:50%;
        animation:__nav-spin 0.75s linear infinite;
      "></div>
    `
    document.body.appendChild(overlay)

    // Show overlay on rAF after adding class so transition fires
    function show() {
      overlay.style.display = 'flex'
      requestAnimationFrame(() => overlay.classList.add('visible'))
    }

    function hide() {
      overlay.classList.remove('visible')
      setTimeout(() => { overlay.style.display = 'none' }, 150)
    }

    // --- Click handler ---
    function handleClick(e) {
      const anchor = e.target.closest('a[href]')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href) return
      // Skip non-navigation hrefs
      if (
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('javascript:')
      ) return
      if (anchor.target === '_blank') return
      if (anchor.hasAttribute('download')) return

      // Only same-origin, different path
      try {
        const url = new URL(href, window.location.href)
        if (url.origin !== window.location.origin) return
        if (
          url.pathname === window.location.pathname &&
          url.search === window.location.search
        ) return
      } catch { return }

      const beforeHref = window.location.href
      show()

      // Some chapter links are intentionally intercepted (paywall/modal)
      // and call preventDefault() without navigating. In that case, hide the
      // loader again so it does not appear as a stuck chapter reload.
      setTimeout(() => {
        if (!e.defaultPrevented) return
        requestAnimationFrame(() => {
          if (window.location.href === beforeHref) hide()
        })
      }, 0)
    }

    // Hide if user navigates back (bfcache restore)
    function handlePageShow(e) {
      if (e.persisted) hide()
    }

    document.addEventListener('click', handleClick, true)
    window.addEventListener('pageshow', handlePageShow)

    return () => {
      document.removeEventListener('click', handleClick, true)
      window.removeEventListener('pageshow', handlePageShow)
      style.remove()
      overlay.remove()
    }
  }, [])

  return null
}
