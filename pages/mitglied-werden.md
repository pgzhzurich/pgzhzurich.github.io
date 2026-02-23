---
layout: page
title: Warum Mitglied werden?
permalink: /pages/mitglied-werden/
description: Werde Mitglied beim Paragliding Club Zürich und profitiere von vielen Vorteilen
---

Der {{ site.name.short }} pflegt und erhält das Fluggebiet Uetliberg und besteht aus einer aktiven Community von begeisterten Gleitschirmpiloten und -pilotinnen aus der Region Zürich.

## Deine Vorteile als Mitglied

<div class="row my-4">
  <div class="col-md-6 mb-3">
    <div class="card h-100">
      <div class="card-body">
        <h5><span class="badge text-bg-success me-2">✓</span> Reduzierte Uetlibergkarte</h5>
        <p>CHF 20.– statt CHF 40.– für die Jahreskarte am Uetliberg.</p>
      </div>
    </div>
  </div>
  
  <div class="col-md-6 mb-3">
    <div class="card h-100">
      <div class="card-body">
        <h5><span class="badge text-bg-success me-2">✓</span> Veranstaltungen</h5>
        <p>Zugang zu allen Club-Veranstaltungen inkl. Flug/Event Tagen und gelegentlichen Themenabenden.</p>
      </div>
    </div>
  </div>
  
  <div class="col-md-6 mb-3">
    <div class="card h-100">
      <div class="card-body">
        <h5><span class="badge text-bg-success me-2">✓</span> Erfahrungsaustausch</h5>
        <p>Profitiere vom Wissen erfahrener Piloten bei Diskussionen in der WhatsApp-Community.</p>
      </div>
    </div>
  </div>
  
  <div class="col-md-6 mb-3">
    <div class="card h-100">
      <div class="card-body">
        <h5><span class="badge text-bg-success me-2">✓</span> Community</h5>
        <p>Lerne andere Gleitschirmpiloten und -pilotinnen aus der Region Zürich kennen.</p>
      </div>
    </div>
  </div>
</div>

## Voraussetzungen

- Gültiges Gleitschirm-Brevet
- Begeisterung fürs Gleitschirmfliegen
- Bereitschaft zum aktiven Mitmachen

## Mitgliedsbeitrag

Der jährliche Mitgliedsbeitrag beträgt **CHF 40.–** und wird an der Generalversammlung festgelegt. Zusätzlich erhalten Mitglieder die Möglichkeit die [Uetlibergkarte](/pages/uetlibergkarte/) zu einem ermässigten Preis von **CHF 20.-** zu erwerben.

{% include statuten.html %}

## Anmeldung

Interessiert? Dann kannst du dich hier direkt anmelden. Wir freuen uns auf deine Nachricht!

### Option 1: Mit TWINT

<div class="twint-button-container" data-solution-id="{{ site.twint_id.mitgliedschaft }}"></div>

### Option 2: Ich habe kein TWINT

Wenn du kein TWINT hast, kannst du deine Mitgliedschaft per E-Mail beantragen. Wir werden dich dann kontaktieren und dir die Zahlungsmodalitäten mitteilen.

<form id="membershipForm" class="mb-5" method="POST" action="javascript:void(0);">
  <div class="mb-3">
    <label for="name" class="form-label">Name*</label>
    <input type="text" class="form-control" id="name" name="name" required placeholder="Vorname Nachname">
  </div>

  <div class="mb-3">
    <label for="phone" class="form-label">Handy</label>
    <input type="tel" class="form-control" id="phone" name="phone"  placeholder="+41 79 123 45 67">
  </div>

  <div class="mb-3">
    <label class="form-label">Addresse*</label>
    <input type="text" class="form-control" id="street" name="street" required placeholder="Strasse">
    <input type="text" class="form-control" id="street_number" name="street_number" required placeholder="Hausnummer">
    <input type="number" class="form-control" id="plz" name="plz" required placeholder="Postleitzahl">
    <input type="text" class="form-control" id="city" name="city" required placeholder="Ort">
  </div>

  <div class="mb-3">
    <label for="notes" class="form-label">Nachricht (optional)</label>
    <textarea class="form-control" id="message" name="message" rows="3"></textarea>
  </div>

  <button type="submit" class="btn btn-primary">
    <span class="me-2">✉</span> Anmeldung einreichen
  </button>
</form>

<script>
document.getElementById('membershipForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Validate form
  if (!this.checkValidity()) {
    this.classList.add('was-validated');
    return;
  }
  
  // Collect form data
  const formData = {
    name: document.getElementById('name').value,
    phone: document.getElementById('phone').value,
    street: document.getElementById('street').value,
    street_number: document.getElementById('street_number').value,
    plz: document.getElementById('plz').value,
    city: document.getElementById('city').value,
    message: document.getElementById('message').value
  };
  
  // Create email subject and body
  const subject = 'Mitgliedschaft {{ site.name.short }} - ' + formData.name;
  const body = 
    'Liebes {{ site.name.short }} Team\n\n' +
    'Ich möchte Mitglied werden und habe kein TWINT. Hier sind meine Daten:\n\n' +
    'Name: ' + formData.name + '\n' +
    (formData.phone ? 'Telefon: ' + formData.phone + '\n' : '') +
    'Adresse: ' + formData.street + ' ' + formData.street_number + ', ' + formData.plz + ' ' + formData.city + '\n' +
    (formData.message ? 'Nachricht: ' + formData.message + '\n' : '') +
    '\nBitte kontaktiert mich bezüglich der Zahlungsmodalitäten.\n\n' +
    'Vielen Dank!';
  
  // Encode for mailto link
  const mailtoLink = 'mailto:' + '{{ site.email }}' + 
    '?subject=' + encodeURIComponent(subject) + 
    '&body=' + encodeURIComponent(body);
  
  // Open email client
  window.location.href = mailtoLink;
});
</script>

## Häufige Fragen

<div class="accordion" id="faqAccordion">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
        Kann ich als Anfänger Mitglied werden?
      </button>
    </h2>
    <div id="faq1" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
      <div class="accordion-body">
        Ja! Wir heissen Piloten aller Erfahrungsstufen willkommen. Wichtig ist nur, dass du ein gültiges Gleitschirm-Brevet besitzt.
      </div>
    </div>
  </div>
  
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
        Muss ich an allen Veranstaltungen teilnehmen?
      </button>
    </h2>
    <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
      <div class="accordion-body">
        Nein, die Teilnahme an Veranstaltungen ist völlig freiwillig. Du entscheidest selbst, wann und wo du dabei sein möchtest.
      </div>
    </div>
  </div>
  
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
        Kann ich auch ohne Mitgliedschaft am Uetliberg fliegen?
      </button>
    </h2>
    <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
      <div class="accordion-body">
        Ja, du benötigst aber eine Uetlibergkarte (CHF 40.– für Nicht-Mitglieder). Diese kannst du  <a
      href="{{ '/pages/uetlibergkarte' | relative_url }}"
      >hier</a
    > bestellen.
      </div>
    </div>
  </div>
</div>
