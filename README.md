# LAILa:s hemsida

## Projektstruktur

Kort förklaring över de viktigaste filerna/katalogerna från roten av projektet:

```sh
├── config.toml # Global konfiguration för zola.
├── content     # Alla markdown-filer. För det mesta behöver du bara pilla här!
├── sass        # Global stil för hemsidan. sass-filer som kompileras till css.
├── static      # Endast lätta bilder/typsnitt. Tyngre filer ligger direkt på webbservern.
└── templates   # HTML-templates som markdown-innehållet trycks genom.
```

All markdown, därmed brödtext, skrivs i `content`.

## Utveckling

[`zola`](https://www.getzola.org/documentation/getting-started/overview/) används för att generera HTML från markdown. Kan installeras på ett [flertal sätt](https://www.getzola.org/documentation/getting-started/installation/).

För att köra en live-uppdaterande förhandsgranskning av hemsidan, kör:

```sh
zola serve
```

Du kan nu gå till http://localhost:1111 för att se lokala tillståndet av hemsidan.

För att bygga produktionsfärdig html, kör:

```sh
zola build
```
