const paimonImages = [
	"https://i.pinimg.com/originals/07/8f/de/078fded932c989e64e8cb1fe17677530.png",
	"https://cdn.donmai.us/original/e6/d4/e6d4a39deb7570b61ac3ac3e0206b7f8.png",
	"https://i.pinimg.com/originals/ab/b8/d1/abb8d166d497a191faeb8d31a02b8098.png",
	"https://i.pinimg.com/originals/37/06/7d/37067db6ba452ac8a76725ebf8a3f906.png",
	"https://pbs.twimg.com/media/FiF4fOzaUAEgGQi.png",
	"https://art.pixilart.com/thumb/sr290240d326416.png",
	"https://upload-os-bbs.hoyolab.com/upload/2021/09/14/13660135/e70c25ce24833579d6c7d660e05dfaaf_7243112580882799445.png?x-oss-process=image/resize,s_1000/quality,q_80/auto-orient,0/interlace,1/format,png"
];

const imgs = document.querySelectorAll("img");
imgs.forEach((img) => {
	const randomImage = paimonImages[Math.floor(Math.random() * paimonImages.length)];
	img.src = randomImage;
});

const randomTitles = [
	"วันนี้ Paimon จะกินอะไร",
	"คลิปอะไรวะ Paimon งง",
	"เห้ย ส่งปลาดุกย่างมาให้ Paimon เดี๋ยวนี้",
	"Random Image ของ Paimon",
	"สุ่มชื่อคลิปนี้ Paimon ก็โอเค",
	"น้อง Paimon เต้น (ซะเมื่อไหร่)"
];

const titles = document.querySelectorAll(".entry-title");
titles.forEach((title) => {
	const randomTitle = randomTitles[Math.floor(Math.random() * randomTitles.length)];
	title.innerText = randomTitle;
});