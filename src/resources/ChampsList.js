const route = "src/assets/champs/"

const championsList = [
  {
    name: "Aatrox",
    portrait: route+"aatrox.webp",
    role: "Baron",
    tier: "S+"
  },
  {
    name: "Ahri",
    portrait: route+"ahri.webp",
    role: "Mid",
    tier: "S"
  },
  {
    name: "Akali",
    portrait: route+"akali.webp",
    role: "Mid",
    tier: "S"
  },
  {
    name: "Akshan",
    portrait: route+"akshan.webp",
    role: "Mid",
    tier: "A"
  },
  {
    name: "Alistar",
    portrait: route+"alistar.webp",
    role: "Support",
    tier: "A"
  },
  {
    name: "Amumu",
    portrait: route+"amumu.webp",
    role: "Jungle",
    tier: "B"
  },
  {
    name: "Annie",
    portrait: route+"annie.webp",
    role: "Mid",
    tier: "B"
  },
  {
    name: "Ashe",
    portrait: route+"ashe.webp",
    role: "Dragon",
    tier: "B"
  },
  {
    name: "Aurelion Sol",
    portrait: route+"aurelion-sol.webp",
    role: "Mid",
    tier: "S+"
  },
  {
    name: "Blitzcrank",
    portrait: route+"blitzcrank.webp",
    role: "Support",
    tier: "A" 
  },
  {
    name: "Brand",
    portrait: route+"brand.webp",
    role: "Mid",
    tier: "A"
  },
  {
    name: "Braum",
    portrait: route+"braum.webp",
    role: "Support",
    tier: "A"
  },
  {
    name: "Caitlyn",
    portrait: route+"caitlyn.webp",
    role: "Dragon",
    tier: "S+"
  },
  {
    name: "Camille",
    portrait: route+"camille.webp",
    role: "Baron",
    tier: "S+"
  },
  {
    name: "Corki",
    portrait: route+"corki.webp",
    role: "Mid",
    tier: "B"
  },
  {
    name: "Darius",
    portrait: route+"darius.webp",
    role: "Baron",
    tier: "S"
  },
  {
    name: "Diana",
    portrait: route+"diana.webp",
    role: "Jungle",
    tier: "A"
  },
  {
    name: "Dr. Mundo",
    portrait: route+"dr-mundo.webp",
    role: "Baron",
    tier: "S"
  },
  {
    name: "Draven",
    portrait: route+"draven.webp",
    role: "Dragon",
    tier: "A"
  },
  {
    name: "Ekko",
    portrait: route+"ekko.webp",
    role: "Jungle",
    tier: "A"
  },
  {
    name: "Evelynn",
    portrait: route+"evelynn.webp",
    role: "Jungle",
    tier: "S+"
  },
  {
    name: "Ezreal",
    portrait: route+"ezreal.webp",
    role: "Dragon",
    tier: "S"
  },
  {
    name: "Fiddlesticks",
    portrait: route+"fiddlesticks.webp",
    role: "Jungle",
    tier: "A"
  },
  {
    name: "Fiora",
    portrait: route+"fiora.webp",
    role: "Baron",
    tier: "S+"
  },
  {
    name: "Fizz",
    portrait: route+"fizz.webp",
    role: "Mid",
    tier: "A" 
  },
  {
    name: "Galio",
    portrait: route+"galio.webp",
    role: "Mid",
    tier: "A"
  },
  {
    name: "Garen",
    portrait: route+"garen.webp",
    role: "Baron",
    tier: "S"
  },
  {
    name: "Gragas",
    portrait: route+"gragas.webp",
    role: "Jungle",
    tier: "S" 
  },
  {
    name: "Graves",
    portrait: route+"graves.webp",
    role: "Jungle",
    tier: "B"
  },
  {
    name: "Gwen",
    portrait: route+"gwen.webp",
    role: "Baron",
    tier: "S"
  },
  {
    name: "Hecarim",
    portrait: route+"hecarim.webp",
    role: "Jungle",
    tier: "S+"
  },
  {
    name: "Irelia",
    portrait: route+"irelia.webp",
    role: "Baron",
    tier: "S"
  },
  {
    name: "Janna",
    portrait: route+"janna.webp",
    role: "Support",
    tier: "S"
  },
  {
    name: "Jarvan IV",
    portrait: route+"jarvan-iv.webp",
    role: "Jungle",
    tier: "S"
  },
  {
    name: "Jax",
    portrait: route+"jax.webp",
    role: "Baron",
    tier: "S+"
  },
  {
    name: "Jayce",
    portrait: route+"jayce.webp",
    role: "Baron",
    tier: "S+"
  },
  {
    name: "Jhin",
    portrait: route+"jhin.webp",
    role: "Dragon",
    tier: "A"
  },
  {
    name: "Jinx",
    portrait: route+"jinx.webp",
    role: "Dragon",
    tier: "A"
  },
  {
    name: "Kai'Sa",
    portrait: route+"kaisa.webp",
    role: "Dragon",
    tier: "B"
  },
  {
    name: "Karma",
    portrait: route+"karma.webp",
    role: "Support",
    tier: "S"
  },
  {
    name: "Kassadin",
    portrait: route+"kassadin.webp",
    role: "Mid",
    tier: "S+"
  },
  {
    name: "Katarina",
    portrait: route+"katarina.webp",
    role: "Mid",
    tier: "A"
  },
  {
    name: "Kayle",
    portrait: route+"kayle.webp",
    role: "Baron",
    tier: "A"
  },
  {
    name: "Kayn",
    portrait: route+"kayn.webp",
    role: "Jungle",
    tier: "S+"
  },
  {
    name: "Kennen",
    portrait: route+"kennen.webp",
    role: "Baron",
    tier: "A"
  },
  {
    name: "Kha'Zix",
    portrait: route+"khazix.webp",
    role: "Jungle",
    tier: "S+"
  },
  {
    name: "Kindred",
    portrait: route+"kindred.webp",
    role: "Jungle",
    tier: "A"
  },
  {
    name: "Lee Sin",
    portrait: route+"lee-sin.webp",
    role: "Jungle",
    tier: "S+"
  },
  {
    name: "Leona",
    portrait: route+"leona.webp",
    role: "Support",
    tier: "S"
  },
  {
    name: "Lillia",
    portrait: route+"lillia.webp",
    role: "Jungle",
    tier: "B"
  },
  {
    name: "Lucian",
    portrait: route+"lucian.webp",
    role: "Dragon",
    tier: "S"
  },
  {
    name: "Lulu",
    portrait: route+"lulu.webp",
    role: "Support",
    tier: "S"
  },
  {
    name: "Lux",
    portrait: route+"lux.webp",
    role: "Mid",
    tier: "S+"
  },
  {
    name: "Malphite",
    portrait: route+"malphite.webp",
    role: "Baron",
    tier: "A"
  },
  {
    name: "Master Yi",
    portrait: route+"master-yi.webp",
    role: "Jungle",
    tier: "A" 
  },
  {
    name: "Miss Fortune",
    portrait: route+"miss-fortune.webp",
    role: "Dragon",
    tier: "A"
  },
  {
    name: "Morgana",
    portrait: route+"morgana.webp",
    role: "Support",
    tier: "A"
  },
{
  name: "Nami",
  portrait: route + "nami.webp",
  role: "Support",
  tier: "A"
},
{
  name: "Nasus",
  portrait: route + "nasus.webp",
  role: "Baron",
  tier: "B"
},
{
  name: "Nautilus",
  portrait: route + "nautilus.webp",
  role: "Support",
  tier: "S+"
},
{
  name: "Nilah",
  portrait: route + "nilah.webp",
  role: "Dragon",
  tier: "B"
},
{
  name: "Nunu & Willump",
  portrait: route + "nunu-and-willump.webp",
  role: "Jungle",
  tier: "A"
},
{
  name: "Olaf",
  portrait: route + "olaf.webp",
  role: "Jungle",
  tier: "B"
},
{
  name: "Orianna",
  portrait: route + "orianna.webp",
  role: "Mid",
  tier: "A"
},
{
  name: "Ornn",
  portrait: route + "ornn.webp",
  role: "Baron",
  tier: "S"
},
{
  name: "Pantheon",
  portrait: route + "pantheon.webp",
  role: "Baron",
  tier: "A"
},
{
  name: "Pyke",
  portrait: route + "pyke.webp",
  role: "Support",
  tier: "S+"
},
{
  name: "Rakan",
  portrait: route + "rakan.webp",
  role: "Support",
  tier: "S" 
},
{
  name: "Rammus",
  portrait: route + "rammus.webp",
  role: "Jungle",
  tier: "B"
},
{
  name: "Renekton",
  portrait: route + "renekton.webp",
  role: "Baron",
  tier: "S+"
},
{
  name: "Rengar",
  portrait: route + "rengar.webp",
  role: "Jungle",
  tier: "A"
},
{
  name: "Riven",
  portrait: route + "riven.webp",
  role: "Baron",
  tier: "A"
},
{
  name: "Samira",
  portrait: route + "samira.webp",
  role: "Dragon",
  tier: "S"
},
{
  name: "Senna",
  portrait: route + "senna.webp",
  role: "Support",
  tier: "A"
},
{
  name: "Seraphine",
  portrait: route + "seraphine.webp",
  role: "Support",
  tier: "B"
},
{
  name: "Sett",
  portrait: route + "sett.webp",
  role: "Baron",
  tier: "S"
},
{
  name: "Shen",
  portrait: route + "shen.webp",
  role: "Baron",
  tier: "A"
},
{
  name: "Shyvana",
  portrait: route + "shyvana.webp",
  role: "Jungle",
  tier: "B" 
},
{ 
  name: "Singed",
  portrait: route + "singed.webp",
  role: "Baron",
  tier: "B"
},
{
  name: "Sion",
  portrait: route + "sion.webp",
  role: "Baron",
  tier: "S"
},
{
  name: "Sivir",
  portrait: route + "sivir.webp",
  role: "Dragon",
  tier: "S"
},

{
  name: "Sona",
  portrait: route + "sona.webp",
  role: "Support",
  tier: "S"
},
{
  name: "Soraka",
  portrait: route + "soraka.webp",
  role: "Support",
  tier: "S+"
},
{
  name: "Swain",
  portrait: route + "swain.webp",
  role: "Mid",
  tier: "A"
},
{
  name: "Syndra",
  portrait: route + "syndra.webp",
  role: "Mid",
  tier: "S+"
},
{
  name: "Talon",
  portrait: route + "talon.webp",
  role: "Mid",
  tier: "S+"
},
{
  name: "Teemo",
  portrait: route + "teemo.webp",
  role: "Baron",
  tier: "A"
},
{
  name: "Thresh",
  portrait: route + "thresh.webp",
  role: "Support",
  tier: "A"
},
{
  name: "Tristana",
  portrait: route + "tristana.webp",
  role: "Dragon",
  tier: "S"
},
{
  name: "Tryndamere",
  portrait: route + "tryndamere.webp",
  role: "Baron",
  tier: "B" 
},
{
  name: "Twisted Fate",
  portrait: route + "twisted-fate.webp",
  role: "Mid",
  tier: "A"
},
{
  name: "Twitch",
  portrait: route + "twitch.webp",
  role: "Dragon",
  tier: "B"
},
{
  name: "Urgot",
  portrait: route + "urgot.webp",
  role: "Baron",
  tier: "S+"
},
{
  name: "Varus",
  portrait: route + "varus.webp",
  role: "Dragon",
  tier: "B" 
},
{
  name: "Vayne",
  portrait: route + "vayne.webp",
  role: "Dragon",
  tier: "A"
},
{
  name: "Veigar",
  portrait: route + "veigar.webp",
  role: "Mid",
  tier: "A"
},
{
  name: "Vex",
  portrait: route + "vex.webp",
  role: "Mid",
  tier: "S"
},
{
  name: "Vi",
  portrait: route + "vi.webp",
  role: "Jungle",
  tier: "A"
},
{
  name: "Vladimir",
  portrait: route + "vladimir.webp",
  role: "Mid",
  tier: "S+"
},
{
  name: "Volibear",
  portrait: route + "volibear.webp",
  role: "Jungle",
  tier: "B"
},
{
  name: "Warwick",
  portrait: route + "warwick.webp",
  role: "Jungle",
  tier: "B"
},
{
  name: "Wukong",
  portrait: route + "wukong.webp",
  role: "Jungle",
  tier: "S" 
},
{
  name: "Xayah",
  portrait: route + "xayah.webp",
  role: "Dragon",
  tier: "S"
},

]

export default championsList