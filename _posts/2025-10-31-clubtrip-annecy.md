---
layout: post
title: "Clubtrip nach Annecy, 7.-10. August 2025"
date: 2025-08-10
categories: [News, Events]
tags: [Annecy, Clubtrip, Fluggebiet]
image: annecy_5.jpg
description: Bericht vom Clubtrip nach Annecy
---

Dieses Jahr wagten wir zu sechst das Abenteuer, zusammen ein Fluggebiet im benachbarten Ausland anzusteuern: am wunderschönen See von Annecy!

## Traumhafte Flugbedingungen

Bei traumhaftem Flugwetter an allen vier Tagen durften wir die malerische Landschaft um den See kennenlernen, von ersten Talsprüngen bis hin zu Pro-Tipps zur Thermikprognose war für alle von uns etwas Lehrreiches dabei.

Manche haben an diesem Trip mehr Flugstunden oder beim Hiken mehr Höhenmeter gesammelt als im ganzen Rest des Jahres.

## Après-Fly am See

Abends rundeten ausgefallene Pizzen und ein Sprung in den erfrischenden See die schönen Tage ab, sodass wir in bester Stimmung am Sonntag gemeinsam zurück nach Hause fuhren.

## Highlights

- 4 Tage perfektes Flugwetter
- Wunderschöne Landschaft am Lac d'Annecy
- Gemeinsame Hike & Flys zu den Startplätzen
- Thermiktraining mit den Profis
- Abendliches Beisammensein am See

Wir danken allen Teilnehmern für die tolle Stimmung und freuen uns schon auf den nächsten Trip!

<!-- Image Gallery with Carousel Modal -->
<div class="row my-4" id="imageGallery">
  <div class="col-md-6 mb-3">
    {% picture thumbnail annecy.jpg --alt Annecy Aufstieg --img class="img-fluid rounded" data-bs-toggle="modal" data-bs-target="#carouselModal" data-slide-index="0" role="button %}
  </div>
  <div class="col-md-6 mb-3">
    {% picture thumbnail annecy_4.jpg --alt Annecy Flug --img class="img-fluid rounded" data-bs-toggle="modal" data-bs-target="#carouselModal" data-slide-index="4" role="button" %}
  </div>
  <div class="col-md-6 mb-3">
    {% picture thumbnail annecy_5.jpg --alt Annecy See --img class="img-fluid rounded" data-bs-toggle="modal" data-bs-target="#carouselModal" data-slide-index="5" role="button" %}
  </div>
  <div class="col-md-6 mb-3">
    {% picture thumbnail annecy_6.jpg --alt Annecy --img class="img-fluid rounded" data-bs-toggle="modal" data-bs-target="#carouselModal" data-slide-index="6" role="button" %}
  </div>
</div>

<!-- Carousel Modal -->
<div class="modal fade" id="carouselModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content bg-dark">
      <div class="modal-header border-secondary">
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body d-flex align-items-center justify-content-center">
        <div id="galleryCarousel" class="carousel slide w-100" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              {% picture modal annecy.jpg --alt Annecy Aufstieg --img class="d-block mx-auto" %}
            </div>
            <div class="carousel-item">
              {% picture modal annecy_1.jpg --alt Annecy Aufstieg --img class="d-block mx-auto"  %}
            </div>
            <div class="carousel-item">
              {% picture modal annecy_2.jpg --alt Annecy See --img class="d-block mx-auto" %}
            </div>
            <div class="carousel-item">
              {% picture modal annecy_3.jpg --alt Annecy See --img class="d-block mx-auto"  %}
            </div>
            <div class="carousel-item">
              {% picture modal annecy_4.jpg --alt Annecy Flug --img class="d-block mx-auto"  %}
            </div>
            <div class="carousel-item">
              {% picture modal annecy_5.jpg --alt Annecy See --img class="d-block mx-auto"  %}
            </div>
            <div class="carousel-item">
              {% picture modal annecy_6.jpg --alt Annecy --img class="d-block mx-auto"%}
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#galleryCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Zurück</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#galleryCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Vor</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
