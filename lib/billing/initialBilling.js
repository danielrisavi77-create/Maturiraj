/** Čita ?billing=mj|god|monthly|yearly s landinga / Cijena. */
export function initialBillingFromSearch(searchParams) {
  const b = searchParams?.get?.('billing')
  if (b === 'god' || b === 'yearly') return 'yearly'
  return 'monthly'
}
