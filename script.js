const viewers = [120, 135, 140, 115, 130];
viewers.push(150); // přidá počet diváků na novém představení
console.log(viewers); // výsledek: [120, 135, 140, 115, 130, 150]

const occupancyRates = [0.75, 0.85, 0.9, 0.8, 0.95];
occupancyRates.pop(); // odstraní poslední hodnotu
console.log(occupancyRates); // výsledek: [0.75, 0.85, 0.9, 0.8]

const plays = ["Romeo a Julie", "Hamlet", "Plyšáci na útěku", "Othello"];
const secondPlay = plays[1]; // uloží druhé představení, tedy "Hamlet"
console.log(secondPlay); // výsledek: "Hamlet"

const reviews = [
    { magazine: "Theater Weekly", rating: 8 },
    { magazine: "Drama Review", rating: 9 },
    { magazine: "Art Critics", rating: 7 },
    { magazine: "Stage and Screen", rating: 8 },
  ];
  console.log(reviews);