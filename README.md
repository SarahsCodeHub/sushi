# Testaufgabe Sushi-Restaurant

## Autorin
Sarah Michaelsen
sarah.michaelsen@yahoo.com

## :sparkles: Projekt anschalten und benutzen :sparkles:
`nvm use` <br />
`yarn add` <br />
`yarn run dev` <br />

... und los gehts unter http://localhost:5173/

## Projekt testen :monocle_face:
`yarn test`

## Projekthistorie :scroll:
`git log` :)

## Womit ist es gebaut :wrench:
- Vue 3 + Vite
- Vitest

## (Theoretische) Annahmen
- die Größe der Gruppe ist gleichverteilt, d.h. eine Gruppe mit bspw. 1 Menschen ist genauso wahrscheinlich wie eine Gruppe mit bspw. 4 Menschen
- colorHash ist natürlich nciht unique, aber für diesen UseCase reicht es zunächst. es wäre keine zwar ein Bug, aber ich erwarte nicht so oft oder so schnell eine Dopplung
- Annahme: es ist optimal, die Leute in die kleinste passende Lücke zu setzen.... Aber bewiesen habe ichs hiermit nicht :woman_shrugging:

## Dinge, die ich noch gemacht hätte, aber aufgrund der Zeit gelassen habe 
- Button zurück zum Restaurant-Konfigurator vom Restaurant aus
- ausführlichere Begründung in der Readme
- Vielleicht via Netlify deployen