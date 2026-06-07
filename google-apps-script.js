/**
 * STAMINA Centro de Entrenamiento — Google Apps Script
 *
 * INSTRUCCIONES DE CONFIGURACIÓN:
 * ─────────────────────────────────────────────
 * 1. Abre Google Sheets en drive.google.com y crea una hoja nueva.
 *    Ponle el nombre que quieras, p.ej. "Leads STAMINA".
 *
 * 2. En la hoja, ve a Extensiones → Apps Script.
 *
 * 3. Borra todo el código que aparece y pega este archivo completo.
 *
 * 4. Cambia TU_CORREO_AQUI por tu dirección de correo real (línea 30).
 *
 * 5. Pulsa el botón "Guardar" (icono de disco) o Ctrl+S.
 *
 * 6. Haz clic en "Implementar" → "Nueva implementación".
 *    - Tipo: Aplicación web
 *    - Ejecutar como: Yo (tu cuenta de Google)
 *    - Quién tiene acceso: Cualquier usuario
 *    → Pulsa "Implementar" y copia la URL que aparece.
 *
 * 7. En el proyecto de la web, abre el archivo .env y escribe:
 *    VITE_SHEETS_URL=https://script.google.com/macros/s/TU_ID/exec
 *
 * 8. Reinicia el servidor de desarrollo (npm run dev).
 *    Para producción, añade la variable de entorno en Vercel/Netlify.
 *
 * ─────────────────────────────────────────────
 * Cada envío del formulario:
 *   ✅ Añade una fila en Google Sheets
 *   ✅ Te envía un email automático con los datos del lead
 */

const SHEET_NAME = 'Leads'
const TO_EMAIL   = 'nachofernandezca2000@gmail.com'   // ← Pon aquí tu correo, p.ej. 'nacho@gmail.com'

function doPost(e) {
  try {
    const data  = JSON.parse(e.postData.contents)
    const sheet = getOrCreateSheet()

    // Crear cabeceras si la hoja está vacía
    if (sheet.getLastRow() === 0) {
      const headers = ['Fecha', 'Nombre', 'Teléfono', 'Email', 'Objetivo', 'Plan']
      sheet.appendRow(headers)
      sheet.getRange(1, 1, 1, headers.length)
        .setFontWeight('bold')
        .setBackground('#1a1a1a')
        .setFontColor('#C9A84C')
    }

    const fecha = data.fecha || new Date().toLocaleString('es-ES')

    sheet.appendRow([
      fecha,
      data.name  || '',
      data.phone || '',
      data.email || '',
      data.goal  || '',
      data.plan  || '',
    ])

    // Enviar email de notificación
    if (TO_EMAIL && TO_EMAIL !== 'TU_CORREO_AQUI') {
      const asunto  = `🏋️ Nuevo lead STAMINA — ${data.name || 'Sin nombre'}`
      const cuerpo  =
        `Nuevo formulario recibido en STAMINA Centro de Entrenamiento\n\n` +
        `📅 Fecha:    ${fecha}\n` +
        `👤 Nombre:   ${data.name  || '—'}\n` +
        `📞 Teléfono: ${data.phone || '—'}\n` +
        `📧 Email:    ${data.email || '—'}\n` +
        `🎯 Objetivo: ${data.goal  || '—'}\n` +
        `📋 Plan:     ${data.plan  || '—'}\n\n` +
        `Responde rápido, las plazas son limitadas 💪`

      MailApp.sendEmail(TO_EMAIL, asunto, cuerpo)
    }

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON)

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: err.message }))
      .setMimeType(ContentService.MimeType.JSON)
  }
}

function getOrCreateSheet() {
  const ss    = SpreadsheetApp.getActiveSpreadsheet()
  let   sheet = ss.getSheetByName(SHEET_NAME)
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME)
  return sheet
}

// Función de prueba — ejecútala manualmente desde el editor de Apps Script
// para verificar que escribe en la hoja Y te llega el email
function testDoPost() {
  const fakeEvent = {
    postData: {
      contents: JSON.stringify({
        fecha:  '10/05/2026, 12:00:00',
        name:   'Usuario de prueba',
        phone:  '600 123 456',
        email:  'prueba@email.com',
        goal:   'Ganar fuerza y músculo',
        plan:   'STAMINA',
      }),
    },
  }
  const result = doPost(fakeEvent)
  Logger.log(result.getContent())
}
