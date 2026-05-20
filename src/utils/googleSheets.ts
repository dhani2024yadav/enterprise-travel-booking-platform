const GOOGLE_SHEETS_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbwM7E204sA6H48_dGt14lZspFoRGwDiiEgXJxoOxnB8ZADepzF_0sMOMgRXGfIm3S4k/exec';

export async function submitToGoogleSheets(data: Record<string, string>, endpoint: string = GOOGLE_SHEETS_ENDPOINT) {
  const urlEncoded = new URLSearchParams();
  Object.entries({
    ...data,
    submittedAt: new Date().toISOString(),
  }).forEach(([key, value]) => {
    urlEncoded.append(key, value);
  });

  // Google Apps Script requires mode: 'no-cors' to prevent CORS preflight blocks.
  // The request is sent and executed successfully on the server side, even though
  // the browser receives an opaque response.
  await fetch(endpoint, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: urlEncoded,
  });
}
