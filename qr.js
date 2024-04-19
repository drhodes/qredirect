


function report(msg) {
  var span = document.getElementById("redir");
  span.textContent = msg;
}

/*------------------------------------------------------------------
  The following nested table has the form

  <language-code> => ( <resource-id> => <resource-url> )

  example, for a given resource referenced by a qr-code:
  
  "ht"               is the language code for haitian kreyòl
  "damped-vibration" is a resource-id

  These two keys are required to access the resource-url.
  ------------------------------------------------------------------*/

const REDIRECT_TABLE = {
  "ht": {
    "damped-vibrations":                  "https://haiti.mit.edu/hat/resous/mathlets/amotisman-vibrasyon/",
    "amplitude-and-phase-second-order-i": "https://haiti.mit.edu/hat/resous/mathlets/anplitid-al-faz-dezyem-od-i/",
  },
};

function redirect() {
  const searchParams = new URLSearchParams(window.location.search);
  const lang = searchParams.get("lang");
  const qr = searchParams.get("qr");

  if (lang == null) {
    report(`url is missing lang parameter, it must provide a two letter language code: &lang=[a-z][a-z]`);
    return;
  }
  if (qr == null) {
    report(`url is missing qr parameter, it must provide an identifier: &qr=[a-z\-]+`);
    return;
  }

  const lang_table = REDIRECT_TABLE[lang];
  if (lang_table === undefined) {
    report(`could not find language table for: language code: ` + lang);
    return;
  }

  const target_url = lang_table[qr];
  if (target_url === undefined) {
    report(`could not find redirect url: qr code identifier: ` + qr);
    return;
  }
  
  if (target_url === undefined) {
    report("got an undefined qr code.");
  } else {  
    report("redirecting to: " + target_url);
    window.location.replace(target_url);
  }
}

redirect();

