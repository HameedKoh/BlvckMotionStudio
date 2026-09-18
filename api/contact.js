const recipient = 'blvckmotionstudio@gmail.com'

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;',
}[character]))

export default async function handler(request, response) {
  if (request.method !== 'POST') return response.status(405).json({ error: 'Method not allowed' })
  if (!process.env.RESEND_API_KEY) return response.status(500).json({ error: 'Email service is not configured' })

  const body = typeof request.body === 'string' ? JSON.parse(request.body) : request.body
  const { name, email, project } = body || {}
  if (!name || !email || !project) return response.status(400).json({ error: 'Please complete all fields' })

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'blvckmotionstudio website <onboarding@resend.dev>',
        to: [recipient],
        reply_to: email,
        subject: `New project enquiry from ${name}`,
        html: `<h2>New project enquiry</h2><p><strong>Name or brand:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Project:</strong></p><p>${escapeHtml(project).replace(/\n/g, '<br>')}</p>`,
      }),
    })

    if (!resendResponse.ok) {
      const resendError = await resendResponse.json().catch(() => ({}))
      return response.status(502).json({ error: resendError.message || 'Unable to send enquiry' })
    }
    return response.status(200).json({ ok: true })
  } catch {
    return response.status(502).json({ error: 'Email service could not be reached' })
  }
}