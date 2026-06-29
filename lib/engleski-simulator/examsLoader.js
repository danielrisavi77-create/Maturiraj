// Lazy exam loader - only load exams when needed to reduce initial memory
let examsCache = null
let loadingPromise = null

export async function getExams() {
  // Return cached exams if already loaded
  if (examsCache) {
    return examsCache
  }

  // If already loading, wait for that promise
  if (loadingPromise) {
    return loadingPromise
  }

  // Load exams lazily
  loadingPromise = import('./exams').then(module => {
    examsCache = module.EXAMS
    return examsCache
  })

  return loadingPromise
}

export function getExamSync() {
  // Returns cached exams synchronously if available
  // Otherwise returns empty object
  return examsCache || {}
}

export function clearExamsCache() {
  // Manually clear cache if memory becomes an issue
  examsCache = null
  loadingPromise = null
}

// Preload exams in background (after initial render)
export function preloadExams() {
  if (typeof window !== 'undefined') {
    // Use requestIdleCallback if available, otherwise setTimeout
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => getExams())
    } else {
      setTimeout(() => getExams(), 2000)
    }
  }
}
