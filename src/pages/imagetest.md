<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>11ty</title>
    <style type="text/css" media="screen">
      img {
        display: block;
        height: auto;
        max-width: 100%;
      }
      .flex {
        display: flex;
      }
      .frame {
        max-width: 20%;
      }
      .frame + .frame1 {
        margin-left: 1rem;
      }

      .frame3 {
        margin: 3rem;
      }
    </style>

  </head>
  <body>
<a href="/">/home/</a>
    <h3>11ty</h3>

    <div class="">
      {% image
      "https://www.restaurants-neumuenster.de/site/assets/files/5658/burgergalerie-neumuenster-logo.png",
      "alt", [null] %}
    </div>
    <div class="flex1">
      <div class="frame">
        {% image "./src/assets/images/306406.jpg", "alt", [200] %}
      </div>
      <div class="frame">
        {% image "./src/assets/images/306457.jpg", "alt", [200] %}
      </div>
      <div class="frame">
        {% image "./src/assets/images/306472.jpg", "alt", [200] %}
      </div>
      <div class="frame">
        {% image "./src/assets/images/306649.jpg", "alt", [200] %}
      </div>
    </div>

    <div>
      {% image
      "https://www.nomad-rent.ch/site/assets/files/3656/5dsmkiv.200x0.jpg",
      "alt", [320] %}

      <hr />
      https://www.nomad-rent.ch/site/assets/files/3656/5dsmkiv.200x0.jpg
    </div>

    <!-- <div>
      <h3>Classic</h3>
      <img src="/assets/images/bild.jpg" alt="" />
    </div> -->

  </body>
</html>
