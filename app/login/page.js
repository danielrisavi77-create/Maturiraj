'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

const CSS = `
*,*::before,*::after{box-sizing:border-box}
html,body{margin:0;padding:0}
:root{
  --bg:#07090f;
  --s1:#0e1220;
  --s2:#141828;
  --txt:#e8ecf8;
  --muted:#7b82a0;
  --blue:#4b7bff;
  --violet:#7c5cfc;
  --border:#1e2440;
  --red:#f05c5c;
  --green:#3ecf6e;
}
body{
  background:linear-gradient(180deg,#07090f 0%,#0b1020 100%);
  color:var(--txt);
  font-family:Inter,system-ui,sans-serif;
}
.wrap{
  min-height:100vh;
  display:grid;
  place-items:center;
  padding:24px;
}
.card{
  width:100%;
  max-width:420px;
  background:rgba(14,18,32,.9);
  border:1px solid var(--border);
  border-radius:22px;
  padding:28px;
  box-shadow:0 20px 80px rgba(0,0,0,.35);
}
.badge{
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding:8px 12px;
  border-radius:999px;
  font-size:12px;
  font-weight:700;
  background:rgba(75,123,255,.12);
  border:1px solid rgba(75,123,255,.28);
  color:#b8c8ff;
  margin-bottom:16px;
}
.dot{
  width:8px;
  height:8px;
  border-radius:999px;
  background:var(--blue);
  box-shadow:0 0 14px var(--blue);
}
h1{
  margin:0 0 8px;
  font-size:30px;
  line-height:1.1;
}
.sub{
  margin:0 0 22px;
  color:var(--muted);
  font-size:14px;
  line-height:1.6;
}
.label{
  display:block;
  margin:0 0 8px;
  font-size:13px;
  font-weight:700;
}
.input{
  width:100%;
  height:48px;
  border-radius:14px;
  border:1px solid var(--border);
  background:var(--s2);
  color:var(--txt);
  padding:0 14px;
  font-size:14px;
  outline:none;
}
.input:focus{
  border-color:var(--blue);
}
.btn{
  width:100%;
  height:48px;
  border:none;
  border-radius:14px;
  cursor:pointer;
  font-weight:800;
  font-size:14px;
  color:white;
  margin-top:14px;
  background:linear-gradient(135deg,var(--blue),var(--violet));
  box-shadow:0 10px 30px rgba(75,123,255,.35);
}
.btn:disabled{
  opacity:.65;
  cursor:not-allowed;
}
.msg{
  margin-top:14px;
  font-size:13px;
  line-height:1.5;
}
.msg.error{color:var(--red)}
.msg.success{color:var(--green)}
`

export default function LoginPage() {
  const supabase = createClient()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  async function handleMagicLink(e) {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    setError('')

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/admin-pragovi`,
      },
    })

    if (error) {
      setError(error.message || 'Greška pri slanju magic linka.')
    } else {
      setMessage('Magic link je poslan na tvoj email.')
    }

    setLoading(false)
  }

  return (
    <>
      <style>{CSS}</style>

      <div className="wrap">
        <div className="card">
          <div className="badge">
            <span className="dot" />
            Privatni pristup
          </div>

          <h1>Admin prijava</h1>
          <p className="sub">
            Ova stranica nije javna. Prijavi se svojim emailom za pristup admin panelu.
          </p>

          <form onSubmit={handleMagicLink}>
            <label className="label">Email adresa</label>
            <input
              className="input"
              type="email"
              placeholder="ti@primjer.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button className="btn" type="submit" disabled={loading}>
              {loading ? 'Šaljem...' : 'Pošalji magic link'}
            </button>
          </form>

          {message ? <div className="msg success">{message}</div> : null}
          {error ? <div className="msg error">{error}</div> : null}
        </div>
      </div>
    </>
  )
}