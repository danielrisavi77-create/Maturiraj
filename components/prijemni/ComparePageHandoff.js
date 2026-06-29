'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const STORAGE_KEY = 'mh_compare_studiji'

export default function ComparePageHandoff({ ids }) {
  const router = useRouter()

  useEffect(() => {
    // Zapiši u localStorage (isti key kao compareStore)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
    } catch {}
    // Redirect na /prijemni sa query flag-om da auto-otvori compare
    router.replace('/prijemni?openCompare=1')
  }, [ids, router])

  return (
    <div style={{minHeight:'100vh',background:'var(--bg)',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{textAlign:'center',color:'var(--muted)'}}>
        <div style={{width:32,height:32,border:'2px solid var(--bdr)',borderTopColor:'var(--blue)',borderRadius:'50%',animation:'pr-spin .7s linear infinite',margin:'0 auto 16px'}}/>
        <div style={{fontSize:13}}>Pripremam usporedbu...</div>
      </div>
    </div>
  )
}
