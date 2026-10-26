# Bobgoo

Web corporatiu mínim amb Astro. HTML i CSS estàtics, sense fonts externes. Inclou GA4 (`G-74BVLBQ1QH`) amb cookies d’analítica activades per defecte (`analytics_storage: granted`), sense cartell de cookies. L’emmagatzematge publicitari, Google Signals i personalització publicitària continuen desactivats.

L’analítica només es carrega a `bobgoo.com` i `www.bobgoo.com`, per excloure les previsualitzacions locals. La verificació de cookies al navegador i recepció d’esdeveniments a GA4 queda pendent del desplegament i l’accés a la propietat.

## Desenvolupament

Node 24 (`nvm use` si fas servir nvm).

```sh
npm ci
npm run dev
```

`npm run build` genera `dist/`. `npm run preview` permet revisar el resultat compilat.

## Publicació al GitHub Pages existent

Repositori: https://github.com/angelsubirana/bobgoo. Branca de publicació: `gh-pages`. Cada push executa `.github/workflows/deploy.yml`: instal·la dependències, compila Astro i publica `dist/` amb GitHub Actions.

1. Revisar el text, l’adreça `hi@bobgoo.com` i la informació de privacitat.
2. La pàgina `/privacy/` conserva íntegrament el text de la política antiga, amb la data d’edició actualitzada a 2026-10-26 i la presentació adaptada al disseny nou.
3. Aquesta carpeta està vinculada al repositori existent i conserva l’historial anterior a la migració.
4. Per publicar actualitzacions, crear el commit i fer push a `gh-pages` només amb autorització explícita de l’usuari.
5. A **Settings → Pages → Build and deployment → Source**, seleccionar **GitHub Actions** i executar el workflow si cal.
6. Mantenir el domini personalitzat **bobgoo.com** i comprovar HTTPS. `public/CNAME` i `astro.config.mjs` ja utilitzen aquest domini.
7. Comprovar que `https://www.bobgoo.com` redirigeixi directament a `https://bobgoo.com/`, sense passar per HTTP. La configuració de DNS/Cloudflare i Pages es revisa a part del codi.

Si es decideix publicar des de `main`, canviar abans la branca a `.github/workflows/deploy.yml`.

La carpeta `/Users/angelsubirana/Documents/web/bobgoo` es conserva intacta com a històric. Es mantenen els fitxers de verificació de Google i `app-ads.txt` a `public/`, així com l’accés antic `/privacy.html`, que porta a `/privacy/`.
