const GOOGLE_SHEETS_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbykyfSc32ZQ4TvfGUmpLIMJPhj4cs_c7Tz8PHOy46QZP7iNGaJ8WMpTN038pus1WYGn/exec';

export async function submitToGoogleSheets(data: Record<string, string>) {
  const formData = new FormData();

  Object.entries({
    ...data,
    submittedAt: new Date().toISOString(),
  }).forEach(([key, value]) => {
    formData.append(key, value);
  });

  await fetch(GOOGLE_SHEETS_ENDPOINT, {
    method: 'POST',
    mode: 'no-cors',
    body: formData,
  });
}
