const GOOGLE_SHEETS_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbykyfSc32ZQ4TvfGUmpLIMJPhj4cs_c7Tz8PHOy46QZP7iNGaJ8WMpTN038pus1WYGn/exec';

export async function submitToGoogleSheets(data: Record<string, string>) {
  const iframeName = `google-sheets-submit-${Date.now()}`;
  const iframe = document.createElement('iframe');
  const form = document.createElement('form');

  iframe.name = iframeName;
  iframe.style.display = 'none';

  form.action = GOOGLE_SHEETS_ENDPOINT;
  form.method = 'POST';
  form.target = iframeName;
  form.style.display = 'none';

  Object.entries({
    ...data,
    submittedAt: new Date().toISOString(),
  }).forEach(([name, value]) => {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    input.value = value;
    form.appendChild(input);
  });

  await new Promise<void>((resolve, reject) => {
    const timeout = window.setTimeout(() => {
      cleanup();
      reject(new Error('Google Sheets submission timed out.'));
    }, 10000);

    function cleanup() {
      window.clearTimeout(timeout);
      iframe.remove();
      form.remove();
    }

    iframe.addEventListener('load', () => {
      cleanup();
      resolve();
    });

    document.body.appendChild(iframe);
    document.body.appendChild(form);
    form.submit();
  });
}
