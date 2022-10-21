// obtain iframemanager object
var manager = iframemanager();

// obtain plugin
var cc = initCookieConsent();

// Configure with youtube embed
manager.run({
  currLang: "de",
  services: {
    youtube: {
      embedUrl: "https://www.youtube-nocookie.com/embed/{data-id}",
      thumbnailUrl: "https://i3.ytimg.com/vi/{data-id}/hqdefault.jpg",
      iframe: {
        allow:
          "accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen;",
      },
      cookie: {
        name: "cookie-consent-youtube",
      },
      languages: {
        de: {
          notice:
            'Diese Inhalte ... <a rel="noreferrer" href="https://www.youtube.com/t/terms" title="Terms and conditions" target="_blank">terms and conditions</a> of youtube.com.',
          loadBtn: "Load video",
          loadAllBtn: "Don't ask again",
        },
      },
    },
  },
});

// run plugin with your configuration
cc.run({
  current_lang: "de",
  autoclear_cookies: true, // default: false
  page_scripts: true, // default: false

  // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
  // delay: 0,                               // default: 0
  // auto_language: null                     // default: null; could also be 'browser' or 'document'
  // autorun: true,                          // default: true
  // force_consent: false,                   // default: false
  hide_from_bots: true, // default: false
  // remove_cookie_tables: false             // default: false
  cookie_name: "cookie-consent", // default: 'cc_cookie'
  cookie_expiration: 365, // default: 182 (days)
  // cookie_necessary_only_expiration: 182   // default: disabled
  // cookie_domain: location.hostname,       // default: current domain
  // cookie_path: '/',                       // default: root
  // cookie_same_site: 'Lax',                // default: 'Lax'
  // use_rfc_cookie: false,                  // default: false
  //   revision: 0, // default: 0

  onFirstAction: function (user_preferences, cookie) {
    // callback triggered only once
    // if (!cc.allowedCategory("media")) {
    //   console.log("iframemanager: disabling all iframes");
    //   manager.rejectService("youtube");
    // }
  },

  onAccept: function (cookie) {
    // ...
    if (cc.allowedCategory("media")) {
      //   console.log("iframemanager: loading all iframes");
      manager.acceptService("youtube");
    }
  },

  onChange: function (cookie, changed_preferences) {
    // ...
    console.log("change ongoing");

    // If analytics category is disabled => ask for permission to load iframes
    if (!cc.allowedCategory("media")) {
      //   console.log("iframemanager: disabling all iframes");
      manager.rejectService("all");
    } else {
      //   console.log("iframemanager: loading all iframes");
      manager.acceptService("all");
    }
  },

  gui_options: {
    consent_modal: {
      layout: "box", // box/cloud/bar
      position: "bottom center", // bottom/middle/top + left/right/center
      transition: "zoom", // zoom/slide
      swap_buttons: false, // enable to invert buttons
    },
    settings_modal: {
      layout: "box", // box/bar
      // position: 'left',           // left/right
      transition: "slide", // zoom/slide
    },
  },

  languages: {
    de: {
      consent_modal: {
        title: "Wir verwenden Cookies,",
        description:
          'um Ihnen die optimale Nutzung unserer Webseite zu ermöglichen. Für den Betrieb notwendige Cookies werden gesetzt, Cookies für Statistikzwecke und Inhalte von Drittanbietern können Sie einzeln zulassen. Die Datenschutzeinstellungen können Sie jederzeit anpassen. <br><br><a href="#" class="cc-link">Unsere Datenschutzerklärung</a>.<br><br><button type="button" data-cc="c-settings" class="cc-link">Cookie-Einstellungen anpassen</button>',
        revision_message:
          "<br><br> Dude, my terms have changed. Sorry for bothering you again!<br><br>",
        primary_btn: {
          text: "Accept all",
          role: "accept_all", // 'accept_selected' or 'accept_all'
        },
        secondary_btn: {
          text: "Reject all",
          role: "accept_necessary", // 'settings' or 'accept_necessary'
        },
      },
      settings_modal: {
        title: "Cookie Einstellungen",
        save_settings_btn: "Einstellungen speichern",
        accept_all_btn: "Alle Cookies akzeptieren",
        reject_all_btn: "Alle Cookies ablehnen",
        close_btn_label: "schließen",
        cookie_table_headers: [
          { col1: "Name" },
          { col2: "Domain" },
          { col3: "Speicherdauer" },
          { col4: "Beschreibung" },
        ],
        blocks: [
          {
            title: "So verwenden wir Cookies",
            description:
              'Wir verwenden Cookies, um Ihnen die optimale Nutzung unserer Webseite zu ermöglichen. Für den Betrieb notwendige Cookies werden gesetzt, Cookies für Statistikzwecke und Inhalte von Drittanbietern können Sie einzeln zulassen. Die Datenschutzeinstellungen können Sie jederzeit anpassen. <a href="#" class="cc-link">Unsere Datenschutzerklärung</a>.',
          },
          {
            title: "Technisch notwendige Cookies",
            description:
              "These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly",
            toggle: {
              value: "necessary",
              enabled: true,
              readonly: true, // cookie categories with readonly=true are all treated as "necessary cookies"
            },
          },
          {
            title: "Analytics Cookies",
            description:
              "These cookies allow the website to remember the choices you have made in the past",
            toggle: {
              value: "analytics", // your cookie category
              enabled: false,
              readonly: false,
            },
            cookie_table: [
              // list of all expected cookies
              {
                col1: "^_ga", // match all cookies starting with "_ga"
                col2: "google.com",
                col3: "2 years",
                col4: "description ...",
                is_regex: true,
              },
              {
                col1: "_gid",
                col2: "google.com",
                col3: "1 day",
                col4: "description ...",
              },
            ],
          },
          {
            title: "YouTube und Vimeo",
            description:
              "These cookies allow the website to remember the choices you have made in the past",
            toggle: {
              value: "media", // your cookie category
              enabled: false,
              readonly: false,
            },
            cookie_table: [
              // list of all expected cookies

              {
                col1: "cookie-consent-youtube",
                col2: "/",
                col3: "1 day",
                col4: "description ...",
              },
            ],
          },
          {
            title: "Adobe Fonts & Google Fonts",
            description:
              "These cookies allow the website to remember the choices you have made in the past",
            toggle: {
              value: "analytics", // your cookie category
              enabled: false,
              readonly: false,
            },
            cookie_table: [
              // list of all expected cookies
              {
                col1: "^_ga", // match all cookies starting with "_ga"
                col2: "google.com",
                col3: "2 years",
                col4: "description ...",
                is_regex: true,
              },
              {
                col1: "_gid",
                col2: "google.com",
                col3: "1 day",
                col4: "description ...",
              },
            ],
          },
          {
            title: "More information",
            description:
              'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="#yourcontactpage">contact us</a>.',
          },
        ],
      },
    },
  },
});
